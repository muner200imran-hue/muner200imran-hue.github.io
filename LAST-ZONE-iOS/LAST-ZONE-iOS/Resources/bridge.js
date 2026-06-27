(function() {
    if (window.chrome && window.chrome.runtime && window.chrome.runtime.sendMessage) {
        // Already initialized
        return;
    }

    const isBackground = window.location.href.includes('background.html');
    const isSidepanel = window.location.href.includes('sidepanel.html');
    const contextName = isBackground ? "Background" : (isSidepanel ? "Sidepanel" : "Content Script");
    console.log("[ChromeBridgeJS] Initializing mock chrome API in " + contextName + " context.");

    // Initialize current tab URL for Content Scripts
    const native = window.AndroidBridge;
    if (!isBackground) {
        window.chromeCurrentTabUrl = window.location.href;
        
        // Intercept SPA navigation inside bridge.js
        (function patchHistory() {
            const pushState = history.pushState;
            const replaceState = history.replaceState;
            
            function handleUrlChange() {
                const newUrl = window.location.href;
                console.log("[ChromeBridgeJS] SPA URL changed to: " + newUrl);
                window.chromeCurrentTabUrl = newUrl;
                
                // Trigger tabs.onUpdated
                if (window.chrome && window.chrome.tabs && window.chrome.tabs.onUpdated && window.chrome.tabs.onUpdated.trigger) {
                    window.chrome.tabs.onUpdated.trigger(1, { url: newUrl, status: 'complete' }, { id: 1, url: newUrl, status: 'complete', active: true });
                }
                
                // Notify background script via bridge
                if (native && native.updateCurrentTabUrl) {
                    native.updateCurrentTabUrl(newUrl);
                }
            }
            
            history.pushState = function() {
                const result = pushState.apply(this, arguments);
                handleUrlChange();
                return result;
            };
            
            history.replaceState = function() {
                const result = replaceState.apply(this, arguments);
                handleUrlChange();
                return result;
            };
            
            window.addEventListener('popstate', handleUrlChange);
            window.addEventListener('hashchange', handleUrlChange);
        })();
    }

    window.chromeCallbacks = {};
    let callbackIdCounter = 0;

    function registerCallback(callback) {
        let id = "cb_" + (++callbackIdCounter) + "_" + Date.now();
        if (isSidepanel) {
            id += "_sidepanel";
        } else if (isBackground) {
            id += "_background";
        }
        if (typeof callback === 'function') {
            window.chromeCallbacks[id] = callback;
        }
        return id;
    }

    // Native Bridge interface check
    if (!native) {
        console.error("[ChromeBridgeJS] AndroidBridge is not exposed!");
    }

    // chrome.runtime mock
    const runtimeListeners = [];
    const runtime = {
        id: "last-zone-extension-id",
        
        getURL: function(path) {
            if (path.startsWith('/')) path = path.substring(1);
            return "chrome-extension://" + runtime.id + "/" + path;
        },

        sendMessage: function(message, responseCallback) {
            const callbackId = registerCallback(responseCallback);
            if (isBackground) {
                // Background sending message (usually not common in this architecture, but supported)
                if (native && native.postMessageFromBackground) {
                    native.postMessageFromBackground(JSON.stringify(message), callbackId);
                }
            } else {
                // Content Script sending message to Background
                if (native && native.postMessageFromTab) {
                    native.postMessageFromTab(JSON.stringify(message), callbackId);
                }
            }
        },

        onMessage: {
            addListener: function(listener) {
                runtimeListeners.push(listener);
            },
            removeListener: function(listener) {
                const index = runtimeListeners.indexOf(listener);
                if (index > -1) {
                    runtimeListeners.splice(index, 1);
                }
            },
            // Android triggers this to dispatch events
            trigger: function(message, sender, callbackId) {
                console.log("[ChromeBridgeJS] onMessage.trigger received message:", message);
                let responseSent = false;
                const sendResponse = function(response) {
                    if (responseSent) return;
                    responseSent = true;
                    if (native && native.sendCallbackResponse) {
                        native.sendCallbackResponse(callbackId, JSON.stringify(response));
                    }
                };

                for (const listener of runtimeListeners) {
                    try {
                        const result = listener(message, sender, sendResponse);
                        // If listener returns true, it indicates asynchronous response
                        if (result === true) {
                            responseSent = false; // will be sent later by sendResponse
                        }
                    } catch (e) {
                        console.error("[ChromeBridgeJS] Error in onMessage listener: ", e);
                    }
                }
            }
        },

        onInstalled: {
            addListener: function(listener) {
                if (isBackground) {
                    // Trigger immediately for simplicity
                    setTimeout(() => {
                        try { listener({ reason: "install" }); } catch(e) {}
                    }, 100);
                }
            }
        },

        onStartup: {
            addListener: function(listener) {
                if (isBackground) {
                    setTimeout(() => {
                        try { listener(); } catch(e) {}
                    }, 200);
                }
            }
        },

        onConnect: {
            addListener: function(listener) {},
            removeListener: function(listener) {}
        }
    };

    // chrome.storage mock
    const storageListeners = [];
    const storage = {
        local: {
            get: function(keys, callback) {
                return new Promise((resolve) => {
                    const callbackId = registerCallback(function(response) {
                        const result = response || {};
                        if (callback) {
                            try { callback(result); } catch(e) {}
                        }
                        resolve(result);
                    });
                    
                    let keysStr = "";
                    if (typeof keys === 'string') {
                        keysStr = JSON.stringify([keys]);
                    } else if (Array.isArray(keys)) {
                        keysStr = JSON.stringify(keys);
                    } else if (keys && typeof keys === 'object') {
                        keysStr = JSON.stringify(Object.keys(keys));
                    } else {
                        keysStr = "[]";
                    }
                    
                    if (native && native.storageGet) {
                        if (keys && typeof keys === 'object' && !Array.isArray(keys)) {
                            const originalCallback = callback;
                            window.chromeCallbacks[callbackId] = function(response) {
                                const merged = Object.assign({}, keys, response || {});
                                if (callback) {
                                    try { callback(merged); } catch(e) {}
                                }
                                resolve(merged);
                            };
                        }
                        native.storageGet(keysStr, callbackId);
                    } else {
                        const defaults = (keys && typeof keys === 'object' && !Array.isArray(keys)) ? keys : {};
                        resolve(defaults);
                        if (callback) {
                            try { callback(defaults); } catch(e) {}
                        }
                    }
                });
            },
            set: function(items, callback) {
                return new Promise((resolve) => {
                    const callbackId = registerCallback(function() {
                        if (callback) {
                            try { callback(); } catch(e) {}
                        }
                        resolve();
                    });
                    if (native && native.storageSet) {
                        native.storageSet(JSON.stringify(items), callbackId);
                    } else {
                        resolve();
                        if (callback) {
                            try { callback(); } catch(e) {}
                        }
                    }
                });
            },
            remove: function(keys, callback) {
                return new Promise((resolve) => {
                    const callbackId = registerCallback(function() {
                        if (callback) {
                            try { callback(); } catch(e) {}
                        }
                        resolve();
                    });
                    let keysStr = Array.isArray(keys) ? JSON.stringify(keys) : JSON.stringify([keys]);
                    if (native && native.storageRemove) {
                        native.storageRemove(keysStr, callbackId);
                    } else {
                        resolve();
                        if (callback) {
                            try { callback(); } catch(e) {}
                        }
                    }
                });
            },
            clear: function(callback) {
                return new Promise((resolve) => {
                    const callbackId = registerCallback(function() {
                        if (callback) {
                            try { callback(); } catch(e) {}
                        }
                        resolve();
                    });
                    if (native && native.storageClear) {
                        native.storageClear(callbackId);
                    } else {
                        resolve();
                        if (callback) {
                            try { callback(); } catch(e) {}
                        }
                    }
                });
            }
        },
        onChanged: {
            addListener: function(listener) {
                storageListeners.push(listener);
            },
            removeListener: function(listener) {
                const index = storageListeners.indexOf(listener);
                if (index > -1) {
                    storageListeners.splice(index, 1);
                }
            },
            trigger: function(changes, areaName) {
                console.log("[ChromeBridgeJS] storage.onChanged.trigger:", changes, areaName);
                for (const listener of storageListeners) {
                    try {
                        listener(changes, areaName);
                    } catch (e) {
                        console.error("[ChromeBridgeJS] Error in storage.onChanged listener: ", e);
                    }
                }
            }
        }
    };
    storage.sync = storage.local;

    // chrome.tabs mock (mainly for background script to send messages to tabs)
    const tabsListeners = [];
    const tabs = {
        query: function(queryInfo, callback) {
            if (callback) {
                const currentUrl = window.chromeCurrentTabUrl || "https://lovable.dev/";
                callback([{ id: 1, url: currentUrl, active: true }]);
            }
        },
        sendMessage: function(tabId, message, options, responseCallback) {
            let actualCallback = responseCallback;
            if (typeof options === 'function') {
                actualCallback = options;
            }
            const callbackId = registerCallback(actualCallback);
            if (native && native.postMessageToTab) {
                native.postMessageToTab(tabId, JSON.stringify(message), callbackId);
            }
        },
        onUpdated: {
            addListener: function(listener) {
                tabsListeners.push(listener);
            },
            removeListener: function(listener) {
                const index = tabsListeners.indexOf(listener);
                if (index > -1) {
                    tabsListeners.splice(index, 1);
                }
            },
            trigger: function(tabId, changeInfo, tab) {
                console.log("[ChromeBridgeJS] tabs.onUpdated.trigger:", tabId, changeInfo, tab);
                for (const listener of tabsListeners) {
                    try {
                        listener(tabId, changeInfo, tab);
                    } catch (e) {
                        console.error("[ChromeBridgeJS] Error in tabs.onUpdated listener: ", e);
                    }
                }
            }
        }
    };

    // chrome.cookies mock
    const cookies = {
        get: function(details, callback) {
            const callbackId = registerCallback(callback);
            if (native && native.getCookie) {
                native.getCookie(details.url, details.name || "", callbackId);
            } else if (callback) {
                callback(null);
            }
        },
        getAll: function(details, callback) {
            const callbackId = registerCallback(callback);
            if (native && native.getAllCookies) {
                let url = details.url;
                if (!url && details.domain) {
                    const cleanDomain = details.domain.startsWith('.') ? details.domain.substring(1) : details.domain;
                    url = "https://" + cleanDomain;
                }
                if (!url) {
                    url = "https://lovable.dev";
                }
                native.getAllCookies(url, callbackId);
            } else if (callback) {
                callback([]);
            }
        },
        set: function(details, callback) {
            const callbackId = registerCallback(callback);
            if (native && native.setCookie) {
                native.setCookie(details.url, details.name, details.value, details.expirationDate || 0, callbackId);
            } else if (callback) {
                callback(null);
            }
        }
    };

    // chrome.sidePanel mock
    const sidePanel = {
        setPanelOptions: function(options, callback) {
            console.log("[ChromeBridgeJS] sidePanel.setPanelOptions", options);
            if (callback) callback();
            return Promise.resolve();
        },
        setOptions: function(options, callback) {
            console.log("[ChromeBridgeJS] sidePanel.setOptions", options);
            if (callback) callback();
            return Promise.resolve();
        },
        open: function(options, callback) {
            console.log("[ChromeBridgeJS] sidePanel.open called with options:", options);
            const floating = findElementInShadows('#ql-floating');
            if (floating) {
                console.log("[ChromeBridgeJS] Expanding floating panel from sidePanel.open");
                expandMinimizedFloating(floating, null, 'sidePanel.open');
                clampFloatingToViewport(floating);
            }
            if (callback) callback();
            return Promise.resolve();
        },
        setPanelBehavior: function(behavior, callback) {
            console.log("[ChromeBridgeJS] sidePanel.setPanelBehavior", behavior);
            if (callback) callback();
            return Promise.resolve();
        }
    };

    // chrome.action mock
    const actionListeners = [];
    const action = {
        onClicked: {
            addListener: function(listener) {
                console.log("[ChromeBridgeJS] action.onClicked.addListener registered");
                actionListeners.push(listener);
            },
            removeListener: function(listener) {
                const index = actionListeners.indexOf(listener);
                if (index > -1) {
                    actionListeners.splice(index, 1);
                }
            },
            trigger: function(tab) {
                console.log("[ChromeBridgeJS] action.onClicked.trigger fired");
                for (const listener of actionListeners) {
                    try { listener(tab || { id: 1, url: window.location.href, active: true }); } catch(e) {
                        console.error("[ChromeBridgeJS] Error in action.onClicked listener: ", e);
                    }
                }
            }
        }
    };

    // Expose mocked APIs
    window.chrome = {
        runtime: runtime,
        storage: storage,
        tabs: tabs,
        cookies: cookies,
        sidePanel: sidePanel,
        action: action
    };

    // Override window.close to close the sidepanel
    window.close = function() {
        console.log("[ChromeBridgeJS] window.close() intercepted.");
        if (native && native.closeSidepanel) {
            native.closeSidepanel();
        }
    };

    const QL_MINIMIZE_SELECTORS = [
        '#sp-back-to-popup',
        '#ql-minimize',
        '.ql-minimize-btn',
        '.sp-close-btn',
        '.sp-minimize-btn',
        '[title="Minimize"]',
        '[title="Back to floating mode"]'
    ].join(',');
    const QL_VIEWPORT_MARGIN = 8;
    const QL_DRAG_THRESHOLD = 8;
    let qlLastMinimizedAt = 0;
    let qlActiveGesture = null;
    let qlSuppressTapUntil = 0;

    function getEventPath(event) {
        return event && event.composedPath ? event.composedPath() : [];
    }

    function asElement(node) {
        if (!node) return null;
        if (node.nodeType === 1) return node;
        return node.parentElement || null;
    }

    function closestFromEvent(event, selector) {
        const target = asElement(event && event.target);
        if (target && target.closest) {
            const closest = target.closest(selector);
            if (closest) return closest;
        }
        for (const node of getEventPath(event)) {
            const el = asElement(node);
            if (!el) continue;
            if (el.matches && el.matches(selector)) return el;
            if (el.closest) {
                const closest = el.closest(selector);
                if (closest) return closest;
            }
        }
        return null;
    }

    function shouldMinimizeFromEvent(event) {
        if (closestFromEvent(event, QL_MINIMIZE_SELECTORS)) {
            return true;
        }
        const target = asElement(event && event.target);
        const button = closestFromEvent(event, 'button');
        const label = ((button || target)?.textContent || '').trim();
        const id = ((button || target)?.id || '').toLowerCase();
        const className = typeof (button || target)?.className === 'string'
            ? (button || target).className.toLowerCase()
            : '';
        return label === '◀ Popup' ||
            label === '-' ||
            id.includes('minimize') ||
            id.includes('close') ||
            className.includes('minimize') ||
            className.includes('close');
    }

    function stopFloatingEvent(event) {
        if (!event) return;
        if (event.cancelable) event.preventDefault();
        event.stopPropagation();
        if (event.stopImmediatePropagation) event.stopImmediatePropagation();
    }

    function getEventPoint(event) {
        if (!event) return null;
        const touch = (event.changedTouches && event.changedTouches[0]) ||
            (event.touches && event.touches[0]);
        if (touch) {
            return { x: touch.clientX, y: touch.clientY };
        }
        if (Number.isFinite(event.clientX) && Number.isFinite(event.clientY)) {
            return { x: event.clientX, y: event.clientY };
        }
        return null;
    }

    function beginFloatingGesture(event) {
        const floating = getMinimizedFloatingFromEvent(event);
        const point = getEventPoint(event);
        if (!floating || !point) return;
        qlActiveGesture = {
            floating,
            startX: point.x,
            startY: point.y,
            moved: false
        };
    }

    function updateFloatingGesture(event) {
        if (!qlActiveGesture) return null;
        const point = getEventPoint(event);
        if (!point) return qlActiveGesture;
        const dx = point.x - qlActiveGesture.startX;
        const dy = point.y - qlActiveGesture.startY;
        if (Math.hypot(dx, dy) > QL_DRAG_THRESHOLD) {
            qlActiveGesture.moved = true;
        }
        return qlActiveGesture;
    }

    function finishFloatingGesture(event) {
        const gesture = updateFloatingGesture(event);
        qlActiveGesture = null;
        if (gesture && gesture.moved) {
            qlSuppressTapUntil = Date.now() + 450;
            clampFloatingToViewport(gesture.floating);
        }
        return gesture;
    }

    function getFloatingTranslation(floating) {
        const dataX = parseFloat(floating.dataset.qlTranslateX || '');
        const dataY = parseFloat(floating.dataset.qlTranslateY || '');
        if (Number.isFinite(dataX) && Number.isFinite(dataY)) {
            return { x: dataX, y: dataY };
        }

        const transform = floating.style.transform || getComputedStyle(floating).transform || '';
        if (transform && transform !== 'none') {
            const matrix3d = transform.match(/matrix3d\(([^)]+)\)/);
            if (matrix3d) {
                const values = matrix3d[1].split(',').map(Number);
                if (values.length >= 16) {
                    return { x: values[12] || 0, y: values[13] || 0 };
                }
            }
            const matrix = transform.match(/matrix\(([^)]+)\)/);
            if (matrix) {
                const values = matrix[1].split(',').map(Number);
                if (values.length >= 6) {
                    return { x: values[4] || 0, y: values[5] || 0 };
                }
            }
            const translate = transform.match(/translate3?d?\(([-0-9.]+)px,\s*([-0-9.]+)px/i);
            if (translate) {
                return { x: parseFloat(translate[1]) || 0, y: parseFloat(translate[2]) || 0 };
            }
        }
        return { x: 0, y: 0 };
    }

    function setFloatingTranslation(floating, x, y) {
        const safeX = Math.round((Number.isFinite(x) ? x : 0) * 100) / 100;
        const safeY = Math.round((Number.isFinite(y) ? y : 0) * 100) / 100;
        floating.dataset.qlTranslateX = String(safeX);
        floating.dataset.qlTranslateY = String(safeY);
        floating.style.transform = "translate3d(" + safeX + "px, " + safeY + "px, 0)";
        return { x: safeX, y: safeY };
    }

    function clampFloatingToViewport(floating) {
        if (!floating) return;
        const clampNow = () => {
            const rect = floating.getBoundingClientRect();
            if (!rect.width || !rect.height) return;
            const current = getFloatingTranslation(floating);
            let dx = 0;
            let dy = 0;
            const maxRight = window.innerWidth - QL_VIEWPORT_MARGIN;
            const maxBottom = window.innerHeight - QL_VIEWPORT_MARGIN;

            if (rect.width >= window.innerWidth - QL_VIEWPORT_MARGIN * 2) {
                dx = QL_VIEWPORT_MARGIN - rect.left;
            } else if (rect.left < QL_VIEWPORT_MARGIN) {
                dx = QL_VIEWPORT_MARGIN - rect.left;
            } else if (rect.right > maxRight) {
                dx = maxRight - rect.right;
            }

            if (rect.height >= window.innerHeight - QL_VIEWPORT_MARGIN * 2) {
                dy = QL_VIEWPORT_MARGIN - rect.top;
            } else if (rect.top < QL_VIEWPORT_MARGIN) {
                dy = QL_VIEWPORT_MARGIN - rect.top;
            } else if (rect.bottom > maxBottom) {
                dy = maxBottom - rect.bottom;
            }

            if (dx || dy) {
                setFloatingTranslation(floating, current.x + dx, current.y + dy);
            }
        };
        clampNow();
        requestAnimationFrame(clampNow);
        setTimeout(clampNow, 120);
    }

    function floatingNeedsVisibilityReset(floating) {
        if (!floating) return false;
        const rect = floating.getBoundingClientRect();
        const current = getFloatingTranslation(floating);
        const extremeX = Math.abs(current.x) > Math.max(window.innerWidth * 2, 720);
        const extremeY = Math.abs(current.y) > Math.max(window.innerHeight * 2, 720);
        const outsideX = rect.right < -QL_VIEWPORT_MARGIN || rect.left > window.innerWidth + QL_VIEWPORT_MARGIN;
        const outsideY = rect.bottom < -QL_VIEWPORT_MARGIN || rect.top > window.innerHeight + QL_VIEWPORT_MARGIN;
        return extremeX || extremeY || outsideX || outsideY;
    }

    function ensureFloatingOnScreen(floating, forceReset) {
        if (!floating) return;
        if (forceReset || floatingNeedsVisibilityReset(floating)) {
            const origTransition = floating.style.transition;
            floating.style.transition = 'none';
            setFloatingTranslation(floating, 0, 0);
            void floating.offsetHeight; // force reflow
            clampFloatingToViewport(floating);
            void floating.offsetHeight; // force reflow
            floating.style.transition = origTransition;
            return;
        }
        clampFloatingToViewport(floating);
    }

    function minimizeFloating(floating, event, source) {
        if (!floating || !floating.classList || floating.classList.contains('ql-minimized')) {
            return false;
        }
        console.log("[ChromeBridgeJS] Minimizing floating panel via " + source + ".");
        qlLastMinimizedAt = Date.now();
        floating.classList.add('ql-minimized');
        floating.style.pointerEvents = 'auto';
        clampFloatingToViewport(floating);
        if (native && native.closeSidepanel) {
            native.closeSidepanel();
        }
        stopFloatingEvent(event);
        return true;
    }

    function resetExpandedFloatingPosition(floating) {
        if (!floating) return;
        const resetAndClamp = () => {
            ensureFloatingOnScreen(floating, true);
        };
        resetAndClamp();
        requestAnimationFrame(resetAndClamp);
        setTimeout(resetAndClamp, 80);
        setTimeout(resetAndClamp, 240);
        setTimeout(resetAndClamp, 500);
    }

    function expandMinimizedFloating(floating, event, source) {
        if (!floating || !floating.classList || !floating.classList.contains('ql-minimized')) {
            return false;
        }
        if (event && Date.now() - qlLastMinimizedAt < 450) {
            stopFloatingEvent(event);
            return true;
        }
        console.log("[ChromeBridgeJS] Expanding minimized floating panel via " + source + ".");
        floating.classList.remove('ql-minimized');
        floating.style.pointerEvents = 'auto';
        resetExpandedFloatingPosition(floating);
        stopFloatingEvent(event);
        return true;
    }

    function handleFloatingActivation(event, source) {
        if (window.__ql_is_dragging) {
            return false;
        }

        const minimizedFloating = getMinimizedFloatingFromEvent(event);
        if (minimizedFloating) {
            if (source === 'touchend' || source === 'pointerup') {
                const gesture = finishFloatingGesture(event);
                if (gesture && gesture.moved) {
                    return false;
                }
            } else if (Date.now() < qlSuppressTapUntil) {
                stopFloatingEvent(event);
                return true;
            }
            return expandMinimizedFloating(minimizedFloating, event, source);
        }

        if (shouldMinimizeFromEvent(event)) {
            const floating = closestFromEvent(event, '#ql-floating') || findElementInShadows('#ql-floating');
            return minimizeFloating(floating, event, source);
        }
        return false;
    }

    document.addEventListener('touchend', (e) => {
        handleFloatingActivation(e, 'touchend');
    }, true);
    document.addEventListener('pointerup', (e) => {
        handleFloatingActivation(e, 'pointerup');
    }, true);
    document.addEventListener('touchstart', beginFloatingGesture, true);
    document.addEventListener('pointerdown', beginFloatingGesture, true);
    document.addEventListener('touchmove', updateFloatingGesture, true);
    document.addEventListener('pointermove', updateFloatingGesture, true);

    // Close/Minimize intercept via event delegation
    document.addEventListener('click', (e) => {
        if (window.__ql_is_dragging || Date.now() < qlSuppressTapUntil) {
            e.preventDefault();
            e.stopPropagation();
            return;
        }
        handleFloatingActivation(e, 'click');
    }, true); // Capture phase to intercept early

    // Helper function for Android to trigger callbacks
    window.triggerChromeCallback = function(callbackId, responseJson) {
        const callback = window.chromeCallbacks[callbackId];
        if (callback) {
            try {
                let response = null;
                if (responseJson) {
                    response = JSON.parse(responseJson);
                }
                callback(response);
            } catch(e) {
                console.error("[ChromeBridgeJS] Error executing callback " + callbackId + ":", e);
            } finally {
                delete window.chromeCallbacks[callbackId];
            }
        }
    };

    // Helper function to search for elements recursively through all open Shadow Roots
    function findElementInShadows(selector, root = document) {
        let el = root.querySelector(selector);
        if (el) return el;
        
        const allElements = root.querySelectorAll('*');
        for (const child of allElements) {
            if (child.shadowRoot) {
                el = findElementInShadows(selector, child.shadowRoot);
                if (el) return el;
            }
        }
        return null;
    }

    // Helper to detect minimized floating via composedPath (handles shadow DOM)
    function getMinimizedFloatingFromEvent(event) {
        const path = getEventPath(event);
        return path.find(el => el.id === 'ql-floating' && el.classList && el.classList.contains('ql-minimized')) || null;
    }

    // Drag-and-drop implementation for #ql-floating on mouse and touch screens
    function initDraggable() {
        const floating = findElementInShadows('#ql-floating');
        if (!floating) return;
        if (floating.dataset.draggableInitialized) return;
        floating.dataset.draggableInitialized = "true";
        console.log("[ChromeBridgeJS] Found #ql-floating and initializing draggable/tap events.");

        let active = false;
        let currentX;
        let currentY;
        let initialX;
        let initialY;
        let xOffset = 0;
        let yOffset = 0;
        let isDraggingFlag = false;

        function dragStart(e) {
            const target = asElement(e.target);
            if (!target) return;
            const currentOffset = getFloatingTranslation(floating);
            xOffset = currentOffset.x;
            yOffset = currentOffset.y;
            const isMinimized = floating.classList.contains('ql-minimized');
            if (isMinimized) {
                const point = getEventPoint(e);
                if (point) {
                    qlActiveGesture = {
                        floating,
                        startX: point.x,
                        startY: point.y,
                        moved: false
                    };
                }
            }
            
            // If expanded, only allow dragging from the header or its children (not buttons/inputs)
            if (!isMinimized) {
                const isHeaderClick = target.closest('#ql-header');
                const isInteractive = target.closest('button') || target.closest('a') || target.closest('input') || target.closest('textarea') || target.closest('select') || target.closest('.ql-switch') || target.closest('.ql-btn') || target.closest('.ql-option-row');
                if (!isHeaderClick || isInteractive) return;
            }

            if (e.type === "touchstart") {
                initialX = e.touches[0].clientX - xOffset;
                initialY = e.touches[0].clientY - yOffset;
            } else {
                initialX = e.clientX - xOffset;
                initialY = e.clientY - yOffset;
            }
            active = true;
            isDraggingFlag = false;
        }

        function dragEnd(e) {
            active = false;
            if (isDraggingFlag) {
                // Prevent click handler from firing
                window.__ql_is_dragging = true;
                qlSuppressTapUntil = Date.now() + 650;
                clampFloatingToViewport(floating);
                setTimeout(() => {
                    window.__ql_is_dragging = false;
                }, 550);
            } else {
                // Tap/Click detected
                handleFloatingActivation(e, 'dragEnd');
            }
        }

        function drag(e) {
            if (!active) return;
            
            // Allow dragging behavior on touch screens without scrolling the body page
            if (e.cancelable) e.preventDefault();

            let clientX, clientY;
            if (e.type === "touchmove") {
                clientX = e.touches[0].clientX;
                clientY = e.touches[0].clientY;
            } else {
                clientX = e.clientX;
                clientY = e.clientY;
            }

            currentX = clientX - initialX;
            currentY = clientY - initialY;

            if (Math.abs(currentX - xOffset) > 4 || Math.abs(currentY - yOffset) > 4) {
                isDraggingFlag = true;
                window.__ql_is_dragging = true;
                qlSuppressTapUntil = Date.now() + 650;
                if (qlActiveGesture && qlActiveGesture.floating === floating) {
                    qlActiveGesture.moved = true;
                }
            }

            setTranslate(currentX, currentY, floating);
        }

        function setTranslate(xPos, yPos, el) {
            const rect = el.getBoundingClientRect();
            const elWidth = rect.width;
            const elHeight = rect.height;
            const winWidth = window.innerWidth;
            const winHeight = window.innerHeight;
            const currentOffset = getFloatingTranslation(el);

            // Get original position (without current translation offsets)
            const origLeft = rect.left - currentOffset.x;
            const origTop = rect.top - currentOffset.y;

            // Target position
            let targetX = xPos;
            let targetY = yPos;

            // Constrain left/right
            if (origLeft + targetX < QL_VIEWPORT_MARGIN) {
                targetX = QL_VIEWPORT_MARGIN - origLeft;
            } else if (origLeft + targetX + elWidth > winWidth - QL_VIEWPORT_MARGIN) {
                targetX = winWidth - QL_VIEWPORT_MARGIN - origLeft - elWidth;
            }

            // Constrain top/bottom
            if (origTop + targetY < QL_VIEWPORT_MARGIN) {
                targetY = QL_VIEWPORT_MARGIN - origTop;
            } else if (origTop + targetY + elHeight > winHeight - QL_VIEWPORT_MARGIN) {
                targetY = winHeight - QL_VIEWPORT_MARGIN - origTop - elHeight;
            }

            const next = setFloatingTranslation(el, targetX, targetY);
            xOffset = next.x;
            yOffset = next.y;
        }

        floating.addEventListener("touchstart", dragStart, { passive: true });
        floating.addEventListener("touchend", dragEnd, { passive: true });
        floating.addEventListener("touchmove", drag, { passive: false });

        floating.addEventListener("mousedown", dragStart);
        document.addEventListener("mouseup", dragEnd);
        document.addEventListener("mousemove", drag);

        // Click listener on floating element itself for minimizing
        floating.addEventListener('click', (e) => {
            if (window.__ql_is_dragging || Date.now() < qlSuppressTapUntil) {
                e.preventDefault();
                e.stopPropagation();
                return;
            }
            handleFloatingActivation(e, 'floating-click');
        });

        setInterval(() => {
            if (!window.__ql_is_dragging && floatingNeedsVisibilityReset(floating)) {
                ensureFloatingOnScreen(floating, true);
            }
        }, 250);

        window.addEventListener('resize', () => clampFloatingToViewport(floating));
    }

    // Monitor DOM for ql-floating creation
    if (!isBackground) {
        console.log("[ChromeBridgeJS] Starting setInterval polling for #ql-floating.");
        const intervalId = setInterval(() => {
            const floating = findElementInShadows('#ql-floating');
            if (floating) {
                initDraggable();
                clearInterval(intervalId);
            }
        }, 500);
        
        // Safety timeout to clear interval after 60 seconds
        setTimeout(() => clearInterval(intervalId), 60000);

        // Run diagnostic check after 15 seconds to log all relevant elements in the DOM
        setTimeout(() => {
            try {
                const allElements = document.querySelectorAll('*');
                const matches = [];
                allElements.forEach(el => {
                    if (el.id || el.className) {
                        const idStr = String(el.id || '');
                        const classStr = typeof el.className === 'string' ? el.className : '';
                        if (idStr.includes('ql') || idStr.includes('sp') || classStr.includes('ql') || classStr.includes('sp')) {
                            matches.push({ tag: el.tagName, id: el.id, classes: classStr });
                        }
                    }
                });
                console.log("[ChromeBridgeJS] DIAGNOSTIC - Matching elements: " + JSON.stringify(matches));
            } catch (err) {
                console.error("[ChromeBridgeJS] Diagnostic failed:", err);
            }
        }, 15000);
    }
})();
