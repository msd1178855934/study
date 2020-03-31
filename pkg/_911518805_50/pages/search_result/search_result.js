var app = getApp(), cgi = require("../../utils/cgi"), util = require("../../utils/util"), questionStorage = require("../../utils/questionStorage"), kitchenStorage = require("../../utils/kitchenStorage"), searchStorage = require("../../utils/searchStorage"), reporter = require("../../utils/reporter"), reportEnum = require("../../utils/reportEnum"), reportSession = require("../../utils/report_session"), renderDataUtil = require("../../utils/render_data_util"), appLaunchData = require("../../utils/appLaunchData"), utf8 = require("../../utils/utf8"), mixinCss = require("../../utils/mixinCss"), cssFilterHeight = 102, cssSearchHeight = 72, cssTabHeight = 90, cssSimilarAreaHeight = 120, r = 750 / 414, cssTagHeight = 80 * r + 16 * r, enumPoiListType = {
    AREA: 0,
    CATEGORY: 1,
    POI: 2
}, APPEND = 1, REPLACE = 0;

Component({
    properties: {
        query: {
            type: String,
            value: "",
            observer: function observer(e, t, a) {
                console.log("component search_result newVal", e, ", oldVal", t, " changedPath", a);
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
        poiListType: -1,
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
        isInited: !1,
        useRealCurrentLocationToGetData: appLaunchData.isUsingRealCurrentLocation()
    },
    created: function created(e) {
        this.defaultReportData = {
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
        }), app.addLaunchListener(function() {
            e.getCategory(), e.getSearchPoiList();
        });
    },
    detached: function detached() {},
    methods: {
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
        getSearchPoiList: function getSearchPoiList() {
            var e = this;
            if (e.data.query) {
                e.setData({
                    shouldShowBottomLoading: !0
                }), e.reportData = util.clone(e.defaultReportData), e.reportData.pageRequestId = util.getTimeRandomId();
                var t = e.getFilterOption(), a = appLaunchData.getUserLocation();
                e.data.requestId = util.uuid(), new cgi.SimpleRequest("SearchPoiList", {
                    location: a,
                    options: t,
                    requestId: e.data.requestId
                }).ensureNoSameUrlProcessing().send(function(a) {
                    e.data.isInited = !0, searchStorage.addHistory({
                        name: t.query
                    });
                    var r = util.getCurrentPage();
                    if (!(a.info && a.info.length || a.poi && a.poi.length)) return r.data.reporter17491 && (r.data.reporter17491.type(4).reportToServer(), 
                    r.data.reporter17491.action(0).type(0)), void e.setData({
                        poiList: [],
                        isPoiListLoaded: !0,
                        shouldShowBottomLoading: !1
                    });
                    r.data.reporter17491 && (r.data.reporter17491.type(3).reportToServer(), r.data.reporter17491.action(0).type(0));
                    if (a.info && a.info.length) {
                        var i = null;
                        a.info.some(function(e) {
                            return 0 == e.type ? (i = e, !0) : 1 == e.type ? (i = e, !0) : void 0;
                        });
                        var o = [];
                        if (a.info.forEach(function(e) {
                            e.tagResult && e.tagResult.tag && o.push({
                                id: e.tagResult.tag.id,
                                name: e.tagResult.tag.name,
                                poiCount: e.tagResult.tag.poiCount
                            });
                        }), i) {
                            if (0 == i.type) {
                                e.setData({
                                    scrollViewHeight: e.data.windowHeight - util.rpx2px(cssFilterHeight + cssSearchHeight + cssTabHeight + cssSimilarAreaHeight + (o.length ? cssTagHeight : 0)),
                                    poiListType: enumPoiListType.AREA
                                });
                                var s = i.areaResult, d = [], l = 0;
                                s.similarArea.forEach(function(e, t) {
                                    var a = e.id == s.area.id, r = {
                                        id: e.id,
                                        name: e.name + "(" + e.district + ")",
                                        isSelected: a
                                    };
                                    d.push(r), a && (l = t);
                                }), e.setData({
                                    similarAreas: d,
                                    selectedSimilarAreaIndex: l,
                                    tagResults: o,
                                    shouldShowSimilarAreaPanel: !1,
                                    resultSelectedSimilarAreaCategoryId: s.area.id
                                }), e.getPoiList(REPLACE);
                            } else if (1 == i.type) {
                                o.length && e.setData({
                                    scrollViewHeight: e.data.windowHeight - util.rpx2px(cssFilterHeight + cssSearchHeight + cssTabHeight + (o.length ? cssTagHeight : 0)),
                                    poiListType: enumPoiListType.CATEGORY
                                });
                                var n = i.categoryResult;
                                e.setData({
                                    tagResults: o,
                                    resultSelectedMenuCategoryId: n.category.id,
                                    resultSelectedMenuCategoryIdFromSearch: n.category.id
                                }), e.getPoiList(REPLACE);
                            }
                        } else e.setData({
                            scrollViewHeight: e.data.windowHeight - util.rpx2px(cssFilterHeight + cssSearchHeight + cssTabHeight),
                            poiListType: enumPoiListType.POI
                        }), e.setData({
                            tagResults: o
                        }), e.getPoiList2(REPLACE, a);
                    } else a.poi && (e.setData({
                        scrollViewHeight: e.data.windowHeight - util.rpx2px(cssFilterHeight + cssSearchHeight + cssTabHeight),
                        poiListType: enumPoiListType.POI
                    }), e.getPoiList2(REPLACE, a));
                });
            }
        },
        bindtapIndexTag: function bindtapIndexTag(e) {
            var t = e.currentTarget.dataset.name, a = e.currentTarget.dataset.id, r = "/pages/index_tag/index_tag?name=" + encodeURIComponent(t) + "&feedId=" + a;
            wx.navigateTo({
                url: r
            });
        },
        bindtapItem: function bindtapItem(e) {
            var t = e.currentTarget.dataset.id;
            console.log("poiId: " + t);
            var a = appLaunchData.getUserLocation(), r = e.currentTarget.dataset, i = (t = r.id, 
            r.index);
            reporter.getReporter(16373).currentPage(this.reportData.pageName).prevPage(this.mmPrevPage.mmReportData.pageName).sessionType(0).sessionId(reportSession.getId()).action(reportEnum.enumPoiTagAction.POI_CLICKED).poiId(t).tagId().abtestId().timeStamp2(Math.floor(new Date().getTime() / 1e3)).groupId().longitude(Math.floor(1e6 * a.longitude)).latitude(Math.floor(1e6 * a.latitude)).menuCategoryId(this.reportData.menuCategoryId).price(this.reportData.price).area(this.reportData.area).query(this.data.query).sortType(this.reportData.sortType).selectCity().requestId(this.reportData.pageRequestId).prevRequestId(this.mmPrevPage.mmReportData.pageRequestId).poiClickedIndex(i + 1).poiUgcLabelScene(this.data.poiList[i].recommendText.scene).reportToServer(), 
            wx.navigateTo({
                url: "/pages/poi_detail/poi_detail?poiId=" + encodeURIComponent(t)
            });
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
            this.data.continueFlag && (this.data.poiListType == enumPoiListType.POI ? this.getPoiList2(APPEND) : this.getPoiList(APPEND));
        },
        observeIntersection: function observeIntersection() {
            var e = this;
            wx.nextTick(function() {
                e.poiIntersectionObserver && e.poiIntersectionObserver.disconnect();
                var t = wx.createIntersectionObserver(e, {
                    thresholds: [ 1 ],
                    initialRatio: 0,
                    observeAll: !0
                });
                t.relativeTo("#scrollView", {}), t.observe(".selector-poi", function(t) {
                    var a = t.dataset, r = a.id, i = a.index;
                    if (!e.reportData.poiExposedObjSet[r]) {
                        e.reportData.poiExposedObjSet[r] = 1;
                        var o = appLaunchData.getUserLocation();
                        reporter.getReporter(16373).currentPage(e.reportData.pageName).prevPage(e.mmPrevPage.mmReportData.pageName).sessionType(0).sessionId(reportSession.getId()).action(reportEnum.enumPoiTagAction.POI_EXPOSED).poiId(r).tagId().abtestId().timeStamp2(Math.floor(new Date().getTime() / 1e3)).groupId().longitude(Math.floor(1e6 * o.longitude)).latitude(Math.floor(1e6 * o.latitude)).menuCategoryId(e.reportData.menuCategoryId).price(e.reportData.price).area(e.reportData.area).query(e.data.query).sortType(e.reportData.sortType).selectCity().requestId(e.reportData.pageRequestId).prevRequestId(e.mmPrevPage.mmReportData.pageRequestId).poiClickedIndex(i + 1).poiUgcLabelScene(e.data.poiList[i].recommendText.scene).lazyReportToServer();
                    }
                }), e.poiIntersectionObserver = t;
            });
        },
        bindtapSmlArea: function bindtapSmlArea(e) {
            var t = e.currentTarget.dataset.index, a = e.currentTarget.dataset.areaid;
            this.setData({
                selectedSimilarAreaIndex: t,
                shouldShowSimilarAreaPanel: !1,
                resultSelectedSimilarAreaCategoryId: a
            }), this.getPoiList(REPLACE);
        },
        bindtapSelectedSmlArea: function bindtapSelectedSmlArea(e) {
            this.setData({
                shouldShowSimilarAreaPanel: !this.data.shouldShowSimilarAreaPanel
            });
        },
        getOnFilterChange: function getOnFilterChange() {
            this.data.poiListType == enumPoiListType.POI ? this.getPoiList2(REPLACE) : this.getPoiList(REPLACE);
        },
        toFeedBack: function toFeedBack() {
            this.data.query;
            var e = JSON.stringify({
                query: this.data.query
            });
            wx.navigateTo({
                url: "/pages/app_feedback/app_feedback?word=" + encodeURIComponent(e)
            });
        },
        getPoiList: function getPoiList(e) {
            var t = this, a = t.getFilterOption();
            e || (t.setData({
                poiList: [],
                isPoiListLoaded: !1,
                context: ""
            }), t.reportData = util.clone(t.defaultReportData), t.reportData.pageRequestId = util.getTimeRandomId()), 
            t.setData({
                shouldShowBottomLoading: !0
            });
            var r = appLaunchData.getUserLocation();
            new cgi.SimpleRequest("GetPoiList", {
                location: r,
                options: a,
                context: t.data.context,
                requestId: t.data.requestId
            }).ensureNoSameUrlProcessing().send(function(a) {
                var r = renderDataUtil.getRenderPoiInfoList(a.poi);
                renderDataUtil.setAndObserveNewPoiList(t, "poiList", r, e), t.setData({
                    isPoiListLoaded: !0,
                    context: a.context,
                    continueFlag: a.continueFlag,
                    shouldShowBottomLoading: !1
                }), t.observeIntersection();
            });
        },
        getPoiList2: function getPoiList2(e, t) {
            var a = this;
            if (t) o(t); else {
                e || (a.setData({
                    poiList: [],
                    isPoiListLoaded: !1,
                    context: "",
                    requestId: a.data.requestId
                }), a.reportData = util.clone(a.defaultReportData), a.reportData.pageRequestId = util.getTimeRandomId()), 
                a.setData({
                    shouldShowBottomLoading: !0
                });
                var r = a.getFilterOption(), i = appLaunchData.getUserLocation();
                new cgi.SimpleRequest("SearchPoiList", {
                    location: i,
                    context: a.data.context,
                    options: r
                }).ensureNoSameUrlProcessing().send(o);
            }
            function o(t) {
                var r = renderDataUtil.getRenderPoiInfoList(t.poi);
                t.hitInfo && t.hitInfo.hitField && t.hitInfo.hitField.length && r.forEach(function(e, a) {
                    if (t.hitInfo.hitField[a] && t.hitInfo.hitField[a].field && t.hitInfo.hitField[a].field.length) {
                        var r = t.hitInfo.hitField[a].field, i = 0, o = "", s = "";
                        r.some(function(e) {
                            if (101 == e.fieldId) return i = 101, o = "", !0;
                            102 == e.fieldId ? 101 != i && (i = 102, o = "别名: " + e.fieldWord, e.segWord && e.segWord.length && (s = e.segWord[0])) : 103 == e.fieldId ? 101 != i && (i = 103, 
                            o = "别名: " + e.fieldWord, e.segWord && e.segWord.length && (s = e.segWord[0])) : 104 == e.fieldId ? 101 != i && 102 != i && 103 != i && (i = 104, 
                            o = "特色菜: " + e.fieldWord, e.segWord && e.segWord.length && (s = e.segWord[0])) : 105 == e.fieldId && 101 != i && 102 != i && 103 != i && 104 != i && (i = 104, 
                            o = "标签: " + e.fieldWord, e.segWord && e.segWord.length && (s = e.segWord[0]));
                        }), o && (e.title2 += " · " + o, e.title2HitWord = s);
                    }
                }), renderDataUtil.setAndObserveNewPoiList(a, "poiList", r, e), a.setData({
                    isPoiListLoaded: !0,
                    context: t.context,
                    continueFlag: t.continueFlag,
                    shouldShowBottomLoading: !1
                }), a.observeIntersection();
            }
        }
    }
});