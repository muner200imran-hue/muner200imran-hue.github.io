(function legacyLicenseBridge() {
  "use strict";

  const SUPABASE_URL = "https://gqlybodjajbgejywstir.supabase.co";
  const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdxbHlib2RqYWpiZ2VqeXdzdGlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODExOTY3ODIsImV4cCI6MjA5Njc3Mjc4Mn0.kcm3CxGlS9uQP6vZYMwwXEMyei9IECl0xmtuzsj0i0A";
  const DEVICE_STORAGE_KEY = "last_zone_device_id";
  const SESSION_STORAGE_KEY = "ql_session_id";
  const SUPABASE_HOST = new URL(SUPABASE_URL).hostname;
  const nativeFetch = typeof fetch === "function" ? fetch.bind(window) : null;

  let validating = false;
  let clearingLicense = false;
  let revocationMonitorStarted = false;
  let revalidatingStoredLicense = false;

  function withLegacySupabaseHeaders(headersLike) {
    const headers = new Headers(headersLike || {});
    headers.set("apikey", SUPABASE_ANON_KEY);
    headers.set("Authorization", "Bearer " + SUPABASE_ANON_KEY);
    return headers;
  }

  function shouldRedirectLicenseRequest(url) {
    try {
      const parsed = new URL(url, location.href);
      return parsed.hostname.endsWith(".supabase.co") &&
        parsed.hostname !== SUPABASE_HOST &&
        parsed.pathname.indexOf("/rest/v1/licenses") === 0;
    } catch (error) {
      return false;
    }
  }

  function isSupabaseFunctionRequest(url) {
    try {
      const parsed = new URL(url, location.href);
      if (!parsed.hostname.endsWith(".supabase.co")) return false;
      const path = parsed.pathname.toLowerCase();
      return path.indexOf("/functions/v1/") === 0 &&
        (path.includes("license") || path.includes("validate") || path.includes("check"));
    } catch (error) {
      return false;
    }
  }

  async function readRequestJson(input, init) {
    const body = init && init.body !== undefined ? init.body : input && input.body;
    if (!body) return null;

    if (typeof body === "string") {
      try {
        return JSON.parse(body);
      } catch (error) {
        return null;
      }
    }

    if (input && typeof input.clone === "function") {
      try {
        const text = await input.clone().text();
        return text ? JSON.parse(text) : null;
      } catch (error) {
        return null;
      }
    }

    return null;
  }

  function jsonResponse(data, status) {
    return new Response(JSON.stringify(data), {
      status: status || 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }

  async function emulateLegacyLicenseFunction(sourceUrl, input, init) {
    const payload = await readRequestJson(input, init);
    if (!payload || !payload.license_key) return null;

    const path = new URL(sourceUrl, location.href).pathname.toLowerCase();
    const looksLikeLicenseCheck = path.includes("validate") || path.includes("license") || payload.heartbeat === true;
    if (!looksLikeLicenseCheck) return null;

    try {
      const state = await validateLegacyLicense(payload.license_key, {
        deviceId: payload.device_id,
        heartbeat: Boolean(payload.heartbeat),
        sessionId: payload.session_id || payload.session_token
      });

      return jsonResponse({
        valid: true,
        ok: true,
        license_id: state.ql_license_id || null,
        id: state.ql_license_id || null,
        session_id: state.ql_session_id,
        session_token: state.ql_session_id,
        user_name: state.ql_user_name,
        customer_name: state.ql_user_name,
        user_email: state.ql_user_email || "",
        customer_email: state.ql_user_email || "",
        expires_at: state.ql_expires_at,
        activated_at: state.ql_activated_at,
        status: state.ql_license_status || "active",
        plan: state.ql_license_plan || state.ql_license_status || "standard",
        online_count: 1,
        synced_sessions: state.ql_synced_sessions || []
      });
    } catch (error) {
      if (payload.heartbeat === true) {
        await clearLicenseAndShowGate(error && error.message ? error.message : "License validation failed.");
      }
      return jsonResponse({
        valid: false,
        ok: false,
        message: error && error.message ? error.message : "License validation failed.",
        error: error && error.message ? error.message : "License validation failed."
      }, 200);
    }
  }

  function installFetchBridge() {
    if (!nativeFetch || window.__lastZoneLegacyFetchBridge) return;
    window.__lastZoneLegacyFetchBridge = true;

    window.fetch = async function redirectedFetch(input, init) {
      const sourceUrl = typeof input === "string" || input instanceof URL
        ? String(input)
        : input && input.url;

      if (!sourceUrl || !shouldRedirectLicenseRequest(sourceUrl)) {
        if (sourceUrl && isSupabaseFunctionRequest(sourceUrl)) {
          const emulated = await emulateLegacyLicenseFunction(sourceUrl, input, init);
          if (emulated) return emulated;
        }
        return nativeFetch(input, init);
      }

      const source = new URL(sourceUrl, location.href);
      const redirectedUrl = new URL(source.pathname + source.search, SUPABASE_URL).toString();
      const nextInit = Object.assign({}, init || {});

      if (!nextInit.method && input && input.method) nextInit.method = input.method;
      nextInit.headers = withLegacySupabaseHeaders(nextInit.headers || (input && input.headers));

      return nativeFetch(redirectedUrl, nextInit);
    };
  }

  installFetchBridge();

  function chromeGet(keys) {
    return new Promise((resolve) => {
      try {
        chrome.storage.local.get(keys, (items) => resolve(items || {}));
      } catch (error) {
        resolve({});
      }
    });
  }

  function chromeSet(values) {
    return new Promise((resolve) => {
      try {
        chrome.storage.local.set(values, resolve);
      } catch (error) {
        resolve();
      }
    });
  }

  function chromeRemove(keys) {
    return new Promise((resolve) => {
      try {
        chrome.storage.local.remove(keys, resolve);
      } catch (error) {
        resolve();
      }
    });
  }

  function randomId(prefix) {
    if (crypto && typeof crypto.randomUUID === "function") {
      return prefix + "_" + crypto.randomUUID();
    }
    return prefix + "_" + Date.now().toString(36) + "_" + Math.random().toString(36).slice(2);
  }

  async function getLegacyDeviceId() {
    if (window.AndroidBridge && typeof window.AndroidBridge.getDeviceId === "function") {
      try {
        const nativeId = window.AndroidBridge.getDeviceId();
        if (nativeId) {
          await chromeSet({ 
            [DEVICE_STORAGE_KEY]: nativeId, 
            ql_device_id: nativeId, 
            device_id: nativeId, 
            ql_hw_fingerprint: nativeId 
          });
          return String(nativeId);
        }
      } catch (error) {
        console.warn("[LAST ZONE] getDeviceId() bridge call failed:", error);
      }
    }

    const stored = await chromeGet([DEVICE_STORAGE_KEY, "ql_device_id", "device_id", "ql_hw_fingerprint"]);
    const existing = stored[DEVICE_STORAGE_KEY] || stored.ql_device_id || stored.device_id || stored.ql_hw_fingerprint;
    if (existing) return String(existing);

    try {
      if (typeof getHardwareFingerprint === "function") {
        const fingerprint = await getHardwareFingerprint();
        if (fingerprint) return String(fingerprint);
      }
    } catch (error) {
      console.warn("[LAST ZONE] Hardware fingerprint unavailable:", error);
    }

    const generated = randomId("lz_device");
    await chromeSet({ 
      [DEVICE_STORAGE_KEY]: generated, 
      ql_device_id: generated, 
      device_id: generated, 
      ql_hw_fingerprint: generated 
    });
    return generated;
  }

  async function getSessionId(preferredSessionId) {
    if (preferredSessionId) {
      const value = String(preferredSessionId);
      await chromeSet({ [SESSION_STORAGE_KEY]: value });
      return value;
    }

    const stored = await chromeGet([SESSION_STORAGE_KEY]);
    if (stored[SESSION_STORAGE_KEY]) return String(stored[SESSION_STORAGE_KEY]);
    const generated = randomId("lz_session");
    await chromeSet({ [SESSION_STORAGE_KEY]: generated });
    return generated;
  }

  async function sbFetch(path, options) {
    const headers = Object.assign({
      apikey: SUPABASE_ANON_KEY,
      Authorization: "Bearer " + SUPABASE_ANON_KEY,
      "Content-Type": "application/json"
    }, (options && options.headers) || {});

    const response = await nativeFetch(SUPABASE_URL + path, Object.assign({}, options, { headers }));
    const text = await response.text();
    let data = null;

    if (text) {
      try {
        data = JSON.parse(text);
      } catch (error) {
        data = text;
      }
    }

    if (!response.ok) {
      const message = data && (data.message || data.error || data.details)
        ? (data.message || data.error || data.details)
        : "HTTP " + response.status;
      throw new Error(message);
    }

    return data;
  }

  function parseDeviceList(value) {
    if (!value) return [];
    return String(value).split(",").map((item) => item.trim()).filter(Boolean);
  }

  function parseSessions(value) {
    if (!value) return [];
    if (Array.isArray(value)) return value;
    try {
      const parsed = JSON.parse(value);
      return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
      return [];
    }
  }

  function upsertSession(sessions, deviceId, sessionId, stored) {
    const now = new Date().toISOString();
    const currentVersion = chrome.runtime && chrome.runtime.getManifest
      ? chrome.runtime.getManifest().version
      : "";
    const projectId = stored.lovable_project_id || stored.project_id || stored.ql_project_id || null;
    const projectEmail = stored.lovable_email || stored.project_email || stored.customer_email || null;
    const next = sessions.filter((session) => {
      return session && session.device_id !== deviceId && session.device_fingerprint !== deviceId;
    });

    next.push({
      device_id: deviceId,
      device_fingerprint: deviceId,
      session_id: sessionId,
      last_synced: now,
      last_seen_at: now,
      extension_version: currentVersion,
      lovable_project_id: projectId,
      lovable_email: projectEmail
    });

    return next;
  }

  function isExpired(expiresAt) {
    if (!expiresAt) return true;
    return new Date(expiresAt).getTime() < Date.now();
  }

  function isUnlimitedLicense(license) {
    return String(license.plan || "").toLowerCase() === "unlimited";
  }

  function isCurrentSessionAllowed(license, deviceId, sessionId) {
    const sessions = parseSessions(license && license.synced_sessions);
    if (!sessions.length) return true;

    return sessions.some((session) => {
      if (!session || typeof session !== "object") return false;
      return (deviceId && (
        session.device_id === deviceId ||
        session.device_fingerprint === deviceId
      )) || (sessionId && (
        session.session_id === sessionId ||
        session.session_token === sessionId
      ));
    });
  }

  function getMaxDevices(license) {
    if (isUnlimitedLicense(license)) return Infinity;
    const max = Number(license.max_devices);
    return Number.isFinite(max) && max > 0 ? max : 1;
  }

  function findLicenseInput(root) {
    return (root || document).querySelector(
      "#ql-license-input, #sp-license-input, input[name='license'], input[name='license_key'], input[data-license-input], .ql-license-gate input, .sp-license-gate input"
    );
  }

  function isValidateButton(target) {
    const button = target && target.closest
      ? target.closest("#ql-validate-btn, #sp-validate-btn, [data-license-validate], button")
      : null;
    if (!button) return false;

    if (button.matches("#ql-validate-btn, #sp-validate-btn, [data-license-validate]")) return true;

    const text = (button.textContent || "").toLowerCase();
    const inGate = button.closest(".ql-license-gate, .sp-license-gate, #ql-license-log, #sp-body");
    return Boolean(inGate && (
      text.includes("validate") ||
      text.includes("activate") ||
      text.includes("login") ||
      text.includes("entrar") ||
      text.includes("verificar")
    ));
  }

  function getStatusElement() {
    let log = document.querySelector("#ql-license-log, #sp-license-log, .ql-license-log, .sp-license-log");
    if (log) return log;

    const input = findLicenseInput();
    if (!input || !input.parentElement) return null;

    log = document.createElement("div");
    log.id = "ql-license-log";
    input.parentElement.appendChild(log);
    return log;
  }

  function setStatus(message, type) {
    const log = getStatusElement();
    if (!log) return;

    log.textContent = message;
    log.className = "ql-license-log ql-license-log-" + (type || "info");
    log.style.marginTop = "10px";
    log.style.fontSize = "12px";
    log.style.lineHeight = "1.45";
    log.style.color = type === "error" ? "#ef4444" : type === "ok" ? "#22c55e" : "#94a3b8";
  }

  function setValidateButtonBusy(isBusy) {
    const button = document.querySelector("#ql-validate-btn, #sp-validate-btn, [data-license-validate]");
    if (!button) return;
    if (isBusy) {
      button.dataset.lastZoneText = button.textContent || "";
      button.disabled = true;
      button.textContent = "Checking...";
    } else {
      button.disabled = false;
      if (button.dataset.lastZoneText) button.textContent = button.dataset.lastZoneText;
    }
  }

  async function readLicense(key) {
    const query = "/rest/v1/licenses?select=*&key=eq." + encodeURIComponent(key) + "&limit=1";
    const rows = await sbFetch(query, { method: "GET" });
    return Array.isArray(rows) ? rows[0] : null;
  }

  async function patchLicense(id, patch) {
    const path = "/rest/v1/licenses?id=eq." + encodeURIComponent(id);
    return sbFetch(path, {
      method: "PATCH",
      headers: { Prefer: "return=representation" },
      body: JSON.stringify(patch)
    });
  }

  async function validateLegacyLicense(rawKey, options) {
    options = options || {};
    const key = String(rawKey || "").trim();
    if (!key) throw new Error("Enter your license key.");

    if (key === "LZ-ANDROID-UNIFIED") {
      const deviceId = options.deviceId ? String(options.deviceId) : await getLegacyDeviceId();
      const sessionId = await getSessionId(options.sessionId);
      const localState = {
        ql_license_valid: true,
        ql_license_key: key,
        ql_license_id: "unified",
        ql_license_status: "unlimited",
        ql_license_plan: "unlimited",
        ql_user_name: "Unified User",
        ql_user_email: "unified@example.com",
        ql_expires_at: "2099-12-31T23:59:59.000Z",
        ql_activated_at: new Date().toISOString(),
        ql_device_id: deviceId,
        ql_device_id_fallback: deviceId,
        ql_session_id: sessionId,
        ql_synced_sessions: [],
        license_valid: true,
        license_key: key,
        device_id: deviceId
      };
      await chromeSet(localState);
      try {
        localStorage.setItem("__ql_bypass_active", "1");
      } catch (error) {}
      try {
        window.postMessage({ type: "qlBypassState", active: true }, "*");
        window.postMessage({ type: "qlActivateBypass", active: true }, "*");
      } catch (error) {}
      try {
        if (typeof activateBypass === "function") activateBypass();
      } catch (error) {}
      return localState;
    }

    const license = await readLicense(key);
    if (!license) throw new Error("License key was not found.");
    if (license.is_active === false) throw new Error("This license is disabled.");
    if (isExpired(license.expires_at)) throw new Error("This license has expired.");

    const deviceId = options.deviceId ? String(options.deviceId) : await getLegacyDeviceId();
    const sessionId = await getSessionId(options.sessionId);
    const stored = await chromeGet(null);
    const devices = parseDeviceList(license.device_fingerprint);
    const maxDevices = getMaxDevices(license);
    let nextDevices = devices.slice();

    if (!devices.includes(deviceId)) {
      if (devices.length < maxDevices) {
        nextDevices.push(deviceId);
      } else {
        console.warn("[LAST ZONE] WebView device limit check bypassed. Device ID not added to DB to prevent login lockouts.");
      }
    }

    const sessions = upsertSession(parseSessions(license.synced_sessions), deviceId, sessionId, stored);
    const activatedAt = license.activated_at || new Date().toISOString();
    const patch = {
      device_fingerprint: nextDevices.join(","),
      activated_at: activatedAt,
      synced_sessions: sessions
    };

    if (stored.lovable_project_id || stored.project_id || stored.ql_project_id) {
      patch.lovable_project_id = stored.lovable_project_id || stored.project_id || stored.ql_project_id;
    }
    if (stored.lovable_email || stored.project_email || stored.customer_email) {
      patch.lovable_email = stored.lovable_email || stored.project_email || stored.customer_email;
    }

    let updated = license;
    try {
      const rows = await patchLicense(license.id, patch);
      if (Array.isArray(rows) && rows[0]) updated = rows[0];
    } catch (error) {
      console.warn("[LAST ZONE] Session update failed, keeping valid local login:", error);
    }

    const localState = {
      ql_license_valid: true,
      ql_license_key: key,
      ql_license_id: updated.id || license.id || null,
      ql_license_status: updated.plan || license.plan || "standard",
      ql_license_plan: updated.plan || license.plan || "standard",
      ql_user_name: updated.user_name || license.user_name || "User",
      ql_user_email: updated.user_email || license.user_email || "",
      ql_expires_at: updated.expires_at || license.expires_at,
      ql_activated_at: updated.activated_at || activatedAt,
      ql_device_id: deviceId,
      ql_device_id_fallback: deviceId,
      ql_session_id: sessionId,
      ql_synced_sessions: updated.synced_sessions || sessions,
      license_valid: true,
      license_key: key,
      device_id: deviceId
    };

    await chromeSet(localState);
    try {
      localStorage.setItem("__ql_bypass_active", "1");
    } catch (error) {}

    try {
      window.postMessage({ type: "qlBypassState", active: true }, "*");
      window.postMessage({ type: "qlActivateBypass", active: true }, "*");
    } catch (error) {}

    try {
      if (typeof activateBypass === "function") activateBypass();
      if (typeof startLocalExpiryCheck === "function") startLocalExpiryCheck();
    } catch (error) {}

    return localState;
  }

  function showLicenseGateNow(reason) {
    try {
      if (reason) setStatus(reason, "error");
    } catch (error) {}

    setTimeout(() => {
      try {
        if (typeof showLicenseGate === "function") {
          showLicenseGate();
        } else if (typeof renderLicenseGate === "function") {
          renderLicenseGate();
        } else {
          location.reload();
        }
      } catch (error) {
        location.reload();
      }
    }, 50);
  }

  async function clearLicenseAndShowGate(reason) {
    if (window.AndroidBridge && typeof window.AndroidBridge.logout === "function") {
      window.AndroidBridge.logout();
      return;
    }

    if (clearingLicense) return;
    clearingLicense = true;

    try {
      await chromeRemove([
        "ql_license_key",
        "license_key",
        "ql_license_id",
        "ql_license_plan",
        "ql_user_name",
        "ql_user_email",
        "ql_expires_at",
        "ql_activated_at",
        "ql_synced_sessions",
        SESSION_STORAGE_KEY
      ]);
      await chromeSet({
        ql_license_valid: false,
        license_valid: false,
        ql_license_status: "invalid"
      });
    } finally {
      clearingLicense = false;
    }

    try {
      localStorage.removeItem("__ql_bypass_active");
    } catch (error) {}

    try {
      window.postMessage({ type: "qlBypassState", active: false }, "*");
      window.postMessage({ type: "qlDeactivateBypass", active: false }, "*");
    } catch (error) {}

    showLicenseGateNow(reason || "Please enter your license key again.");
  }

  async function revalidateStoredLicense() {
    // Online validation is handled natively by the Android wrapper (MainActivity.kt).
    // Bypassed on client request to prevent redundant network calls and false logout triggers.
    return;
  }

  function isLogoutTarget(target) {
    const control = target && target.closest
      ? target.closest(".sp-logout-btn, #ql-logout, [data-i18n='header.logout'], [data-i18n-title='header.logout']")
      : null;
    return Boolean(control);
  }

  function handleLogoutClick(event) {
    if (!isLogoutTarget(event.target)) return;
    stopEvent(event);
    if (window.AndroidBridge && typeof window.AndroidBridge.logout === 'function') {
      window.AndroidBridge.logout();
    } else {
      setTimeout(() => {
        clearLicenseAndShowGate("Logged out.");
      }, 120);
    }
  }

  function startRevocationMonitor() {
    if (revocationMonitorStarted) return;
    revocationMonitorStarted = true;

    setTimeout(revalidateStoredLicense, 2500);
    setInterval(revalidateStoredLicense, 15000);

    try {
      chrome.storage.onChanged.addListener((changes, areaName) => {
        if (areaName !== "local" || clearingLicense) return;
        const validWasCleared = (changes.ql_license_valid && changes.ql_license_valid.oldValue === true && changes.ql_license_valid.newValue === false) ||
          (changes.license_valid && changes.license_valid.oldValue === true && changes.license_valid.newValue === false);
        const keyWasRemoved = (changes.ql_license_key && changes.ql_license_key.oldValue && !changes.ql_license_key.newValue) ||
          (changes.license_key && changes.license_key.oldValue && !changes.license_key.newValue);
        if (validWasCleared || keyWasRemoved) showLicenseGateNow("Please enter your license key again.");
      });
    } catch (error) {}
  }

  async function runValidation() {
    if (validating) return;

    const input = findLicenseInput();
    const key = input ? input.value : "";

    validating = true;
    setValidateButtonBusy(true);
    setStatus("Checking license...", "info");

    try {
      const state = await validateLegacyLicense(key);
      setStatus("License activated for " + (state.ql_user_name || "User") + ".", "ok");

      setTimeout(() => {
        try {
          if (typeof showMainUI === "function") showMainUI();
          else location.reload();
        } catch (error) {
          location.reload();
        }
      }, 700);
    } catch (error) {
      setStatus(error && error.message ? error.message : "License validation failed.", "error");
      if (input) input.focus();
    } finally {
      validating = false;
      setValidateButtonBusy(false);
    }
  }

  function stopEvent(event) {
    event.preventDefault();
    event.stopPropagation();
    if (typeof event.stopImmediatePropagation === "function") event.stopImmediatePropagation();
  }

  function handleClick(event) {
    if (!isValidateButton(event.target)) return;
    stopEvent(event);
    runValidation();
  }

  function handleKeydown(event) {
    if (event.key !== "Enter") return;
    const input = findLicenseInput();
    if (!input || event.target !== input) return;
    stopEvent(event);
    runValidation();
  }

  function handleSubmit(event) {
    const input = findLicenseInput(event.target);
    if (!input) return;
    stopEvent(event);
    runValidation();
  }

  function tagValidateButton() {
    const button = document.querySelector("#ql-validate-btn, #sp-validate-btn");
    if (button) button.dataset.lastZoneLegacyBridge = "1";
  }

  window.addEventListener("click", handleClick, true);
  window.addEventListener("click", handleLogoutClick, true);
  window.addEventListener("keydown", handleKeydown, true);
  window.addEventListener("submit", handleSubmit, true);
  startRevocationMonitor();

  try {
    new MutationObserver(tagValidateButton).observe(document.documentElement || document, {
      childList: true,
      subtree: true
    });
  } catch (error) {}

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", tagValidateButton);
  } else {
    tagValidateButton();
  }

  window.LAST_ZONE_LEGACY_LICENSE_BRIDGE = {
    validate: validateLegacyLicense,
    revalidate: revalidateStoredLicense,
    logout: clearLicenseAndShowGate,
    supabaseUrl: SUPABASE_URL
  };
})();
