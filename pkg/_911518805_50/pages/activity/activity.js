var _extends = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var o = arguments[t];
        for (var a in o) {
            Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
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

var app = getApp(), appLaunchData = require("../../utils/appLaunchData"), cgi = require("../../utils/cgi"), util = require("../../utils/util"), reporter = require("../../utils/reporter"), reportEnum = require("../../utils/reportEnum"), reportSession = require("../../utils/report_session"), reportPostImpression = require("../../utils/reportPostImpression"), declareBinding = require("../../utils/model_lib/declareBinding"), PoiSchema = require("../../utils/model/model_schema").PoiSchema, CommentSchema = require("../../utils/model/model_schema").CommentSchema, PoiModel = require("../../utils/model/poi_model"), CommentModel = require("../../utils/model/comment_model"), MMPage = require("../../utils/mmFramework/mm_page"), APPEND = 1, REPLACE = 0;

MMPage({
    data: {
        shouldShowBottomLoading: !0,
        currentPageId: reportEnum.enumPageName.ACTIVITY,
        requestId: "",
        reasonId: 0,
        context: "",
        continueFlag: 1,
        broadcastTextArray: [],
        ugcCountInfo: "",
        visitCountInfo: 0,
        countInfo: "",
        titleName: "",
        pageBgUrl: "",
        prizeUrl: "",
        rankListName: "",
        topRankPoiName: "",
        refBillBoard: {}
    },
    mmReportData: {
        pageName: reportEnum.enumPageName.ACTIVITY,
        impressionExposedSet: {}
    },
    onLoad: function onLoad(e) {
        var t = this, o = {};
        e.activity && (o = JSON.parse(decodeURIComponent(e.activity))), t.data.visitCount = o.visitCount && o.visitCount + "人感兴趣", 
        t.setData({
            titleName: o.name,
            reasonId: +o.id,
            visitCountInfo: t.data.visitCount
        }), wx.setNavigationBarTitle({
            title: t.data.titleName
        }), app.addLaunchListener(function() {
            t.getRecommendImpression(REPLACE), reporter.getReporter(16501).pageId(t.data.currentPageId).time(Math.floor(new Date().getTime() / 1e3)).launchScene(reportSession.getLaunchScene()).sessionId(reportSession.getId()).reportToServer(), 
            t.updateGlobalFunc();
        }), wx.onTapNavigationBarRightButton(function(e) {
            console.log("onTapNavigationBarRightButton: " + JSON.stringify(e)), t.shareAppMessage();
        });
    },
    onUnload: function onUnload() {
        this.clearGlobalFunc(), this.pageObserver && this.pageObserver.disconnect();
    },
    onReachBottom: function onReachBottom() {
        this.data.continueFlag ? this.getRecommendImpression(APPEND) : this.setData({
            shouldShowBottomLoading: !1
        });
    },
    getRecommendImpression: function getRecommendImpression(e) {
        var t = this, o = appLaunchData.isUsingRealCurrentLocation(), a = appLaunchData.getUserLocation();
        t.data.requestId = util.uuid(), t.setData({
            shouldShowBottomLoading: !0
        }), e || (t.data.context = "", t.data.continueFlag = 1), new cgi.SimpleRequest("getrecommendimpression", {
            location: a,
            requestId: t.data.requestId,
            reasonId: t.data.reasonId,
            context: t.data.context,
            scene: 1
        }).ensureNoSameUrlProcessing().send(function(a) {
            if (a.activityBroadcast && a.activityBroadcast.length > 0) {
                var r = a.activityBroadcast.map(function(e) {
                    return e.contact.nickName + " 推荐了 " + e.poiName;
                });
                t.setData({
                    broadcastTextArray: r
                });
            }
            a.topic && (t.data.pageBgUrl = a.topic.backgroundPhoto && a.topic.backgroundPhoto.url, 
            t.data.description = a.topic.description || "", t.data.refBillBoard = a.topic.refBillBoard || {}, 
            t.data.prizeUrl = a.topic.viewPrizeUrl || "", t.data.refBillBoard.category && t.data.refBillBoard.category.id && t.getTopRankPoi(), 
            t.setData({
                pageBgUrl: t.data.pageBgUrl,
                description: t.data.description,
                prizeUrl: t.data.prizeUrl,
                refBillBoard: t.data.refBillBoard
            }));
            var i = [];
            if (a.info && a.info.comment && a.info.comment.length && (i = a.info.comment.map(function(e) {
                return {
                    unqiue: e.comment.id,
                    comment: Object.assign(e.comment, {
                        tag: [],
                        createTime: ""
                    }),
                    poi: e.poi,
                    isUsingRealCurrentLocation: o,
                    reportData: {
                        pageId: t.data.currentPageId,
                        requestId: t.data.requestId,
                        recId: e.comment && e.comment.recId ? e.comment.recId : "",
                        recType: e.comment && e.comment.recType ? e.comment.recType : 0
                    }
                };
            })), e) {
                for (var n = t.data.impressionList, s = i, p = {}, d = n.length; d < n.length + s.length; d++) {
                    p["impressionList[" + d + "]"] = i[d - n.length];
                }
                t.setData(_extends({}, p));
            } else t.setData({
                impressionList: i
            });
            declareBinding({
                instance: t,
                schema: CommentSchema,
                arrayPath: "impressionList",
                mapping: {
                    "comment.id": "id",
                    "comment.isLike": "isLike",
                    "comment.likeCount": "likeCount"
                }
            }), t.setData({
                context: a.context,
                continueFlag: a.continueFlag,
                shouldShowBottomLoading: !1
            }), t.pageObserveIntersection();
        });
    },
    getTopRankPoi: function getTopRankPoi() {
        var e = this, t = appLaunchData.getUserLocation();
        new cgi.SimpleRequest("getpoilist", {
            location: t,
            options: {
                entryType: 5,
                categoryId: [ e.data.refBillBoard.category.id ]
            },
            context: "",
            requestId: util.uuid()
        }).send(function(t) {
            if (t && t.poi && t.poi[0] && t.poi[0].base) {
                var o = t.poi[0].base.name || "";
                e.setData({
                    topRankPoiName: "No.1  " + o,
                    rankListName: e.data.refBillBoard.category.name + "排行榜" || ""
                });
            }
        }, function(t) {
            e.setData({
                shouldShowBottomLoading: !1
            }), console.error("prefetch getpoilist fail");
        });
    },
    updateGlobalFunc: function updateGlobalFunc() {
        var e = this;
        app.addInfoUpdateEventListeners(app.infoUpdateEventKey.activity, app.infoUpdateEvent.updateImpressionCommentCount, function(t) {
            if (t && t.impressionId) {
                var o = t.impressionId, a = t.commentCount ? t.commentCount : 0;
                console.log("activity, infoUpdateEventListeners, updateImpressionCommentCount");
                for (var r = e.data.impressionList, i = 0; i < r.length; i++) {
                    var n = r[i];
                    if (n.unqiue == o) {
                        if (n.comment) {
                            n.comment.subCommentCount = a, console.log("activity, infoUpdateEventListeners, updateImpressionCommentCount: " + a + ", index: " + i);
                            var s = new PoiModel(n.poi.base.id), p = new CommentModel(o);
                            s && void 0 !== s.isMark && (n.poi.ugc.isMark = s.isMark), p && void 0 !== p.isLike && void 0 !== p.likeCount && (n.comment.isLike = p.isLike, 
                            n.comment.likeCount = p.likeCount), e.setData(_defineProperty({}, "impressionList[" + i + "]", n));
                            break;
                        }
                        console.error("indexTag, timelineItem.comment undefined!");
                        break;
                    }
                }
            } else console.error("activity, infoUpdateEventListeners, updateImpressionCommentCount, impressionId undefined!");
        }), app.addInfoUpdateEventListeners(app.infoUpdateEventKey.activity, app.infoUpdateEvent.addImpression, function(t) {
            console.log("activity, infoUpdateEventListeners, addImpression"), e.getRecommendImpression(REPLACE);
        }), app.addInfoUpdateEventListeners(app.infoUpdateEventKey.activity, app.infoUpdateEvent.deleteImpression, function(t) {
            if (t && t.impressionId) {
                var o = t.impressionId;
                console.log("activity, infoUpdateEventListeners, deleteImpression, impressionId: " + o);
                for (var a = 0; a < e.data.impressionList.length; a++) {
                    if (e.data.impressionList[a].unqiue == o) {
                        e.setData(_defineProperty({}, "impressionList[" + a + "]", {}));
                        break;
                    }
                }
            } else console.error("activity, infoUpdateEventListeners, deleteImpression, impressionId undefined!");
        });
    },
    clearGlobalFunc: function clearGlobalFunc() {
        app.removeInfoUpdateEventListeners(app.infoUpdateEventKey.activity);
    },
    onTapPost: function onTapPost() {
        var e = "/pages/poi_comment_publish/poi_comment_publish?topicId=" + this.data.reasonId + "&topicName=" + encodeURIComponent(this.data.titleName), t = {
            startScene: this.data.currentPageId,
            lastScene: this.data.currentPageId,
            nextPageUrl: e
        };
        reportPostImpression.startPostImpressionProcess(t);
    },
    onTapToRankListPage: function onTapToRankListPage() {
        wx.navigateTo({
            url: "/pages/rank_list_new/rank_list_new?tabIndex=3&categoryId=" + encodeURIComponent(this.data.refBillBoard.category.id)
        });
    },
    onTapToPrizeUrl: function onTapToPrizeUrl() {
        wx.navigateTo({
            url: "/pages/article_webview/article_webview?url=" + encodeURIComponent(this.data.prizeUrl)
        }), reporter.getReporter(17332).sessionId(reportSession.getId()).action(reportEnum.enumIndexTopRegionAction.ACTIVITY_SHOW_RULES).actionItem(this.data.reasonId).reportToServer();
    },
    shareAppMessage: function shareAppMessage() {
        var e = this;
        if (wx.shareAppMessageForFakeNative) {
            console.log("shareAppMessage, start");
            var t = e.data.impressionList[0];
            if (!t || !t.poi) return void console.error("shareAppMessage, no impressionData.poi, return!");
            var o = e.data.pageBgUrl;
            o && o.length || (console.error("shareAppMessage, no pic from impressionData.poi, impressionId: " + t.comment.id), 
            o = "https://res.wx.qq.com/a/fed_upload/e6571a6e-666f-49d2-8292-7766fa530b3a/share-app-msg-default.jpg"), 
            wx.shareAppMessageForFakeNative({
                bizType: 0,
                title: e.data.titleName,
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
    pageObserveIntersection: function pageObserveIntersection() {
        var e = this;
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
                var a = e.data.impressionList[o];
                if (a) {
                    var r = "";
                    a.comment && a.comment.id && (r = a.comment.id);
                    var i = "";
                    if (a && a.poi && a.poi.base && (i = a.poi.base.id), r && i && !e.mmReportData.impressionExposedSet[r]) {
                        e.mmReportData.impressionExposedSet[r] = 1;
                        var n = 0;
                        a.markInfo && a.markInfo.friendMarkCount && (n = 1);
                        var s = util.getImpressionType(a.comment.contact.type);
                        n && (s = reportEnum.enumFeedImpressionType.MARKED);
                        var p = 0;
                        a && a.comment && a.comment.subCommentCount && (p = a.comment.subCommentCount);
                        var d = reportEnum.enumFeedAction.FEED_EXPOSED, m = a.reportData.scene || "", c = a.reportData.pageId || "", l = a.reportData.requestId || "", u = a.reportData.recId || "", g = a.reportData.recType || 0;
                        reporter.getReporter(16483).sessionType(0).sessionId(reportSession.getId()).clickTime(Math.floor(new Date().getTime() / 1e3)).scene(m).poiId().impressionId().impressionCommentCount(p).isForwardedImpression(n).poiIdString(i).impressionIdString(r).action(d).impressionType(s).requestId(l).pageId(c).reasonId().reasonIdString(e.data.reasonId).recId(u).recType(g).lazyReportToServer();
                    }
                }
            }
        }), e.pageObserver = t;
    },
    reportShareResult: function reportShareResult(e) {
        e ? reporter.getReporter(16876).shareType(reportEnum.enumShareType.ACTIVITY_TOPIC).shareScene(reportEnum.enumPageName.ACTIVITY).poiId().impressionId().shareResult(e).poiImpressionsCount(0).impressionCommentCount(0).impressionWowCount(0).impressionMarkCount(0).impressionType(0).shareTime(Math.floor(new Date().getTime() / 1e3)).poiIdString(this.data.reasonId).impressionIdString().sessionId(reportSession.getId()).reportToServer() : console.error("invalid parameter, shareResult");
    }
});