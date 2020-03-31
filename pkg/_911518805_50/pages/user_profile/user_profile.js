var app = getApp(), cgi = require("../../utils/cgi"), MMPage = require("../../utils/mmFramework/mm_page"), appLaunchData = require("../../utils/appLaunchData"), util = require("../../utils/util"), reportEnum = require("../../utils/reportEnum"), mixinCss = require("../../utils/mixinCss"), reporter = require("../../utils/reporter"), reportSession = require("../../utils/report_session"), renderDataUtil = require("../../utils/render_data_util"), declareBinding = require("../../utils/model_lib/declareBinding"), ContactSchema = require("../../utils/model/model_schema").ContactSchema, ContactModel = require("../../utils/model/contact_model"), schema = require("../../utils/model/model_schema"), prevTime = "", SHOULD_REPLACE = 0, SHOULD_APPEND = 1, impressionExposedSet = new Set(), poiExposedSet = new Set();

MMPage({
    mmReportData: {
        pageName: reportEnum.enumPageName.USER_PROFILE
    },
    data: {
        shouldUseFollow: app.shouldUseFollow(),
        isFirstInit: !0,
        menuPositionTop: 0,
        headImgUrl: "",
        nickName: "",
        fansCount: 0,
        followCount: 0,
        markLikeCountTotal: 0,
        userGender: "他",
        followType: 0,
        markList: [],
        impressionList: [],
        markCount: 0,
        impressionCount: 0,
        contextImpression: "",
        continueFlagImpression: 1,
        showBottomLoadingViewImpression: !1,
        contextMark: "",
        continueFlagMark: 1,
        showBottomLoadingViewMark: !1,
        commentIdPicMap: {},
        currentTab: 1,
        isTab1Inited: !1,
        isTab2Inited: !1,
        useRealCurrentLocationToGetData: appLaunchData.isUsingRealCurrentLocation(),
        currentPageId: reportEnum.enumPageName.USER_PROFILE
    },
    onLoad: function onLoad(e) {
        var t = this, o = 30;
        if (wx.canIUse("getMenuButtonBoundingClientRect")) {
            var n = wx.getMenuButtonBoundingClientRect();
            "android" === util.getSysInfo().platform && (n.top = n.top / 2, n.top = n.top + 8), 
            o = n.top + 2;
        }
        this.setData({
            menuPositionTop: o
        });
        var i = {};
        e.contact && (i = JSON.parse(decodeURIComponent(e.contact))), app.globalData.pageUserProfile = t, 
        t.setData({
            userId: i.userId,
            headImgUrl: i.headImgUrl,
            nickName: i.nickName,
            userGender: t._getUserGender(Number(i.sex)),
            followType: i.follow ? Number(i.follow) : 0,
            fansCount: i.ugc && i.ugc.fansCount ? i.ugc.fansCount : 0,
            followCount: i.ugc && i.ugc.followCount ? i.ugc.followCount : 0
        }), declareBinding({
            instance: t,
            schema: ContactSchema,
            mapping: {
                userId: "id",
                followType: "follow",
                fansCount: "fansCount"
            }
        }), app.addLaunchListener(function() {
            t.setData({
                shouldUseFollow: app.shouldUseFollow()
            }), t.addGlobalFunc(), t.data.useRealCurrentLocationToGetData = appLaunchData.isUsingRealCurrentLocation(), 
            reporter.getReporter(16501).pageId(reportEnum.enumPageName.USER_PROFILE).time(Math.floor(new Date().getTime() / 1e3)).launchScene(reportSession.getLaunchScene()).sessionId(reportSession.getId()).reportToServer();
        });
    },
    onUnload: function onUnload() {
        this.clearGlobalFunc(), this.impressionObserver && this.impressionObserver.disconnect(), 
        this.poiObserver && this.poiObserver.disconnect();
    },
    addGlobalFunc: function addGlobalFunc() {
        var e = this;
        app.addInfoUpdateEventListeners(app.infoUpdateEventKey.userProfile, app.infoUpdateEvent.updateImpressionCommentCount, function(t) {
            if (t && t.impressionId) {
                var o = t.impressionId, n = t.commentCount ? t.commentCount : 0;
                console.log("userProfile, infoUpdateEventListeners, updateImpressionCommentCount, impressionId: " + o);
                for (var i = !1, r = e.data.impressionList, a = 0; a < r.length; a++) {
                    var s = r[a];
                    if (s.comment.id == o) {
                        s.comment.subCommentCount = n, i = !0;
                        break;
                    }
                }
                i && e.setData({
                    impressionList: r
                });
            } else console.error("userProfile, infoUpdateEventListeners, updateImpressionCommentCount, impressionId undefined!");
        });
    },
    clearGlobalFunc: function clearGlobalFunc() {
        app.removeInfoUpdateEventListeners(app.infoUpdateEventKey.userProfile);
    },
    onShow: function onShow() {
        var e = this;
        e.createImpressionObserveIntersection(), e.createPoiObserveIntersection(), app.addLaunchListener(function() {
            e.data.isFirstInit ? (e.setData({
                showBottomLoadingView: !0
            }), e.refresh()) : !e.data.useRealCurrentLocationToGetData && appLaunchData.isUsingRealCurrentLocation() && (console.log("user profile, onShow, useRealCurrentLocationToGetData change, startPullDownRefresh"), 
            e.refresh());
        });
    },
    refresh: function refresh() {
        console.log("page me refresh!");
        var e = this, t = appLaunchData.getUserLocation(), o = appLaunchData.isUsingRealCurrentLocation();
        new cgi.multipleRequest([ new cgi.SimpleRequest("GetUserPage", {
            context: "",
            scene: cgi.EnumMMLifeAppGetUserPageSceneDefine.MMLIFEAPP_GET_USER_PAGE_SCENE_IMPRESSION,
            userId: e.data.userId,
            location: t
        }), new cgi.SimpleRequest("GetUserPage", {
            context: "",
            scene: cgi.EnumMMLifeAppGetUserPageSceneDefine.MMLIFEAPP_GET_USER_PAGE_SCENE_MARK,
            userId: e.data.userId,
            location: t
        }) ], function(t) {
            e.data.useRealCurrentLocationToGetData = o, impressionExposedSet.clear(), poiExposedSet.clear(), 
            e.renderImpressionList(SHOULD_REPLACE, t[0]), e.renderMarkList(SHOULD_REPLACE, t[1]), 
            e.data.isFirstInit && (t[0] && t[0].impression && t[0].impression.length || !t[1] || !t[1].impression || !t[1].impression.length || (e.data.currentTab = 2)), 
            e.setData({
                currentTab: e.data.currentTab,
                isFirstInit: !1,
                isTab1Inited: !0,
                isTab2Inited: !0
            }), e.createPoiObserveIntersection(), wx.stopPullDownRefresh();
        });
    },
    cgiGetImpressionList: function cgiGetImpressionList(e) {
        var t = this, o = appLaunchData.getUserLocation();
        e || (t.data.contextImpression = "", t.data.continueFlagImpression = 1), new cgi.SimpleRequest("GetUserPage", {
            context: t.data.contextImpression,
            scene: cgi.EnumMMLifeAppGetUserPageSceneDefine.MMLIFEAPP_GET_USER_PAGE_SCENE_IMPRESSION,
            userId: t.data.userId,
            location: o
        }).ensureNoSameUrlProcessing().send(function(o) {
            t.renderImpressionList(e, o);
        });
    },
    renderImpressionList: function renderImpressionList(e, t) {
        var o = [], n = t.markCount || 0, i = t.likeCount || 0;
        this.setData({
            contextImpression: t.context,
            continueFlagImpression: t.continueFlag,
            markLikeCountTotal: util.formatNumberToTenThousand(n + i) || 0
        }), e || this.setData({
            impressionCount: t.count
        }), (t.impression || []).forEach(function(e) {
            if (e.type == cgi.EnumMMLifeAppPoiImpressionTypeDefine.MMLIFEAPP_POI_IMPRESSION_TYPE_COMMENT) o.push({
                comment: e.comment,
                unqiue: e.comment.id,
                poi: e.poi,
                reportData: {
                    pageId: reportEnum.enumPageName.USER_PROFILE
                }
            }); else if (e.type == cgi.EnumMMLifeAppPoiImpressionTypeDefine.MMLIFEAPP_POI_IMPRESSION_TYPE_PAY_RECOMMEND_POI_IMPRESSION) if (e.payRecommendPoiImpression && e.payRecommendPoiImpression.id) {
                var t = renderDataUtil.convertPayRecommendInfoToImpression(e.payRecommendPoiImpression);
                o.push({
                    comment: t,
                    unqiue: t.id,
                    poi: e.poi,
                    reportData: {
                        pageId: reportEnum.enumPageName.USER_PROFILE
                    }
                });
            } else console.error("GetUserPage CGI, renderImpressionList, type is MMLIFEAPP_POI_IMPRESSION_TYPE_PAY_RECOMMEND_POI_IMPRESSION, but no payRecommendPoiImpression!");
        }), e ? this.setData({
            impressionList: this.data.impressionList.concat(o),
            showBottomLoadingView: !0
        }) : this.setData({
            impressionList: o,
            showBottomLoadingView: !0
        }), this.createImpressionObserveIntersection();
    },
    cgiGetMarkList: function cgiGetMarkList(e) {
        var t = this, o = appLaunchData.getUserLocation();
        e || (t.data.contextMark = "", t.data.continueFlagMark = 1), new cgi.SimpleRequest("GetUserPage", {
            context: t.data.contextMark,
            scene: cgi.EnumMMLifeAppGetUserPageSceneDefine.MMLIFEAPP_GET_USER_PAGE_SCENE_MARK,
            userId: t.data.userId,
            location: o
        }).ensureNoSameUrlProcessing().send(function(o) {
            t.renderMarkList(e, o);
        });
    },
    renderMarkList: function renderMarkList(e, t) {
        var o = this;
        o.setData({
            contextMark: t.context,
            continueFlagMark: t.continueFlag
        });
        var n = [];
        e || o.setData({
            markCount: t.count,
            markCountTotal: util.formatNumberToTenThousand(t.markCount) || null
        }), (t.impression || []).forEach(function(e) {
            var t = util.formatDate(new Date(1e3 * e.createTime));
            0 === prevTime.length || prevTime !== t ? prevTime = t : t = "";
            var i = o.getPoiInfo(e);
            if (e.type == cgi.EnumMMLifeAppPoiImpressionTypeDefine.MMLIFEAPP_POI_IMPRESSION_TYPE_COMMENT) {
                var r = void 0 !== e.comment.info ? JSON.parse(e.comment.info) : "";
                o.data.commentIdPicMap[e.comment.id] = r.pic || [], n.push({
                    poi: i,
                    timestamp: t,
                    thumbUrl: (r.pic || []).map(function(e) {
                        return e.thumbUrl;
                    })
                });
            } else if (e.type == cgi.EnumMMLifeAppPoiImpressionTypeDefine.MMLIFEAPP_POI_IMPRESSION_TYPE_MARK) {
                var a = [];
                void 0 !== e.poi.base.logo ? a.push(e.poi.base.logo.thumbUrl) : a.push("https://res.wx.qq.com/a/fed_upload/e6571a6e-666f-49d2-8292-7766fa530b3a/poi-default.jpg");
                var s = renderDataUtil.getRenderPoiInfo(e.poi);
                n.push({
                    poi: i,
                    normalPoi: s,
                    timestamp: t,
                    thumbUrl: a
                });
            }
        }), e ? o.setData({
            markList: o.data.markList.concat(n),
            showBottomLoadingView: !0
        }) : o.setData({
            markList: n,
            showBottomLoadingView: !0
        }), o.createPoiObserveIntersection();
    },
    getPoiInfo: function getPoiInfo(e) {
        var t = {}, o = [];
        t.info = "", e.poi.base.category.forEach(function(e) {
            var t = e.name, n = e.name.lastIndexOf(":");
            -1 != n && (t = t.substring(n + 1, e.name.length)), o.push(t);
        });
        var n = o.join(",");
        if (t.info += n, void 0 !== e.poi.price.price) {
            var i = e.poi.price.price, r = parseInt(i) / 100;
            0 != r && (t.info += " · 人均￥" + r);
        }
        if (e.poi && e.poi.area && e.poi.area[0] && (t.area = e.poi.area[0].name, t.info = t.info + " · " + t.area), 
        this.data.useRealCurrentLocationToGetData) {
            var a = void 0 !== e.poi.base.location.distance ? Math.round(e.poi.base.location.distance) : null, s = void 0;
            a < 1e3 ? s = a + "m" : a >= 1e3 && (s = Math.round(a / 1e3) + "km"), t.info += " · " + s;
        }
        return void 0 !== e.poi.like && (t.like = e.poi.like.count + "位朋友来过"), t.name = e.poi.base.name, 
        t.id = e.poi.base.id, t;
    },
    onPullDownRefresh: function onPullDownRefresh() {
        console.log("page me onPullDownRefresh!"), this.refresh();
    },
    onReachBottom: function onReachBottom() {
        if (1 == this.data.currentTab) {
            if (!this.data.continueFlagImpression) return;
            this.cgiGetImpressionList(SHOULD_APPEND);
        } else if (2 == this.data.currentTab) {
            if (!this.data.continueFlagMark) return;
            this.cgiGetMarkList(SHOULD_APPEND);
        }
    },
    bindTapToPoiDetail: function bindTapToPoiDetail(e) {
        var t = e.currentTarget.dataset.index, o = this.data.markList[t].poi.id, n = appLaunchData.getUserLocation();
        reporter.getReporter(16373).currentPage(reportEnum.enumPageName.USER_PROFILE).prevPage(0).sessionType(0).sessionId(reportSession.getId()).action(reportEnum.enumPoiTagAction.POI_CLICKED).poiId(o).tagId().abtestId().timeStamp2(Math.floor(new Date().getTime() / 1e3)).groupId().longitude(Math.floor(1e6 * n.longitude)).latitude(Math.floor(1e6 * n.latitude)).menuCategoryId("").price("").area("").query("").sortType("").selectCity("").requestId("").prevRequestId("").poiClickedIndex(t + 1).requestIdStr("").lazyReportToServer(), 
        wx.navigateTo({
            url: "/pages/poi_detail/poi_detail?poiId=" + encodeURIComponent(o)
        });
    },
    bindTapGetLists: function bindTapGetLists(e) {
        var t = e.currentTarget.dataset.index;
        this.setData({
            currentTab: t
        }), 1 === t ? (this._reportClickAction(reportEnum.enumProfilePageClickScene.IMPRESSION_TAB), 
        this.createImpressionObserveIntersection()) : (this._reportClickAction(reportEnum.enumProfilePageClickScene.MARK_TAB), 
        this.createPoiObserveIntersection());
    },
    bindtapHeadImg: function bindtapHeadImg(e) {
        var t = e.currentTarget.dataset.url;
        0 == t.indexOf("http") && (wx.previewImage({
            current: t,
            urls: [ t ]
        }), this._reportClickAction(reportEnum.enumProfilePageClickScene.HEADIMG));
    },
    createImpressionObserveIntersection: function createImpressionObserveIntersection() {
        var e = this;
        e.impressionObserver && e.impressionObserver.disconnect();
        var t = wx.createIntersectionObserver(e, {
            thresholds: [ .6 ],
            initialRatio: 0,
            observeAll: !0
        });
        t.relativeToViewport(), t.observe(".impression-cell", function(t) {
            var o = t.dataset.index;
            if (void 0 !== o) {
                var n = e.data.impressionList[o];
                if (n) {
                    var i = "";
                    if (n.comment && n.comment.id && (i = n.comment.id), i && !impressionExposedSet.has(i)) {
                        impressionExposedSet.add(i);
                        var r = util.getImpressionType(n.comment.contact.type), a = n.comment.poiId, s = 0;
                        n && n.comment && n.comment.subCommentCount && (s = n.comment.subCommentCount);
                        var p = reportEnum.enumFeedAction.FEED_EXPOSED, c = "";
                        n.comment.tag && (c = renderDataUtil.getReasonIdString(n.comment.tag)), reporter.getReporter(16483).sessionType(0).sessionId(reportSession.getId()).clickTime(Math.floor(new Date().getTime() / 1e3)).scene().poiId().impressionId().impressionCommentCount(s).isForwardedImpression(0).poiIdString(a).impressionIdString(i).action(p).impressionType(r).requestId().pageId(reportEnum.enumPageName.USER_PROFILE).reasonId().reasonIdString(c).recId().recType(0).lazyReportToServer();
                    }
                }
            }
        }), e.impressionObserver = t;
    },
    onTapBackButton: function onTapBackButton() {
        wx.navigateBack({});
    },
    cgiFollowUser: function cgiFollowUser(e) {
        var t = 0 === e ? 1 : 2, o = this.data.fansCount, n = 0 === e ? o + 1 : o - 1, i = 0 === e ? 1 : 0;
        this.data.userId;
        this.setData({
            followType: i,
            fansCount: n
        }), new cgi.SimpleRequest("followuser", {
            baseRequest: {
                pageId: reportEnum.enumPageName.USER_PROFILE
            },
            type: t,
            userId: this.data.userId
        }).send(function(e) {
            console.log("followuser resp success: ", e);
        }, function(e) {
            console.error("followuser resp failed", e);
        });
    },
    onTapToggleFollowUser: function onTapToggleFollowUser() {
        var e = this;
        console.log("follow", e.data.followType), 1 === e.data.followType ? wx.showModal({
            content: "确定不再关注？",
            cancelText: "取消",
            confirmText: "确认",
            success: function success(t) {
                t.confirm ? (console.log("confirm unfollow"), e.cgiFollowUser(1)) : t.cancel && console.log("cancel unfollow");
            }
        }) : e.cgiFollowUser(0);
    },
    createPoiObserveIntersection: function createPoiObserveIntersection() {
        var e = this;
        e.poiObserver && e.poiObserver.disconnect();
        var t = wx.createIntersectionObserver(e, {
            thresholds: [ 1 ],
            initialRatio: 0,
            observeAll: !0
        });
        t.relativeToViewport(), t.observe(".poi-cell", function(t) {
            var o = t.dataset.index;
            if (void 0 !== o) {
                var n = e.data.markList[o];
                if (n) {
                    var i = n.poi.id || "";
                    if (i && !poiExposedSet.has(i)) {
                        poiExposedSet.add(i);
                        var r = appLaunchData.getUserLocation();
                        reporter.getReporter(16373).currentPage(reportEnum.enumPageName.USER_PROFILE).prevPage(0).sessionType(0).sessionId(reportSession.getId()).action(reportEnum.enumPoiTagAction.POI_EXPOSED).poiId(i).tagId().abtestId().timeStamp2(Math.floor(new Date().getTime() / 1e3)).groupId().longitude(Math.floor(1e6 * r.longitude)).latitude(Math.floor(1e6 * r.latitude)).menuCategoryId("").price("").area("").query("").sortType("").selectCity("").requestId("").prevRequestId("").poiClickedIndex(o + 1).requestIdStr("").lazyReportToServer();
                    }
                }
            }
        }), e.poiObserver = t;
    },
    _getUserGender: function _getUserGender(e) {
        switch (e) {
          case 0:
          case 1:
            return "他";

          case 2:
            return "她";

          default:
            return "他";
        }
    },
    _reportClickAction: function _reportClickAction(e) {
        if (e) {
            var t = "";
            this.mmPrevPage && this.mmPrevPage.mmReportData.pageName && (t = this.mmPrevPage.mmReportData.pageName), 
            reporter.getReporter(17511).prevPageId(t).clickTime(Math.floor(new Date().getTime() / 1e3)).clickScene(e).userId(this.data.userId).reportToServer();
        } else console.error("invalid parameter, clickScene");
    }
});