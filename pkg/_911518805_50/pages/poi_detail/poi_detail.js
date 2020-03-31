var _extends = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var o = arguments[t];
        for (var n in o) {
            Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n]);
        }
    }
    return e;
};

function _defineProperty(e, t, o) {
    return t in e ? Object.defineProperty(e, t, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = o, e;
}

var app = getApp(), cgi = require("../../utils/cgi"), util = require("../../utils/util"), poiStorage = require("../../utils/poiStorage"), kitchenStorage = require("../../utils/kitchenStorage"), reporter = require("../../utils/reporter"), reportEnum = require("../../utils/reportEnum"), reportSession = require("../../utils/report_session"), poiDataFormatter = require("../../utils/poiDataFormatter"), reportPostImpression = require("../../utils/reportPostImpression"), mixinCss = require("../../utils/mixinCss"), appLaunchData = require("../../utils/appLaunchData"), renderDataUtil = require("../../utils/render_data_util"), MMPage = require("../../utils/mmFramework/mm_page"), protoConstants = require("../../utils/protoConstants"), declareBinding = require("../../utils/model_lib/declareBinding"), PoiSchema = require("../../utils/model/model_schema").PoiSchema, PoiModel = require("../../utils/model/poi_model");

MMPage({
    mmReportData: {
        pageName: reportEnum.enumPageName.POI_DETAIL
    },
    data: {
        poiId: "",
        continueFlag: !1,
        isGettingFriendComment: !1,
        isGettingStrangerComment: !1,
        poi: {},
        impressionExposedSet: {},
        isIpx: util.isIpx(),
        ipxDangerBottom: mixinCss.ipxDangerBottom,
        poiInfo: {},
        poiAddress: {},
        poiHour: {},
        poiPhone: "",
        visitCount: 0,
        showMoreFriendComments: !1,
        showMoreStrangerComments: !1,
        commentContext: "",
        friendCommentContext: "",
        strangerCommentContext: "",
        friendsImpressionDataList: [],
        strangerImpressionDataList: [],
        reasonList: [],
        hasLaunch: !1,
        showBottomLoading: !0,
        menuPositionTop: 0,
        canShare: util.canUseShareAppMessageAPI(),
        useRealCurrentLocationToGetData: appLaunchData.isUsingRealCurrentLocation(),
        currentPageId: reportEnum.enumPageName.POI_DETAIL
    },
    onLoad: function onLoad(e) {
        var t = this;
        wx.hideShareMenu();
        var o = e.visitCount || 0;
        t.data.poiId = decodeURIComponent(e.poiId);
        var n = 0;
        if (wx.canIUse("getMenuButtonBoundingClientRect")) {
            var a = wx.getMenuButtonBoundingClientRect();
            "android" === util.getSysInfo().platform && (a.top = a.top / 2, a.top = a.top + 8), 
            n = a.top + 2;
        } else n = 30;
        t.data.impressionExposedSet = new Set(), t.setData({
            visitCount: o,
            menuPositionTop: n
        });
        var i = new PoiModel(t.data.poiId).getValue();
        Object.keys(i).length && (t.setData({
            isCacheHit: 1,
            "poiInfo.name": i.name || "",
            "poiInfo.categoryName": i.categoryName || "",
            "poiInfo.price": i.price || 0,
            "poiInfo.area": i.area || "",
            "poiInfo.isMark": i.isMark
        }), app.addUserStateChangeListener(function() {
            var e = app.getUserState();
            console.log("onload friendTimeline cache hit, user_access_permission, checkUserState, userState is: " + e), 
            e != app.enumUserStateError.shouldUpdateWeChat && e != app.enumUserStateError.isPad && e != app.enumUserStateError.error || t.setData({
                shouldShowUserAccessPermission: 1
            });
        })), app.addLaunchListener(function() {
            t.setData({
                hasLaunch: !0
            }), t._onLoad(e), reporter.getReporter(16501).pageId(reportEnum.enumPageName.POI_DETAIL).time(Math.floor(new Date().getTime() / 1e3)).launchScene(reportSession.getLaunchScene()).sessionId(reportSession.getId()).reportToServer(), 
            t.addGlobalFunc();
        });
    },
    _onLoad: function _onLoad(e) {
        var t = this, o = appLaunchData.getUserLocation();
        console.log("getpoidetail request"), new cgi.SimpleRequest("getpoidetail", {
            id: t.data.poiId,
            location: o
        }).send(function(e) {
            console.log("getpoidetail resp ", e), e && (t.data.poi = e.poi), t._reportEnterSharedPage(reportEnum.enumPageState.OK), 
            t.generatePoiHeader(e);
            var o = [];
            e.payRecommendInfo && e.payRecommendInfo.contact && (o = e.payRecommendInfo.contact.slice(0, 10));
            var n = {
                label: "",
                type: protoConstants.MMLIFEAPP_BILLBOARD_RANK_TYPE_DISTRICT_WANTED_FOOD,
                area: {
                    name: "",
                    id: ""
                },
                category: {
                    name: "",
                    id: ""
                }
            };
            e.poi.rank && e.poi.rank.billBoardRank && (e.poi.rank.billBoardRank.type === protoConstants.MMLIFEAPP_BILLBOARD_RANK_TYPE_FRIEND_WANTED_FOOD ? (n.label = "朋友想去排行榜第" + e.poi.rank.billBoardRank.position + "名", 
            n.type = protoConstants.MMLIFEAPP_BILLBOARD_RANK_TYPE_FRIEND_WANTED_FOOD) : e.poi.rank.billBoardRank.area && e.poi.rank.billBoardRank.type === protoConstants.MMLIFEAPP_BILLBOARD_RANK_TYPE_DISTRICT_WANTED_FOOD ? (n.label = e.poi.rank.billBoardRank.area.name + "想去排行榜第" + e.poi.rank.billBoardRank.position + "名", 
            n.area.id = e.poi.rank.billBoardRank.area.id, n.area.name = e.poi.rank.billBoardRank.area.name) : e.poi.rank.billBoardRank.category && e.poi.rank.billBoardRank.type === protoConstants.MMLIFEAPP_POILIST_ENTRY_TYPE_WANTED_FOOD_CATEGORY_RANKLIST && (n.label = e.poi.rank.billBoardRank.category.name + "排行榜第" + e.poi.rank.billBoardRank.position + "名", 
            n.type = protoConstants.MMLIFEAPP_POILIST_ENTRY_TYPE_WANTED_FOOD_CATEGORY_RANKLIST, 
            n.category.id = e.poi.rank.billBoardRank.category.id, n.category.name = e.poi.rank.billBoardRank.category.name));
            var a = [];
            e.poi.reason && (a = e.poi.reason.slice(0, 3)), e.poi.ugc && e.poi.ugc.visitCount && e.poi.ugc.visitCount > 0 && (t.data.visitCount = e.poi.ugc.visitCount), 
            wx.showShareMenu(), t.setData({
                payRecommendContacts: o,
                poiRank: n,
                reasonList: a,
                currentPlayVideoId: "",
                useRealCurrentLocationToGetData: appLaunchData.isUsingRealCurrentLocation(),
                visitCount: t.data.visitCount
            }, function() {
                console.log("getpoidetail resp, setData, callback");
            }), t.getCommentRequest();
        }, function(e) {
            console.log("getpoidetail resp failed", e), t._reportEnterSharedPage(reportEnum.enumPageState.UNKNOWN);
        });
    },
    onUnload: function onUnload() {
        this.clearGlobalFunc(), this.poiObserver && this.poiObserver.disconnect();
    },
    onReachBottom: function onReachBottom() {
        this.setData({
            showBottomLoading: !0
        }), this.data.isGettingFriendComment || this.data.isGettingStrangerComment ? this.getMoreCommentRequest() : this.setData({
            showBottomLoading: !1
        });
    },
    generatePoiHeader: function generatePoiHeader(e) {
        var t = "";
        e.poi.base.address && e.poi.base.address.address && (t = e.poi.base.address.address);
        var o = {};
        e.poi.base.location && e.poi.base.location.latitude ? o.latitude = e.poi.base.location.latitude : o.latitude = "", 
        e.poi.base.location && e.poi.base.location.longitude ? o.longitude = e.poi.base.location.longitude : o.longitude = "";
        var n = "";
        if (e.poi.intro && e.poi.intro.phone) {
            var a = e.poi.intro.phone;
            n = (a = a.split(";").length > 0 ? a.split(";") : a).map(function(e) {
                return util.formatPhoneWithParentheses(e);
            });
        }
        var i = 0;
        e.poi.ugc && e.poi.ugc.isMark && e.poi.ugc.isMark > 0 && (i = 1);
        var r = renderDataUtil.getRenderPoiInfo(e.poi), s = r.name, p = r.topImageUrl, m = r.categoryName, d = r.price;
        this.setData({
            poiInfo: {
                id: this.data.poiId,
                name: s,
                topImage: p,
                categoryName: m,
                price: d,
                distance: r.distanceString2,
                area: r.area,
                isMark: i,
                distanceValue: r.distance
            },
            poiAddress: {
                address: t,
                location: o
            },
            poiHour: this._getFormattedBusinessHour(e.poi, e.serverTime),
            poiPhone: n
        }), declareBinding({
            instance: this,
            schema: PoiSchema,
            mapping: {
                "poiInfo.id": "id",
                "poiInfo.isMark": "isMark"
            }
        }), poiStorage.setPoi(this.data.poiId, {
            id: this.data.poiId,
            logoUrl: p,
            name: s,
            categoryDesc: m,
            price: d
        });
    },
    getCommentRequest: function getCommentRequest() {
        var e = this;
        new cgi.SimpleRequest("getpoicomment", {
            id: e.data.poiId,
            context: ""
        }).send(function(t) {
            var o = [], n = [], a = 0, i = 0;
            e.data.isGettingFriendComment = !1, e.data.isGettingStrangerComment = !1, t && t.friendComment && t.friendComment.comment && (a = t.friendComment.comment.length, 
            t.friendComment.comment.forEach(function(t) {
                o.push({
                    comment: Object.assign(t, {
                        createTime: ""
                    }),
                    unqiue: t.id,
                    poi: e.data.poi,
                    reportData: {
                        pageId: reportEnum.enumPageName.POI_DETAIL
                    }
                });
            }), 1 === t.friendComment.continueFlag && (e.data.isGettingFriendComment = !0, e.data.commentContext = t.friendComment.context)), 
            t && t.strangerComment && t.strangerComment.comment && (i = t.strangerComment.comment.length, 
            t.strangerComment.comment.forEach(function(t) {
                n.push({
                    comment: Object.assign(t, {
                        createTime: ""
                    }),
                    unqiue: t.id,
                    poi: e.data.poi,
                    reportData: {
                        pageId: reportEnum.enumPageName.POI_DETAIL
                    }
                });
            }), 1 === t.strangerComment.continueFlag && (e.data.isGettingStrangerComment = !0, 
            e.data.commentContext = t.strangerComment.context));
            var r = "", s = "";
            (a > 5 || t.friendComment.continueFlag) && (i > 0 || e.data.reasonList.length > 0) && (o = o.slice(0, 5), 
            e.data.showMoreFriendComments = !0, e.data.isGettingFriendComment = !1, r = t.friendComment.context), 
            (i > 5 || t.strangerComment.continueFlag) && e.data.reasonList.length > 0 && (n = n.slice(0, 5), 
            e.data.showMoreStrangerComments = !0, e.data.isGettingStrangerComment = !1, s = t.strangerComment.context), 
            e.setData({
                showBottomLoading: !1,
                friendsImpressionDataList: o,
                strangerImpressionDataList: n,
                showMoreFriendComments: e.data.showMoreFriendComments,
                showMoreStrangerComments: e.data.showMoreStrangerComments,
                commentContext: e.data.commentContext,
                friendCommentContext: r,
                strangerCommentContext: s
            }), e.poiObserver && e.poiObserver.disconnect(), e.poiObserver = e.createObserveIntersection();
        }, function(t) {
            console.log("getpoicomment resp failed", t), e.setData({
                showBottomLoading: !1
            }), e.data.isGettingFriendComment = !1, e.data.isGettingStrangerComment = !1;
        });
    },
    getMoreCommentRequest: function getMoreCommentRequest() {
        var e = this, t = [];
        e.data.isGettingFriendComment ? e.data.friendsImpressionDataList.forEach(function(e) {
            t.push(e.unqiue);
        }) : e.data.isGettingStrangerComment && e.data.strangerImpressionDataList.forEach(function(e) {
            t.push(e.unqiue);
        }), new cgi.SimpleRequest("getpoicommentdetail", {
            id: e.data.poiId,
            context: e.data.commentContext
        }).send(function(o) {
            if (e.setData({
                commentContext: o.context,
                continueFlag: o.continueFlag
            }), o.comment && o.comment.length) {
                var n = [];
                o.comment.forEach(function(o) {
                    -1 === t.indexOf(o.id) && n.push({
                        comment: Object.assign(o, {
                            createTime: ""
                        }),
                        unqiue: o.id,
                        poi: e.data.poi,
                        reportData: {
                            pageId: reportEnum.enumPageName.POI_DETAIL
                        }
                    });
                }), 0 === n.length && e.getMoreCommentRequest();
                var a = {}, i = n;
                if (e.data.isGettingFriendComment) for (var r = e.data.friendsImpressionDataList, s = r.length; s < r.length + i.length; s++) {
                    a["friendsImpressionDataList[" + s + "]"] = n[s - r.length];
                } else if (e.data.isGettingStrangerComment) for (var p = e.data.strangerImpressionDataList, m = p.length; m < p.length + i.length; m++) {
                    a["strangerImpressionDataList[" + m + "]"] = n[m - p.length];
                }
                e.setData(_extends({}, a)), e.poiObserver && e.poiObserver.disconnect(), e.poiObserver = e.createObserveIntersection();
            }
            e.setData({
                showBottomLoading: !1
            });
        }, function(t) {
            e.setData({
                showBottomLoading: !1
            });
        });
    },
    onTapBackButton: function onTapBackButton() {
        getCurrentPages();
        var e = reportSession.getLaunchScene();
        -1 !== [ 1007, 1008, 1047 ].indexOf(e) ? util.appNavigateBack() : wx.navigateBack({});
    },
    onTapTopImage: function onTapTopImage() {
        this._reportClickAction(reportEnum.enumPoiDetailClickScene.TOP_IMAGE);
    },
    onTapShareButton: function onTapShareButton(e) {
        console.log("分享转发: " + JSON.stringify(e));
        var t = this;
        if (wx.shareAppMessageForFakeNative) {
            console.log("shareAppMessage, start");
            var o = "https://res.wx.qq.com/a/fed_upload/e6571a6e-666f-49d2-8292-7766fa530b3a/share-app-msg-default.jpg";
            t.data.poiInfo.topImage && t.data.poiInfo.topImage.length && (o = t.data.poiInfo.topImage);
            var n = t.data.poiInfo.categoryName;
            t.data.poiInfo.price && (n = n && n.length ? n + " · 人均￥" + t.data.poiInfo.price : "人均￥" + t.data.poiInfo.price), 
            t.data.poiInfo.area && (n = n && n.length ? n + " · " + t.data.poiInfo.area : t.data.poiInfo.area), 
            wx.shareAppMessageForFakeNative({
                bizType: 0,
                title: t.data.poiInfo.name,
                imageUrl: o,
                path: util.getCurrentPageUrl(),
                desc: n,
                tailLang: "FF_Entry_Nearby",
                useDefaultSnapshot: !1,
                disableForward: !1,
                defaultHintUrl: "https://mp.weixin.qq.com/mp/waerrpage?appid=wx734c1ad7b3562129&type=upgrade&upgradetype=3#wechat_redirect",
                success: function success(e) {
                    console.log("shareAppMessage success: " + JSON.stringify(e)), t._reportShareImpression(reportEnum.enumShareResult.API_SUCCESS);
                },
                fail: function fail(e) {
                    e.errMsg && -1 != e.errMsg.search("cancel") ? (console.log("shareAppMessage cancel: " + JSON.stringify(e)), 
                    t._reportShareImpression(reportEnum.enumShareResult.API_CANCEL)) : (console.error("shareAppMessage failed: " + JSON.stringify(e)), 
                    t._reportShareImpression(reportEnum.enumShareResult.API_FAILED));
                }
            });
        } else console.log("no api");
    },
    openLocation: function openLocation(e) {
        wx.openLocation({
            latitude: this.data.poiAddress.location.latitude,
            longitude: this.data.poiAddress.location.longitude,
            address: this.data.poiAddress.name,
            name: this.data.poiInfo.name,
            success: function success(e) {
                console.log("openLocation success" + e);
            },
            fail: function fail(e) {
                console.log("openLocation failed" + e);
            }
        }), this._reportClickAction(reportEnum.enumPoiDetailClickScene.LOCATION);
    },
    bindTapPhoneCall: function bindTapPhoneCall(e) {
        var t = this;
        wx.showActionSheet({
            itemList: t.data.poiPhone,
            itemColor: "#000",
            success: function success(e) {
                wx.makePhoneCall({
                    phoneNumber: t.data.poiPhone[e.tapIndex],
                    success: function success(e) {
                        t._reportClickAction(reportEnum.enumPoiDetailClickScene.PHONE_SUCCESS);
                    },
                    fail: function fail(e) {
                        t._reportClickAction(reportEnum.enumPoiDetailClickScene.PHONE_CANCEL);
                    }
                });
            },
            fail: function fail() {
                t._reportClickAction(reportEnum.enumPoiDetailClickScene.PHONE_CANCEL);
            }
        });
    },
    onTapPost: function onTapPost(e) {
        var t = {
            id: this.data.poiId,
            name: this.data.poiInfo.name,
            topImage: this.data.poiInfo.topImage,
            categoryName: this.data.poiInfo.categoryName,
            price: this.data.poiInfo.price,
            distance: this.data.poiInfo.distanceValue,
            area: this.data.poiInfo.area,
            isMark: this.data.poiInfo.isMark,
            address: this.data.poiAddress.address,
            location: this.data.poiAddress.location
        }, o = {
            startScene: reportEnum.enumPageName.POI_DETAIL,
            lastScene: reportEnum.enumPageName.POI_DETAIL,
            nextPageUrl: "/pages/poi_comment_publish/poi_comment_publish?fromPoiDetail=true",
            poiInfo: t
        };
        reportPostImpression.startPostImpressionProcess(o);
    },
    onTapMoreButton: function onTapMoreButton() {
        var e = this, t = "release";
        kitchenStorage.getShouldUseGreyServer() && (t = "trial"), wx.showActionSheet({
            itemList: [ "信息纠错", "商家管理" ],
            itemColor: "#000",
            success: function success(o) {
                0 === o.tapIndex ? (wx.navigateTo({
                    url: "/pages/poi_feedback/poi_feedback?poiId=" + encodeURIComponent(e.data.poiId)
                }), e._reportClickAction(reportEnum.enumPoiDetailClickScene.MORE_FEEDBACK)) : 1 === o.tapIndex && wx.navigateToMiniProgram({
                    appId: "wx28fc7f32ef9f2404",
                    path: "/pages/index/index?poiId=" + e.data.poiId,
                    envVersion: t,
                    success: function success(t) {
                        e._reportClickAction(reportEnum.enumPoiDetailClickScene.WECATERING_SUCCESS);
                    },
                    fail: function fail(t) {
                        e._reportClickAction(reportEnum.enumPoiDetailClickScene.WECATERING_FAIL);
                    }
                });
            },
            fail: function fail() {
                e._reportClickAction(reportEnum.enumPoiDetailClickScene.MORE_CANCEL);
            }
        });
    },
    onTapMarkButtonOnPoi: function onTapMarkButtonOnPoi(e) {
        var t = 0 === this.data.poiInfo.isMark ? 1 : 0;
        this.setData({
            "poiInfo.isMark": t
        });
        var o = t ? "已添加到“我-想去的餐厅”" : "已从“我-想去的餐厅”中移除";
        wx.vibrateShort(), wx.showToast({
            title: o,
            icon: "none",
            duration: 2500
        });
        var n = t;
        new cgi.SimpleRequest("markpoi", {
            baseRequest: {
                pageId: reportEnum.enumPageName.POI_DETAIL
            },
            poiId: this.data.poiId,
            flag: n
        }).send(function(e) {
            console.log("markpoi resp success: ", e), app.globalData.pageMe && app.globalData.pageMe.refresh(), 
            app.globalData.pageUserProfile && app.globalData.pageUserProfile.refresh();
        }, function(e) {
            console.error("markpoi resp failed", e);
        });
    },
    bindTapShowMoreComments: function bindTapShowMoreComments(e) {
        var t = e.currentTarget.dataset.context, o = e.currentTarget.dataset.commenttypeid;
        wx.navigateTo({
            url: "/pages/comment_feed/comment_feed?poi=" + encodeURIComponent(JSON.stringify(this.data.poi)) + "&commentType=" + o + "&context=" + encodeURIComponent(t)
        }), this._reportClickAction(1 == o ? reportEnum.enumPoiDetailClickScene.MORE_FRIEND_IMPRESSIONS : reportEnum.enumPoiDetailClickScene.MORE__STRANGER_IMPRESSIONS);
    },
    bindTapToIndexTag: function bindTapToIndexTag(e) {
        var t = e.currentTarget.dataset.item, o = e.currentTarget.dataset.reporttype;
        "tag" === o ? (wx.navigateTo({
            url: "/pages/index_tag/index_tag?name=" + encodeURIComponent(t.name) + "&feedId=" + t.id
        }), this._reportClickAction(reportEnum.enumPoiDetailClickScene.TAG)) : "rank" === o && (wx.navigateTo({
            url: "/pages/rank_list_new/rank_list_new?tabIndex=" + t.type + "&areaId=" + encodeURIComponent(t.area.id) + "&categoryId=" + encodeURIComponent(t.category.id)
        }), this._reportClickAction(reportEnum.enumPoiDetailClickScene.RANK));
    },
    addGlobalFunc: function addGlobalFunc() {
        var e = this;
        app.addInfoUpdateEventListeners(app.infoUpdateEventKey.poiDetail, app.infoUpdateEvent.updateImpressionCommentCount, function(t) {
            if (t && t.impressionId) {
                var o = t.impressionId, n = t.commentCount ? t.commentCount : 0;
                console.log("poi-detail, infoUpdateEventListeners, updateImpressionCommentCount");
                for (var a = e.data.friendsImpressionDataList, i = 0; i < a.length; i++) {
                    if ((s = a[i]).unqiue == o) {
                        if (s.comment) {
                            s.comment.subCommentCount = n, console.log("poi-detail friendsImpressionDataList, infoUpdateEventListeners, updateImpressionCommentCount: " + n + ", index: " + i), 
                            e.setData(_defineProperty({}, "friendsImpressionDataList[" + i + "].comment.subCommentCount", n));
                            break;
                        }
                        console.error("poi-detail friendsImpressionDataList, timelineItem.comment undefined!");
                        break;
                    }
                }
                var r = e.data.strangerImpressionDataList;
                for (i = 0; i < r.length; i++) {
                    var s;
                    if ((s = r[i]).unqiue == o) {
                        if (s.comment) {
                            s.comment.subCommentCount = n, console.log("poi-detail strangerImpressionDataList, infoUpdateEventListeners, updateImpressionCommentCount: " + n + ", index: " + i), 
                            e.setData(_defineProperty({}, "strangerImpressionDataList[" + i + "].comment.subCommentCount", n));
                            break;
                        }
                        console.error("poi-detail strangerImpressionDataList, timelineItem.comment undefined!");
                        break;
                    }
                }
            } else console.error("poi-detail, infoUpdateEventListeners, updateImpressionCommentCount, impressionId undefined!");
        }), app.addInfoUpdateEventListeners(app.infoUpdateEventKey.poiDetail, app.infoUpdateEvent.addImpression, function(t) {
            console.log("poi-detail, infoUpdateEventListeners, addImpression"), e.getCommentRequest();
        }), app.addInfoUpdateEventListeners(app.infoUpdateEventKey.poiDetail, app.infoUpdateEvent.deleteImpression, function(t) {
            if (t && t.impressionId) {
                var o = t.impressionId;
                console.log("poi-detail, infoUpdateEventListeners, deleteImpression, impressionId: " + o);
                for (var n = 0; n < e.data.friendsImpressionDataList.length; n++) {
                    if (e.data.friendsImpressionDataList[n].unqiue == o) {
                        e.setData(_defineProperty({}, "friendsImpressionDataList[" + n + "]", {}));
                        break;
                    }
                }
            } else console.error("poi-detail, infoUpdateEventListeners, deleteImpression, impressionId undefined!");
        });
    },
    clearGlobalFunc: function clearGlobalFunc() {
        app.addLaunchListener(function() {
            app.removeInfoUpdateEventListeners(app.infoUpdateEventKey.poiDetail);
        });
    },
    createObserveIntersection: function createObserveIntersection() {
        var e = this, t = wx.createIntersectionObserver(e, {
            thresholds: [ .4, 1 ],
            initialRatio: 0,
            observeAll: !0
        });
        return t.relativeToViewport(), t.observe(".impression-cell", function(t) {
            var o = t.dataset, n = o.index, a = o.stranger || !1;
            if (void 0 !== n) {
                var i = e.data.friendsImpressionDataList[n];
                if (a && (i = e.data.strangerImpressionDataList[n]), i) {
                    var r = "";
                    if (i.comment && i.comment.id && (r = i.comment.id), r && !e.data.impressionExposedSet.has(r)) {
                        e.data.impressionExposedSet.add(r);
                        var s = reportEnum.enumFeedImpressionType.FRIEND;
                        a && (s = reportEnum.enumFeedImpressionType.STRANGER);
                        var p = 0;
                        i && i.comment && i.comment.subCommentCount && (p = i.comment.subCommentCount);
                        var m = reportEnum.enumFeedAction.FEED_EXPOSED, d = i.reportData.requestId || "", c = i.reportData.recId || "", u = i.reportData.recType || 0;
                        reporter.getReporter(16483).sessionType(0).sessionId(reportSession.getId()).clickTime(Math.floor(new Date().getTime() / 1e3)).scene().poiId().impressionId().impressionCommentCount(p).isForwardedImpression(0).poiIdString(e.data.poiId).impressionIdString(r).action(m).impressionType(s).requestId(d).pageId(reportEnum.enumPageName.POI_DETAIL).reasonId().reasonIdString().recId(c).recType(u).lazyReportToServer();
                    }
                }
            }
        }), t;
    },
    _getFormattedBusinessHour: function _getFormattedBusinessHour(e, t) {
        var o = "", n = null, a = "", i = "";
        if (e.hours && e.hours.hours) {
            var r = e.hours.hours.replace(/(非营业时段\s*\n*?.*)/, ""), s = poiDataFormatter.businessHourFormatter(r), p = "";
            void 0 !== s[0] ? o = s[0].replace(/[\r\n]+/g, " ") : (p = poiDataFormatter.businessHourBeautifier(r).replace(/[\r\n]+/g, " "), 
            0 === (n = poiDataFormatter.businessHourChecker(t, r)) ? (o = p, i = "red-tag", 
            a = "已打烊") : o = 1 === n ? "营业中 | " + p : "");
        }
        var m = "1";
        e.intro.status && (m = e.intro.status), "1" !== m && (a = "可能已歇业", i = "red-tag", 
        o = "");
        var d = {
            2: "尚未开业",
            3: "暂停营业",
            4: "尚未开业",
            11: "已歇业",
            12: "已歇业",
            40: "可能已搬迁",
            41: "可能已歇业"
        }, c = e.intro.quality;
        return c < 60 && d[c] && (a = d[c], i = "red-tag", o = ""), c < 60 || 0 === n || a.length > 0 ? o.length > 0 || a.length > 0 ? {
            time: o,
            status: a,
            optionalClass: i
        } : "" : o.length > 0 ? {
            time: o,
            optionalClass: i
        } : "";
    },
    _reportEnterSharedPage: function _reportEnterSharedPage(e) {
        reporter.getReporter(17014).pageId(reportEnum.enumPageName.POI_DETAIL).launchScene(reportSession.getLaunchScene()).poiId(this.data.poiId).impressionId("").pageState(e).impressionType(0).time(Math.floor(new Date().getTime() / 1e3)).sessionId(reportSession.getId()).reportToServer();
    },
    _reportClickAction: function _reportClickAction(e) {
        e ? reporter.getReporter(17415).sessionId(reportSession.getId()).prevPageId(this.mmPrevPage.mmReportData.pageName).clickTime(Math.floor(new Date().getTime() / 1e3)).poiId(this.data.poiId).clickScene(e).reportToServer() : console.error("invalid parameter, clickScene");
    },
    _reportShareImpression: function _reportShareImpression(e) {
        e ? reporter.getReporter(16876).shareType(reportEnum.enumShareType.POI).shareScene(reportEnum.enumPageName.POI_DETAIL).poiId().impressionId().shareResult(e).poiImpressionsCount(0).impressionCommentCount(0).impressionWowCount(0).impressionMarkCount(0).impressionType(0).shareTime(Math.floor(new Date().getTime() / 1e3)).poiIdString(this.data.poiId).impressionIdString().sessionId(reportSession.getId()).reportToServer() : console.error("invalid parameter, shareResult");
    }
});