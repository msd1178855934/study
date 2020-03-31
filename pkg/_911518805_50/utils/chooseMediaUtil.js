var util = require("util.js"), kitchenStorage = require("./kitchenStorage"), app = getApp(), enumChooseResultType = {
    SUCCESS: 1,
    FAILED: 2,
    CANCEL: 3,
    ACTION_SHEET_FAILED: 4,
    ACTION_SHEET_CANCEL: 5
};

function chooseMediaWithTwoOptions(e, o, t, i, s, n) {
    var a = 10;
    console.log("chooseMediaWithTwoOptions, app.canOpenKitchen(): " + app.canOpenKitchen() + ", kitchenStorage.getShouldUsePoiTestInfo(): " + kitchenStorage.getShouldUsePoiTestInfo()), 
    app.canOpenKitchen() && (a = kitchenStorage.getMediaMaxDuration(), kitchenStorage.getShouldUsePoiTestInfo() && (t = kitchenStorage.getTestPoiName(), 
    0 == (o = {
        latitude: kitchenStorage.getTestPoiLocationLatitude(),
        longitude: kitchenStorage.getTestPoiLocationLongitude()
    }).latitude && 0 == o.longitude && (o = {}), t && t.length || (t = void 0), console.log("UsePoiTestInfo location: " + JSON.stringify(o)), 
    console.log("UsePoiTestInfo poiName: " + JSON.stringify(t))));
    wx.showActionSheet({
        itemList: [ "拍摄", "从手机相册选择" ],
        success: function success(r) {
            switch (console.log("chooseMediaWithTwoOptions, success. show res.tapIndex" + r.tapIndex), 
            r.tapIndex) {
              case 0:
                chooseMediaDirectly(a, e, o, t, i, [ "camera" ], s, n);
                break;

              case 1:
                chooseMediaDirectly(a, e, o, t, i, [ "album" ], s, n);
                break;

              default:
                console.error("chooseMediaWithTwoOptions, showActionSheet, invalid res.tapIndex, res: " + JSON.stringify(r)), 
                n && n({
                    resultType: enumChooseResultType.ACTION_SHEET_FAILED,
                    errMsg: "chooseMediaWithTwoOptions, showActionSheet, invalid res.tapIndex"
                });
            }
        },
        fail: function fail(e) {
            if (console.error("chooseMediaWithTwoOptions, showActionSheet failed: " + JSON.stringify(e)), 
            n) {
                var o = {
                    errMsg: e.errMsg
                };
                e && e.errMsg && -1 != e.errMsg.search("cancel") ? o.resultType = enumChooseResultType.ACTION_SHEET_CANCEL : o.resultType = enumChooseResultType.ACTION_SHEET_FAILED, 
                n(o);
            }
        }
    });
}

function chooseMediaWithThreeOptions(e, o, t, i, s, n) {
    var a = 10;
    console.log("chooseMediaWithThreeOptions, app.canOpenKitchen(): " + app.canOpenKitchen() + ", kitchenStorage.getShouldUsePoiTestInfo(): " + kitchenStorage.getShouldUsePoiTestInfo()), 
    app.canOpenKitchen() && (a = kitchenStorage.getMediaMaxDuration(), kitchenStorage.getShouldUsePoiTestInfo() && (t = kitchenStorage.getTestPoiName(), 
    0 == (o = {
        latitude: kitchenStorage.getTestPoiLocationLatitude(),
        longitude: kitchenStorage.getTestPoiLocationLongitude()
    }).latitude && 0 == o.longitude && (o = {}), t && t.length || (t = void 0), console.log("UsePoiTestInfo location: " + JSON.stringify(o)), 
    console.log("UsePoiTestInfo poiName: " + JSON.stringify(t))));
    wx.showActionSheet({
        itemList: [ "拍摄", "从手机相册选择", "输入文字" ],
        success: function success(r) {
            switch (console.log("chooseMediaWithThreeOptions, success. show res.tapIndex" + r.tapIndex), 
            r.tapIndex) {
              case 0:
                chooseMediaDirectly(a, e, o, t, i, [ "camera" ], s, n);
                break;

              case 1:
                chooseMediaDirectly(a, e, o, t, i, [ "album" ], s, n);
                break;

              case 2:
                s({
                    resultType: enumChooseResultType.SUCCESS,
                    textDirectly: !0
                });
                break;

              default:
                console.error("chooseMediaWithThreeOptions, showActionSheet, invalid res.tapIndex, res: " + JSON.stringify(r)), 
                n && n({
                    resultType: enumChooseResultType.ACTION_SHEET_FAILED,
                    errMsg: "chooseMediaWithThreeOptions, showActionSheet, invalid res.tapIndex"
                });
            }
        },
        fail: function fail(e) {
            if (console.error("chooseMediaWithThreeOptions, showActionSheet failed: " + JSON.stringify(e)), 
            n) {
                var o = {
                    errMsg: e.errMsg
                };
                e && e.errMsg && -1 != e.errMsg.search("cancel") ? o.resultType = enumChooseResultType.ACTION_SHEET_CANCEL : o.resultType = enumChooseResultType.ACTION_SHEET_FAILED, 
                n(o);
            }
        }
    });
}

function chooseMediaDirectly(e, o, t, i, s, n, a, r) {
    t && t.latitude && t.longitude || (console.log("set location undefined !"), t = void 0), 
    util.canUseChooseMultiMediaAPI() ? (console.log("chooseMultiMedia: invoke chooseMultiMedia"), 
    wx.chooseMultiMedia({
        maxDuration: e,
        count: o,
        location: t,
        poiName: i,
        locationRadius: s,
        sourceType: n,
        success: function success(e) {
            console.log("chooseMultiMedia: chooseMultiMedia success, res: " + JSON.stringify(e)), 
            console.log("chooseMultiMedia success");
            for (var o = e.tempFiles, t = [], i = 0, s = 0; s < o.length; s++) {
                var n = o[s];
                if (n.size / 1048576 >= 6) {
                    if (util.hint("上传的单张文件不能超过6M, 第" + (s + 1) + "个文件过大"), r) {
                        var l = {
                            resultType: enumChooseResultType.FAILED,
                            errMsg: "上传的单张文件不能超过6M, 第" + (s + 1) + "个文件过大"
                        };
                        r(l);
                    }
                    return;
                }
                var h = {
                    filePath: n.tempFilePath,
                    size: n.size
                }, c = 0;
                h.height = n.height, h.width = n.width, "video" == n.type ? (c = 1, h.duration = n.duration, 
                h.thumbFilePath = "", n.thumbTempFilePath && (h.thumbFilePath = n.thumbTempFilePath)) : h.orientation = n.orientation, 
                h.scene = n.scene, h.mark = n.mark, h.displayHeight = 240, h.displayWidth = 240, 
                h.type = c, i += n.size, t.push(h);
            }
            a && a({
                resultType: enumChooseResultType.SUCCESS,
                totalFileSize: i,
                mediaItemList: t
            });
        },
        fail: function fail(e) {
            if (console.error("chooseMultiMedia: chooseMultiMedia failed, res: " + JSON.stringify(e)), 
            r) {
                var o = {
                    errMsg: e.errMsg
                };
                e && e.errMsg && -1 != e.errMsg.search("cancel") ? o.resultType = enumChooseResultType.CANCEL : o.resultType = enumChooseResultType.FAILED, 
                r(o);
            }
        }
    })) : wx.invoke ? wx.invoke("chooseMultiMedia", {
        maxDuration: e,
        count: o,
        location: t,
        poiName: i,
        locationRadius: s,
        sourceType: n,
        success: function success(e) {},
        fail: function fail(e) {}
    }, function(e) {
        if (console.log("test chooseMultiMedia, res: " + JSON.stringify(e)), "chooseMultiMedia:ok" == e.errMsg) {
            console.log("test chooseMultiMedia success");
            for (var o = e.tempFiles, t = [], i = 0, s = 0; s < o.length; s++) {
                var n = o[s];
                if (n.size / 1048576 >= 6) {
                    if (util.hint("上传的单张文件不能超过6M, 第" + (s + 1) + "个文件过大"), r) {
                        var l = {
                            resultType: enumChooseResultType.FAILED,
                            errMsg: "上传的单张文件不能超过6M, 第" + (s + 1) + "个文件过大"
                        };
                        r(l);
                    }
                    return;
                }
                var h = {
                    filePath: n.tempFilePath,
                    size: n.size
                }, c = 0;
                h.height = n.height, h.width = n.width, "video" == n.type ? (c = 1, h.duration = n.duration, 
                h.thumbFilePath = "", n.thumbTempFilePath && (h.thumbFilePath = n.thumbTempFilePath)) : h.orientation = n.orientation, 
                h.scene = n.scene, h.mark = n.mark, h.displayHeight = 240, h.displayWidth = 240, 
                h.type = c, i += n.size, t.push(h), console.log("test, show mediaItem: " + JSON.stringify(h));
            }
            a && a({
                resultType: enumChooseResultType.SUCCESS,
                totalFileSize: i,
                mediaItemList: t
            });
        } else if ("chooseMultiMedia:cancel" == e.errMsg) {
            if (console.log("test chooseMultiMedia cancel"), r) {
                var u = {
                    resultType: enumChooseResultType.CANCEL,
                    errMsg: e.errMsg
                };
                r(u);
            }
        } else if (console.error("test chooseMultiMedia failed"), r) {
            var p = {
                resultType: enumChooseResultType.FAILED,
                errMsg: e.errMsg
            };
            r(p);
        }
    }) : wx.chooseImage({
        count: o,
        sourceType: n,
        success: function success(e) {
            console.log("chooseImage success, ", e);
            for (var o = e.tempFilePaths, t = e.tempFiles, i = [], s = 0, n = 0; n < t.length; n++) {
                var l = t[n];
                if (l.size / 1048576 >= 6) {
                    if (util.hint("上传的单张图片不能超过6M, 第" + (n + 1) + "张图片过大"), r) {
                        var h = {
                            resultType: enumChooseResultType.FAILED,
                            errMsg: "上传的单张图片不能超过6M, 第" + (n + 1) + "张图片过大"
                        };
                        r(h);
                    }
                    return;
                }
                s += l.size;
                var c = {
                    type: 0,
                    filePath: o[n],
                    size: l.size,
                    displayHeight: 240,
                    displayWidth: 240
                };
                i.push(c);
            }
            a && a({
                resultType: enumChooseResultType.SUCCESS,
                totalFileSize: s,
                mediaItemList: i
            });
        },
        fail: function fail(e) {
            if (console.error("chooseImage failed, ", e), r) {
                var o = {
                    errMsg: e.errMsg
                };
                e && e.errMsg && -1 != e.errMsg.search("cancel") ? o.resultType = enumChooseResultType.CANCEL : o.resultType = enumChooseResultType.FAILED, 
                r(o);
            }
        }
    });
}

module.exports = {
    enumChooseResultType: enumChooseResultType,
    chooseMediaWithTwoOptions: chooseMediaWithTwoOptions,
    chooseMediaWithThreeOptions: chooseMediaWithThreeOptions
};