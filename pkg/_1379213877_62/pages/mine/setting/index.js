function a(a, e, n) {
    return e in a ? Object.defineProperty(a, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : a[e] = n, a;
}

var e, n = getApp().Event;

Page({
    data: (e = {
        title: "语言设置",
        loading: !1,
        color: "#000",
        background: "#f8f8f8",
        show: !0,
        animated: !1,
        language: "",
        visible: !0
    }, a(e, "language", ""), a(e, "langIndex", 0), a(e, "languagesText", {
        0: "简体中文（中文）",
        1: "English（英语）",
        2: "日本語（日语）",
        3: "한국어（韩语）"
    }), a(e, "isShow", [ !1, !1, !1, !1 ]), e),
    onLoad: function(a) {
        this.setData({
            langIndex: wx.getStorageSync("langIndex") || ("ko" == wx.getSystemInfoSync().language ? 3 : 0)
        }), 0 !== this.data.langIndex ? wx.setNavigationBarTitle({
            title: "请选择语言"
        }) : wx.setNavigationBarTitle({
            title: "language"
        });
    },
    onShareAppMessage: function() {},
    setLanguageTab: function(a) {
        var e = a.currentTarget.dataset.index;
        this.setData({
            langIndex: e
        }), wx.setStorageSync("langIndex", e), wx.setStorageSync("languageChange", !0);
        wx.T.setLocaleByIndex(e), n.dispatch("languageChanged", "languageChanged监听成功"), 
        wx.navigateBack({
            delta: 2
        });
    }
});