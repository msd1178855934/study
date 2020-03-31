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

var app = getApp(), cgi = require("../../utils/cgi"), util = require("../../utils/util"), reporter = require("../../utils/reporter"), reportEnum = require("../../utils/reportEnum"), reportSession = require("../../utils/report_session"), cgiLonglink = require("../../utils/cgi_longlink"), kitchenStorage = require("../../utils/kitchenStorage"), MMPage = require("../../utils/mmFramework/mm_page"), appLaunchData = require("../../utils/appLaunchData"), reportPostImpression = require("../../utils/reportPostImpression"), renderDataUtil = require("../../utils/render_data_util"), impressionSmallContants = require("../../components/impression_small/impression_small_contants"), waterfall = require("./waterfall"), ABTestUtil = require("../../utils/ABTestUtil"), MMLIFEAPP_FEED_INFO_TYPE_NEARBY_POI = 1, MMLIFEAPP_FEED_INFO_TYPE_RANK_LIST = 2, MMLIFEAPP_FEED_INFO_TYPE_HOT_TAG = 3, MMLIFEAPP_FEED_INFO_TYPE_PAY_RECOMMEND_POI = 4, MMLIFEAPP_FEED_INFO_TYPE_ACTIVITY = 5, APPEND = 1, REPLACE = 0, TITLE_TAB_FIND = 0, TITLE_TAB_FR = 1, TAB_FRIEND = 0, TAB_RECOMMEND = 1, TAB_FOLLOW = 2, modLoadingHeight = 80, kv16878StartTime = "", kv16878ImpressionExposedCount = 0, declareBinding = require("../../utils/model_lib/declareBinding"), PoiSchema = require("../../utils/model/model_schema").PoiSchema, CommentSchema = require("../../utils/model/model_schema").CommentSchema, PoiModel = require("../../utils/model/poi_model"), CommentModel = require("../../utils/model/comment_model"), ContactSchema = require("../../utils/model/model_schema").ContactSchema, enumRecommendVisitInfoType = {
    impression: 1,
    topic: 2
};

MMPage(_defineProperty({
    data: {
        unreadImpressionCount: 0,
        headerHeight: 0,
        scrollViewHeight: 0,
        isFirstInit: !0,
        impressionDataList: [],
        context: "",
        continueFlag: 1,
        userInfo: {},
        shouldShowNormalPostButton: 1,
        shouldShowBottomLoadingFriend: !0,
        contextRecommend: "",
        continueFlagRecommend: 1,
        waterfallCol1: [],
        waterfallCol2: [],
        shouldShowBottomLoadingRecommend: !0,
        shouldUseFollow: !1,
        contextFollow: "",
        continueFlagFollow: 1,
        waterfallCol1Follow: [],
        waterfallCol2Follow: [],
        impressionDataListFollow2: [],
        shouldShowBottomLoadingFollow: !0,
        friendTalkAboutList: [],
        currentPageId: reportEnum.enumPageName.TIMELINE,
        hotTopicTips: [],
        nearbyPoiCount: 0,
        nearbyText: "",
        currentAreaName: "",
        isFristGetData: !0,
        hasDelOpOnImprList: 0,
        hasExecutedFirstPullDownRefresh: !1,
        payRecommendPoiInfoList: [],
        canNavigateToTimelineAll: !1,
        currentTab: TAB_RECOMMEND,
        currentTitleTab: TITLE_TAB_FIND,
        lastFollowImprPreloadIndex: -1,
        lastRecommendImprPreloadIndex: -1,
        lastFriendsImpressionPreloadIndex: -1,
        isFriendTimelineInited: !1
    },
    impressionDataListRecommend: [],
    impressionDataListFollow: [],
    mmReportData: {
        pageName: reportEnum.enumPageName.TIMELINE,
        pageRequestId: 0
    },
    onLoad: function onLoad(e) {
        var t = this;
        app.globalData.pageFriendsTimeline = t, "reLaunchFromComment" == e.reLaunchFrom && t.setData({
            reLaunchFromComment: 1,
            currentTitleTab: TITLE_TAB_FR,
            currentTab: TAB_FRIEND
        });
        var n = 0;
        if (wx.canIUse("getMenuButtonBoundingClientRect")) {
            var o = wx.getMenuButtonBoundingClientRect();
            "android" === util.getSysInfo().platform && (o.top = o.top / 2, o.top = o.top + 8), 
            n = o.top + 2;
        } else n = 30;
        var i = n + util.rpx2px(64) - 1;
        t.setData({
            titleTabHeight: i,
            menuPositionTop: n,
            findPoiProps: {
                filtersTop: i,
                pageName: reportEnum.enumPageName.TIMELINE,
                scene: reportEnum.enumSceneType.FIND_POI
            }
        }, function() {
            var e = wx.createSelectorQuery();
            e.select(".js-nav-wrapper").boundingClientRect(), e.select(".js-find-poi").boundingClientRect(), 
            e.exec(function(e) {
                t.findPoi_scrollTop4FilterSticky = e[1].top - e[0].bottom, t.findPoi_filterPanelFixedTop = e[0].height + util.rpx2px(72) - 2, 
                i = e[0].height, t.setData({
                    titleTabHeight: i,
                    findPoiProps: {
                        filtersTop: i
                    }
                });
                var n = wx.getSystemInfoSync().screenHeight - i, o = n - util.rpx2px(110);
                t.setData({
                    visibleTitleTabContentHeight: n,
                    scrollViewHeight: o
                });
            });
        }), app.addLaunchListener(function() {
            t.setData({
                shouldUseFollow: !1
            }), reportPostImpression.requestAllTopicList(), wx.hideNavigationBarLoading(), t.updateNavigationBarTitle(), 
            t.setData({
                hasLaunch: !0,
                userInfo: app.globalData.userInfo || {}
            });
            var e, n = (e = {
                getUnreadMentionCount: 0,
                getUnreadImpressionCount: 0
            }, function(n) {
                if (e[n] = 1, Object.keys(e).every(function(t) {
                    return e[t];
                })) {
                    var o = function o(e) {
                        t.data.unreadImpressionCount ? t.setData({
                            mainTab: e,
                            currentTitleTab: TITLE_TAB_FR,
                            currentTab: TAB_FRIEND
                        }) : t.data.unreadMentionCount ? t.setData({
                            mainTab: e,
                            currentTitleTab: TITLE_TAB_FR,
                            currentTab: TAB_RECOMMEND
                        }) : 1 == e ? t.setData({
                            mainTab: e,
                            currentTitleTab: TITLE_TAB_FR,
                            currentTab: TAB_RECOMMEND
                        }) : t.setData({
                            mainTab: e,
                            currentTitleTab: TITLE_TAB_FIND,
                            currentTab: TAB_RECOMMEND
                        });
                    };
                    wx.getABTestConfig ? util.listeneToOneTimeEvent("ABTestUtil_getMainTab", function(e) {
                        console.log("ABTestUtil_getMainTab=" + e), o(e);
                    }) : o(0);
                }
            });
            new cgi.SimpleRequest("GetUnReadMentionCount", {}).send(function(e) {
                var o = e.count;
                t.setData({
                    unreadMentionCount: o
                }), n("getUnreadMentionCount"), cgiLonglink.addOpenWebSocketCb(function() {
                    cgiLonglink.syncMention();
                }), cgiLonglink.openWebSocket();
            }), new cgi.SimpleRequest("GetUnReadMentionCount", {
                type: 1
            }).send(function(e) {
                t.setData({
                    unreadImpressionCount: e.count
                }), n("getUnreadImpressionCount"), e.count > 0 && (t.setData({
                    shouldShowNewFriendImprBar: 1
                }), t.reportTopRegionAction(reportEnum.enumIndexTopRegionAction.TAB_FR_EXPOSED_RED), 
                setTimeout(function() {
                    t.setData({
                        shouldHideBar: 1
                    }), wx.nextTick(function() {
                        setTimeout(function() {
                            t.setData({
                                shouldShowNewFriendImprBar: 0,
                                shouldHideBar: 0
                            });
                        }, 3e3);
                    });
                }, 3e3));
            }), cgiLonglink.addUnReadMentionCountChangeListener("tab", function(e, n) {
                t.setData({
                    unreadMentionCount: e,
                    unreadMentionCountSeq: n
                });
            }), t.addGlobalFunc(), t.waterfall = waterfall.createWaterfall(t, "waterfallCol1", "waterfallCol2"), 
            t.waterfallFollow = waterfall.createWaterfall(t, "waterfallCol1Follow", "waterfallCol2Follow");
        }), app.isPreOpen() || this.tryFirstPullDownRefresh();
    },
    onUnload: function onUnload() {
        this.clearGlobalFunc(), this.friendObserver && this.friendObserver.disconnect(), 
        this.recommendObserver && this.recommendObserver.disconnect(), this.topicObserver && this.topicObserver.disconnect(), 
        this.followObserver && this.followObserver.disconnect(), kv16878ImpressionExposedCount = 0;
    },
    onHide: function onHide() {
        this.kvReport16878TimeString(), kv16878ImpressionExposedCount = 0;
    },
    onShow: function onShow(e) {
        app.getHasLaunched() && this.updateNavigationBarTitle();
        var t = this;
        app.addLaunchListener(function() {
            console.log("timeline, onShow, launched"), t.tryFirstPullDownRefresh(), kv16878StartTime = Math.floor(new Date().getTime() / 1e3), 
            reporter.getReporter(16501).pageId(reportEnum.enumPageName.TIMELINE).time(Math.floor(new Date().getTime() / 1e3)).launchScene(reportSession.getLaunchScene()).sessionId(reportSession.getId()).reportToServer(), 
            t.friendObserver && t.friendObserver.disconnect(), t.friendObserver = t.createObserveIntersection(TAB_FRIEND), 
            t.recommendObserver && t.recommendObserver.disconnect(), t.recommendObserver = t.createObserveIntersection(TAB_RECOMMEND), 
            t.topicObserver && t.topicObserver.disconnect(), t.topicObserver = t.createObserveIntersection4Topic(), 
            t.followObserver && t.followObserver.disconnect(), t.followObserver = t.createObserveIntersection(TAB_FOLLOW);
        });
    },
    updateNavigationBarTitle: function updateNavigationBarTitle() {
        var e = appLaunchData.getSelectedAreaId();
        e && e.length ? wx.setNavigationBarTitle({
            title: "附近的餐厅·广州"
        }) : wx.setNavigationBarTitle({
            title: "附近的餐厅"
        }), kitchenStorage.getShouldUseGreyServer() && (e && e.length ? wx.setNavigationBarTitle({
            title: "附近的餐厅·广州(测试环境)"
        }) : wx.setNavigationBarTitle({
            title: "附近的餐厅(测试环境)"
        }));
    },
    stopPullDownRefresh: function stopPullDownRefresh() {
        this.beforeStopPullDownRefresh(), wx.stopPullDownRefresh();
    },
    beforeStopPullDownRefresh: function beforeStopPullDownRefresh() {
        this.setData({
            shouldShowPullDownRefreshHint: !1
        });
    },
    onPullDownRefresh: function onPullDownRefresh() {
        var e = this;
        if (e.setData({
            shouldShowPullDownRefreshHint: !0
        }), app.getHasLaunched()) app.checkAndUpdateUserCurrentLocation(), e.refresh(), 
        e.stopPullDownRefreshFinally(); else {
            var t = app.addLaunchListener(function() {
                e.refresh();
            });
            setTimeout(function() {
                app.getHasLaunched() || (app.removeLaunchListener(t), wx.showToast({
                    title: "网络缓慢，请稍后再试",
                    icon: "none",
                    duration: 5e3
                }), e.stopPullDownRefresh());
            }, 5e3);
        }
    },
    stopPullDownRefreshFinally: util.debounce(function() {
        wx.stopPullDownRefresh();
    }, 3e3),
    onPageScroll2: util.debounce(function(e) {
        this.waterfall.recycle(e.scrollTop);
    }, 50),
    onPageScroll1: util.debounce(function(e) {
        this.scrollTop = e.scrollTop;
    }, 10),
    scrollTop: 0,
    onPageScroll: function onPageScroll(e) {
        this.onPageScroll1(e);
    },
    refresh: function refresh() {
        app.getHasLaunched() && (this.data.hasLaunch ? this.data.isFirstInit ? (this.selectComponent("#findPoi").getDetailPoiList(), 
        this.getFeedList(), this.getRecommendTimelineRequest(REPLACE), this.getFriendsTimelineRequest(), 
        this.setData({
            isFirstInit: !1
        })) : TITLE_TAB_FIND == this.data.currentTitleTab ? this.selectComponent("#findPoi").getDetailPoiList() : TITLE_TAB_FR == this.data.currentTitleTab && (TAB_RECOMMEND == this.data.currentTab ? (this.getFeedList(), 
        this.getRecommendTimelineRequest(REPLACE)) : TAB_FRIEND == this.data.currentTab ? this.getFriendsTimelineRequest() : TAB_FOLLOW == this.data.currentTab && this.getFollowTimelineRequest(REPLACE)) : this.stopPullDownRefresh());
    },
    tryFirstPullDownRefresh: function tryFirstPullDownRefresh() {
        this.data.hasExecutedFirstPullDownRefresh ? console.log("tryFirstPullDownRefresh, hasExecutedFirstPullDownRefresh, return") : (console.log("tryFirstPullDownRefresh, startPullDownRefresh"), 
        this.data.hasExecutedFirstPullDownRefresh = !0, this.onPullDownRefresh());
    },
    getFriendsTimelineRequest: function getFriendsTimelineRequest(e) {
        var t = this;
        if (app.getHasLaunched()) {
            var n = appLaunchData.getUserLocation();
            new cgi.SimpleRequest("GetPoiList", {
                location: n,
                options: {
                    entryType: 1,
                    sortType: 2
                }
            }).send(function(e) {
                if (e.poi && e.poi.length) {
                    var n = renderDataUtil.getRenderPoiInfoList(e.poi), o = 0;
                    n && n.length && (o = n.length), t.setData({
                        friendTalkAboutList: n.slice(0, 3),
                        friendTalkAboutListLen: o
                    }), t.data.currentTitleTab == TITLE_TAB_FIND ? t.data.friendTalkAboutList && t.data.friendTalkAboutListLen >= 5 && t.reportTopRegionAction(reportEnum.enumIndexTopRegionAction.TAB_FIND_FRIEND_TALK_ABOUT_EXPOSED) : t.data.currentTitleTab == TITLE_TAB_FR && t.data.currentTab == TAB_FRIEND && t.data.friendTalkAboutList && t.data.friendTalkAboutListLen >= 5 && t.reportTopRegionAction(reportEnum.enumIndexTopRegionAction.FRIEND_TALK_ABOUT_EXPOSED);
                }
            });
            var o = util.uuid();
            new cgi.SimpleRequest("getfriendvisitpage", {
                location: n,
                context: "",
                requestId: o,
                newOnly: 0
            }).ensureNoSameUrlProcessing().send(function(e) {
                if (t.data.currentTab === TAB_FRIEND && t.stopPullDownRefresh(), e.info && e.info.length) {
                    var n = [];
                    e.info.forEach(function(e) {
                        if (e.type == cgi.EnumMMLifeAppFriendVisitInfoTypeDefine.MMLIFEAPP_FRIEND_VISIT_INFO_TYPE_COMMENT) n.push({
                            comment: e.comment,
                            unqiue: e.comment.id,
                            visitId: e.visitId,
                            poi: e.poi,
                            reportData: {
                                scene: reportEnum.enumSceneType.TIMELINE,
                                pageId: reportEnum.enumPageName.TIMELINE,
                                requestId: o,
                                recId: e.comment && e.comment.recId ? e.comment.recId : "",
                                recType: e.comment && e.comment.recType ? e.comment.recType : 0
                            }
                        }); else if (e.type == cgi.EnumMMLifeAppFriendVisitInfoTypeDefine.MMLIFEAPP_FRIEND_VISIT_INFO_TYPE_MARK) n.push({
                            comment: e.mark.referComment,
                            unqiue: e.mark.referComment.id,
                            visitId: e.visitId,
                            poi: e.poi,
                            markInfo: {
                                contact: e.mark.contact,
                                friendMarkCount: e.mark.friendMarkCount
                            },
                            reportData: {
                                scene: reportEnum.enumSceneType.TIMELINE,
                                pageId: reportEnum.enumPageName.TIMELINE,
                                requestId: o,
                                recId: e.mark.referComment && e.mark.referComment.recId ? e.mark.referComment.recId : "",
                                recType: e.mark.referComment && e.mark.referComment.recType ? e.mark.referComment.recType : 0
                            }
                        }); else if (e.type == cgi.EnumMMLifeAppFriendVisitInfoTypeDefine.MMLIFEAPP_FRIEND_VISIT_INFO_TYPE_PAY_RECOMMEND_POI_IMPRESSION) if (e.payRecommendPoiImpression && e.payRecommendPoiImpression.id) {
                            var t = renderDataUtil.convertPayRecommendInfoToImpression(e.payRecommendPoiImpression);
                            n.push({
                                comment: t,
                                unqiue: t.id,
                                visitId: e.visitId,
                                poi: e.poi,
                                reportData: {
                                    scene: reportEnum.enumSceneType.TIMELINE,
                                    pageId: reportEnum.enumPageName.TIMELINE,
                                    requestId: o,
                                    recId: "",
                                    recType: 0
                                }
                            });
                        } else console.error("getfriendvisitpage CGI, type is MMLIFEAPP_FRIEND_VISIT_INFO_TYPE_PAY_RECOMMEND_POI_IMPRESSION, but no payRecommendPoiImpression!");
                    }), t.setData({
                        impressionDataList: n,
                        context: e.context,
                        continueFlag: e.continueFlag
                    });
                } else t.setData({
                    impressionDataList: [],
                    context: "",
                    continueFlag: 0,
                    userInfo: app.globalData.userInfo
                });
                t.setData({
                    isFriendTimelineInited: !0
                }), t.setData({
                    shouldShowBottomLoadingFriend: !!t.data.continueFlag
                }), t.updateNormalPostButtonAppearanceForTabStyle();
            }, function(e) {
                t.data.currentTab === TAB_FRIEND && t.stopPullDownRefresh(), t.updateNormalPostButtonAppearanceForTabStyle();
            }), t.friendObserver && t.friendObserver.disconnect(), t.data.lastFriendsImpressionPreloadIndex = -1, 
            t.friendObserver = t.createObserveIntersection(TAB_FRIEND);
        }
    },
    getFriendsTimelineRequestNextPage: function getFriendsTimelineRequestNextPage() {
        if (app.getHasLaunched()) {
            var e = this, t = appLaunchData.getUserLocation(), n = util.uuid();
            new cgi.SimpleRequest("getfriendvisitpage", {
                location: t,
                context: e.data.context,
                requestId: n
            }).ensureNoSameUrlProcessing().send(function(t) {
                if (t.info && t.info.length) {
                    var o = [];
                    t.info.forEach(function(e) {
                        if (e.type == cgi.EnumMMLifeAppFriendVisitInfoTypeDefine.MMLIFEAPP_FRIEND_VISIT_INFO_TYPE_COMMENT) o.push({
                            comment: e.comment,
                            unqiue: e.comment.id,
                            visitId: e.visitId,
                            poi: e.poi,
                            reportData: {
                                scene: reportEnum.enumSceneType.TIMELINE,
                                pageId: reportEnum.enumPageName.TIMELINE,
                                requestId: n,
                                recId: e.comment && e.comment.recId ? e.comment.recId : "",
                                recType: e.comment && e.comment.recType ? e.comment.recType : 0
                            }
                        }); else if (e.type == cgi.EnumMMLifeAppFriendVisitInfoTypeDefine.MMLIFEAPP_FRIEND_VISIT_INFO_TYPE_MARK) o.push({
                            comment: e.mark.referComment,
                            unqiue: e.mark.referComment.id,
                            visitId: e.visitId,
                            poi: e.poi,
                            markInfo: {
                                contact: e.mark.contact,
                                friendMarkCount: e.mark.friendMarkCount
                            },
                            reportData: {
                                scene: reportEnum.enumSceneType.TIMELINE,
                                pageId: reportEnum.enumPageName.TIMELINE,
                                requestId: n,
                                recId: e.mark.referComment && e.mark.referComment.recId ? e.mark.referComment.recId : "",
                                recType: e.mark.referComment && e.mark.referComment.recType ? e.mark.referComment.recType : 0
                            }
                        }); else if (e.type == cgi.EnumMMLifeAppFriendVisitInfoTypeDefine.MMLIFEAPP_FRIEND_VISIT_INFO_TYPE_PAY_RECOMMEND_POI_IMPRESSION) if (e.payRecommendPoiImpression && e.payRecommendPoiImpression.id) {
                            var t = renderDataUtil.convertPayRecommendInfoToImpression(e.payRecommendPoiImpression);
                            o.push({
                                comment: t,
                                unqiue: t.id,
                                visitId: e.visitId,
                                poi: e.poi,
                                reportData: {
                                    scene: reportEnum.enumSceneType.TIMELINE,
                                    pageId: reportEnum.enumPageName.TIMELINE,
                                    requestId: n,
                                    recId: "",
                                    recType: 0
                                }
                            });
                        } else console.error("getfriendvisitpage CGI, type is MMLIFEAPP_FRIEND_VISIT_INFO_TYPE_PAY_RECOMMEND_POI_IMPRESSION, but no payRecommendPoiImpression!");
                    });
                    for (var i = e.data.impressionDataList, a = o, r = {}, s = i.length; s < i.length + a.length; s++) {
                        r["impressionDataList[" + s + "]"] = o[s - i.length];
                    }
                    e.setData(r), e.friendObserver && e.friendObserver.disconnect(), e.friendObserver = e.createObserveIntersection(TAB_FRIEND);
                }
                e.data.context = t.context, e.data.continueFlag = t.continueFlag, e.setData({
                    shouldShowBottomLoadingFriend: !!e.data.continueFlag
                }), e.updateNormalPostButtonAppearanceForTabStyle();
            });
        }
    },
    getRecommendTimelineRequest: function getRecommendTimelineRequest(e) {
        if (app.getHasLaunched()) {
            var t = this;
            t.data.isFristGetData && (app.globalData.appLaunchReportData.firstGetFriendsTimelineStartTime = new Date().getTime()), 
            e || (t.data.contextRecommend = "", t.data.continueFlagRecommend = 1);
            var n = appLaunchData.isUsingRealCurrentLocation(), o = appLaunchData.getUserLocation(), i = util.uuid();
            new cgi.SimpleRequest("GetRecommendVisitPage", {
                location: o,
                context: t.data.contextRecommend,
                requestId: i
            }).ensureNoSameUrlProcessing().send(function(o) {
                if (e == REPLACE && t.data.currentTab == TAB_RECOMMEND && t.stopPullDownRefresh(), 
                t.data.isFristGetData && t.checkAndReportAppLaunchData(), t.data.contextRecommend = o.context, 
                t.data.continueFlagRecommend = o.continueFlag, t.data.currentTab == TAB_RECOMMEND) {
                    var a = !0;
                    t.data.continueFlagRecommend || (a = !1), t.setData({
                        shouldShowBottomLoadingRecommend: a
                    });
                }
                if (o.info && o.info.length) {
                    var r = [];
                    if (o.info.forEach(function(e) {
                        var t = e.type;
                        if (enumRecommendVisitInfoType.impression == t) {
                            var o = e.impression, a = e.poi;
                            r.push({
                                unqiue: o.id,
                                type: enumRecommendVisitInfoType.impression,
                                comment: Object.assign(o, {
                                    createTime: "",
                                    contact: Object.assign(o.contact, {
                                        isFriendsLabelOnNameShown: 1 === o.contact.type
                                    })
                                }),
                                poi: a,
                                isUsingRealCurrentLocation: n,
                                reportData: {
                                    scene: reportEnum.enumSceneType.TIMELINE_RECOMMEND,
                                    pageId: reportEnum.enumPageName.TIMELINE,
                                    requestId: i,
                                    recId: o && o.recId ? o.recId : "",
                                    recType: o && o.recType ? o.recType : 0
                                }
                            });
                        } else if (enumRecommendVisitInfoType.topic == t) {
                            var s = e.topic;
                            r.push({
                                unqiue: s.id,
                                type: enumRecommendVisitInfoType.topic,
                                width: impressionSmallContants.width,
                                height: 248 * impressionSmallContants.width / 178,
                                topic: s
                            });
                        }
                    }), e) t.waterfall.append(r), t.impressionDataListRecommend = t.impressionDataListRecommend.concat(r); else {
                        var s = r.slice();
                        t.waterfall.replace(s), t.impressionDataListRecommend = r;
                    }
                    t.recommendObserver && t.recommendObserver.disconnect(), e || (t.data.lastRecommendImprPreloadIndex = -1), 
                    t.recommendObserver = t.createObserveIntersection(TAB_RECOMMEND), e || (t.exposedTopics = {}), 
                    t.topicObserver && t.topicObserver.disconnect(), t.topicObserver = t.createObserveIntersection4Topic();
                }
                t.data.isFristGetData && app.checkAndShowModifyUserLocationTip(), t.data.isFristGetData = !1, 
                t.updateNormalPostButtonAppearanceForTabStyle();
            }, function(n) {
                e == REPLACE && t.data.currentTab == TAB_RECOMMEND && t.stopPullDownRefresh(), t.data.isFristGetData && (t.checkAndReportAppLaunchData(), 
                app.checkAndShowModifyUserLocationTip()), t.data.isFristGetData = !1, t.updateNormalPostButtonAppearanceForTabStyle();
            });
        }
    },
    shouldUseWaterfallFollow: !0,
    getFollowTimelineRequest: function getFollowTimelineRequest(e) {},
    onReachBottom: function onReachBottom() {
        app.getHasLaunched() && (this.data.currentTitleTab == TITLE_TAB_FIND ? this.selectComponent("#findPoi").onReachBottom() : this.data.currentTitleTab == TITLE_TAB_FR && (this.data.currentTab == TAB_FRIEND ? this.data.continueFlag && this.getFriendsTimelineRequestNextPage() : this.data.currentTab == TAB_RECOMMEND ? this.data.continueFlagRecommend && this.getRecommendTimelineRequest(APPEND) : this.data.currentTab == TAB_FOLLOW && this.data.continueFlagFollow && this.getFollowTimelineRequest(APPEND)));
    },
    onTapPost: function onTapPost(e) {
        if (app.getHasLaunched()) {
            var t = {
                startScene: reportEnum.enumPageName.TIMELINE,
                lastScene: reportEnum.enumPageName.TIMELINE,
                nextPageUrl: "/pages/poi_comment_publish/poi_comment_publish"
            };
            reportPostImpression.startPostImpressionProcess(t);
        }
    },
    checkAndReportAppLaunchData: function checkAndReportAppLaunchData() {
        if (app.getHasLaunched() && !(app.globalData.appLaunchSessionId <= 0)) {
            var e = new Date().getTime();
            app.globalData.appLaunchReportData.getFriendsTimelineTime = e - app.globalData.appLaunchReportData.firstGetFriendsTimelineStartTime, 
            app.globalData.appLaunchReportData.totalTimeCost = e - app.globalData.appLaunchReportData.appLaunchStartTime, 
            app.reportAppLaunchTimeCost();
        }
    },
    bindtapIndexSearch: function bindtapIndexSearch() {
        console.log("tapIndexSearch"), this.reportTopRegionAction(reportEnum.enumIndexTopRegionAction.SEARCH_CLIKED), 
        wx.navigateTo({
            url: "/pages/search_index/search_index"
        });
    },
    bindTapToMePage: function bindTapToMePage() {
        wx.navigateTo({
            url: "/pages/me/me"
        });
    },
    bindtapToMention: function bindtapToMention() {
        app.getHasLaunched() && wx.navigateTo({
            url: "/pages/mention/mention?unreadMentionCountSeq=" + (this.data.unreadMentionCountSeq || 0)
        });
    },
    onTapHotTopicTip: function onTapHotTopicTip(e) {
        console.log("onTapHotTopicTip: ", +e);
        var t = e.currentTarget.dataset.index;
        if (void 0 !== t) {
            var n = this.data.hotTopicTips[t];
            n ? (this.reportTopRegionAction(reportEnum.enumIndexTopRegionAction.HOT_TOPIC_CLICKED, n.id), 
            wx.navigateTo({
                url: "/pages/index_tag/index_tag?name=" + encodeURIComponent(n.name) + "&feedId=" + n.id
            })) : console.error("onTapHotTopicTip, invalid index: " + t);
        } else console.error("onTapHotTopicTip, index is undefined, return");
    },
    getFeedList: function getFeedList(e) {
        console.log("check getFeedList");
        var t = this;
        appLaunchData.addConfirmUserLocationListener(function() {
            console.log("start getFeedList");
            var n = appLaunchData.isUsingRealCurrentLocation(), o = appLaunchData.getUserLocation();
            new cgi.SimpleRequest("getfeedlist", {
                location: o
            }).ensureNoSameUrlProcessing().send(function(o) {
                if (e && e(), console.log("getFeedList, OK"), o.feed && o.feed.length) {
                    for (var i = t.data.hotTopicTips, a = t.data.nearbyPoiCount, r = t.data.currentAreaName, s = t.data.payRecommendPoiInfoList, c = "", p = 0; p < o.feed.length; p++) {
                        var d = o.feed[p];
                        if (d.type == MMLIFEAPP_FEED_INFO_TYPE_NEARBY_POI) {
                            if (!n) {
                                console.log("getFeedList response, feedItem.type is 1, not using real location, ignore");
                                continue;
                            }
                            if (!d.nearbyPoiFeed) {
                                console.error("getFeedList response, feedItem.type is 1 but no nearbyPoiFeed");
                                continue;
                            }
                            d.nearbyPoiFeed.poiCount && (a = parseInt(d.nearbyPoiFeed.poiCount)), c = d.nearbyPoiFeed.selfMarkCount ? "有" + d.nearbyPoiFeed.selfMarkCount + "家想去" : d.nearbyPoiFeed.friendVisitCount ? "朋友去过" + d.nearbyPoiFeed.friendVisitCount + "家" : d.nearbyPoiFeed.friendMarkCount ? "朋友想去" + d.nearbyPoiFeed.friendMarkCount + "家" : "有" + a + "家餐厅";
                        } else if (d.type == MMLIFEAPP_FEED_INFO_TYPE_RANK_LIST) {
                            if (!d.rankListFeed) {
                                console.error("getFeedList response, feedItem.type is 2 but no rankListFeed");
                                continue;
                            }
                            if (n) {
                                if (!d.rankListFeed.currentArea) {
                                    console.error("getFeedList response, feedItem.type is 2 but no rankListFeed.currentArea");
                                    continue;
                                }
                                if (!d.rankListFeed.currentArea.id || !d.rankListFeed.currentArea.name) {
                                    console.error("getFeedList response, feedItem.type is 2, invalid currentArea: " + JSON.stringify(d.rankListFeed.currentArea));
                                    continue;
                                }
                                var m = {
                                    id: d.rankListFeed.currentArea.id,
                                    name: d.rankListFeed.currentArea.name
                                };
                                appLaunchData.setCurrentArea(m), r = d.rankListFeed.currentArea.name;
                            }
                            if (!d.rankListFeed.allRankArea || !d.rankListFeed.allRankArea.length) {
                                console.error("getFeedList response, feedItem.type is 2 but no rankListFeed.allRankArea");
                                continue;
                            }
                            for (var l = [], u = 0; u < d.rankListFeed.allRankArea.length; u++) {
                                var T = d.rankListFeed.allRankArea[u];
                                if (T.id && T.name) {
                                    var I = {
                                        id: T.id,
                                        name: T.name
                                    };
                                    l.push(I);
                                } else console.error("getFeedList response, feedItem.type is 2, invalid rankAreaItem in allRankArea, rankAreaIndex is: " + u);
                            }
                            appLaunchData.setAllRankArea(l), appLaunchData.setAllRankCategory(d.rankListFeed.allRankCategory);
                        } else if (d.type == MMLIFEAPP_FEED_INFO_TYPE_HOT_TAG) ; else if (d.type == MMLIFEAPP_FEED_INFO_TYPE_PAY_RECOMMEND_POI) {
                            if (!d.payRecommendPoiFeed || !d.payRecommendPoiFeed.poi || !d.payRecommendPoiFeed.poi.length) {
                                console.error("getFeedList response, feedItem.type is 4 but no payRecommendPoiFeed.poi data");
                                continue;
                            }
                            s = [];
                            for (var f = 0; f < d.payRecommendPoiFeed.poi.length; f++) {
                                var g = d.payRecommendPoiFeed.poi[f], h = renderDataUtil.getPoiInfoForPostImpression(g);
                                h && h.id ? s.push(h) : console.error("cannot get valid payRecommendPoiInfo");
                            }
                        } else console.error("invalid feedItem.type: " + d.type);
                    }
                    t.setData({
                        hotTopicTips: i,
                        nearbyPoiCount: a,
                        nearbyText: c,
                        currentAreaName: r,
                        payRecommendPoiInfoList: s
                    }), util.notifyOneTimeEvent("event_timeline_js_getFeedList");
                } else console.error("no data at feed from getFeedList response");
            }, function(e) {
                util.notifyOneTimeEvent("event_timeline_js_getFeedList"), console.error("getFeedList, error: " + JSON.stringify(e));
            });
        });
    },
    onTapFriendTalkAbout: function onTapFriendTalkAbout() {
        console.log("tapNearbyPoi"), this.reportTopRegionAction(reportEnum.enumIndexTopRegionAction.NEARBY_POI_CLICKED);
        var e = this.data.nearbyPoiCount ? "找餐厅" : "广州的美食", t = "/pages/index_tag2/index_tag2?name=" + encodeURIComponent(e) + "&feedId=0&nearcount=" + this.data.nearbyPoiCount;
        wx.navigateTo({
            url: t
        });
    },
    onTapRankList: function onTapRankList() {
        console.log("tapRankList"), this.reportTopRegionAction(reportEnum.enumIndexTopRegionAction.RANK_LIST_CLICKED), 
        wx.navigateTo({
            url: "/pages/rank_list_new/rank_list_new"
        });
    },
    onTapRecommendPoi: function onTapRecommendPoi() {
        this.reportTopRegionAction(reportEnum.enumIndexTopRegionAction.RECOMMEND_POI_CLICK), 
        wx.navigateTo({
            url: "/pages/recommend_poi/recommend_poi"
        });
    },
    addGlobalFunc: function addGlobalFunc() {
        var e = this;
        app.addInfoUpdateEventListeners(app.infoUpdateEventKey.timeline, app.infoUpdateEvent.updateImpressionCommentCount, function(t) {
            if (t && t.impressionId) {
                var n = t.impressionId, o = t.commentCount ? t.commentCount : 0;
                console.log("timeline, infoUpdateEventListeners, updateImpressionCommentCount");
                for (var i = e.data.impressionDataList, a = 0; a < i.length; a++) {
                    var r = i[a];
                    if (r.unqiue == n) {
                        if (r.comment) {
                            r.comment.subCommentCount = o, console.log("timeline, infoUpdateEventListeners, updateImpressionCommentCount: " + o + ", index: " + a);
                            var s = new PoiModel(r.poi.base.id).getValue(), c = new CommentModel(n).getValue();
                            s && void 0 !== s.isMark && (r.poi.ugc.isMark = s.isMark), c && void 0 !== c.isLike && void 0 !== c.likeCount && (r.comment.isLike = c.isLike, 
                            r.comment.likeCount = c.likeCount), e.setData(_defineProperty({}, "impressionDataList[" + a + "]", r));
                            break;
                        }
                        console.error("timeline, timelineItem.comment undefined!");
                        break;
                    }
                }
            } else console.error("timeline, infoUpdateEventListeners, updateImpressionCommentCount, impressionId undefined!");
        }), app.addInfoUpdateEventListeners(app.infoUpdateEventKey.timeline, app.infoUpdateEvent.addImpression, function(t) {
            console.log("timeline, infoUpdateEventListeners, addImpression, infoObject: " + JSON.stringify(t)), 
            t && t.shouldUpdateTimelineManually && e.refresh();
        }), app.addInfoUpdateEventListeners(app.infoUpdateEventKey.timeline, app.infoUpdateEvent.deleteImpression, function(t) {
            if (t && t.impressionId) {
                var n = t.impressionId;
                console.log("timeline, infoUpdateEventListeners, deleteImpression, impressionId: " + n);
                for (var o = 0; o < e.data.impressionDataList.length; o++) {
                    if (e.data.impressionDataList[o].unqiue == n) {
                        e.setData(_defineProperty({}, "impressionDataList[" + o + "]", {})), e.data.hasDelOpOnImprList = 1;
                        break;
                    }
                }
                e.data.impressionDataList.every(function(e) {
                    return !e.hasOwnProperty("unqiue");
                }) && (console.log("timeline, infoUpdateEventListeners, deleteImpression, empty. refresh."), 
                e.refresh());
            } else console.error("timeline, infoUpdateEventListeners, deleteImpression, impressionId undefined!");
        });
    },
    clearGlobalFunc: function clearGlobalFunc() {
        app.addLaunchListener(function() {
            app.removeInfoUpdateEventListeners(app.infoUpdateEventKey.timeline);
        });
    },
    reportTopRegionAction: function reportTopRegionAction(e, t) {
        var n = parseInt(e);
        t || (t = ""), reporter.getReporter(17332).sessionId(reportSession.getId()).action(n).actionItem(t).reportToServer();
    },
    exposedTopics: {},
    createObserveIntersection4Topic: function createObserveIntersection4Topic() {
        var e = this, t = wx.createIntersectionObserver(e, {
            thresholds: [ .8, 1 ],
            initialRatio: 0,
            observeAll: !0
        });
        return t.relativeToViewport(), t.observe(".js-intersection-topic", function(t) {
            var n = t.dataset, o = n.topic, i = n.index;
            e.exposedTopics[o.id] || (e.exposedTopics[o.id] = 1, void 0 !== i && e.reportTopRegionAction(reportEnum.enumIndexTopRegionAction.TOPIC_EXPOSED, o.id + ";" + i));
        }), t;
    },
    createObserveIntersection: function createObserveIntersection(e) {
        var t = this;
        if (void 0 !== e) {
            var n = wx.createIntersectionObserver(t, {
                thresholds: [ .4, 1 ],
                initialRatio: 0,
                observeAll: !0
            });
            return n.relativeToViewport(), n.observe(".js-intersection-impression", function(n) {
                if (e === t.data.currentTab) {
                    var o = n.dataset.index, i = void 0;
                    if (t.data.currentTab === TAB_FRIEND ? i = t.data.impressionDataList[o] : t.data.currentTab === TAB_RECOMMEND ? i = t.impressionDataListRecommend[o] : t.data.currentTab === TAB_FOLLOW && (i = t.data.recommendUsers && t.data.recommendUsers.length ? t.impressionDataListFollow[o] : t.data.impressionDataListFollow2[o]), 
                    i && i.comment) {
                        void 0 === t.data.lastRecommendImprPreloadIndex && (t.data.lastRecommendImprPreloadIndex = -1), 
                        t.data.currentTab === TAB_RECOMMEND && o > t.data.lastRecommendImprPreloadIndex ? 0 == o % 2 && (t.onReachBottom(), 
                        t.data.lastRecommendImprPreloadIndex = o) : t.data.currentTab === TAB_FOLLOW && o > t.data.lastRecommendImprPreloadIndex ? 0 == o % 2 && (t.onReachBottom(), 
                        t.data.lastFollowImprPreloadIndex = o) : t.data.currentTab === TAB_FRIEND && o > t.data.lastFriendsImpressionPreloadIndex && (0 == (o % 5 == 0) && t.onReachBottom(), 
                        t.data.lastFriendsImpressionPreloadIndex = o);
                        var a = "";
                        i.comment && i.comment.id && (a = i.comment.id);
                        var r = "";
                        if (i && i.poi && i.poi.base && (r = i.poi.base.id), a && r && !app.globalData.kv16878ReportData.timelineExposedSet.has(a)) {
                            app.globalData.kv16878ReportData.timelineExposedSet.add(a), kv16878ImpressionExposedCount++;
                            var s = 0;
                            i.markInfo && i.markInfo.friendMarkCount && (s = 1);
                            var c = util.getImpressionType(i.comment.contact.type);
                            s && (c = reportEnum.enumFeedImpressionType.MARKED);
                            var p = 0;
                            i && i.comment && i.comment.subCommentCount && (p = i.comment.subCommentCount);
                            var d = reportEnum.enumFeedAction.FEED_EXPOSED, m = i.reportData.scene, l = i.reportData.requestId || "", u = i.reportData.recId || "", T = i.reportData.recType || 0, I = "";
                            i.comment.tag && (I = renderDataUtil.getReasonIdString(i.comment.tag)), reporter.getReporter(16483).sessionType(0).sessionId(reportSession.getId()).clickTime(Math.floor(new Date().getTime() / 1e3)).scene(m).poiId().impressionId().impressionCommentCount(p).isForwardedImpression(s).poiIdString(r).impressionIdString(a).action(d).impressionType(c).requestId(l).pageId(reportEnum.enumPageName.TIMELINE).reasonId().reasonIdString(I).recId(u).recType(T).lazyReportToServer();
                        }
                    }
                }
            }), n;
        }
    },
    kvReport16878TimeString: function kvReport16878TimeString() {
        app.addLaunchListener(function() {
            reporter.getReporter(16878).pageId(reportEnum.enumPageName.TIMELINE).sessionId(reportSession.getId()).startTime(kv16878StartTime).impressionCount().forwardedImpressionCount().viewedImpressionCount(kv16878ImpressionExposedCount).viewedForwardedImpressionCount().endTime(Math.floor(new Date().getTime() / 1e3)).impressionIdList().poiIdList().sysImpressionIdList().sysPoiIdList().unreadMentionCount().hasTabRedDot().refreshCount().hasClickedUnreadMention().viewedSysImpressionCount().viewedFriendsImpressionCount().reportToServer();
        });
    },
    onTapPayRecommendPoi: function onTapPayRecommendPoi(e) {
        console.log("onTapPayRecommendPoi: " + JSON.stringify(e));
        var t = e.currentTarget.dataset.index;
        if (void 0 !== t) {
            var n = this.data.payRecommendPoiInfoList[t];
            if (n) {
                if (n.id) {
                    var o = this, i = {
                        startScene: reportEnum.enumPageName.TIMELINE,
                        lastScene: reportEnum.enumPageName.TIMELINE,
                        nextPageUrl: "/pages/poi_comment_publish/poi_comment_publish",
                        poiInfo: n,
                        navigateToNextPageSuccess: function navigateToNextPageSuccess(e) {
                            console.log("onTapPayRecommendPoi wx.navigateTo poi_comment_publish success"), setTimeout(function() {
                                console.log("onTapPayRecommendPoi wx.navigateTo poi_comment_publish success, after 1 second. deletePayRecommendPoi of index: " + t), 
                                o.deletePayRecommendPoi(t);
                            }, 1e3);
                        }
                    };
                    reportPostImpression.startPostImpressionProcess(i);
                } else console.error("onTapPayRecommendPoi, no poiId of index: " + t);
            } else console.error("onTapPayRecommendPoi, invalid index: " + t);
        } else console.error("onTapPayRecommendPoi, index is undefined, return");
    },
    onTapDeletePayRecommendPoi: function onTapDeletePayRecommendPoi(e) {
        console.log("onTapDeletePayRecommendPoi: " + JSON.stringify(e));
        var t = e.currentTarget.dataset.index;
        this.deletePayRecommendPoi(t);
    },
    deletePayRecommendPoi: function deletePayRecommendPoi(e) {
        if (void 0 !== e) {
            var t = this.data.payRecommendPoiInfoList[e];
            if (t) {
                var n = this.data.payRecommendPoiInfoList;
                n.splice(e, 1), this.setData({
                    payRecommendPoiInfoList: n
                });
                var o = t.id;
                o ? new cgi.SimpleRequest("cancelpayrecommendpoi", {
                    poiId: o
                }).send(function(e) {
                    console.log("cancelpayrecommendpoi, OK");
                }, function(e) {
                    console.error("cancelpayrecommendpoi, error: " + JSON.stringify(e));
                }) : console.error("deletePayRecommendPoi, no poiId of index: " + e);
            } else console.error("deletePayRecommendPoi, invalid index: " + e);
        } else console.error("deletePayRecommendPoi, index is undefined, return");
    },
    onTapActivityEntry: function onTapActivityEntry(e) {
        var t = e.currentTarget.dataset.topic, n = e.currentTarget.dataset.index;
        this.reportTopRegionAction(reportEnum.enumIndexTopRegionAction.TOPIC_CLICKED, t.id + ";" + n), 
        wx.navigateTo({
            url: "/pages/activity/activity?activity=" + encodeURIComponent(JSON.stringify(t))
        });
    },
    onTapTitleTabItem: function onTapTitleTabItem(e) {
        var t = this;
        if (app.getHasLaunched()) {
            var n = e.currentTarget.dataset.index;
            t.data.currentTitleTab !== n && (n == TITLE_TAB_FR ? (t.data.unreadImpressionCount > 0 && !t.data.reLaunchFromComment ? t.reportTopRegionAction(reportEnum.enumIndexTopRegionAction.TAB_FR_CLICKED_RED) : t.reportTopRegionAction(reportEnum.enumIndexTopRegionAction.TAB_FR_CLICKED), 
            t.setData({
                unreadImpressionCount: 0
            }), t.data.currentTab == TAB_FRIEND && t.data.friendTalkAboutList && t.data.friendTalkAboutListLen >= 5 && t.reportTopRegionAction(reportEnum.enumIndexTopRegionAction.FRIEND_TALK_ABOUT_EXPOSED)) : n == TITLE_TAB_FIND && (t.reportTopRegionAction(reportEnum.enumIndexTopRegionAction.TAB_FIND_CLICKED), 
            t.data.friendTalkAboutList && t.data.friendTalkAboutListLen >= 5 && t.reportTopRegionAction(reportEnum.enumIndexTopRegionAction.TAB_FIND_FRIEND_TALK_ABOUT_EXPOSED)), 
            t.setData({
                currentTitleTab: n,
                isChangingTitleTab: !0
            }, function() {
                wx.pageScrollTo({
                    scrollTop: 0,
                    duration: 0,
                    success: function success() {
                        t.setData({
                            isChangingTitleTab: !1
                        });
                    }
                });
            }));
        }
    },
    onTapTabItem: function onTapTabItem(e) {
        var t = this;
        if (app.getHasLaunched()) {
            var n = e.currentTarget.dataset.index;
            this.data.currentTab !== n ? (n === TAB_FRIEND ? (t.data.friendTalkAboutList && t.data.friendTalkAboutListLen >= 5 && t.reportTopRegionAction(reportEnum.enumIndexTopRegionAction.FRIEND_TALK_ABOUT_EXPOSED), 
            t.reportTopRegionAction(reportEnum.enumIndexTopRegionAction.TAB_FRIEND_CLICKED)) : n === TAB_RECOMMEND && t.reportTopRegionAction(reportEnum.enumIndexTopRegionAction.TAB_RECOMMEND_CLICKED), 
            t.setData({
                currentTab: n,
                isChangingTab: !0
            }, function() {
                wx.pageScrollTo({
                    scrollTop: 0,
                    duration: 0,
                    success: function success() {
                        t.setData({
                            isChangingTab: !1
                        });
                    }
                });
            }), n === TAB_FRIEND ? ((t.data.unreadImpressionCount > 0 || !t.data.impressionDataList.length) && t.refresh(), 
            this.friendObserver && this.friendObserver.disconnect(), this.friendObserver = this.createObserveIntersection()) : n === TAB_RECOMMEND ? (this.recommendObserver && this.recommendObserver.disconnect(), 
            this.recommendObserver = this.createObserveIntersection(), this.topicObserver && this.topicObserver.disconnect(), 
            this.topicObserver = this.createObserveIntersection4Topic()) : n === TAB_FOLLOW && (t.impressionDataListFollow.length || t.getFollowTimelineRequest(REPLACE), 
            this.followObserver && this.followObserver.disconnect(), this.followObserver = this.createObserveIntersection()), 
            this.updateNormalPostButtonAppearanceForTabStyle()) : console.log("onTapTabItem, this.data.currentTab == tabID, return");
        }
    },
    updateNormalPostButtonAppearanceForTabStyle: function updateNormalPostButtonAppearanceForTabStyle() {
        var e = 1;
        0 == this.data.isFirstInit && this.data.currentTab == TAB_FRIEND && (this.data.impressionDataList && this.data.impressionDataList.length || (e = 0)), 
        this.setData({
            shouldShowNormalPostButton: e
        });
    },
    followUserIds: {},
    onTapFollowBtn: function onTapFollowBtn(e) {
        var t, n = e.currentTarget.dataset.index, o = e.currentTarget.dataset.user, i = o.userId, a = o.follow, r = o.ugc.fansCount || 0, s = 1 == a ? 0 : 1, c = 1 == s ? r + 1 : r - 1;
        this.setData((_defineProperty(t = {}, "recommendUsers[" + n + "].follow", s), _defineProperty(t, "recommendUsers[" + n + "].ugc.fansCount", c), 
        t));
        var p = 1 == a ? 2 : 1;
        new cgi.SimpleRequest("FollowUser", {
            userId: i,
            type: p
        }).send(function(e) {});
    },
    bindtapToUserProfile: function bindtapToUserProfile(e) {
        var t = e.currentTarget.dataset.contact;
        0 == t.type ? wx.navigateTo({
            url: "/pages/me/me"
        }) : wx.navigateTo({
            url: "/pages/user_profile/user_profile?contact=" + encodeURIComponent(JSON.stringify(t))
        });
    },
    onTapBackButton: function onTapBackButton() {
        util.appNavigateBack();
    },
    toFriendTalkAbout: function toFriendTalkAbout() {
        wx.navigateTo({
            url: "/pages/friend_talk_about/friend_talk_about?name=" + encodeURIComponent("朋友提到的餐厅") + "&pageScene=15"
        }), this.reportTopRegionAction(reportEnum.enumIndexTopRegionAction.FRIEND_TALK_ABOUT_CLICKED);
    }
}, "onTapFriendTalkAbout", function() {
    wx.navigateTo({
        url: "/pages/friend_talk_about/friend_talk_about?name=" + encodeURIComponent("朋友提到的餐厅") + "&pageScene=8"
    }), this.reportTopRegionAction(reportEnum.enumIndexTopRegionAction.TAB_FIND_FRIEND_TALK_ABOUT_CLICKED);
}));