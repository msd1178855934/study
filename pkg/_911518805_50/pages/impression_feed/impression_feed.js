var _data;

function _defineProperty(e, t, a) {
    return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = a, e;
}

var app = getApp(), cgi = require("../../utils/cgi"), util = require("../../utils/util"), mixinCss = require("../../utils/mixinCss"), reporter = require("../../utils/reporter"), reportEnum = require("../../utils/reportEnum"), reportSession = require("../../utils/report_session"), appLaunchData = require("../../utils/appLaunchData"), renderDataUtil = require("../../utils/render_data_util"), MMPage = require("../../utils/mmFramework/mm_page"), declareBinding = require("../../utils/model_lib/declareBinding"), PoiSchema = require("../../utils/model/model_schema").PoiSchema, CommentSchema = require("../../utils/model/model_schema").CommentSchema, PoiModel = require("../../utils/model/poi_model"), CommentModel = require("../../utils/model/comment_model"), ContactSchema = require("../../utils/model/model_schema").ContactSchema, MAX_SWIPER_HEIGHT = 800, MIN_SWIPER_HEIGHT = 420, MAX_SWIPER_WIDTH = 750, MMLIFEAPP_IMPRESSION_STATUS_VALID = 0, MMLIFEAPP_IMPRESSION_STATUS_UNREAL = 1, MMLIFEAPP_IMPRESSION_STATUS_INVALID = 2;

MMPage({
    mmReportData: {
        pageName: reportEnum.enumPageName.IMPRESSION
    },
    data: (_data = {
        impressionId: "",
        recId: "",
        recType: 0,
        mainCommentIndex: -1,
        replyCommentIndex: -1,
        poi: {},
        isSelfImpression: !1,
        startTimeStamp: 0,
        from: 0,
        isIpx: util.isIpx(),
        ipxDangerBottom: mixinCss.ipxDangerBottom,
        mainComments: [],
        referCommentLists: [],
        poiData: [],
        current: 0,
        swiperData: [],
        previewPicList: [],
        currentHeight: 0,
        scale: 1,
        totalCommentCount: 0,
        placeholder: "发表评论",
        warningMsg: "不能评论空白消息",
        cursorSpacing: util.rpx2px(40),
        focus: !1,
        inputValue: "",
        lastInputText: "",
        showInputKeyboardMask: !1,
        lastReferId: "",
        lastReplyId: "",
        currentReferId: "",
        currentReplyId: "",
        originalNickName: "",
        repliedName: "",
        showVideo: !1,
        currentVideoPath: "",
        continueFlag: !1,
        showBottomLoadingView: !1,
        impressionCommentContext: "",
        referId: "",
        fromPoiDetail: !1,
        hasLaunch: !1,
        videoContexts: {},
        contactType: 0,
        canShare: util.canUseShareAppMessageAPI(),
        impressionState: 0,
        pageState: reportEnum.enumPageState.OK,
        contentErrorText: "内容获取失败",
        impressionContentType: 0,
        lastMainIndex: -1,
        lastReplyIndex: -1,
        useRealCurrentLocationToGetData: appLaunchData.isUsingRealCurrentLocation(),
        currentPageId: reportEnum.enumPageName.IMPRESSION
    }, _defineProperty(_data, "videoContexts", {}), _defineProperty(_data, "reportDataForLike", {
        pageId: reportEnum.enumPageName.IMPRESSION
    }), _defineProperty(_data, "topicTags", []), _defineProperty(_data, "viewedMediasIndexListString", ""), 
    _data),
    onLoad: function onLoad(e) {
        var t = this, a = decodeURIComponent(e.id), n = (e.autoFocus, "true" === e.fromPoiDetail), i = e.currentMedia ? Number(e.currentMedia) : 0;
        t.data.recId = e.recId ? e.recId : "", t.data.reportDataForLike.recId = t.data.recId, 
        t.data.recType = e.recType ? Number(e.recType) : 0, t.data.reportDataForLike.recType = t.data.recType, 
        t.setData({
            fromPoiDetail: n,
            impressionId: a,
            swiperCurrent: i,
            current: i,
            reportDataForLike: t.data.reportDataForLike
        }), t.data.from = i, t.data.viewedMediasIndexListString = "" + i, MAX_SWIPER_HEIGHT = util.px2rpx(util.getSysInfo().screenHeight) - 300, 
        util.isIpx() && (MAX_SWIPER_HEIGHT -= t.data.ipxDangerBottom), t.preCachePageInfo(), 
        app.addLaunchListener(function() {
            t.setData({
                hasLaunch: !0
            }), t.loadComment(), reporter.getReporter(16501).pageId(reportEnum.enumPageName.IMPRESSION).time(Math.floor(new Date().getTime() / 1e3)).launchScene(reportSession.getLaunchScene()).sessionId(reportSession.getId()).reportToServer();
        });
    },
    onUnload: function onUnload() {
        this.reportViewedMediasIndex();
    },
    onReady: function onReady() {
        this.data.videoContext = wx.createVideoContext("theVideo");
    },
    preCachePageInfo: function preCachePageInfo() {
        var e = this, t = getCurrentPages(), a = {}, n = {}, i = [], o = 1, r = [], s = "";
        if (t.length >= 2 && (a = t[t.length - 2].data), a.impressionDataList ? i = a.impressionDataList.concat(a.impressionDataListRecommend) : a.impressionList ? i = a.impressionList : a.friendsImpressionDataList && (i = a.friendsImpressionDataList.concat(a.strangerImpressionDataList)), 
        i.length > 0 && (n = i.filter(function(t) {
            return (t && t.comment && t.comment.id || "") === e.data.impressionId;
        })[0]), n && 0 !== Object.keys(n).length) {
            e.setData({
                isCacheHit: 1
            }), app.addUserStateChangeListener(function() {
                var t = app.getUserState();
                console.log("onload friendTimeline cache hit, user_access_permission, checkUserState, userState is: " + t), 
                t != app.enumUserStateError.shouldUpdateWeChat && t != app.enumUserStateError.isPad && t != app.enumUserStateError.error || e.setData({
                    shouldShowUserAccessPermission: 1
                });
            });
            n.commentInfo = JSON.parse(n.comment.info);
            var m = n.commentInfo.pic && n.commentInfo.pic[e.data.from] ? n.commentInfo.pic[e.data.from] : {}, p = 750 * (m.height || 1) / (m.width || 1);
            p < MIN_SWIPER_HEIGHT ? p = MIN_SWIPER_HEIGHT : p > MAX_SWIPER_HEIGHT && (p = MAX_SWIPER_HEIGHT);
            var d = p;
            n.commentInfo.pic && (r = n.commentInfo.pic.map(function(e) {
                var t = "", a = void 0 !== e.height ? e.height : 1, n = void 0 !== e.width ? e.width : 1, i = n * p / a || 750;
                return d = i * a / n || 750, i > MAX_SWIPER_WIDTH && (i = MAX_SWIPER_WIDTH, d = MAX_SWIPER_WIDTH * a / n || 750), 
                e.thumbUrl ? t = e.thumbUrl : e.midImageUrl ? t = e.midImageUrl : e.url && (t = e.url), 
                {
                    type: e.type,
                    url: t,
                    thumbUrl: t,
                    height: d,
                    width: i
                };
            }));
            var c = r.map(function(e) {
                return {
                    height: util.rpx2px(e.height)
                };
            });
            o = 1, r[e.data.from] && r[e.data.from].height && (o = r[e.data.from].height);
            var l = n.poiTable || renderDataUtil.getPoiInfo4Impression(n), u = "", I = "";
            l.name && (I = l.name), l.categoryName && (u += l.categoryName), l.price && (u += " · 人均￥" + l.price), 
            this.data.useRealCurrentLocationToGetData && l.distance && (u += " · " + l.distance), 
            e.data.poi.title1 = I, e.data.poi.title2 = u, s = n.commentInfo.content ? n.commentInfo.content : "", 
            this.setData({
                imgSize: c,
                swiperData: r,
                currentHeight: o,
                "poi.title1": I,
                "poi.title2": u,
                "poi.isMark": new PoiModel(l.id).getValue().isMark,
                topCommentContent: s
            }), this.updateImpressionContentType(), this.bindSwiperChange({
                detail: {
                    current: e.data.from
                }
            });
        }
    },
    onReachBottom: function onReachBottom() {
        this.data.continueFlag && this.getNextComments();
    },
    bindSwiperChange: function bindSwiperChange(e) {
        var t = this;
        console.log("onCurrentChange: ", e);
        var a = e.detail.current;
        this.setData({
            current: a
        }), t.data.viewedMediasIndexListString = t.data.viewedMediasIndexListString + ";" + a, 
        0 !== t.data.swiperData.length && (1 === t.data.swiperData[a].type ? (t.data.videoContexts[a] || (t.data.videoContexts[a] = wx.createVideoContext("swiperItem" + a)), 
        Object.keys(t.data.videoContexts).forEach(function(e) {
            var n = t.data.videoContexts[e];
            e == a ? n.play() : n.pause();
        })) : Object.keys(t.data.videoContexts).forEach(function(e) {
            t.data.videoContexts[e].pause();
        }));
    },
    bindfullscreenchange: function bindfullscreenchange(e) {
        e.detail.fullScreen ? this.data.videoContext.play() : (this.data.videoContext.pause(), 
        this.setData({
            videoUrl: ""
        }));
    },
    bindTapPlayVideo: function bindTapPlayVideo(e) {
        var t = e.currentTarget.dataset.index, a = {
            type: 1,
            filePath: this.data.swiperData[t].url,
            thumbFilePath: this.data.swiperData[t].thumbUrl
        };
        app.globalData.picList = [ a ], app.globalData.currentPicIndex = 0, wx.navigateTo({
            url: "/pages/swipe_pic/swipe_pic"
        });
    },
    bindTapEndVideo: function bindTapEndVideo() {
        this.setData({
            showVideo: !1,
            shouldShowSwiper: !0
        });
    },
    loadComment: function loadComment() {
        var e = this;
        this.setData({
            continueFlag: !1,
            impressionCommentContext: ""
        });
        var t = appLaunchData.getUserLocation();
        new cgi.SimpleRequest("GetImpressionComment", {
            impressionId: e.data.impressionId,
            location: t
        }).send(function(t) {
            if (e.data.useRealCurrentLocationToGetData = appLaunchData.isUsingRealCurrentLocation(), 
            t.impression) {
                var a = MMLIFEAPP_IMPRESSION_STATUS_VALID;
                t.impression.type == cgi.EnumMMLifeAppPoiImpressionTypeDefine.MMLIFEAPP_POI_IMPRESSION_TYPE_COMMENT && (t.impression.comment && void 0 !== t.impression.comment.status ? a = t.impression.comment.status : console.error("no data.impression.comment.status")), 
                a == MMLIFEAPP_IMPRESSION_STATUS_UNREAL ? e.setData({
                    impressionState: 2,
                    pageState: reportEnum.enumPageState.IMPRESSION_INVALID2
                }) : a == MMLIFEAPP_IMPRESSION_STATUS_INVALID && e.setData({
                    impressionState: 1,
                    pageState: reportEnum.enumPageState.IMPRESSION_INVALID
                });
                var n = !1, i = "";
                t.continueFlag && (n = t.continueFlag), t.context && (i = t.context);
                var o = {};
                if (t.impression.type == cgi.EnumMMLifeAppPoiImpressionTypeDefine.MMLIFEAPP_POI_IMPRESSION_TYPE_COMMENT) o = t.impression.comment; else if (t.impression.type == cgi.EnumMMLifeAppPoiImpressionTypeDefine.MMLIFEAPP_POI_IMPRESSION_TYPE_PAY_RECOMMEND_POI_IMPRESSION) {
                    if (!t.impression.payRecommendPoiImpression || !t.impression.payRecommendPoiImpression.id) return void console.error("type is MMLIFEAPP_POI_IMPRESSION_TYPE_PAY_RECOMMEND_POI_IMPRESSION, but no payRecommendPoiImpression!");
                    o = renderDataUtil.convertPayRecommendInfoToImpression(t.impression.payRecommendPoiImpression);
                }
                if (o.id) {
                    var r = JSON.parse(o.info), s = [], m = [];
                    if (r.pic && r.pic.length) {
                        var p = r.pic[e.data.from] || {}, d = 750 * (p.height || 1) / (p.width || 1), c = d;
                        d < MIN_SWIPER_HEIGHT ? d = MIN_SWIPER_HEIGHT : d > MAX_SWIPER_HEIGHT && (d = MAX_SWIPER_HEIGHT), 
                        r.pic.forEach(function(e) {
                            var t = e.height || 1, a = e.width || 1, n = a * d / t || 750;
                            c = n * t / a || 750, n > MAX_SWIPER_WIDTH && (n = MAX_SWIPER_WIDTH, c = MAX_SWIPER_WIDTH * t / a || 750);
                            var i = {
                                url: e.url,
                                thumbUrl: e.thumbUrl,
                                width: n,
                                height: c,
                                type: e.type,
                                duration: e.duration || 0,
                                midImageUrl: e.midImageUrl,
                                thumbSize: e.thumbSize || 0,
                                midImageSize: e.midImageSize || 0,
                                imageSize: e.imageSize ? e.imageSize : e.size,
                                videoSize: e.videoSize ? e.videoSize : e.size
                            };
                            s.push(i), 0 === e.type && m.push(e.url);
                        });
                    }
                    var l = renderDataUtil.getFormattedContactInfo(o.contact), u = (l.remark || l.nickName, 
                    l.nickName), I = l.headImgUrl, h = r.content.replace(/^\s+|\s+$/g, ""), g = util.getDateFormatString(t.impression.createTime);
                    e.data.isSelfImpression = 0 === l.type;
                    var f = e.getRenderPoiInfo(t.impression.poi), S = o.id, C = null == s[e.data.current] ? 0 : s[e.data.current].height, E = s.map(function(e) {
                        return {
                            height: util.rpx2px(e.height)
                        };
                    }), P = [];
                    o.topic && (P = o.topic), e.setData({
                        imgSize: E,
                        swiperData: s,
                        previewPicList: m,
                        poi: f,
                        authorContact: l,
                        headImgUrl: I,
                        topCommentContent: h,
                        topCommentTimeStr: g,
                        originalNickName: u,
                        currentHeight: C,
                        continueFlag: n,
                        impressionCommentContext: i,
                        referId: S,
                        topicTags: util.normalizeArray(P)
                    }), e.updateImpressionContentType(), e.reportEnterSharedPage(), declareBinding({
                        instance: e,
                        schema: ContactSchema,
                        mapping: {
                            "authorContact.userId": "id",
                            "authorContact.follow": "follow",
                            "authorContact.ugc.fansCount": "fansCount"
                        }
                    }), declareBinding({
                        instance: e,
                        schema: PoiSchema,
                        mapping: {
                            "poi.id": "id",
                            "poi.isMark": "isMark"
                        }
                    }), e.data.startTimeStamp = new Date().getTime();
                    var M = t.comment || [], T = o.contact.type, y = e.generateMainComments(M, T), _ = o.isLike, v = o.likeCount;
                    e.setData({
                        mainComments: y,
                        totalCommentCount: o.subCommentCount || 0,
                        isLike: _,
                        likeCount: v,
                        showBottomLoadingView: !0,
                        contactType: T
                    }), declareBinding({
                        instance: e,
                        schema: ContactSchema,
                        arrayPath: "mainComments",
                        mapping: {
                            "contact.userId": "id",
                            "contact.follow": "follow",
                            "contact.ugc.fansCount": "fansCount"
                        }
                    }), declareBinding({
                        instance: e,
                        schema: CommentSchema,
                        mapping: {
                            impressionId: "id",
                            isLike: "isLike",
                            likeCount: "likeCount"
                        }
                    }), app.notifyInfoUpdateEventListeners(app.infoUpdateEvent.updateImpressionCommentCount, {
                        impressionId: e.data.impressionId,
                        commentCount: e.data.totalCommentCount
                    });
                } else console.error("no valid impression object data, return!");
            } else console.error("no data.impression");
        }, function(t) {
            if (console.error("GetImpressionComment failed, error: " + JSON.stringify(t)), t && t.errorCode && -10003 == t.errorCode) {
                if (!t.data || !t.data.impression) return console.error("GetImpressionComment failed, errorCode is -10003 but no impression data"), 
                e.setData({
                    impressionState: -1,
                    contentErrorText: "该内容已被发布者删除",
                    pageState: reportEnum.enumPageState.DELETED
                }), e.reportEnterSharedPage(), void app.notifyInfoUpdateEventListeners(app.infoUpdateEvent.deleteImpression, {
                    impressionId: e.data.impressionId
                });
                if (t.data.impression.type == cgi.EnumMMLifeAppPoiImpressionTypeDefine.MMLIFEAPP_POI_IMPRESSION_TYPE_PAY_RECOMMEND_POI_IMPRESSION) return console.error("GetImpressionComment failed, errorCode is -10003 type is MMLIFEAPP_POI_IMPRESSION_TYPE_PAY_RECOMMEND_POI_IMPRESSION"), 
                e.setData({
                    impressionState: -1,
                    contentErrorText: "该内容已被发布者删除",
                    pageState: reportEnum.enumPageState.DELETED
                }), e.reportEnterSharedPage(), void app.notifyInfoUpdateEventListeners(app.infoUpdateEvent.deleteImpression, {
                    impressionId: e.data.impressionId
                });
                if (!t.data.impression.comment) return console.error("GetImpressionComment failed, errorCode is -10003 but no impression.comment data"), 
                e.setData({
                    impressionState: -1,
                    contentErrorText: "该内容已被发布者删除",
                    pageState: reportEnum.enumPageState.DELETED
                }), e.reportEnterSharedPage(), void app.notifyInfoUpdateEventListeners(app.infoUpdateEvent.deleteImpression, {
                    impressionId: e.data.impressionId
                });
                if (t.data.impression.comment.status == MMLIFEAPP_IMPRESSION_STATUS_VALID) e.setData({
                    impressionState: -1,
                    contentErrorText: "该内容已被发布者删除",
                    pageState: reportEnum.enumPageState.DELETED
                }), app.notifyInfoUpdateEventListeners(app.infoUpdateEvent.deleteImpression, {
                    impressionId: e.data.impressionId
                }); else if (t.data.impression.comment.status == MMLIFEAPP_IMPRESSION_STATUS_UNREAL || t.data.impression.comment.status == MMLIFEAPP_IMPRESSION_STATUS_INVALID) {
                    var a = t.data.impression.comment.status == MMLIFEAPP_IMPRESSION_STATUS_INVALID ? reportEnum.enumPageState.IMPRESSION_INVALID : reportEnum.enumPageState.IMPRESSION_INVALID2;
                    e.setData({
                        impressionState: -2,
                        contentErrorText: "该内容违反了平台相关规定，无法查看。",
                        pageState: a
                    }), app.notifyInfoUpdateEventListeners(app.infoUpdateEvent.deleteImpression, {
                        impressionId: e.data.impressionId
                    });
                } else console.error("GetImpressionComment failed, errorCode is -10003, unknown impression.comment.status"), 
                e.setData({
                    impressionState: -1,
                    contentErrorText: "该内容已被发布者删除",
                    pageState: reportEnum.enumPageState.DELETED
                }), app.notifyInfoUpdateEventListeners(app.infoUpdateEvent.deleteImpression, {
                    impressionId: e.data.impressionId
                });
            } else console.error("GetImpressionComment failed, other error"), e.setData({
                impressionState: -99,
                contentErrorText: "内容获取失败",
                pageState: reportEnum.enumPageState.UNKNOWN
            });
            e.reportEnterSharedPage();
        });
    },
    generateMainComments: function generateMainComments(e, t) {
        var a = [];
        return e.forEach(function(e) {
            var n = {};
            n.id = e.mainComment.id, n.contact = e.mainComment.contact, n.nickName = e.mainComment.contact.remark || e.mainComment.contact.nickName, 
            0 === t && 1 === e.mainComment.contact.type && (n.nickName = n.nickName + "(朋友)"), 
            n.headImgUrl = e.mainComment.contact.headImgUrl, n.timeStr = util.getDateFormatString(e.mainComment.createTime), 
            n.commentContent = JSON.parse(e.mainComment.info).content.replace(/^\s+|\s+$/g, ""), 
            n.isDeleted = e.mainComment.deleted, n.isSelf = 0 == e.mainComment.contact.type, 
            e.replyComment && e.replyComment.length && (n.replyComments = e.replyComment.map(function(e) {
                var a = e.contact.remark || e.contact.nickName;
                0 === t && 1 === e.contact.type && (a += "(朋友)");
                var n = "";
                return e.replyContact && (n = e.replyContact.remark || e.replyContact.nickName, 
                0 === t && 1 === e.replyContact.type && (n += "(朋友)")), {
                    id: e.id,
                    nickName: a,
                    repliedNickName: n,
                    commentContent: JSON.parse(e.info).content.replace(/^\s+|\s+$/g, ""),
                    isSelf: 0 == e.contact.type
                };
            })), n.isDeleted ? console.log("Comment is Deleted") : (console.log("Comment is not Deleted, add"), 
            a.push(n));
        }), a;
    },
    getNextComments: function getNextComments() {
        var e = this, t = appLaunchData.getUserLocation();
        new cgi.SimpleRequest("GetImpressionComment", {
            impressionId: e.data.impressionId,
            location: t,
            context: e.data.impressionCommentContext
        }).send(function(t) {
            var a = !1, n = "";
            t.continueFlag && (a = t.continueFlag), t.context && (n = t.context);
            var i = t.comment || [], o = e.data.contactType, r = e.generateMainComments(i, o);
            r = e.data.mainComments.concat(r);
            var s = e.data.totalCommentCount;
            if (t.impression) {
                var m = {};
                t.impression.type == cgi.EnumMMLifeAppPoiImpressionTypeDefine.MMLIFEAPP_POI_IMPRESSION_TYPE_COMMENT ? m = t.impression.comment : t.impression.type == cgi.EnumMMLifeAppPoiImpressionTypeDefine.MMLIFEAPP_POI_IMPRESSION_TYPE_PAY_RECOMMEND_POI_IMPRESSION && (t.impression.payRecommendPoiImpression && t.impression.payRecommendPoiImpression.id ? m = renderDataUtil.convertPayRecommendInfoToImpression(t.impression.payRecommendPoiImpression) : console.error("type is MMLIFEAPP_POI_IMPRESSION_TYPE_PAY_RECOMMEND_POI_IMPRESSION, but no payRecommendPoiImpression!")), 
                m.subCommentCount && (s = m.subCommentCount, app.notifyInfoUpdateEventListeners(app.infoUpdateEvent.updateImpressionCommentCount, {
                    impressionId: e.data.impressionId,
                    commentCount: s
                }));
            }
            e.setData({
                mainComments: r,
                totalCommentCount: s,
                showBottomLoadingView: !0,
                continueFlag: a,
                impressionCommentContext: n
            });
        });
    },
    postComment: function postComment(e) {
        var t = this;
        e && new cgi.SimpleRequest("PostImpressionComment", {
            baseRequest: {
                pageId: reportEnum.enumPageName.IMPRESSION
            },
            impressionId: t.data.impressionId,
            referId: t.data.currentReferId,
            replyId: t.data.currentReplyId,
            info: JSON.stringify({
                content: e.replace(/^\s+|\s+$/g, "")
            }),
            requestId: util.uuid(),
            recId: t.data.recId,
            recType: t.data.recType
        }).ensureNoSameUrlProcessing().send(function(e) {
            t.data.lastReferId = t.data.currentReferId, t.data.lastReplyId = t.data.currentReplyId, 
            t.setData({
                placeholder: "发表评论",
                inputValue: "",
                currentReferId: "",
                currentReplyId: ""
            }), t.data.lastReferId ? t.loadLocalComment(t.data.lastInputText, e.commentId, t.data.lastReplyId) : t.loadLocalMainComment(t.data.lastInputText, e.commentId), 
            t.data.lastInputText = "", util.toast("评论成功");
        }, function(e) {
            console.log("PostImpressionComment resp failed", e);
            var a = "评论失败", n = !1;
            e && e.errorCode && -10012 == e.errorCode ? (n = !0, a = "印象已删除，无法评论。", app.notifyInfoUpdateEventListeners(app.infoUpdateEvent.deleteImpression, {
                impressionId: t.data.impressionId
            })) : e && e.errorCode && -10013 == e.errorCode ? (n = !0, a = "评论已删除，无法回复。", t.deleteLocalComment(t.data.lastMainIndex, t.data.lastReplyIndex)) : a = util.getPostImpressionCommentErrorMessage(e), 
            n && (t.data.lastReferId = "", t.data.lastReplyId = "", t.data.lastMainIndex = -1, 
            t.data.lastReplyIndex = -1, t.setData({
                placeholder: "发表评论",
                inputValue: "",
                lastInputText: "",
                focus: !1,
                showInputKeyboardMask: !1,
                currentReferId: "",
                currentReplyId: ""
            })), util.hideLoading(), wx.showToast({
                title: a,
                icon: "none",
                duration: 2e3
            });
        });
    },
    bindConfirm: util.throttleWithTrailingCancelling(function(e) {
        e.detail.value && 0 !== e.detail.value.length && 0 !== e.detail.value.trim().length ? (this.setData({
            placeholder: "发表评论",
            inputValue: ""
        }), this.postComment(e.detail.value)) : wx.showModal({
            content: this.data.warningMsg,
            showCancel: !1
        });
    }, 1e3),
    bindBlur: function bindBlur(e) {
        this.data.lastReferId = this.data.currentReferId, this.data.lastReplyId = this.data.currentReplyId;
        var t = "";
        0 == this.data.currentReferId.length && 0 == this.data.currentReplyId.length && (t = this.data.lastInputText), 
        this.setData({
            placeholder: "发表评论",
            focus: !1,
            inputValue: t,
            showInputKeyboardMask: !1,
            currentReferId: "",
            currentReplyId: ""
        });
    },
    bindFocus: function bindFocus(e) {
        var t = "";
        this.data.currentReferId == this.data.lastReferId && this.data.currentReplyId == this.data.lastReplyId ? t = this.data.lastInputText : this.data.lastInputText = "", 
        this.setData({
            showInputKeyboardMask: !0,
            inputValue: t
        });
    },
    bindInput: function bindInput(e) {
        this.data.lastInputText = e.detail.value;
    },
    onTapShareButton: function onTapShareButton(e) {
        if (console.log("分享转发: " + JSON.stringify(e)), 1 == this.data.impressionState) return console.log("impressionState is 1, showModal and return"), 
        wx.showModal({
            title: "提示",
            content: "该内容违反了平台相关规定，无法分享。",
            confirmText: "我知道了",
            cancelText: "查看详情",
            success: function success(e) {
                if (e.confirm) console.log("impressionState is 1, showModal, user confirm"); else if (e.cancel) {
                    console.log("impressionState is 1, showModal, user cancel");
                    wx.navigateTo({
                        url: "/pages/article_webview/article_webview?url=" + encodeURIComponent("https://support.weixin.qq.com/cgi-bin/mmsupport-bin/newreadtemplate?t=page/nearby/policy-nearby-dinning#section2")
                    });
                }
            }
        }), void this.reportShareImpression(reportEnum.enumShareResult.FORBID_HIGH);
        if (2 == this.data.impressionState) return console.log("impressionState is 2, showModal and return"), 
        wx.showModal({
            content: "该内容与餐厅无关，无法分享。",
            showCancel: !1,
            confirmText: "我知道了"
        }), void this.reportShareImpression(reportEnum.enumShareResult.FORBID_LOW);
        var t = this;
        if (wx.shareAppMessageForFakeNative) {
            console.log("shareAppMessage, start");
            var a = "", n = "pages/impression_feed/impression_feed?id=" + encodeURIComponent(t.data.impressionId);
            t.data.swiperData && t.data.swiperData.length > 0 && (0 == t.data.swiperData[t.data.current].type ? t.data.swiperData[t.data.current].midImageUrl ? a = t.data.swiperData[t.data.current].midImageUrl : t.data.swiperData[t.data.current].url && (a = t.data.swiperData[t.data.current].url) : 1 == t.data.swiperData[t.data.current].type && t.data.swiperData[t.data.current].thumbUrl && (a = t.data.swiperData[t.data.current].thumbUrl), 
            n = "pages/impression_feed/impression_feed?id=" + encodeURIComponent(t.data.impressionId) + "&currentMedia=" + t.data.current), 
            a && a.length || (a = t.data.poi.bigPicUrl && t.data.poi.bigPicUrl.length ? t.data.poi.bigPicUrl : "https://res.wx.qq.com/a/fed_upload/e6571a6e-666f-49d2-8292-7766fa530b3a/share-app-msg-default.jpg"), 
            wx.shareAppMessageForFakeNative({
                bizType: 0,
                title: t.data.originalNickName + " 的餐厅印象",
                imageUrl: a,
                path: n,
                desc: t.data.poi.title1,
                tailLang: "FF_Entry_Nearby",
                useDefaultSnapshot: !1,
                disableForward: !1,
                defaultHintUrl: "https://support.weixin.qq.com/cgi-bin/mmsupport-bin/newreadtemplate?t=page/nearby/upgrade-nearby-dinning",
                success: function success(e) {
                    console.log("shareAppMessage success: " + JSON.stringify(e)), t.reportShareImpression(reportEnum.enumShareResult.API_SUCCESS);
                },
                fail: function fail(e) {
                    e.errMsg && -1 != e.errMsg.search("cancel") ? (console.log("shareAppMessage cancel: " + JSON.stringify(e)), 
                    t.reportShareImpression(reportEnum.enumShareResult.API_CANCEL)) : (console.error("shareAppMessage failed: " + JSON.stringify(e)), 
                    t.reportShareImpression(reportEnum.enumShareResult.API_FAILED));
                }
            });
        } else console.log("no api");
    },
    onTapMoreButton: function onTapMoreButton(e) {
        var t = this, a = e.currentTarget.dataset.id, n = t.data.impressionId;
        t.data.isSelfImpression ? wx.showActionSheet({
            itemList: [ "删除" ],
            itemColor: "#000",
            success: function success(e) {
                t.deleteImpression(a, n);
            }
        }) : wx.showActionSheet({
            itemList: [ "投诉" ],
            itemColor: "#000",
            success: function success(e) {
                wx.navigateTo({
                    url: "/pages/complain_page/complain_page?impressionId=" + n
                });
            }
        });
    },
    deleteImpression: function deleteImpression(e, t) {
        wx.showModal({
            title: "提示",
            content: "要删除这条印象吗？",
            confirmText: "删除",
            success: function success(a) {
                a.confirm ? (console.log("用户点击确定"), util.showLoading(), new cgi.SimpleRequest("delpoicomment", {
                    id: e,
                    commentId: t,
                    scene: 0
                }).send(function(e) {
                    console.log("delpoicomment resp ", JSON.stringify(e)), util.hideLoading(), util.toast("印象删除成功"), 
                    app.notifyInfoUpdateEventListeners(app.infoUpdateEvent.deleteImpression, {
                        impressionId: t
                    }), setTimeout(function() {
                        wx.navigateBack();
                    }, 1e3);
                }, function(e) {
                    console.log("delpoicomment resp failed", e), util.hideLoading(), util.hint("印象删除失败");
                })) : a.cancel && console.log("用户点击取消");
            }
        });
    },
    onTapMarkButton: function onTapMarkButton(e) {
        console.log("onTapMarkButton: " + JSON.stringify(e));
        var t = e.currentTarget.dataset.id, a = (e.currentTarget.dataset.poi, 0 == this.data.poi.isMark ? 1 : 0);
        new PoiModel(t).toggleMark();
        var n = a ? "已添加到“我-想去的餐厅”" : "已从“我-想去的餐厅”中移除";
        wx.vibrateShort(), wx.showToast({
            title: n,
            icon: "none",
            duration: 2500
        });
        var i = a;
        new cgi.SimpleRequest("markpoi", {
            baseRequest: {
                pageId: reportEnum.enumPageName.IMPRESSION
            },
            poiId: t,
            flag: i,
            referId: this.data.referId,
            recId: this.data.recId,
            recType: this.data.recType
        }).send(function(e) {
            console.log("markpoi resp success: ", e), app.globalData.pageMe && app.globalData.pageMe.refresh(), 
            app.globalData.pageUserProfile && app.globalData.pageUserProfile.refresh();
        }, function(e) {
            console.error("markpoi resp failed", e);
        });
    },
    bindtapPoi: function bindtapPoi(e) {
        if (this.data.fromPoiDetail) wx.navigateBack(); else {
            var t = e.currentTarget.dataset.id;
            wx.navigateTo({
                url: "/pages/poi_detail/poi_detail?poiId=" + encodeURIComponent(t)
            });
        }
    },
    bindtapMainComment: function bindtapMainComment(e) {
        var t = e.currentTarget.dataset.nickname, a = e.currentTarget.dataset.id, n = e.currentTarget.dataset.isSelf;
        if (this.data.mainCommentIndex = e.currentTarget.dataset.mainIndex, n) return this.setData({
            focus: !1
        }), void this.showDeleteActionSheet(this.data.mainCommentIndex, -1, a, "");
        this.data.lastMainIndex = this.data.mainCommentIndex, this.data.lastReplyIndex = -1;
        var i = "";
        a == this.data.lastReferId && "" == this.data.lastReplyId && (i = this.data.lastInputText), 
        this.setData({
            placeholder: "回复" + t,
            focus: !0,
            inputValue: i,
            currentReferId: a,
            currentReplyId: ""
        });
    },
    bindtapReplyComment: function bindtapReplyComment(e) {
        var t = e.currentTarget.dataset.nickname, a = e.currentTarget.dataset.replyid, n = e.currentTarget.dataset.referid, i = e.currentTarget.dataset.isSelf;
        if (this.data.mainCommentIndex = e.currentTarget.dataset.mainIndex, this.data.replyCommentIndex = e.currentTarget.dataset.replyIndex, 
        i) return this.setData({
            focus: !1
        }), void this.showDeleteActionSheet(this.data.mainCommentIndex, this.data.replyCommentIndex, n, a);
        this.data.lastMainIndex = this.data.mainCommentIndex, this.data.lastReplyIndex = this.data.replyCommentIndex;
        var o = "";
        n == this.data.lastReferId && a == this.data.lastReplyId && (o = this.data.lastInputText), 
        this.setData({
            placeholder: "回复" + t,
            warningMsg: "不能回复空白消息",
            focus: !0,
            inputValue: o,
            currentReferId: n,
            currentReplyId: a,
            repliedName: t
        });
    },
    bindTapTag: function bindTapTag(e) {
        var t = e.currentTarget.dataset.name, a = e.currentTarget.dataset.id;
        wx.navigateTo({
            url: "/pages/activity/activity?activity=" + encodeURIComponent(JSON.stringify({
                name: t,
                id: a
            }))
        });
    },
    getRenderPoiInfo: function getRenderPoiInfo(e) {
        var t = {};
        t.id = e.base.id, t.unique = t.id, t.thumbUrl = "", t.bigPicUrl = "", e.base && e.base.logo && e.base.logo.thumbUrl ? t.thumbUrl = e.base.logo.thumbUrl : t.thumbUrl = "https://res.wx.qq.com/a/fed_upload/e6571a6e-666f-49d2-8292-7766fa530b3a/share-app-msg-default.jpg", 
        e.base && e.base.logo && e.base.logo.url ? t.bigPicUrl = e.base.logo.url : t.bigPicUrl = "https://res.wx.qq.com/a/fed_upload/e6571a6e-666f-49d2-8292-7766fa530b3a/share-app-msg-default.jpg", 
        t.name = e.base.name;
        var a = [];
        e.base.category.forEach(function(e) {
            var t = e.name, n = e.name.lastIndexOf(":");
            -1 != n && (t = t.substring(n + 1, e.name.length)), a.push(t);
        }), t.categoryDesc = a.join(","), t.price = 0, e.price && e.price.price && (t.price = parseInt(e.price.price) / 100), 
        t.distance = Math.round(e.base.location.distance), t.distance < 1e3 ? t.distanceString = t.distance + "m" : t.distanceString = Math.round(t.distance / 1e3) + "km", 
        e.like && e.like.count && (t.likeContactsText = e.like.count + "个朋友推荐");
        var n = 0;
        e.ugc && e.ugc.isMark && e.ugc.isMark > 0 && (n = 1), t.isMark = n, t.visitCount = 0, 
        e.ugc && e.ugc.visitCount && (t.visitCount = e.ugc.visitCount, t.visitText = e.ugc.visitCount + "个朋友发了印象"), 
        t.rank = 0, e.rank && e.rank.rank && (t.rank = e.rank.rank), t.rank = t.rank.toFixed(1);
        var i = Math.floor(t.rank), o = 5 - i;
        return t.rank - i >= .7 && (i++, o--), t.stars = Array(i).fill(1), t.halfStars = Array(0).fill(1), 
        t.unstars = Array(o).fill(1), t.poi && t.photo && t.photo[0] && (t.thumbUrl = t.photo[0].thumbUrl || t.photo[0].url), 
        t.title1 = t.name, t.title2 = t.categoryDesc, t.price && (t.title2 += " · 人均￥" + t.price), 
        this.data.useRealCurrentLocationToGetData && t.distanceString && (t.title2 += " · " + t.distanceString), 
        t;
    },
    showDeleteActionSheet: function showDeleteActionSheet(e, t, a, n) {
        var i = this;
        wx.showActionSheet({
            itemList: [ "删除" ],
            itemColor: "#000",
            success: function success(o) {
                wx.showModal({
                    title: "提示",
                    content: "要删除这条评论吗？",
                    cancelText: "取消",
                    confirmText: "删除",
                    success: function success(o) {
                        o.confirm ? (console.log("delete impression comment，confirm"), i.deleteComment(e, t, a, n)) : o.cancel && console.log("delete impression comment，cancel");
                    }
                });
            }
        });
    },
    deleteComment: function deleteComment(e, t, a, n) {
        var i = this;
        util.showLoading();
        var o = t >= 0 ? n : a;
        new cgi.SimpleRequest("DelImpressionComment", {
            impressionId: i.data.impressionId,
            commentId: o
        }).send(function(a) {
            util.hideLoading(), util.toast("删除成功"), i.deleteLocalComment(e, t);
        }, function(e) {
            console.log("DelImpressionComment resp failed", e), util.hideLoading(), util.hint("删除失败");
        });
    },
    deleteLocalComment: function deleteLocalComment(e, t) {
        var a = this.data.mainComments, n = this.data.totalCommentCount;
        if (e < 0 || e >= a.length) console.error("invalid mainCommentIndex: " + e); else {
            if (t < 0) {
                var i = a[e], o = 1;
                i.replyComments && i.replyComments.length && (o += i.replyComments.length), a.splice(e, 1), 
                n -= o;
            } else {
                if (t >= a[e].replyComments.length) return void console.error("invalid replyCommentIndex: " + t);
                a[e].replyComments.splice(t, 1), n -= 1;
            }
            n < 0 && (console.error("deleteLocalComment: new totalCommentCount < 0"), n = 0), 
            this.setData({
                mainComments: a,
                totalCommentCount: n
            }), app.notifyInfoUpdateEventListeners(app.infoUpdateEvent.updateImpressionCommentCount, {
                impressionId: this.data.impressionId,
                commentCount: n
            });
        }
    },
    loadLocalComment: function loadLocalComment(e, t, a) {
        var n, i = this.data.totalCommentCount, o = this.data.mainComments;
        if (this.data.mainCommentIndex < 0 || this.data.mainCommentIndex >= o.length) console.error("invalid mainCommentIndex: " + this.data.mainCommentIndex); else {
            var r = o[this.data.mainCommentIndex].replyComments || [], s = r.length || 0, m = {
                id: t,
                commentContent: e,
                isSelf: !0,
                nickName: app.globalData.userInfo.nickName,
                repliedNickName: a ? this.data.repliedName : ""
            };
            r.push(m), i++, this.setData((_defineProperty(n = {}, "mainComments[" + this.data.mainCommentIndex + "].replyComments[" + s + "]", m), 
            _defineProperty(n, "totalCommentCount", i), n)), app.notifyInfoUpdateEventListeners(app.infoUpdateEvent.updateImpressionCommentCount, {
                impressionId: this.data.impressionId,
                commentCount: i
            });
        }
    },
    loadLocalMainComment: function loadLocalMainComment(e, t) {
        var a = this.data.totalCommentCount;
        a++;
        var n = this.data.mainComments || [], i = this.generateMainComments([ {
            mainComment: {
                contact: Object.assign({}, app.globalData.userInfo, {
                    type: 0
                }),
                createTime: new Date().getTime() / 1e3,
                id: t,
                info: JSON.stringify({
                    content: e
                })
            }
        } ], this.data.contactType)[0];
        n.unshift(i), this.setData({
            mainComments: n,
            totalCommentCount: a
        }), app.notifyInfoUpdateEventListeners(app.infoUpdateEvent.updateImpressionCommentCount, {
            impressionId: this.data.impressionId,
            commentCount: a
        });
    },
    bindMediaKVReport: function bindMediaKVReport(e) {
        var t = e.currentTarget.dataset.media || {}, a = new Date().getTime(), n = t.url, i = 0, o = 0;
        0 == t.type ? (n = t.url, i = 2) : (n = t.thumbUrl, i = 0), 2 == i && t.imageSize ? o = t.imageSize : 0 == i && t.thumbSize && (o = t.thumbSize), 
        reporter.getReporter(16479).appVersion(app.globalData.sysInfo.version).publicLibVersion(app.globalData.sysInfo.SDKVersion).pagePath("pages/impression_feed/impression_feed").mediaType(t.type).mediaSrc(n).networkType(app.globalData.sysInfo.networkType).startLoadTime(this.data.startTimeStamp).endLoadTime(a).mediaSize(o).mediaWidth(e.detail.width).mediaHeight(e.detail.height).mediaDuration(t.duration).mediaScale(i).lazyReportToServer();
    },
    bindlikechange: function bindlikechange(e) {},
    updateImpressionContentType: function updateImpressionContentType() {
        var e = 0;
        if (this.data.topCommentContent && 0 != this.data.topCommentContent.length) {
            this.data.swiperData && 0 != this.data.swiperData.length || (e = reportEnum.enumImpressionContentType.TEXT_ONLY);
            var t = !1, a = !1;
            this.data.swiperData.forEach(function(e) {
                0 === e.type ? t = !0 : 1 === e.type ? a = !0 : console.error("unknown type for item in swiperData: " + JSON.stringify(swiperData));
            }), t && a ? e = reportEnum.enumImpressionContentType.TEXT_IMAGE_VIDEO : t ? e = reportEnum.enumImpressionContentType.TEXT_IMAGE : a ? e = reportEnum.enumImpressionContentType.TEXT_VIDEO : (console.error("has swiperData, but does not have image or video"), 
            e = reportEnum.enumImpressionContentType.TEXT_ONLY), this.setData({
                impressionContentType: e
            });
        } else console.error("No text in impression!");
    },
    reportShareImpression: function reportShareImpression(e) {
        if (e) {
            var t = "";
            this.data.poi && this.data.poi.id && (t = this.data.poi.id);
            var a = 0;
            this.data.totalCommentCount && (a = this.data.totalCommentCount);
            var n = 0;
            this.data.likeCount && (n = this.data.likeCount);
            reporter.getReporter(16876).shareType(reportEnum.enumShareType.IMPRESSION).shareScene(reportEnum.enumPageName.IMPRESSION).poiId().impressionId().shareResult(e).poiImpressionsCount(0).impressionCommentCount(a).impressionWowCount(n).impressionMarkCount(0).impressionType(this.data.impressionContentType).shareTime(Math.floor(new Date().getTime() / 1e3)).poiIdString(t).impressionIdString(this.data.impressionId).sessionId(reportSession.getId()).reportToServer();
        } else console.error("invalid parameter, shareResult");
    },
    reportEnterSharedPage: function reportEnterSharedPage() {
        var e = "";
        this.data.poi && this.data.poi.id && (e = this.data.poi.id);
        reporter.getReporter(17014).pageId(reportEnum.enumPageName.IMPRESSION).launchScene(reportSession.getLaunchScene()).poiId(e).impressionId(this.data.impressionId).pageState(this.data.pageState).impressionType(this.data.impressionContentType).time(Math.floor(new Date().getTime() / 1e3)).sessionId(reportSession.getId()).reportToServer();
    },
    bindtapToUserProfile: function bindtapToUserProfile(e) {
        var t = e.currentTarget.dataset.contact;
        0 == t.type ? wx.navigateTo({
            url: "/pages/me/me"
        }) : wx.navigateTo({
            url: "/pages/user_profile/user_profile?contact=" + encodeURIComponent(JSON.stringify(t))
        });
    },
    reportViewedMediasIndex: function reportViewedMediasIndex() {
        var e = "";
        this.data.poi && this.data.poi.id && (e = this.data.poi.id);
        reporter.getReporter(18067).pageId(reportEnum.enumPageName.IMPRESSION).sessionId(reportSession.getId()).impressionId(this.data.impressionId).poiId(e).mediaIndexList(this.data.viewedMediasIndexListString).reportToServer();
    }
});