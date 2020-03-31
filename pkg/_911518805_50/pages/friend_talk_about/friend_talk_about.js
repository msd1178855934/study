var _data;

function _defineProperty(e, a, t) {
    return a in e ? Object.defineProperty(e, a, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[a] = t, e;
}

var cgi = require("../../utils/cgi"), app = getApp(), util = require("../../utils/util"), questionStorage = require("../../utils/questionStorage"), kitchenStorage = require("../../utils/kitchenStorage"), storage = require("../../utils/storage"), reporter = require("../../utils/reporter"), reportEnum = require("../../utils/reportEnum"), reportSession = require("../../utils/report_session"), renderDataUtil = require("../../utils/render_data_util"), appLaunchData = require("../../utils/appLaunchData"), mixinCss = require("../../utils/mixinCss"), chooseMediaUtil = require("../../utils/chooseMediaUtil"), declareBinding = require("../../utils/model_lib/declareBinding"), schema = require("../../utils/model/model_schema"), MMPage = require("../../utils/mmFramework/mm_page"), cssFilterHeight = 102;

MMPage({
    data: (_data = {
        isIpx: util.isIpx(),
        scrollViewHeight: wx.getSystemInfoSync() - util.rpx2px(cssFilterHeight),
        name: "",
        context: "",
        continueFlag: 1,
        poiList: [],
        reasonId: 0,
        shouldShowMask: !1,
        shouldShowFilterFixed: !1,
        areaCategory: [],
        shouldShowAreaCategoryPanel: !1,
        resultSelectedAreaCategoryId: "localId_11",
        resultSelectedAreaCategoryName: "位置",
        areaCategoryLeftId: "localId_10",
        areaCategoryRightId: "localId_11"
    }, _defineProperty(_data, "areaCategoryLeftId", "localId_10"), _defineProperty(_data, "areaCategoryRightId", "localId_12"), 
    _defineProperty(_data, "menuCategory", [ {
        id: "wx_filter0",
        name: "全部类别"
    } ]), _defineProperty(_data, "shouldShowMenuCategoryPanel", !1), _defineProperty(_data, "resultSelectedMenuCategoryId", ""), 
    _defineProperty(_data, "resultSelectedMenuCategoryName", "菜系"), _defineProperty(_data, "orderOptions", [ {
        id: "2",
        name: "综合排序"
    }, {
        id: "1",
        name: "距离优先"
    } ]), _defineProperty(_data, "shouldShowOrderPanel", !1), _defineProperty(_data, "resultSelectedOrderId", "1"), 
    _defineProperty(_data, "resultSelectedOrderName", "距离优先"), _defineProperty(_data, "isInited", !1), 
    _defineProperty(_data, "useRealCurrentLocationToGetData", appLaunchData.isUsingRealCurrentLocation()), 
    _data),
    defaultReportData: {
        pageRequestId: 0,
        poiExposedObjSet: {},
        pageName: reportEnum.enumPageName.FRIEND_TALK_ABOUT
    },
    mmReportData: {
        pageRequestId: 0,
        poiExposedObjSet: {},
        pageName: reportEnum.enumPageName.FRIEND_TALK_ABOUT
    },
    onLoad: function onLoad(e) {
        var a = this;
        a.mmReportData = util.clone(a.defaultReportData), a.mmReportData.scene = +e.pageScene, 
        wx.hideShareMenu(), a.setData({
            shouldShowBottomLoading: !0
        }), app.addLaunchListener(function() {
            app.checkAndUpdateUserCurrentLocation(), a.setData({
                useRealCurrentLocationToGetData: appLaunchData.isUsingRealCurrentLocation()
            }), appLaunchData.isUsingRealCurrentLocation() || a.setData({
                orderOptions: [ {
                    id: "2",
                    name: "综合排序"
                } ]
            }), a.setData({
                resultSelectedAreaCategoryId: "localId_11",
                resultSelectedAreaCategoryName: "位置",
                areaCategoryLeftId: "localId_10",
                areaCategoryRightId: "localId_11"
            });
            var e = appLaunchData.getUserLocation();
            new cgi.SimpleRequest("getcategory", {
                location: e
            }).send(function(e) {
                var t = e.area, r = [];
                t.forEach(function(e) {
                    var a = {};
                    a.name = e.name, a.id = e.id, e.subCategory && e.subCategory.length && (a.subCategory = e.subCategory), 
                    r.push(a);
                }), appLaunchData.isUsingRealCurrentLocation() ? r.unshift({
                    id: "localId_10",
                    name: "距离",
                    subCategory: [ {
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
                });
                var o = e.friendPoiCategory.map(function(e) {
                    return {
                        id: e.id,
                        name: e.name,
                        label: e.name + "(" + e.poiCount + ")"
                    };
                }), i = 0;
                e.friendPoiCategory.forEach(function(e) {
                    return i += e.poiCount;
                }), o.unshift({
                    id: "wx_filter0",
                    name: "全部类别",
                    label: "全部类别(" + i + ")"
                }), a.setData({
                    areaCategory: r,
                    menuCategory: o
                }), a.getDetailPoiList();
            });
        }), reporter.getReporter(16501).pageId(a.mmReportData.pageName).time(Math.floor(new Date().getTime() / 1e3)).launchScene(reportSession.getLaunchScene()).sessionId(reportSession.getId()).reportToServer();
    },
    onReady: function onReady() {},
    getDetailPoiList: function getDetailPoiList(e) {
        var a = this;
        a.setData({
            shouldShowBottomLoading: !0
        }), e || (a.setData({
            poiList: [],
            context: ""
        }), a.mmReportData.pageRequestId = util.getTimeRandomId(), a.mmReportData.requestIdStr = util.guid());
        var t = {
            entryType: 1
        };
        a.data.resultSelectedAreaCategoryId && ("localId_10" == a.data.resultSelectedAreaCategoryId || ("localId_11" == a.data.resultSelectedAreaCategoryId ? (t.radius = 3e4, 
        a.mmReportData.area = 3e4) : "localId_12" == a.data.resultSelectedAreaCategoryId ? (t.radius = 1e3, 
        a.mmReportData.area = 1e3) : "localId_13" == a.data.resultSelectedAreaCategoryId ? (t.radius = 2e3, 
        a.mmReportData.area = 2e3) : "localId_14" == a.data.resultSelectedAreaCategoryId ? (t.radius = 5e3, 
        a.mmReportData.area = 5e3) : (t.areaId = a.data.resultSelectedAreaCategoryId, a.mmReportData.area = a.data.resultSelectedAreaCategoryId))), 
        a.data.resultSelectedMenuCategoryId && (t.categoryId = [ a.data.resultSelectedMenuCategoryId ], 
        a.mmReportData.menuCategoryId = a.data.resultSelectedMenuCategoryId), a.data.resultSelectedOrderId && (t.sortType = +a.data.resultSelectedOrderId, 
        a.mmReportData.sortType = a.data.resultSelectedOrderId);
        var r = appLaunchData.getUserLocation();
        new cgi.SimpleRequest("GetPoiList", {
            location: r,
            options: t,
            context: a.data.context,
            requestId: a.mmReportData.requestIdStr
        }).ensureNoSameUrlProcessing().send(function(t) {
            if (a.data.isInited = !0, a.data.context = t.context, a.data.continueFlag = t.continueFlag, 
            !t.poi && !a.data.poiList.length) return a.setData({
                shouldShowBottomLoading: !1
            }), void wx.showToast({
                title: "没有发现符合条件的门店",
                icon: "none",
                duration: 2500
            });
            a.mmPrevPage && a.mmPrevPage.mmReportData.pageName && a.mmPrevPage.mmReportData.pageName;
            var r = [];
            if (t.poi.forEach(function(e) {
                r.push({
                    poi: renderDataUtil.getRenderPoiInfo(e),
                    reportData: {
                        pageId: a.mmReportData.pageName || "",
                        scene: a.mmReportData.scene || "",
                        prevPageId: reportEnum.enumPageName.TIMELINE,
                        menuCategoryId: a.mmReportData.menuCategoryId || "",
                        price: a.mmReportData.price || "",
                        area: a.mmReportData.area || "",
                        query: a.mmReportData.query || "",
                        requestId: a.mmReportData.requestIdStr || "",
                        sortType: a.mmReportData.sortType || ""
                    }
                });
            }), e) {
                for (var o = a.data.poiList, i = r, d = {}, n = o.length; n < o.length + i.length; n++) {
                    d["poiList[" + n + "]"] = i[n - o.length];
                }
                a.setData(d);
            } else a.setData({
                poiList: r
            });
            a.setData({
                shouldShowBottomLoading: !1
            }), declareBinding({
                instance: a,
                schema: schema.PoiSchema,
                arrayPath: "poiList",
                mapping: {
                    "poi.id": "id",
                    "poi.isMark": "isMark"
                }
            });
        });
    },
    bindtapMenuFilter: function bindtapMenuFilter(e) {
        this.data.shouldShowMenuCategoryPanel ? this.setData({
            shouldShowFilterFixed: !1,
            shouldShowMask: !1,
            shouldShowMenuCategoryPanel: !1,
            shouldShowAreaCategoryPanel: !1,
            shouldShowOrderPanel: !1
        }) : this.setData({
            shouldShowFilterFixed: !0,
            shouldShowMask: !0,
            shouldShowMenuCategoryPanel: !0,
            shouldShowAreaCategoryPanel: !1,
            shouldShowOrderPanel: !1
        });
    },
    bindtapAreaFilter: function bindtapAreaFilter(e) {
        this.data.shouldShowAreaCategoryPanel ? this.setData({
            shouldShowFilterFixed: !1,
            shouldShowMask: !1,
            shouldShowMenuCategoryPanel: !1,
            shouldShowAreaCategoryPanel: !1,
            shouldShowOrderPanel: !1
        }) : this.setData({
            shouldShowFilterFixed: !0,
            shouldShowMask: !0,
            shouldShowMenuCategoryPanel: !1,
            shouldShowAreaCategoryPanel: !0,
            shouldShowOrderPanel: !1
        });
    },
    bindtapOrderFilter: function bindtapOrderFilter() {
        this.data.shouldShowOrderPanel ? this.setData({
            shouldShowFilterFixed: !1,
            shouldShowMask: !1,
            shouldShowMenuCategoryPanel: !1,
            shouldShowAreaCategoryPanel: !1,
            shouldShowOrderPanel: !1
        }) : this.setData({
            shouldShowFilterFixed: !0,
            shouldShowMask: !0,
            shouldShowMenuCategoryPanel: !1,
            shouldShowAreaCategoryPanel: !1,
            shouldShowOrderPanel: !0
        });
    },
    bindtapMask: function bindtapMask(e) {
        this.setData({
            shouldShowFilterFixed: !1,
            shouldShowMask: !1,
            shouldShowMenuCategoryPanel: !1,
            shouldShowAreaCategoryPanel: !1,
            shouldShowOrderPanel: !1
        });
    },
    bindMenuCategorySelect: function bindMenuCategorySelect(e) {
        console.log("bindMenuCategorySelect", e);
        var a = e.detail.id, t = e.detail.name;
        this.setData({
            resultSelectedMenuCategoryId: a,
            resultSelectedMenuCategoryName: t
        }), this.bindtapMask(), this.getDetailPoiList();
    },
    bindAreaCategorySelect: function bindAreaCategorySelect(e) {
        var a = e.detail.id, t = e.detail.name;
        this.setData({
            resultSelectedAreaCategoryId: a,
            resultSelectedAreaCategoryName: t
        }), this.bindtapMask(), this.getDetailPoiList();
    },
    bindOrderSelect: function bindOrderSelect(e) {
        var a = e.detail.id, t = e.detail.name;
        this.setData({
            resultSelectedOrderId: a,
            resultSelectedOrderName: t
        }), this.bindtapMask(), this.getDetailPoiList();
    },
    onReachBottom: function onReachBottom(e) {
        this.data.continueFlag && this.getDetailPoiList(!0);
    },
    noop: function noop() {}
});