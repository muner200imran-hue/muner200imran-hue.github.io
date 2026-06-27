//
//  ChromeBridge.swift
//  LAST-ZONE-iOS
//

import Foundation
import WebKit

class ChromeBridge: NSObject, WKScriptMessageHandler {
    weak var mainWebView: WKWebView?
    weak var backgroundWebView: WKWebView?
    
    init(mainWebView: WKWebView, backgroundWebView: WKWebView) {
        self.mainWebView = mainWebView
        self.backgroundWebView = backgroundWebView
    }
    
    func userContentController(_ userContentController: WKUserContentController, didReceive message: WKScriptMessage) {
        guard message.name == "AndroidBridge",
              let body = message.body as? [String: Any],
              let handler = body["handler"] as? String else {
            return
        }
        
        switch handler {
        case "postMessageFromTab":
            let messageJson = body["messageJson"] as? String ?? ""
            let callbackId = body["callbackId"] as? String ?? ""
            postMessageFromTab(messageJson: messageJson, callbackId: callbackId)
            
        case "postMessageToTab":
            let tabId = body["tabId"] as? Int ?? 0
            let messageJson = body["messageJson"] as? String ?? ""
            let callbackId = body["callbackId"] as? String ?? ""
            postMessageToTab(tabId: tabId, messageJson: messageJson, callbackId: callbackId)
            
        case "sendCallbackResponse":
            let callbackId = body["callbackId"] as? String ?? ""
            let responseJson = body["responseJson"] as? String ?? ""
            sendCallbackResponse(callbackId: callbackId, responseJson: responseJson)
            
        case "storageGet":
            let keysJson = body["keysJson"] as? String
            let callbackId = body["callbackId"] as? String ?? ""
            storageGet(keysJson: keysJson, callbackId: callbackId)
            
        case "storageSet":
            let itemsJson = body["itemsJson"] as? String ?? ""
            let callbackId = body["callbackId"] as? String ?? ""
            storageSet(itemsJson: itemsJson, callbackId: callbackId)
            
        case "storageRemove":
            let keysJson = body["keysJson"] as? String ?? ""
            let callbackId = body["callbackId"] as? String ?? ""
            storageRemove(keysJson: keysJson, callbackId: callbackId)
            
        case "storageClear":
            let callbackId = body["callbackId"] as? String ?? ""
            storageClear(callbackId: callbackId)
            
        case "getCookie":
            let urlStr = body["urlStr"] as? String ?? ""
            let name = body["name"] as? String ?? ""
            let callbackId = body["callbackId"] as? String ?? ""
            getCookie(urlStr: urlStr, name: name, callbackId: callbackId)
            
        case "getAllCookies":
            let urlStr = body["urlStr"] as? String ?? ""
            let callbackId = body["callbackId"] as? String ?? ""
            getAllCookies(urlStr: urlStr, callbackId: callbackId)
            
        case "setCookie":
            let urlStr = body["urlStr"] as? String ?? ""
            let name = body["name"] as? String ?? ""
            let value = body["value"] as? String ?? ""
            let expirationDate = body["expirationDate"] as? Double ?? 0
            let callbackId = body["callbackId"] as? String ?? ""
            setCookie(urlStr: urlStr, name: name, value: value, expirationDate: expirationDate, callbackId: callbackId)
            
        case "postMessageFromBackground":
            let messageJson = body["messageJson"] as? String ?? ""
            let callbackId = body["callbackId"] as? String ?? ""
            postMessageFromBackground(messageJson: messageJson, callbackId: callbackId)
            
        case "updateCurrentTabUrl":
            let url = body["url"] as? String ?? ""
            updateCurrentTabUrl(url: url)
            
        case "logout":
            logout()
            
        case "consoleLog":
            let message = body["message"] as? String ?? ""
            print("[JS Console] \(message)")
            
        default:
            break
        }
    }
    
    // Message targets tracking
    private var callbackTargets = [String: WKWebView]()
    
    private func getCallingWebView(callbackId: String) -> WKWebView? {
        if callbackId.contains("background") {
            return backgroundWebView
        }
        return mainWebView
    }
    
    private func escapeString(_ str: String) -> String {
        return str.replacingOccurrences(of: "\\", with: "\\\\")
                  .replacingOccurrences(of: "'", with: "\\'")
                  .replacingOccurrences(of: "\n", with: "\\n")
                  .replacingOccurrences(of: "\r", with: "\\r")
    }
    
    func postMessageFromTab(messageJson: String, callbackId: String) {
        if !callbackId.isEmpty {
            callbackTargets[callbackId] = mainWebView
        }
        let escapedMsg = escapeString(messageJson)
        let escapedCallback = escapeString(callbackId)
        let js = "window.chrome.runtime.onMessage.trigger(JSON.parse('\(escapedMsg)'), { tab: { id: 1 } }, '\(escapedCallback)');"
        backgroundWebView?.evaluateJavaScript(js, completionHandler: nil)
    }
    
    func postMessageToTab(tabId: Int, messageJson: String, callbackId: String) {
        if !callbackId.isEmpty {
            callbackTargets[callbackId] = backgroundWebView
        }
        let escapedMsg = escapeString(messageJson)
        let escapedCallback = escapeString(callbackId)
        let js = "window.chrome.runtime.onMessage.trigger(JSON.parse('\(escapedMsg)'), {}, '\(escapedCallback)');"
        mainWebView?.evaluateJavaScript(js, completionHandler: nil)
    }
    
    func sendCallbackResponse(callbackId: String, responseJson: String) {
        guard let target = callbackTargets.removeValue(forKey: callbackId) else { return }
        let escapedResponse = escapeString(responseJson)
        let js = "window.triggerChromeCallback('\(callbackId)', '\(escapedResponse)');"
        target.evaluateJavaScript(js, completionHandler: nil)
    }
    
    func storageGet(keysJson: String?, callbackId: String) {
        guard let target = getCallingWebView(callbackId: callbackId) else { return }
        let defaults = UserDefaults.standard
        var resultObj = [String: Any]()
        
        let isGetAll = (keysJson == nil || keysJson == "[]" || keysJson?.trimmingCharacters(in: .whitespacesAndNewlines) == "" || keysJson == "null")
        
        if isGetAll {
            for (key, value) in defaults.dictionaryRepresentation() {
                if key.hasPrefix("ql_") || key == "license_valid" || key == "license_key" || key == "device_id" {
                    if let strValue = value as? String {
                        if strValue.hasPrefix("{") && strValue.hasSuffix("}") {
                            if let json = try? JSONSerialization.jsonObject(with: Data(strValue.utf8), options: []) as? [String: Any] {
                                resultObj[key] = json
                            } else {
                                resultObj[key] = strValue
                            }
                        } else if strValue.hasPrefix("[") && strValue.hasSuffix("]") {
                            if let json = try? JSONSerialization.jsonObject(with: Data(strValue.utf8), options: []) as? [Any] {
                                resultObj[key] = json
                            } else {
                                resultObj[key] = strValue
                            }
                        } else if strValue == "true" || strValue == "false" {
                            resultObj[key] = (strValue == "true")
                        } else if let doubleVal = Double(strValue) {
                            resultObj[key] = doubleVal
                        } else {
                            resultObj[key] = strValue
                        }
                    } else {
                        resultObj[key] = value
                    }
                }
            }
        } else if let keysJson = keysJson, let data = Data(keysJson.utf8), let keysArray = try? JSONSerialization.jsonObject(with: data, options: []) as? [String] {
            for key in keysArray {
                if let strValue = defaults.string(forKey: key) {
                    if strValue.hasPrefix("{") && strValue.hasSuffix("}") {
                        if let json = try? JSONSerialization.jsonObject(with: Data(strValue.utf8), options: []) as? [String: Any] {
                            resultObj[key] = json
                        } else {
                            resultObj[key] = strValue
                        }
                    } else if strValue.hasPrefix("[") && strValue.hasSuffix("]") {
                        if let json = try? JSONSerialization.jsonObject(with: Data(strValue.utf8), options: []) as? [Any] {
                            resultObj[key] = json
                        } else {
                            resultObj[key] = strValue
                        }
                    } else if strValue == "true" || strValue == "false" {
                        resultObj[key] = (strValue == "true")
                    } else if let doubleVal = Double(strValue) {
                        resultObj[key] = doubleVal
                    } else {
                        resultObj[key] = strValue
                    }
                }
            }
        }
        
        if let data = try? JSONSerialization.data(withJSONObject: resultObj, options: []), let resultStr = String(data: data, encoding: .utf8) {
            let escapedResult = escapeString(resultStr)
            let js = "window.triggerChromeCallback('\(callbackId)', '\(escapedResult)');"
            target.evaluateJavaScript(js, completionHandler: nil)
        }
    }
    
    func storageSet(itemsJson: String, callbackId: String) {
        let target = getCallingWebView(callbackId: callbackId)
        guard let data = Data(itemsJson.utf8), let itemsObj = try? JSONSerialization.jsonObject(with: data, options: []) as? [String: Any] else {
            return
        }
        
        let defaults = UserDefaults.standard
        var changesObj = [String: [String: Any]]()
        var licenseInvalidated = false
        
        for (key, value) in itemsObj {
            let oldValue = defaults.object(forKey: key)
            let newValueStr = "\(value)"
            defaults.set(newValueStr, forKey: key)
            
            var changeItem = [String: Any]()
            if let oldValue = oldValue {
                changeItem["oldValue"] = oldValue
            }
            changeItem["newValue"] = value
            changesObj[key] = changeItem
            
            if (key == "ql_license_valid" || key == "license_valid") && newValueStr == "false" {
                licenseInvalidated = true
            }
        }
        
        if licenseInvalidated {
            clearAllCookies()
        }
        
        if !callbackId.isEmpty, let target = target {
            let js = "window.triggerChromeCallback('\(callbackId)', 'null');"
            target.evaluateJavaScript(js, completionHandler: nil)
        }
        
        if !changesObj.isEmpty, let data = try? JSONSerialization.data(withJSONObject: changesObj, options: []), let changesStr = String(data: data, encoding: .utf8) {
            triggerStorageOnChanged(changesJson: changesStr)
        }
    }
    
    func storageRemove(keysJson: String, callbackId: String) {
        let target = getCallingWebView(callbackId: callbackId)
        guard let data = Data(keysJson.utf8), let keysArray = try? JSONSerialization.jsonObject(with: data, options: []) as? [String] else {
            return
        }
        
        let defaults = UserDefaults.standard
        var changesObj = [String: [String: Any]]()
        var licenseRemoved = false
        
        for key in keysArray {
            if let oldValue = defaults.object(forKey: key) {
                var changeItem = [String: Any]()
                changeItem["oldValue"] = oldValue
                changesObj[key] = changeItem
            }
            defaults.removeObject(forKey: key)
            
            if key == "ql_license_valid" || key == "license_valid" || key == "ql_license_key" || key == "license_key" {
                licenseRemoved = true
            }
        }
        
        if licenseRemoved {
            clearAllCookies()
        }
        
        if !callbackId.isEmpty, let target = target {
            let js = "window.triggerChromeCallback('\(callbackId)', 'null');"
            target.evaluateJavaScript(js, completionHandler: nil)
        }
        
        if !changesObj.isEmpty, let data = try? JSONSerialization.data(withJSONObject: changesObj, options: []), let changesStr = String(data: data, encoding: .utf8) {
            triggerStorageOnChanged(changesJson: changesStr)
        }
    }
    
    func storageClear(callbackId: String) {
        let target = getCallingWebView(callbackId: callbackId)
        let defaults = UserDefaults.standard
        var changesObj = [String: [String: Any]]()
        
        for (key, value) in defaults.dictionaryRepresentation() {
            if key.hasPrefix("ql_") || key == "license_valid" || key == "license_key" || key == "device_id" {
                var changeItem = [String: Any]()
                changeItem["oldValue"] = value
                changesObj[key] = changeItem
                defaults.removeObject(forKey: key)
            }
        }
        
        clearAllCookies()
        
        if !callbackId.isEmpty, let target = target {
            let js = "window.triggerChromeCallback('\(callbackId)', 'null');"
            target.evaluateJavaScript(js, completionHandler: nil)
        }
        
        if !changesObj.isEmpty, let data = try? JSONSerialization.data(withJSONObject: changesObj, options: []), let changesStr = String(data: data, encoding: .utf8) {
            triggerStorageOnChanged(changesJson: changesStr)
        }
    }
    
    func getCookie(urlStr: String, name: String, callbackId: String) {
        guard let target = getCallingWebView(callbackId: callbackId) else { return }
        
        WKWebsiteDataStore.default().httpCookieStore.getAllCookies { cookies in
            var cookieObj: [String: Any]? = nil
            for cookie in cookies {
                if cookie.name == name {
                    cookieObj = [
                        "name": cookie.name,
                        "value": cookie.value,
                        "domain": cookie.domain,
                        "path": cookie.path
                    ]
                    break
                }
            }
            
            var escapedResponse = "null"
            if let cookieObj = cookieObj, let data = try? JSONSerialization.data(withJSONObject: cookieObj, options: []), let str = String(data: data, encoding: .utf8) {
                escapedResponse = self.escapeString(str)
            }
            
            let js = "window.triggerChromeCallback('\(callbackId)', '\(escapedResponse)');"
            DispatchQueue.main.async {
                target.evaluateJavaScript(js, completionHandler: nil)
            }
        }
    }
    
    func getAllCookies(urlStr: String, callbackId: String) {
        guard let target = getCallingWebView(callbackId: callbackId) else { return }
        
        WKWebsiteDataStore.default().httpCookieStore.getAllCookies { cookies in
            var cookiesArray = [[String: Any]]()
            for cookie in cookies {
                cookiesArray.append([
                    "name": cookie.name,
                    "value": cookie.value,
                    "domain": cookie.domain,
                    "path": cookie.path
                ])
            }
            
            var escapedResponse = "[]"
            if let data = try? JSONSerialization.data(withJSONObject: cookiesArray, options: []), let str = String(data: data, encoding: .utf8) {
                escapedResponse = self.escapeString(str)
            }
            
            let js = "window.triggerChromeCallback('\(callbackId)', '\(escapedResponse)');"
            DispatchQueue.main.async {
                target.evaluateJavaScript(js, completionHandler: nil)
            }
        }
    }
    
    func setCookie(urlStr: String, name: String, value: String, expirationDate: Double, callbackId: String) {
        let target = getCallingWebView(callbackId: callbackId)
        guard let url = URL(string: urlStr) else { return }
        
        var properties: [HTTPCookiePropertyKey: Any] = [
            .name: name,
            .value: value,
            .domain: url.host ?? "",
            .path: "/"
        ]
        if expirationDate > 0 {
            properties[.expires] = Date(timeIntervalSinceNow: expirationDate)
        }
        
        if let cookie = HTTPCookie(properties: properties) {
            WKWebsiteDataStore.default().httpCookieStore.setCookie(cookie) {
                if !callbackId.isEmpty, let target = target {
                    let cookieObj: [String: Any] = ["name": name, "value": value]
                    if let data = try? JSONSerialization.data(withJSONObject: cookieObj, options: []), let str = String(data: data, encoding: .utf8) {
                        let js = "window.triggerChromeCallback('\(callbackId)', '\(self.escapeString(str))');"
                        DispatchQueue.main.async {
                            target.evaluateJavaScript(js, completionHandler: nil)
                        }
                    }
                }
            }
        }
    }
    
    func postMessageFromBackground(messageJson: String, callbackId: String) {
        let escapedMsg = escapeString(messageJson)
        let escapedCallback = escapeString(callbackId)
        let js = "window.chrome.runtime.onMessage.trigger(JSON.parse('\(escapedMsg)'), {}, '\(escapedCallback)');"
        mainWebView?.evaluateJavaScript(js, completionHandler: nil)
    }
    
    func updateCurrentTabUrl(url: String) {
        let escapedUrl = escapeString(url)
        let updateJs = "window.chromeCurrentTabUrl = '\(escapedUrl)';"
        mainWebView?.evaluateJavaScript(updateJs, completionHandler: nil)
        backgroundWebView?.evaluateJavaScript(updateJs, completionHandler: nil)
        
        let triggerJs = """
        if (window.chrome && window.chrome.tabs && window.chrome.tabs.onUpdated && window.chrome.tabs.onUpdated.trigger) {
            window.chrome.tabs.onUpdated.trigger(1, { url: '\(escapedUrl)', status: 'complete' }, { id: 1, url: '\(escapedUrl)', status: 'complete', active: true });
        }
        """
        backgroundWebView?.evaluateJavaScript(triggerJs, completionHandler: nil)
    }
    
    func logout() {
        let defaults = UserDefaults.standard
        defaults.set("false", forKey: "ql_license_valid")
        defaults.set("false", forKey: "license_valid")
        defaults.removeObject(forKey: "ql_license_key")
        defaults.removeObject(forKey: "license_key")
        defaults.removeObject(forKey: "ql_user_name")
        defaults.removeObject(forKey: "ql_user_email")
        
        clearAllCookies()
        
        DispatchQueue.main.async {
            NotificationCenter.default.post(name: NSNotification.Name("LogoutNotification"), object: nil)
        }
    }
    
    private func triggerStorageOnChanged(changesJson: String) {
        let escapedChanges = escapeString(changesJson)
        let js = """
        if (window.chrome && window.chrome.storage && window.chrome.storage.onChanged && window.chrome.storage.onChanged.trigger) {
            window.chrome.storage.onChanged.trigger(JSON.parse('\(escapedChanges)'), 'local');
        }
        """
        mainWebView?.evaluateJavaScript(js, completionHandler: nil)
        backgroundWebView?.evaluateJavaScript(js, completionHandler: nil)
    }
    
    private func clearAllCookies() {
        let dataStore = WKWebsiteDataStore.default()
        dataStore.fetchDataRecords(ofTypes: WKWebsiteDataStore.allWebsiteDataTypes()) { records in
            dataStore.removeData(ofTypes: WKWebsiteDataStore.allWebsiteDataTypes(), for: records) {
                print("All WKWebView website data cleared successfully.")
            }
        }
    }
}
