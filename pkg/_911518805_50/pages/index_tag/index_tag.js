var _extends = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var o = arguments[t];
        for (var n in o) {
            Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n]);
        }
    }
    return e;
};

function _defineProperty(e, t, o) {
    return t in e ? Object.defineProperty(e, t, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = o, e;
}

var cgi = require("../../utils/cgi"), app = getApp(), util = require("../../utils/util"), questionStorage = require("../../utils/questionStorage"), kitchenStorage = require("../../utils/kitchenStorage"), storage = require("../../utils/storage"), reporter = require("../../utils/reporter"), reportEnum = require("../../utils/reportEnum"), reportSession = require("../../utils/report_session"), renderDataUtil = require("../../utils/render_data_util"), appLaunchData = require("../../utils/appLaunchData"), mixinCss = require("../../utils/mixinCss"), chooseMediaUtil = require("../../utils/chooseMediaUtil"), reportPostImpression = require("../../utils/reportPostImpression"), declareBinding = require("../../utils/model_lib/declareBinding"), PoiSchema = require("../../utils/model/model_schema").PoiSchema, CommentSchema = require("../../utils/model/model_schema").CommentSchema, PoiModel = require("../../utils/model/poi_model"), CommentModel = require("../../utils/model/comment_model"), MMPage = require("../../utils/mmFramework/mm_page"), APPEND = 1, REPLACE = 0, impressionExposedSet = new Set();

MMPage({
    data: {
        shouldShowBottomLoading: !0,
        currentPageId: reportEnum.enumPageName.HOT_TOPIC,
        requestId: "",
        reasonId: 0,
        context: "",
        continueFlag: 1,
        broadcastTextArray: []
    },
    mmReportData: {
        pageName: reportEnum.enumPageName.HOT_TOPIC,
        pageRequestId: 0
    },
    onLoad: function onLoad(e) {
        var t = this;
        t.data.reasonId = +e.feedId;
        var o = decodeURIComponent(e.name || "");
        t.setData({
            title: o
        }), app.addLaunchListener(function() {
            wx.setNavigationBarTitle({
                title: o
            }), t.cgiGetRecommendImpression(REPLACE), reporter.getReporter(16501).pageId(reportEnum.enumPageName.HOT_TOPIC).time(Math.floor(new Date().getTime() / 1e3)).launchScene(reportSession.getLaunchScene()).sessionId(reportSession.getId()).reportToServer(), 
            t.updateGlobalFunc();
        }), wx.onTapNavigationBarRightButton(function(e) {
            console.log("onTapNavigationBarRightButton: " + JSON.stringify(e)), t.shareAppMessage();
        });
    },
    onUnload: function onUnload() {
        this.clearGlobalFunc();
    },
    cgiGetRecommendImpression: function cgiGetRecommendImpression(e) {
        var t = this;
        t.data.requestId = util.uuid(), e || (t.data.context = "", t.data.continueFlag = 1);
        var o = appLaunchData.isUsingRealCurrentLocation(), n = appLaunchData.getUserLocation();
        new cgi.SimpleRequest("GetRecommendImpression", {
            location: n,
            requestId: t.data.requestId,
            reasonId: t.data.reasonId,
            context: t.data.context,
            scene: 1 == t.options.scene ? 1 : 0
        }).ensureNoSameUrlProcessing().send(function(n) {
            if (1 == t.options.scene && !t.data.context) {
                var r = (n.activityBroadcast || []).map(function(e) {
                    return e.contact.nickName + " 推荐了 " + e.poiName;
                });
                t.setData({
                    broadcastTextArray: r
                });
            }
            var a = [];
            if (t.setData({
                context: n.context,
                continueFlag: n.continueFlag
            }), n.continueFlag || t.setData({
                shouldShowBottomLoading: !1
            }), n.info && n.info.comment && n.info.comment.length && (a = n.info.comment.map(function(e) {
                return {
                    unqiue: e.comment.id,
                    comment: Object.assign(e.comment, {
                        tag: [],
                        createTime: ""
                    }),
                    poi: e.poi,
                    isUsingRealCurrentLocation: o,
                    reportData: {
                        pageId: reportEnum.enumPageName.HOT_TOPIC,
                        requestId: t.data.requestId,
                        recId: e.comment && e.comment.recId ? e.comment.recId : "",
                        recType: e.comment && e.comment.recType ? e.comment.recType : 0
                    }
                };
            })), e) {
                for (var i = t.data.impressionList, s = a, p = {}, m = i.length; m < i.length + s.length; m++) {
                    p["impressionList[" + m + "]"] = a[m - i.length];
                }
                t.setData(_extends({}, p));
            } else t.setData({
                impressionList: a
            });
            t.pageObserveIntersection();
        });
    },
    onReachBottom: function onReachBottom() {
        this.cgiGetRecommendImpression(APPEND);
    },
    updateGlobalFunc: function updateGlobalFunc() {
        var e = this;
        app.addInfoUpdateEventListeners(app.infoUpdateEventKey.indexTag, app.infoUpdateEvent.updateImpressionCommentCount, function(t) {
            if (t && t.impressionId) {
                var o = t.impressionId, n = t.commentCount ? t.commentCount : 0;
                console.log("indexTag, infoUpdateEventListeners, updateImpressionCommentCount");
                for (var r = e.data.impressionList, a = 0; a < r.length; a++) {
                    var i = r[a];
                    if (i.unqiue == o) {
                        if (i.comment) {
                            i.comment.subCommentCount = n, console.log("indexTag, infoUpdateEventListeners, updateImpressionCommentCount: " + n + ", index: " + a);
                            var s = new PoiModel(i.poi.base.id), p = new CommentModel(o);
                            s && void 0 !== s.isMark && (i.poi.ugc.isMark = s.isMark), p && void 0 !== p.isLike && void 0 !== p.likeCount && (i.comment.isLike = p.isLike, 
                            i.comment.likeCount = p.likeCount), e.setData(_defineProperty({}, "impressionList[" + a + "]", i));
                            break;
                        }
                        console.error("indexTag, timelineItem.comment undefined!");
                        break;
                    }
                }
            } else console.error("indexTag, infoUpdateEventListeners, updateImpressionCommentCount, impressionId undefined!");
        }), app.addInfoUpdateEventListeners(app.infoUpdateEventKey.indexTag, app.infoUpdateEvent.addImpression, function(t) {
            console.log("indexTag, infoUpdateEventListeners, addImpression"), e.cgiGetRecommendImpression(REPLACE);
        }), app.addInfoUpdateEventListeners(app.infoUpdateEventKey.indexTag, app.infoUpdateEvent.deleteImpression, function(t) {
            if (t && t.impressionId) {
                var o = t.impressionId;
                console.log("indexTag, infoUpdateEventListeners, deleteImpression, impressionId: " + o);
                for (var n = 0; n < e.data.impressionList.length; n++) {
                    if (e.data.impressionList[n].unqiue == o) {
                        e.setData(_defineProperty({}, "impressionList[" + n + "]", {}));
                        break;
                    }
                }
            } else console.error("indexTag, infoUpdateEventListeners, deleteImpression, impressionId undefined!");
        });
    },
    clearGlobalFunc: function clearGlobalFunc() {
        app.removeInfoUpdateEventListeners(app.infoUpdateEventKey.indexTag);
    },
    onTapPost: function onTapPost(e) {
        var t = "/pages/poi_comment_publish/poi_comment_publish?topicId=" + this.data.reasonId + "&topicName=" + encodeURIComponent(this.data.title), o = {
            startScene: reportEnum.enumPageName.HOT_TOPIC,
            lastScene: reportEnum.enumPageName.HOT_TOPIC,
            nextPageUrl: t
        };
        reportPostImpression.startPostImpressionProcess(o);
    },
    pageObserveIntersection: function pageObserveIntersection() {
        var e = this;
        wx.nextTick(function() {
            e.pageObserver && e.pageObserver.disconnect();
            var t = wx.createIntersectionObserver(e, {
                thresholds: [ .4 ],
                initialRatio: 0,
                observeAll: !0
            });
            t.relativeToViewport(), t.observe(".impression-cell", function(t) {
                var o = t.dataset.index;
                if (void 0 !== o) {
                    void 0 === e.data.lastImprPreloadIndex && (e.data.lastImprPreloadIndex = -1), o > e.data.lastImprPreloadIndex && o % 5 == 0 && (e.onReachBottom(), 
                    e.data.lastImprPreloadIndex = o);
                    var n = e.data.impressionList[o];
                    if (n) {
                        var r = "";
                        n.comment && n.comment.id && (r = n.comment.id);
                        var a = "";
                        if (n && n.poi && n.poi.base && (a = n.poi.base.id), r && a && !impressionExposedSet.has(r)) {
                            impressionExposedSet.add(r);
                            var i = 0;
                            n.markInfo && n.markInfo.friendMarkCount && (i = 1);
                            var s = util.getImpressionType(n.comment.contact.type);
                            i && (s = reportEnum.enumFeedImpressionType.MARKED);
                            var p = 0;
                            n && n.comment && n.comment.subCommentCount && (p = n.comment.subCommentCount);
                            var m = reportEnum.enumFeedAction.FEED_EXPOSED, d = n.reportData.scene || "", u = n.reportData.pageId || "", c = n.reportData.requestId || "", l = n.reportData.recId || "", g = n.reportData.recType || 0;
                            reporter.getReporter(16483).sessionType(0).sessionId(reportSession.getId()).clickTime(Math.floor(new Date().getTime() / 1e3)).scene(d).poiId().impressionId().impressionCommentCount(p).isForwardedImpression(i).poiIdString(a).impressionIdString(r).action(m).impressionType(s).requestId(c).pageId(u).reasonId().reasonIdString(e.data.reasonId).recId(l).recType(g).lazyReportToServer();
                        }
                    }
                }
            }), e.pageObserver = t;
        });
    },
    shareAppMessage: function shareAppMessage() {
        var e = this;
        if (wx.shareAppMessageForFakeNative) {
            console.log("shareAppMessage, start");
            var t = e.data.impressionList[0];
            if (!t || !t.poi) return void console.error("shareAppMessage, no impressionData.poi, return!");
            var o = "";
            if (t.poi.base && t.poi.base.logo) {
                var n = t.poi.base.logo;
                n.url ? o = n.url : n.thumbUrl && (o = n.thumbUrl);
            }
            o && o.length || (console.error("shareAppMessage, no pic from impressionData.poi, impressionId: " + t.comment.id), 
            o = "https://res.wx.qq.com/a/fed_upload/e6571a6e-666f-49d2-8292-7766fa530b3a/share-app-msg-default.jpg"), 
            wx.shareAppMessageForFakeNative({
                bizType: 0,
                title: e.data.title,
                desc: "精心挑选的餐厅",
                imageUrl: o,
                path: util.getCurrentPageUrl(),
                tailLang: "FF_Entry_Nearby",
                useDefaultSnapshot: !1,
                disableForward: !1,
                defaultHintUrl: "https://support.weixin.qq.com/cgi-bin/mmsupport-bin/newreadtemplate?t=page/nearby/upgrade-nearby-dinning",
                success: function success(t) {
                    console.log("shareAppMessage success: " + JSON.stringify(t)), e.reportShareResult(reportEnum.enumShareResult.API_SUCCESS);
                },
                fail: function fail(t) {
                    t.errMsg && -1 != t.errMsg.search("cancel") ? (console.log("shareAppMessage cancel: " + JSON.stringify(t)), 
                    e.reportShareResult(reportEnum.enumShareResult.API_CANCEL)) : (console.error("shareAppMessage failed: " + JSON.stringify(t)), 
                    e.reportShareResult(reportEnum.enumShareResult.API_FAILED));
                }
            });
        } else console.log("shareAppMessage, no api");
    },
    reportShareResult: function reportShareResult(e) {
        e ? reporter.getReporter(16876).shareType(reportEnum.enumShareType.HOT_TOPIC).shareScene(reportEnum.enumPageName.HOT_TOPIC).poiId().impressionId().shareResult(e).poiImpressionsCount(0).impressionCommentCount(0).impressionWowCount(0).impressionMarkCount(0).impressionType(0).shareTime(Math.floor(new Date().getTime() / 1e3)).poiIdString(this.data.reasonId).impressionIdString().sessionId(reportSession.getId()).reportToServer() : console.error("invalid parameter, shareResult");
    }
});