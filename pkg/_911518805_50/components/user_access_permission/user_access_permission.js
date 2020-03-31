var app = getApp(), util = require("../../utils/util"), mixinCss = require("../../utils/mixinCss");

Component({
    data: {
        isIpx: util.isIpx(),
        ipxFtPadding: mixinCss.ipxFtPadding,
        showNotAllowedRegionTip: !1,
        showFirstLaunchTip: !1,
        showContent: !1,
        showError: !1,
        userState: app.enumUserStateError.unknown,
        tip: "本功能目前仅对广州地区部分用户开放体验",
        buttonType: 0
    },
    ready: function ready(e) {
        console.log("user_access_permission, ready!");
        var t = this;
        app.addUserStateChangeListener(function() {
            console.log("user_access_permission, UserStateChangeListener callback"), t.checkUserState();
        });
    },
    methods: {
        checkUserState: function checkUserState() {
            var e = app.getUserState();
            if (console.log("user_access_permission, checkUserState, userState is: " + e), this.data.userState != e) {
                if (e != app.enumUserStateError.unknown) {
                    var t = "本功能目前仅对广州地区部分用户开放体验";
                    e == app.enumUserStateError.isPad ? t = "请在手机上查看" : e == app.enumUserStateError.shouldUpdateWeChat && (t = "请先将微信更新到最新版");
                    var r = e != app.enumUserStateError.ok && e != app.enumUserStateError.notExpUser && e != app.enumUserStateError.labItemClosed, s = e == app.enumUserStateError.regionNotAllowed || e == app.enumUserStateError.regionNotAllowedAndFirstLaunch, n = e == app.enumUserStateError.firstLaunch || e == app.enumUserStateError.regionNotAllowedAndFirstLaunch, a = e == app.enumUserStateError.error;
                    this.setData({
                        showNotAllowedRegionTip: s,
                        showFirstLaunchTip: n,
                        showContent: r,
                        showError: a,
                        userState: e,
                        tip: t,
                        buttonType: 0
                    });
                } else this.setData({
                    showNotAllowedRegionTip: !1,
                    showFirstLaunchTip: !1,
                    showContent: !1,
                    showError: !1,
                    userState: app.enumUserStateError.unknown,
                    tip: "本功能目前仅对广州地区部分用户开放体验",
                    buttonType: 0
                });
            } else console.log("user_access_permission, checkUserState, userState not change, return!");
        },
        onTapOpen: function onTapOpen() {
            util.canUseGetAndSetLabInfoAPI() && (util.showLoading(), wx.setLabInfo({
                labId: "labs_nearbylife",
                enabled: !0,
                success: function success(e) {
                    console.log("setLabInfo, success: " + JSON.stringify(e)), util.hideLoading(), app.setUserLabStateOpen(), 
                    app.checkUserStateAndStartMainProcess();
                },
                fail: function fail(e) {
                    console.error("setLabInfo, failed: " + JSON.stringify(e)), util.hideLoading(), util.hint("开启失败");
                }
            }));
        },
        onTapConfirmTipButton: function onTapConfirmTipButton() {
            this.data.showFirstLaunchTip && app.setHasShownUserFirstLaunchTipValue(), this.data.showNotAllowedRegionTip, 
            app.startMainProcess();
        },
        onTapRetryStartButton: function onTapRetryStartButton() {
            console.log("onTapRetryStartButton"), app.retryStartApp();
        },
        onTapRulesDetail: function onTapRulesDetail() {
            wx.navigateTo({
                url: "/pages/article_webview/article_webview?url=" + encodeURIComponent("https://support.weixin.qq.com/cgi-bin/mmsupport-bin/newreadtemplate?t=page/nearby/policy-nearby-dinning")
            });
        }
    }
});