//
//  LoginViewController.swift
//  LAST-ZONE-iOS
//

import UIKit

class LoginViewController: UIViewController, URLSessionDelegate {
    
    private var licenseInput: UITextField!
    private var verifyBtn: UIButton!
    private var buyKeyLink: UIButton!
    private var statusLog: UILabel!
    
    private let encUrl = "Iz8/OzhxZGQsOicyKSQvISohKSwuITI8OD8iOWU4PjsqKSo4LmUoJA=="
    private let encAnon = "LjIBIykMKCIEIgECHjECegUiAjgCJRl+KAgCfQIgOxMdCAFyZS4yATsoeAYiBCIBMS8TCSMSJg0xERgCOAIlAScRIgJ9AiYvMykDJyIpeRk6Ehw7IhF5HTouEy8xLwwnMgIiPCIoJnI4ERgCfQImDT4peX8iBwgBOxITGiIEIQ54BA8OMwQfEngEDwI4AiYdfygIAn0GIQp+BSEoeAYhKH8GJXtlICgmeAgzDCcYcj4aG309ERIGPDwTDgYyLiJyAg4IJ3szJj8+MTgheyJ7Cg=="
    private let supportUrl = "https://t.me/+Dm8IppPh39s4YWIx"
    
    override func viewDidLoad() {
        super.viewDidLoad()
        setupUI()
        
        // Safety Check
        if SecurityHelper.isAntiTamperTriggered() {
            exit(0)
        }
        
        // Auto Login Check
        let isLicenseValid = UserDefaults.standard.string(forKey: "ql_license_valid") == "true"
        if isLicenseValid {
            self.showMainViewController()
        }
        
        // Pre-fill key if saved
        if let savedKey = UserDefaults.standard.string(forKey: "ql_license_key") ?? UserDefaults.standard.string(forKey: "license_key") {
            licenseInput.text = savedKey
        }
    }
    
    private func setupUI() {
        view.backgroundColor = UIColor(red: 7/255.0, green: 5/255.0, blue: 15/255.0, alpha: 1.0)
        
        // Add beautiful circular gradient decoration
        let gradientView = UIView(frame: CGRect(x: -100, y: -100, width: 400, height: 400))
        gradientView.layer.cornerRadius = 200
        gradientView.backgroundColor = UIColor(red: 168/255.0, green: 85/255.0, blue: 247/255.0, alpha: 0.12)
        gradientView.layer.masksToBounds = true
        view.addSubview(gradientView)
        
        let container = UIView()
        container.translatesAutoresizingMaskIntoConstraints = false
        container.backgroundColor = UIColor(white: 1.0, alpha: 0.04)
        container.layer.borderWidth = 1
        container.layer.borderColor = UIColor(white: 1.0, alpha: 0.12).cgColor
        container.layer.cornerRadius = 20
        view.addSubview(container)
        
        // Logo
        let logoImage = UIImageView()
        logoImage.translatesAutoresizingMaskIntoConstraints = false
        logoImage.layer.cornerRadius = 40
        logoImage.clipsToBounds = true
        logoImage.contentMode = .scaleAspectFill
        if let logoPath = Bundle.main.path(forResource: "ic_floating", ofType: "jpg", inDirectory: "Resources/extension") {
            logoImage.image = UIImage(contentsOfFile: logoPath)
        } else {
            logoImage.backgroundColor = .purple
        }
        container.addSubview(logoImage)
        
        // Title
        let titleLabel = UILabel()
        titleLabel.translatesAutoresizingMaskIntoConstraints = false
        titleLabel.text = "LAST ZONE"
        titleLabel.font = UIFont.systemFont(ofSize: 28, weight: .black)
        titleLabel.textColor = .white
        titleLabel.textAlignment = .center
        container.addSubview(titleLabel)
        
        // Subtitle Badge
        let badgeLabel = UILabel()
        badgeLabel.translatesAutoresizingMaskIntoConstraints = false
        badgeLabel.text = "IOS CLIENT PORTAL"
        badgeLabel.font = UIFont.systemFont(ofSize: 11, weight: .bold)
        badgeLabel.textColor = UIColor(red: 168/255.0, green: 85/255.0, blue: 247/255.0, alpha: 1.0)
        badgeLabel.textAlignment = .center
        badgeLabel.backgroundColor = UIColor(red: 168/255.0, green: 85/255.0, blue: 247/255.0, alpha: 0.15)
        badgeLabel.layer.cornerRadius = 10
        badgeLabel.clipsToBounds = true
        container.addSubview(badgeLabel)
        
        // License Key Input
        licenseInput = UITextField()
        licenseInput.translatesAutoresizingMaskIntoConstraints = false
        licenseInput.placeholder = "License Key"
        licenseInput.textAlignment = .center
        licenseInput.textColor = .white
        licenseInput.backgroundColor = UIColor(white: 1.0, alpha: 0.05)
        licenseInput.layer.cornerRadius = 8
        licenseInput.layer.borderWidth = 1
        licenseInput.layer.borderColor = UIColor(white: 1.0, alpha: 0.1).cgColor
        licenseInput.autocorrectionType = .no
        licenseInput.autocapitalizationType = .none
        container.addSubview(licenseInput)
        
        // Verify Button
        verifyBtn = UIButton(type: .system)
        verifyBtn.translatesAutoresizingMaskIntoConstraints = false
        verifyBtn.setTitle("🔐 Validate License", for: .normal)
        verifyBtn.titleLabel?.font = UIFont.systemFont(ofSize: 15, weight: .bold)
        verifyBtn.setTitleColor(.white, for: .normal)
        verifyBtn.backgroundColor = UIColor(red: 168/255.0, green: 85/255.0, blue: 247/255.0, alpha: 1.0)
        verifyBtn.layer.cornerRadius = 8
        verifyBtn.addTarget(self, action: #selector(verifyClicked), for: .touchUpInside)
        container.addSubview(verifyBtn)
        
        // Status Log
        statusLog = UILabel()
        statusLog.translatesAutoresizingMaskIntoConstraints = false
        statusLog.font = UIFont.systemFont(ofSize: 12, weight: .medium)
        statusLog.numberOfLines = 0
        statusLog.textAlignment = .center
        statusLog.isHidden = true
        statusLog.layer.cornerRadius = 8
        statusLog.clipsToBounds = true
        container.addSubview(statusLog)
        
        // Buy Key Link
        buyKeyLink = UIButton(type: .system)
        buyKeyLink.translatesAutoresizingMaskIntoConstraints = false
        buyKeyLink.setTitle("💬 Need a license? Contact Support", for: .normal)
        buyKeyLink.titleLabel?.font = UIFont.systemFont(ofSize: 12, weight: .semibold)
        buyKeyLink.setTitleColor(UIColor(red: 192/255.0, green: 132/255.0, blue: 252/255.0, alpha: 1.0), for: .normal)
        buyKeyLink.addTarget(self, action: #selector(buyClicked), for: .touchUpInside)
        container.addSubview(buyKeyLink)
        
        // Layout constraints
        NSLayoutConstraint.activate([
            container.centerXAnchor.constraint(equalTo: view.centerXAnchor),
            container.centerYAnchor.constraint(equalTo: view.centerYAnchor),
            container.widthAnchor.constraint(equalToConstant: 340),
            container.heightAnchor.constraint(equalToConstant: 460),
            
            logoImage.topAnchor.constraint(equalTo: container.topAnchor, constant: 32),
            logoImage.centerXAnchor.constraint(equalTo: container.centerXAnchor),
            logoImage.widthAnchor.constraint(equalToConstant: 80),
            logoImage.heightAnchor.constraint(equalToConstant: 80),
            
            titleLabel.topAnchor.constraint(equalTo: logoImage.bottomAnchor, constant: 12),
            titleLabel.leadingAnchor.constraint(equalTo: container.leadingAnchor, constant: 16),
            titleLabel.trailingAnchor.constraint(equalTo: container.trailingAnchor, constant: -16),
            
            badgeLabel.topAnchor.constraint(equalTo: titleLabel.bottomAnchor, constant: 4),
            badgeLabel.centerXAnchor.constraint(equalTo: container.centerXAnchor),
            badgeLabel.widthAnchor.constraint(equalToConstant: 140),
            badgeLabel.heightAnchor.constraint(equalToConstant: 20),
            
            licenseInput.topAnchor.constraint(equalTo: badgeLabel.bottomAnchor, constant: 28),
            licenseInput.leadingAnchor.constraint(equalTo: container.leadingAnchor, constant: 24),
            licenseInput.trailingAnchor.constraint(equalTo: container.trailingAnchor, constant: -24),
            licenseInput.heightAnchor.constraint(equalToConstant: 44),
            
            verifyBtn.topAnchor.constraint(equalTo: licenseInput.bottomAnchor, constant: 12),
            verifyBtn.leadingAnchor.constraint(equalTo: container.leadingAnchor, constant: 24),
            verifyBtn.trailingAnchor.constraint(equalTo: container.trailingAnchor, constant: -24),
            verifyBtn.heightAnchor.constraint(equalToConstant: 44),
            
            statusLog.topAnchor.constraint(equalTo: verifyBtn.bottomAnchor, constant: 14),
            statusLog.leadingAnchor.constraint(equalTo: container.leadingAnchor, constant: 24),
            statusLog.trailingAnchor.constraint(equalTo: container.trailingAnchor, constant: -24),
            statusLog.heightAnchor.constraint(greaterThanOrEqualToConstant: 36),
            
            buyKeyLink.bottomAnchor.constraint(equalTo: container.bottomAnchor, constant: -24),
            buyKeyLink.centerXAnchor.constraint(equalTo: container.centerXAnchor)
        ])
    }
    
    private func getUniqueDeviceId() -> String {
        if let identifier = UIDevice.current.identifierForVendor?.uuidString {
            return identifier
        }
        if let savedId = UserDefaults.standard.string(forKey: "ql_device_id"), !savedId.isEmpty {
            return savedId
        }
        let newId = UUID().uuidString.replacingOccurrences(of: "-", with: "").lowercased()
        UserDefaults.standard.set(newId, forKey: "ql_device_id")
        return newId
    }
    
    private func showStatus(message: String, isError: Bool) {
        statusLog.text = message
        statusLog.isHidden = false
        if isError {
            statusLog.textColor = UIColor(red: 252/255.0, green: 165/255.0, blue: 165/255.0, alpha: 1.0)
            statusLog.backgroundColor = UIColor(red: 239/255.0, green: 68/255.0, blue: 68/255.0, alpha: 0.1)
        } else {
            statusLog.textColor = UIColor(red: 192/255.0, green: 132/255.0, blue: 252/255.0, alpha: 1.0)
            statusLog.backgroundColor = UIColor(red: 139/255.0, green: 92/255.0, blue: 246/255.0, alpha: 0.1)
        }
    }
    
    @objc private func verifyClicked() {
        guard let key = licenseInput.text?.trimmingCharacters(in: .whitespacesAndNewlines), !key.isEmpty else {
            showStatus(message: "Please enter your license key.", isError: true)
            return
        }
        
        licenseInput.isEnabled = false
        verifyBtn.isEnabled = false
        verifyBtn.setTitle("Checking...", for: .normal)
        showStatus(message: "Validating license key...", isError: false)
        
        validateLicense(key: key)
    }
    
    private func validateLicense(key: String) {
        let dbUrl = SecurityHelper.decryptString(encUrl)
        let dbKey = SecurityHelper.decryptString(encAnon)
        
        guard let queryUrl = URL(string: "\(dbUrl)/rest/v1/licenses?select=*&key=eq.\(key.addingPercentEncoding(withAllowedCharacters: .urlQueryAllowed) ?? "")&limit=1") else {
            self.resetForm(error: "Invalid database URL.")
            return
        }
        
        var request = URLRequest(url: queryUrl)
        request.httpMethod = "GET"
        request.setValue(dbKey, forHTTPHeaderField: "apikey")
        request.setValue("Bearer \(dbKey)", forHTTPHeaderField: "Authorization")
        request.timeoutInterval = 8.0
        
        // Pinned Session
        let session = URLSession(configuration: .default, delegate: PinnedSessionDelegate(), delegateQueue: nil)
        
        let task = session.dataTask(with: request) { [weak self] data, response, error in
            guard let self = self else { return }
            
            if let error = error {
                DispatchQueue.main.async {
                    self.resetForm(error: "Connection error: \(error.localizedDescription)")
                }
                return
            }
            
            guard let httpResponse = response as? HTTPURLResponse, httpResponse.statusCode == 200, let data = data else {
                DispatchQueue.main.async {
                    self.resetForm(error: "Server response failed.")
                }
                return
            }
            
            do {
                guard let rows = try JSONSerialization.jsonObject(with: data, options: []) as? [[String: Any]], !rows.isEmpty else {
                    DispatchQueue.main.async {
                        self.resetForm(error: "License key was not found.")
                    }
                    return
                }
                
                let license = rows[0]
                let isActive = license["is_active"] as? Bool ?? true
                if !isActive {
                    DispatchQueue.main.async {
                        self.resetForm(error: "This license is disabled.")
                    }
                    return
                }
                
                let expiresAt = license["expires_at"] as? String ?? ""
                if self.isExpired(expiresAt) {
                    DispatchQueue.main.async {
                        self.resetForm(error: "This license has expired.")
                    }
                    return
                }
                
                // Check device limits
                let deviceId = self.getUniqueDeviceId()
                let maxDevices = license["max_devices"] as? Int ?? 1
                let fingerprintStr = license["device_fingerprint"] as? String ?? ""
                var devices = fingerprintStr.components(separatedBy: ",").map { $0.trimmingCharacters(in: .whitespacesAndNewlines) }.filter { !$0.isEmpty }
                
                if !devices.contains(deviceId) {
                    if devices.count >= maxDevices {
                        DispatchQueue.main.async {
                            self.resetForm(error: "Device limit reached for this license.")
                        }
                        return
                    }
                    devices.append(deviceId)
                }
                
                // Format session objects
                let nowIso = ISO8601DateFormatter().string(from: Date())
                let activatedAt = (license["activated_at"] as? String ?? "").isEmpty ? nowIso : (license["activated_at"] as! String)
                
                let rawSessions = license["synced_sessions"] as? String ?? "[]"
                var nextSessions = [[String: Any]]()
                if let sData = Data(rawSessions.utf8), let sArray = try? JSONSerialization.jsonObject(with: sData, options: []) as? [[String: Any]] {
                    for sessionObj in sArray {
                        if (sessionObj["device_id"] as? String) != deviceId {
                            nextSessions.append(sessionObj)
                        }
                    }
                }
                
                let currentSession: [String: Any] = [
                    "device_id": deviceId,
                    "session_id": "lz_session_" + UUID().uuidString.replacingOccurrences(of: "-", with: "").lowercased(),
                    "last_seen_at": nowIso,
                    "last_synced": nowIso,
                    "extension_version": "1.0"
                ]
                nextSessions.append(currentSession)
                
                // PATCH request payload
                var patchData = [String: Any]()
                patchData["device_fingerprint"] = devices.joined(separator: ",")
                patchData["activated_at"] = activatedAt
                if let nextSessionData = try? JSONSerialization.data(withJSONObject: nextSessions, options: []), let nextSessionStr = String(data: nextSessionData, encoding: .utf8) {
                    patchData["synced_sessions"] = nextSessionStr
                }
                
                guard let patchUrl = URL(string: "\(dbUrl)/rest/v1/licenses?id=eq.\(license["id"] as? String ?? "")") else { return }
                var patchRequest = URLRequest(url: patchUrl)
                patchRequest.httpMethod = "PATCH"
                patchRequest.setValue(dbKey, forHTTPHeaderField: "apikey")
                patchRequest.setValue("Bearer \(dbKey)", forHTTPHeaderField: "Authorization")
                patchRequest.setValue("application/json", forHTTPHeaderField: "Content-Type")
                patchRequest.setValue("return=representation", forHTTPHeaderField: "Prefer")
                patchRequest.httpBody = try? JSONSerialization.data(withJSONObject: patchData, options: [])
                
                let patchTask = session.dataTask(with: patchRequest) { _, _, _ in }
                patchTask.resume()
                
                // Store inside UserDefaults
                let defaults = UserDefaults.standard
                defaults.set("true", forKey: "ql_license_valid")
                defaults.set("true", forKey: "license_valid")
                defaults.set(key, forKey: "ql_license_key")
                defaults.set(key, forKey: "license_key")
                defaults.set(license["plan"] as? String ?? "standard", forKey: "ql_license_status")
                defaults.set(license["plan"] as? String ?? "standard", forKey: "ql_license_plan")
                defaults.set(license["user_name"] as? String ?? "User", forKey: "ql_user_name")
                defaults.set(license["user_email"] as? String ?? "", forKey: "ql_user_email")
                defaults.set(expiresAt, forKey: "ql_expires_at")
                defaults.set(activatedAt, forKey: "ql_activated_at")
                defaults.set(deviceId, forKey: "ql_device_id")
                defaults.set(deviceId, forKey: "device_id")
                defaults.set(currentSession["session_id"] as? String ?? "", forKey: "ql_session_id")
                defaults.synchronize()
                
                DispatchQueue.main.async {
                    self.showStatus(message: "License validated successfully!", isError: false)
                    DispatchQueue.main.asyncAfter(deadline: .now() + 0.5) {
                        self.showMainViewController()
                    }
                }
                
            } catch {
                DispatchQueue.main.async {
                    self.resetForm(error: "Crypto / Parsing error: \(error.localizedDescription)")
                }
            }
        }
        task.resume()
    }
    
    private func resetForm(error: String) {
        verifyBtn.setTitle("🔐 Validate License", for: .normal)
        verifyBtn.isEnabled = true
        licenseInput.isEnabled = true
        showStatus(message: error, isError: true)
    }
    
    private func isExpired(_ expiresAtStr: String) -> Bool {
        let formatter = ISO8601DateFormatter()
        guard let expiryDate = formatter.date(from: expiresAtStr) else {
            return true
        }
        return expiryDate < Date()
    }
    
    private func showMainViewController() {
        let mainVC = MainViewController()
        mainVC.modalPresentationStyle = .fullScreen
        self.present(mainVC, animated: true, completion: nil)
    }
    
    @objc private func buyClicked() {
        if let url = URL(string: supportUrl) {
            UIApplication.shared.open(url)
        }
    }
}

class PinnedSessionDelegate: NSObject, URLSessionDelegate {
    func urlSession(_ session: URLSession, didReceive challenge: URLAuthenticationChallenge, completionHandler: @escaping (URLSession.AuthChallengeDisposition, URLCredential?) -> Void) {
        guard challenge.protectionSpace.authenticationMethod == NSURLAuthenticationMethodServerTrust,
              let serverTrust = challenge.protectionSpace.serverTrust else {
            completionHandler(.performDefaultHandling, nil)
            return
        }
        
        let hostName = challenge.protectionSpace.host
        guard hostName.hasSuffix(".supabase.co") || hostName == "supabase.co" else {
            completionHandler(.cancelAuthenticationChallenge, nil)
            return
        }
        
        // Pinned Key validation
        if let cert = SecTrustGetCertificateAtIndex(serverTrust, 0) {
            if let serverPublicKey = SecCertificateCopyKey(cert),
               let serverPublicKeyData = SecKeyCopyExternalRepresentation(serverPublicKey, nil) as Data? {
                
                // SHA256 Hash of Public Key
                var hash = [UInt8](repeating: 0, count: Int(CC_SHA256_DIGEST_LENGTH))
                serverPublicKeyData.withUnsafeBytes {
                    _ = CC_SHA256($0.baseAddress, CC_LONG(serverPublicKeyData.count), &hash)
                }
                
                let keyHashBase64 = Data(hash).base64EncodedString()
                if SecurityHelper.supabasePins.contains(keyHashBase64) {
                    completionHandler(.useCredential, URLCredential(trust: serverTrust))
                    return
                }
            }
        }
        
        completionHandler(.cancelAuthenticationChallenge, nil)
    }
}
