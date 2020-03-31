var e = require("./store/user"), n = require("./store/mine"), t = require("./store/config"), o = require("./components/gsd-lib/anim/anim.min"), s = require("./components/gsd-lib/event/index"), i = require("./config/index"), r = require("./utils/wx-promise"), a = require("./components/gsd-lib/map/index"), c = require("./components/gsd-lib/dayjs/index"), l = require("./components/gsd-lib/utils/index"), g = require("./components/gsd-lib/storage/index"), u = require("./utils/request").request, d = require("./utils/locales"), h = require("./utils/i18n");

h.registerLocale(d);

var p = wx.getSystemInfoSync().language;

console.log("系统语言：", p);

var x = {
    zh: 0,
    en: 1,
    ja: 2,
    ko: 3
}, m = void 0;

m = "zh" === p.substring(0, 2) ? 0 : x[p] || 1, console.log("sub之后的languageSys:", p.substring(0, 2)), 
h.setLocaleByIndex(wx.getStorageSync("langIndex") || m), wx.getStorageSync("langIndex") || wx.setStorageSync("langIndex", m), 
wx.getSystemInfo({
    success: function(e) {
        console.log("------"), console.log(e.model), console.log(e.pixelRatio), console.log(e.windowWidth), 
        console.log(e.windowHeight), console.log(e.language), console.log(e.version), console.log(e.platform);
    }
}), wx.T = h, App({
    onLaunch: function() {
        var d = this;
        this.systemInfo = wx.getSystemInfoSync(), this.utils = l, this.request = u, this.config = i, 
        this.dayjs = c, this.storage = g, this.wxp = r, this.Anim = o, this.Event = s, this.Map = a, 
        this.resetTab = function() {
            return s.dispatch("g-tabs__resetStyle");
        }, this.userStore = e(this), this.configStore = t(this), this.configStore.fetchWllConfig();
        var h = wx.getLaunchOptionsSync();
        [ "packages/buy/pages/reservation-list/index", "packages/health-code/pages/mutual-sweep/index" ].includes(h.path) || this.userStore.fetchUserInfo().then(function() {
            [ "pages/stat/index", "pages/buy/notice/index", "pages/mine/index/index", "packages/health-code/pages/report-health/index" ].includes(h.path) || d.userStore.checkAuth();
        }), this.mineStore = n(this);
        var p = wx.getUpdateManager();
        p.onCheckForUpdate(function(e) {
            console.log("updateManager.onCheckForUpdate 请求完新版本信息", e);
        }), p.onUpdateReady(function() {
            console.log("updateManager.onUpdateReady 新版本已准备好"), wx.showModal({
                title: "更新提示",
                content: "新版本已经准备好，请重启应用",
                showCancel: !1,
                success: function() {
                    p.applyUpdate();
                }
            });
        }), wx.removeStorageSync("selfForm__data");
    },
    onShow: function(e) {
        1092 === e.scene && wx.hideHomeButton();
    }
});