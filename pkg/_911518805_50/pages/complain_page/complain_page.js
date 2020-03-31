function _toConsumableArray(e) {
    if (Array.isArray(e)) {
        for (var a = 0, t = Array(e.length); a < e.length; a++) {
            t[a] = e[a];
        }
        return t;
    }
    return Array.from(e);
}

var chooseMediaUtil = require("../../utils/chooseMediaUtil"), cgi = require("../../utils/cgi"), util = require("../../utils/util"), MMLIFEAPP_REPORT_WITH_PROOF_COMPLAIN_TYPE_COMMENT = 0, MMLIFEAPP_REPORT_WITH_PROOF_COMPLAIN_TYPE_POI = 1, MMLIFEAPP_REPORT_WITH_PROOF_COMPLAIN_TYPE_NORMAL = 2, MMLIFEAPP_REPORT_WITH_PROOF_COMPLAIN_TYPE_IMPRESSION_COMMENT = 3;

Page({
    data: {
        checkboxItems: [ {
            name: "与店不相关",
            value: 8
        }, {
            name: "不实信息",
            value: 16
        }, {
            name: "色情",
            value: 1
        }, {
            name: "违反法律",
            value: 4
        }, {
            name: "广告",
            value: 2
        }, {
            name: "其他",
            value: 32
        } ],
        checkBoxChecked: !1,
        isFormComplete: !1,
        commentText: "",
        uploadedPics: [],
        picList: [],
        uploadFileSize: 0,
        showProgressPopOver: !1,
        progress: 0,
        reasonType: null,
        type: MMLIFEAPP_REPORT_WITH_PROOF_COMPLAIN_TYPE_COMMENT,
        complainComment: {},
        complainImpressionComment: {}
    },
    onLoad: function onLoad(e) {
        if (console.log("complain_page options", e), e.impressionId && e.commentId) {
            this.data.type = MMLIFEAPP_REPORT_WITH_PROOF_COMPLAIN_TYPE_IMPRESSION_COMMENT, this.data.complainImpressionComment = {
                impressionId: e.impressionId,
                commentId: e.commentId
            };
            this.setData({
                checkboxItems: [ {
                    name: "内容对我造成骚扰",
                    value: 128
                }, {
                    name: "色情",
                    value: 1
                }, {
                    name: "广告",
                    value: 2
                }, {
                    name: "政治谣言",
                    value: 4
                }, {
                    name: "其他违规内容",
                    value: 32
                } ]
            });
        } else e.impressionId && (this.data.type = MMLIFEAPP_REPORT_WITH_PROOF_COMPLAIN_TYPE_COMMENT, 
        this.data.complainComment = {
            commentId: e.impressionId
        });
    },
    bindCheckboxChange: function bindCheckboxChange(e) {
        for (var a = this.data.checkboxItems, t = Number(e.detail.value), i = 0; i < a.length; ++i) {
            t === a[i].value ? a[i].checked = !0 : a[i].checked = !1;
        }
        0 !== t ? (this.data.reasonType = t, this.data.checkBoxChecked = !0) : (this.data.checkBoxChecked = !1, 
        this.data.reasonType = null), this.setData({
            checkboxItems: a
        }), this.data.checkBoxChecked && this.data.commentText.length >= 2 ? this.setData({
            isFormComplete: !0
        }) : this.setData({
            isFormComplete: !1
        });
    },
    bindInputChange: function bindInputChange(e) {
        var a = e.detail.value.replace(/^\s+|\s+$/g, ""), t = a.length;
        this.setData({
            commentText: a
        }), this.data.checkBoxChecked && t >= 2 ? this.setData({
            isFormComplete: !0
        }) : this.setData({
            isFormComplete: !1
        });
    },
    bindChooseImages: function bindChooseImages(e) {
        var a = this, t = a.data.uploadedPics.length, i = 0;
        wx.chooseImage({
            count: 4 - t,
            sourceType: [ "album", "camera" ],
            success: function success(e) {
                var t, o = a.data.uploadedPics;
                o.push.apply(o, _toConsumableArray(e.tempFilePaths));
                var n = e.tempFiles.map(function(e) {
                    var a = {};
                    return a.filePath = e.path, a.type = 0, a.size = e.size, i += e.size, a;
                });
                (t = a.data.picList).push.apply(t, _toConsumableArray(n)), a.setData({
                    uploadedPics: o,
                    uploadFileSize: i
                });
            }
        });
    },
    bindDeleteImages: function bindDeleteImages(e) {
        var a = e.currentTarget.dataset.index, t = this.data.uploadedPics, i = this.data.uploadFileSize;
        a < t.length && (t.splice(a, 1), i -= this.data.picList[a].size), this.data.picList.splice(a, 1), 
        this.setData({
            uploadedPics: t,
            uploadFileSize: i
        });
    },
    bindPreviewImages: function bindPreviewImages(e) {
        var a = e.currentTarget.dataset.index, t = [];
        this.data.uploadedPics.map(function(e) {
            t.push(e);
        });
        var i = t[a];
        wx.previewImage({
            current: i,
            urls: t
        });
    },
    bindTapSubmit: function bindTapSubmit() {
        var e = this;
        if (wx.showLoading({
            title: "上传中",
            mask: !0
        }), 0 === e.data.picList.length) return console.log("_this.data.picList.length === 0, call afterUploadPic directly"), 
        void e.afterUploadPic([]);
        var a = e.data.picList, t = e.data.uploadFileSize, i = a.length;
        cgi.uploadMedia4TempFiles(t, a, function() {
            console.log("uploadMedia4TempFiles, startCb");
        }, function(a) {
            if (console.log("upload complete, mediaList: ", a), a.length != i) return wx.hideLoading(), 
            void wx.showModal({
                content: "投诉信息提交失败，是否重试？",
                cancelText: "取消",
                confirmText: "重试",
                success: function success(a) {
                    a.confirm ? (console.log("complain page submit, uploadMedia failed, retry"), e.bindTapSubmit()) : a.cancel && console.log("complain page submit, uploadMedia failed, cancel");
                }
            });
            e.data.uploadFileSize = 0, e.afterUploadPic(a);
        }, function(e, a, t) {});
    },
    afterUploadPic: function afterUploadPic(e) {
        for (var a = [], t = this, i = 0; i < e.length; i++) {
            a.push(e[i]);
        }
        var o = {};
        o = t.data.picList.length > 0 ? {
            content: t.data.commentText,
            pic: a
        } : {
            content: t.data.commentText
        };
        var n = JSON.stringify(o);
        console.log("commentDataString ", n), new cgi.SimpleRequest("reportwithproof", {
            reasonType: t.data.reasonType,
            type: t.data.type,
            proof: n,
            comment: t.data.complainComment,
            impressionComment: t.data.complainImpressionComment
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
                content: "投诉提交失败，是否重试？",
                cancelText: "取消",
                confirmText: "重试",
                success: function success(e) {
                    e.confirm ? (console.log("complain page submit, reportwithproof cgi failed, retry"), 
                    t.bindTapSubmit()) : e.cancel && console.log("complain page submit, postpoicomment cgi failed, cancel");
                }
            });
        });
    }
});