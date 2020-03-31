var _extends = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var a = arguments[t];
        for (var r in a) {
            Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
        }
    }
    return e;
};

function _defineProperty(e, t, a) {
    return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = a, e;
}

var app = getApp(), cgi = require("../../utils/cgi"), util = require("../../utils/util"), searchStorage = require("../../utils/searchStorage"), reporter = require("../../utils/reporter"), reportEnum = require("../../utils/reportEnum"), reportSession = require("../../utils/report_session"), renderDataUtil = require("../../utils/render_data_util"), appLaunchData = require("../../utils/appLaunchData"), utf8 = require("../../utils/utf8"), cssFilterHeight = 102, cssSearchHeight = 72, cssTabHeight = 90, APPEND = 1, REPLACE = 0, impressionExposedSet = new Set(), poiExposedSet = new Set();

Component({
    properties: {
        query: {
            type: String,
            value: "",
            observer: function observer(e, t, a) {
                console.log("component search_result_impression newVal", e, ", oldVal", t, " changedPath", a);
            }
        },
        queryType: {
            type: String
        }
    },
    data: {
        scrollViewHeight: 0,
        windowHeight: wx.getSystemInfoSync().windowHeight,
        shouldShowBottomLoading: !0,
        isIpx: util.isIpx(),
        isInited: !1,
        poiList: [],
        isPoiListLoaded: !1,
        context: "",
        continueFlag: 1,
        shouldShowMask: !1,
        shouldShowFilterFixed: !1,
        areaCategory: [],
        shouldShowAreaCategoryPanel: !1,
        resultSelectedAreaCategoryId: "",
        resultSelectedAreaCategoryName: "位置",
        menuCategory: [ {
            id: "0",
            name: "类别"
        } ],
        shouldShowMenuCategoryPanel: !1,
        resultSelectedMenuCategoryId: "",
        resultSelectedMenuCategoryName: "菜系",
        priceCategory: [ {
            id: "0",
            name: "不限价格",
            value: {
                min: 0,
                max: 9999900
            }
        }, {
            id: "1",
            name: "0-50",
            value: {
                min: 0,
                max: 5e3
            }
        }, {
            id: "2",
            name: "50-100",
            value: {
                min: 5e3,
                max: 1e4
            }
        }, {
            id: "3",
            name: "100-200",
            value: {
                min: 1e4,
                max: 2e4
            }
        }, {
            id: "4",
            name: "200-300",
            value: {
                min: 2e4,
                max: 3e4
            }
        }, {
            id: "5",
            name: "300以上",
            value: {
                min: 3e4,
                max: 9999900
            }
        } ],
        shouldShowPriceCategoryPanel: !1,
        resultSelectedPriceCategoryId: "",
        resultSelectedPriceCategoryName: "价格",
        orderOptions: [ {
            id: "2",
            name: "综合排序"
        }, {
            id: "1",
            name: "距离优先"
        } ],
        shouldShowOrderPanel: !1,
        resultSelectedOrderId: "2",
        resultSelectedOrderName: "综合排序",
        useRealCurrentLocationToGetData: appLaunchData.isUsingRealCurrentLocation()
    },
    created: function created(e) {
        this.addGlobalFunc(), this.defaultReportData = {
            pageRequestId: 0,
            poiExposedObjSet: {},
            pageName: reportEnum.enumPageName.SEARCH
        }, this.reportData = {};
    },
    attached: function attached() {
        var e = this, t = e.data.windowHeight;
        this.setData({
            scrollViewHeight: t - util.rpx2px(cssFilterHeight + cssSearchHeight + cssTabHeight),
            maskHeight: t - util.rpx2px(cssFilterHeight + cssSearchHeight + cssTabHeight)
        }), e.mmPrevPage = util.getCurrentPage().mmPrevPage, e.setData({
            useRealCurrentLocationToGetData: appLaunchData.isUsingRealCurrentLocation()
        }), e.data.queryType == reportEnum.enumPoiSearchType.FRIEND ? e.data.entryType = 1 : e.data.queryType == reportEnum.enumPoiSearchType.SELF ? e.data.entryType = 2 : e.data.entryType = 0, 
        appLaunchData.isUsingRealCurrentLocation() || e.setData({
            orderOptions: [ {
                id: "2",
                name: "综合排序"
            } ],
            resultSelectedAreaCategoryId: "localId_11",
            resultSelectedAreaCategoryName: "位置",
            areaCategoryLeftId: "localId_10",
            areaCategoryRightId: "localId_11"
        }), e.intersectionObserver && e.intersectionObserver.disconnect(), e.intersectionObserver = e.createObserveIntersection(), 
        app.addLaunchListener(function() {
            e.getCategory(), e.searchImpression();
        });
    },
    detached: function detached() {
        this.clearGlobalFunc();
    },
    methods: {
        addGlobalFunc: function addGlobalFunc() {
            var e = this;
            app.addInfoUpdateEventListeners(app.infoUpdateEventKey.searchResultImpression, app.infoUpdateEvent.updateImpressionCommentCount, function(t) {
                if (t && t.impressionId) {
                    var a = t.impressionId, r = t.commentCount ? t.commentCount : 0;
                    console.log("me, infoUpdateEventListeners, updateImpressionCommentCount, impressionId: " + a);
                    for (var o = e.data.impressionDataList, i = 0; i < o.length; i++) {
                        var s = o[i];
                        if (s.comment.id == a) {
                            s.comment.subCommentCount = r, e.setData(_defineProperty({}, "impressionDataList[" + i + "]", s));
                            break;
                        }
                    }
                } else console.error("me, infoUpdateEventListeners, updateImpressionCommentCount, impressionId undefined!");
            });
        },
        clearGlobalFunc: function clearGlobalFunc() {
            app.removeInfoUpdateEventListeners(app.infoUpdateEventKey.searchResultImpression);
        },
        searchImpression: function searchImpression(e) {
            var t = this;
            e || t.setData({
                impressionDataList: [],
                isInited: !1,
                context: "",
                continueFlag: 1,
                shouldShowBottomLoading: !0,
                requestId: util.uuid()
            });
            var a = t.getFilterOption(), r = appLaunchData.isUsingRealCurrentLocation(), o = appLaunchData.getUserLocation();
            new cgi.SimpleRequest("SearchImpression", {
                location: o,
                options: a,
                requestId: t.data.requestId,
                context: t.data.context
            }).ensureNoSameUrlProcessing().send(function(a) {
                var o = [];
                if (a.info && a.info.length) if (a.info.forEach(function(e) {
                    o.push({
                        comment: e.impression,
                        unqiue: e.impression.id,
                        poi: e.poi,
                        hitInfo: e.hitInfo,
                        isUsingRealCurrentLocation: r,
                        reportData: {
                            scene: reportEnum.enumSceneType.SEARCH_IMPRESSION_RESULT,
                            pageId: reportEnum.enumPageName.SEARCH,
                            requestId: t.data.requestId,
                            recId: "",
                            recType: e.impression && e.impression.recType ? e.impression.recType : 0
                        }
                    });
                }), e) {
                    for (var i = t.data.impressionDataList, s = o, n = {}, d = i.length; d < i.length + s.length; d++) {
                        n["impressionDataList[" + d + "]"] = o[d - i.length];
                    }
                    t.setData(_extends({}, n));
                } else t.setData({
                    impressionDataList: o
                });
                t.data.context = a.context, t.data.continueFlag = a.continueFlag, t.data.continueFlag || t.setData({
                    shouldShowBottomLoading: !1
                }), t.data.isInited || t.setData({
                    isInited: !0
                }), t.intersectionObserver && t.intersectionObserver.disconnect(), t.intersectionObserver = t.createObserveIntersection();
            }, function(e) {});
        },
        getCategory: function getCategory() {
            var e = this, t = appLaunchData.getUserLocation();
            new cgi.SimpleRequest("getcategory", {
                location: t
            }).send(function(t) {
                console.log("test getcategory success: " + JSON.stringify(new Date()));
                var a = t.area, r = [];
                a.forEach(function(e) {
                    var t = {};
                    t.name = e.name, t.id = e.id, e.subCategory && e.subCategory.length && (t.subCategory = e.subCategory), 
                    r.push(t);
                }), appLaunchData.isUsingRealCurrentLocation() ? r.unshift({
                    id: "localId_10",
                    name: "距离",
                    subCategory: [ {
                        id: "localId_11",
                        name: "默认"
                    }, {
                        id: "localId_12",
                        name: "1公里"
                    }, {
                        id: "localId_13",
                        name: "2公里"
                    }, {
                        id: "localId_14",
                        name: "5公里"
                    } ]
                }) : r.unshift({
                    id: "localId_10",
                    name: "距离",
                    subCategory: [ {
                        id: "localId_11",
                        name: "默认"
                    } ]
                }), e.setData({
                    areaCategory: r,
                    menuCategory: t.category
                });
            });
        },
        getFilterOption: function getFilterOption() {
            var e = {};
            if (e.query = this.data.query, e.entryType = this.data.entryType, this.reportData.query = this.data.query, 
            this.data.resultSelectedSimilarAreaCategoryId ? e.areaId = this.data.resultSelectedSimilarAreaCategoryId : this.data.resultSelectedAreaCategoryId && ("localId_10" == this.data.resultSelectedAreaCategoryId || ("localId_11" == this.data.resultSelectedAreaCategoryId ? this.reportData.area = "" : "localId_12" == this.data.resultSelectedAreaCategoryId ? (e.radius = 1e3, 
            this.reportData.area = 1e3) : "localId_13" == this.data.resultSelectedAreaCategoryId ? (e.radius = 2e3, 
            this.reportData.area = 2e3) : "localId_14" == this.data.resultSelectedAreaCategoryId ? (e.radius = 5e3, 
            this.reportData.area = 5e3) : (e.areaId = this.data.resultSelectedAreaCategoryId, 
            this.reportData.area = this.data.resultSelectedAreaCategoryId))), this.data.resultSelectedMenuCategoryId && (e.categoryId = [ this.data.resultSelectedMenuCategoryId ], 
            this.reportData.menuCategoryId = this.data.resultSelectedMenuCategoryId), this.data.resultSelectedPriceCategoryId) if ("0" == this.data.resultSelectedPriceCategoryId) delete e.priceMin, 
            delete e.priceMax, this.reportData.price = ""; else {
                var t = this.data.priceCategory[this.data.resultSelectedPriceCategoryId].value;
                e.priceMin = t.min, e.priceMax = t.max, this.reportData.price = e.priceMin + "-" + e.priceMax;
            }
            return this.data.resultSelectedOrderId && (e.sortType = +this.data.resultSelectedOrderId, 
            this.reportData.sortType = this.data.resultSelectedOrderId), e;
        },
        bindtapMenuFilter: function bindtapMenuFilter(e) {
            this.data.resultSelectedMenuCategoryIdFromSearch || (this.data.shouldShowMenuCategoryPanel ? this.setData({
                shouldShowFilterFixed: !1,
                shouldShowMask: !1,
                shouldShowMenuCategoryPanel: !1,
                shouldShowPriceCategoryPanel: !1,
                shouldShowAreaCategoryPanel: !1,
                shouldShowSimilarAreaPanel: !1,
                shouldShowOrderPanel: !1
            }) : this.setData({
                shouldShowFilterFixed: !0,
                shouldShowMask: !0,
                shouldShowMenuCategoryPanel: !0,
                shouldShowPriceCategoryPanel: !1,
                shouldShowAreaCategoryPanel: !1,
                shouldShowSimilarAreaPanel: !1,
                shouldShowOrderPanel: !1
            }));
        },
        bindtapPriceFilter: function bindtapPriceFilter(e) {
            this.data.shouldShowPriceCategoryPanel ? this.setData({
                shouldShowFilterFixed: !1,
                shouldShowMask: !1,
                shouldShowMenuCategoryPanel: !1,
                shouldShowPriceCategoryPanel: !1,
                shouldShowAreaCategoryPanel: !1,
                shouldShowSimilarAreaPanel: !1,
                shouldShowOrderPanel: !1
            }) : this.setData({
                shouldShowFilterFixed: !0,
                shouldShowMask: !0,
                shouldShowMenuCategoryPanel: !1,
                shouldShowPriceCategoryPanel: !0,
                shouldShowAreaCategoryPanel: !1,
                shouldShowSimilarAreaPanel: !1,
                shouldShowOrderPanel: !1
            });
        },
        bindtapAreaFilter: function bindtapAreaFilter(e) {
            this.data.resultSelectedSimilarAreaCategoryId || (this.data.shouldShowAreaCategoryPanel ? this.setData({
                shouldShowFilterFixed: !1,
                shouldShowMask: !1,
                shouldShowMenuCategoryPanel: !1,
                shouldShowPriceCategoryPanel: !1,
                shouldShowAreaCategoryPanel: !1,
                shouldShowSimilarAreaPanel: !1,
                shouldShowOrderPanel: !1
            }) : this.setData({
                shouldShowFilterFixed: !0,
                shouldShowMask: !0,
                shouldShowMenuCategoryPanel: !1,
                shouldShowPriceCategoryPanel: !1,
                shouldShowAreaCategoryPanel: !0,
                shouldShowSimilarAreaPanel: !1,
                shouldShowOrderPanel: !1
            }));
        },
        bindtapOrderFilter: function bindtapOrderFilter() {
            this.data.shouldShowOrderPanel ? this.setData({
                shouldShowFilterFixed: !1,
                shouldShowMask: !1,
                shouldShowMenuCategoryPanel: !1,
                shouldShowPriceCategoryPanel: !1,
                shouldShowAreaCategoryPanel: !1,
                shouldShowOrderPanel: !1
            }) : this.setData({
                shouldShowFilterFixed: !0,
                shouldShowMask: !0,
                shouldShowMenuCategoryPanel: !1,
                shouldShowPriceCategoryPanel: !1,
                shouldShowAreaCategoryPanel: !1,
                shouldShowOrderPanel: !0
            });
        },
        bindtapMask: function bindtapMask(e) {
            this.setData({
                shouldShowFilterFixed: !1,
                shouldShowMask: !1,
                shouldShowMenuCategoryPanel: !1,
                shouldShowPriceCategoryPanel: !1,
                shouldShowAreaCategoryPanel: !1,
                shouldShowSimilarAreaPanel: !1,
                shouldShowOrderPanel: !1
            });
        },
        bindMenuCategorySelect: function bindMenuCategorySelect(e) {
            console.log("bindMenuCategorySelect", e);
            var t = e.detail.id, a = e.detail.name;
            this.setData({
                resultSelectedMenuCategoryId: t,
                resultSelectedMenuCategoryName: a
            }), this.bindtapMask(), this.getOnFilterChange();
        },
        bindPriceCategorySelect: function bindPriceCategorySelect(e) {
            console.log("bindPriceCategorySelect", e);
            var t = e.detail.id, a = e.detail.name;
            this.setData({
                resultSelectedPriceCategoryId: t,
                resultSelectedPriceCategoryName: a
            }), this.bindtapMask(), this.getOnFilterChange();
        },
        bindAreaCategorySelect: function bindAreaCategorySelect(e) {
            var t = e.detail.id, a = e.detail.name;
            this.setData({
                resultSelectedAreaCategoryId: t,
                resultSelectedAreaCategoryName: a
            }), this.bindtapMask(), this.getOnFilterChange();
        },
        bindOrderSelect: function bindOrderSelect(e) {
            var t = e.detail.id, a = e.detail.name;
            this.setData({
                resultSelectedOrderId: t,
                resultSelectedOrderName: a
            }), this.bindtapMask(), this.getOnFilterChange();
        },
        bindscrolltolower: function bindscrolltolower() {
            this.data.continueFlag && this.searchImpression(APPEND);
        },
        getOnFilterChange: function getOnFilterChange() {
            this.searchImpression(REPLACE);
        },
        createObserveIntersection: function createObserveIntersection() {
            var e = this, t = wx.createIntersectionObserver(e, {
                thresholds: [ .4, 1 ],
                initialRatio: 0,
                observeAll: !0
            });
            return t.relativeToViewport(), t.observe(".impression-cell", function(t) {
                var a = t.dataset, r = a.index;
                a.recommend;
                if (void 0 !== r) {
                    var o = e.data.impressionDataList[r];
                    if (o) {
                        var i = "";
                        o.comment && o.comment.id && (i = o.comment.id);
                        var s = "";
                        if (o && o.poi && o.poi.base && (s = o.poi.base.id), i && s) {
                            var n = util.getImpressionType(o.comment.contact.type), d = 0;
                            o && o.comment && o.comment.subCommentCount && (d = o.comment.subCommentCount);
                            var l = reportEnum.enumFeedAction.FEED_EXPOSED, u = o.reportData.scene, h = o.reportData.requestId || "", c = o.reportData.recId || "", p = o.reportData.pageId, g = o.reportData.recType || 0, m = "";
                            o.comment.tag && (m = renderDataUtil.getReasonIdString(o.comment.tag)), reporter.getReporter(16483).sessionType(0).sessionId(reportSession.getId()).clickTime(Math.floor(new Date().getTime() / 1e3)).scene(u).poiId().impressionId().impressionCommentCount(d).isForwardedImpression(0).poiIdString(s).impressionIdString(i).action(l).impressionType(n).requestId(h).pageId(p).reasonId().reasonIdString(m).recId(c).recType(g).lazyReportToServer();
                        }
                    }
                }
            }), t;
        }
    }
});