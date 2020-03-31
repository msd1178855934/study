var app = getApp(), cgi = require("../../utils/cgi"), util = require("../../utils/util"), kitchenStorage = require("../../utils/kitchenStorage"), reporter = require("../../utils/reporter"), reportEnum = require("../../utils/reportEnum"), chooseMediaUtil = require("../../utils/chooseMediaUtil"), ugcStorage = require("../../utils/ugcStorage"), reportPostImpression = require("../../utils/reportPostImpression"), reportSession = require("../../utils/report_session"), appLaunchData = require("../../utils/appLaunchData"), scrollWidth = 410;

Page({
    data: {
        isIpx: util.isIpx(),
        poiId: "",
        commentText: "",
        scoreList: [ 0, 0, 0 ],
        uploadFileSize: 0,
        uploadedPics: [],
        requestId: "",
        poiName: "",
        arrayOfStarsList: [ [], [], [] ],
        arrayOfUnstarsList: [ [ 1, 1, 1, 1, 1 ], [ 1, 1, 1, 1, 1 ], [ 1, 1, 1, 1, 1 ] ],
        picList: [],
        progress: 0,
        currentCommentCursor: -1,
        textAreaShouldFocus: !1,
        canSend: !1,
        rpx326toPx: -util.rpx2px(244500 / 1242),
        rpx90toPx: -util.rpx2px(67500 / 1242),
        topMarginAdjust: "0",
        textareaPlaceholderText: "记录你的美食生活…",
        scrollIntoViewId: "",
        fromActivity: !1,
        menuPositionTop: 0,
        poiItemToPostImpression: {},
        poiDesc: "",
        poiTopImage: "",
        fromPoiDetail: !1,
        poiLocation: {
            latitude: 0,
            longitude: 0
        },
        topicItemList: [],
        selectedTopicItem: {},
        canNavigateToTagListView: !0
    },
    onLoad: function onLoad(e) {
        var t = this, o = 30;
        if (wx.canIUse("getMenuButtonBoundingClientRect")) {
            var i = wx.getMenuButtonBoundingClientRect();
            "android" === util.getSysInfo().platform && (i.top = i.top / 2, i.top = i.top + 8), 
            o = i.top + 2;
        }
        this.setData({
            menuPositionTop: o
        }), app.addLaunchListener(function() {
            t._onLoad(e), reporter.getReporter(16501).pageId(reportEnum.enumPageName.COMMENT_PUBLISH).time(Math.floor(new Date().getTime() / 1e3)).launchScene(reportSession.getLaunchScene()).sessionId(reportSession.getId()).reportToServer();
        });
    },
    _onLoad: function _onLoad(e) {
        0 == ugcStorage.hasPostComment() && (ugcStorage.updatePostCommentFlag(), wx.showModal({
            content: "你的印象可以被所有人看到。",
            showCancel: !1,
            confirmText: "知道了"
        }));
        var t = !1;
        e.fromPoiDetail ? t = !0 : app.checkAndUpdateUserCurrentLocation();
        var o = !1;
        e.fromActivity && (o = !0);
        var i = {}, s = !0;
        e.topicId && e.topicName && (i.id = +e.topicId, i.name = decodeURIComponent(e.topicName), 
        s = !1, reportPostImpression.setTopicResult(reportPostImpression.enumTopicResult.DEFAULT)), 
        reportPostImpression.enterPostView(), reportPostImpression.setHasInputtedText(2), 
        reportPostImpression.setChooseMediaResult(reportPostImpression.enumChooseMediaResult.NO_CHOOSE), 
        reportPostImpression.setChoosePoiResult(reportPostImpression.enumChoosePoiResult.NO_CHOOSE), 
        this.checkAndUpdatePoi(), console.log("poi_comment_publish onLoad"), this.setData({
            fromPoiDetail: t,
            fromActivity: o,
            selectedTopicItem: i,
            canNavigateToTagListView: s
        }), this.checkSelectedMediaItemsBeforePageLoad(), this.getTopicItemList(), console.log("poi_comment_publish onLoad: rpx320: " + this.data.rpx320);
    },
    onReady: function onReady() {},
    onShow: function onShow() {
        var e = this;
        app.addLaunchListener(function() {
            e.checkAndUpdatePoi(), e.checkAndUpdateTopicItem();
        });
    },
    onHide: function onHide() {},
    onUnload: function onUnload() {
        reportPostImpression.setPostResult(reportPostImpression.enumPostResult.NOT_POST), 
        reportPostImpression.triggerReport(reportEnum.enumPageName.COMMENT_PUBLISH);
    },
    onPullDownRefresh: function onPullDownRefresh() {},
    onReachBottom: function onReachBottom() {},
    textInput: function textInput(e) {
        this.data.commentText = e.detail.value, this.data.currentCommentCursor = e.detail.cursor, 
        reportPostImpression.setHasInputtedText(1), this.checkAndSetCanSend();
    },
    tapImageItem: function tapImageItem(e) {
        for (var t = this.data.picList, o = e.currentTarget.dataset.index, i = [], s = 0; s < t.length; s++) {
            var a = t[s];
            a.originIndex = s, i[s] = a;
        }
        app.globalData.picList = i, app.globalData.currentPicIndex = o, app.globalData.deletePicFunc = this.deleteMediaFromOtherView, 
        this.setData({
            picList: t
        }), wx.navigateTo({
            url: "/pages/swipe_pic/swipe_pic"
        });
    },
    chooseMedia: function chooseMedia(e) {
        if (console.log("chooseMedia"), !(util.canUseChooseMultiMediaAPIWithoutPoiInfo() || this.data.poiId && this.data.poiId.length)) return console.log("chooseMedia, no poiInfo, return!"), 
        wx.showToast({
            title: "请先选择餐厅",
            icon: "none",
            duration: 2e3
        }), void reportPostImpression.setChooseMediaResult(reportPostImpression.enumChooseMediaResult.NO_POI_CANNOT_CHOOSE);
        var t = this, o = 9 - this.data.picList.length;
        if (o <= 0) console.log("canChooseImageCount <= 0, current picList.length: ", t.data.picList.length); else {
            console.log("poiLocation: " + JSON.stringify(t.data.poiLocation));
            var i = kitchenStorage.getPoiLocationRadius();
            chooseMediaUtil.chooseMediaWithTwoOptions(o, t.data.poiLocation, t.data.poiName, i, function(e) {
                if (!e || e.resultType != chooseMediaUtil.enumChooseResultType.SUCCESS) return console.error("chooseMediaWithTwoOptions, success, no res or invalid res.resultType! return"), 
                void reportPostImpression.setChooseMediaResult(reportPostImpression.enumChooseMediaResult.CHOOSE_FAILED);
                if (e.textDirectly) return console.error("chooseMediaWithTwoOptions, success, but res.textDirectly is true! return"), 
                void reportPostImpression.setChooseMediaResult(reportPostImpression.enumChooseMediaResult.CHOOSE_FAILED);
                var o = e.totalFileSize || 0, i = e.mediaItemList || [];
                if (!i.length) return console.log("chooseMediaWithTwoOptions, success, no mediaItemList! return"), 
                void reportPostImpression.setChooseMediaResult(reportPostImpression.enumChooseMediaResult.CHOOSE_CANCELLED);
                0 == o && console.error("chooseMediaWithTwoOptions, success, has mediaItemList but totalFileSize is 0!"), 
                t.data.uploadFileSize += o;
                var s = t.data.picList.concat(i);
                t.setData({
                    picList: s
                });
                var a = s.reduce(function(e, t) {
                    return e + t.displayWidth;
                }, 0);
                s.length <= 9 && s.length > 0 && a >= scrollWidth && t.setData({
                    scrollIntoViewId: "chooseImageViewId"
                }), reportPostImpression.setChooseMediaResult(reportPostImpression.enumChooseMediaResult.CHOOSE_SUCCESS), 
                t.checkAndSetCanSend(), console.log("chooseMedia totalFileSize= ", o, "uploadFileSize= ", t.data.uploadFileSize);
            }, function(e) {
                if (!e) return console.error("chooseMedia failed, but no err object"), void reportPostImpression.setChooseMediaResult(reportPostImpression.enumChooseMediaResult.CHOOSE_FAILED);
                e.resultType == chooseMediaUtil.enumChooseResultType.CANCEL || e.resultType == chooseMediaUtil.enumChooseResultType.ACTION_SHEET_CANCEL ? (console.log("chooseMedia cancelled: " + JSON.stringify(e)), 
                reportPostImpression.setChooseMediaResult(reportPostImpression.enumChooseMediaResult.CHOOSE_CANCELLED)) : (console.error("chooseMedia failed, err: " + JSON.stringify(e)), 
                reportPostImpression.setChooseMediaResult(reportPostImpression.enumChooseMediaResult.CHOOSE_FAILED));
            });
        }
    },
    tapRecommended: function tapRecommended(e) {
        console.log("tapRecommended");
    },
    postComment: function postComment(e) {
        if (console.log("postComment, commentText: ", this.data.commentText, ", scoreList", this.data.scoreList, ", canSend: ", this.data.canSend), 
        0 != this.data.canSend) {
            reportPostImpression.clickPost(), 0 === this.data.requestId.length && (this.data.requestId = this.generateRequestId());
            var t = this;
            app.addLaunchListener(function() {
                if (wx.showLoading({
                    title: "上传中",
                    mask: !0
                }), t.data.picList.length === t.data.uploadedPics.length) return console.log("_this.data.picList.length === _this.data.uploadedPics.length, call afterUploadPic directly"), 
                void s([]);
                var e = t.data.picList.slice(t.data.uploadedPics.length), o = e.length;
                console.log("postComment, uploadPic4TempFilePaths");
                var i = t.data.uploadFileSize;
                function s(e) {
                    for (var o = t.data.uploadedPics.length, i = 0; i < e.length; i++) {
                        var s = e[i];
                        t.data.uploadedPics[o + i] = s;
                    }
                    var a = {};
                    t.data.commentText = t.data.commentText.replace(/^\s+|\s+$/g, ""), a = t.data.uploadedPics.length > 0 ? {
                        content: t.data.commentText,
                        contentType: 1,
                        pic: t.data.uploadedPics
                    } : {
                        content: t.data.commentText,
                        contentType: 0
                    };
                    var n = JSON.stringify(a);
                    console.log("commentDataString ", n), console.log("postpoicomment request");
                    var r = {
                        id: t.data.poiId,
                        info: n,
                        requestId: t.data.requestId
                    };
                    t.data.selectedTopicItem && t.data.selectedTopicItem.id && (r.topicId = [ t.data.selectedTopicItem.id ]), 
                    new cgi.SimpleRequest("postpoicomment", r).send(function(e) {
                        console.log("postpoicomment resp success ", e), wx.hideLoading(), util.toast("发表成功"), 
                        wx.vibrateShort(), e && e.commentId ? reportPostImpression.setImpressionId(e.commentId) : console.error("postpoicomment resp cannot find data.commentId"), 
                        reportPostImpression.setPostResult(reportPostImpression.enumPostResult.SUCCESS);
                        var o = t.data.fromPoiDetail;
                        setTimeout(function() {
                            app.notifyInfoUpdateEventListeners(app.infoUpdateEvent.addImpression, {
                                shouldUpdateTimelineManually: o
                            });
                        }, 1e3), reportPostImpression.triggerReport(reportEnum.enumPageName.COMMENT_PUBLISH), 
                        setTimeout(function() {
                            t.data.fromPoiDetail ? wx.navigateBack() : wx.reLaunch({
                                url: "/pages/timeline/timeline?reLaunchFrom=reLaunchFromComment"
                            });
                        }, 2e3);
                    }, function(e) {
                        console.error("postpoicomment resp failed ", e), reportPostImpression.setPostResult(reportPostImpression.enumPostResult.FAILED), 
                        wx.hideLoading(), wx.showModal({
                            content: "印象发表失败，是否重试？",
                            cancelText: "取消",
                            confirmText: "重试",
                            success: function success(e) {
                                e.confirm ? (console.log("postComment showModel, postpoicomment cgi failed, retry"), 
                                t.postComment()) : e.cancel && console.log("postComment showModel, postpoicomment cgi failed, cancel");
                            }
                        });
                    });
                }
                cgi.uploadMedia4TempFiles(i, e, function() {
                    console.log("uploadMedia4TempFiles, startCb");
                }, function(e) {
                    if (console.log("upload complete, mediaList: ", e), e.length != o) return wx.hideLoading(), 
                    reportPostImpression.setPostResult(reportPostImpression.enumPostResult.FAILED), 
                    void wx.showModal({
                        content: "印象发表失败，是否重试？",
                        cancelText: "取消",
                        confirmText: "重试",
                        success: function success(e) {
                            e.confirm ? (console.log("postComment showModel, uploadMedia failed, retry"), t.postComment()) : e.cancel && console.log("postComment showModel, uploadMedia failed, cancel");
                        }
                    });
                    t.data.uploadFileSize = 0, s(e);
                }, function(e, t, o) {});
            });
        }
    },
    generateRequestId: function generateRequestId() {
        return util.guid() + "--" + Date.now();
    },
    deleteMediaFromOtherView: function deleteMediaFromOtherView(e) {
        if (e < 0) console.error("wrong originIndex: ", e); else {
            for (var t = [], o = [], i = 0; i < this.data.picList.length; i++) {
                this.data.picList[i].originIndex != e ? (o.push(this.data.picList[i]), i < this.data.uploadedPics.length && t.push(this.data.uploadedPics[i])) : console.log("find delete Item");
            }
            this.setData({
                picList: o
            }), this.data.uploadedPics = t, this.checkAndSetCanSend();
        }
    },
    textareaFocus: function textareaFocus(e) {
        console.log("bindfocus: " + JSON.stringify(e));
    },
    textareaBlur: function textareaBlur(e) {
        console.log("bindblur: " + JSON.stringify(e));
    },
    tapDeleteMediaItem: function tapDeleteMediaItem(e) {
        console.log("tapDeleteMediaItem: " + JSON.stringify(e));
        var t = e.currentTarget.dataset.index;
        if (t < 0 || t >= this.data.picList.length) console.error("wrong index: ", t); else {
            var o = this.data.uploadedPics, i = this.data.picList;
            t < o.length && o.splice(t, 1), i.splice(t, 1), i.reduce(function(e, t) {
                return e + t.displayWidth;
            }, 0) < scrollWidth && this.setData({
                scrollIntoViewId: ""
            }), this.setData({
                picList: i
            }), this.data.uploadedPics = o, this.checkAndSetCanSend();
        }
    },
    onTapBackButton: function onTapBackButton() {
        wx.navigateBack({});
    },
    checkAndUpdatePoi: function checkAndUpdatePoi() {
        var e = reportPostImpression.getAndClearPoiForPostImpression();
        if (e.hasNew && e.poi) {
            var t = e.poi;
            if (t.id && t.name) {
                console.log("checkAndUpdatePoi, update poiInfo: " + JSON.stringify(t)), reportPostImpression.setPoiId(t.id), 
                reportPostImpression.setPoiName(t.name);
                var o = "";
                t.categoryName && (o = t.categoryName), t.price && (o = o && o.length ? o + " · 人均￥" + t.price : "人均￥" + t.price), 
                t.area && (o = o && o.length ? o + " · " + t.area : t.area);
                var i = "https://res.wx.qq.com/a/fed_upload/e6571a6e-666f-49d2-8292-7766fa530b3a/share-app-msg-default.jpg";
                t.topImage && (i = t.topImage);
                var s = {
                    latitude: 0,
                    longitude: 0
                };
                t.location && t.location.latitude && t.location.longitude && (s.latitude = t.location.latitude, 
                s.longitude = t.location.longitude), reportPostImpression.setLocation(s.longitude, s.latitude), 
                this.setData({
                    poiId: t.id,
                    poiName: t.name,
                    poiItemToPostImpression: t,
                    poiDesc: o,
                    poiTopImage: i,
                    poiLocation: s
                }), this.checkAndSetCanSend();
            } else console.error("checkAndUpdatePoi, no poiId or no poiName, return!");
        } else console.log("checkAndUpdatePoi, no new poiInfo, return!");
    },
    onTapChoosePoi: function onTapChoosePoi() {
        console.log("choose poi"), wx.navigateTo({
            url: "/pages/search_poi_list/search_poi_list"
        });
    },
    onTapClearPoi: function onTapClearPoi() {
        console.log("clear poi"), this.setData({
            poiId: "",
            poiName: "",
            poiItemToPostImpression: {},
            poiDesc: "",
            poiTopImage: "",
            canSend: !1,
            poiLocation: {
                latitude: 0,
                longitude: 0
            }
        });
    },
    checkAndSetCanSend: function checkAndSetCanSend() {
        var e = !1;
        this.data.poiId && this.data.poiId.length && (this.data.commentText.trim().length > 0 || this.data.picList.length > 0) && (e = !0), 
        this.setData({
            canSend: e
        });
    },
    onTapSelectTopic: function onTapSelectTopic() {
        console.log("select tag"), this.data.canNavigateToTagListView ? wx.navigateTo({
            url: "/pages/select_tag_list/select_tag_list"
        }) : console.log("select tag, canNavigateToTagListView is false, return");
    },
    onTapTopicItem: function onTapTopicItem(e) {
        console.log("onTapTopicItem: " + JSON.stringify(e));
        var t = e.currentTarget.dataset.index;
        if (void 0 !== t) {
            var o = this.data.topicItemList[t];
            o ? (reportPostImpression.setTopicResult(reportPostImpression.enumTopicResult.CHOOSE_RECOMMENDED_TOPIC), 
            this.setData({
                selectedTopicItem: o
            })) : console.error("onTapTopicItem, invalid topicItemIndex");
        } else console.error("onTapTopicItem, no topicItemIndex");
    },
    checkSelectedMediaItemsBeforePageLoad: function checkSelectedMediaItemsBeforePageLoad() {
        var e = reportPostImpression.getAndClearMediaItemsForPostImpression();
        if (e) {
            if (e.hasNew) {
                if (e.mediaItems) {
                    if (e.mediaItems.textDirectly) return console.log("checkSelectedMediaItemsBeforePageLoad, textDirectly"), 
                    void this.setData({
                        textAreaShouldFocus: !0
                    });
                    var t = e.mediaItems.totalFileSize || 0, o = e.mediaItems.mediaItemList || [];
                    if (o.length) {
                        0 == t && console.error("checkSelectedMediaItemsBeforePageLoad, has mediaItemList but totalFileSize is 0!"), 
                        this.data.uploadFileSize += t;
                        var i = this.data.picList.concat(o);
                        this.setData({
                            picList: i
                        }), this.checkAndSetCanSend(), console.log("checkSelectedMediaItemsBeforePageLoad totalFileSize= ", t, "uploadFileSize= ", this.data.uploadFileSize);
                    } else console.log("checkSelectedMediaItemsBeforePageLoad, no mediaItemList! return");
                } else console.error("checkSelectedMediaItemsBeforePageLoad, mediaItemObject.hasNew is true but mediaItemObject.mediaItems is undefined, return");
            } else console.log("checkSelectedMediaItemsBeforePageLoad, no new object, return");
        } else console.error("checkSelectedMediaItemsBeforePageLoad, mediaItemObject is undefined, return");
    },
    getTopicItemList: function getTopicItemList() {
        var e = reportPostImpression.getTopicItemList();
        if (e && e.length) {
            var t = e.slice(0, 3);
            this.setData({
                topicItemList: t
            });
        } else console.error("getTopicItemList, no data");
    },
    checkAndUpdateTopicItem: function checkAndUpdateTopicItem() {
        console.log("checkAndUpdateTopicItem");
        var e = reportPostImpression.getAndClearTopicItemForPostImpression();
        if (e) {
            if (e.hasNew) {
                var t = e.topic;
                t || (console.log("checkAndUpdateTopicItem, hasNew is true, but topicItem is undefined"), 
                t = {}), this.setData({
                    selectedTopicItem: t
                });
            } else console.log("checkAndUpdateTopicItem, hasNew is false");
        } else console.error("checkAndUpdateTopicItem, no data from getAndClearTopicItemForPostImpression, return!");
    }
});