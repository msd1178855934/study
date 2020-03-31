var app = getApp(), cgi = require("../utils/cgi"), util = require("../utils/util"), reporter = require("../utils/reporter"), reportEnum = require("../utils/reportEnum"), reportSession = require("../utils/report_session"), ugcStorage = require("../utils/ugcStorage"), declareBinding = require("../utils/model_lib/declareBinding"), PoiSchema = require("../utils/model/model_schema").PoiSchema, CommentSchema = require("../utils/model/model_schema").CommentSchema, ContactSchema = require("../utils/model/model_schema").ContactSchema, PoiModel = require("../utils/model/poi_model"), CommentModel = require("../utils/model/comment_model"), startTimeStamp = "";

module.exports = Behavior({
    behaviors: [],
    properties: {},
    data: {
        currentMedia: 0,
        canShare: util.canUseShareAppMessageAPI(),
        isShareShake: 0
    },
    attached: function attached() {},
    ready: function ready() {},
    created: function created() {},
    detached: function detached() {},
    methods: {
        noop: function noop() {},
        bindlikechange: function bindlikechange(e) {
            app.getHasLaunched();
        },
        bindshareshake: function bindshareshake(e) {
            this.setData({
                isShareShake: e.detail.isShareShake
            });
        },
        onTapPoi: function onTapPoi(e) {
            var t = this.data.renderData.poiInfo.poiId || "", a = this.data.renderData.visitCount;
            if (app.getHasLaunched()) {
                var r = this.data.renderData.reportData || {}, n = this.data.renderData.commentId || "", o = this.data.renderData.friendMarkCount ? 1 : 0, i = reportEnum.enumFeedAction.FEED_CLIKED_POI, s = r.scene || 0, d = r.requestId || "", p = r.pageId || 0, m = r.recId || "", c = r.recType || 0, u = util.getImpressionType(this.data.renderData.contact.type);
                o && (u = reportEnum.enumFeedImpressionType.MARKED);
                var I = 0;
                this.data.renderData.commentInfo && this.data.renderData.commentInfo.subCommentCount && (I = this.data.renderData.commentInfo.subCommentCount), 
                wx.navigateTo({
                    url: "/pages/poi_detail/poi_detail?poiId=" + encodeURIComponent(t) + "&visitCount=" + a
                }), reporter.getReporter(16483).sessionType(0).sessionId(reportSession.getId()).clickTime(Math.floor(new Date().getTime() / 1e3)).scene(s).poiId().impressionId().impressionCommentCount(I).isForwardedImpression(o).poiIdString(t).impressionIdString(n).action(i).impressionType(u).requestId(d).pageId(p).reasonId().reasonIdString().recId(m).recType(c).reportToServer();
            }
        },
        onTapImpression: function onTapImpression(e) {
            if (app.getHasLaunched()) {
                var t = this.data.renderData.commentId, a = 0;
                this.data.renderData.commentInfo && this.data.renderData.commentInfo.subCommentCount && (a = this.data.renderData.commentInfo.subCommentCount);
                var r = 0 === a, n = this.data.renderData.reportData || {}, o = this.data.renderData.commentId || "", i = this.data.renderData.friendMarkCount ? 1 : 0, s = reportEnum.enumFeedAction.FEED_CLIKED_IMPRESSION, d = n.scene || 0, p = this.data.renderData.poiInfo.poiId, m = n.requestId || "", c = n.pageId || 0, u = n.recId || "", I = n.recType || 0, l = util.getImpressionType(this.data.renderData.contact.type);
                i && (l = reportEnum.enumFeedImpressionType.MARKED), wx.navigateTo({
                    url: "/pages/impression_feed/impression_feed?id=" + encodeURIComponent(t) + "&autoFocus=" + r + "&currentMedia=" + this.data.currentMedia + "&recId=" + u + "&recType=" + I
                }), reporter.getReporter(16483).sessionType(0).sessionId(reportSession.getId()).clickTime(Math.floor(new Date().getTime() / 1e3)).scene(d).poiId().impressionId().impressionCommentCount(a).isForwardedImpression(i).poiIdString(p).impressionIdString(o).action(s).impressionType(l).requestId(m).pageId(c).reasonId().reasonIdString().recId(u).recType(I).reportToServer();
            }
        },
        onTapMarkTimelineItem: function onTapMarkTimelineItem(e) {
            if (app.getHasLaunched()) {
                var t = this.data.renderData, a = t.isMark ? 0 : 1, r = this.data.renderData.poiInfo.poiId;
                new PoiModel(r).toggleMark();
                var n = a, o = n ? "已添加到“我-想去的餐厅”" : "已从“我-想去的餐厅”中移除";
                wx.vibrateShort(), wx.showToast({
                    title: o,
                    icon: "none",
                    duration: 2500
                });
                var i = {};
                t.reportData && t.reportData.scene && (i.scene = t.reportData.scene), t.reportData && t.reportData.pageId && (i.pageId = t.reportData.pageId);
                var s = "";
                t.reportData && t.reportData.recId && (s = t.reportData.recId);
                var d = 0;
                t.reportData && t.reportData.recType && (d = t.reportData.recType), new cgi.SimpleRequest("markpoi", {
                    baseRequest: i,
                    poiId: t.poiInfo.poiId,
                    flag: n,
                    referId: t.impressionId,
                    recId: s,
                    recType: d
                }).send(function(e) {
                    app.globalData.pageMe && app.globalData.pageMe.refresh(), app.globalData.pageUserProfile && app.globalData.pageUserProfile.refresh();
                }, function(e) {
                    console.error("markpoi resp failed", e);
                }), this.setData({
                    shouldShowCommentPanel: 1
                }), !1 === ugcStorage.hasMarkAtTimeline() && (ugcStorage.updateMarkAtTimeline(), 
                wx.showModal({
                    content: "你的“想去”将会通知印象作者。",
                    showCancel: !1,
                    confirmText: "知道了"
                }));
            }
        },
        bindTapLocateMedia: function bindTapLocateMedia(e) {
            var t = e.currentTarget.dataset.media || {};
            this.data.currentMedia = t.id || 0;
        },
        bindtapToUserProfile: function bindtapToUserProfile(e) {
            var t = e.currentTarget.dataset.contact;
            0 == t.type ? wx.navigateTo({
                url: "/pages/me/me"
            }) : wx.navigateTo({
                url: "/pages/user_profile/user_profile?contact=" + encodeURIComponent(JSON.stringify(t))
            });
        },
        bindtapShowCommentPanel: function bindtapShowCommentPanel() {
            this.setData({
                shouldShowCommentPanel: 1,
                shouldAutoFocusCommentPanel: 1
            });
        },
        bindhidecommmentpanel: function bindhidecommmentpanel() {
            this.setData({
                shouldShowCommentPanel: 0
            });
        },
        bindtapShowCommentPanelNotFocus: function bindtapShowCommentPanelNotFocus() {
            this.setData({
                shouldShowCommentPanel: 1,
                shouldAutoFocusCommentPanel: 0
            });
        },
        bindTapTag: function bindTapTag(e) {
            var t = e.currentTarget.dataset.name, a = e.currentTarget.dataset.id;
            wx.navigateTo({
                url: "/pages/activity/activity?activity=" + encodeURIComponent(JSON.stringify({
                    name: t,
                    id: a
                }))
            });
            var r = this.data.renderData.reportData || {}, n = this.data.renderData.poiInfo.poiId, o = this.data.renderData.commentId || "", i = this.data.renderData.friendMarkCount ? 1 : 0, s = reportEnum.enumFeedAction.FEED_CLIKED_TAG, d = r.scene || 0, p = r.requestId || "", m = r.pageId || 0, c = r.recId || "", u = r.recType || 0, I = util.getImpressionType(this.data.renderData.contact.type);
            i && (I = reportEnum.enumFeedImpressionType.MARKED);
            var l = 0;
            this.data.renderData.commentInfo && this.data.renderData.commentInfo.subCommentCount && (l = this.data.renderData.commentInfo.subCommentCount), 
            reporter.getReporter(16483).sessionType(0).sessionId(reportSession.getId()).clickTime(Math.floor(new Date().getTime() / 1e3)).scene(d).poiId().impressionId().impressionCommentCount(l).isForwardedImpression(i).poiIdString(n).impressionIdString(o).action(s).impressionType(I).requestId(p).pageId(m).reasonId().reasonIdString(a).recId(c).recType(u).reportToServer();
        },
        toggleComment16483KvReport: function toggleComment16483KvReport(e) {
            var t = this.data.renderData.reportData || {}, a = this.data.renderData.commentId || "", r = this.data.renderData.friendMarkCount ? 1 : 0, n = this.data.renderData.poiInfo.poiId || "", o = e.detail.shouldShowEllipse ? reportEnum.enumFeedAction.FEED_CLICKED_SHOW_ALL : reportEnum.enumFeedAction.FEED_CLICKED_FOLD_ALL, i = t.scene || 0, s = t.requestId || "", d = t.pageId || 0, p = t.recId || "", m = t.recType || 0, c = util.getImpressionType(this.data.renderData.contact.type);
            r && (c = reportEnum.enumFeedImpressionType.MARKED);
            var u = 0;
            this.data.renderData.commentInfo && this.data.renderData.commentInfo.subCommentCount && (u = this.data.renderData.commentInfo.subCommentCount), 
            reporter.getReporter(16483).sessionType(0).sessionId(reportSession.getId()).clickTime(Math.floor(new Date().getTime() / 1e3)).scene(i).poiId().impressionId().impressionCommentCount(u).isForwardedImpression(r).poiIdString(n).impressionIdString(a).action(o).impressionType(c).requestId(s).pageId(d).reasonId().reasonIdString().recId(p).recType(m).reportToServer();
        },
        declareBindingForPoi: function declareBindingForPoi(e) {
            e.poiInfo && e.poiInfo.poiId && declareBinding({
                instance: this,
                schema: PoiSchema,
                mapping: {
                    "renderData.poiInfo.id": "id",
                    "renderData.poiInfo.name": "name",
                    "renderData.poiInfo.categoryName": "categoryName",
                    "renderData.poiInfo.price": "price",
                    "renderData.poiInfo.area": "area",
                    "renderData.isMark": "isMark"
                }
            });
        },
        declareBindingForContact: function declareBindingForContact(e) {
            e.contact && e.contact.userId && declareBinding({
                instance: this,
                schema: ContactSchema,
                mapping: {
                    "renderData.contact.userId": "id",
                    "renderData.contact.follow": "follow",
                    "renderData.contact.ugc.fansCount": "fansCount"
                }
            });
        }
    }
});