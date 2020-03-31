var e = getApp(), t = e.Anim, n = e.userStore, s = e.request, o = e.config, a = e.wxp, i = require("../../../utils/session").fetchSessionId, c = require("./locales");

t.Page({
    store: function(e) {
        return {
            isAuth: e.user.userInfo.isAuth,
            userInfo: e.user.userInfo
        };
    },
    data: {
        needCheckSession: !0,
        cityName: o.cityName,
        authTitle: "请先登录账号",
        authDesc: "",
        authBtnText: "登录"
    },
    onLoad: function(e) {
        this.setLanguage(), this.checkWxSession();
    },
    setLanguage: function() {
        var e = wx.T.getLanguage().languageClass;
        this.setData({
            language: "{}" == JSON.stringify(c[e]) ? c["zh-CN"] : c[e]
        }), wx.setNavigationBarTitle({
            title: this.data.language.barTitle
        });
    },
    checkWxSession: function() {
        var e = this;
        a.checkSession().then(function() {
            console.log("当前的 sessionKey 未过期"), e.setData({
                needCheckSession: !1
            });
        }).catch(function(t) {
            console.log("当前的 sessionKey 已过期"), e.setData({
                needCheckSession: !1
            }), e.onTapLogout(), i();
        });
    },
    onTapLogin: function(e) {
        var t = e.detail, o = t.iv, a = t.encryptedData;
        {
            if (o && a) return wx.showLoading({
                title: "努力加载中..."
            }), s({
                url: "/wll/account/getphone",
                method: "POST",
                data: {
                    encryptedData: a,
                    iv: o
                }
            }).then(function(e) {
                wx.hideLoading(), console.log("res", e), e && e.phone && n.fetchUserInfo().then(function() {
                    wx.navigateBack();
                });
            }).catch(function(e) {
                wx.hideLoading(), console.error(e);
            });
            console.error("用户拒绝授权登录");
        }
    }
});