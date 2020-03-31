var _extends = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var a = arguments[t];
        for (var o in a) {
            Object.prototype.hasOwnProperty.call(a, o) && (e[o] = a[o]);
        }
    }
    return e;
}, app = getApp(), cgi = require("../../utils/cgi"), util = require("../../utils/util"), kitchenStorage = require("../../utils/kitchenStorage"), mixinCss = require("../../utils/mixinCss"), chooseMediaUtil = require("../../utils/chooseMediaUtil"), reporter = require("../../utils/reporter"), reportEnum = require("../../utils/reportEnum"), reportSession = require("../../utils/report_session"), reportPostImpression = require("../../utils/reportPostImpression"), appLaunchData = require("../../utils/appLaunchData"), cssHdHeight = 244;

Page({
    data: {
        isIpx: util.isIpx(),
        query: "",
        isSearching: !0,
        list4Search: [],
        shouldShowBottomLoading4Search: !0,
        continueFlag4Search: 0,
        context4Search: "",
        searchingCount: 0,
        currentPoiItemIndex: 0,
        currentPoiName: "",
        showChooseMediaPanel: !1,
        lastSelectedPoiItem: {},
        tagName: "",
        title: "选择餐厅",
        hasSetChoosePoiResult: !1,
        scrollViewHeight: util.getSafeScreenHeight() - util.rpx2px(mixinCss.navTitleHeight + cssHdHeight)
    },
    onLoad: function onLoad(e) {
        var t = this;
        app.addLaunchListener(function() {
            var a = "";
            e.tagName && (a = decodeURIComponent(e.tagName)), t.setData({
                tagName: a,
                title: "选择餐厅"
            }), reporter.getReporter(16501).pageId(reportEnum.enumPageName.SEARCH_POI_LIST).time(Math.floor(new Date().getTime() / 1e3)).launchScene(reportSession.getLaunchScene()).sessionId(reportSession.getId()).reportToServer(), 
            t.sendSearchRequest("");
        });
    },
    bindSearchInput: function bindSearchInput(e) {
        var t = e.detail.value;
        this.setData({
            query: t,
            list4Search: [],
            shouldShowBottomLoading4Search: !0
        }), console.log("searching ", t), this.sendSearchRequest(t);
    },
    bindInputViewBlur: function bindInputViewBlur(e) {},
    bindInputViewFocus: function bindInputViewFocus(e) {
        console.log("bindInputViewFocus"), this.setData({
            showChooseMediaPanel: !1
        });
    },
    sendSearchRequest: util.debounce(function(e) {
        var t = this;
        t.setData({
            shouldShowBottomLoading4Search: !0,
            continueFlag4Search: 0,
            context4Search: ""
        }), t.data.searchingCount++;
        var a = appLaunchData.getUserLocation();
        new cgi.SimpleRequest("searchpoi", {
            location: a,
            options: {
                radius: 0,
                categoryId: [],
                query: e
            },
            context: ""
        }).send(function(a) {
            t.data.searchingCount--, e == t.data.query ? (t.setData({
                shouldShowBottomLoading4Search: !1
            }), e && reportPostImpression.addQueryString(e), t.renderPoiList4Search(a)) : 0 == t.data.searchingCount && t.setData({
                shouldShowBottomLoading4Search: !1
            });
        });
    }, 500),
    renderPoiList4Search: function renderPoiList4Search(e) {
        console.log("data.continueFlag: " + e.continueFlag), this.setData({
            continueFlag4Search: e.continueFlag,
            context4Search: e.context
        });
        var t = [];
        if (e.poi && e.poi.length) {
            var a = this.data.query;
            e.poi.forEach(function(e) {
                var o = {};
                if (o.unique = e.base.id, o.name = e.base.name, o.addr = e.base.address.address, 
                o.topImage = "https://res.wx.qq.com/a/fed_upload/e6571a6e-666f-49d2-8292-7766fa530b3a/poi-default.jpg", 
                e.base.logo && (e.base.logo.thumbUrl ? o.topImage = e.base.logo.thumbUrl : e.base.logo.url && (o.topImage = e.base.logo.url)), 
                o.categoryName = "", e.base.category && e.base.category[0] && e.base.category[0].name) {
                    o.categoryName = e.base.category[0].name;
                    var r = o.categoryName.lastIndexOf(":");
                    -1 != r && (o.categoryName = o.categoryName.substring(r + 1, o.categoryName.length));
                }
                if (o.price = 0, e.price && e.price.price && (o.price = parseInt(e.price.price) / 100), 
                o.area = "", e.area && e.area.length) if (1 === e.area[0].type) o.area = e.area[0].name; else {
                    var i = e.area.filter(function(e) {
                        return 1 === e.type;
                    }) || [];
                    i.length > 0 ? o.area = i[0].name : o.area = "";
                }
                o.poiDesc = "", o.categoryName && (o.poiDesc = o.categoryName), o.area && (o.poiDesc && o.poiDesc.length ? o.poiDesc = o.poiDesc + " " + o.area : o.poiDesc = o.area);
                var n = o.name.indexOf(a);
                -1 != n ? (o.nameBeforeMatchPart = o.name.substring(0, n), o.nameMatchPart = a, 
                o.nameAfterMatchPart = o.name.substring(n + a.length, o.name.length)) : -1 != (n = o.poiDesc.indexOf(a)) && (o.poiDescBeforeMatchPart = o.poiDesc.substring(0, n), 
                o.poiDescMatchPart = a, o.poiDescAfterMatchPart = o.poiDesc.substring(n + a.length, o.poiDesc.length)), 
                o.distance = Math.round(e.base.location.distance), o.distanceString = o.distance + "m", 
                o.distance >= 1e3 && (o.distanceString = parseInt(o.distance / 1e3) + "km");
                var s = 0, c = 0;
                e.base.location && e.base.location.latitude && (s = e.base.location.latitude), e.base.location && e.base.location.longitude && (c = e.base.location.longitude), 
                o.location = {
                    latitude: s,
                    longitude: c
                }, t.push(o);
            }), t = this.data.list4Search.concat(t), this.setData({
                list4Search: t
            }), console.log("list for search", this.data.list4Search);
        }
    },
    onReady: function onReady() {},
    onShow: function onShow() {},
    onHide: function onHide() {},
    onUnload: function onUnload() {
        this.data.hasSetChoosePoiResult || reportPostImpression.setChoosePoiResult(reportPostImpression.enumChoosePoiResult.CHOOSE_CANCELLED);
    },
    onPullDownRefresh: function onPullDownRefresh() {},
    bindscrolltolower: function bindscrolltolower() {
        this.onReachBottom();
    },
    onReachBottom: function onReachBottom() {
        console.log("onReachBottom");
        var e = this;
        if (e.data.continueFlag4Search && e.data.context4Search) {
            e.setData({
                shouldShowBottomLoading4Search: !0
            });
            var t = appLaunchData.getUserLocation();
            new cgi.SimpleRequest("searchpoi", {
                location: t,
                options: {
                    radius: 0,
                    categoryId: [],
                    query: e.data.query
                },
                context: e.data.context4Search
            }).send(function(t, a) {
                a.options.query == e.data.query && (e.renderPoiList4Search(t), e.setData({
                    shouldShowBottomLoading4Search: !1
                }));
            });
        }
    },
    bindtapSearchPlaceHolder: function bindtapSearchPlaceHolder() {},
    bindtapCancelSearch: function bindtapCancelSearch() {
        if (0 != this.data.query.length) {
            this.setData({
                query: "",
                list4Search: [],
                shouldShowBottomLoading4Search: !0,
                continueFlag4Search: 0,
                context4Search: ""
            }), this.sendSearchRequest("");
        }
    },
    catchtouchmove: function catchtouchmove() {},
    bindtapItem: function bindtapItem(e) {
        var t = e.currentTarget.dataset.index, a = _extends({}, {
            name: "",
            unique: "",
            topImage: "",
            categoryName: "",
            price: 0,
            distanceString: "",
            distance: 0,
            addr: "",
            location: {},
            area: ""
        }, this.data.list4Search[t]), o = a.name, r = a.unique;
        a.location;
        if ("" !== r) {
            var i = {
                id: r,
                name: o,
                topImage: a.topImage,
                categoryName: a.categoryName,
                price: a.price,
                distance: a.distance,
                address: a.addr,
                location: a.location,
                area: a.area
            };
            reportPostImpression.updatePoiForPostImpression(i), this.data.query && 0 !== this.data.query.length ? reportPostImpression.setChoosePoiResult(reportPostImpression.enumChoosePoiResult.CHOOSE_USER_SEARCHED_POI) : reportPostImpression.setChoosePoiResult(reportPostImpression.enumChoosePoiResult.CHOOSE_RECOMMENDED_POI), 
            this.data.hasSetChoosePoiResult = !0, wx.navigateBack({});
            var n = appLaunchData.getUserLocation();
            reporter.getReporter(16373).currentPage(reportEnum.enumPageName.SEARCH_POI_LIST).prevPage(reportEnum.enumPageName.FRIEND_TIMELINE).sessionType(0).sessionId(reportSession.getId()).action(reportEnum.enumPoiTagAction.POI_CLICKED).poiId(r).tagId().abtestId().timeStamp2(Math.floor(new Date().getTime() / 1e3)).groupId().longitude(Math.floor(1e6 * n.longitude)).latitude(Math.floor(1e6 * n.latitude)).requestId().prevRequestId().poiClickedIndex(t + 1).reportToServer();
        }
    }
});