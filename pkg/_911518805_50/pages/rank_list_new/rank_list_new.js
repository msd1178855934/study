var _extends = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var a = arguments[t];
        for (var o in a) {
            Object.prototype.hasOwnProperty.call(a, o) && (e[o] = a[o]);
        }
    }
    return e;
}, app = getApp(), cgi = require("../../utils/cgi"), util = require("../../utils/util"), reporter = require("../../utils/reporter"), reportEnum = require("../../utils/reportEnum"), reportSession = require("../../utils/report_session"), appLaunchData = require("../../utils/appLaunchData"), MMPage = require("../../utils/mmFramework/mm_page"), renderDataUtil = require("../../utils/render_data_util"), declareBinding = require("../../utils/model_lib/declareBinding"), PoiSchema = require("../../utils/model/model_schema").PoiSchema, PoiModel = require("../../utils/model/poi_model"), REPLACE = 0, APPEND = 1;

MMPage({
    mmReportData: {
        pageName: reportEnum.enumPageName.RANK_LIST
    },
    reportData: {
        poiExposedIdSet: {},
        poiExposedIdSet2: {},
        poiExposedIdSet3: {}
    },
    data: {
        tabIndex: 1,
        context: "",
        continueFlag: 1,
        renderPoiList: [],
        shouldShowBottomLoading: !0,
        areaOptions: [ {
            name: "广州市",
            id: "areafilter_7742324733502755168"
        } ],
        selectedAreaId: "areafilter_7742324733502755168",
        scrollViewHeight: util.getSysInfo().windowHeight - util.rpx2px(76),
        context2: "",
        continueFlag2: 1,
        renderPoiList2: [],
        shouldShowBottomLoading2: !0,
        scrollViewHeight2: util.getSysInfo().windowHeight - util.rpx2px(76),
        poiList2EntryType: 4,
        typeOptions: [ {
            name: "最热",
            id: "4"
        }, {
            name: "最新",
            id: "6"
        } ],
        selectedTypeId: "4",
        context3: "",
        continueFlag3: 1,
        renderPoiList3: [],
        shouldShowBottomLoading3: !0,
        categoryOptions: [ {
            name: "粤菜",
            id: "wxfilter_3"
        } ],
        selectedCategoryId: "wxfilter_3",
        scrollViewHeight3: util.getSysInfo().windowHeight - util.rpx2px(76)
    },
    onLoad: function onLoad(e) {
        var t = this, a = 1, o = "", i = "";
        e && e.tabIndex && (a = Number(e.tabIndex)), app.addLaunchListener(function() {
            app.checkAndUpdateUserCurrentLocation(), o = appLaunchData.getCurrentArea().id, 
            e && e.areaId && 1 === a && (o = decodeURIComponent(e.areaId)), e && e.categoryId && 3 === a && (i = decodeURIComponent(e.categoryId));
            var r = appLaunchData.getAllRankArea(), n = appLaunchData.getAllRankCategory();
            t.setData({
                selectedAreaId: o || "areafilter_7742324733502755168",
                areaOptions: r,
                tabIndex: a,
                selectedCategoryId: i || "wxfilter_3",
                categoryOptions: n
            }), t.getPoiListRequest(), t.getPoiListRequest2(), t.getPoiListRequest3();
        }), reporter.getReporter(16501).pageId(reportEnum.enumPageName.RANK_LIST).time(Math.floor(new Date().getTime() / 1e3)).launchScene(reportSession.getLaunchScene()).sessionId(reportSession.getId()).reportToServer();
    },
    onTab1: function onTab1() {
        this.setData({
            tabIndex: 1
        });
    },
    onTab2: function onTab2() {
        this.setData({
            tabIndex: 2
        });
    },
    onTab3: function onTab3() {
        this.setData({
            tabIndex: 3
        });
    },
    getPoiListRequest: function getPoiListRequest() {
        var e = this, t = appLaunchData.getUserLocation();
        e.setData({
            renderPoiList: [],
            shouldShowBottomLoading: !0
        }), e.data.context = "", e.data.continueFlag = 1, new cgi.SimpleRequest("getpoilist", {
            location: t,
            options: {
                entryType: 3,
                areaId: e.data.selectedAreaId
            },
            context: e.data.context,
            requestId: util.uuid()
        }).send(function(t) {
            if (t && t.poi) {
                var a = renderDataUtil.getRenderPoiInfoList(t.poi);
                e.setData({
                    renderPoiList: a,
                    shouldShowBottomLoading: !1
                }), declareBinding({
                    instance: e,
                    schema: PoiSchema,
                    arrayPath: "renderPoiList",
                    mapping: {
                        id: "id",
                        isMark: "isMark"
                    }
                }), e.observeIntersection();
            }
        }, function(t) {
            e.setData({
                shouldShowBottomLoading: !1
            });
        });
    },
    getPoiListRequest3: function getPoiListRequest3() {
        var e = this, t = appLaunchData.getUserLocation();
        e.setData({
            renderPoiList3: [],
            shouldShowBottomLoading3: !0
        }), e.data.context3 = "", e.data.continueFlag3 = 1, new cgi.SimpleRequest("getpoilist", {
            location: t,
            options: {
                entryType: 5,
                categoryId: [ e.data.selectedCategoryId ]
            },
            context: "",
            requestId: util.uuid()
        }).send(function(t) {
            if (t && t.poi) {
                var a = renderDataUtil.getRenderPoiInfoList(t.poi);
                e.setData({
                    renderPoiList3: a
                }), declareBinding({
                    instance: e,
                    schema: PoiSchema,
                    arrayPath: "renderPoiList3",
                    mapping: {
                        id: "id",
                        isMark: "isMark"
                    }
                }), e.observeIntersection3();
            }
            e.setData({
                shouldShowBottomLoading3: !1
            });
        }, function(t) {
            e.setData({
                shouldShowBottomLoading3: !1
            });
        });
    },
    getPoiListRequest2: function getPoiListRequest2(e) {
        var t = this;
        if (!t.data.isDoingGetPoiListRequest2) {
            var a = appLaunchData.getUserLocation();
            e || (t.setData({
                renderPoiList2: [],
                shouldShowBottomLoading2: !0
            }), t.data.context2 = "", t.data.continueFlag2 = 1);
            var o = util.uuid();
            t.data.isDoingGetPoiListRequest2 = !0, new cgi.SimpleRequest("getpoilist", {
                location: a,
                options: {
                    entryType: t.data.poiList2EntryType
                },
                context: t.data.context2,
                requestId: o
            }).send(function(a) {
                if (t.data.isDoingGetPoiListRequest2 = !1, t.data.context2 = a.context, t.data.continueFlag2 = a.continueFlag, 
                t.setData({
                    shouldShowBottomLoading2: 1 == a.continueFlag
                }), a && a.poi) {
                    var o = renderDataUtil.getRenderPoiInfoList(a.poi).map(function(e) {
                        return e.ugc.markContact.length > 7 && e.ugc.markContact.splice(7, e.ugc.markContact.length - 7), 
                        e;
                    });
                    if (e) {
                        for (var i = t.data.renderPoiList2, r = o, n = {}, s = i.length, d = r.length, p = s; p < s + d; p++) {
                            n["renderPoiList2[" + p + "]"] = r[p - i.length];
                        }
                        t.setData(_extends({}, n));
                    } else t.setData({
                        renderPoiList2: o
                    });
                    declareBinding({
                        instance: t,
                        schema: PoiSchema,
                        arrayPath: "renderPoiList2",
                        mapping: {
                            id: "id",
                            isMark: "isMark"
                        }
                    }), t.observeIntersection2();
                }
            }, function(e) {
                t.data.isDoingGetPoiListRequest2 = !1, t.setData({
                    shouldShowBottomLoading2: !1
                });
            });
        }
    },
    bindscrolltolower2: function bindscrolltolower2() {
        this.data.continueFlag2 && this.getPoiListRequest2(APPEND);
    },
    getScene: function getScene() {
        return 1 === this.data.tabIndex ? reportEnum.enumSceneType.RANK_LIST_ALL : 2 === this.data.tabIndex ? reportEnum.enumSceneType.RANK_LIST_MARK : 3 === this.data.tabIndex ? reportEnum.enumSceneType.RANK_LIST_CATEGORY : void 0;
    },
    bindTapItem: function bindTapItem(e) {
        var t = e.currentTarget.dataset.id, a = e.currentTarget.dataset.index, o = this.data.tabIndex;
        wx.navigateTo({
            url: "/pages/poi_detail/poi_detail?poiId=" + encodeURIComponent(t)
        });
        var i = appLaunchData.getUserLocation();
        reporter.getReporter(16373).currentPage(this.mmReportData.pageName).scene(this.getScene()).prevPage(reportEnum.enumPageName.TIMELINE).sessionType(0).sessionId(reportSession.getId()).action(reportEnum.enumPoiTagAction.POI_CLICKED).poiId(t).tagId(1 == o ? this.data.selectedAreaId : "").timeStamp2(Math.floor(new Date().getTime() / 1e3)).longitude(Math.floor(1e6 * i.longitude)).latitude(Math.floor(1e6 * i.latitude)).poiClickedIndex(a + 1).requestIdStr(this.data.requestId).reportToServer();
    },
    bindselect: function bindselect(e) {
        e.detail.id !== this.data.selectedAreaId && (this.setData({
            renderPoiList: [],
            shouldShowBottomLoading: !0,
            selectedAreaId: e.detail.id
        }), this.getPoiListRequest(0));
    },
    bindselect3: function bindselect3(e) {
        e.detail.id !== this.data.selectedCategoryId && (this.setData({
            renderPoiList3: [],
            shouldShowBottomLoading3: !0,
            selectedCategoryId: e.detail.id
        }), this.getPoiListRequest3(0));
    },
    bindselect2: function bindselect2(e) {
        if (e.detail.id !== this.data.selectedTypeId) {
            var t = parseInt(e.detail.id);
            4 != t && 6 != t && (console.error("bindselect2, invalid newPoiList2EntryType: " + t), 
            t = 4), this.setData({
                renderPoiList2: [],
                shouldShowBottomLoading2: !0,
                selectedTypeId: e.detail.id,
                poiList2EntryType: t
            }), this.getPoiListRequest2(0);
        }
    },
    onMark: function onMark(e) {
        var t = e.currentTarget.dataset.ismark, a = e.currentTarget.dataset.id, o = 1 == t ? 0 : 1;
        new PoiModel(a).setValue({
            isMark: o
        }), new cgi.SimpleRequest("markpoi", {
            baseRequest: {
                pageId: this.mmReportData.pageName
            },
            poiId: a,
            flag: o
        }).send(function(e) {
            console.log("markpoi resp success: ", e), app.globalData.pageMe && app.globalData.pageMe.refresh(), 
            app.globalData.pageUserProfile && app.globalData.pageUserProfile.refresh();
        }, function(e) {
            console.error("markpoi resp failed", e);
        });
    },
    onTapCloseDropdown: function onTapCloseDropdown() {
        this.selectComponent("#dropdown-ranklist").onToggleDropdown();
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
            t.relativeToViewport(), t.observe(".poi-selector1", function(t) {
                var a = t.dataset, o = a.id, i = a.index;
                if (!e.reportData.poiExposedIdSet[o]) {
                    e.reportData.poiExposedIdSet[o] = 1;
                    var r = appLaunchData.getUserLocation();
                    reporter.getReporter(16373).currentPage(e.mmReportData.pageName).scene(reportEnum.enumSceneType.RANK_LIST_ALL).prevPage(e.mmPrevPage.mmReportData.pageName).sessionType(0).sessionId(reportSession.getId()).action(reportEnum.enumPoiTagAction.POI_EXPOSED).poiId(o).tagId(e.data.selectedAreaId).timeStamp2(Math.floor(new Date().getTime() / 1e3)).longitude(Math.floor(1e6 * r.longitude)).latitude(Math.floor(1e6 * r.latitude)).poiClickedIndex(i + 1).lazyReportToServer();
                }
            }), e.poiIntersectionObserver = t;
        });
    },
    observeIntersection3: function observeIntersection3() {
        var e = this;
        wx.nextTick(function() {
            e.poiIntersectionObserver3 && e.poiIntersectionObserver3.disconnect();
            var t = wx.createIntersectionObserver(e, {
                thresholds: [ 1 ],
                initialRatio: 0,
                observeAll: !0
            });
            t.relativeToViewport(), t.observe(".poi-selector3", function(t) {
                var a = t.dataset, o = a.id, i = a.index;
                if (!e.reportData.poiExposedIdSet3[o]) {
                    e.reportData.poiExposedIdSet3[o] = 1;
                    var r = appLaunchData.getUserLocation();
                    reporter.getReporter(16373).currentPage(e.mmReportData.pageName).scene(reportEnum.enumSceneType.RANK_LIST_CATEGORY).prevPage(e.mmPrevPage.mmReportData.pageName).sessionType(0).sessionId(reportSession.getId()).action(reportEnum.enumPoiTagAction.POI_EXPOSED).poiId(o).tagId(e.data.selectedCategoryId).timeStamp2(Math.floor(new Date().getTime() / 1e3)).longitude(Math.floor(1e6 * r.longitude)).latitude(Math.floor(1e6 * r.latitude)).poiClickedIndex(i + 1).lazyReportToServer();
                }
            }), e.poiIntersectionObserver3 = t;
        });
    },
    observeIntersection2: function observeIntersection2() {
        var e = this;
        wx.nextTick(function() {
            e.poiIntersectionObserver2 && e.poiIntersectionObserver2.disconnect();
            var t = wx.createIntersectionObserver(e, {
                thresholds: [ 1 ],
                initialRatio: 0,
                observeAll: !0
            });
            t.relativeToViewport(), t.observe(".poi-selector2", function(t) {
                var a = t.dataset, o = a.id, i = a.index;
                if (!e.reportData.poiExposedIdSet2[o]) {
                    e.reportData.poiExposedIdSet2[o] = 1;
                    var r = appLaunchData.getUserLocation();
                    reporter.getReporter(16373).currentPage(e.mmReportData.pageName).scene(reportEnum.enumSceneType.RANK_LIST_MARK).prevPage(e.mmPrevPage.mmReportData.pageName).sessionType(0).sessionId(reportSession.getId()).action(reportEnum.enumPoiTagAction.POI_EXPOSED).poiId(o).timeStamp2(Math.floor(new Date().getTime() / 1e3)).longitude(Math.floor(1e6 * r.longitude)).latitude(Math.floor(1e6 * r.latitude)).poiClickedIndex(i + 1).lazyReportToServer();
                }
            }), e.poiIntersectionObserver2 = t;
        });
    }
});