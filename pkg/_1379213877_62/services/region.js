function e() {
    var e = r[r.env].regionPath;
    return console.log(), "zh-CN" !== wx.T.locale && (e = e.replace(".json", "_" + wx.T.locale + ".json")), 
    o.request({
        url: "" + r.cdnDomain + e + "?t=" + Date.now()
    }).then(function(e) {
        var n = e.data[0].regionList[0].regionList;
        return getApp().currentRegionSource = n, n;
    });
}

var n = getApp(), r = (n.request, n.config), o = n.wxp;

exports.getRegionData = function(n, r) {
    r = r || getApp().currentRegionSource;
    var o = Promise.resolve(r), t = wx.getStorageSync("languageChange") || !1;
    return console.log("languageChange:", t), r && !t || (o = e(), wx.removeStorageSync("languageChange")), 
    o.then(function(e) {
        var r = e.find(function(e) {
            return e.regionCode === n;
        });
        return r && r.regionList || [];
    }), o;
};