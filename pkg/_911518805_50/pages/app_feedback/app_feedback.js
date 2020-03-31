function _toConsumableArray(e) {
    if (Array.isArray(e)) {
        for (var t = 0, a = Array(e.length); t < e.length; t++) {
            a[t] = e[t];
        }
        return a;
    }
    return Array.from(e);
}

var chooseMediaUtil = require("../../utils/chooseMediaUtil"), cgi = require("../../utils/cgi"), util = require("../../utils/util"), INPUT_LENGTH = 2;

Page({
    data: {
        isFormComplete: !1,
        commentText: "",
        uploadedPics: [],
        picList: [],
        uploadFileSize: 0,
        reasonType: null,
        type: 2,
        complainNormal: {}
    },
    bindInputChange: function bindInputChange(e) {
        var t = e.detail.value.replace(/^\s+|\s+$/g, ""), a = t.length;
        this.setData({
            commentText: t
        }), a >= INPUT_LENGTH ? this.setData({
            isFormComplete: !0
        }) : this.setData({
            isFormComplete: !1
        });
    },
    bindChooseImages: function bindChooseImages(e) {
        var t = this, a = t.data.uploadedPics.length, i = 0;
        wx.chooseImage({
            count: 9 - a,
            sourceType: [ "album", "camera" ],
            success: function success(e) {
                var a, o = t.data.uploadedPics;
                o.push.apply(o, _toConsumableArray(e.tempFilePaths));
                var n = e.tempFiles.map(function(e) {
                    var t = {};
                    return t.filePath = e.path, t.type = 0, t.size = e.size, i += e.size, t;
                });
                (a = t.data.picList).push.apply(a, _toConsumableArray(n)), t.setData({
                    uploadedPics: o,
                    uploadFileSize: i
                });
            }
        });
    },
    bindDeleteImages: function bindDeleteImages(e) {
        var t = e.currentTarget.dataset.index, a = this.data.uploadedPics, i = this.data.uploadFileSize;
        t < a.length && (a.splice(t, 1), i -= this.data.picList[t].size), this.data.picList.splice(t, 1), 
        this.setData({
            uploadedPics: a,
            uploadFileSize: i
        });
    },
    bindPreviewImages: function bindPreviewImages(e) {
        var t = e.currentTarget.dataset.index, a = [];
        this.data.uploadedPics.map(function(e) {
            a.push(e);
        });
        var i = a[t];
        wx.previewImage({
            current: i,
            urls: a
        });
    },
    bindTapSubmit: function bindTapSubmit() {
        var e = this;
        if (wx.showLoading({
            title: "上传中",
            mask: !0
        }), 0 === e.data.picList.length) return console.log("_this.data.picList.length === 0, call afterUploadPic directly"), 
        void e.afterUploadPic([]);
        var t = e.data.picList, a = e.data.uploadFileSize, i = t.length;
        cgi.uploadMedia4TempFiles(a, t, function() {
            console.log("uploadMedia4TempFiles, startCb");
        }, function(t) {
            if (console.log("upload complete, mediaList: ", t), t.length != i) return wx.hideLoading(), 
            void wx.showModal({
                content: "反馈信息提交失败，是否重试？",
                cancelText: "取消",
                confirmText: "重试",
                success: function success(t) {
                    t.confirm ? (console.log("app feedback submit, uploadMedia failed, retry"), e.bindTapSubmit()) : t.cancel && console.log("app feedback submit, uploadMedia failed, cancel");
                }
            });
            e.data.uploadFileSize = 0, e.afterUploadPic(t);
        }, function(e, t, a) {});
    },
    afterUploadPic: function afterUploadPic(e) {
        for (var t = [], a = this, i = 0; i < e.length; i++) {
            t.push(e[i]);
        }
        var o = {}, n = "";
        a.options.word && (n = decodeURIComponent(a.options.word)), o = a.data.picList.length > 0 ? {
            content: a.data.commentText + n,
            pic: t
        } : {
            content: a.data.commentText + n
        };
        var s = JSON.stringify(o);
        console.log("commentDataString ", s), new cgi.SimpleRequest("reportwithproof", {
            type: a.data.type,
            proof: s,
            normal: a.data.complainNormal
        }).send(function(e) {
            wx.hideLoading(), wx.showToast({
                title: "已提交",
                icon: "success",
                duration: 800
            }), setTimeout(function() {
                wx.navigateBack();
            }, 1200);
        }, function(e) {
            console.error("reportwithproof resp failed ", e), wx.hideLoading(), wx.showModal({
                content: "反馈信息提交失败，是否重试？",
                cancelText: "取消",
                confirmText: "重试",
                success: function success(e) {
                    e.confirm ? (console.log("app feedback submit, reportwithproof cgi failed, retry"), 
                    a.bindTapSubmit()) : e.cancel && console.log("app feedback submit, postpoicomment cgi failed, cancel");
                }
            });
        });
    }
});