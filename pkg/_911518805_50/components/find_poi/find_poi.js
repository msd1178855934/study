var _data;

function _defineProperty(e, t, a) {
    return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = a, e;
}

var cgi = require("../../utils/cgi"), app = getApp(), util = require("../../utils/util"), questionStorage = require("../../utils/questionStorage"), kitchenStorage = require("../../utils/kitchenStorage"), storage = require("../../utils/storage"), reporter = require("../../utils/reporter"), reportEnum = require("../../utils/reportEnum"), reportSession = require("../../utils/report_session"), renderDataUtil = require("../../utils/render_data_util"), appLaunchData = require("../../utils/appLaunchData"), mixinCss = require("../../utils/mixinCss"), chooseMediaUtil = require("../../utils/chooseMediaUtil"), declareBinding = require("../../utils/model_lib/declareBinding"), schema = require("../../utils/model/model_schema");

Component({
    properties: {
        props: {
            type: Object,
            observer: function observer(e, t, a) {
                this.hasAttached && this.render();
            }
        }
    },
    data: (_data = {
        shouldShowBottomLoading: !0,
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
    } ]), _defineProperty(_data, "shouldShowOrderPanel", !1), _defineProperty(_data, "resultSelectedOrderId", "2"), 
    _defineProperty(_data, "resultSelectedOrderName", "综合排序"), _defineProperty(_data, "isInited", !1), 
    _data),
    hasAttached: 0,
    created: function created() {
        Object.assign(this, {
            hasAttached: 0,
            mmReportData: {
                pageRequestId: "",
                pageName: ""
            }
        });
    },
    attached: function attached() {
        var e = this;
        e.hasAttached = 1, e.render(), app.addLaunchListener(function() {
            app.checkAndUpdateUserCurrentLocation();
            appLaunchData.isUsingRealCurrentLocation();
            e.setData({
                resultSelectedAreaCategoryId: "localId_11",
                resultSelectedAreaCategoryName: "位置",
                areaCategoryLeftId: "localId_10",
                areaCategoryRightId: "localId_11"
            });
            var t = appLaunchData.getUserLocation();
            new cgi.SimpleRequest("getcategory", {
                location: t
            }).send(function(t) {
                var a = t.area, r = [];
                a.forEach(function(e) {
                    var t = {};
                    t.name = e.name, t.id = e.id, e.subCategory && e.subCategory.length && (t.subCategory = e.subCategory), 
                    r.push(t);
                }), r.unshift({
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
                });
                var o = t.friendPoiCategory.map(function(e) {
                    return {
                        id: e.id,
                        name: e.name,
                        label: e.name + "(" + e.poiCount + ")"
                    };
                }), i = 0;
                t.friendPoiCategory.forEach(function(e) {
                    return i += e.poiCount;
                }), o.unshift({
                    id: "wx_filter0",
                    name: "全部类别",
                    label: "全部类别(" + i + ")"
                }), e.setData({
                    areaCategory: r,
                    menuCategory: o
                });
            });
        });
    },
    methods: {
        mmReportData: {
            pageRequestId: 0,
            pageName: ""
        },
        isFirstInit: !0,
        render: function render() {
            this.mmReportData.pageName = this.data.props.pageName, this.mmReportData.scene = this.data.props.scene, 
            this.setData({
                filtersTop: this.data.props.filtersTop
            });
        },
        getDetailPoiList: function getDetailPoiList(e) {
            var t = this;
            t.setData({
                shouldShowBottomLoading: !0
            }), e || (t.setData({
                poiList: [],
                context: ""
            }), t.mmReportData.pageRequestId = util.getTimeRandomId(), t.mmReportData.requestIdStr = util.guid());
            var a = {};
            t.data.resultSelectedAreaCategoryId && ("localId_10" == t.data.resultSelectedAreaCategoryId || ("localId_11" == t.data.resultSelectedAreaCategoryId ? (a.radius = 3e4, 
            t.mmReportData.area = 3e4) : "localId_12" == t.data.resultSelectedAreaCategoryId ? (a.radius = 1e3, 
            t.mmReportData.area = 1e3) : "localId_13" == t.data.resultSelectedAreaCategoryId ? (a.radius = 2e3, 
            t.mmReportData.area = 2e3) : "localId_14" == t.data.resultSelectedAreaCategoryId ? (a.radius = 5e3, 
            t.mmReportData.area = 5e3) : (a.areaId = t.data.resultSelectedAreaCategoryId, t.mmReportData.area = t.data.resultSelectedAreaCategoryId))), 
            t.data.resultSelectedMenuCategoryId && (a.categoryId = [ t.data.resultSelectedMenuCategoryId ], 
            t.mmReportData.menuCategoryId = t.data.resultSelectedMenuCategoryId), t.data.resultSelectedOrderId && (a.sortType = +t.data.resultSelectedOrderId, 
            t.mmReportData.sortType = t.data.resultSelectedOrderId);
            var r = appLaunchData.getUserLocation();
            if (t.isFirstInit) {
                t.isFirstInit = !1;
                var o = new Date().getTime();
                appLaunchData.isUsingRealCurrentLocation() || appLaunchData.addConfirmUserLocationListener(function() {
                    appLaunchData.isUsingRealCurrentLocation() && new Date().getTime() - o <= 3e3 && t.getDetailPoiList();
                });
            }
            new cgi.SimpleRequest("GetPoiList", {
                location: r,
                options: a,
                context: t.data.context,
                requestId: t.mmReportData.requestIdStr
            }).ensureNoSameUrlProcessing().send(function(a) {
                if (wx.stopPullDownRefresh(), t.data.isInited = !0, t.data.context = a.context, 
                t.data.continueFlag = a.continueFlag, !a.poi && !t.data.poiList.length) return t.setData({
                    shouldShowBottomLoading: !1
                }), void wx.showToast({
                    title: "没有发现符合条件的门店",
                    icon: "none",
                    duration: 2500
                });
                var r = [];
                if (t.mmPrevPage && t.mmPrevPage.mmReportData.pageName && t.mmPrevPage.mmReportData.pageName, 
                a.poi.forEach(function(e) {
                    r.push({
                        poi: renderDataUtil.getRenderPoiInfo(e),
                        reportData: {
                            pageId: reportEnum.enumPageName.TIMELINE,
                            scene: reportEnum.enumSceneType.FIND_POI,
                            prevPageId: 0,
                            menuCategoryId: t.mmReportData.menuCategoryId || "",
                            price: t.mmReportData.price || "",
                            area: t.mmReportData.area || "",
                            query: t.mmReportData.query || "",
                            requestId: t.mmReportData.requestIdStr || "",
                            sortType: t.mmReportData.sortType || ""
                        }
                    });
                }), e) {
                    for (var o = t.data.poiList, i = r, d = {}, s = o.length; s < o.length + i.length; s++) {
                        d["poiList[" + s + "]"] = i[s - o.length];
                    }
                    t.setData(d);
                } else t.setData({
                    poiList: r
                });
                t.setData({
                    shouldShowBottomLoading: !1
                });
            });
        },
        setPanelStyle: function setPanelStyle() {
            var e = app.globalData.pageFriendsTimeline;
            e.scrollTop <= e.findPoi_scrollTop4FilterSticky ? this.setData({
                useAbs: 1
            }) : this.setData({
                useAbs: 0,
                top: e.findPoi_filterPanelFixedTop
            });
        },
        bindtapMenuFilter: function bindtapMenuFilter(e) {
            this.setPanelStyle(), this.data.shouldShowMenuCategoryPanel ? this.setData({
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
            this.setPanelStyle(), this.data.shouldShowAreaCategoryPanel ? this.setData({
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
            this.setPanelStyle(), this.data.shouldShowOrderPanel ? this.setData({
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
            var t = e.detail.id, a = e.detail.name;
            this.setData({
                resultSelectedMenuCategoryId: t,
                resultSelectedMenuCategoryName: a
            }), this.bindtapMask(), this.getDetailPoiList();
        },
        bindAreaCategorySelect: function bindAreaCategorySelect(e) {
            var t = e.detail.id, a = e.detail.name;
            this.setData({
                resultSelectedAreaCategoryId: t,
                resultSelectedAreaCategoryName: a
            }), this.bindtapMask(), this.getDetailPoiList();
        },
        bindOrderSelect: function bindOrderSelect(e) {
            var t = e.detail.id, a = e.detail.name;
            this.setData({
                resultSelectedOrderId: t,
                resultSelectedOrderName: a
            }), this.bindtapMask(), this.getDetailPoiList();
        },
        onReachBottom: function onReachBottom(e) {
            this.data.continueFlag && this.getDetailPoiList(!0);
        },
        noop: function noop() {}
    }
});