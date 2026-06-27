//
//  SecurityHelper.swift
//  LAST-ZONE-iOS
//

import Foundation
import CommonCrypto
import Security

class SecurityHelper {
    
    static let expectedBundleId = "dev.lovable.build"
    
    // SUPABASE Certificate Pin hashes (SPKI Base64)
    static let supabasePins = [
        "p51goejPCgGH+Oog/MU2k6PObcEfTrrr73jUcuWJ7w0=",
        "kldp6NNEd8wsugYyyIYFsi1ylMCED3hZbSR8ZFsa/A4=",
        "mEfIZT5enoR1FuXLgYYGqnVEoZvmf9c2bVBpiOjYQ0c=",
        "YSoUL4CBzo5aJ/ES9gSZTsavsgtHsiLLnTG+BKUdork=",
        "H7AMYAvicN2+UcFPBz3kJXCDmGrTItZh4ujUBK8hoWg=",
        "JxYBCNfhi515HdL0cvKtauDKAZvS/HXZc8eHx6C/1pI=",
        "++MBgDH5WGvL9Bcn5Be30cRcL0f5O+NyoXuWtQdX1aI=",
        "f0KW/FtqTjs108NpYj42SrGvOB2PpxIVM8nZA9peHbo=",
        "NqvDJlas/GRcYbcWE8S/IceH9cq77kg0jVhZeAPXq8k=",
        "9+ze1cZgR9KO1kZrVDxA4HQ6voHRCSVNz4RdTCx4U8U=",
        "gI1os/q0iEpz+PDram0R6HND5yCDgzt3Y1moj0xyEPo="
    ]
    
    /// Decrypt XOR Encrypted base64 String (Key: 'K')
    static func decryptString(_ encryptedBase64: String) -> String {
        guard let data = Data(base64Encoded: encryptedBase64.trimmingCharacters(in: .whitespacesAndNewlines)) else {
            return ""
        }
        let keyByte: UInt8 = 75 // ASCII of 'K'
        let decryptedBytes = data.map { $0 ^ keyByte }
        return String(bytes: decryptedBytes, encoding: .utf8) ?? ""
    }
    
    /// Run Jailbreak check (replaces Android root check)
    static func isAntiTamperTriggered() -> Bool {
        // 1. Bundle ID verification
        if Bundle.main.bundleIdentifier != expectedBundleId {
            print("Bundle ID check FAILED!")
            return true
        }
        
        // 2. Jailbreak check
        let jbPaths = [
            "/Applications/Cydia.app",
            "/Library/MobileSubstrate/MobileSubstrate.dylib",
            "/bin/bash",
            "/usr/sbin/sshd",
            "/etc/apt",
            "/private/var/lib/apt/"
        ]
        for path in jbPaths {
            if FileManager.default.fileExists(atPath: path) {
                print("Jailbreak check FAILED: Path exists \(path)")
                return true
            }
        }
        
        // 3. Sandbox violation check (can write outside sandbox?)
        let testString = "Jailbreak Test"
        do {
            try testString.write(toFile: "/private/jailbreak_test.txt", atomically: true, encoding: .utf8)
            print("Jailbreak check FAILED: Wrote to system partition")
            try? FileManager.default.removeItem(atPath: "/private/jailbreak_test.txt")
            return true
        } catch {
            // Write failed – this is correct for sandboxed apps
        }
        
        return false
    }
}
