var util = require("../../utils/util"), cgi = require("../../utils/cgi"), md5 = require("../../utils/md5"), appLaunchData = require("../../utils/appLaunchData");

Page({
    data: {},
    onLoad: function onLoad(e) {
        for (var o = this, i = wx.getFileSystemManager(), n = function n(e) {
            var n = "devtools" === util.getSysInfo().platform ? "http://usr/miniprogramLog/log" + e : "wxfile://usr/miniprogramLog/log" + e;
            i.getFileInfo({
                filePath: n,
                success: function success(l) {
                    console.log("logFile[" + e + "] success info res", l);
                    var t = l.size;
                    i.readFile({
                        filePath: n,
                        encoding: "utf8",
                        success: function success(i) {
                            console.log("readFile success"), o.uploadLogFile(t, "log." + e, i.data);
                        },
                        fail: function fail(e) {
                            console.log("readFile fail", e);
                        }
                    });
                },
                fail: function fail(o) {
                    console.log("logFile[" + e + "] fail info res", o);
                },
                complete: function complete(o) {
                    console.log("logFile[" + e + "] complete info res", o);
                }
            });
        }, l = 5; l >= 5; l--) {
            n(l);
        }
    },
    onReady: function onReady() {},
    onShow: function onShow() {},
    onHide: function onHide() {},
    uploadLogFile: function uploadLogFile(e, o, i) {
        var n = appLaunchData.getOpenId(), l = md5("appengine#$()1" + e);
        wx.request({
            url: "https://aesupport.weixin.qq.com/cgi-bin/mmsupport-bin/aestackreport?productid=2101&reporttype=10001&reportvalue=&uin=" + n + "&version=1&devicetype=1&filelength=" + e + "&rtxname=gragashuang&sum=" + l + "&etype=1",
            data: i,
            success: function success(e) {
                console.log("upload log file success", e);
            },
            fail: function fail(e) {
                console.log("upload log file success", e);
            }
        });
    },
    onUnload: function onUnload() {}
});