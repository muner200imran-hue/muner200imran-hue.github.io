/* LAST ZONE branding, colors, and language overrides.
 * Keeps the updated extension logic while restoring the old visible identity.
 */
(function () {
  'use strict';

  var BRAND_NAME = 'LAST ZONE';
  var FOOTER_TEXT = 'LAST ZONE';
  var SUPPORT_URL = 'https://t.me/+Dm8IppPh39s4YWIx';
  var LICENSE_PLACEHOLDER = 'LZ-XXXX-XXXX-XXXX';
  var ALLOWED_LANGS = ['en', 'ar'];
  var OLD_I18N = {
  "en": {
    "license.title": "Activate License",
    "license.desc": "Enter your license key to unlock.",
    "license.validate": "Validate License",
    "license.divider": "official site",
    "header.notifications": "Notifications",
    "header.sidepanel": "Open in Side Panel",
    "header.theme": "Theme",
    "header.logout": "Logout",
    "sync.waiting": "Waiting for sync...",
    "sync.ok": "✅ Synced!",
    "sync.project": "Project:",
    "tab.prompt": "Prompt",
    "tab.history": "History",
    "prompt.placeholder": "Enter your command...",
    "toggle.licenseMode": "Plan Mode",
    "toggle.licenseMode.short": "Plan",
    "btn.attach": "Attach file (max. 10)",
    "btn.attach.short": "Attach file",
    "btn.optimize": "Optimize with AI",
    "btn.speech": "Voice to text",
    "btn.speech.short": "Voice",
    "btn.send": "Send",
    "shortcuts.title": "QUICK SHORTCUTS",
    "btn.watermark": "Remove Watermark",
    "btn.shield.on": "Enable Shield",
    "btn.shield.off": "Disable Shield",
    "btn.nativeChat": "Start",
    "btn.nativeChatActive": "Start",
    "btn.backToExtension": "Back to Extension Chat",
    "btn.download": "Download Source Code",
    "btn.publish": "🌐 Publish Project",
    "btn.cloud": "☁️ Enable Lovable Cloud",
    "footer.support": "Support",
    "footer.brand": "LAST ZONE",
    "notif.title": "Notifications",
    "notif.loading": "Loading...",
    "notif.none": "No notifications.",
    "notif.error": "Failed to load.",
    "notif.openLink": "Open link →",
    "loading": "Loading...",
    "alert.success": "Success!",
    "alert.almostThere": "Almost there!",
    "alert.clickIcon": "Click the extension icon (top right) to open the side panel.",
    "alert.error": "Error",
    "alert.sidepanelSupport": "Unable to open the side panel. Make sure your browser supports this feature.",
    "alert.attention": "Attention",
    "alert.enterPrompt": "Please enter a prompt before optimizing.",
    "alert.promptOptimized": "Prompt Optimized! ✨",
    "alert.promptReady": "Your prompt has been enhanced with AI and is ready to send.",
    "alert.optimizerConnFail": "Failed to connect to the optimizer: ",
    "alert.micDenied": "Permission Denied",
    "alert.micAccess": "Please allow microphone access in your browser settings.",
    "alert.noAudio": "No Audio",
    "alert.noSpeech": "No speech detected. Please try again.",
    "alert.voiceError": "Voice Error",
    "alert.voiceInitFail": "Could not start voice recognition.",
    "alert.shieldActivated": "Shield Activated! 🛡️",
    "alert.shieldLocked": "Lovable input is locked. Use the extension to send prompts.",
    "alert.shieldDeactivated": "Shield Deactivated",
    "alert.shieldUnlocked": "Lovable input is unlocked again.",
    "alert.limit": "Limit",
    "alert.maxFiles": "Maximum of 10 files.",
    "alert.tokenNotCaptured": "Token not captured. Browse Lovable to synchronize.",
    "alert.largeFile": "Large File",
    "alert.fileExceeds": " exceeds 20MB.",
    "alert.uploadError": "Upload Error",
    "alert.uploadFail": "Could not upload image: ",
    "alert.attached": "Attached! 📎",
    "alert.filesAdded": " file(s) added!",
    "btn.ok": "OK",
    "expired.title": "License Expired!",
    "expired.text": "Your license period has ended. Visit the official site to renew.",
    "expired.renew": "🌐 Visit Site",
    "expired.close": "Close",
    "countdown.trial": "Trial expires in",
    "countdown.license": "License expires in",
    "countdown.expired": "⏰ License expired",
    "pay.title": "Visit the official site",
    "pay.divider": "Official site",
    "history.empty.title": "No messages",
    "history.empty.desc": "Your sent prompts will appear here as history.",
    "history.clear": "🗑 Clear History",
    "date.today": "Today",
    "date.yesterday": "Yesterday",
    "date.days": [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "chat.sent": "✓ Sent",
    "chat.error": "✗ Error",
    "update.title": "New update v",
    "update.download": "Download v",
    "sp.backToPopup": "◀ Popup",
    "shield.overlay.text": "🛡️ Protected by LAST ZONE",
    "shield.overlay.sub": "Use the extension to send prompts",
    "prompt.bugs.label": "Bugs",
    "prompt.refactor.label": "Refactor",
    "prompt.errors.label": "Errors",
    "prompt.optimize.label": "Optimize",
    "prompt.comments.label": "Comments",
    "prompt.seo.label": "SEO",
    "prompt.ui.label": "UI",
    "prompt.components.label": "Components",
    "prompt.review.label": "Review",
    "prompt.bugs.text": "Analyze the code and identify all bugs, errors and failures. Fix each one explaining the problem and the solution applied.",
    "prompt.refactor.text": "Elaborate a complete refactoring and optimization plan for the system in steps.",
    "prompt.errors.text": "Implement robust error handling throughout the code, including try/catch, validations and friendly error messages for the user.",
    "prompt.optimize.text": "Analyze and optimize system performance, identifying bottlenecks, improving queries, reducing re-renders and applying best practices.",
    "prompt.comments.text": "Add clear comments and documentation throughout the code, explaining the logic, parameters and return values of each function.",
    "prompt.seo.text": "Create a complete SEO optimization plan for this site.",
    "prompt.ui.text": "Improve the user interface making it more modern, responsive and accessible, following UX/UI best practices.",
    "prompt.components.text": "Reorganize the code separating into reusable, well-structured components with single responsibilities.",
    "prompt.review.text": "Do a complete code review identifying quality, security, performance issues and suggesting improvements.",
    "license.status.active": "Active",
    "license.status.trial": "Trial",
    "license.status.unlimited": "Unlimited License",
    "license.status.expired": "Expired",
    "license.status.expiresOn": "Expires on: ",
    "license.status.expiresIn": "License Expires In:",
    "session.time": "SESSION TIME",
    "planMode.alert.title": "Attention — Plan Mode",
    "planMode.alert.body": "<strong>Plan Mode/Think<\/strong> can consume credits, but offers great assistance. Use with moderation!",
    "planMode.alert.step1": "Activate <strong>Plan Mode<\/strong> to generate a plan.",
    "planMode.alert.step2": "On Lovable, <strong>do not click the Approve button<\/strong>; just copy the new plan.",
    "planMode.alert.step3": "Paste the copied plan into the extension prompt.",
    "planMode.alert.step4": "<strong>Turn off Plan Mode<\/strong> and send it via the extension; this way no extra credits will be consumed.",
    "planMode.alert.dismiss": "Don't show again",
    "planMode.alert.ok": "I understand!",
    "projectSync.title": "Project Sync",
    "projectSync.projectId": "Project ID",
    "projectSync.workspace": "Workspace",
    "projectSync.user": "User",
    "projectSync.account": "Account: ",
    "update.required.title": "Update Required",
    "update.required.desc": "Please update your extension to version v{version} to continue using LAST ZONE.",
    "update.required.btn": "Contact Support"
  },
  "ar": {
    "license.title": "تفعيل الترخيص",
    "license.desc": "أدخل مفتاح الترخيص لفتح الإضافة.",
    "license.validate": "التحقق من المفتاح",
    "license.divider": "الموقع الرسمي",
    "header.notifications": "الإشعارات",
    "header.sidepanel": "فتح في اللوحة الجانبية",
    "header.theme": "المظهر",
    "header.logout": "تسجيل الخروج",
    "sync.waiting": "بانتظار المزامنة...",
    "sync.ok": "✅ تم المزامنة!",
    "sync.project": "المشروع:",
    "tab.prompt": "الأوامر",
    "tab.history": "السجل",
    "prompt.placeholder": "اكتب أمرك هنا...",
    "toggle.licenseMode": "وضع الخطة",
    "toggle.licenseMode.short": "الخطة",
    "btn.attach": "إرفاق ملف (الحد الأقصى 10)",
    "btn.attach.short": "إرفاق ملف",
    "btn.optimize": "تحسين بالذكاء الاصطناعي",
    "btn.speech": "تحويل الصوت إلى نص",
    "btn.speech.short": "الصوت",
    "btn.send": "إرسال",
    "shortcuts.title": "اختصارات سريعة",
    "btn.watermark": "إزالة العلامة المائية",
    "btn.shield.on": "تفعيل الدرع",
    "btn.shield.off": "تعطيل الدرع",
    "btn.nativeChat": "Start",
    "btn.nativeChatActive": "Start",
    "btn.backToExtension": "العودة لدردشة الإضافة",
    "btn.download": "تحميل الكود المصدري",
    "btn.publish": "🌐 نشر المشروع",
    "btn.cloud": "☁️ تفعيل سحابة Lovable",
    "footer.support": "الدعم",
    "footer.brand": "LAST ZONE",
    "notif.title": "الإشعارات",
    "notif.loading": "جاري التحميل...",
    "notif.none": "لا توجد إشعارات.",
    "notif.error": "فشل التحميل.",
    "notif.openLink": "فتح الرابط ←",
    "loading": "جاري التحميل...",
    "alert.success": "تم بنجاح!",
    "alert.almostThere": "اقتربنا!",
    "alert.clickIcon": "انقر على أيقونة الإضافة (أعلى اليمين) لفتح اللوحة الجانبية.",
    "alert.error": "خطأ",
    "alert.sidepanelSupport": "لا يمكن فتح اللوحة الجانبية. تأكد من أن متصفحك يدعم هذه الميزة.",
    "alert.attention": "تنبيه",
    "alert.enterPrompt": "يرجى كتابة أمر قبل البدء بالتحسين.",
    "alert.promptOptimized": "تم تحسين الأمر! ✨",
    "alert.promptReady": "تم تحسين الأمر الخاص بك بالذكاء الاصطناعي وجاهز للإرسال.",
    "alert.optimizerConnFail": "فشل الاتصال بمحسن الأوامر: ",
    "alert.micDenied": "تم رفض الإذن",
    "alert.micAccess": "يرجى السماح بالوصول إلى الميكروفون في إعدادات متصفحك.",
    "alert.noAudio": "لا يوجد صوت",
    "alert.noSpeech": "لم يتم رصد أي حديث. يرجى المحاولة مرة أخرى.",
    "alert.voiceError": "خطأ في الصوت",
    "alert.voiceInitFail": "تعذر بدء التعرف على الصوت.",
    "alert.shieldActivated": "تم تفعيل الدرع! 🛡️",
    "alert.shieldLocked": "حقل الإدخال في Lovable مغلق. استخدم الإضافة لإرسال الأوامر.",
    "alert.shieldDeactivated": "تم تعطيل الدرع",
    "alert.shieldUnlocked": "حقل الإدخال في Lovable متاح مرة أخرى.",
    "alert.limit": "الحد الأقصى",
    "alert.maxFiles": "الحد الأقصى 10 ملفات.",
    "alert.tokenNotCaptured": "لم يتم التقاط الرمز المميّز. تصفح موقع Lovable للمزامنة.",
    "alert.largeFile": "ملف كبير الحجم",
    "alert.fileExceeds": " يتجاوز حجمه 20 ميجابايت.",
    "alert.uploadError": "خطأ في الرفع",
    "alert.uploadFail": "تعذر رفع الصورة: ",
    "alert.attached": "تم الإرفاق! 📎",
    "alert.filesAdded": " ملف(ات) تم إضافتها!",
    "btn.ok": "حسناً",
    "expired.title": "انتهت صلاحية الترخيص!",
    "expired.text": "انتهت صلاحية ترخيصك. يرجى زيارة الموقع الرسمي للتجديد.",
    "expired.renew": "🌐 زيارة الموقع",
    "expired.close": "إغلاق",
    "countdown.trial": "التجربة تنتهي خلال",
    "countdown.license": "الترخيص ينتهي خلال",
    "countdown.expired": "⏰ انتهى الترخيص",
    "pay.title": "تفضل بزيارة الموقع الرسمي",
    "pay.divider": "الموقع الرسمي",
    "history.empty.title": "لا توجد رسائل",
    "history.empty.desc": "الرسائل التي ترسلها ستظهر هنا كسجل.",
    "history.clear": "🗑 مسح السجل",
    "date.today": "اليوم",
    "date.yesterday": "أمس",
    "date.days": [
      "الأحد",
      "الإثنين",
      "الثلاثاء",
      "الأربعاء",
      "الخميس",
      "الجمعة",
      "السبت"
    ],
    "chat.sent": "✓ تم الإرسال",
    "chat.error": "✗ خطأ",
    "update.title": "تحديث جديد v",
    "update.download": "تحميل v",
    "sp.backToPopup": "◀ المنبثقة",
    "shield.overlay.text": "🛡️ محمي بواسطة LAST ZONE",
    "shield.overlay.sub": "استخدم الإضافة لإرسال الأوامر",
    "prompt.bugs.label": "الأخطاء",
    "prompt.refactor.label": "إعادة هيكلة",
    "prompt.errors.label": "الأخطاء الشائعة",
    "prompt.optimize.label": "تحسين الأداء",
    "prompt.comments.label": "التعليقات",
    "prompt.seo.label": "سيو SEO",
    "prompt.ui.label": "واجهة المستخدم",
    "prompt.components.label": "المكونات",
    "prompt.review.label": "مراجعة الكود",
    "prompt.bugs.text": "حلل الكود وحدد جميع الأخطاء والثغرات وقم بإصلاحها مع شرح المشكلة والحل.",
    "prompt.refactor.text": "ضع خطة كاملة لإعادة هيكلة وتحسين النظام بالخطوات.",
    "prompt.errors.text": "قم بإعداد معالجة قوية للأخطاء في الكود تشمل try/catch ورسائل تنبيهية واضحة.",
    "prompt.optimize.text": "حلل الكود وحسن الأداء لجعله أسرع وتجنب تكرار العمليات غير الضرورية.",
    "prompt.comments.text": "أضف تعليقات واضحة وتوثيقاً في جميع أنحاء الكود لشرح منطق كل دالة.",
    "prompt.seo.text": "ضع خطة تحسين SEO كاملة لهذا الموقع.",
    "prompt.ui.text": "حسن واجهة المستخدم لتصبح أكثر عصرية وتفاعلية وتوافقاً مع الهواتف.",
    "prompt.components.text": "أعد تنظيم الكود وفصله إلى مكونات قابلة لإعادة الاستخدام.",
    "prompt.review.text": "قم بمراجعة شاملة للكود للتحقق من الجودة والحماية والأداء واقتراح التحسينات.",
    "license.status.active": "نشط",
    "license.status.trial": "تجريبي",
    "license.status.unlimited": "ترخيص غير محدود",
    "license.status.expired": "منتهي",
    "license.status.expiresOn": "ينتهي في: ",
    "license.status.expiresIn": "ينتهي الترخيص خلال:",
    "session.time": "وقت الجلسة",
    "planMode.alert.title": "تنبيه — وضع الخطة",
    "planMode.alert.body": "وضع <strong>الخطة/التفكير<\/strong> قد يستهلك رصيداً، ولكنه يقدم مساعدة جيدة. استخدمه باعتدال!",
    "planMode.alert.step1": "قم بتفعيل <strong>وضع الخطة<\/strong> لإنشاء خطة عمل.",
    "planMode.alert.step2": "في موقع Lovable، <strong>لا تضغط على زر الموافقة (Approve)<\/strong>؛ فقط قم بنسخ الخطة الجديدة.",
    "planMode.alert.step3": "قم بلصق الخطة المنسوخة في حقل الأوامر بالإضافة.",
    "planMode.alert.step4": "<strong>أوقف تفعيل وضع الخطة<\/strong> وأرسل الأمر عبر الإضافة؛ بهذه الطريقة لن يتم استهلاك أي رصيد إضافي.",
    "planMode.alert.dismiss": "لا تظهر مجدداً",
    "planMode.alert.ok": "مفهوم!",
    "projectSync.title": "مزامنة المشروع",
    "projectSync.projectId": "رقم المشروع",
    "projectSync.workspace": "مساحة العمل",
    "projectSync.user": "المستخدم",
    "projectSync.account": "الحساب: ",
    "update.required.title": "مطلوب تحديث الإضافة",
    "update.required.desc": "يرجى تحديث الإضافة إلى الإصدار v{version} للاستمرار في استخدام LAST ZONE.",
    "update.required.btn": "تواصل مع الدعم"
  }
};

  function getLogoUrl() {
    try {
      if (typeof chrome !== 'undefined' && chrome.runtime && chrome.runtime.getURL) {
        return chrome.runtime.getURL('assets/logo-master-lovable-square.png');
      }
    } catch (err) {}
    return 'assets/logo-master-lovable-square.png';
  }

  var LOGO_URL = getLogoUrl();
  var REPLACEMENTS = [
    [/Developed\s+by\s+Lovable\s+Hut\s+BD\s+Extension/gi, FOOTER_TEXT],
    [/Developed\s+by\s+Lovable\s+Hut\s+BD\s+Store/gi, FOOTER_TEXT],
    [/Developed\s+by\s+Lovable\s+Hut\s+BD/g, FOOTER_TEXT],
    [/Developed\s+by\s+LAST\s+ZONE/g, FOOTER_TEXT],
    [/Lovable\s+Hut\s+BD\s+Extension/g, BRAND_NAME],
    [/Lovable\s+Hut\s+Bd\s+Extension/g, BRAND_NAME],
    [/LAST\s+ZONE\s+Extension/g, BRAND_NAME],
    [/Lovable\s+Hut\s+BD/g, BRAND_NAME],
    [/Lovable\s+Hut\s+Bd/g, BRAND_NAME],
    [/Ornov\s+Tech\s+BD/g, BRAND_NAME],
    [/Infinity\s+Lovable/g, BRAND_NAME],
    [/Lovable\s+Infinity/g, BRAND_NAME],
    [/Por:\s*LAST\s+ZONE/g, FOOTER_TEXT],
    [/Por:\s*@dynhosilvaoficial/g, FOOTER_TEXT],
    [/@dynhosilvaoficial/g, BRAND_NAME],
    [/INFINITY-XXXX-XXXX-XXXX/g, LICENSE_PLACEHOLDER],
    [/Checking\s+license\s+on\s+LAST\s+ZONE\s+server\.\.\./g, 'Checking license on LAST ZONE...']
  ];




























  /* LAST_ZONE_STATIC_AR_MAP */
  var AR_STATIC_TEXT = {
    "Activate License": "\u062a\u0641\u0639\u064a\u0644 \u0627\u0644\u062a\u0631\u062e\u064a\u0635",
    "Enter your license key to unlock.": "\u0623\u062f\u062e\u0644 \u0645\u0641\u062a\u0627\u062d \u0627\u0644\u062a\u0631\u062e\u064a\u0635 \u0644\u0641\u062a\u062d \u0627\u0644\u0625\u0636\u0627\u0641\u0629.",
    "Validate License": "\u0627\u0644\u062a\u062d\u0642\u0642 \u0645\u0646 \u0627\u0644\u0645\u0641\u062a\u0627\u062d",
    "official site": "\u0627\u0644\u0645\u0648\u0642\u0639 \u0627\u0644\u0631\u0633\u0645\u064a",
    "Official site": "\u0627\u0644\u0645\u0648\u0642\u0639 \u0627\u0644\u0631\u0633\u0645\u064a",
    "Notifications": "\u0627\u0644\u0625\u0634\u0639\u0627\u0631\u0627\u062a",
    "Open in Side Panel": "\u0641\u062a\u062d \u0641\u064a \u0627\u0644\u0644\u0648\u062d\u0629 \u0627\u0644\u062c\u0627\u0646\u0628\u064a\u0629",
    "Theme": "\u0627\u0644\u0645\u0638\u0647\u0631",
    "Logout": "\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062e\u0631\u0648\u062c",
    "Sign Out": "\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062e\u0631\u0648\u062c",
    "Waiting for sync...": "\u0628\u0627\u0646\u062a\u0638\u0627\u0631 \u0627\u0644\u0645\u0632\u0627\u0645\u0646\u0629...",
    "Synced!": "\u2705 \u062a\u0645 \u0627\u0644\u0645\u0632\u0627\u0645\u0646\u0629!",
    "Project:": "\u0627\u0644\u0645\u0634\u0631\u0648\u0639:",
    "Prompt": "\u0627\u0644\u0623\u0648\u0627\u0645\u0631",
    "History": "\u0627\u0644\u0633\u062c\u0644",
    "Enter your command...": "\u0627\u0643\u062a\u0628 \u0623\u0645\u0631\u0643 \u0647\u0646\u0627...",
    "Plan Mode": "\u0648\u0636\u0639 \u0627\u0644\u062e\u0637\u0629",
    "Plan": "\u0627\u0644\u062e\u0637\u0629",
    "Attach file (max. 10)": "\u0625\u0631\u0641\u0627\u0642 \u0645\u0644\u0641 (\u0627\u0644\u062d\u062f \u0627\u0644\u0623\u0642\u0635\u0649 10)",
    "Attach file": "\u0625\u0631\u0641\u0627\u0642 \u0645\u0644\u0641",
    "Optimize with AI": "\u062a\u062d\u0633\u064a\u0646 \u0628\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a",
    "Voice to text": "\u062a\u062d\u0648\u064a\u0644 \u0627\u0644\u0635\u0648\u062a \u0625\u0644\u0649 \u0646\u0635",
    "Voice": "\u0627\u0644\u0635\u0648\u062a",
    "Send": "\u0625\u0631\u0633\u0627\u0644",
    "QUICK SHORTCUTS": "\u0627\u062e\u062a\u0635\u0627\u0631\u0627\u062a \u0633\u0631\u064a\u0639\u0629",
    "Quick Shortcuts": "\u0627\u062e\u062a\u0635\u0627\u0631\u0627\u062a \u0633\u0631\u064a\u0639\u0629",
    "Remove Watermark": "\u0625\u0632\u0627\u0644\u0629 \u0627\u0644\u0639\u0644\u0627\u0645\u0629 \u0627\u0644\u0645\u0627\u0626\u064a\u0629",
    "Enable Shield": "\u062a\u0641\u0639\u064a\u0644 \u0627\u0644\u062f\u0631\u0639",
    "Disable Shield": "\u062a\u0639\u0637\u064a\u0644 \u0627\u0644\u062f\u0631\u0639",
    "Use Standard Chat": "\u0627\u0633\u062a\u062e\u062f\u0645 \u0627\u0644\u062f\u0631\u062f\u0634\u0629 \u0627\u0644\u0642\u064a\u0627\u0633\u064a\u0629",
    "Disable Standard Chat": "\u062a\u0639\u0637\u064a\u0644 \u0627\u0644\u062f\u0631\u062f\u0634\u0629 \u0627\u0644\u0642\u064a\u0627\u0633\u064a\u0629",
    "Back to Extension Chat": "\u0627\u0644\u0639\u0648\u062f\u0629 \u0644\u062f\u0631\u062f\u0634\u0629 \u0627\u0644\u0625\u0636\u0627\u0641\u0629",
    "Download Source Code": "\u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0643\u0648\u062f \u0627\u0644\u0645\u0635\u062f\u0631\u064a",
    "Publish Project": "\u0646\u0634\u0631 \u0627\u0644\u0645\u0634\u0631\u0648\u0639",
    "Enable Lovable Cloud": "\u2601 \u062a\u0641\u0639\u064a\u0644 \u0633\u062d\u0627\u0628\u0629 Lovable",
    "Support": "\u0627\u0644\u062f\u0639\u0645",
    "Contact Support": "\u062a\u0648\u0627\u0635\u0644 \u0645\u0639 \u0627\u0644\u062f\u0639\u0645",
    "Loading...": "\u062c\u0627\u0631\u064a \u0627\u0644\u062a\u062d\u0645\u064a\u0644...",
    "No notifications.": "\u0644\u0627 \u062a\u0648\u062c\u062f \u0625\u0634\u0639\u0627\u0631\u0627\u062a.",
    "Failed to load.": "\u0641\u0634\u0644 \u0627\u0644\u062a\u062d\u0645\u064a\u0644.",
    "Open link": "\u0641\u062a\u062d \u0627\u0644\u0631\u0627\u0628\u0637 \u2190",
    "Open link ->": "\u0641\u062a\u062d \u0627\u0644\u0631\u0627\u0628\u0637 \u2190",
    "Success!": "\u062a\u0645 \u0628\u0646\u062c\u0627\u062d!",
    "Almost there!": "\u0627\u0642\u062a\u0631\u0628\u0646\u0627!",
    "Error": "\u062e\u0637\u0623",
    "Attention": "\u062a\u0646\u0628\u064a\u0647",
    "Permission Denied": "\u062a\u0645 \u0631\u0641\u0636 \u0627\u0644\u0625\u0630\u0646",
    "No Audio": "\u0644\u0627 \u064a\u0648\u062c\u062f \u0635\u0648\u062a",
    "Voice Error": "\u062e\u0637\u0623 \u0641\u064a \u0627\u0644\u0635\u0648\u062a",
    "Shield Activated!": "\u062a\u0645 \u062a\u0641\u0639\u064a\u0644 \u0627\u0644\u062f\u0631\u0639!",
    "Shield Deactivated": "\u062a\u0645 \u062a\u0639\u0637\u064a\u0644 \u0627\u0644\u062f\u0631\u0639",
    "Limit": "\u0627\u0644\u062d\u062f \u0627\u0644\u0623\u0642\u0635\u0649",
    "Large File": "\u0645\u0644\u0641 \u0643\u0628\u064a\u0631 \u0627\u0644\u062d\u062c\u0645",
    "Upload Error": "\u062e\u0637\u0623 \u0641\u064a \u0627\u0644\u0631\u0641\u0639",
    "Attached!": "\u062a\u0645 \u0627\u0644\u0625\u0631\u0641\u0627\u0642!",
    "OK": "\u062d\u0633\u0646\u0627\u064b",
    "License Expired!": "\u0627\u0646\u062a\u0647\u062a \u0635\u0644\u0627\u062d\u064a\u0629 \u0627\u0644\u062a\u0631\u062e\u064a\u0635!",
    "Close": "\u0625\u063a\u0644\u0627\u0642",
    "Trial expires in": "\u0627\u0644\u062a\u062c\u0631\u0628\u0629 \u062a\u0646\u062a\u0647\u064a \u062e\u0644\u0627\u0644",
    "License expires in": "\u0627\u0644\u062a\u0631\u062e\u064a\u0635 \u064a\u0646\u062a\u0647\u064a \u062e\u0644\u0627\u0644",
    "License expired": "\u23f0 \u0627\u0646\u062a\u0647\u0649 \u0627\u0644\u062a\u0631\u062e\u064a\u0635",
    "Visit the official site": "\u062a\u0641\u0636\u0644 \u0628\u0632\u064a\u0627\u0631\u0629 \u0627\u0644\u0645\u0648\u0642\u0639 \u0627\u0644\u0631\u0633\u0645\u064a",
    "Visit Site": "\u0632\u064a\u0627\u0631\u0629 \u0627\u0644\u0645\u0648\u0642\u0639",
    "No messages": "\u0644\u0627 \u062a\u0648\u062c\u062f \u0631\u0633\u0627\u0626\u0644",
    "Your sent prompts will appear here as history.": "\u0627\u0644\u0631\u0633\u0627\u0626\u0644 \u0627\u0644\u062a\u064a \u062a\u0631\u0633\u0644\u0647\u0627 \u0633\u062a\u0638\u0647\u0631 \u0647\u0646\u0627 \u0643\u0633\u062c\u0644.",
    "Clear History": "\u0645\u0633\u062d \u0627\u0644\u0633\u062c\u0644",
    "Today": "\u0627\u0644\u064a\u0648\u0645",
    "Yesterday": "\u0623\u0645\u0633",
    "Sent": "\u2713 \u062a\u0645 \u0627\u0644\u0625\u0631\u0633\u0627\u0644",
    "Active": "\u0646\u0634\u0637",
    "Trial": "\u062a\u062c\u0631\u064a\u0628\u064a",
    "Unlimited License": "\u062a\u0631\u062e\u064a\u0635 \u063a\u064a\u0631 \u0645\u062d\u062f\u0648\u062f",
    "Expired": "\u0645\u0646\u062a\u0647\u064a",
    "Expires on:": "\u064a\u0646\u062a\u0647\u064a \u0641\u064a:",
    "License Expires In:": "\u064a\u0646\u062a\u0647\u064a \u0627\u0644\u062a\u0631\u062e\u064a\u0635 \u062e\u0644\u0627\u0644:",
    "SESSION TIME": "\u0648\u0642\u062a \u0627\u0644\u062c\u0644\u0633\u0629",
    "Attention - Plan Mode": "\u062a\u0646\u0628\u064a\u0647 \u2014 \u0648\u0636\u0639 \u0627\u0644\u062e\u0637\u0629",
    "Attention \u2014 Plan Mode": "\u062a\u0646\u0628\u064a\u0647 \u2014 \u0648\u0636\u0639 \u0627\u0644\u062e\u0637\u0629",
    "Attention \u2013 Plan Mode": "\u062a\u0646\u0628\u064a\u0647 \u2014 \u0648\u0636\u0639 \u0627\u0644\u062e\u0637\u0629",
    "<strong>Plan Mode/Think</strong> can consume credits, but offers great assistance. Use with moderation!": "\u0648\u0636\u0639 <strong>\u0627\u0644\u062e\u0637\u0629/\u0627\u0644\u062a\u0641\u0643\u064a\u0631</strong> \u0642\u062f \u064a\u0633\u062a\u0647\u0644\u0643 \u0631\u0635\u064a\u062f\u0627\u064b\u060c \u0648\u0644\u0643\u0646\u0647 \u064a\u0642\u062f\u0645 \u0645\u0633\u0627\u0639\u062f\u0629 \u062c\u064a\u062f\u0629. \u0627\u0633\u062a\u062e\u062f\u0645\u0647 \u0628\u0627\u0639\u062a\u062f\u0627\u0644!",
    "Activate <strong>Plan Mode</strong> to generate a plan.": "\u0642\u0645 \u0628\u062a\u0641\u0639\u064a\u0644 <strong>\u0648\u0636\u0639 \u0627\u0644\u062e\u0637\u0629</strong> \u0644\u0625\u0646\u0634\u0627\u0621 \u062e\u0637\u0629 \u0639\u0645\u0644.",
    "On Lovable, <strong>do not click the Approve button</strong>; just copy the new plan.": "\u0641\u064a \u0645\u0648\u0642\u0639 Lovable\u060c <strong>\u0644\u0627 \u062a\u0636\u063a\u0637 \u0639\u0644\u0649 \u0632\u0631 \u0627\u0644\u0645\u0648\u0627\u0641\u0642\u0629 (Approve)</strong>\u061b \u0641\u0642\u0637 \u0642\u0645 \u0628\u0646\u0633\u062e \u0627\u0644\u062e\u0637\u0629 \u0627\u0644\u062c\u062f\u064a\u062f\u0629.",
    "Paste the copied plan into the extension prompt.": "\u0642\u0645 \u0628\u0644\u0635\u0642 \u0627\u0644\u062e\u0637\u0629 \u0627\u0644\u0645\u0646\u0633\u0648\u062e\u0629 \u0641\u064a \u062d\u0642\u0644 \u0627\u0644\u0623\u0648\u0627\u0645\u0631 \u0628\u0627\u0644\u0625\u0636\u0627\u0641\u0629.",
    "<strong>Turn off Plan Mode</strong> and send it via the extension; this way no extra credits will be consumed.": "<strong>\u0623\u0648\u0642\u0641 \u062a\u0641\u0639\u064a\u0644 \u0648\u0636\u0639 \u0627\u0644\u062e\u0637\u0629</strong> \u0648\u0623\u0631\u0633\u0644 \u0627\u0644\u0623\u0645\u0631 \u0639\u0628\u0631 \u0627\u0644\u0625\u0636\u0627\u0641\u0629\u061b \u0628\u0647\u0630\u0647 \u0627\u0644\u0637\u0631\u064a\u0642\u0629 \u0644\u0646 \u064a\u062a\u0645 \u0627\u0633\u062a\u0647\u0644\u0627\u0643 \u0623\u064a \u0631\u0635\u064a\u062f \u0625\u0636\u0627\u0641\u064a.",
    "Don't show again": "\u0644\u0627 \u062a\u0638\u0647\u0631 \u0645\u062c\u062f\u062f\u0627\u064b",
    "I understand!": "\u0645\u0641\u0647\u0648\u0645!",
    "Project Sync": "\u0645\u0632\u0627\u0645\u0646\u0629 \u0627\u0644\u0645\u0634\u0631\u0648\u0639",
    "Project ID": "\u0631\u0642\u0645 \u0627\u0644\u0645\u0634\u0631\u0648\u0639",
    "Workspace": "\u0645\u0633\u0627\u062d\u0629 \u0627\u0644\u0639\u0645\u0644",
    "User": "\u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645",
    "Account:": "\u0627\u0644\u062d\u0633\u0627\u0628:",
    "Update Required": "\u0645\u0637\u0644\u0648\u0628 \u062a\u062d\u062f\u064a\u062b \u0627\u0644\u0625\u0636\u0627\u0641\u0629",
    "New update v": "\u062a\u062d\u062f\u064a\u062b \u062c\u062f\u064a\u062f v",
    "Download v": "\u062a\u062d\u0645\u064a\u0644 v",
    "Bugs": "\u0627\u0644\u0623\u062e\u0637\u0627\u0621",
    "Refactor": "\u0625\u0639\u0627\u062f\u0629 \u0647\u064a\u0643\u0644\u0629",
    "Errors": "\u0627\u0644\u0623\u062e\u0637\u0627\u0621 \u0627\u0644\u0634\u0627\u0626\u0639\u0629",
    "Optimize": "\u062a\u062d\u0633\u064a\u0646 \u0627\u0644\u0623\u062f\u0627\u0621",
    "Comments": "\u0627\u0644\u062a\u0639\u0644\u064a\u0642\u0627\u062a",
    "SEO": "\u0633\u064a\u0648 SEO",
    "UI": "\u0648\u0627\u062c\u0647\u0629 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645",
    "Components": "\u0627\u0644\u0645\u0643\u0648\u0646\u0627\u062a",
    "Review": "\u0645\u0631\u0627\u062c\u0639\u0629 \u0627\u0644\u0643\u0648\u062f",
    "Mark all as read": "\u062a\u062d\u062f\u064a\u062f \u0627\u0644\u0643\u0644 \u0643\u0645\u0642\u0631\u0648\u0621",
    "Marcar todas como lidas": "\u062a\u062d\u062f\u064a\u062f \u0627\u0644\u0643\u0644 \u0643\u0645\u0642\u0631\u0648\u0621",
    "Lidas": "\u0645\u0642\u0631\u0648\u0621\u0629",
    "Digite seu comando...": "\u0627\u0643\u062a\u0628 \u0623\u0645\u0631\u0643 \u0647\u0646\u0627...",
    "ATALHOS R\u00c1PIDOS": "\u0627\u062e\u062a\u0635\u0627\u0631\u0627\u062a \u0633\u0631\u064a\u0639\u0629",
    "Enviar": "\u0625\u0631\u0633\u0627\u0644",
    "Remover Marca de \u00c1gua": "\u0625\u0632\u0627\u0644\u0629 \u0627\u0644\u0639\u0644\u0627\u0645\u0629 \u0627\u0644\u0645\u0627\u0626\u064a\u0629",
    "Ativar Escudo": "\u062a\u0641\u0639\u064a\u0644 \u0627\u0644\u062f\u0631\u0639",
    "Usar Chat Padr\u00e3o": "\u0627\u0633\u062a\u062e\u062f\u0645 \u0627\u0644\u062f\u0631\u062f\u0634\u0629 \u0627\u0644\u0642\u064a\u0627\u0633\u064a\u0629",
    "Baixar C\u00f3digo Fonte": "\u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0643\u0648\u062f \u0627\u0644\u0645\u0635\u062f\u0631\u064a",
    "Modo Plano": "\u0648\u0636\u0639 \u0627\u0644\u062e\u0637\u0629",
    "Protected by Gringow Extension": "\u0645\u062d\u0645\u064a \u0628\u0648\u0627\u0633\u0637\u0629 LAST ZONE",
    "Protected by ORNOV Extension": "\u0645\u062d\u0645\u064a \u0628\u0648\u0627\u0633\u0637\u0629 LAST ZONE",
    "Protected by Ornov Extension": "\u0645\u062d\u0645\u064a \u0628\u0648\u0627\u0633\u0637\u0629 LAST ZONE",
    "Use a extens\u00e3o para enviar prompts": "\u0627\u0633\u062a\u062e\u062f\u0645 \u0627\u0644\u0625\u0636\u0627\u0641\u0629 \u0644\u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0623\u0648\u0627\u0645\u0631",
    "Escudo Ativado": "\u062a\u0645 \u062a\u0641\u0639\u064a\u0644 \u0627\u0644\u062f\u0631\u0639!",
    "O input do Lovable est\u00e1 bloqueado. Use a extens\u00e3o para enviar prompts.": "\u0627\u0633\u062a\u062e\u062f\u0645 \u0627\u0644\u0625\u0636\u0627\u0641\u0629 \u0644\u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0623\u0648\u0627\u0645\u0631",
    "Entendi!": "\u0645\u0641\u0647\u0648\u0645!",
    "Aten\u00e7\u00e3o \u2014 Modo Plano": "\u062a\u0646\u0628\u064a\u0647 \u2014 \u0648\u0636\u0639 \u0627\u0644\u062e\u0637\u0629",
    "Aten\u00e7\u00e3o - Modo Plano": "\u062a\u0646\u0628\u064a\u0647 \u2014 \u0648\u0636\u0639 \u0627\u0644\u062e\u0637\u0629",
    "Modo Plano/Pensar": "\u0627\u0644\u062e\u0637\u0629/\u0627\u0644\u062a\u0641\u0643\u064a\u0631",
    "O Modo Plano/Pensar pode consumir cr\u00e9ditos, mas oferece um bom aux\u00edlio. Use com modera\u00e7\u00e3o!": "\u0648\u0636\u0639 <strong>\u0627\u0644\u062e\u0637\u0629/\u0627\u0644\u062a\u0641\u0643\u064a\u0631</strong> \u0642\u062f \u064a\u0633\u062a\u0647\u0644\u0643 \u0631\u0635\u064a\u062f\u0627\u064b\u060c \u0648\u0644\u0643\u0646\u0647 \u064a\u0642\u062f\u0645 \u0645\u0633\u0627\u0639\u062f\u0629 \u062c\u064a\u062f\u0629. \u0627\u0633\u062a\u062e\u062f\u0645\u0647 \u0628\u0627\u0639\u062a\u062f\u0627\u0644!",
    "Ative o Modo Plano para gerar um plano.": "\u0642\u0645 \u0628\u062a\u0641\u0639\u064a\u0644 <strong>\u0648\u0636\u0639 \u0627\u0644\u062e\u0637\u0629</strong> \u0644\u0625\u0646\u0634\u0627\u0621 \u062e\u0637\u0629 \u0639\u0645\u0644.",
    "No Lovable, n\u00e3o clique no bot\u00e3o Aprovar; apenas copie o novo plano.": "\u0641\u064a \u0645\u0648\u0642\u0639 Lovable\u060c <strong>\u0644\u0627 \u062a\u0636\u063a\u0637 \u0639\u0644\u0649 \u0632\u0631 \u0627\u0644\u0645\u0648\u0627\u0641\u0642\u0629 (Approve)</strong>\u061b \u0641\u0642\u0637 \u0642\u0645 \u0628\u0646\u0633\u062e \u0627\u0644\u062e\u0637\u0629 \u0627\u0644\u062c\u062f\u064a\u062f\u0629.",
    "Cole o plano copiado no prompt da extens\u00e3o.": "\u0642\u0645 \u0628\u0644\u0635\u0642 \u0627\u0644\u062e\u0637\u0629 \u0627\u0644\u0645\u0646\u0633\u0648\u062e\u0629 \u0641\u064a \u062d\u0642\u0644 \u0627\u0644\u0623\u0648\u0627\u0645\u0631 \u0628\u0627\u0644\u0625\u0636\u0627\u0641\u0629.",
    "Desligue o Modo Plano e envie pela extens\u00e3o; assim nenhum cr\u00e9dito extra ser\u00e1 consumido.": "<strong>\u0623\u0648\u0642\u0641 \u062a\u0641\u0639\u064a\u0644 \u0648\u0636\u0639 \u0627\u0644\u062e\u0637\u0629</strong> \u0648\u0623\u0631\u0633\u0644 \u0627\u0644\u0623\u0645\u0631 \u0639\u0628\u0631 \u0627\u0644\u0625\u0636\u0627\u0641\u0629\u061b \u0628\u0647\u0630\u0647 \u0627\u0644\u0637\u0631\u064a\u0642\u0629 \u0644\u0646 \u064a\u062a\u0645 \u0627\u0633\u062a\u0647\u0644\u0627\u0643 \u0623\u064a \u0631\u0635\u064a\u062f \u0625\u0636\u0627\u0641\u064a.",
    "N\u00e3o mostrar novamente": "\u0644\u0627 \u062a\u0638\u0647\u0631 \u0645\u062c\u062f\u062f\u0627\u064b",
    "N\u00e3o mostrar": "\u0639\u062f\u0645 \u0627\u0644\u0639\u0631\u0636",
    "novamente": "\u0645\u0631\u0629 \u0623\u062e\u0631\u0649",
    "Popup": "\u0627\u0644\u0646\u0627\u0641\u0630\u0629",
    "Back to floating mode": "\u0627\u0644\u0639\u0648\u062f\u0629 \u0644\u0644\u0646\u0627\u0641\u0630\u0629 \u0627\u0644\u0639\u0627\u0626\u0645\u0629",
    "Protected by LAST ZONE": "\u0645\u062d\u0645\u064a \u0628\u0648\u0627\u0633\u0637\u0629 LAST ZONE",
    "Use the extension to send prompts": "\u0627\u0633\u062a\u062e\u062f\u0645 \u0627\u0644\u0625\u0636\u0627\u0641\u0629 \u0644\u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0623\u0648\u0627\u0645\u0631",
    "Checking license on LAST ZONE server...": "Checking license...",
    "Checking license on LAST ZONE...": "Checking license...",
    "Checking license...": "Checking license...",
    "Plan Mode/Think": "\u0627\u0644\u062e\u0637\u0629/\u0627\u0644\u062a\u0641\u0643\u064a\u0631",
    "can consume credits, but offers great assistance. Use with moderation!": "\u0642\u062f \u064a\u0633\u062a\u0647\u0644\u0643 \u0631\u0635\u064a\u062f\u0627\u064b\u060c \u0648\u0644\u0643\u0646\u0647 \u064a\u0642\u062f\u0645 \u0645\u0633\u0627\u0639\u062f\u0629 \u062c\u064a\u062f\u0629. \u0627\u0633\u062a\u062e\u062f\u0645\u0647 \u0628\u0627\u0639\u062a\u062f\u0627\u0644!",
    "Activate": "\u0641\u0639\u0651\u0644",
    "to generate a plan.": "\u0644\u0625\u0646\u0634\u0627\u0621 \u062e\u0637\u0629 \u0639\u0645\u0644.",
    "On Lovable,": "\u0641\u064a \u0645\u0648\u0642\u0639 Lovable\u060c",
    "do not click the Approve button": "\u0644\u0627 \u062a\u0636\u063a\u0637 \u0639\u0644\u0649 \u0632\u0631 \u0627\u0644\u0645\u0648\u0627\u0641\u0642\u0629 (Approve)",
    "just copy the new plan.": "\u0641\u0642\u0637 \u0642\u0645 \u0628\u0646\u0633\u062e \u0627\u0644\u062e\u0637\u0629 \u0627\u0644\u062c\u062f\u064a\u062f\u0629.",
    "Turn off Plan Mode": "\u0623\u0648\u0642\u0641 \u062a\u0641\u0639\u064a\u0644 \u0648\u0636\u0639 \u0627\u0644\u062e\u0637\u0629",
    "and send it via the extension; this way no extra credits will be consumed.": "\u0648\u0623\u0631\u0633\u0644 \u0627\u0644\u0623\u0645\u0631 \u0639\u0628\u0631 \u0627\u0644\u0625\u0636\u0627\u0641\u0629\u061b \u0628\u0647\u0630\u0647 \u0627\u0644\u0637\u0631\u064a\u0642\u0629 \u0644\u0646 \u064a\u062a\u0645 \u0627\u0633\u062a\u0647\u0644\u0627\u0643 \u0623\u064a \u0631\u0635\u064a\u062f \u0625\u0636\u0627\u0641\u064a."
  };
  var AR_STATIC_PARTS = {
    "Activate License": "\u062a\u0641\u0639\u064a\u0644 \u0627\u0644\u062a\u0631\u062e\u064a\u0635",
    "Enter your license key to unlock.": "\u0623\u062f\u062e\u0644 \u0645\u0641\u062a\u0627\u062d \u0627\u0644\u062a\u0631\u062e\u064a\u0635 \u0644\u0641\u062a\u062d \u0627\u0644\u0625\u0636\u0627\u0641\u0629.",
    "Validate License": "\u0627\u0644\u062a\u062d\u0642\u0642 \u0645\u0646 \u0627\u0644\u0645\u0641\u062a\u0627\u062d",
    "official site": "\u0627\u0644\u0645\u0648\u0642\u0639 \u0627\u0644\u0631\u0633\u0645\u064a",
    "Official site": "\u0627\u0644\u0645\u0648\u0642\u0639 \u0627\u0644\u0631\u0633\u0645\u064a",
    "Notifications": "\u0627\u0644\u0625\u0634\u0639\u0627\u0631\u0627\u062a",
    "Open in Side Panel": "\u0641\u062a\u062d \u0641\u064a \u0627\u0644\u0644\u0648\u062d\u0629 \u0627\u0644\u062c\u0627\u0646\u0628\u064a\u0629",
    "Theme": "\u0627\u0644\u0645\u0638\u0647\u0631",
    "Logout": "\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062e\u0631\u0648\u062c",
    "Sign Out": "\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062e\u0631\u0648\u062c",
    "Waiting for sync...": "\u0628\u0627\u0646\u062a\u0638\u0627\u0631 \u0627\u0644\u0645\u0632\u0627\u0645\u0646\u0629...",
    "Synced!": "\u2705 \u062a\u0645 \u0627\u0644\u0645\u0632\u0627\u0645\u0646\u0629!",
    "Project:": "\u0627\u0644\u0645\u0634\u0631\u0648\u0639:",
    "Prompt": "\u0627\u0644\u0623\u0648\u0627\u0645\u0631",
    "History": "\u0627\u0644\u0633\u062c\u0644",
    "Enter your command...": "\u0627\u0643\u062a\u0628 \u0623\u0645\u0631\u0643 \u0647\u0646\u0627...",
    "Plan Mode": "\u0648\u0636\u0639 \u0627\u0644\u062e\u0637\u0629",
    "Plan": "\u0627\u0644\u062e\u0637\u0629",
    "Attach file (max. 10)": "\u0625\u0631\u0641\u0627\u0642 \u0645\u0644\u0641 (\u0627\u0644\u062d\u062f \u0627\u0644\u0623\u0642\u0635\u0649 10)",
    "Attach file": "\u0625\u0631\u0641\u0627\u0642 \u0645\u0644\u0641",
    "Optimize with AI": "\u062a\u062d\u0633\u064a\u0646 \u0628\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a",
    "Voice to text": "\u062a\u062d\u0648\u064a\u0644 \u0627\u0644\u0635\u0648\u062a \u0625\u0644\u0649 \u0646\u0635",
    "Voice": "\u0627\u0644\u0635\u0648\u062a",
    "Send": "\u0625\u0631\u0633\u0627\u0644",
    "QUICK SHORTCUTS": "\u0627\u062e\u062a\u0635\u0627\u0631\u0627\u062a \u0633\u0631\u064a\u0639\u0629",
    "Quick Shortcuts": "\u0627\u062e\u062a\u0635\u0627\u0631\u0627\u062a \u0633\u0631\u064a\u0639\u0629",
    "Remove Watermark": "\u0625\u0632\u0627\u0644\u0629 \u0627\u0644\u0639\u0644\u0627\u0645\u0629 \u0627\u0644\u0645\u0627\u0626\u064a\u0629",
    "Enable Shield": "\u062a\u0641\u0639\u064a\u0644 \u0627\u0644\u062f\u0631\u0639",
    "Disable Shield": "\u062a\u0639\u0637\u064a\u0644 \u0627\u0644\u062f\u0631\u0639",
    "Use Standard Chat": "\u0627\u0633\u062a\u062e\u062f\u0645 \u0627\u0644\u062f\u0631\u062f\u0634\u0629 \u0627\u0644\u0642\u064a\u0627\u0633\u064a\u0629",
    "Disable Standard Chat": "\u062a\u0639\u0637\u064a\u0644 \u0627\u0644\u062f\u0631\u062f\u0634\u0629 \u0627\u0644\u0642\u064a\u0627\u0633\u064a\u0629",
    "Back to Extension Chat": "\u0627\u0644\u0639\u0648\u062f\u0629 \u0644\u062f\u0631\u062f\u0634\u0629 \u0627\u0644\u0625\u0636\u0627\u0641\u0629",
    "Download Source Code": "\u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0643\u0648\u062f \u0627\u0644\u0645\u0635\u062f\u0631\u064a",
    "Publish Project": "\u0646\u0634\u0631 \u0627\u0644\u0645\u0634\u0631\u0648\u0639",
    "Enable Lovable Cloud": "\u2601 \u062a\u0641\u0639\u064a\u0644 \u0633\u062d\u0627\u0628\u0629 Lovable",
    "Support": "\u0627\u0644\u062f\u0639\u0645",
    "Contact Support": "\u062a\u0648\u0627\u0635\u0644 \u0645\u0639 \u0627\u0644\u062f\u0639\u0645",
    "Loading...": "\u062c\u0627\u0631\u064a \u0627\u0644\u062a\u062d\u0645\u064a\u0644...",
    "No notifications.": "\u0644\u0627 \u062a\u0648\u062c\u062f \u0625\u0634\u0639\u0627\u0631\u0627\u062a.",
    "Failed to load.": "\u0641\u0634\u0644 \u0627\u0644\u062a\u062d\u0645\u064a\u0644.",
    "Open link": "\u0641\u062a\u062d \u0627\u0644\u0631\u0627\u0628\u0637 \u2190",
    "Open link ->": "\u0641\u062a\u062d \u0627\u0644\u0631\u0627\u0628\u0637 \u2190",
    "Success!": "\u062a\u0645 \u0628\u0646\u062c\u0627\u062d!",
    "Almost there!": "\u0627\u0642\u062a\u0631\u0628\u0646\u0627!",
    "Error": "\u062e\u0637\u0623",
    "Attention": "\u062a\u0646\u0628\u064a\u0647",
    "Permission Denied": "\u062a\u0645 \u0631\u0641\u0636 \u0627\u0644\u0625\u0630\u0646",
    "No Audio": "\u0644\u0627 \u064a\u0648\u062c\u062f \u0635\u0648\u062a",
    "Voice Error": "\u062e\u0637\u0623 \u0641\u064a \u0627\u0644\u0635\u0648\u062a",
    "Shield Activated!": "\u062a\u0645 \u062a\u0641\u0639\u064a\u0644 \u0627\u0644\u062f\u0631\u0639!",
    "Shield Deactivated": "\u062a\u0645 \u062a\u0639\u0637\u064a\u0644 \u0627\u0644\u062f\u0631\u0639",
    "Limit": "\u0627\u0644\u062d\u062f \u0627\u0644\u0623\u0642\u0635\u0649",
    "Large File": "\u0645\u0644\u0641 \u0643\u0628\u064a\u0631 \u0627\u0644\u062d\u062c\u0645",
    "Upload Error": "\u062e\u0637\u0623 \u0641\u064a \u0627\u0644\u0631\u0641\u0639",
    "Attached!": "\u062a\u0645 \u0627\u0644\u0625\u0631\u0641\u0627\u0642!",
    "License Expired!": "\u0627\u0646\u062a\u0647\u062a \u0635\u0644\u0627\u062d\u064a\u0629 \u0627\u0644\u062a\u0631\u062e\u064a\u0635!",
    "Close": "\u0625\u063a\u0644\u0627\u0642",
    "Trial expires in": "\u0627\u0644\u062a\u062c\u0631\u0628\u0629 \u062a\u0646\u062a\u0647\u064a \u062e\u0644\u0627\u0644",
    "License expires in": "\u0627\u0644\u062a\u0631\u062e\u064a\u0635 \u064a\u0646\u062a\u0647\u064a \u062e\u0644\u0627\u0644",
    "License expired": "\u23f0 \u0627\u0646\u062a\u0647\u0649 \u0627\u0644\u062a\u0631\u062e\u064a\u0635",
    "Visit the official site": "\u062a\u0641\u0636\u0644 \u0628\u0632\u064a\u0627\u0631\u0629 \u0627\u0644\u0645\u0648\u0642\u0639 \u0627\u0644\u0631\u0633\u0645\u064a",
    "Visit Site": "\u0632\u064a\u0627\u0631\u0629 \u0627\u0644\u0645\u0648\u0642\u0639",
    "No messages": "\u0644\u0627 \u062a\u0648\u062c\u062f \u0631\u0633\u0627\u0626\u0644",
    "Your sent prompts will appear here as history.": "\u0627\u0644\u0631\u0633\u0627\u0626\u0644 \u0627\u0644\u062a\u064a \u062a\u0631\u0633\u0644\u0647\u0627 \u0633\u062a\u0638\u0647\u0631 \u0647\u0646\u0627 \u0643\u0633\u062c\u0644.",
    "Clear History": "\u0645\u0633\u062d \u0627\u0644\u0633\u062c\u0644",
    "Today": "\u0627\u0644\u064a\u0648\u0645",
    "Yesterday": "\u0623\u0645\u0633",
    "Sent": "\u2713 \u062a\u0645 \u0627\u0644\u0625\u0631\u0633\u0627\u0644",
    "Active": "\u0646\u0634\u0637",
    "Trial": "\u062a\u062c\u0631\u064a\u0628\u064a",
    "Unlimited License": "\u062a\u0631\u062e\u064a\u0635 \u063a\u064a\u0631 \u0645\u062d\u062f\u0648\u062f",
    "Expired": "\u0645\u0646\u062a\u0647\u064a",
    "Expires on:": "\u064a\u0646\u062a\u0647\u064a \u0641\u064a:",
    "License Expires In:": "\u064a\u0646\u062a\u0647\u064a \u0627\u0644\u062a\u0631\u062e\u064a\u0635 \u062e\u0644\u0627\u0644:",
    "SESSION TIME": "\u0648\u0642\u062a \u0627\u0644\u062c\u0644\u0633\u0629",
    "Attention - Plan Mode": "\u062a\u0646\u0628\u064a\u0647 \u2014 \u0648\u0636\u0639 \u0627\u0644\u062e\u0637\u0629",
    "Attention \u2014 Plan Mode": "\u062a\u0646\u0628\u064a\u0647 \u2014 \u0648\u0636\u0639 \u0627\u0644\u062e\u0637\u0629",
    "Attention \u2013 Plan Mode": "\u062a\u0646\u0628\u064a\u0647 \u2014 \u0648\u0636\u0639 \u0627\u0644\u062e\u0637\u0629",
    "<strong>Plan Mode/Think</strong> can consume credits, but offers great assistance. Use with moderation!": "\u0648\u0636\u0639 <strong>\u0627\u0644\u062e\u0637\u0629/\u0627\u0644\u062a\u0641\u0643\u064a\u0631</strong> \u0642\u062f \u064a\u0633\u062a\u0647\u0644\u0643 \u0631\u0635\u064a\u062f\u0627\u064b\u060c \u0648\u0644\u0643\u0646\u0647 \u064a\u0642\u062f\u0645 \u0645\u0633\u0627\u0639\u062f\u0629 \u062c\u064a\u062f\u0629. \u0627\u0633\u062a\u062e\u062f\u0645\u0647 \u0628\u0627\u0639\u062a\u062f\u0627\u0644!",
    "Activate <strong>Plan Mode</strong> to generate a plan.": "\u0642\u0645 \u0628\u062a\u0641\u0639\u064a\u0644 <strong>\u0648\u0636\u0639 \u0627\u0644\u062e\u0637\u0629</strong> \u0644\u0625\u0646\u0634\u0627\u0621 \u062e\u0637\u0629 \u0639\u0645\u0644.",
    "On Lovable, <strong>do not click the Approve button</strong>; just copy the new plan.": "\u0641\u064a \u0645\u0648\u0642\u0639 Lovable\u060c <strong>\u0644\u0627 \u062a\u0636\u063a\u0637 \u0639\u0644\u0649 \u0632\u0631 \u0627\u0644\u0645\u0648\u0627\u0641\u0642\u0629 (Approve)</strong>\u061b \u0641\u0642\u0637 \u0642\u0645 \u0628\u0646\u0633\u062e \u0627\u0644\u062e\u0637\u0629 \u0627\u0644\u062c\u062f\u064a\u062f\u0629.",
    "Paste the copied plan into the extension prompt.": "\u0642\u0645 \u0628\u0644\u0635\u0642 \u0627\u0644\u062e\u0637\u0629 \u0627\u0644\u0645\u0646\u0633\u0648\u062e\u0629 \u0641\u064a \u062d\u0642\u0644 \u0627\u0644\u0623\u0648\u0627\u0645\u0631 \u0628\u0627\u0644\u0625\u0636\u0627\u0641\u0629.",
    "<strong>Turn off Plan Mode</strong> and send it via the extension; this way no extra credits will be consumed.": "<strong>\u0623\u0648\u0642\u0641 \u062a\u0641\u0639\u064a\u0644 \u0648\u0636\u0639 \u0627\u0644\u062e\u0637\u0629</strong> \u0648\u0623\u0631\u0633\u0644 \u0627\u0644\u0623\u0645\u0631 \u0639\u0628\u0631 \u0627\u0644\u0625\u0636\u0627\u0641\u0629\u061b \u0628\u0647\u0630\u0647 \u0627\u0644\u0637\u0631\u064a\u0642\u0629 \u0644\u0646 \u064a\u062a\u0645 \u0627\u0633\u062a\u0647\u0644\u0627\u0643 \u0623\u064a \u0631\u0635\u064a\u062f \u0625\u0636\u0627\u0641\u064a.",
    "Don't show again": "\u0644\u0627 \u062a\u0638\u0647\u0631 \u0645\u062c\u062f\u062f\u0627\u064b",
    "I understand!": "\u0645\u0641\u0647\u0648\u0645!",
    "Project Sync": "\u0645\u0632\u0627\u0645\u0646\u0629 \u0627\u0644\u0645\u0634\u0631\u0648\u0639",
    "Project ID": "\u0631\u0642\u0645 \u0627\u0644\u0645\u0634\u0631\u0648\u0639",
    "Workspace": "\u0645\u0633\u0627\u062d\u0629 \u0627\u0644\u0639\u0645\u0644",
    "User": "\u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645",
    "Account:": "\u0627\u0644\u062d\u0633\u0627\u0628:",
    "Update Required": "\u0645\u0637\u0644\u0648\u0628 \u062a\u062d\u062f\u064a\u062b \u0627\u0644\u0625\u0636\u0627\u0641\u0629",
    "New update v": "\u062a\u062d\u062f\u064a\u062b \u062c\u062f\u064a\u062f v",
    "Download v": "\u062a\u062d\u0645\u064a\u0644 v",
    "Bugs": "\u0627\u0644\u0623\u062e\u0637\u0627\u0621",
    "Refactor": "\u0625\u0639\u0627\u062f\u0629 \u0647\u064a\u0643\u0644\u0629",
    "Errors": "\u0627\u0644\u0623\u062e\u0637\u0627\u0621 \u0627\u0644\u0634\u0627\u0626\u0639\u0629",
    "Optimize": "\u062a\u062d\u0633\u064a\u0646 \u0627\u0644\u0623\u062f\u0627\u0621",
    "Comments": "\u0627\u0644\u062a\u0639\u0644\u064a\u0642\u0627\u062a",
    "Components": "\u0627\u0644\u0645\u0643\u0648\u0646\u0627\u062a",
    "Review": "\u0645\u0631\u0627\u062c\u0639\u0629 \u0627\u0644\u0643\u0648\u062f",
    "Mark all as read": "\u062a\u062d\u062f\u064a\u062f \u0627\u0644\u0643\u0644 \u0643\u0645\u0642\u0631\u0648\u0621",
    "Marcar todas como lidas": "\u062a\u062d\u062f\u064a\u062f \u0627\u0644\u0643\u0644 \u0643\u0645\u0642\u0631\u0648\u0621",
    "Lidas": "\u0645\u0642\u0631\u0648\u0621\u0629",
    "Digite seu comando...": "\u0627\u0643\u062a\u0628 \u0623\u0645\u0631\u0643 \u0647\u0646\u0627...",
    "ATALHOS R\u00c1PIDOS": "\u0627\u062e\u062a\u0635\u0627\u0631\u0627\u062a \u0633\u0631\u064a\u0639\u0629",
    "Enviar": "\u0625\u0631\u0633\u0627\u0644",
    "Remover Marca de \u00c1gua": "\u0625\u0632\u0627\u0644\u0629 \u0627\u0644\u0639\u0644\u0627\u0645\u0629 \u0627\u0644\u0645\u0627\u0626\u064a\u0629",
    "Ativar Escudo": "\u062a\u0641\u0639\u064a\u0644 \u0627\u0644\u062f\u0631\u0639",
    "Usar Chat Padr\u00e3o": "\u0627\u0633\u062a\u062e\u062f\u0645 \u0627\u0644\u062f\u0631\u062f\u0634\u0629 \u0627\u0644\u0642\u064a\u0627\u0633\u064a\u0629",
    "Baixar C\u00f3digo Fonte": "\u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0643\u0648\u062f \u0627\u0644\u0645\u0635\u062f\u0631\u064a",
    "Modo Plano": "\u0648\u0636\u0639 \u0627\u0644\u062e\u0637\u0629",
    "Protected by Gringow Extension": "\u0645\u062d\u0645\u064a \u0628\u0648\u0627\u0633\u0637\u0629 LAST ZONE",
    "Protected by ORNOV Extension": "\u0645\u062d\u0645\u064a \u0628\u0648\u0627\u0633\u0637\u0629 LAST ZONE",
    "Protected by Ornov Extension": "\u0645\u062d\u0645\u064a \u0628\u0648\u0627\u0633\u0637\u0629 LAST ZONE",
    "Use a extens\u00e3o para enviar prompts": "\u0627\u0633\u062a\u062e\u062f\u0645 \u0627\u0644\u0625\u0636\u0627\u0641\u0629 \u0644\u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0623\u0648\u0627\u0645\u0631",
    "Escudo Ativado": "\u062a\u0645 \u062a\u0641\u0639\u064a\u0644 \u0627\u0644\u062f\u0631\u0639!",
    "O input do Lovable est\u00e1 bloqueado. Use a extens\u00e3o para enviar prompts.": "\u0627\u0633\u062a\u062e\u062f\u0645 \u0627\u0644\u0625\u0636\u0627\u0641\u0629 \u0644\u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0623\u0648\u0627\u0645\u0631",
    "Entendi!": "\u0645\u0641\u0647\u0648\u0645!",
    "Aten\u00e7\u00e3o \u2014 Modo Plano": "\u062a\u0646\u0628\u064a\u0647 \u2014 \u0648\u0636\u0639 \u0627\u0644\u062e\u0637\u0629",
    "Aten\u00e7\u00e3o - Modo Plano": "\u062a\u0646\u0628\u064a\u0647 \u2014 \u0648\u0636\u0639 \u0627\u0644\u062e\u0637\u0629",
    "Modo Plano/Pensar": "\u0627\u0644\u062e\u0637\u0629/\u0627\u0644\u062a\u0641\u0643\u064a\u0631",
    "O Modo Plano/Pensar pode consumir cr\u00e9ditos, mas oferece um bom aux\u00edlio. Use com modera\u00e7\u00e3o!": "\u0648\u0636\u0639 <strong>\u0627\u0644\u062e\u0637\u0629/\u0627\u0644\u062a\u0641\u0643\u064a\u0631</strong> \u0642\u062f \u064a\u0633\u062a\u0647\u0644\u0643 \u0631\u0635\u064a\u062f\u0627\u064b\u060c \u0648\u0644\u0643\u0646\u0647 \u064a\u0642\u062f\u0645 \u0645\u0633\u0627\u0639\u062f\u0629 \u062c\u064a\u062f\u0629. \u0627\u0633\u062a\u062e\u062f\u0645\u0647 \u0628\u0627\u0639\u062a\u062f\u0627\u0644!",
    "Ative o Modo Plano para gerar um plano.": "\u0642\u0645 \u0628\u062a\u0641\u0639\u064a\u0644 <strong>\u0648\u0636\u0639 \u0627\u0644\u062e\u0637\u0629</strong> \u0644\u0625\u0646\u0634\u0627\u0621 \u062e\u0637\u0629 \u0639\u0645\u0644.",
    "No Lovable, n\u00e3o clique no bot\u00e3o Aprovar; apenas copie o novo plano.": "\u0641\u064a \u0645\u0648\u0642\u0639 Lovable\u060c <strong>\u0644\u0627 \u062a\u0636\u063a\u0637 \u0639\u0644\u0649 \u0632\u0631 \u0627\u0644\u0645\u0648\u0627\u0641\u0642\u0629 (Approve)</strong>\u061b \u0641\u0642\u0637 \u0642\u0645 \u0628\u0646\u0633\u062e \u0627\u0644\u062e\u0637\u0629 \u0627\u0644\u062c\u062f\u064a\u062f\u0629.",
    "Cole o plano copiado no prompt da extens\u00e3o.": "\u0642\u0645 \u0628\u0644\u0635\u0642 \u0627\u0644\u062e\u0637\u0629 \u0627\u0644\u0645\u0646\u0633\u0648\u062e\u0629 \u0641\u064a \u062d\u0642\u0644 \u0627\u0644\u0623\u0648\u0627\u0645\u0631 \u0628\u0627\u0644\u0625\u0636\u0627\u0641\u0629.",
    "Desligue o Modo Plano e envie pela extens\u00e3o; assim nenhum cr\u00e9dito extra ser\u00e1 consumido.": "<strong>\u0623\u0648\u0642\u0641 \u062a\u0641\u0639\u064a\u0644 \u0648\u0636\u0639 \u0627\u0644\u062e\u0637\u0629</strong> \u0648\u0623\u0631\u0633\u0644 \u0627\u0644\u0623\u0645\u0631 \u0639\u0628\u0631 \u0627\u0644\u0625\u0636\u0627\u0641\u0629\u061b \u0628\u0647\u0630\u0647 \u0627\u0644\u0637\u0631\u064a\u0642\u0629 \u0644\u0646 \u064a\u062a\u0645 \u0627\u0633\u062a\u0647\u0644\u0627\u0643 \u0623\u064a \u0631\u0635\u064a\u062f \u0625\u0636\u0627\u0641\u064a.",
    "N\u00e3o mostrar novamente": "\u0644\u0627 \u062a\u0638\u0647\u0631 \u0645\u062c\u062f\u062f\u0627\u064b",
    "N\u00e3o mostrar": "\u0639\u062f\u0645 \u0627\u0644\u0639\u0631\u0636",
    "novamente": "\u0645\u0631\u0629 \u0623\u062e\u0631\u0649",
    "Popup": "\u0627\u0644\u0646\u0627\u0641\u0630\u0629",
    "Back to floating mode": "\u0627\u0644\u0639\u0648\u062f\u0629 \u0644\u0644\u0646\u0627\u0641\u0630\u0629 \u0627\u0644\u0639\u0627\u0626\u0645\u0629",
    "Protected by LAST ZONE": "\u0645\u062d\u0645\u064a \u0628\u0648\u0627\u0633\u0637\u0629 LAST ZONE",
    "Use the extension to send prompts": "\u0627\u0633\u062a\u062e\u062f\u0645 \u0627\u0644\u0625\u0636\u0627\u0641\u0629 \u0644\u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0623\u0648\u0627\u0645\u0631",
    "Checking license on LAST ZONE server...": "Checking license...",
    "Checking license on LAST ZONE...": "Checking license...",
    "Checking license...": "Checking license...",
    "Plan Mode/Think": "\u0627\u0644\u062e\u0637\u0629/\u0627\u0644\u062a\u0641\u0643\u064a\u0631",
    "can consume credits, but offers great assistance. Use with moderation!": "\u0642\u062f \u064a\u0633\u062a\u0647\u0644\u0643 \u0631\u0635\u064a\u062f\u0627\u064b\u060c \u0648\u0644\u0643\u0646\u0647 \u064a\u0642\u062f\u0645 \u0645\u0633\u0627\u0639\u062f\u0629 \u062c\u064a\u062f\u0629. \u0627\u0633\u062a\u062e\u062f\u0645\u0647 \u0628\u0627\u0639\u062a\u062f\u0627\u0644!",
    "Activate": "\u0641\u0639\u0651\u0644",
    "to generate a plan.": "\u0644\u0625\u0646\u0634\u0627\u0621 \u062e\u0637\u0629 \u0639\u0645\u0644.",
    "On Lovable,": "\u0641\u064a \u0645\u0648\u0642\u0639 Lovable\u060c",
    "do not click the Approve button": "\u0644\u0627 \u062a\u0636\u063a\u0637 \u0639\u0644\u0649 \u0632\u0631 \u0627\u0644\u0645\u0648\u0627\u0641\u0642\u0629 (Approve)",
    "just copy the new plan.": "\u0641\u0642\u0637 \u0642\u0645 \u0628\u0646\u0633\u062e \u0627\u0644\u062e\u0637\u0629 \u0627\u0644\u062c\u062f\u064a\u062f\u0629.",
    "Turn off Plan Mode": "\u0623\u0648\u0642\u0641 \u062a\u0641\u0639\u064a\u0644 \u0648\u0636\u0639 \u0627\u0644\u062e\u0637\u0629",
    "and send it via the extension; this way no extra credits will be consumed.": "\u0648\u0623\u0631\u0633\u0644 \u0627\u0644\u0623\u0645\u0631 \u0639\u0628\u0631 \u0627\u0644\u0625\u0636\u0627\u0641\u0629\u061b \u0628\u0647\u0630\u0647 \u0627\u0644\u0637\u0631\u064a\u0642\u0629 \u0644\u0646 \u064a\u062a\u0645 \u0627\u0633\u062a\u0647\u0644\u0627\u0643 \u0623\u064a \u0631\u0635\u064a\u062f \u0625\u0636\u0627\u0641\u064a."
  };
  var EN_STATIC_TEXT = {
    "\u062a\u0641\u0639\u064a\u0644 \u0627\u0644\u062a\u0631\u062e\u064a\u0635": "Activate License",
    "\u0623\u062f\u062e\u0644 \u0645\u0641\u062a\u0627\u062d \u0627\u0644\u062a\u0631\u062e\u064a\u0635 \u0644\u0641\u062a\u062d \u0627\u0644\u0625\u0636\u0627\u0641\u0629.": "Enter your license key to unlock.",
    "\u0627\u0644\u062a\u062d\u0642\u0642 \u0645\u0646 \u0627\u0644\u0645\u0641\u062a\u0627\u062d": "Validate License",
    "\u0627\u0644\u0645\u0648\u0642\u0639 \u0627\u0644\u0631\u0633\u0645\u064a": "Official site",
    "\u0627\u0644\u0625\u0634\u0639\u0627\u0631\u0627\u062a": "Notifications",
    "\u0641\u062a\u062d \u0641\u064a \u0627\u0644\u0644\u0648\u062d\u0629 \u0627\u0644\u062c\u0627\u0646\u0628\u064a\u0629": "Open in Side Panel",
    "\u0627\u0644\u0645\u0638\u0647\u0631": "Theme",
    "\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062e\u0631\u0648\u062c": "Sign Out",
    "\u0628\u0627\u0646\u062a\u0638\u0627\u0631 \u0627\u0644\u0645\u0632\u0627\u0645\u0646\u0629...": "Waiting for sync...",
    "\u2705 \u062a\u0645 \u0627\u0644\u0645\u0632\u0627\u0645\u0646\u0629!": "Synced!",
    "\u0627\u0644\u0645\u0634\u0631\u0648\u0639:": "Project:",
    "\u0627\u0644\u0623\u0648\u0627\u0645\u0631": "Prompt",
    "\u0627\u0644\u0633\u062c\u0644": "History",
    "\u0627\u0643\u062a\u0628 \u0623\u0645\u0631\u0643 \u0647\u0646\u0627...": "Enter your command...",
    "\u0648\u0636\u0639 \u0627\u0644\u062e\u0637\u0629": "Plan Mode",
    "\u0627\u0644\u062e\u0637\u0629": "Plan",
    "\u0625\u0631\u0641\u0627\u0642 \u0645\u0644\u0641 (\u0627\u0644\u062d\u062f \u0627\u0644\u0623\u0642\u0635\u0649 10)": "Attach file (max. 10)",
    "\u0625\u0631\u0641\u0627\u0642 \u0645\u0644\u0641": "Attach file",
    "\u062a\u062d\u0633\u064a\u0646 \u0628\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a": "Optimize with AI",
    "\u062a\u062d\u0648\u064a\u0644 \u0627\u0644\u0635\u0648\u062a \u0625\u0644\u0649 \u0646\u0635": "Voice to text",
    "\u0627\u0644\u0635\u0648\u062a": "Voice",
    "\u0625\u0631\u0633\u0627\u0644": "Send",
    "\u0627\u062e\u062a\u0635\u0627\u0631\u0627\u062a \u0633\u0631\u064a\u0639\u0629": "Quick Shortcuts",
    "\u0625\u0632\u0627\u0644\u0629 \u0627\u0644\u0639\u0644\u0627\u0645\u0629 \u0627\u0644\u0645\u0627\u0626\u064a\u0629": "Remove Watermark",
    "\u062a\u0641\u0639\u064a\u0644 \u0627\u0644\u062f\u0631\u0639": "Enable Shield",
    "\u062a\u0639\u0637\u064a\u0644 \u0627\u0644\u062f\u0631\u0639": "Disable Shield",
    "\u0627\u0633\u062a\u062e\u062f\u0645 \u0627\u0644\u062f\u0631\u062f\u0634\u0629 \u0627\u0644\u0642\u064a\u0627\u0633\u064a\u0629": "Use Standard Chat",
    "\u062a\u0639\u0637\u064a\u0644 \u0627\u0644\u062f\u0631\u062f\u0634\u0629 \u0627\u0644\u0642\u064a\u0627\u0633\u064a\u0629": "Disable Standard Chat",
    "\u0627\u0644\u0639\u0648\u062f\u0629 \u0644\u062f\u0631\u062f\u0634\u0629 \u0627\u0644\u0625\u0636\u0627\u0641\u0629": "Back to Extension Chat",
    "\u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0643\u0648\u062f \u0627\u0644\u0645\u0635\u062f\u0631\u064a": "Download Source Code",
    "\u0646\u0634\u0631 \u0627\u0644\u0645\u0634\u0631\u0648\u0639": "Publish Project",
    "\u2601 \u062a\u0641\u0639\u064a\u0644 \u0633\u062d\u0627\u0628\u0629 Lovable": "Enable Lovable Cloud",
    "\u0627\u0644\u062f\u0639\u0645": "Support",
    "\u062a\u0648\u0627\u0635\u0644 \u0645\u0639 \u0627\u0644\u062f\u0639\u0645": "Contact Support",
    "\u062c\u0627\u0631\u064a \u0627\u0644\u062a\u062d\u0645\u064a\u0644...": "Loading...",
    "\u0644\u0627 \u062a\u0648\u062c\u062f \u0625\u0634\u0639\u0627\u0631\u0627\u062a.": "No notifications.",
    "\u0641\u0634\u0644 \u0627\u0644\u062a\u062d\u0645\u064a\u0644.": "Failed to load.",
    "\u0641\u062a\u062d \u0627\u0644\u0631\u0627\u0628\u0637 \u2190": "Open link ->",
    "\u062a\u0645 \u0628\u0646\u062c\u0627\u062d!": "Success!",
    "\u0627\u0642\u062a\u0631\u0628\u0646\u0627!": "Almost there!",
    "\u062e\u0637\u0623": "Error",
    "\u062a\u0646\u0628\u064a\u0647": "Attention",
    "\u062a\u0645 \u0631\u0641\u0636 \u0627\u0644\u0625\u0630\u0646": "Permission Denied",
    "\u0644\u0627 \u064a\u0648\u062c\u062f \u0635\u0648\u062a": "No Audio",
    "\u062e\u0637\u0623 \u0641\u064a \u0627\u0644\u0635\u0648\u062a": "Voice Error",
    "\u062a\u0645 \u062a\u0641\u0639\u064a\u0644 \u0627\u0644\u062f\u0631\u0639!": "Shield Activated!",
    "\u062a\u0645 \u062a\u0639\u0637\u064a\u0644 \u0627\u0644\u062f\u0631\u0639": "Shield Deactivated",
    "\u0627\u0644\u062d\u062f \u0627\u0644\u0623\u0642\u0635\u0649": "Limit",
    "\u0645\u0644\u0641 \u0643\u0628\u064a\u0631 \u0627\u0644\u062d\u062c\u0645": "Large File",
    "\u062e\u0637\u0623 \u0641\u064a \u0627\u0644\u0631\u0641\u0639": "Upload Error",
    "\u062a\u0645 \u0627\u0644\u0625\u0631\u0641\u0627\u0642!": "Attached!",
    "\u062d\u0633\u0646\u0627\u064b": "OK",
    "\u0627\u0646\u062a\u0647\u062a \u0635\u0644\u0627\u062d\u064a\u0629 \u0627\u0644\u062a\u0631\u062e\u064a\u0635!": "License Expired!",
    "\u0625\u063a\u0644\u0627\u0642": "Close",
    "\u0627\u0644\u062a\u062c\u0631\u0628\u0629 \u062a\u0646\u062a\u0647\u064a \u062e\u0644\u0627\u0644": "Trial expires in",
    "\u0627\u0644\u062a\u0631\u062e\u064a\u0635 \u064a\u0646\u062a\u0647\u064a \u062e\u0644\u0627\u0644": "License expires in",
    "\u23f0 \u0627\u0646\u062a\u0647\u0649 \u0627\u0644\u062a\u0631\u062e\u064a\u0635": "License expired",
    "\u062a\u0641\u0636\u0644 \u0628\u0632\u064a\u0627\u0631\u0629 \u0627\u0644\u0645\u0648\u0642\u0639 \u0627\u0644\u0631\u0633\u0645\u064a": "Visit the official site",
    "\u0632\u064a\u0627\u0631\u0629 \u0627\u0644\u0645\u0648\u0642\u0639": "Visit Site",
    "\u0644\u0627 \u062a\u0648\u062c\u062f \u0631\u0633\u0627\u0626\u0644": "No messages",
    "\u0627\u0644\u0631\u0633\u0627\u0626\u0644 \u0627\u0644\u062a\u064a \u062a\u0631\u0633\u0644\u0647\u0627 \u0633\u062a\u0638\u0647\u0631 \u0647\u0646\u0627 \u0643\u0633\u062c\u0644.": "Your sent prompts will appear here as history.",
    "\u0645\u0633\u062d \u0627\u0644\u0633\u062c\u0644": "Clear History",
    "\u0627\u0644\u064a\u0648\u0645": "Today",
    "\u0623\u0645\u0633": "Yesterday",
    "\u2713 \u062a\u0645 \u0627\u0644\u0625\u0631\u0633\u0627\u0644": "Sent",
    "\u0646\u0634\u0637": "Active",
    "\u062a\u062c\u0631\u064a\u0628\u064a": "Trial",
    "\u062a\u0631\u062e\u064a\u0635 \u063a\u064a\u0631 \u0645\u062d\u062f\u0648\u062f": "Unlimited License",
    "\u0645\u0646\u062a\u0647\u064a": "Expired",
    "\u064a\u0646\u062a\u0647\u064a \u0641\u064a:": "Expires on:",
    "\u064a\u0646\u062a\u0647\u064a \u0627\u0644\u062a\u0631\u062e\u064a\u0635 \u062e\u0644\u0627\u0644:": "License Expires In:",
    "\u0648\u0642\u062a \u0627\u0644\u062c\u0644\u0633\u0629": "SESSION TIME",
    "\u062a\u0646\u0628\u064a\u0647 \u2014 \u0648\u0636\u0639 \u0627\u0644\u062e\u0637\u0629": "Attention - Plan Mode",
    "\u0648\u0636\u0639 <strong>\u0627\u0644\u062e\u0637\u0629/\u0627\u0644\u062a\u0641\u0643\u064a\u0631</strong> \u0642\u062f \u064a\u0633\u062a\u0647\u0644\u0643 \u0631\u0635\u064a\u062f\u0627\u064b\u060c \u0648\u0644\u0643\u0646\u0647 \u064a\u0642\u062f\u0645 \u0645\u0633\u0627\u0639\u062f\u0629 \u062c\u064a\u062f\u0629. \u0627\u0633\u062a\u062e\u062f\u0645\u0647 \u0628\u0627\u0639\u062a\u062f\u0627\u0644!": "<strong>Plan Mode/Think</strong> can consume credits, but offers great assistance. Use with moderation!",
    "\u0642\u0645 \u0628\u062a\u0641\u0639\u064a\u0644 <strong>\u0648\u0636\u0639 \u0627\u0644\u062e\u0637\u0629</strong> \u0644\u0625\u0646\u0634\u0627\u0621 \u062e\u0637\u0629 \u0639\u0645\u0644.": "Activate <strong>Plan Mode</strong> to generate a plan.",
    "\u0641\u064a \u0645\u0648\u0642\u0639 Lovable\u060c <strong>\u0644\u0627 \u062a\u0636\u063a\u0637 \u0639\u0644\u0649 \u0632\u0631 \u0627\u0644\u0645\u0648\u0627\u0641\u0642\u0629 (Approve)</strong>\u061b \u0641\u0642\u0637 \u0642\u0645 \u0628\u0646\u0633\u062e \u0627\u0644\u062e\u0637\u0629 \u0627\u0644\u062c\u062f\u064a\u062f\u0629.": "On Lovable, <strong>do not click the Approve button</strong>; just copy the new plan.",
    "\u0642\u0645 \u0628\u0644\u0635\u0642 \u0627\u0644\u062e\u0637\u0629 \u0627\u0644\u0645\u0646\u0633\u0648\u062e\u0629 \u0641\u064a \u062d\u0642\u0644 \u0627\u0644\u0623\u0648\u0627\u0645\u0631 \u0628\u0627\u0644\u0625\u0636\u0627\u0641\u0629.": "Paste the copied plan into the extension prompt.",
    "<strong>\u0623\u0648\u0642\u0641 \u062a\u0641\u0639\u064a\u0644 \u0648\u0636\u0639 \u0627\u0644\u062e\u0637\u0629</strong> \u0648\u0623\u0631\u0633\u0644 \u0627\u0644\u0623\u0645\u0631 \u0639\u0628\u0631 \u0627\u0644\u0625\u0636\u0627\u0641\u0629\u061b \u0628\u0647\u0630\u0647 \u0627\u0644\u0637\u0631\u064a\u0642\u0629 \u0644\u0646 \u064a\u062a\u0645 \u0627\u0633\u062a\u0647\u0644\u0627\u0643 \u0623\u064a \u0631\u0635\u064a\u062f \u0625\u0636\u0627\u0641\u064a.": "<strong>Turn off Plan Mode</strong> and send it via the extension; this way no extra credits will be consumed.",
    "\u0644\u0627 \u062a\u0638\u0647\u0631 \u0645\u062c\u062f\u062f\u0627\u064b": "Don't show again",
    "\u0645\u0641\u0647\u0648\u0645!": "I understand!",
    "\u0645\u0632\u0627\u0645\u0646\u0629 \u0627\u0644\u0645\u0634\u0631\u0648\u0639": "Project Sync",
    "\u0631\u0642\u0645 \u0627\u0644\u0645\u0634\u0631\u0648\u0639": "Project ID",
    "\u0645\u0633\u0627\u062d\u0629 \u0627\u0644\u0639\u0645\u0644": "Workspace",
    "\u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645": "User",
    "\u0627\u0644\u062d\u0633\u0627\u0628:": "Account:",
    "\u0645\u0637\u0644\u0648\u0628 \u062a\u062d\u062f\u064a\u062b \u0627\u0644\u0625\u0636\u0627\u0641\u0629": "Update Required",
    "\u062a\u062d\u062f\u064a\u062b \u062c\u062f\u064a\u062f v": "New update v",
    "\u062a\u062d\u0645\u064a\u0644 v": "Download v",
    "\u0627\u0644\u0623\u062e\u0637\u0627\u0621": "Bugs",
    "\u0625\u0639\u0627\u062f\u0629 \u0647\u064a\u0643\u0644\u0629": "Refactor",
    "\u0627\u0644\u0623\u062e\u0637\u0627\u0621 \u0627\u0644\u0634\u0627\u0626\u0639\u0629": "Errors",
    "\u062a\u062d\u0633\u064a\u0646 \u0627\u0644\u0623\u062f\u0627\u0621": "Optimize",
    "\u0627\u0644\u062a\u0639\u0644\u064a\u0642\u0627\u062a": "Comments",
    "\u0633\u064a\u0648 SEO": "SEO",
    "\u0648\u0627\u062c\u0647\u0629 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645": "UI",
    "\u0627\u0644\u0645\u0643\u0648\u0646\u0627\u062a": "Components",
    "\u0645\u0631\u0627\u062c\u0639\u0629 \u0627\u0644\u0643\u0648\u062f": "Review",
    "\u062a\u062d\u062f\u064a\u062f \u0627\u0644\u0643\u0644 \u0643\u0645\u0642\u0631\u0648\u0621": "Mark all as read",
    "\u0645\u0642\u0631\u0648\u0621\u0629": "Lidas",
    "\u0645\u062d\u0645\u064a \u0628\u0648\u0627\u0633\u0637\u0629 LAST ZONE": "Protected by LAST ZONE",
    "\u0627\u0633\u062a\u062e\u062f\u0645 \u0627\u0644\u0625\u0636\u0627\u0641\u0629 \u0644\u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0623\u0648\u0627\u0645\u0631": "Use the extension to send prompts",
    "\u0627\u0644\u062e\u0637\u0629/\u0627\u0644\u062a\u0641\u0643\u064a\u0631": "Plan Mode/Think",
    "\u0639\u062f\u0645 \u0627\u0644\u0639\u0631\u0636": "N\u00e3o mostrar",
    "\u0645\u0631\u0629 \u0623\u062e\u0631\u0649": "novamente",
    "\u0627\u0644\u0646\u0627\u0641\u0630\u0629": "Popup",
    "\u0627\u0644\u0639\u0648\u062f\u0629 \u0644\u0644\u0646\u0627\u0641\u0630\u0629 \u0627\u0644\u0639\u0627\u0626\u0645\u0629": "Back to floating mode",
    "Checking license...": "Checking license...",
    "\u0642\u062f \u064a\u0633\u062a\u0647\u0644\u0643 \u0631\u0635\u064a\u062f\u0627\u064b\u060c \u0648\u0644\u0643\u0646\u0647 \u064a\u0642\u062f\u0645 \u0645\u0633\u0627\u0639\u062f\u0629 \u062c\u064a\u062f\u0629. \u0627\u0633\u062a\u062e\u062f\u0645\u0647 \u0628\u0627\u0639\u062a\u062f\u0627\u0644!": "can consume credits, but offers great assistance. Use with moderation!",
    "\u0641\u0639\u0651\u0644": "Activate",
    "\u0644\u0625\u0646\u0634\u0627\u0621 \u062e\u0637\u0629 \u0639\u0645\u0644.": "to generate a plan.",
    "\u0641\u064a \u0645\u0648\u0642\u0639 Lovable\u060c": "On Lovable,",
    "\u0644\u0627 \u062a\u0636\u063a\u0637 \u0639\u0644\u0649 \u0632\u0631 \u0627\u0644\u0645\u0648\u0627\u0641\u0642\u0629 (Approve)": "do not click the Approve button",
    "\u0641\u0642\u0637 \u0642\u0645 \u0628\u0646\u0633\u062e \u0627\u0644\u062e\u0637\u0629 \u0627\u0644\u062c\u062f\u064a\u062f\u0629.": "just copy the new plan.",
    "\u0623\u0648\u0642\u0641 \u062a\u0641\u0639\u064a\u0644 \u0648\u0636\u0639 \u0627\u0644\u062e\u0637\u0629": "Turn off Plan Mode",
    "\u0648\u0623\u0631\u0633\u0644 \u0627\u0644\u0623\u0645\u0631 \u0639\u0628\u0631 \u0627\u0644\u0625\u0636\u0627\u0641\u0629\u061b \u0628\u0647\u0630\u0647 \u0627\u0644\u0637\u0631\u064a\u0642\u0629 \u0644\u0646 \u064a\u062a\u0645 \u0627\u0633\u062a\u0647\u0644\u0627\u0643 \u0623\u064a \u0631\u0635\u064a\u062f \u0625\u0636\u0627\u0641\u064a.": "and send it via the extension; this way no extra credits will be consumed.",
    "Digite seu comando...": "Enter your command...",
    "ATALHOS R\u00c1PIDOS": "QUICK SHORTCUTS",
    "Enviar": "Send",
    "Remover Marca de \u00c1gua": "Remove Watermark",
    "Ativar Escudo": "Enable Shield",
    "Usar Chat Padr\u00e3o": "Use Standard Chat",
    "Baixar C\u00f3digo Fonte": "Download Source Code",
    "Modo Plano": "Plan Mode",
    "Protected by Gringow Extension": "Protected by LAST ZONE",
    "Protected by ORNOV Extension": "Protected by LAST ZONE",
    "Protected by Ornov Extension": "Protected by LAST ZONE",
    "Use a extens\u00e3o para enviar prompts": "Use the extension to send prompts",
    "Escudo Ativado": "Shield Activated!",
    "O input do Lovable est\u00e1 bloqueado. Use a extens\u00e3o para enviar prompts.": "The Lovable input is blocked. Use the extension to send prompts.",
    "Entendi!": "I understand!",
    "Aten\u00e7\u00e3o \u2014 Modo Plano": "Attention - Plan Mode",
    "Aten\u00e7\u00e3o - Modo Plano": "Attention - Plan Mode",
    "Modo Plano/Pensar": "Plan Mode/Think",
    "O Modo Plano/Pensar pode consumir cr\u00e9ditos, mas oferece um bom aux\u00edlio. Use com modera\u00e7\u00e3o!": "<strong>Plan Mode/Think</strong> can consume credits, but offers great assistance. Use with moderation!",
    "Ative o Modo Plano para gerar um plano.": "Activate <strong>Plan Mode</strong> to generate a plan.",
    "No Lovable, n\u00e3o clique no bot\u00e3o Aprovar; apenas copie o novo plano.": "On Lovable, <strong>do not click the Approve button</strong>; just copy the new plan.",
    "Cole o plano copiado no prompt da extens\u00e3o.": "Paste the copied plan into the extension prompt.",
    "Desligue o Modo Plano e envie pela extens\u00e3o; assim nenhum cr\u00e9dito extra ser\u00e1 consumido.": "<strong>Turn off Plan Mode</strong> and send it via the extension; this way no extra credits will be consumed.",
    "N\u00e3o mostrar novamente": "Don't show again",
    "N\u00e3o mostrar": "Don't show",
    "novamente": "again",
    "Checking license on LAST ZONE server...": "Checking license...",
    "Checking license on LAST ZONE...": "Checking license..."
  };
  var EN_STATIC_PARTS = {
    "\u062a\u0641\u0639\u064a\u0644 \u0627\u0644\u062a\u0631\u062e\u064a\u0635": "Activate License",
    "\u0623\u062f\u062e\u0644 \u0645\u0641\u062a\u0627\u062d \u0627\u0644\u062a\u0631\u062e\u064a\u0635 \u0644\u0641\u062a\u062d \u0627\u0644\u0625\u0636\u0627\u0641\u0629.": "Enter your license key to unlock.",
    "\u0627\u0644\u062a\u062d\u0642\u0642 \u0645\u0646 \u0627\u0644\u0645\u0641\u062a\u0627\u062d": "Validate License",
    "\u0627\u0644\u0645\u0648\u0642\u0639 \u0627\u0644\u0631\u0633\u0645\u064a": "Official site",
    "\u0627\u0644\u0625\u0634\u0639\u0627\u0631\u0627\u062a": "Notifications",
    "\u0641\u062a\u062d \u0641\u064a \u0627\u0644\u0644\u0648\u062d\u0629 \u0627\u0644\u062c\u0627\u0646\u0628\u064a\u0629": "Open in Side Panel",
    "\u0627\u0644\u0645\u0638\u0647\u0631": "Theme",
    "\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062e\u0631\u0648\u062c": "Sign Out",
    "\u0628\u0627\u0646\u062a\u0638\u0627\u0631 \u0627\u0644\u0645\u0632\u0627\u0645\u0646\u0629...": "Waiting for sync...",
    "\u2705 \u062a\u0645 \u0627\u0644\u0645\u0632\u0627\u0645\u0646\u0629!": "Synced!",
    "\u0627\u0644\u0645\u0634\u0631\u0648\u0639:": "Project:",
    "\u0627\u0644\u0623\u0648\u0627\u0645\u0631": "Prompt",
    "\u0627\u0644\u0633\u062c\u0644": "History",
    "\u0627\u0643\u062a\u0628 \u0623\u0645\u0631\u0643 \u0647\u0646\u0627...": "Enter your command...",
    "\u0648\u0636\u0639 \u0627\u0644\u062e\u0637\u0629": "Plan Mode",
    "\u0627\u0644\u062e\u0637\u0629": "Plan",
    "\u0625\u0631\u0641\u0627\u0642 \u0645\u0644\u0641 (\u0627\u0644\u062d\u062f \u0627\u0644\u0623\u0642\u0635\u0649 10)": "Attach file (max. 10)",
    "\u0625\u0631\u0641\u0627\u0642 \u0645\u0644\u0641": "Attach file",
    "\u062a\u062d\u0633\u064a\u0646 \u0628\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a": "Optimize with AI",
    "\u062a\u062d\u0648\u064a\u0644 \u0627\u0644\u0635\u0648\u062a \u0625\u0644\u0649 \u0646\u0635": "Voice to text",
    "\u0627\u0644\u0635\u0648\u062a": "Voice",
    "\u0625\u0631\u0633\u0627\u0644": "Send",
    "\u0627\u062e\u062a\u0635\u0627\u0631\u0627\u062a \u0633\u0631\u064a\u0639\u0629": "Quick Shortcuts",
    "\u0625\u0632\u0627\u0644\u0629 \u0627\u0644\u0639\u0644\u0627\u0645\u0629 \u0627\u0644\u0645\u0627\u0626\u064a\u0629": "Remove Watermark",
    "\u062a\u0641\u0639\u064a\u0644 \u0627\u0644\u062f\u0631\u0639": "Enable Shield",
    "\u062a\u0639\u0637\u064a\u0644 \u0627\u0644\u062f\u0631\u0639": "Disable Shield",
    "\u0627\u0633\u062a\u062e\u062f\u0645 \u0627\u0644\u062f\u0631\u062f\u0634\u0629 \u0627\u0644\u0642\u064a\u0627\u0633\u064a\u0629": "Use Standard Chat",
    "\u062a\u0639\u0637\u064a\u0644 \u0627\u0644\u062f\u0631\u062f\u0634\u0629 \u0627\u0644\u0642\u064a\u0627\u0633\u064a\u0629": "Disable Standard Chat",
    "\u0627\u0644\u0639\u0648\u062f\u0629 \u0644\u062f\u0631\u062f\u0634\u0629 \u0627\u0644\u0625\u0636\u0627\u0641\u0629": "Back to Extension Chat",
    "\u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0643\u0648\u062f \u0627\u0644\u0645\u0635\u062f\u0631\u064a": "Download Source Code",
    "\u0646\u0634\u0631 \u0627\u0644\u0645\u0634\u0631\u0648\u0639": "Publish Project",
    "\u2601 \u062a\u0641\u0639\u064a\u0644 \u0633\u062d\u0627\u0628\u0629 Lovable": "Enable Lovable Cloud",
    "\u0627\u0644\u062f\u0639\u0645": "Support",
    "\u062a\u0648\u0627\u0635\u0644 \u0645\u0639 \u0627\u0644\u062f\u0639\u0645": "Contact Support",
    "\u062c\u0627\u0631\u064a \u0627\u0644\u062a\u062d\u0645\u064a\u0644...": "Loading...",
    "\u0644\u0627 \u062a\u0648\u062c\u062f \u0625\u0634\u0639\u0627\u0631\u0627\u062a.": "No notifications.",
    "\u0641\u0634\u0644 \u0627\u0644\u062a\u062d\u0645\u064a\u0644.": "Failed to load.",
    "\u0641\u062a\u062d \u0627\u0644\u0631\u0627\u0628\u0637 \u2190": "Open link ->",
    "\u062a\u0645 \u0628\u0646\u062c\u0627\u062d!": "Success!",
    "\u0627\u0642\u062a\u0631\u0628\u0646\u0627!": "Almost there!",
    "\u062e\u0637\u0623": "Error",
    "\u062a\u0646\u0628\u064a\u0647": "Attention",
    "\u062a\u0645 \u0631\u0641\u0636 \u0627\u0644\u0625\u0630\u0646": "Permission Denied",
    "\u0644\u0627 \u064a\u0648\u062c\u062f \u0635\u0648\u062a": "No Audio",
    "\u062e\u0637\u0623 \u0641\u064a \u0627\u0644\u0635\u0648\u062a": "Voice Error",
    "\u062a\u0645 \u062a\u0641\u0639\u064a\u0644 \u0627\u0644\u062f\u0631\u0639!": "Shield Activated!",
    "\u062a\u0645 \u062a\u0639\u0637\u064a\u0644 \u0627\u0644\u062f\u0631\u0639": "Shield Deactivated",
    "\u0627\u0644\u062d\u062f \u0627\u0644\u0623\u0642\u0635\u0649": "Limit",
    "\u0645\u0644\u0641 \u0643\u0628\u064a\u0631 \u0627\u0644\u062d\u062c\u0645": "Large File",
    "\u062e\u0637\u0623 \u0641\u064a \u0627\u0644\u0631\u0641\u0639": "Upload Error",
    "\u062a\u0645 \u0627\u0644\u0625\u0631\u0641\u0627\u0642!": "Attached!",
    "\u0627\u0646\u062a\u0647\u062a \u0635\u0644\u0627\u062d\u064a\u0629 \u0627\u0644\u062a\u0631\u062e\u064a\u0635!": "License Expired!",
    "\u0625\u063a\u0644\u0627\u0642": "Close",
    "\u0627\u0644\u062a\u062c\u0631\u0628\u0629 \u062a\u0646\u062a\u0647\u064a \u062e\u0644\u0627\u0644": "Trial expires in",
    "\u0627\u0644\u062a\u0631\u062e\u064a\u0635 \u064a\u0646\u062a\u0647\u064a \u062e\u0644\u0627\u0644": "License expires in",
    "\u23f0 \u0627\u0646\u062a\u0647\u0649 \u0627\u0644\u062a\u0631\u062e\u064a\u0635": "License expired",
    "\u062a\u0641\u0636\u0644 \u0628\u0632\u064a\u0627\u0631\u0629 \u0627\u0644\u0645\u0648\u0642\u0639 \u0627\u0644\u0631\u0633\u0645\u064a": "Visit the official site",
    "\u0632\u064a\u0627\u0631\u0629 \u0627\u0644\u0645\u0648\u0642\u0639": "Visit Site",
    "\u0644\u0627 \u062a\u0648\u062c\u062f \u0631\u0633\u0627\u0626\u0644": "No messages",
    "\u0627\u0644\u0631\u0633\u0627\u0626\u0644 \u0627\u0644\u062a\u064a \u062a\u0631\u0633\u0644\u0647\u0627 \u0633\u062a\u0638\u0647\u0631 \u0647\u0646\u0627 \u0643\u0633\u062c\u0644.": "Your sent prompts will appear here as history.",
    "\u0645\u0633\u062d \u0627\u0644\u0633\u062c\u0644": "Clear History",
    "\u0627\u0644\u064a\u0648\u0645": "Today",
    "\u0623\u0645\u0633": "Yesterday",
    "\u2713 \u062a\u0645 \u0627\u0644\u0625\u0631\u0633\u0627\u0644": "Sent",
    "\u0646\u0634\u0637": "Active",
    "\u062a\u062c\u0631\u064a\u0628\u064a": "Trial",
    "\u062a\u0631\u062e\u064a\u0635 \u063a\u064a\u0631 \u0645\u062d\u062f\u0648\u062f": "Unlimited License",
    "\u0645\u0646\u062a\u0647\u064a": "Expired",
    "\u064a\u0646\u062a\u0647\u064a \u0641\u064a:": "Expires on:",
    "\u064a\u0646\u062a\u0647\u064a \u0627\u0644\u062a\u0631\u062e\u064a\u0635 \u062e\u0644\u0627\u0644:": "License Expires In:",
    "\u0648\u0642\u062a \u0627\u0644\u062c\u0644\u0633\u0629": "SESSION TIME",
    "\u062a\u0646\u0628\u064a\u0647 \u2014 \u0648\u0636\u0639 \u0627\u0644\u062e\u0637\u0629": "Attention - Plan Mode",
    "\u0648\u0636\u0639 <strong>\u0627\u0644\u062e\u0637\u0629/\u0627\u0644\u062a\u0641\u0643\u064a\u0631</strong> \u0642\u062f \u064a\u0633\u062a\u0647\u0644\u0643 \u0631\u0635\u064a\u062f\u0627\u064b\u060c \u0648\u0644\u0643\u0646\u0647 \u064a\u0642\u062f\u0645 \u0645\u0633\u0627\u0639\u062f\u0629 \u062c\u064a\u062f\u0629. \u0627\u0633\u062a\u062e\u062f\u0645\u0647 \u0628\u0627\u0639\u062a\u062f\u0627\u0644!": "<strong>Plan Mode/Think</strong> can consume credits, but offers great assistance. Use with moderation!",
    "\u0642\u0645 \u0628\u062a\u0641\u0639\u064a\u0644 <strong>\u0648\u0636\u0639 \u0627\u0644\u062e\u0637\u0629</strong> \u0644\u0625\u0646\u0634\u0627\u0621 \u062e\u0637\u0629 \u0639\u0645\u0644.": "Activate <strong>Plan Mode</strong> to generate a plan.",
    "\u0641\u064a \u0645\u0648\u0642\u0639 Lovable\u060c <strong>\u0644\u0627 \u062a\u0636\u063a\u0637 \u0639\u0644\u0649 \u0632\u0631 \u0627\u0644\u0645\u0648\u0627\u0641\u0642\u0629 (Approve)</strong>\u061b \u0641\u0642\u0637 \u0642\u0645 \u0628\u0646\u0633\u062e \u0627\u0644\u062e\u0637\u0629 \u0627\u0644\u062c\u062f\u064a\u062f\u0629.": "On Lovable, <strong>do not click the Approve button</strong>; just copy the new plan.",
    "\u0642\u0645 \u0628\u0644\u0635\u0642 \u0627\u0644\u062e\u0637\u0629 \u0627\u0644\u0645\u0646\u0633\u0648\u062e\u0629 \u0641\u064a \u062d\u0642\u0644 \u0627\u0644\u0623\u0648\u0627\u0645\u0631 \u0628\u0627\u0644\u0625\u0636\u0627\u0641\u0629.": "Paste the copied plan into the extension prompt.",
    "<strong>\u0623\u0648\u0642\u0641 \u062a\u0641\u0639\u064a\u0644 \u0648\u0636\u0639 \u0627\u0644\u062e\u0637\u0629</strong> \u0648\u0623\u0631\u0633\u0644 \u0627\u0644\u0623\u0645\u0631 \u0639\u0628\u0631 \u0627\u0644\u0625\u0636\u0627\u0641\u0629\u061b \u0628\u0647\u0630\u0647 \u0627\u0644\u0637\u0631\u064a\u0642\u0629 \u0644\u0646 \u064a\u062a\u0645 \u0627\u0633\u062a\u0647\u0644\u0627\u0643 \u0623\u064a \u0631\u0635\u064a\u062f \u0625\u0636\u0627\u0641\u064a.": "<strong>Turn off Plan Mode</strong> and send it via the extension; this way no extra credits will be consumed.",
    "\u0644\u0627 \u062a\u0638\u0647\u0631 \u0645\u062c\u062f\u062f\u0627\u064b": "Don't show again",
    "\u0645\u0641\u0647\u0648\u0645!": "I understand!",
    "\u0645\u0632\u0627\u0645\u0646\u0629 \u0627\u0644\u0645\u0634\u0631\u0648\u0639": "Project Sync",
    "\u0631\u0642\u0645 \u0627\u0644\u0645\u0634\u0631\u0648\u0639": "Project ID",
    "\u0645\u0633\u0627\u062d\u0629 \u0627\u0644\u0639\u0645\u0644": "Workspace",
    "\u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645": "User",
    "\u0627\u0644\u062d\u0633\u0627\u0628:": "Account:",
    "\u0645\u0637\u0644\u0648\u0628 \u062a\u062d\u062f\u064a\u062b \u0627\u0644\u0625\u0636\u0627\u0641\u0629": "Update Required",
    "\u062a\u062d\u062f\u064a\u062b \u062c\u062f\u064a\u062f v": "New update v",
    "\u062a\u062d\u0645\u064a\u0644 v": "Download v",
    "\u0627\u0644\u0623\u062e\u0637\u0627\u0621": "Bugs",
    "\u0625\u0639\u0627\u062f\u0629 \u0647\u064a\u0643\u0644\u0629": "Refactor",
    "\u0627\u0644\u0623\u062e\u0637\u0627\u0621 \u0627\u0644\u0634\u0627\u0626\u0639\u0629": "Errors",
    "\u062a\u062d\u0633\u064a\u0646 \u0627\u0644\u0623\u062f\u0627\u0621": "Optimize",
    "\u0627\u0644\u062a\u0639\u0644\u064a\u0642\u0627\u062a": "Comments",
    "\u0627\u0644\u0645\u0643\u0648\u0646\u0627\u062a": "Components",
    "\u0645\u0631\u0627\u062c\u0639\u0629 \u0627\u0644\u0643\u0648\u062f": "Review",
    "\u062a\u062d\u062f\u064a\u062f \u0627\u0644\u0643\u0644 \u0643\u0645\u0642\u0631\u0648\u0621": "Mark all as read",
    "\u0645\u0642\u0631\u0648\u0621\u0629": "Lidas",
    "\u0645\u062d\u0645\u064a \u0628\u0648\u0627\u0633\u0637\u0629 LAST ZONE": "Protected by LAST ZONE",
    "\u0627\u0633\u062a\u062e\u062f\u0645 \u0627\u0644\u0625\u0636\u0627\u0641\u0629 \u0644\u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0623\u0648\u0627\u0645\u0631": "Use the extension to send prompts",
    "\u0627\u0644\u062e\u0637\u0629/\u0627\u0644\u062a\u0641\u0643\u064a\u0631": "Plan Mode/Think",
    "\u0639\u062f\u0645 \u0627\u0644\u0639\u0631\u0636": "N\u00e3o mostrar",
    "\u0645\u0631\u0629 \u0623\u062e\u0631\u0649": "novamente",
    "\u0627\u0644\u0646\u0627\u0641\u0630\u0629": "Popup",
    "\u0627\u0644\u0639\u0648\u062f\u0629 \u0644\u0644\u0646\u0627\u0641\u0630\u0629 \u0627\u0644\u0639\u0627\u0626\u0645\u0629": "Back to floating mode",
    "Checking license...": "Checking license...",
    "\u0642\u062f \u064a\u0633\u062a\u0647\u0644\u0643 \u0631\u0635\u064a\u062f\u0627\u064b\u060c \u0648\u0644\u0643\u0646\u0647 \u064a\u0642\u062f\u0645 \u0645\u0633\u0627\u0639\u062f\u0629 \u062c\u064a\u062f\u0629. \u0627\u0633\u062a\u062e\u062f\u0645\u0647 \u0628\u0627\u0639\u062a\u062f\u0627\u0644!": "can consume credits, but offers great assistance. Use with moderation!",
    "\u0641\u0639\u0651\u0644": "Activate",
    "\u0644\u0625\u0646\u0634\u0627\u0621 \u062e\u0637\u0629 \u0639\u0645\u0644.": "to generate a plan.",
    "\u0641\u064a \u0645\u0648\u0642\u0639 Lovable\u060c": "On Lovable,",
    "\u0644\u0627 \u062a\u0636\u063a\u0637 \u0639\u0644\u0649 \u0632\u0631 \u0627\u0644\u0645\u0648\u0627\u0641\u0642\u0629 (Approve)": "do not click the Approve button",
    "\u0641\u0642\u0637 \u0642\u0645 \u0628\u0646\u0633\u062e \u0627\u0644\u062e\u0637\u0629 \u0627\u0644\u062c\u062f\u064a\u062f\u0629.": "just copy the new plan.",
    "\u0623\u0648\u0642\u0641 \u062a\u0641\u0639\u064a\u0644 \u0648\u0636\u0639 \u0627\u0644\u062e\u0637\u0629": "Turn off Plan Mode",
    "\u0648\u0623\u0631\u0633\u0644 \u0627\u0644\u0623\u0645\u0631 \u0639\u0628\u0631 \u0627\u0644\u0625\u0636\u0627\u0641\u0629\u061b \u0628\u0647\u0630\u0647 \u0627\u0644\u0637\u0631\u064a\u0642\u0629 \u0644\u0646 \u064a\u062a\u0645 \u0627\u0633\u062a\u0647\u0644\u0627\u0643 \u0623\u064a \u0631\u0635\u064a\u062f \u0625\u0636\u0627\u0641\u064a.": "and send it via the extension; this way no extra credits will be consumed.",
    "Digite seu comando...": "Enter your command...",
    "ATALHOS R\u00c1PIDOS": "QUICK SHORTCUTS",
    "Enviar": "Send",
    "Remover Marca de \u00c1gua": "Remove Watermark",
    "Ativar Escudo": "Enable Shield",
    "Usar Chat Padr\u00e3o": "Use Standard Chat",
    "Baixar C\u00f3digo Fonte": "Download Source Code",
    "Modo Plano": "Plan Mode",
    "Protected by Gringow Extension": "Protected by LAST ZONE",
    "Protected by ORNOV Extension": "Protected by LAST ZONE",
    "Protected by Ornov Extension": "Protected by LAST ZONE",
    "Use a extens\u00e3o para enviar prompts": "Use the extension to send prompts",
    "Escudo Ativado": "Shield Activated!",
    "O input do Lovable est\u00e1 bloqueado. Use a extens\u00e3o para enviar prompts.": "The Lovable input is blocked. Use the extension to send prompts.",
    "Entendi!": "I understand!",
    "Aten\u00e7\u00e3o \u2014 Modo Plano": "Attention - Plan Mode",
    "Aten\u00e7\u00e3o - Modo Plano": "Attention - Plan Mode",
    "Modo Plano/Pensar": "Plan Mode/Think",
    "O Modo Plano/Pensar pode consumir cr\u00e9ditos, mas oferece um bom aux\u00edlio. Use com modera\u00e7\u00e3o!": "<strong>Plan Mode/Think</strong> can consume credits, but offers great assistance. Use with moderation!",
    "Ative o Modo Plano para gerar um plano.": "Activate <strong>Plan Mode</strong> to generate a plan.",
    "No Lovable, n\u00e3o clique no bot\u00e3o Aprovar; apenas copie o novo plano.": "On Lovable, <strong>do not click the Approve button</strong>; just copy the new plan.",
    "Cole o plano copiado no prompt da extens\u00e3o.": "Paste the copied plan into the extension prompt.",
    "Desligue o Modo Plano e envie pela extens\u00e3o; assim nenhum cr\u00e9dito extra ser\u00e1 consumido.": "<strong>Turn off Plan Mode</strong> and send it via the extension; this way no extra credits will be consumed.",
    "N\u00e3o mostrar novamente": "Don't show again",
    "N\u00e3o mostrar": "Don't show",
    "novamente": "again",
    "\u062d\u0633\u0646\u0627\u064b": "OK",
    "\u0633\u064a\u0648 SEO": "SEO",
    "\u0648\u0627\u062c\u0647\u0629 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645": "UI",
    "Checking license on LAST ZONE server...": "Checking license...",
    "Checking license on LAST ZONE...": "Checking license..."
  };
  var CLEAN_AR_I18N = {
    "license.title": "\u062a\u0641\u0639\u064a\u0644 \u0627\u0644\u062a\u0631\u062e\u064a\u0635",
    "license.desc": "\u0623\u062f\u062e\u0644 \u0645\u0641\u062a\u0627\u062d \u0627\u0644\u062a\u0631\u062e\u064a\u0635 \u0644\u0641\u062a\u062d \u0627\u0644\u0625\u0636\u0627\u0641\u0629.",
    "license.validate": "\u0627\u0644\u062a\u062d\u0642\u0642 \u0645\u0646 \u0627\u0644\u0645\u0641\u062a\u0627\u062d",
    "license.divider": "\u0627\u0644\u0645\u0648\u0642\u0639 \u0627\u0644\u0631\u0633\u0645\u064a",
    "header.notifications": "\u0627\u0644\u0625\u0634\u0639\u0627\u0631\u0627\u062a",
    "header.sidepanel": "\u0641\u062a\u062d \u0641\u064a \u0627\u0644\u0644\u0648\u062d\u0629 \u0627\u0644\u062c\u0627\u0646\u0628\u064a\u0629",
    "header.theme": "\u0627\u0644\u0645\u0638\u0647\u0631",
    "header.logout": "\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062e\u0631\u0648\u062c",
    "sync.waiting": "\u0628\u0627\u0646\u062a\u0638\u0627\u0631 \u0627\u0644\u0645\u0632\u0627\u0645\u0646\u0629...",
    "sync.ok": "\u2705 \u062a\u0645 \u0627\u0644\u0645\u0632\u0627\u0645\u0646\u0629!",
    "sync.project": "\u0627\u0644\u0645\u0634\u0631\u0648\u0639:",
    "tab.prompt": "\u0627\u0644\u0623\u0648\u0627\u0645\u0631",
    "tab.history": "\u0627\u0644\u0633\u062c\u0644",
    "prompt.placeholder": "\u0627\u0643\u062a\u0628 \u0623\u0645\u0631\u0643 \u0647\u0646\u0627...",
    "toggle.licenseMode": "\u0648\u0636\u0639 \u0627\u0644\u062e\u0637\u0629",
    "toggle.licenseMode.short": "\u0627\u0644\u062e\u0637\u0629",
    "btn.attach": "\u0625\u0631\u0641\u0627\u0642 \u0645\u0644\u0641 (\u0627\u0644\u062d\u062f \u0627\u0644\u0623\u0642\u0635\u0649 10)",
    "btn.attach.short": "\u0625\u0631\u0641\u0627\u0642 \u0645\u0644\u0641",
    "btn.optimize": "\u062a\u062d\u0633\u064a\u0646 \u0628\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a",
    "btn.speech": "\u062a\u062d\u0648\u064a\u0644 \u0627\u0644\u0635\u0648\u062a \u0625\u0644\u0649 \u0646\u0635",
    "btn.speech.short": "\u0627\u0644\u0635\u0648\u062a",
    "btn.send": "\u0625\u0631\u0633\u0627\u0644",
    "shortcuts.title": "\u0627\u062e\u062a\u0635\u0627\u0631\u0627\u062a \u0633\u0631\u064a\u0639\u0629",
    "btn.watermark": "\u0625\u0632\u0627\u0644\u0629 \u0627\u0644\u0639\u0644\u0627\u0645\u0629 \u0627\u0644\u0645\u0627\u0626\u064a\u0629",
    "btn.shield.on": "\u062a\u0641\u0639\u064a\u0644 \u0627\u0644\u062f\u0631\u0639",
    "btn.shield.off": "\u062a\u0639\u0637\u064a\u0644 \u0627\u0644\u062f\u0631\u0639",
    "btn.nativeChat": "\u0627\u0633\u062a\u062e\u062f\u0645 \u0627\u0644\u062f\u0631\u062f\u0634\u0629 \u0627\u0644\u0642\u064a\u0627\u0633\u064a\u0629",
    "btn.nativeChatActive": "\u062a\u0639\u0637\u064a\u0644 \u0627\u0644\u062f\u0631\u062f\u0634\u0629 \u0627\u0644\u0642\u064a\u0627\u0633\u064a\u0629",
    "btn.backToExtension": "\u0627\u0644\u0639\u0648\u062f\u0629 \u0644\u062f\u0631\u062f\u0634\u0629 \u0627\u0644\u0625\u0636\u0627\u0641\u0629",
    "btn.download": "\u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0643\u0648\u062f \u0627\u0644\u0645\u0635\u062f\u0631\u064a",
    "btn.publish": "\u0646\u0634\u0631 \u0627\u0644\u0645\u0634\u0631\u0648\u0639",
    "btn.cloud": "\u2601 \u062a\u0641\u0639\u064a\u0644 \u0633\u062d\u0627\u0628\u0629 Lovable",
    "footer.support": "\u0627\u0644\u062f\u0639\u0645",
    "footer.brand": "LAST ZONE",
    "notif.title": "\u0627\u0644\u0625\u0634\u0639\u0627\u0631\u0627\u062a",
    "notif.loading": "\u062c\u0627\u0631\u064a \u0627\u0644\u062a\u062d\u0645\u064a\u0644...",
    "notif.none": "\u0644\u0627 \u062a\u0648\u062c\u062f \u0625\u0634\u0639\u0627\u0631\u0627\u062a.",
    "notif.error": "\u0641\u0634\u0644 \u0627\u0644\u062a\u062d\u0645\u064a\u0644.",
    "notif.openLink": "\u0641\u062a\u062d \u0627\u0644\u0631\u0627\u0628\u0637 \u2190",
    "loading": "\u062c\u0627\u0631\u064a \u0627\u0644\u062a\u062d\u0645\u064a\u0644...",
    "alert.success": "\u062a\u0645 \u0628\u0646\u062c\u0627\u062d!",
    "alert.almostThere": "\u0627\u0642\u062a\u0631\u0628\u0646\u0627!",
    "alert.clickIcon": "\u0627\u0646\u0642\u0631 \u0639\u0644\u0649 \u0623\u064a\u0642\u0648\u0646\u0629 \u0627\u0644\u0625\u0636\u0627\u0641\u0629 (\u0623\u0639\u0644\u0649 \u0627\u0644\u064a\u0645\u064a\u0646) \u0644\u0641\u062a\u062d \u0627\u0644\u0644\u0648\u062d\u0629 \u0627\u0644\u062c\u0627\u0646\u0628\u064a\u0629.",
    "alert.error": "\u062e\u0637\u0623",
    "alert.sidepanelSupport": "\u0644\u0627 \u064a\u0645\u0643\u0646 \u0641\u062a\u062d \u0627\u0644\u0644\u0648\u062d\u0629 \u0627\u0644\u062c\u0627\u0646\u0628\u064a\u0629. \u062a\u0623\u0643\u062f \u0645\u0646 \u0623\u0646 \u0645\u062a\u0635\u0641\u062d\u0643 \u064a\u062f\u0639\u0645 \u0647\u0630\u0647 \u0627\u0644\u0645\u064a\u0632\u0629.",
    "alert.attention": "\u062a\u0646\u0628\u064a\u0647",
    "alert.enterPrompt": "\u064a\u0631\u062c\u0649 \u0643\u062a\u0627\u0628\u0629 \u0623\u0645\u0631 \u0642\u0628\u0644 \u0627\u0644\u0628\u062f\u0621 \u0628\u0627\u0644\u062a\u062d\u0633\u064a\u0646.",
    "alert.promptOptimized": "\u062a\u0645 \u062a\u062d\u0633\u064a\u0646 \u0627\u0644\u0623\u0645\u0631! \u2728",
    "alert.promptReady": "\u062a\u0645 \u062a\u062d\u0633\u064a\u0646 \u0627\u0644\u0623\u0645\u0631 \u0627\u0644\u062e\u0627\u0635 \u0628\u0643 \u0628\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a \u0648\u062c\u0627\u0647\u0632 \u0644\u0644\u0625\u0631\u0633\u0627\u0644.",
    "alert.optimizerConnFail": "\u0641\u0634\u0644 \u0627\u0644\u0627\u062a\u0635\u0627\u0644 \u0628\u0645\u062d\u0633\u0646 \u0627\u0644\u0623\u0648\u0627\u0645\u0631:",
    "alert.micDenied": "\u062a\u0645 \u0631\u0641\u0636 \u0627\u0644\u0625\u0630\u0646",
    "alert.micAccess": "\u064a\u0631\u062c\u0649 \u0627\u0644\u0633\u0645\u0627\u062d \u0628\u0627\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u0649 \u0627\u0644\u0645\u064a\u0643\u0631\u0648\u0641\u0648\u0646 \u0641\u064a \u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0645\u062a\u0635\u0641\u062d\u0643.",
    "alert.noAudio": "\u0644\u0627 \u064a\u0648\u062c\u062f \u0635\u0648\u062a",
    "alert.noSpeech": "\u0644\u0645 \u064a\u062a\u0645 \u0631\u0635\u062f \u0623\u064a \u062d\u062f\u064a\u062b. \u064a\u0631\u062c\u0649 \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629 \u0645\u0631\u0629 \u0623\u062e\u0631\u0649.",
    "alert.voiceError": "\u062e\u0637\u0623 \u0641\u064a \u0627\u0644\u0635\u0648\u062a",
    "alert.voiceInitFail": "\u062a\u0639\u0630\u0631 \u0628\u062f\u0621 \u0627\u0644\u062a\u0639\u0631\u0641 \u0639\u0644\u0649 \u0627\u0644\u0635\u0648\u062a.",
    "alert.shieldActivated": "\u062a\u0645 \u062a\u0641\u0639\u064a\u0644 \u0627\u0644\u062f\u0631\u0639!",
    "alert.shieldLocked": "\u062d\u0642\u0644 \u0627\u0644\u0625\u062f\u062e\u0627\u0644 \u0641\u064a Lovable \u0645\u063a\u0644\u0642. \u0627\u0633\u062a\u062e\u062f\u0645 \u0627\u0644\u0625\u0636\u0627\u0641\u0629 \u0644\u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0623\u0648\u0627\u0645\u0631.",
    "alert.shieldDeactivated": "\u062a\u0645 \u062a\u0639\u0637\u064a\u0644 \u0627\u0644\u062f\u0631\u0639",
    "alert.shieldUnlocked": "\u062d\u0642\u0644 \u0627\u0644\u0625\u062f\u062e\u0627\u0644 \u0641\u064a Lovable \u0645\u062a\u0627\u062d \u0645\u0631\u0629 \u0623\u062e\u0631\u0649.",
    "alert.limit": "\u0627\u0644\u062d\u062f \u0627\u0644\u0623\u0642\u0635\u0649",
    "alert.maxFiles": "\u0627\u0644\u062d\u062f \u0627\u0644\u0623\u0642\u0635\u0649 10 \u0645\u0644\u0641\u0627\u062a.",
    "alert.tokenNotCaptured": "\u0644\u0645 \u064a\u062a\u0645 \u0627\u0644\u062a\u0642\u0627\u0637 \u0627\u0644\u0631\u0645\u0632 \u0627\u0644\u0645\u0645\u064a\u0651\u0632. \u062a\u0635\u0641\u062d \u0645\u0648\u0642\u0639 Lovable \u0644\u0644\u0645\u0632\u0627\u0645\u0646\u0629.",
    "alert.largeFile": "\u0645\u0644\u0641 \u0643\u0628\u064a\u0631 \u0627\u0644\u062d\u062c\u0645",
    "alert.fileExceeds": "\u064a\u062a\u062c\u0627\u0648\u0632 \u062d\u062c\u0645\u0647 20 \u0645\u064a\u062c\u0627\u0628\u0627\u064a\u062a.",
    "alert.uploadError": "\u062e\u0637\u0623 \u0641\u064a \u0627\u0644\u0631\u0641\u0639",
    "alert.uploadFail": "\u062a\u0639\u0630\u0631 \u0631\u0641\u0639 \u0627\u0644\u0635\u0648\u0631\u0629:",
    "alert.attached": "\u062a\u0645 \u0627\u0644\u0625\u0631\u0641\u0627\u0642!",
    "alert.filesAdded": "\u0645\u0644\u0641(\u0627\u062a) \u062a\u0645 \u0625\u0636\u0627\u0641\u062a\u0647\u0627!",
    "btn.ok": "\u062d\u0633\u0646\u0627\u064b",
    "expired.title": "\u0627\u0646\u062a\u0647\u062a \u0635\u0644\u0627\u062d\u064a\u0629 \u0627\u0644\u062a\u0631\u062e\u064a\u0635!",
    "expired.text": "\u0627\u0646\u062a\u0647\u062a \u0635\u0644\u0627\u062d\u064a\u0629 \u062a\u0631\u062e\u064a\u0635\u0643. \u064a\u0631\u062c\u0649 \u0632\u064a\u0627\u0631\u0629 \u0627\u0644\u0645\u0648\u0642\u0639 \u0627\u0644\u0631\u0633\u0645\u064a \u0644\u0644\u062a\u062c\u062f\u064a\u062f.",
    "expired.renew": "\u0632\u064a\u0627\u0631\u0629 \u0627\u0644\u0645\u0648\u0642\u0639",
    "expired.close": "\u0625\u063a\u0644\u0627\u0642",
    "countdown.trial": "\u0627\u0644\u062a\u062c\u0631\u0628\u0629 \u062a\u0646\u062a\u0647\u064a \u062e\u0644\u0627\u0644",
    "countdown.license": "\u0627\u0644\u062a\u0631\u062e\u064a\u0635 \u064a\u0646\u062a\u0647\u064a \u062e\u0644\u0627\u0644",
    "countdown.expired": "\u23f0 \u0627\u0646\u062a\u0647\u0649 \u0627\u0644\u062a\u0631\u062e\u064a\u0635",
    "pay.title": "\u062a\u0641\u0636\u0644 \u0628\u0632\u064a\u0627\u0631\u0629 \u0627\u0644\u0645\u0648\u0642\u0639 \u0627\u0644\u0631\u0633\u0645\u064a",
    "pay.divider": "\u0627\u0644\u0645\u0648\u0642\u0639 \u0627\u0644\u0631\u0633\u0645\u064a",
    "history.empty.title": "\u0644\u0627 \u062a\u0648\u062c\u062f \u0631\u0633\u0627\u0626\u0644",
    "history.empty.desc": "\u0627\u0644\u0631\u0633\u0627\u0626\u0644 \u0627\u0644\u062a\u064a \u062a\u0631\u0633\u0644\u0647\u0627 \u0633\u062a\u0638\u0647\u0631 \u0647\u0646\u0627 \u0643\u0633\u062c\u0644.",
    "history.clear": "\u0645\u0633\u062d \u0627\u0644\u0633\u062c\u0644",
    "date.today": "\u0627\u0644\u064a\u0648\u0645",
    "date.yesterday": "\u0623\u0645\u0633",
    "date.days": "\u0627\u0644\u0623\u062d\u062f,\u0627\u0644\u0625\u062b\u0646\u064a\u0646,\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621,\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621,\u0627\u0644\u062e\u0645\u064a\u0633,\u0627\u0644\u062c\u0645\u0639\u0629,\u0627\u0644\u0633\u0628\u062a",
    "chat.sent": "\u2713 \u062a\u0645 \u0627\u0644\u0625\u0631\u0633\u0627\u0644",
    "chat.error": "\u2717 \u062e\u0637\u0623",
    "update.title": "\u062a\u062d\u062f\u064a\u062b \u062c\u062f\u064a\u062f v",
    "update.download": "\u062a\u062d\u0645\u064a\u0644 v",
    "sp.backToPopup": "\u0627\u0644\u0646\u0627\u0641\u0630\u0629",
    "shield.overlay.text": "\u0645\u062d\u0645\u064a \u0628\u0648\u0627\u0633\u0637\u0629 LAST ZONE",
    "shield.overlay.sub": "\u0627\u0633\u062a\u062e\u062f\u0645 \u0627\u0644\u0625\u0636\u0627\u0641\u0629 \u0644\u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0623\u0648\u0627\u0645\u0631",
    "prompt.bugs.label": "\u0627\u0644\u0623\u062e\u0637\u0627\u0621",
    "prompt.refactor.label": "\u0625\u0639\u0627\u062f\u0629 \u0647\u064a\u0643\u0644\u0629",
    "prompt.errors.label": "\u0627\u0644\u0623\u062e\u0637\u0627\u0621 \u0627\u0644\u0634\u0627\u0626\u0639\u0629",
    "prompt.optimize.label": "\u062a\u062d\u0633\u064a\u0646 \u0627\u0644\u0623\u062f\u0627\u0621",
    "prompt.comments.label": "\u0627\u0644\u062a\u0639\u0644\u064a\u0642\u0627\u062a",
    "prompt.seo.label": "\u0633\u064a\u0648 SEO",
    "prompt.ui.label": "\u0648\u0627\u062c\u0647\u0629 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645",
    "prompt.components.label": "\u0627\u0644\u0645\u0643\u0648\u0646\u0627\u062a",
    "prompt.review.label": "\u0645\u0631\u0627\u062c\u0639\u0629 \u0627\u0644\u0643\u0648\u062f",
    "prompt.bugs.text": "\u062d\u0644\u0644 \u0627\u0644\u0643\u0648\u062f \u0648\u062d\u062f\u062f \u062c\u0645\u064a\u0639 \u0627\u0644\u0623\u062e\u0637\u0627\u0621 \u0648\u0627\u0644\u062b\u063a\u0631\u0627\u062a \u0648\u0642\u0645 \u0628\u0625\u0635\u0644\u0627\u062d\u0647\u0627 \u0645\u0639 \u0634\u0631\u062d \u0627\u0644\u0645\u0634\u0643\u0644\u0629 \u0648\u0627\u0644\u062d\u0644.",
    "prompt.refactor.text": "\u0636\u0639 \u062e\u0637\u0629 \u0643\u0627\u0645\u0644\u0629 \u0644\u0625\u0639\u0627\u062f\u0629 \u0647\u064a\u0643\u0644\u0629 \u0648\u062a\u062d\u0633\u064a\u0646 \u0627\u0644\u0646\u0638\u0627\u0645 \u0628\u0627\u0644\u062e\u0637\u0648\u0627\u062a.",
    "prompt.errors.text": "\u0642\u0645 \u0628\u0625\u0639\u062f\u0627\u062f \u0645\u0639\u0627\u0644\u062c\u0629 \u0642\u0648\u064a\u0629 \u0644\u0644\u0623\u062e\u0637\u0627\u0621 \u0641\u064a \u0627\u0644\u0643\u0648\u062f \u062a\u0634\u0645\u0644 try/catch \u0648\u0631\u0633\u0627\u0626\u0644 \u062a\u0646\u0628\u064a\u0647\u064a\u0629 \u0648\u0627\u0636\u062d\u0629.",
    "prompt.optimize.text": "\u062d\u0644\u0644 \u0627\u0644\u0643\u0648\u062f \u0648\u062d\u0633\u0646 \u0627\u0644\u0623\u062f\u0627\u0621 \u0644\u062c\u0639\u0644\u0647 \u0623\u0633\u0631\u0639 \u0648\u062a\u062c\u0646\u0628 \u062a\u0643\u0631\u0627\u0631 \u0627\u0644\u0639\u0645\u0644\u064a\u0627\u062a \u063a\u064a\u0631 \u0627\u0644\u0636\u0631\u0648\u0631\u064a\u0629.",
    "prompt.comments.text": "\u0623\u0636\u0641 \u062a\u0639\u0644\u064a\u0642\u0627\u062a \u0648\u0627\u0636\u062d\u0629 \u0648\u062a\u0648\u062b\u064a\u0642\u0627\u064b \u0641\u064a \u062c\u0645\u064a\u0639 \u0623\u0646\u062d\u0627\u0621 \u0627\u0644\u0643\u0648\u062f \u0644\u0634\u0631\u062d \u0645\u0646\u0637\u0642 \u0643\u0644 \u062f\u0627\u0644\u0629.",
    "prompt.seo.text": "\u0636\u0639 \u062e\u0637\u0629 \u062a\u062d\u0633\u064a\u0646 SEO \u0643\u0627\u0645\u0644\u0629 \u0644\u0647\u0630\u0627 \u0627\u0644\u0645\u0648\u0642\u0639.",
    "prompt.ui.text": "\u062d\u0633\u0646 \u0648\u0627\u062c\u0647\u0629 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645 \u0644\u062a\u0635\u0628\u062d \u0623\u0643\u062b\u0631 \u0639\u0635\u0631\u064a\u0629 \u0648\u062a\u0641\u0627\u0639\u0644\u064a\u0629 \u0648\u062a\u0648\u0627\u0641\u0642\u0627\u064b \u0645\u0639 \u0627\u0644\u0647\u0648\u0627\u062a\u0641.",
    "prompt.components.text": "\u0623\u0639\u062f \u062a\u0646\u0638\u064a\u0645 \u0627\u0644\u0643\u0648\u062f \u0648\u0641\u0635\u0644\u0647 \u0625\u0644\u0649 \u0645\u0643\u0648\u0646\u0627\u062a \u0642\u0627\u0628\u0644\u0629 \u0644\u0625\u0639\u0627\u062f\u0629 \u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645.",
    "prompt.review.text": "\u0642\u0645 \u0628\u0645\u0631\u0627\u062c\u0639\u0629 \u0634\u0627\u0645\u0644\u0629 \u0644\u0644\u0643\u0648\u062f \u0644\u0644\u062a\u062d\u0642\u0642 \u0645\u0646 \u0627\u0644\u062c\u0648\u062f\u0629 \u0648\u0627\u0644\u062d\u0645\u0627\u064a\u0629 \u0648\u0627\u0644\u0623\u062f\u0627\u0621 \u0648\u0627\u0642\u062a\u0631\u0627\u062d \u0627\u0644\u062a\u062d\u0633\u064a\u0646\u0627\u062a.",
    "license.status.active": "\u0646\u0634\u0637",
    "license.status.trial": "\u062a\u062c\u0631\u064a\u0628\u064a",
    "license.status.unlimited": "\u062a\u0631\u062e\u064a\u0635 \u063a\u064a\u0631 \u0645\u062d\u062f\u0648\u062f",
    "license.status.expired": "\u0645\u0646\u062a\u0647\u064a",
    "license.status.expiresOn": "\u064a\u0646\u062a\u0647\u064a \u0641\u064a:",
    "license.status.expiresIn": "\u064a\u0646\u062a\u0647\u064a \u0627\u0644\u062a\u0631\u062e\u064a\u0635 \u062e\u0644\u0627\u0644:",
    "session.time": "\u0648\u0642\u062a \u0627\u0644\u062c\u0644\u0633\u0629",
    "planMode.alert.title": "\u062a\u0646\u0628\u064a\u0647 \u2014 \u0648\u0636\u0639 \u0627\u0644\u062e\u0637\u0629",
    "planMode.alert.body": "\u0648\u0636\u0639 <strong>\u0627\u0644\u062e\u0637\u0629/\u0627\u0644\u062a\u0641\u0643\u064a\u0631</strong> \u0642\u062f \u064a\u0633\u062a\u0647\u0644\u0643 \u0631\u0635\u064a\u062f\u0627\u064b\u060c \u0648\u0644\u0643\u0646\u0647 \u064a\u0642\u062f\u0645 \u0645\u0633\u0627\u0639\u062f\u0629 \u062c\u064a\u062f\u0629. \u0627\u0633\u062a\u062e\u062f\u0645\u0647 \u0628\u0627\u0639\u062a\u062f\u0627\u0644!",
    "planMode.alert.step1": "\u0642\u0645 \u0628\u062a\u0641\u0639\u064a\u0644 <strong>\u0648\u0636\u0639 \u0627\u0644\u062e\u0637\u0629</strong> \u0644\u0625\u0646\u0634\u0627\u0621 \u062e\u0637\u0629 \u0639\u0645\u0644.",
    "planMode.alert.step2": "\u0641\u064a \u0645\u0648\u0642\u0639 Lovable\u060c <strong>\u0644\u0627 \u062a\u0636\u063a\u0637 \u0639\u0644\u0649 \u0632\u0631 \u0627\u0644\u0645\u0648\u0627\u0641\u0642\u0629 (Approve)</strong>\u061b \u0641\u0642\u0637 \u0642\u0645 \u0628\u0646\u0633\u062e \u0627\u0644\u062e\u0637\u0629 \u0627\u0644\u062c\u062f\u064a\u062f\u0629.",
    "planMode.alert.step3": "\u0642\u0645 \u0628\u0644\u0635\u0642 \u0627\u0644\u062e\u0637\u0629 \u0627\u0644\u0645\u0646\u0633\u0648\u062e\u0629 \u0641\u064a \u062d\u0642\u0644 \u0627\u0644\u0623\u0648\u0627\u0645\u0631 \u0628\u0627\u0644\u0625\u0636\u0627\u0641\u0629.",
    "planMode.alert.step4": "<strong>\u0623\u0648\u0642\u0641 \u062a\u0641\u0639\u064a\u0644 \u0648\u0636\u0639 \u0627\u0644\u062e\u0637\u0629</strong> \u0648\u0623\u0631\u0633\u0644 \u0627\u0644\u0623\u0645\u0631 \u0639\u0628\u0631 \u0627\u0644\u0625\u0636\u0627\u0641\u0629\u061b \u0628\u0647\u0630\u0647 \u0627\u0644\u0637\u0631\u064a\u0642\u0629 \u0644\u0646 \u064a\u062a\u0645 \u0627\u0633\u062a\u0647\u0644\u0627\u0643 \u0623\u064a \u0631\u0635\u064a\u062f \u0625\u0636\u0627\u0641\u064a.",
    "planMode.alert.dismiss": "\u0644\u0627 \u062a\u0638\u0647\u0631 \u0645\u062c\u062f\u062f\u0627\u064b",
    "planMode.alert.ok": "\u0645\u0641\u0647\u0648\u0645!",
    "projectSync.title": "\u0645\u0632\u0627\u0645\u0646\u0629 \u0627\u0644\u0645\u0634\u0631\u0648\u0639",
    "projectSync.projectId": "\u0631\u0642\u0645 \u0627\u0644\u0645\u0634\u0631\u0648\u0639",
    "projectSync.workspace": "\u0645\u0633\u0627\u062d\u0629 \u0627\u0644\u0639\u0645\u0644",
    "projectSync.user": "\u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645",
    "projectSync.account": "\u0627\u0644\u062d\u0633\u0627\u0628:",
    "update.required.title": "\u0645\u0637\u0644\u0648\u0628 \u062a\u062d\u062f\u064a\u062b \u0627\u0644\u0625\u0636\u0627\u0641\u0629",
    "update.required.desc": "\u064a\u0631\u062c\u0649 \u062a\u062d\u062f\u064a\u062b \u0627\u0644\u0625\u0636\u0627\u0641\u0629 \u0625\u0644\u0649 \u0627\u0644\u0625\u0635\u062f\u0627\u0631 v{version} \u0644\u0644\u0627\u0633\u062a\u0645\u0631\u0627\u0631 \u0641\u064a \u0627\u0633\u062a\u062e\u062f\u0627\u0645 LAST ZONE.",
    "update.required.btn": "\u0627\u0644\u062a\u0648\u0627\u0635\u0644 \u0645\u0639 \u0627\u0644\u062f\u0639\u0645",
    "notif.markRead": "\u062a\u062d\u062f\u064a\u062f \u0627\u0644\u0643\u0644 \u0643\u0645\u0642\u0631\u0648\u0621"
  };

  function replaceUiStaticText(value) {
    if (!value || typeof value !== 'string') return value;
    var trimmed = value.trim();
    if (!trimmed) return value;
    var lang = currentLang();
    if (lang === 'ar') {
      if (AR_STATIC_TEXT[trimmed] !== undefined) {
        return value.replace(trimmed, AR_STATIC_TEXT[trimmed]);
      }
      var nextAr = value;
      Object.keys(AR_STATIC_PARTS).sort(function (a, b) { return b.length - a.length; }).forEach(function (phrase) {
        if (phrase.length < 3 || nextAr.indexOf(phrase) === -1) return;
        nextAr = nextAr.split(phrase).join(AR_STATIC_PARTS[phrase]);
      });
      return nextAr;
    }
    if (EN_STATIC_TEXT[trimmed] !== undefined) {
      return value.replace(trimmed, EN_STATIC_TEXT[trimmed]);
    }
    var nextEn = value;
    Object.keys(EN_STATIC_PARTS).sort(function (a, b) { return b.length - a.length; }).forEach(function (phrase) {
      if (phrase.length < 3 || nextEn.indexOf(phrase) === -1) return;
      nextEn = nextEn.split(phrase).join(EN_STATIC_PARTS[phrase]);
    });
    if (nextEn !== value) return nextEn;
    return value;
  }

  function normalizeUiText(value) {
    return replaceUiStaticText(replaceBrandText(value));
  }

  function hasEarlyKnownText(value) {
    return typeof value === 'string' && /(ORNOV|Ornov|Gringow|Lovable Hut BD|Developed\s+by|INFINITY-XXXX-XXXX-XXXX|wa\.me\/8801618125458|Escudo Ativado|Aten(?:ç|\u00e7|Ã§)|Modo Plano|extens(?:ã|\u00e3|Ã£)o|Entendi|N(?:ã|\u00e3|Ã£)o mostrar|novamente|Lovable est(?:á|\u00e1|Ã¡) bloqueado|Digite seu comando|ATALHOS R(?:Á|\u00c1|Ã)PIDOS|Enviar|Remover Marca de|Ativar Escudo|Usar Chat Padr(?:ã|\u00e3|Ã£)o|Baixar C(?:ó|\u00f3|Ã³)digo Fonte)/i.test(value);
  }

  function sanitizeEarlyValue(value) {
    if (!hasEarlyKnownText(value)) return value;
    return normalizeUiText(value);
  }

  function removeUnsupportedLanguageButtons(root) {
    try {
      if (!root || root.nodeType !== 1) return;
      var nodes = [];
      if (root.matches && (root.matches('.ql-lang-btn') || root.hasAttribute('data-lang'))) nodes.push(root);
      if (root.querySelectorAll) {
        var found = root.querySelectorAll('.ql-lang-sw .ql-lang-btn,.ql-lang-sw [data-lang]');
        for (var i = 0; i < found.length && i < 30; i++) nodes.push(found[i]);
      }
      nodes.forEach(function (node) {
        var lang = String(node.getAttribute('data-lang') || '').toLowerCase();
        var label = String(node.textContent || '').trim().toUpperCase();
        if (lang === 'pt' || lang === 'es' || lang === 'he' || label === 'PT' || label === 'ES' || label === 'HE') {
          if (node.parentNode) node.parentNode.removeChild(node);
        }
      });
    } catch (err) {}
  }

  function sanitizeEarlyNode(node) {
    if (!node) return node;
    try {
      if (node.nodeType === 3) {
        var text = sanitizeEarlyValue(node.nodeValue);
        if (text !== node.nodeValue) node.nodeValue = text;
        return node;
      }
      if (node.nodeType !== 1) return node;
      removeUnsupportedLanguageButtons(node);
      var scanned = 0;
      var walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT);
      var textNode;
      while ((textNode = walker.nextNode()) && scanned < 600) {
        scanned++;
        var nextText = sanitizeEarlyValue(textNode.nodeValue);
        if (nextText !== textNode.nodeValue) textNode.nodeValue = nextText;
      }
      ['title', 'alt', 'aria-label', 'placeholder', 'value'].forEach(function (attr) {
        if (!node.hasAttribute || !node.hasAttribute(attr)) return;
        var oldValue = node.getAttribute(attr);
        var nextValue = sanitizeEarlyValue(oldValue);
        if (nextValue !== oldValue) node.setAttribute(attr, nextValue);
      });
      if (node.querySelectorAll) {
        var attrs = node.querySelectorAll('[title],[alt],[aria-label],[placeholder],[value]');
        for (var i = 0; i < attrs.length && i < 600; i++) {
          ['title', 'alt', 'aria-label', 'placeholder', 'value'].forEach(function (attr) {
            if (!attrs[i].hasAttribute(attr)) return;
            var oldValue = attrs[i].getAttribute(attr);
            var nextValue = sanitizeEarlyValue(oldValue);
            if (nextValue !== oldValue) attrs[i].setAttribute(attr, nextValue);
          });
        }
      }
    } catch (err) {}
    return node;
  }

  function installEarlyTextSanitizer() {
    try {
      if (window.__lastZoneEarlyTextSanitizer) return;
      window.__lastZoneEarlyTextSanitizer = true;
      var htmlDesc = Object.getOwnPropertyDescriptor(Element.prototype, 'innerHTML');
      if (htmlDesc && htmlDesc.set && !htmlDesc.set.__lastZoneSanitized) {
        var htmlSet = htmlDesc.set;
        var htmlGet = htmlDesc.get;
        Object.defineProperty(Element.prototype, 'innerHTML', {
          configurable: htmlDesc.configurable !== false,
          enumerable: !!htmlDesc.enumerable,
          get: htmlGet,
          set: function (value) {
            return htmlSet.call(this, sanitizeEarlyValue(value));
          }
        });
      }
      var textDesc = Object.getOwnPropertyDescriptor(Node.prototype, 'textContent');
      if (textDesc && textDesc.set && !textDesc.set.__lastZoneSanitized) {
        var textSet = textDesc.set;
        var textGet = textDesc.get;
        Object.defineProperty(Node.prototype, 'textContent', {
          configurable: textDesc.configurable !== false,
          enumerable: !!textDesc.enumerable,
          get: textGet,
          set: function (value) {
            return textSet.call(this, sanitizeEarlyValue(value));
          }
        });
      }
      var appendChild = Node.prototype.appendChild;
      if (appendChild && !appendChild.__lastZoneSanitized) {
        Node.prototype.appendChild = function (node) {
          return appendChild.call(this, sanitizeEarlyNode(node));
        };
        Node.prototype.appendChild.__lastZoneSanitized = true;
      }
      var insertBefore = Node.prototype.insertBefore;
      if (insertBefore && !insertBefore.__lastZoneSanitized) {
        Node.prototype.insertBefore = function (node, ref) {
          return insertBefore.call(this, sanitizeEarlyNode(node), ref);
        };
        Node.prototype.insertBefore.__lastZoneSanitized = true;
      }
      var setAttribute = Element.prototype.setAttribute;
      if (setAttribute && !setAttribute.__lastZoneSanitized) {
        Element.prototype.setAttribute = function (name, value) {
          var attr = String(name || '').toLowerCase();
          if (/^(title|alt|aria-label|placeholder|value)$/.test(attr)) value = sanitizeEarlyValue(value);
          return setAttribute.call(this, name, value);
        };
        Element.prototype.setAttribute.__lastZoneSanitized = true;
      }
    } catch (err) {}
  }

  installEarlyTextSanitizer();
  /* /LAST_ZONE_STATIC_AR_MAP */

  function replaceBrandText(value) {
    if (!value || typeof value !== 'string') return value;
    var next = value;
    for (var i = 0; i < REPLACEMENTS.length; i++) {
      next = next.replace(REPLACEMENTS[i][0], REPLACEMENTS[i][1]);
    }
    next = next.replace(/(?:Developed\s+by\s*){2,}(?:Lovable\s+Hut\s+BD|LAST\s+ZONE)?/gi, FOOTER_TEXT);
    next = next.replace(/^(?:\s*Developed\s+by\s*){2,}$/gi, FOOTER_TEXT);
    next = next.replace(/Developed\s+by\s+LAST\s+ZONE/gi, FOOTER_TEXT);
    if (/Developed\s+by/i.test(next)) next = FOOTER_TEXT;
    if (/Developed\s+by/i.test(next)) next = FOOTER_TEXT;
    if (/Developed\s+by/i.test(next)) next = FOOTER_TEXT;
    if (/Developed\s+by/i.test(next)) next = FOOTER_TEXT;
    if (/Developed\s+by/i.test(next)) next = FOOTER_TEXT;
    if (/Developed\s+by/i.test(next)) next = FOOTER_TEXT;
    if (/Developed\s+by/i.test(next)) next = FOOTER_TEXT;
    if (/Developed\s+by/i.test(next)) next = FOOTER_TEXT;
    if (/Developed\s+by/i.test(next)) next = FOOTER_TEXT;
    if (/Developed\s+by/i.test(next)) next = FOOTER_TEXT;
    if (/Developed\s+by/i.test(next)) next = FOOTER_TEXT;
    if (/Developed\s+by/i.test(next)) next = FOOTER_TEXT;
    if (/Developed\s+by/i.test(next)) next = FOOTER_TEXT;
    if (/Developed\s+by/i.test(next)) next = FOOTER_TEXT;
    if (/Developed\s+by/i.test(next)) next = FOOTER_TEXT;
    if (/Developed\s+by/i.test(next)) next = FOOTER_TEXT;
    if (/Developed\s+by/i.test(next)) next = FOOTER_TEXT;
    if (/Developed\s+by/i.test(next)) next = FOOTER_TEXT;
    if (/Developed\s+by/i.test(next)) next = FOOTER_TEXT;
    if (/Developed\s+by/i.test(next)) next = FOOTER_TEXT;
    if (/Developed\s+by/i.test(next)) next = FOOTER_TEXT;
    if (/Developed\s+by/i.test(next)) next = FOOTER_TEXT;
    if (/Developed\s+by/i.test(next)) next = FOOTER_TEXT;
    if (/Developed\s+by/i.test(next)) next = FOOTER_TEXT;
    if (/Developed\s+by/i.test(next)) next = FOOTER_TEXT;
    next = next.replace(/Desenvolvido\s+por\s+LAST\s+ZONE/gi, FOOTER_TEXT);
    next = next.replace(/Desarrollado\s+por\s+LAST\s+ZONE/gi, FOOTER_TEXT);
    return next;
  }

  function isExtensionDocument() {
    return location.protocol === 'chrome-extension:';
  }

  function getSavedLang() {
    try {
      return localStorage.getItem('last_zone_lang') || localStorage.getItem('ql_lang') || '';
    } catch (err) {
      return '';
    }
  }

  function currentLang() {
    var docLang = isExtensionDocument() && document.documentElement ? document.documentElement.lang : '';
    var lang = (window._ql_lang || getSavedLang() || docLang || 'en').toLowerCase();
    return ALLOWED_LANGS.indexOf(lang) === -1 ? 'en' : lang;
  }

  function extensionScopes(seed) {
    var scopes = [];
    var selector = '#ql-panel,#ql-root,#ql-header,#ql-body,#ql-license-gate,.ql-license-gate,.ql-container,.ql-footer,.ql-modal,.ql-toast,.ql-alert,.ql-pay-modal,.ql-expired-modal,.ql-plan-mode-modal,.ql-notif-panel,.ql-notification-panel,.ql-shortcuts,.ql-history,.ql-login,.ql-popup,.sp-shell,.sp-root,.sp-panel,.sp-license-gate,#sp-body,.sp-header,.sp-footer,.sp-notif-panel';

    function add(node) {
      if (!node || node.nodeType !== 1 || scopes.indexOf(node) !== -1) return;
      scopes.push(node);
    }

    function collect(node) {
      if (!node || node.nodeType !== 1) return;
      try {
        if (node.matches && node.matches(selector)) add(node);
      } catch (err) {}
      try {
        var closest = node.closest && node.closest(selector);
        if (closest) add(closest);
      } catch (err) {}
      try {
        node.querySelectorAll && node.querySelectorAll(selector).forEach(add);
      } catch (err) {}
    }

    collect(seed || document.body || document.documentElement);
    if (!seed) {
      collect(document.documentElement);
      collect(document.body);
    }
    if (isExtensionDocument()) {
      add(document.documentElement);
      if (document.body) add(document.body);
    }
    return scopes;
  }

  function queryScoped(seed, selector, callback) {
    extensionScopes(seed).forEach(function (scope) {
      try {
        if (scope.matches && scope.matches(selector)) callback(scope);
      } catch (err) {}
      try {
        scope.querySelectorAll && scope.querySelectorAll(selector).forEach(callback);
      } catch (err) {}
    });
  }

  function mergeTranslations() {
    var table = null;
    try {
      table = typeof _I18N !== 'undefined' ? _I18N : window._I18N;
    } catch (err) {
      table = window._I18N;
    }
    if (!table || typeof table !== 'object') return;

    table.en = Object.assign({}, table.en || {}, OLD_I18N.en || {}, {
      'footer.brand': FOOTER_TEXT,
      'shield.overlay.text': CLEAN_AR_I18N['shield.overlay.text']
    });
    table.ar = Object.assign({}, table.ar || {}, OLD_I18N.ar || {}, CLEAN_AR_I18N || {}, {
      'footer.brand': FOOTER_TEXT,
      'shield.overlay.text': CLEAN_AR_I18N['shield.overlay.text']
    });
    window._I18N = table;
  }

  function syncLangMeta(lang) {
    lang = ALLOWED_LANGS.indexOf(lang) === -1 ? 'en' : lang;
    window._ql_lang = lang;
    var dir = 'ltr';
    try {
      localStorage.setItem('last_zone_lang', lang);
    } catch (err) {}

    extensionScopes().forEach(function (scope) {
      scope.setAttribute('lang', lang);
      scope.setAttribute('dir', dir);
      scope.classList.remove('lz-rtl');
      scope.classList.add('lz-ltr');
    });

    if (isExtensionDocument()) {
      document.documentElement.lang = lang;
      document.documentElement.dir = dir;
      if (document.body) document.body.dir = dir;
    }
  }

  function translateAgain() {
    try {
      if (typeof window._applyTranslations === 'function') window._applyTranslations();
    } catch (err) {}
  }

  function setLastZoneLang(lang) {
    if (ALLOWED_LANGS.indexOf(lang) === -1) lang = 'en';
    mergeTranslations();
    syncLangMeta(lang);
    try {
      if (isExtensionDocument() && typeof window.setLang === 'function') {
        window.setLang(lang);
      } else {
        applyScopedTranslations();
      }
    } catch (err) {
      applyScopedTranslations();
    }
    setTimeout(applyBranding, 0);
    setTimeout(applyBranding, 80);
  }

  function languageButton(lang, active) {
    var label = lang === 'ar' ? 'AR' : 'EN';
    return '<button class="ql-lang-btn' + (active ? ' ql-lang-active' : '') + '" data-lang="' + lang + '">' + label + '</button>';
  }

  function rebuildLanguageSwitchers() {
    var lang = currentLang();
    document.querySelectorAll('.ql-lang-sw').forEach(function (switcher) {
      var expected = languageButton('en', lang === 'en') + languageButton('ar', lang === 'ar');
      if (switcher.innerHTML !== expected) switcher.innerHTML = expected;
    });
    document.querySelectorAll('.ql-lang-btn').forEach(function (button) {
      button.classList.toggle('ql-lang-active', button.getAttribute('data-lang') === lang);
    });
  }

  function applyScopedTranslations(root) {
    var table = null;
    try {
      table = typeof _I18N !== 'undefined' ? _I18N : window._I18N;
    } catch (err) {
      table = window._I18N;
    }
    table = table && table[currentLang()];
    if (!table) return;

    queryScoped(root, '[data-i18n]', function (el) {
      var key = el.getAttribute('data-i18n');
      if (key && table[key] !== undefined) el.textContent = normalizeUiText(String(table[key]));
    });
    queryScoped(root, '[data-i18n-title]', function (el) {
      var key = el.getAttribute('data-i18n-title');
      if (key && table[key] !== undefined) el.setAttribute('title', normalizeUiText(String(table[key])));
    });
    queryScoped(root, '[data-i18n-placeholder]', function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (key && table[key] !== undefined) el.setAttribute('placeholder', normalizeUiText(String(table[key])));
    });
  }

  function isSupportLink(link) {
    if (!link) return false;
    var href = String(link.getAttribute('href') || link.href || '').toLowerCase();
    var text = String(link.textContent || link.getAttribute('title') || link.getAttribute('aria-label') || '').trim().toLowerCase();
    return href.indexOf('wa.me') !== -1 || href.indexOf('whatsapp') !== -1 || href.indexOf('8801618125458') !== -1 || href.indexOf('t.me/monir_i0_0i') !== -1 || href.indexOf('t.me/+Dm8IppPh39s4YWIx'.toLowerCase()) !== -1 || link.classList.contains('ql-support-link') || link.getAttribute('data-i18n') === 'footer.support' || text === 'support' || text === CLEAN_AR_I18N['footer.support'].toLowerCase() || text.indexOf('contact support') !== -1 || text.indexOf(CLEAN_AR_I18N['update.required.btn'].toLowerCase()) !== -1;
  }

  function setSupportLink(link) {
    link.setAttribute('href', SUPPORT_URL);
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
  }

  function applySupportLinks(root) {
    queryScoped(root, 'a', function (link) {
      if (isSupportLink(link)) setSupportLink(link);
    });
  }

  function applyLicensePlaceholders(root) {
    queryScoped(root, '#ql-license-input,#sp-license-input,input[name="license"],input[name="license_key"],input[data-license-input],.ql-license-gate input,.sp-license-gate input', function (input) {
      if (!input || input.type === 'hidden') return;
      input.setAttribute('placeholder', LICENSE_PLACEHOLDER);
    });
  }

  function applyStaticBranding(root) {
    if (isExtensionDocument() && document.title) document.title = replaceBrandText(document.title).replace(/.+ - Side Panel/, BRAND_NAME + ' - Side Panel');

    queryScoped(root, '.sp-brand-text, .ql-brand, #ql-header .ql-title > span:not(.ql-dot), #ql-header .ql-title-text, #ql-header .ql-brand-title', function (el) {
      el.textContent = BRAND_NAME;
    });

    queryScoped(root, '.sp-footer-badge', function (el) {
      var version = '3.8.2';
      try { version = chrome.runtime.getManifest().version || version; } catch (err) {}
      el.textContent = BRAND_NAME + ' ? v' + version;
    });

    queryScoped(root, '[data-i18n="footer.brand"], .ql-badge-mz, .ql-footer .ql-badge-mz', function (el) {
      el.textContent = FOOTER_TEXT;
    });

    queryScoped(root, 'img', function (img) {
      var alt = img.getAttribute('alt') || '';
      var src = img.getAttribute('src') || '';
      if (img.classList.contains('sp-brand-logo') || img.classList.contains('ql-brand-logo') || /postimg|logo-master-lovable|Lovable\s+Hut/i.test(src + ' ' + alt)) {
        img.setAttribute('src', LOGO_URL);
        img.setAttribute('alt', BRAND_NAME);
      }
    });

    applySupportLinks(root);
    applyLicensePlaceholders(root);
  }

  function replaceTextNodes(root) {
    root = root || document.body;
    if (!root || !document.createTreeWalker) return;
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    var node;
    while ((node = walker.nextNode())) {
      var next = normalizeUiText(node.nodeValue);
      if (next !== node.nodeValue) node.nodeValue = next;
    }
  }

  function replaceAttributes(root) {
    root = root || document;
    var attrs = ['title', 'alt', 'aria-label', 'placeholder'];
    root.querySelectorAll && root.querySelectorAll('*').forEach(function (el) {
      attrs.forEach(function (attr) {
        if (el.hasAttribute && el.hasAttribute(attr)) {
          var value = el.getAttribute(attr);
          var next = normalizeUiText(value);
          if (next !== value) el.setAttribute(attr, next);
        }
      });
    });
  }

  function injectStyle() {
    if (document.getElementById('last-zone-branding-style')) return;
    var style = document.createElement('style');
    style.id = 'last-zone-branding-style';
    style.textContent = ':root{--ql-bg:#09090b!important;--ql-bg-elevated:#110e1a!important;--ql-bg-surface:#161320!important;--ql-bg-hover:#211c30!important;--ql-border:rgba(139,92,246,.25)!important;--ql-border-hover:rgba(236,72,153,.45)!important;--ql-text-primary:#f4f4f5!important;--ql-text-secondary:#c084fc!important;--ql-text-muted:#8b8a9e!important;--ql-accent:#a855f7!important;--ql-accent-hover:#d946ef!important;--ql-accent-glow:rgba(168,85,247,.35)!important;--ql-accent-subtle:rgba(168,85,247,.15)!important;--ql-success:#10b981!important;--ql-success-bg:rgba(16,185,129,.1)!important;--ql-warning:#f59e0b!important;--ql-warning-bg:rgba(245,158,11,.1)!important;--ql-danger:#f43f5e!important;--ql-danger-bg:rgba(244,63,94,.1)!important;--ql-radius:16px!important;--ql-radius-sm:10px!important;--ql-radius-xs:8px!important;--ql-shadow:0 24px 80px -12px rgba(0,0,0,.7),0 0 0 1px var(--ql-border)!important;--ql-shadow-hover:0 32px 100px -12px rgba(0,0,0,.8),0 0 0 1px var(--ql-border-hover)!important;--ql-glass:rgba(9,9,11,.85)!important}.ql-badge-pro-header,.sp-badge,.sp-btn-primary,.sp-send-btn,.ql-confirm-pay-btn{background:linear-gradient(135deg,var(--ql-accent),var(--ql-accent-hover))!important}.sp-brand-logo,.ql-brand-logo{box-shadow:0 0 10px var(--ql-accent-glow)!important}.ql-lang-btn.ql-lang-active{background:linear-gradient(135deg,var(--ql-accent),var(--ql-accent-hover))!important;color:#fff!important}#ql-panel,.ql-license-gate,.ql-container,.sp-shell,.sp-panel{direction:ltr!important;text-align:left!important}[dir="ltr"]#ql-panel,[dir="ltr"].ql-license-gate,[dir="ltr"].ql-container,[dir="ltr"].sp-shell,[dir="ltr"].sp-panel{direction:ltr!important;text-align:left!important}';
    (document.head || document.documentElement).appendChild(style);
  }

  function applyBranding(root) {
    mergeTranslations();
    syncLangMeta(currentLang());
    injectStyle();
    rebuildLanguageSwitchers();
    applyScopedTranslations(root);
    applyStaticBranding(root);
    extensionScopes(root).forEach(function (scope) {
      replaceTextNodes(scope);
      replaceAttributes(scope);
    });
  }

  document.addEventListener('click', function (event) {
    var button = event.target && event.target.closest ? event.target.closest('.ql-lang-btn') : null;
    if (!button) return;
    var lang = button.getAttribute('data-lang');
    if (ALLOWED_LANGS.indexOf(lang) === -1) return;
    event.preventDefault();
    event.stopPropagation();
    setLastZoneLang(lang);
  }, true);

  function boot() {
    mergeTranslations();
    syncLangMeta(currentLang());
    applyBranding();
    setTimeout(applyBranding, 80);
    setTimeout(applyBranding, 400);
    setTimeout(applyBranding, 1200);
    try {
      new MutationObserver(function (mutations) {
        clearTimeout(window.__lastZoneBrandingTimer);
        window.__lastZoneBrandingTimer = setTimeout(function () {
          applyBranding();
          mutations.forEach(function (mutation) {
            mutation.addedNodes && mutation.addedNodes.forEach(function (node) {
              if (node.nodeType === 1) applyBranding(node);
            });
          });
        }, 40);
      }).observe(document.documentElement, { childList: true, subtree: true });
    } catch (err) {}
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot, { once: true });
  } else {
    boot();
  }
})();
