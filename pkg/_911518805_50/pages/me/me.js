var app = getApp(), cgi = require("../../utils/cgi"), MMPage = require("../../utils/mmFramework/mm_page"), cgiLonglink = require("../../utils/cgi_longlink"), appLaunchData = require("../../utils/appLaunchData"), util = require("../../utils/util"), reportEnum = require("../../utils/reportEnum"), mixinCss = require("../../utils/mixinCss"), reporter = require("../../utils/reporter"), reportSession = require("../../utils/report_session"), renderDataUtil = require("../../utils/render_data_util"), reportPostImpression = require("../../utils/reportPostImpression"), declareBinding = require("../../utils/model_lib/declareBinding"), NumberSchema = require("../../utils/model/model_schema").NumberSchema, singleValueIds = require("../../utils/model/single_value_ids"), SHOULD_REPLACE = 0, SHOULD_APPEND = 1, impressionExposedSet = new Set(), poiExposedSet = new Set();

MMPage({
    mmReportData: {
        pageName: reportEnum.enumPageName.ME
    },
    data: {
        shouldUseFollow: app.shouldUseFollow(),
        menuPositionTop: 0,
        isFirstInit: !0,
        prevTime: "",
        headImgUrl: "",
        nickName: "",
        fansCount: 0,
        followCount: 0,
        markLikeCountTotal: 0,
        impressionList: [],
        markList: [],
        impressionCount: 0,
        markCount: 0,
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
        currentPageId: reportEnum.enumPageName.ME,
        selectedId: "2",
        selectedOptions: [ {
            name: "时间优先",
            id: "2"
        }, {
            name: "距离优先",
            id: "3"
        } ],
        tab2CGIScene: cgi.EnumMMLifeAppGetUserPageSceneDefine.MMLIFEAPP_GET_USER_PAGE_SCENE_MARK
    },
    onLoad: function onLoad(e) {
        var t = this, n = 30;
        if (wx.canIUse("getMenuButtonBoundingClientRect")) {
            var i = wx.getMenuButtonBoundingClientRect();
            "android" === util.getSysInfo().platform && (i.top = i.top / 2, i.top = i.top + 8), 
            n = i.top + 2;
        }
        2 == +e.tabIndex && (t.data.currentTab = 2), this.setData({
            currentTab: t.data.currentTab,
            menuPositionTop: n
        }), app.globalData.pageMe = t, app.addLaunchListener(function() {
            t.setData({
                shouldUseFollow: app.shouldUseFollow()
            }), t.addGlobalFunc(), t.data.useRealCurrentLocationToGetData = appLaunchData.isUsingRealCurrentLocation(), 
            reporter.getReporter(16501).pageId(reportEnum.enumPageName.ME).time(Math.floor(new Date().getTime() / 1e3)).launchScene(reportSession.getLaunchScene()).sessionId(reportSession.getId()).reportToServer();
        });
    },
    onUnload: function onUnload() {
        this.clearGlobalFunc(), this.impressionObserver && this.impressionObserver.disconnect(), 
        this.poiObserver && this.poiObserver.disconnect();
    },
    addGlobalFunc: function addGlobalFunc() {
        var e = this;
        app.addInfoUpdateEventListeners(app.infoUpdateEventKey.me, app.infoUpdateEvent.updateImpressionCommentCount, function(t) {
            if (t && t.impressionId) {
                var n = t.impressionId, i = t.commentCount ? t.commentCount : 0;
                console.log("me, infoUpdateEventListeners, updateImpressionCommentCount, impressionId: " + n);
                for (var o = !1, a = e.data.impressionList, r = 0; r < a.length; r++) {
                    var s = a[r];
                    if (s.comment.id == n) {
                        s.comment.subCommentCount = i, o = !0;
                        break;
                    }
                }
                o && e.setData({
                    impressionList: a
                });
            } else console.error("me, infoUpdateEventListeners, updateImpressionCommentCount, impressionId undefined!");
        }), app.addInfoUpdateEventListeners(app.infoUpdateEventKey.me, app.infoUpdateEvent.addImpression, function(t) {
            console.log("me, infoUpdateEventListeners, addImpression"), e.refresh();
        }), app.addInfoUpdateEventListeners(app.infoUpdateEventKey.me, app.infoUpdateEvent.deleteImpression, function(t) {
            if (t && t.impressionId) {
                var n = t.impressionId;
                console.log("me, infoUpdateEventListeners, deleteImpression, impressionId: " + n);
                for (var i = !1, o = [], a = e.data.impressionCount, r = 0; r < e.data.impressionList.length; r++) {
                    var s = e.data.impressionList[r];
                    s.comment.id != n ? o.push(s) : (i = !0, a--);
                }
                i && (a < 0 && (console.error("current impressionCount is: " + e.data.impressionCount + ", after change impressionCount is: " + a + ", reset to 0"), 
                a = 0), e.setData({
                    impressionCount: a,
                    impressionList: o
                }));
            } else console.error("me, infoUpdateEventListeners, deleteImpression, impressionId undefined!");
        });
    },
    clearGlobalFunc: function clearGlobalFunc() {
        app.removeInfoUpdateEventListeners(app.infoUpdateEventKey.me);
    },
    onShow: function onShow() {
        var e = this;
        e.createPoiObserveIntersection(), e.createImpressionObserveIntersection(), app.addLaunchListener(function() {
            e.data.isFirstInit ? (e.setData({
                headImgUrl: app.globalData.userInfo.headImgUrl,
                nickName: app.globalData.userInfo.nickName,
                unreadMentionCount: cgiLonglink.getUnReadMentionCount(),
                showBottomLoadingView: !0
            }), cgiLonglink.addUnReadMentionCountChangeListener("me", function(t) {
                e.setData({
                    unreadMentionCount: t
                });
            }), e.refresh()) : !e.data.useRealCurrentLocationToGetData && appLaunchData.isUsingRealCurrentLocation() && (console.log("me, onShow, useRealCurrentLocationToGetData change, startPullDownRefresh"), 
            e.refresh());
        });
    },
    refresh: function refresh() {
        var e = this, t = e.data.tab2CGIScene, n = appLaunchData.getUserLocation(), i = appLaunchData.isUsingRealCurrentLocation();
        new cgi.multipleRequest([ new cgi.SimpleRequest("GetUserPage", {
            context: "",
            scene: cgi.EnumMMLifeAppGetUserPageSceneDefine.MMLIFEAPP_GET_USER_PAGE_SCENE_IMPRESSION,
            location: n
        }), new cgi.SimpleRequest("GetUserPage", {
            context: "",
            scene: t,
            location: n
        }) ], function(n) {
            e.data.useRealCurrentLocationToGetData = i, impressionExposedSet.clear(), poiExposedSet.clear(), 
            e.renderImpressionList(SHOULD_REPLACE, n[0]), e.renderMarkList(SHOULD_REPLACE, n[1], t), 
            e.data.isFirstInit && (n[0] && n[0].impression && n[0].impression.length || !n[1] || !n[1].impression || !n[1].impression.length || (e.data.currentTab = 2)), 
            e.setData({
                currentTab: e.data.currentTab,
                isFirstInit: !1,
                isTab1Inited: !0,
                isTab2Inited: !0
            }), e.createPoiObserveIntersection(), wx.stopPullDownRefresh();
        }), new cgi.SimpleRequest("getfanslist", {
            context: ""
        }).send(function(t) {
            e.setData({
                fansCount: t.totalCount || 0
            });
        }), new cgi.SimpleRequest("getfollowuserlist", {
            context: ""
        }).send(function(t) {
            e.setData({
                followCountId: singleValueIds.followCountId,
                followCount: t.totalCount || 0
            }), declareBinding({
                instance: e,
                schema: NumberSchema,
                mapping: {
                    followCountId: "id",
                    followCount: "number"
                }
            });
        });
    },
    cgiGetImpressionList: function cgiGetImpressionList(e) {
        var t = this, n = appLaunchData.getUserLocation();
        e || (t.data.contextImpression = "", t.data.continueFlagImpression = 1), new cgi.SimpleRequest("GetUserPage", {
            context: t.data.contextImpression,
            scene: cgi.EnumMMLifeAppGetUserPageSceneDefine.MMLIFEAPP_GET_USER_PAGE_SCENE_IMPRESSION,
            location: n
        }).ensureNoSameUrlProcessing().send(function(n) {
            t.renderImpressionList(e, n);
        });
    },
    renderImpressionList: function renderImpressionList(e, t) {
        var n = [], i = t.markCount || 0, o = t.likeCount || 0;
        this.setData({
            contextImpression: t.context,
            continueFlagImpression: t.continueFlag,
            markLikeCountTotal: util.formatNumberToTenThousand(i + o) || 0
        }), e || this.setData({
            impressionCount: t.count
        }), (t.impression || []).forEach(function(e) {
            if (e.type == cgi.EnumMMLifeAppPoiImpressionTypeDefine.MMLIFEAPP_POI_IMPRESSION_TYPE_COMMENT) n.push({
                comment: e.comment,
                unqiue: e.comment.id,
                poi: e.poi,
                reportData: {
                    pageId: reportEnum.enumPageName.ME
                }
            }); else if (e.type == cgi.EnumMMLifeAppPoiImpressionTypeDefine.MMLIFEAPP_POI_IMPRESSION_TYPE_PAY_RECOMMEND_POI_IMPRESSION) if (e.payRecommendPoiImpression && e.payRecommendPoiImpression.id) {
                var t = renderDataUtil.convertPayRecommendInfoToImpression(e.payRecommendPoiImpression);
                n.push({
                    comment: t,
                    unqiue: t.id,
                    poi: e.poi,
                    reportData: {
                        pageId: reportEnum.enumPageName.ME
                    }
                });
            } else console.error("GetUserPage CGI, renderImpressionList, type is MMLIFEAPP_POI_IMPRESSION_TYPE_PAY_RECOMMEND_POI_IMPRESSION, but no payRecommendPoiImpression!");
        }), e ? this.setData({
            impressionList: this.data.impressionList.concat(n),
            showBottomLoadingView: !0
        }) : this.setData({
            impressionList: n,
            showBottomLoadingView: !0
        }), this.createImpressionObserveIntersection();
    },
    cgiGetMarkList: function cgiGetMarkList(e) {
        var t = this, n = appLaunchData.getUserLocation();
        e || (t.data.contextMark = "", t.data.continueFlagMark = 1);
        var i = t.data.tab2CGIScene;
        new cgi.SimpleRequest("GetUserPage", {
            context: t.data.contextMark,
            scene: i,
            location: n
        }).ensureNoSameUrlProcessing().send(function(n) {
            t.renderMarkList(e, n, i), t.setData({
                isTab2Inited: !0
            });
        });
    },
    renderMarkList: function renderMarkList(e, t, n) {
        var i = this;
        void 0 === n && (console.error("renderMarkList, cgiRequestScene is undefined"), 
        n = cgi.EnumMMLifeAppGetUserPageSceneDefine.MMLIFEAPP_GET_USER_PAGE_SCENE_MARK), 
        i.setData({
            contextMark: t.context,
            continueFlagMark: t.continueFlag
        });
        var o = [];
        e || (i.data.prevTime = "", i.setData({
            markCount: t.count
        })), (t.impression || []).forEach(function(e) {
            var t = "";
            if (e.createTime) {
                var a = util.formatDate(new Date(1e3 * e.createTime));
                n == cgi.EnumMMLifeAppGetUserPageSceneDefine.MMLIFEAPP_GET_USER_PAGE_SCENE_MARK_DISTANCE ? t = a : n != cgi.EnumMMLifeAppGetUserPageSceneDefine.MMLIFEAPP_GET_USER_PAGE_SCENE_MARK || 0 !== i.data.prevTime.length && i.data.prevTime === a || (i.data.prevTime = a, 
                t = a);
            }
            var r = i.getPoiInfo(e);
            if (e.type == cgi.EnumMMLifeAppPoiImpressionTypeDefine.MMLIFEAPP_POI_IMPRESSION_TYPE_COMMENT) {
                var s = void 0 !== e.comment.info ? JSON.parse(e.comment.info) : "";
                i.data.commentIdPicMap[e.comment.id] = s.pic || [], o.push({
                    poi: r,
                    timestamp: t,
                    thumbUrl: (s.pic || []).map(function(e) {
                        return e.thumbUrl;
                    })
                });
            } else if (e.type == cgi.EnumMMLifeAppPoiImpressionTypeDefine.MMLIFEAPP_POI_IMPRESSION_TYPE_MARK) {
                var p = [];
                void 0 !== e.poi.base.logo ? p.push(e.poi.base.logo.thumbUrl) : p.push("https://res.wx.qq.com/a/fed_upload/e6571a6e-666f-49d2-8292-7766fa530b3a/poi-default.jpg");
                var c = renderDataUtil.getRenderPoiInfo(e.poi);
                o.push({
                    poi: r,
                    normalPoi: c,
                    timestamp: t,
                    thumbUrl: p,
                    statusLabel: e.poi.intro && renderDataUtil.renderErrorBusinessStatusLabel(e.poi.intro)
                });
            }
        }), e ? i.setData({
            markList: i.data.markList.concat(o),
            showBottomLoadingView: !0
        }) : i.setData({
            markList: o,
            showBottomLoadingView: !0
        }), i.createPoiObserveIntersection();
    },
    getPoiInfo: function getPoiInfo(e) {
        var t = {}, n = [];
        t.info = "", e.poi.base.category.forEach(function(e) {
            var t = e.name, i = e.name.lastIndexOf(":");
            -1 != i && (t = t.substring(i + 1, e.name.length)), n.push(t);
        });
        var i = n.join(",");
        if (t.info += i, void 0 !== e.poi.price.price) {
            var o = e.poi.price.price, a = parseInt(o) / 100;
            0 != a && (t.info += " · 人均￥" + a);
        }
        if (e.poi && e.poi.area && e.poi.area[0] && (t.area = e.poi.area[0].name, t.info = t.info + " · " + t.area), 
        this.data.useRealCurrentLocationToGetData) {
            var r = void 0 !== e.poi.base.location.distance ? Math.round(e.poi.base.location.distance) : null, s = void 0;
            r < 1e3 ? s = r + "m" : r >= 1e3 && (s = Math.round(r / 1e3) + "km"), t.info += " · " + s;
        }
        return void 0 !== e.poi.like && (t.like = e.poi.like.count + "位朋友来过"), t.name = e.poi.base.name, 
        t.id = e.poi.base.id, t;
    },
    onPullDownRefresh: function onPullDownRefresh() {
        this.refresh();
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
    bindtapToMention: function bindtapToMention() {
        wx.navigateTo({
            url: "/pages/mention/mention"
        }), this._reportClickAction(reportEnum.enumProfilePageClickScene.MENTION);
    },
    bindTapToPoiDetail: function bindTapToPoiDetail(e) {
        var t = e.currentTarget.dataset.index, n = this.data.markList[t].poi.id, i = appLaunchData.getUserLocation();
        reporter.getReporter(16373).currentPage(reportEnum.enumPageName.ME).prevPage(0).sessionType(0).sessionId(reportSession.getId()).action(reportEnum.enumPoiTagAction.POI_CLICKED).poiId(n).tagId().abtestId().timeStamp2(Math.floor(new Date().getTime() / 1e3)).groupId().longitude(Math.floor(1e6 * i.longitude)).latitude(Math.floor(1e6 * i.latitude)).menuCategoryId("").price("").area("").query("").sortType("").selectCity("").requestId("").prevRequestId("").poiClickedIndex(t + 1).requestIdStr("").lazyReportToServer(), 
        wx.navigateTo({
            url: "/pages/poi_detail/poi_detail?poiId=" + encodeURIComponent(n)
        });
    },
    bindTapToFollowing: function bindTapToFollowing() {
        wx.navigateTo({
            url: "/pages/following/following"
        });
    },
    bindTapToFans: function bindTapToFans() {
        wx.navigateTo({
            url: "/pages/fans/fans"
        });
    },
    deleteLocalCommentItem: function deleteLocalCommentItem(e) {
        var t = this.data.impressionList, n = this.data.impressionCount, i = t[e].comment.id;
        app.notifyInfoUpdateEventListeners(app.infoUpdateEvent.deleteImpression, {
            impressionId: i
        }), t.splice(e, 1), n--, this.setData({
            impressionList: t,
            impressionCount: n
        });
    },
    bindtapDeleteBtn: function bindtapDeleteBtn(e, t, n) {
        var i = this;
        wx.showModal({
            title: "提示",
            content: "要删除这条印象吗？",
            confirmText: "删除",
            success: function success(o) {
                o.confirm ? (console.log("用户点击确定"), util.showLoading(), new cgi.SimpleRequest("delpoicomment", {
                    id: e,
                    commentId: t,
                    scene: 0
                }).send(function(e) {
                    console.log("delpoicomment resp ", JSON.stringify(e)), i.deleteLocalCommentItem(n), 
                    util.hideLoading(), util.toast("印象删除成功");
                }, function(e) {
                    console.log("delpoicomment resp failed", e), util.hideLoading(), util.hint("印象删除失败");
                })) : o.cancel && console.log("用户点击取消");
            }
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
    bindTapAdvice: function bindTapAdvice() {
        wx.navigateTo({
            url: "/pages/app_feedback/app_feedback"
        });
    },
    bindTapRulesDetail: function bindTapRulesDetail() {
        wx.navigateTo({
            url: "/pages/article_webview/article_webview?url=" + encodeURIComponent("https://support.weixin.qq.com/cgi-bin/mmsupport-bin/newreadtemplate?t=page/nearby/policy-nearby-dinning")
        });
    },
    bindtapHeadImg: function bindtapHeadImg(e) {
        var t = e.currentTarget.dataset.url;
        0 == t.indexOf("http") && (wx.previewImage({
            current: t,
            urls: [ t ]
        }), this._reportClickAction(reportEnum.enumProfilePageClickScene.HEADIMG));
    },
    onTapMoreOptions: function onTapMoreOptions(e) {
        var t = this, n = e.detail.index, i = t.data.impressionList[n].comment.id, o = t.data.impressionList[n].comment.poiId;
        wx.showActionSheet({
            itemList: [ "删除" ],
            itemColor: "#000",
            success: function success(e) {
                t.bindtapDeleteBtn(o, i, n);
            }
        });
    },
    bindTapToFeedbackMore: function bindTapToFeedbackMore(e) {
        var t = this;
        wx.showActionSheet({
            itemList: [ "平台规范", "意见反馈" ],
            itemColor: "#000",
            success: function success(e) {
                0 === e.tapIndex ? (t.bindTapRulesDetail(), t._reportClickAction(reportEnum.enumProfilePageClickScene.MORE_RULES)) : (t.bindTapAdvice(), 
                t._reportClickAction(reportEnum.enumProfilePageClickScene.MORE_ADVICE));
            },
            fail: function fail() {
                t._reportClickAction(reportEnum.enumProfilePageClickScene.MORE_CANCEL);
            }
        });
    },
    onTapPost: function onTapPost(e) {
        if (app.getHasLaunched()) {
            var t = {
                startScene: reportEnum.enumPageName.ME,
                lastScene: reportEnum.enumPageName.ME,
                nextPageUrl: "/pages/poi_comment_publish/poi_comment_publish"
            };
            reportPostImpression.startPostImpressionProcess(t);
        }
    },
    onTapBackButton: function onTapBackButton() {
        wx.navigateBack({});
    },
    createImpressionObserveIntersection: function createImpressionObserveIntersection() {
        var e = this;
        e.impressionObserver && e.impressionObserver.disconnect();
        var t = wx.createIntersectionObserver(e, {
            thresholds: [ .6 ],
            initialRatio: 0,
            observeAll: !0
        });
        return t.relativeToViewport(), t.observe(".impression-cell", function(t) {
            var n = t.dataset.index;
            if (void 0 !== n) {
                var i = e.data.impressionList[n];
                if (i) {
                    var o = "";
                    if (i.comment && i.comment.id && (o = i.comment.id), o && !impressionExposedSet.has(o)) {
                        impressionExposedSet.add(o);
                        var a = util.getImpressionType(i.comment.contact.type), r = i.comment.poiId, s = 0;
                        i && i.comment && i.comment.subCommentCount && (s = i.comment.subCommentCount);
                        var p = reportEnum.enumFeedAction.FEED_EXPOSED, c = "";
                        i.comment.tag && (c = renderDataUtil.getReasonIdString(i.comment.tag)), reporter.getReporter(16483).sessionType(0).sessionId(reportSession.getId()).clickTime(Math.floor(new Date().getTime() / 1e3)).scene().poiId().impressionId().impressionCommentCount(s).isForwardedImpression(0).poiIdString(r).impressionIdString(o).action(p).impressionType(a).requestId().pageId(reportEnum.enumPageName.ME).reasonId().reasonIdString(c).recId().recType(0).lazyReportToServer();
                    }
                }
            }
        }), e.impressionObserver = t, t;
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
            var n = t.dataset.index;
            if (void 0 !== n) {
                var i = e.data.markList[n];
                if (i) {
                    var o = i.poi.id || "";
                    if (o && !poiExposedSet.has(o)) {
                        poiExposedSet.add(o);
                        var a = appLaunchData.getUserLocation();
                        reporter.getReporter(16373).currentPage(reportEnum.enumPageName.ME).prevPage(0).sessionType(0).sessionId(reportSession.getId()).action(reportEnum.enumPoiTagAction.POI_EXPOSED).poiId(o).tagId().abtestId().timeStamp2(Math.floor(new Date().getTime() / 1e3)).groupId().longitude(Math.floor(1e6 * a.longitude)).latitude(Math.floor(1e6 * a.latitude)).menuCategoryId("").price("").area("").query("").sortType("").selectCity("").requestId("").prevRequestId("").poiClickedIndex(n + 1).requestIdStr("").lazyReportToServer();
                    }
                }
            }
        }), e.poiObserver = t;
    },
    _reportClickAction: function _reportClickAction(e) {
        if (e) {
            var t = "";
            this.mmPrevPage && this.mmPrevPage.mmReportData.pageName && (t = this.mmPrevPage.mmReportData.pageName), 
            reporter.getReporter(17511).prevPageId(t).clickTime(Math.floor(new Date().getTime() / 1e3)).clickScene(e).userId(this.data.userId).reportToServer();
        } else console.error("invalid parameter, clickScene");
    },
    onSelectDropDownMenu: function onSelectDropDownMenu(e) {
        if (e.detail.id !== this.data.selectedId) {
            var t = parseInt(e.detail.id);
            t != cgi.EnumMMLifeAppGetUserPageSceneDefine.MMLIFEAPP_GET_USER_PAGE_SCENE_MARK && t != cgi.EnumMMLifeAppGetUserPageSceneDefine.MMLIFEAPP_GET_USER_PAGE_SCENE_MARK_DISTANCE && (console.error("invalid newTab2CGIScene: " + t), 
            t = cgi.EnumMMLifeAppGetUserPageSceneDefine.MMLIFEAPP_GET_USER_PAGE_SCENE_MARK), 
            this.setData({
                markList: [],
                continueFlagMark: 1,
                selectedId: e.detail.id,
                isTab2Inited: !1,
                tab2CGIScene: t
            }), this.cgiGetMarkList(SHOULD_REPLACE);
        }
    }
});