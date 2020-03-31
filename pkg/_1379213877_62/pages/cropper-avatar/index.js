var a = getApp(), t = a.systemInfo, e = (a.request, a.config), i = require("../../utils/session").getSessionId, o = t.screenWidth / 750, s = t.windowHeight, n = 500 * o, c = 500 * o;

Page({
    data: {
        imgWidth: "",
        imgHeight: "",
        showImg: !1,
        imgTop: 0,
        imgLeft: 0,
        scrollTop: 0,
        scrollLeft: 0,
        movableareaHeight: 500 * o,
        movableareaWidth: 500 * o,
        scale: 1,
        cutX: 0,
        cutY: 0
    },
    onLoad: function(a) {
        var t = this;
        console.log("options", a);
        var e = this, i = a || "", o = "", s = "";
        i && (o = i.imageSrc || "", s = i.fromPage || ""), this.setData({
            fromPage: s
        }), o && wx.downloadFile({
            url: o,
            success: function(a) {
                200 === a.statusCode && (t.setData({
                    imageSrc: a.tempFilePath || ""
                }), setTimeout(function() {
                    e.loadImage();
                }, 800));
            },
            fail: function(a) {
                t.setData({
                    imageSrc: o
                }), t.loadImage();
            }
        });
    },
    chooseImg: function() {
        wx.navigateBack({
            delta: 1
        });
    },
    loadImage: function() {
        var a = this;
        wx.showLoading({
            title: "图片加载中..."
        }), wx.getImageInfo({
            src: a.data.imageSrc,
            success: function(t) {
                var e = t.width / t.height, i = "", r = "", l = "", g = "", d = (s - 100 * o - c) / 2, h = (750 * o - n) / 2;
                e >= 1 ? (r = c, (i = c * e) < n && (i = n, r = n / e)) : (i = n, r = n / e), l = h - (i - n) / 2, 
                g = -(r - 436 * o) / 2, a.setData({
                    scrollTop: d,
                    scrollLeft: h,
                    imgWidth: i,
                    imgHeight: r,
                    imgTop: g,
                    imgLeft: l,
                    showImg: !0,
                    lineBottomTop: d + c
                }), wx.hideLoading();
            }
        });
    },
    onChange: function(a) {
        console.log("拖动事件", a.detail), this.setData({
            cutX: a.detail.x,
            cutY: a.detail.y
        });
    },
    onScale: function(a) {
        console.log("缩放事件", a);
        var t = a.detail.scale;
        this.setData({
            scale: t,
            cutX: a.detail.x,
            cutY: a.detail.y
        });
    },
    creatImage: function(a) {
        var t = this, o = this.data, s = o.fromPage, r = o.imageSrc, l = o.imgWidth, g = o.imgHeight, d = o.scale;
        wx.showLoading({
            title: "图片上传中..."
        }), t.setData({
            canvasWidth: l * d,
            canvasHeight: g * d
        });
        var h = wx.createCanvasContext("canvasCropper");
        h.scale(d, d), h.drawImage(r, 0, 0, l, g), h.draw(!1, function(a) {
            setTimeout(function() {
                wx.canvasToTempFilePath({
                    x: Math.abs(t.data.cutX),
                    y: Math.abs(t.data.cutY),
                    width: n,
                    height: c,
                    destWidth: 4 * n,
                    destHeight: 4 * c,
                    fileType: "jpg",
                    quality: 1,
                    canvasId: "canvasCropper",
                    success: function(a) {
                        if (wx.setStorageSync("imgcropper", a.tempFilePath), wx.hideLoading(), "memberInfo" == s) {
                            var t = getCurrentPages(), o = t[t.length - 2];
                            i().then(function(t) {
                                wx.uploadFile({
                                    url: e.domain + "/report/uploadAvatar",
                                    filePath: a.tempFilePath,
                                    header: {
                                        sessionid: t,
                                        appid: e.appid
                                    },
                                    name: "file",
                                    formData: {
                                        user: "test"
                                    },
                                    success: function(t) {
                                        wx.hideLoading();
                                        var e = JSON.parse(t.data);
                                        o.setData({
                                            avatarUrl: a.tempFilePath,
                                            avatarFlag: !0,
                                            "selfForm.avatarKey": e.data
                                        }), wx.navigateBack({
                                            delta: 1
                                        });
                                    },
                                    fail: function() {
                                        wx.showToast({
                                            title: "error!",
                                            icon: "none"
                                        });
                                    }
                                });
                            });
                        }
                    }
                });
            }, 1e3);
        });
    }
});