function e(o) {
    var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
    return 0 === i ? Promise.reject(null) : new Promise(function(a, d) {
        u().then(function(e) {
            return r.request(t({}, o, {
                url: n(o.url),
                header: t({}, o.header, {
                    sessionid: e,
                    appid: s
                }),
                timeout: o.timeout || 15e3
            }));
        }).then(function(n) {
            n.statusCode;
            var t = n.data, r = t.errcode;
            return [ 110001005, 110001004, -1 ].includes(r) ? (wx.removeStorageSync("wx-sessionid"), 
            e(o, i - 1).then(a)) : 0 === r ? a(t.data) : (wx.showToast({
                title: t.errmsg || r && "服务器繁忙，稍后重试",
                icon: "none"
            }), console.log(t.errmsg), d(t));
        }).catch(function() {
            return c || (c = !0, wx.showModal({
                title: "温馨提示",
                content: "当前人数较多，请稍后再试",
                showCancel: !1,
                success: function() {
                    c = !1;
                }
            })), d(null);
        });
    });
}

function n(e) {
    return 0 === e.indexOf("http") ? e : "" + i + e;
}

var t = Object.assign || function(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = arguments[n];
        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
}, r = require("./wx-promise"), o = require("../config/index"), i = o.domain, s = o.appid, u = require("./session").getSessionId, c = !1;

module.exports = {
    request: e
};