var e = getApp(), s = e.Anim, a = e.userStore, t = (e.Event, require("../../../services/report")), n = require("./locales");

s.Page({
    store: function(e) {
        return {
            userInfo: e.user.userInfo
        };
    },
    data: {
        loading: !1,
        color: "#000",
        background: "#f8f8f8",
        show: !0,
        animated: !1,
        language: "",
        visible: !0,
        toUrl: "",
        isReported: wx.getStorageSync("selfForm__submit"),
        imgUrls: [ "https://imgcache.gzonline.gov.cn/cos/shangbao_dbc3d59b.png" ]
    },
    watch: {},
    onLoad: function(e) {
        this.setLanguage();
    },
    checkSelfReport: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", s = this;
        e.indexOf("type=1") > -1 ? wx.navigateTo({
            url: e
        }) : t.hasReported().then(function(a) {
            a ? wx.navigateTo({
                url: e
            }) : wx.showModal({
                title: s.data.language.reminder,
                content: s.data.language.isMyHealth,
                confirmText: s.data.language.language,
                showCancel: !1
            });
        }).catch(function() {
            wx.hideLoading(), wx.showToast({
                title: s.data.language.serverCrowded,
                icon: "none"
            });
        });
    },
    onTapAccess: function(e) {
        a.checkAuth() && this.checkSelfReport(e.currentTarget.dataset.url);
    },
    setLanguage: function() {
        var e = wx.T.getLanguage().languageClass;
        this.setData({
            language: "{}" == JSON.stringify(n[e]) ? n["zh-CN"] : n[e]
        }), console.log("sssssssssssssssssssssssssssss", this.data.language);
    }
});