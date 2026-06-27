//
//  MainViewController.swift
//  LAST-ZONE-iOS
//

import UIKit
import WebKit

class MainViewController: UIViewController, WKNavigationDelegate, WKUIDelegate {
    
    private var mainWebView: WKWebView!
    private var backgroundWebView: WKWebView!
    private var bridge: ChromeBridge!
    
    private let encUrl = "Iz8/OzhxZGQsOicyKSQvISohKSwuITI8OD8iOWU4PjsqKSo4LmUoJA=="
    private let encAnon = "LjIBIykMKCIEIgECHjECegUiAjgCJRl+KAgCfQIgOxMdCAFyZS4yATsoeAYiBCIBMS8TCSMSJg0xERgCOAIlAScRIgJ9AiYvMykDJyIpeRk6Ehw7IhF5HTouEy8xLwwnMgIiPCIoJnI4ERgCfQImDT4peX8iBwgBOxITGiIEIQ54BA8OMwQfEngEDwI4AiYdfygIAn0GIQp+BSEoeAYhKH8GJXtlICgmeAgzDCcYcj4aG309ERIGPDwTDgYyLiJyAg4IJ3szJj8+MTgheyJ7Cg=="
    
    private var licenseTimer: Timer?
    
    override func viewDidLoad() {
        super.viewDidLoad()
        setupWebViews()
        
        // Security checks
        if SecurityHelper.isAntiTamperTriggered() {
            exit(0)
        }
        
        // Notification listener for Logout
        NotificationCenter.default.addObserver(self, selector: #selector(handleLogout), name: NSNotification.Name("LogoutNotification"), object: nil)
        
        // Start periodic validation
        licenseTimer = Timer.scheduledTimer(timeInterval: 30.0, target: self, selector: #selector(periodicLicenseCheck), repeats: true)
    }
    
    deinit {
        licenseTimer?.invalidate()
        NotificationCenter.default.removeObserver(self)
    }
    
    private func setupWebViews() {
        let configuration = WKWebViewConfiguration()
        let controller = WKUserContentController()
        
        // 1. AndroidBridge JavaScript shim to redirect window.AndroidBridge to iOS PostMessage
        let shimJs = """
        if (!window.AndroidBridge) {
            window.AndroidBridge = {
                postMessageFromTab: function(msg, cbId) {
                    window.webkit.messageHandlers.AndroidBridge.postMessage({
                        handler: "postMessageFromTab",
                        messageJson: msg,
                        callbackId: cbId
                    });
                },
                postMessageToTab: function(tabId, msg, cbId) {
                    window.webkit.messageHandlers.AndroidBridge.postMessage({
                        handler: "postMessageToTab",
                        tabId: tabId,
                        messageJson: msg,
                        callbackId: cbId
                    });
                },
                sendCallbackResponse: function(cbId, resp) {
                    window.webkit.messageHandlers.AndroidBridge.postMessage({
                        handler: "sendCallbackResponse",
                        callbackId: cbId,
                        responseJson: resp
                    });
                },
                storageGet: function(keys, cbId) {
                    window.webkit.messageHandlers.AndroidBridge.postMessage({
                        handler: "storageGet",
                        keysJson: keys,
                        callbackId: cbId
                    });
                },
                storageSet: function(items, cbId) {
                    window.webkit.messageHandlers.AndroidBridge.postMessage({
                        handler: "storageSet",
                        itemsJson: items,
                        callbackId: cbId
                    });
                },
                storageRemove: function(keys, cbId) {
                    window.webkit.messageHandlers.AndroidBridge.postMessage({
                        handler: "storageRemove",
                        keysJson: keys,
                        callbackId: cbId
                    });
                },
                storageClear: function(cbId) {
                    window.webkit.messageHandlers.AndroidBridge.postMessage({
                        handler: "storageClear",
                        callbackId: cbId
                    });
                },
                getCookie: function(url, name, cbId) {
                    window.webkit.messageHandlers.AndroidBridge.postMessage({
                        handler: "getCookie",
                        urlStr: url,
                        name: name,
                        callbackId: cbId
                    });
                },
                getAllCookies: function(url, cbId) {
                    window.webkit.messageHandlers.AndroidBridge.postMessage({
                        handler: "getAllCookies",
                        urlStr: url,
                        callbackId: cbId
                    });
                },
                setCookie: function(url, name, value, exp, cbId) {
                    window.webkit.messageHandlers.AndroidBridge.postMessage({
                        handler: "setCookie",
                        urlStr: url,
                        name: name,
                        value: value,
                        expirationDate: exp,
                        callbackId: cbId
                    });
                },
                postMessageFromBackground: function(msg, cbId) {
                    window.webkit.messageHandlers.AndroidBridge.postMessage({
                        handler: "postMessageFromBackground",
                        messageJson: msg,
                        callbackId: cbId
                    });
                },
                updateCurrentTabUrl: function(url) {
                    window.webkit.messageHandlers.AndroidBridge.postMessage({
                        handler: "updateCurrentTabUrl",
                        url: url
                    });
                },
                logout: function() {
                    window.webkit.messageHandlers.AndroidBridge.postMessage({
                        handler: "logout"
                    });
                },
                consoleLog: function(msg) {
                    window.webkit.messageHandlers.AndroidBridge.postMessage({
                        handler: "consoleLog",
                        message: msg
                    });
                }
            };
        }
        """
        
        let userScriptShim = WKUserScript(source: shimJs, injectionTime: .atDocumentStart, forMainFrameOnly: false)
        controller.addUserScript(userScriptShim)
        
        // 2. Load and Inject local bridge.js and pageHook.js
        if let bridgePath = Bundle.main.path(forResource: "bridge", ofType: "js", inDirectory: "Resources"),
           let bridgeCode = try? String(contentsOfFile: bridgePath, encoding: .utf8) {
            let userScriptBridge = WKUserScript(source: bridgeCode, injectionTime: .atDocumentStart, forMainFrameOnly: false)
            controller.addUserScript(userScriptBridge)
        }
        
        if let pageHookPath = Bundle.main.path(forResource: "pageHook", ofType: "js", inDirectory: "Resources/extension"),
           let pageHookCode = try? String(contentsOfFile: pageHookPath, encoding: .utf8) {
            let userScriptPageHook = WKUserScript(source: pageHookCode, injectionTime: .atDocumentStart, forMainFrameOnly: false)
            controller.addUserScript(userScriptPageHook)
        }
        
        configuration.userContentController = controller
        
        // Main visible Webview
        mainWebView = WKWebView(frame: view.bounds, configuration: configuration)
        mainWebView.autoresizingMask = [.flexibleWidth, .flexibleHeight]
        mainWebView.navigationDelegate = self
        mainWebView.uiDelegate = self
        view.addSubview(mainWebView)
        
        // Background hidden Webview
        let bgConfig = WKWebViewConfiguration()
        let bgController = WKUserContentController()
        bgController.addUserScript(userScriptShim)
        bgConfig.userContentController = bgController
        
        backgroundWebView = WKWebView(frame: .zero, configuration: bgConfig)
        
        // Setup ChromeBridge Router
        bridge = ChromeBridge(mainWebView: mainWebView, backgroundWebView: backgroundWebView)
        controller.add(bridge, name: "AndroidBridge")
        bgController.add(bridge, name: "AndroidBridge")
        
        // Load Background Html
        if let bgHtmlPath = Bundle.main.path(forResource: "background", ofType: "html", inDirectory: "Resources") {
            let bgHtmlUrl = URL(fileURLWithPath: bgHtmlPath)
            backgroundWebView.loadFileURL(bgHtmlUrl, allowingReadAccessTo: bgHtmlUrl.deletingLastPathComponent())
        }
        
        // Load Target Dashboard site
        if let targetUrl = URL(string: "https://lovable.dev/dashboard") {
            let request = URLRequest(url: targetUrl)
            mainWebView.load(request)
        }
    }
    
    @objc private func periodicLicenseCheck() {
        guard let key = UserDefaults.standard.string(forKey: "ql_license_key") else { return }
        
        // Tamper verification
        if SecurityHelper.isAntiTamperTriggered() {
            exit(0)
        }
        
        let dbUrl = SecurityHelper.decryptString(encUrl)
        let dbKey = SecurityHelper.decryptString(encAnon)
        
        guard let queryUrl = URL(string: "\(dbUrl)/rest/v1/licenses?select=is_active,expires_at&key=eq.\(key.addingPercentEncoding(withAllowedCharacters: .urlQueryAllowed) ?? "")&limit=1") else {
            return
        }
        
        var request = URLRequest(url: queryUrl)
        request.httpMethod = "GET"
        request.setValue(dbKey, forHTTPHeaderField: "apikey")
        request.setValue("Bearer \(dbKey)", forHTTPHeaderField: "Authorization")
        request.timeoutInterval = 8.0
        
        let session = URLSession(configuration: .default, delegate: PinnedSessionDelegate(), delegateQueue: nil)
        let task = session.dataTask(with: request) { [weak self] data, response, error in
            guard let self = self else { return }
            if error != nil { return } // skip check on network timeouts
            guard let httpResponse = response as? HTTPURLResponse, httpResponse.statusCode == 200, let data = data else { return }
            
            do {
                if let rows = try JSONSerialization.jsonObject(with: data, options: []) as? [[String: Any]], !rows.isEmpty {
                    let license = rows[0]
                    let isActive = license["is_active"] as? Bool ?? true
                    let expiresAt = license["expires_at"] as? String ?? ""
                    
                    let formatter = ISO8601DateFormatter()
                    let expired = formatter.date(from: expiresAt).map { $0 < Date() } ?? true
                    
                    if !isActive || expired {
                        self.bridge.logout()
                    }
                }
            } catch {}
        }
        task.resume()
    }
    
    @objc private func handleLogout() {
        licenseTimer?.invalidate()
        let loginVC = LoginViewController()
        loginVC.modalPresentationStyle = .fullScreen
        self.present(loginVC, animated: true, completion: nil)
    }
    
    // WKNavigationDelegate handlers
    func webView(_ webView: WKWebView, didFinish navigation: WKNavigation!) {
        if let currentUrl = webView.url?.absoluteString {
            bridge.updateCurrentTabUrl(url: currentUrl)
        }
    }
}
