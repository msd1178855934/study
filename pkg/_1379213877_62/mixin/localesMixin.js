module.exports = {
    data: {
        language: "",
        commonLocales: require("../utils/commonLocales")
    },
    onLoad: function(a) {
        this.setLanguage();
    },
    setLanguage: function() {
        var a = wx.T.getLanguage().languageClass, e = this.data, t = e.commonLocales, s = e.locales, g = Object.keys(s[a]).length ? s[a] : s["zh-CN"], n = Object.keys(s[a]).length ? t[a] : t["zh-CN"];
        this.setData({
            language: Object.assign({}, n, g)
        }), console.log("language", this.data.language);
    }
};