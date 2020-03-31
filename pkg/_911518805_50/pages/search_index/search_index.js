var app = getApp(), cgi = require("../../utils/cgi"), util = require("../../utils/util"), reporter = require("../../utils/reporter"), reportEnum = require("../../utils/reportEnum"), reportSession = require("../../utils/report_session"), storage = require("../../utils/storage"), searchStorage = require("../../utils/searchStorage"), renderDataUtil = require("../../utils/render_data_util"), appLaunchData = require("../../utils/appLaunchData"), MMPage = require("../../utils/mmFramework/mm_page"), enumSelectedResultType = {
    RESTAURANT: 0,
    IMPRESSION: 1
};

MMPage({
    data: {
        isIpx: util.isIpx(),
        query: "",
        showPageType: "INDEX",
        indexTags: [],
        history: [],
        suggs: [],
        searchInputFocus: !0,
        shouldShowBottomLoading: !1,
        searchingSuggCount: 0,
        windowHeight: 0,
        isFriendTagInited: 0,
        friendTagStatus: "TAGLIST_STATUS_EXPAND",
        isSelfTagInited: 0,
        selfTagStatus: "TAGLIST_STATUS_EXPAND",
        useRealCurrentLocationToGetData: appLaunchData.isUsingRealCurrentLocation()
    },
    navigationBarColor: {
        frontColor: "#000000",
        backgroundColor: "#f1f1f1"
    },
    navigationBarColorWithMask: {
        frontColor: "#000000",
        backgroundColor: "#919191"
    },
    mmReportData: {
        pageRequestId: 0,
        pageName: reportEnum.enumPageName.SEARCH
    },
    reportData: {},
    onLoad: function onLoad(e) {
        var t = this, a = wx.getSystemInfoSync().windowHeight;
        t.setData({
            windowHeight: a,
            scrollViewHeight: a - util.rpx2px(132)
        }), e.query ? t.setData({
            isDirectResult: !0
        }, function() {
            t.toResultPage(decodeURIComponent(e.query));
        }) : app.addLaunchListener(function() {
            t.setData({
                useRealCurrentLocationToGetData: appLaunchData.isUsingRealCurrentLocation()
            });
            var e = appLaunchData.getUserLocation();
            cgi.multipleRequest([ new cgi.SimpleRequest("getcategory", {
                location: e
            }), new cgi.SimpleRequest("getsuggestion", {
                location: e
            }) ], function(e) {
                var a = e[0], n = e[1], r = (a.friendPoiCategory || []).map(function(e) {
                    return {
                        name: e.name,
                        text: e.name + "(" + e.poiCount + ")"
                    };
                }), i = (a.selfPoiCategory || []).map(function(e) {
                    return {
                        name: e.name,
                        text: e.name + "(" + e.poiCount + ")"
                    };
                }), o = (a.hotTag || []).map(function(e) {
                    return {
                        id: e.id,
                        name: e.name,
                        popular: e.popular,
                        poiCount: e.poiCount
                    };
                }), s = n.suggestion.map(function(e) {
                    var t = {
                        type: e.type
                    };
                    return 0 == e.type ? t.name = e.poi.base.name : 1 == e.type ? t.name = e.tag.name : 2 == e.type ? t.name = e.area.name : 3 == e.type && (t.name = e.category.name), 
                    t;
                });
                t.setData({
                    hotTags: o,
                    indexTags: s,
                    history: searchStorage.getAllHistory(),
                    friendPoiCategory: r,
                    selfPoiCategory: i
                }), t.data.reporter17491 = reporter.getReporter(17491).requestId(util.uuid()).prevPage(t.mmPrevPage.mmReportData.pageName).exp([ t.data.history.length, t.data.friendPoiCategory.length, t.data.selfPoiCategory.length ].join("|")), 
                wx.nextTick(function() {
                    wx.createSelectorQuery().select("#friendPoiCategory").boundingClientRect(function(e) {
                        e && (util.px2rpx(e.height) > 94 ? t.setData({
                            isFriendTagMultiLine: 1,
                            isFriendTagInited: 1,
                            friendTagStatus: "TAGLIST_STATUS_SHRINK"
                        }) : t.setData({
                            isFriendTagInited: 1,
                            isFriendTagMultiLine: 0,
                            friendTagStatus: "TAGLIST_STATUS_EXPAND"
                        }));
                    }).exec(), wx.createSelectorQuery().select("#selfPoiCategory").boundingClientRect(function(e) {
                        e && (util.px2rpx(e.height) > 94 ? t.setData({
                            isSelfTagMultiLine: 1,
                            isSelfTagInited: 1,
                            selfTagStatus: "TAGLIST_STATUS_SHRINK"
                        }) : t.setData({
                            isSelfTagInited: 1,
                            isSelfTagMultiLine: 0,
                            selfTagStatus: "TAGLIST_STATUS_EXPAND"
                        }));
                    }).exec();
                });
            }), reporter.getReporter(16501).pageId(reportEnum.enumPageName.SEARCH).time(Math.floor(new Date().getTime() / 1e3)).launchScene(reportSession.getLaunchScene()).sessionId(reportSession.getId()).reportToServer();
        });
    },
    bindtapFriendTagBtn: function bindtapFriendTagBtn() {
        "TAGLIST_STATUS_SHRINK" == this.data.friendTagStatus ? this.setData({
            friendTagStatus: "TAGLIST_STATUS_EXPAND"
        }) : this.setData({
            friendTagStatus: "TAGLIST_STATUS_SHRINK"
        });
    },
    bindtapSelfTagBtn: function bindtapSelfTagBtn() {
        "TAGLIST_STATUS_SHRINK" == this.data.selfTagStatus ? this.setData({
            selfTagStatus: "TAGLIST_STATUS_EXPAND"
        }) : this.setData({
            selfTagStatus: "TAGLIST_STATUS_SHRINK"
        });
    },
    onShow: function onShow() {},
    bindtapSugg: function bindtapSugg(e) {
        var t = e.currentTarget.dataset.name, a = e.currentTarget.dataset.type, n = e.currentTarget.dataset.tagid;
        if (0 == a) {
            var r = e.currentTarget.dataset.poi.id;
            wx.navigateTo({
                url: "/pages/poi_detail/poi_detail?poiId=" + encodeURIComponent(r)
            });
        } else if (1 == a) {
            n = e.currentTarget.dataset.tagid;
            var i = "/pages/index_tag/index_tag?name=" + encodeURIComponent(t) + "&feedId=" + n;
            wx.navigateTo({
                url: i
            });
        } else this.toResultPage(t, reportEnum.enumPoiSearchType.INPUT);
    },
    bindtapListItem: function bindtapListItem(e) {
        var t = e.currentTarget.dataset.name, a = e.currentTarget.dataset.listtype;
        "HISTORY" == a ? (this.data.reporter17491 && this.data.reporter17491.action(2), 
        this.toResultPage(t, reportEnum.enumPoiSearchType.HISTORY)) : "FRIEND" == a ? (this.data.reporter17491 && this.data.reporter17491.action(3), 
        this.toResultPage(t, reportEnum.enumPoiSearchType.FRIEND)) : "SELF" == a && (this.data.reporter17491 && this.data.reporter17491.action(4), 
        this.toResultPage(t, reportEnum.enumPoiSearchType.SELF));
    },
    toIndexPage: function toIndexPage() {
        this.setData({
            query: "",
            showPageType: "INDEX",
            history: searchStorage.getAllHistory()
        });
    },
    toSuggPage: function toSuggPage() {
        this.setData({
            suggs: [],
            showPageType: "SUGG"
        });
    },
    toResultPage: function toResultPage(e, t) {
        this.setData({
            selectedResultType: enumSelectedResultType.RESTAURANT,
            showPageType: "RESULT",
            query: e,
            queryType: t || reportEnum.enumPoiSearchType.INPUT
        });
    },
    bindTapResultTypeRestaraunt: function bindTapResultTypeRestaraunt() {
        this.setData({
            selectedResultType: enumSelectedResultType.RESTAURANT
        });
    },
    bindTapResultTypeImpression: function bindTapResultTypeImpression() {
        this.setData({
            selectedResultType: enumSelectedResultType.IMPRESSION
        });
    },
    bindtapSearchCancel: function bindtapSearchCancel() {
        wx.navigateBack();
    },
    bindtapSearchClear: function bindtapSearchClear() {
        this.toIndexPage();
    },
    bindSearchInput: function bindSearchInput(e) {
        var t = e.detail.value;
        this.data.reporter17491 && !this.data.reporter17491HasReportInput && (this.data.reporter17491.action(4).type(2).reportToServer(), 
        this.data.reporter17491HasReportInput = 1, this.data.reporter17491.action(0).type(0)), 
        this.setData({
            query: t
        }), t ? (this.toSuggPage(), this.sendSearchRequest(t)) : this.toIndexPage();
    },
    bindSearchConfirm: function bindSearchConfirm(e) {
        var t = e.detail.value;
        t ? (this.data.reporter17491 && this.data.reporter17491.action(5), this.toResultPage(t)) : this.toIndexPage();
    },
    sendSearchRequest: util.debounce(function(e) {
        if (!app.canOpenKitchen() || ":kitchen" !== e && ":kitchen " !== e && ": kitchen " !== e && "：kitchen " !== e && "：kitchen" !== e) {
            if (":up" !== e) {
                var t = this;
                t.setData({
                    shouldShowBottomLoading: !0
                }), t.data.searchingSuggCount++;
                var a = appLaunchData.getUserLocation();
                new cgi.SimpleRequest("getsuggestion", {
                    location: a,
                    options: {
                        query: e
                    }
                }).send(function(a) {
                    t.data.searchingSuggCount--, e == t.data.query ? (t.setData({
                        shouldShowBottomLoading: !1
                    }), t.renderSugg(a, e)) : 0 == t.data.searchingSuggCount && t.setData({
                        shouldShowBottomLoading: !1
                    });
                });
            } else wx.redirectTo({
                url: "/pages/feedback/feedback"
            });
        } else wx.redirectTo({
            url: "/pages/kitchen/kitchen"
        });
    }, 100),
    renderSugg: function renderSugg(e, t) {
        if ("SUGG" == this.data.showPageType) {
            var a = (e.suggestion || []).map(function(e) {
                var t = {
                    type: e.type
                };
                return 0 == e.type ? (t.name = e.poi.base.name, t.poi = renderDataUtil.getRenderPoiInfo(e.poi)) : 1 == e.type ? (t.name = e.tag.name, 
                t.tagId = e.tag.id) : 2 == e.type ? t.name = e.area.name : 3 == e.type && (t.name = e.category.name), 
                t;
            });
            a.sort(function(e, t) {
                return e.type < t.type ? 1 : e.type > t.type ? -1 : 0;
            }), a.length || a.push({
                type: -1
            }), this.setData({
                suggs: a
            });
        }
    },
    bindSearchFocus: function bindSearchFocus(e) {
        this.setData({
            searchInputFocus: !0
        });
        var t = e.detail.value;
        t ? "SUGG" != this.data.showPageType && (this.toSuggPage(), this.sendSearchRequest(t)) : this.toIndexPage();
    },
    bindSearchBlur: function bindSearchBlur(e) {
        this.setData({
            searchInputFocus: !1
        });
    },
    bindtapIndexTag: function bindtapIndexTag(e) {
        var t = e.currentTarget.dataset.name, a = e.currentTarget.dataset.id, n = "/pages/index_tag/index_tag?name=" + encodeURIComponent(t) + "&feedId=" + a;
        wx.navigateTo({
            url: n
        });
    },
    toFeedBack: function toFeedBack() {
        this.data.query;
        var e = JSON.stringify({
            query: this.data.query
        });
        wx.navigateTo({
            url: "/pages/app_feedback/app_feedback?word=" + encodeURIComponent(e)
        });
    }
});