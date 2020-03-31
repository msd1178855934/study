var e = {
    locale: null,
    locales: {},
    langCode: [ "zh-CN", "en", "ja", "kr" ]
};

e.registerLocale = function(l) {
    e.locales = l;
}, e.setLocale = function(l) {
    e.locale = l;
}, e.setLocaleByIndex = function(l) {
    e.setLocale(e.langCode[l]);
}, e.getLanguage = function() {
    return e.locales[e.locale];
}, module.exports = e;