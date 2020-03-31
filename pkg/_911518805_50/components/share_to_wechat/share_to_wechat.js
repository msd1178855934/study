var app = getApp(), util = require("../../utils/util"), reporter = require("../../utils/reporter"), reportEnum = require("../../utils/reportEnum"), reportSession = require("../../utils/report_session"), MMLIFEAPP_IMPRESSION_STATUS_UNREAL = 1, MMLIFEAPP_IMPRESSION_STATUS_INVALID = 2;

Component({
    properties: {
        impressionData: {
            type: Object,
            value: {}
        },
        poiName: {
            type: String,
            value: ""
        },
        poiImage: {
            type: String,
            value: ""
        },
        isShareShake: {
            type: Boolean,
            value: !1,
            observer: function observer(e) {
                var a = this;
                this.setData({
                    animatedShareShake: e
                }), wx.nextTick(function() {
                    a.shareShakeAnimated();
                });
            }
        }
    },
    data: {
        impressionContentType: 0,
        sharedImage: "",
        impressionId: "",
        poiId: "",
        currentPageId: 0,
        animatedShareShake: !1,
        iconAnimationData: {},
        labelAnimationData: {}
    },
    attached: function attached() {},
    methods: {
        onTapShareButton: function onTapShareButton(e) {
            console.log("share_to_wechat 分享转发");
            var a = this;
            if (a.data.impressionData && a.data.impressionData.id && a.data.impressionData.contact && a.data.impressionData.contact.nickName) {
                if (a.data.poiName && a.data.poiName.length) {
                    a.data.impressionId = a.data.impressionData.id, a.data.impressionData.poiId && (a.data.poiId = a.data.impressionData.poiId);
                    var t = a.data.impressionData.contact.nickName, r = a.data.impressionData.status;
                    if (r == MMLIFEAPP_IMPRESSION_STATUS_INVALID) return console.log("status is MMLIFEAPP_IMPRESSION_STATUS_INVALID, showModal and return"), 
                    wx.showModal({
                        title: "提示",
                        content: "该内容违反了平台相关规定，无法分享。",
                        confirmText: "我知道了",
                        cancelText: "查看详情",
                        success: function success(e) {
                            if (e.confirm) console.log("status is MMLIFEAPP_IMPRESSION_STATUS_INVALID, showModal, user confirm"); else if (e.cancel) {
                                console.log("status is MMLIFEAPP_IMPRESSION_STATUS_INVALID, showModal, user cancel");
                                wx.navigateTo({
                                    url: "/pages/article_webview/article_webview?url=" + encodeURIComponent("https://support.weixin.qq.com/cgi-bin/mmsupport-bin/newreadtemplate?t=page/nearby/policy-nearby-dinning#section2")
                                });
                            }
                        }
                    }), void a.reportShareImpression(reportEnum.enumShareResult.FORBID_HIGH);
                    if (r == MMLIFEAPP_IMPRESSION_STATUS_UNREAL) return console.log("status is impressionServerStatus, showModal and return"), 
                    wx.showModal({
                        content: "该内容与餐厅无关，无法分享。",
                        showCancel: !1,
                        confirmText: "我知道了"
                    }), void a.reportShareImpression(reportEnum.enumShareResult.FORBID_LOW);
                    if (wx.shareAppMessageForFakeNative) {
                        if (console.log("shareAppMessage, start"), 0 == a.data.impressionContentType || !a.data.sharedImage || !a.data.sharedImage.length) {
                            a.data.sharedImage = "", a.data.impressionContentType = reportEnum.enumImpressionContentType.TEXT_ONLY;
                            var n = JSON.parse(a.data.impressionData.info);
                            if (n.pic && n.pic.length) {
                                var s = n.pic[0];
                                0 == s.type ? s.midImageUrl ? a.data.sharedImage = s.midImageUrl : s.url && (a.data.sharedImage = s.url) : 1 == s.type && s.thumbUrl && (a.data.sharedImage = s.thumbUrl);
                                var i = !1, o = !1;
                                n.pic.forEach(function(e) {
                                    0 === e.type ? i = !0 : 1 === e.type ? o = !0 : console.error("unknown type for item in commentInfo: " + JSON.stringify(n));
                                }), i && o ? a.data.impressionContentType = reportEnum.enumImpressionContentType.TEXT_IMAGE_VIDEO : i ? a.data.impressionContentType = reportEnum.enumImpressionContentType.TEXT_IMAGE : o && (a.data.impressionContentType = reportEnum.enumImpressionContentType.TEXT_VIDEO);
                            }
                            a.data.sharedImage && a.data.sharedImage.length || (a.data.poiImage && a.data.poiImage.length ? a.data.sharedImage = a.data.poiImage : a.data.sharedImage = "https://res.wx.qq.com/a/fed_upload/e6571a6e-666f-49d2-8292-7766fa530b3a/share-app-msg-default.jpg"), 
                            n.content || console.error("No text in impression!");
                        }
                        var p = "pages/impression_feed/impression_feed?id=" + encodeURIComponent(a.data.impressionId);
                        wx.shareAppMessageForFakeNative({
                            bizType: 0,
                            title: t + " 的餐厅印象",
                            imageUrl: a.data.sharedImage,
                            path: p,
                            desc: a.data.poiName,
                            tailLang: "FF_Entry_Nearby",
                            useDefaultSnapshot: !1,
                            disableForward: !1,
                            defaultHintUrl: "https://support.weixin.qq.com/cgi-bin/mmsupport-bin/newreadtemplate?t=page/nearby/upgrade-nearby-dinning",
                            success: function success(e) {
                                console.log("shareAppMessage success: " + JSON.stringify(e)), a.reportShareImpression(reportEnum.enumShareResult.API_SUCCESS);
                            },
                            fail: function fail(e) {
                                e.errMsg && -1 != e.errMsg.search("cancel") ? (console.log("shareAppMessage cancel: " + JSON.stringify(e)), 
                                a.reportShareImpression(reportEnum.enumShareResult.API_CANCEL)) : (console.error("shareAppMessage failed: " + JSON.stringify(e)), 
                                a.reportShareImpression(reportEnum.enumShareResult.API_FAILED));
                            }
                        });
                    } else console.log("no api");
                } else console.error("share_to_wechat no poiName");
            } else console.error("share_to_wechat no invalid impressionData");
        },
        reportShareImpression: function reportShareImpression(e) {
            if (e) {
                if (0 == this.data.currentPageId) {
                    var a = getCurrentPages();
                    if (a && a.length) {
                        var t = a[a.length - 1];
                        t && t.data && t.data.currentPageId && (this.data.currentPageId = t.data.currentPageId);
                    }
                }
                var r = 0;
                this.data.impressionData.subCommentCount && (r = this.data.impressionData.subCommentCount);
                var n = 0;
                this.data.impressionData.likeCount && (n = this.data.impressionData.likeCount);
                var s = 0;
                this.data.impressionData.markCount && (s = this.data.impressionData.markCount), 
                reporter.getReporter(16876).shareType(reportEnum.enumShareType.IMPRESSION).shareScene(this.data.currentPageId).poiId().impressionId().shareResult(e).poiImpressionsCount(0).impressionCommentCount(r).impressionWowCount(n).impressionMarkCount(s).impressionType(this.data.impressionContentType).shareTime(Math.floor(new Date().getTime() / 1e3)).poiIdString(this.data.poiId).impressionIdString(this.data.impressionId).sessionId(reportSession.getId()).reportToServer();
            } else console.error("invalid parameter, shareResult");
        },
        shareShakeAnimated: function shareShakeAnimated() {
            var e = wx.createAnimation({
                duration: 250,
                timingFunction: "ease-in-out"
            });
            this.iconAnimation = e, e.rotate(15).step(), e.rotate(-15).step(), e.rotate(15).step(), 
            e.rotate(-15).step(), e.rotate(15).step(), e.rotate(0).step();
            var a = wx.createAnimation({
                timingFunction: "ease-in"
            });
            this.labelAnimation = a, a.opacity(1).step({
                duration: 250
            }), this.data.animatedShareShake && this.setData({
                iconAnimationData: e.export(),
                labelAnimationData: a.export()
            });
        }
    }
});