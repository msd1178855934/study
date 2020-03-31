var e = getApp(), t = e.Anim, a = e.userStore, n = e.request, o = e.config, i = e.configStore, s = e.wxp, l = e.Event, r = require("../../../services/health-code.js"), u = require("../../../utils/session"), c = require("../../../services/feedback"), g = require("./locales");

t.Page({
    store: function(e) {
        return {
            isAuth: e.user.userInfo.isAuth,
            userInfo: e.user.userInfo,
            wllConfig: e.config.wllConfig
        };
    },
    computed: {
        role: function() {
            return (this.data.userInfo.role || []).some(function(e) {
                return "GRID_MANAGER" == e || "GRID_USER" == e || "RESUMPTION_CHECKER" == e;
            });
        }
    },
    data: {
        language: "",
        needCheckSession: !1,
        cityName: o.cityName,
        authTitle: "请先登录账号",
        authDesc: "",
        authBtnText: "登录",
        isRealName: !1,
        refreshtimestamp: 0
    },
    onLoad: function(e) {
        var t = this;
        this.checkWxSession(), this.setLanguage(), l.addEventListener("languageChanged", function(e) {
            console.log(e.target), t.setLanguage();
        }, this), this.setData({
            authTitle: this.data.language.logInFirst,
            authBtnText: this.data.language.logIn
        });
    },
    checkWxSession: function() {
        var e = this;
        this.setData({
            needCheckSession: !0
        }), s.checkSession().then(function() {
            console.log("当前的 sessionKey 未过期"), e.setData({
                needCheckSession: !1
            });
        }).catch(function(t) {
            console.log("当前的 sessionKey 已过期"), e.setData({
                needCheckSession: !1
            }), e.onTapLogout();
        });
    },
    onTapNavigateTo: function(e) {
        e.currentTarget.dataset.path && wx.navigateTo({
            url: e.currentTarget.dataset.path
        });
    },
    onTabItemTap: function(e) {
        console.log(e.index), console.log(e.pagePath), console.log(e.text), this.setLanguage(), 
        this.setData({
            authTitle: this.data.language.logInFirst,
            authBtnText: this.data.language.logIn
        });
    },
    onShow: function() {
        i.fetchWllConfig(), this.realnameUser();
    },
    onJump: function(e) {
        wx.navigateTo({
            url: "/packages/health-code/pages/new-workbench/new-workbench"
        });
    },
    onTapBook: function() {
        var e = this.data.wllConfig.personal_center_info || {};
        e && 1 === e.is_open ? wx.navigateTo({
            url: "/packages/buy/pages/reservation-list/index"
        }) : wx.showModal({
            title: "温馨提示",
            content: e.tips || this.data.language.tryagain,
            showCancel: !1
        });
    },
    onTapCompany: function() {
        wx.navigateTo({
            url: "pages/mine/company/list/index"
        });
    },
    onTapEnterprise: function() {
        wx.navigateTo({
            url: "/pages/mine/company/list/index",
            fail: function(e) {
                console.log(e);
            }
        });
    },
    onTapFeedback: function() {
        c.goFeedback(0, this.data.userInfo.uid);
    },
    onTapLogin: function(e) {
        var t = this;
        this.data.isRealName = !1;
        var o = e.detail, i = o.iv, s = o.encryptedData;
        return i && s ? (wx.showLoading({
            title: this.data.language.loading
        }), n({
            url: "/wll/account/getphone",
            method: "POST",
            data: {
                encryptedData: s,
                iv: i
            }
        }).then(function(e) {
            wx.hideLoading(), console.log("res", e), e && e.phone && a.fetchUserInfo(), setTimeout(function() {
                t.realnameUser();
            }, 300);
        }).catch(function(e) {
            wx.hideLoading(), console.error(e);
        })) : (console.error("用户拒绝授权登录"), void wx.showToast({
            title: this.data.language.cancelAuthorization,
            icon: "none"
        }));
    },
    onTapLogout: function() {
        return this.data.isRealName = !1, wx.showLoading({
            title: this.data.language.loading,
            mask: !0
        }), n({
            url: "/wll/account/logout",
            method: "POST"
        }).then(function() {
            wx.hideLoading(), wx.removeStorageSync("wx-sessionid"), a.initUserInfo(), console.log("我的退出成功了"), 
            u.fetchSessionId();
        }).catch(function() {
            wx.hideLoading(), wx.removeStorageSync("wx-sessionid"), a.initUserInfo(), console.log("我的退出成功了"), 
            u.fetchSessionId();
        });
    },
    lifeCycleMethod: function() {},
    realnameUser: function() {
        var e = this;
        if (!this.data.isRealName) {
            var t = this.data.userInfo.uid;
            console.log("realnameUser", t), t && r.realnameUser(t).then(function(t) {
                e.data.isRealName = 1 == t.isAut || 2 == t.isAut, t.isAut, console.log("isRealName", t.isAut), 
                e.setData({
                    isRealName: e.data.isRealName
                });
            }, function(e) {});
        }
    },
    onPullDownRefresh: function() {
        var e = this;
        return console.log("isAuth", this.data.isAuth), this.data.isAuth ? (console.log("下拉刷新"), 
        new Date().getTime() - this.data.refreshtimestamp < 2e4 ? (wx.stopPullDownRefresh(), 
        void wx.showToast({
            title: this.data.language.tryagain2,
            icon: "none"
        })) : (this.data.refreshtimestamp = new Date().getTime(), void r.refreshloginuserinfo().then(function(t) {
            wx.stopPullDownRefresh(), t && t.phone && (a.fetchUserInfo(), e.data.isRealName = !1, 
            e.realnameUser()), wx.hideLoading(), setTimeout(function() {
                wx.showToast({
                    title: thia.data.language.refreshsuccess,
                    icon: "none"
                });
            }, 800);
        }, function(t) {
            wx.stopPullDownRefresh(), wx.showToast({
                title: e.data.language.refreshfailure + t.errmsg,
                icon: "none"
            });
        }))) : (console.log("下拉刷新，未登录"), void wx.stopPullDownRefresh());
    },
    setLanguage: function() {
        var e = wx.T.getLanguage().languageClass;
        this.setData({
            language: "{}" == JSON.stringify(g[e]) ? g["zh-CN"] : g[e]
        }), wx.setNavigationBarTitle({
            title: this.data.language.barTitle
        });
    }
});