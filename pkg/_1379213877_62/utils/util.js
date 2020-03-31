require("./../config/index");

var t = require("../components/gsd-lib/event/index"), e = require("./commonLocales"), n = require("./i18n"), i = Object.assign({}, e[n.locale], n.locales[n.locale]);

t.addEventListener("languageChanged", function(t) {
    i = Object.assign({}, e[n.locale], n.locales[n.locale]);
}, void 0), Date.prototype.format = function(t) {
    var e = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        S: this.getMilliseconds()
    };
    /(y+)/.test(t) && (t = t.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length)));
    for (var n in e) new RegExp("(" + n + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[n] : ("00" + e[n]).substr(("" + e[n]).length)));
    return t;
}, module.exports = {
    chooseLocation: function() {
        return new Promise(function(t, e) {
            wx.showLoading(), wx.getSetting({
                withSubscriptions: !0,
                success: function(e) {
                    wx.hideLoading(), e.authSetting && !1 === e.authSetting["scope.userLocation"] ? wx.showModal({
                        title: i.locationFail,
                        content: i.locationFisrt,
                        confirmText: i.btnSure,
                        cancelText: i.btnCancel,
                        success: function(t) {
                            t.confirm && wx.openSetting();
                        }
                    }) : wx.getLocation({
                        type: "gcj02",
                        success: function(e) {
                            var n = e.latitude, o = e.longitude;
                            wx.chooseLocation({
                                latitude: n,
                                longitude: o,
                                scale: 18,
                                success: t,
                                fail: function(t) {
                                    t.errMsg.includes("fail auth deny") && wx.showModal({
                                        title: i.locationFail,
                                        content: i.locationFisrt,
                                        confirmText: i.btnSure,
                                        cancelText: i.btnCancel,
                                        success: function(t) {
                                            t.confirm && wx.openSetting();
                                        }
                                    });
                                }
                            });
                        },
                        fail: function(t) {
                            t.errMsg.includes("fail auth deny") && wx.showModal({
                                title: i.locationFail,
                                content: i.locationFisrt,
                                confirmText: i.btnSure,
                                cancelText: i.btnCancel,
                                success: function(t) {
                                    t.confirm && wx.openSetting();
                                }
                            });
                        }
                    });
                },
                fail: function(t) {
                    wx.hideLoading();
                }
            });
        });
    }
};