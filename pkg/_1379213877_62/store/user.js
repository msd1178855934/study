function e(e, n) {
    if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
}

var n = Object.assign || function(e) {
    for (var n = 1; n < arguments.length; n++) {
        var o = arguments[n];
        for (var t in o) Object.prototype.hasOwnProperty.call(o, t) && (e[t] = o[t]);
    }
    return e;
}, o = function() {
    function e(e, n) {
        for (var o = 0; o < n.length; o++) {
            var t = n[o];
            t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), 
            Object.defineProperty(e, t.key, t);
        }
    }
    return function(n, o, t) {
        return o && e(n.prototype, o), t && e(n, t), n;
    };
}();

module.exports = function(t) {
    var r = t.Anim, i = t.request, s = t.config, u = t.Event, a = r.wedux.observe, l = (s.domain, 
    s.appid, require("../utils/locales.js"));
    return a(new (function() {
        function t() {
            e(this, t), this.initUserInfo();
        }
        return o(t, [ {
            key: "initUserInfo",
            value: function() {
                this.userInfo = {
                    isAuth: !1,
                    phone: "",
                    role: [],
                    isLeader: !1,
                    address: "",
                    name: "",
                    uid: ""
                };
            }
        }, {
            key: "fetchUserInfo",
            value: function() {
                var e = this;
                console.log("langIndex:", wx.getStorageSync("langIndex"));
                var o = wx.getStorageSync("langIndex") || 0, t = Object.keys(l), r = l["" + t[o]];
                return wx.showLoading({
                    title: r.showLoading,
                    mask: !0
                }), i({
                    url: "/wll/account/getloginuserinfo"
                }).then(function(o) {
                    return wx.hideLoading(), console.log("res", o), e.userInfo = n({}, o, {
                        isAuth: !!o.phone,
                        isLeader: o.role && o.role.includes("LEADER"),
                        isVolunteer: o.role && o.role.includes("ZHIYUAN")
                    }), u.dispatch("fetchUserInfo", e.userInfo), e.userInfo;
                }).catch(function(e) {
                    wx.hideLoading(), console.error(e);
                });
            }
        }, {
            key: "updateUserInfo",
            value: function(e) {
                this.userInfo = e;
            }
        }, {
            key: "login",
            value: function() {
                console.log("login");
            }
        }, {
            key: "checkAuth",
            value: function() {
                if (!this.userInfo.isAuth) {
                    var e = wx.getStorageSync("langIndex") || 0, n = Object.keys(l), o = l["" + n[e]];
                    return wx.showModal({
                        title: o.showModal_title_tips,
                        content: o.showModal_content_login,
                        showCancel: !1,
                        confirmText: o.showModal_confirmText,
                        success: function() {
                            wx.navigateTo({
                                url: "/pages/mine/login/index"
                            });
                        }
                    }), !1;
                }
                return !0;
            }
        } ]), t;
    }())(), "user");
};