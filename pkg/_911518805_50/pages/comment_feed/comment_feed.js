var _extends = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var o in n) {
            Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
        }
    }
    return e;
};

function _defineProperty(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}

var app = getApp(), cgi = require("../../utils/cgi"), util = require("../../utils/util"), reporter = require("../../utils/reporter"), reportEnum = require("../../utils/reportEnum"), reportSession = require("../../utils/report_session"), declareBinding = require("../../utils/model_lib/declareBinding"), PoiSchema = require("../../utils/model/model_schema").PoiSchema, CommentSchema = require("../../utils/model/model_schema").CommentSchema, PoiModel = require("../../utils/model/poi_model"), CommentModel = require("../../utils/model/comment_model"), MMPage = require("../../utils/mmFramework/mm_page");

MMPage({
    mmReportData: {
        pageName: reportEnum.enumPageName.POI_DETAIL_SECOND
    },
    data: {
        poiId: "",
        commentType: 1,
        showBottomLoadingView: !0,
        context: "",
        impressionList: [],
        continueFlag: 0,
        currentPageId: reportEnum.enumPageName.POI_DETAIL_SECOND
    },
    onLoad: function onLoad(e) {
        var t = this, n = decodeURIComponent(e.context), o = Number(e.commentType);
        t.data.poi = JSON.parse(decodeURIComponent(e.poi)), t.data.poiId = t.data.poi.base.id, 
        app.addLaunchListener(function() {
            t.updateGlobalFunc(), t.setData({
                context: n,
                commentType: o
            }), wx.setNavigationBarTitle({
                title: 1 === o ? "朋友的印象" : "网友的印象"
            }), reporter.getReporter(16501).pageId(reportEnum.enumPageName.POI_DETAIL_SECOND).time(Math.floor(new Date().getTime() / 1e3)).launchScene(reportSession.getLaunchScene()).reportToServer(), 
            t.getCommentRequest(0);
        });
    },
    onUnload: function onUnload() {
        this.clearGlobalFunc();
    },
    onReachBottom: function onReachBottom() {
        this.setData({
            showBottomLoadingView: !0
        }), 0 === this.data.continueFlag ? this.setData({
            showBottomLoadingView: !1
        }) : this.getCommentRequest(1);
    },
    getCommentRequest: function getCommentRequest(e) {
        var t = this;
        new cgi.SimpleRequest("getpoicommentdetail", {
            id: t.data.poiId,
            context: t.data.context
        }).send(function(n) {
            if (t.setData({
                context: n.context,
                continueFlag: n.continueFlag,
                showBottomLoadingView: !0
            }), n.comment && n.comment.length) {
                var o = [];
                if (n.comment.forEach(function(e) {
                    o.push({
                        comment: Object.assign(e, {
                            createTime: ""
                        }),
                        unqiue: e.id,
                        poi: t.data.poi,
                        reportData: {
                            pageId: reportEnum.enumPageName.POI_DETAIL_SECOND
                        }
                    });
                }), e) {
                    for (var i = t.data.impressionList, a = o, m = {}, r = i.length; r < i.length + a.length; r++) {
                        m["impressionList[" + r + "]"] = o[r - i.length];
                    }
                    t.setData(_extends({}, m));
                } else t.setData({
                    impressionList: o
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
                });
            }
            t.setData({
                showBottomLoadingView: !1
            });
        }, function(e) {
            t.setData({
                showBottomLoadingView: !1
            });
        });
    },
    updateGlobalFunc: function updateGlobalFunc() {
        var e = this;
        app.addInfoUpdateEventListeners(app.infoUpdateEventKey.commentFeed, app.infoUpdateEvent.updateImpressionCommentCount, function(t) {
            if (t && t.impressionId) {
                console.log("commentFeed, infoUpdateEventListeners, updateImpressionCommentCount");
                for (var n = t.impressionId, o = t.commentCount ? t.commentCount : 0, i = e.data.impressionList, a = 0; a < i.length; a++) {
                    var m = i[a];
                    if (m.unqiue == n) {
                        if (m.comment) {
                            m.comment.subCommentCount = o, console.log("timeline, infoUpdateEventListeners, updateImpressionCommentCount: " + o + ", index: " + a), 
                            e.setData(_defineProperty({}, "impressionList[" + a + "].comment.subCommentCount", o));
                            break;
                        }
                        console.error("timeline, timelineItem.comment undefined!");
                        break;
                    }
                }
            } else console.error("commentFeed, infoUpdateEventListeners, updateImpressionCommentCount, impressionId undefined!");
        }), app.addInfoUpdateEventListeners(app.infoUpdateEventKey.commentFeed, app.infoUpdateEvent.deleteImpression, function(t) {
            if (t && t.impressionId) {
                console.log("commentFeed, infoUpdateEventListeners, deleteImpression, impressionId: " + n);
                for (var n = t.impressionId, o = e.data.impressionList, i = 0; i < o.length; i++) {
                    if (o[i].unqiue == n) {
                        e.setData(_defineProperty({}, "impressionList[" + i + "]", {}));
                        break;
                    }
                }
            } else console.error("commentFeed, infoUpdateEventListeners, deleteImpression, impressionId undefined!");
        });
    },
    clearGlobalFunc: function clearGlobalFunc() {
        app.removeInfoUpdateEventListeners(app.infoUpdateEventKey.commentFeed);
    }
});