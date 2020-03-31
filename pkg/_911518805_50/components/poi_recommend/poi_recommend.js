var app = getApp(), cgi = require("../../utils/cgi"), renderDataUtil = require("../../utils/render_data_util"), reporter = require("../../utils/reporter"), reportEnum = require("../../utils/reportEnum"), reportSession = require("../../utils/report_session"), appLaunchData = require("../../utils/appLaunchData"), PoiModel = require("../../utils/model/poi_model"), declareBinding = require("../../utils/model_lib/declareBinding"), schema = require("../../utils/model/model_schema"), MAX_AVATAR_PICS = 6;

Component({
    properties: {
        poiData: {
            type: Object,
            value: {},
            observer: function observer(e, a, t) {
                this.data.hasAttached && this.render();
            }
        },
        poiDataIndex: {
            type: Number,
            value: 0,
            observer: function observer(e, a, t) {}
        }
    },
    data: {
        observed: 0
    },
    lifetimes: {
        attached: function attached() {
            this.setData({
                hasAttached: 1
            }), this.render();
        },
        ready: function ready() {
            this.poiObserver();
        },
        detached: function detached() {
            this.observer && this.observer.disconnect();
        }
    },
    pageLifetimes: {
        show: function show() {
            this.poiObserver();
        },
        hide: function hide() {
            this.observer && this.observer.disconnect();
        }
    },
    methods: {
        render: function render() {
            var e = this.data.poiData, a = {
                poiInfo: e.poi,
                reasonInfo: this._getReasonInfo(e)
            };
            e.reportData && (this.data.reportData = Object.assign({}, {
                pageId: "",
                prevPageId: "",
                scene: "",
                menuCategoryId: "",
                price: "",
                area: "",
                query: "",
                requestId: "",
                sortType: ""
            }, e.reportData)), e.reasonData && (this.data.reasonData = e.reasonData || {}), 
            this.setData({
                renderData: a,
                renderDataIndex: this.data.poiDataIndex
            }), declareBinding({
                instance: this,
                schema: schema.PoiSchema,
                mapping: {
                    "renderData.poiInfo.id": "id",
                    "renderData.poiInfo.isMark": "isMark"
                }
            });
        },
        onTapMark: function onTapMark(e) {
            var a = this, t = a.data.renderData, r = t.poiInfo.isMark ? 0 : 1, o = t.poiInfo.id;
            new PoiModel(o).toggleMark();
            var i = r, n = i ? "已添加到“我-想去的餐厅”" : "已从“我-想去的餐厅”中移除";
            wx.vibrateShort(), wx.showToast({
                title: n,
                icon: "none",
                duration: 2500
            });
            var s = {};
            a.data.reportData.pageId && (s.pageId = a.data.reportData.pageId), a.data.reportData.scene && (s.scene = a.data.reportData.scene), 
            new cgi.SimpleRequest("markpoi", {
                baseRequest: s,
                poiId: o,
                flag: i
            }).send(function(e) {
                a.setData({
                    "renderData.poiInfo.isMark": i
                }), app.globalData.pageMe && app.globalData.pageMe.refresh(), app.globalData.pageUserProfile && app.globalData.pageUserProfile.refresh();
            }, function(e) {
                console.error("markpoi resp failed", e);
            });
        },
        onTapToPoiDetail: function onTapToPoiDetail(e) {
            var a = this.data.renderData.poiInfo.id, t = e.currentTarget.dataset.index, r = appLaunchData.getUserLocation();
            wx.navigateTo({
                url: "/pages/poi_detail/poi_detail?poiId=" + encodeURIComponent(a)
            }), reporter.getReporter(16373).currentPage(this.data.reportData.pageId).prevPage(this.data.reportData.prevPageId).sessionType(0).sessionId(reportSession.getId()).action(reportEnum.enumPoiTagAction.POI_CLICKED).poiId(a).timeStamp2(Math.floor(new Date().getTime() / 1e3)).longitude(Math.floor(1e6 * r.longitude)).latitude(Math.floor(1e6 * r.latitude)).menuCategoryId(this.data.reportData.menuCategoryId).price(this.data.reportData.price).area(this.data.reportData.area).query(this.data.query).sortType(this.data.reportData.sortType).requestId(this.data.reportData.requestId).poiClickedIndex(t + 1).scene(this.data.reportData.scene).poiUgcLabelScene(this.data.renderData.reasonInfo.scene).lazyReportToServer();
        },
        onTapToRankList: function onTapToRankList(e) {
            var a = e.currentTarget.dataset.index, t = this.data.renderData.poiInfo.id, r = this.data.renderData.reasonInfo.data.url, o = appLaunchData.getUserLocation(), i = r.split("=");
            r && 3 === i.length && i[2], wx.navigateTo({
                url: r
            }), reporter.getReporter(16373).currentPage(this.data.reportData.pageId).prevPage(this.data.reportData.prevPageId).sessionType(0).sessionId(reportSession.getId()).action(reportEnum.enumPoiTagAction.CLICK_REASON).poiId(t).timeStamp2(Math.floor(new Date().getTime() / 1e3)).longitude(Math.floor(1e6 * o.longitude)).latitude(Math.floor(1e6 * o.latitude)).menuCategoryId(this.data.reportData.menuCategoryId).price(this.data.reportData.price).area(this.data.reportData.area).query(this.data.query).sortType(this.data.reportData.sortType).requestId(this.data.reportData.requestId).poiClickedIndex(a + 1).scene(this.data.reportData.scene).poiUgcLabelScene(this.data.renderData.reasonInfo.scene).lazyReportToServer();
        },
        onTapToImpressionFeed: function onTapToImpressionFeed(e) {
            var a = e.currentTarget.dataset.index, t = this.data.renderData.poiInfo.id, r = this.data.renderData.reasonInfo.data.impression.url, o = appLaunchData.getUserLocation();
            wx.navigateTo({
                url: r
            }), reporter.getReporter(16373).currentPage(this.data.reportData.pageId).prevPage(this.data.reportData.prevPageId).sessionType(0).sessionId(reportSession.getId()).action(reportEnum.enumPoiTagAction.CLICK_REASON).poiId(t).timeStamp2(Math.floor(new Date().getTime() / 1e3)).longitude(Math.floor(1e6 * o.longitude)).latitude(Math.floor(1e6 * o.latitude)).menuCategoryId(this.data.reportData.menuCategoryId).price(this.data.reportData.price).area(this.data.reportData.area).query(this.data.query).sortType(this.data.reportData.sortType).requestId(this.data.reportData.requestId).poiClickedIndex(a + 1).scene(this.data.reportData.scene).poiUgcLabelScene(this.data.renderData.reasonInfo.scene).lazyReportToServer();
        },
        poiObserver: function poiObserver() {
            var e = this;
            wx.nextTick(function() {
                e.observer && e.observer.disconnect();
                var a = e.createIntersectionObserver({
                    thresholds: [ 1 ],
                    initialRatio: 0,
                    observeAll: !0
                });
                a.relativeToViewport(), a.observe(".js-intersection-poi", function(a) {
                    a.dataset.index;
                    var t = e.data.poiData.poi.id;
                    if (!e.data.observed) {
                        e.data.observed = 1;
                        var r = appLaunchData.getUserLocation();
                        reporter.getReporter(16373).currentPage(e.data.reportData.pageId).prevPage(e.data.reportData.prevPageId).sessionType(0).sessionId(reportSession.getId()).action(reportEnum.enumPoiTagAction.POI_EXPOSED).poiId(t).timeStamp2(Math.floor(new Date().getTime() / 1e3)).longitude(Math.floor(1e6 * r.longitude)).latitude(Math.floor(1e6 * r.latitude)).menuCategoryId(e.data.reportData.menuCategoryId).price(e.data.reportData.price).area(e.data.reportData.area).query(e.data.query).sortType(e.data.reportData.sortType).requestId(e.data.reportData.requestId).scene(e.data.reportData.scene).poiUgcLabelScene(e.data.renderData.reasonInfo.scene).lazyReportToServer();
                    }
                }), e.observer = a;
            });
        },
        _getReasonInfo: function _getReasonInfo(e) {
            var a = {
                type: "",
                data: {},
                scene: reportEnum.enumPoiUgcLabelScene.OTHER
            };
            if (e.reasonData && e.reasonData.reason) {
                a.type = "displayRankListFromResponseReason", a.data.isClickable = !1, a.data.label = e.reasonData.reason, 
                a.scene = reportEnum.enumPoiUgcLabelScene.OTHER;
                var t = e.reasonData.type, r = {
                    1: "",
                    2: "/pages/me/me?tabIndex=2",
                    3: "",
                    4: "/pages/rank_list_new/rank_list_new"
                }[t], o = e.reasonData.billboard;
                4 === t && o ? (o.area ? a.data.url = r + "?tabIndex=" + o.type + "&areaId=" + encodeURIComponent(o.area.id) : o.category ? a.data.url = r + "?tabIndex=" + o.type + "&categoryId=" + encodeURIComponent(o.category.id) : a.data.url = r + "?tabIndex=" + o.type, 
                a.scene = reportEnum.enumPoiUgcLabelScene.RANK_LABEL, a.data.isClickable = !0) : 2 === t ? (a.data.url = r, 
                a.data.isClickable = !0, a.scene = reportEnum.enumPoiUgcLabelScene.MARK_COUNT_LABEL) : 1 === t ? a.scene = reportEnum.enumPoiUgcLabelScene.IMPRESSION_COUNT_LABEL : 3 === t && (a.scene = reportEnum.enumPoiUgcLabelScene.NEAR_POI);
            }
            if (e.poi.ugc && (e.poi.ugc.markCount > e.poi.ugc.visitCount ? (a.type = "displayFriendsMarkAvatar", 
            a.scene = reportEnum.enumPoiUgcLabelScene.MARK_COUNT_LABEL, a.data.label = e.poi.ugc.markCount + "个朋友想去", 
            a.data.avatars = e.poi.ugc.markContact, a.data.avatars.length >= MAX_AVATAR_PICS && a.data.avatars.splice(MAX_AVATAR_PICS)) : e.poi.ugc.visitCount > 0 && (a.type = "displayFriendsPublishAvatar", 
            a.scene = reportEnum.enumPoiUgcLabelScene.IMPRESSION_COUNT_LABEL, a.data.label = e.poi.ugc.visitCount + "个朋友去过", 
            a.data.avatars = e.poi.ugc.visitContact, a.data.avatars.length >= MAX_AVATAR_PICS && a.data.avatars.splice(MAX_AVATAR_PICS))), 
            e.poi.ugc && e.poi.ugc.impression) {
                var i = e.poi.ugc.impression;
                a.type = "displayFriendsImpression", a.scene = reportEnum.enumPoiUgcLabelScene.FRIEND_IMPRESSION_SHOWN, 
                a.data.impression = {}, a.data.impression.name = i.contact.remark || i.contact.nickName, 
                a.data.impression.comment = JSON.parse(i.word).content, a.data.impression.url = "/pages/impression_feed/impression_feed?id=" + encodeURIComponent(i.impressionId), 
                0 === a.data.impression.comment.length && (a.data.impression = {}, a.type = "displayFriendsPublishAvatar", 
                a.scene = reportEnum.enumPoiUgcLabelScene.IMPRESSION_COUNT_LABEL, a.data.avatars = e.poi.ugc.visitContact, 
                a.data.avatars.length >= MAX_AVATAR_PICS && a.data.avatars.splice(MAX_AVATAR_PICS)), 
                0 === e.poi.ugc.visitCount ? a.data.label = "1个朋友去过" : a.data.label = e.poi.ugc.visitCount + "个朋友去过";
            }
            return a;
        },
        _getReportTagId: function _getReportTagId(e) {
            return e.area ? e.area.id : e.category ? e.category.id : "";
        }
    }
});