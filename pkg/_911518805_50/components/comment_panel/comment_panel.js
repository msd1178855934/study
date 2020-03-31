function _defineProperty(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}

var app = getApp(), util = require("../../utils/util"), appLaunchData = require("../../utils/appLaunchData"), reportEnum = require("../../utils/reportEnum"), cgi = require("../../utils/cgi"), mixinCss = require("../../utils/mixinCss"), renderDataUtil = require("../../utils/render_data_util"), declareBinding = require("../../utils/model_lib/declareBinding"), schema = require("../../utils/model/model_schema"), windowHeight = 0, ipxDangerBottom = mixinCss.ipxDangerBottom, MMLIFEAPP_IMPRESSION_STATUS_VALID = 0, MMLIFEAPP_IMPRESSION_STATUS_UNREAL = 1, MMLIFEAPP_IMPRESSION_STATUS_INVALID = 2;

Component({
    properties: {
        impressionId: String,
        commentCount: Number,
        shouldAutoFocus: Number,
        scene: Number,
        reportData: {
            type: Object,
            value: {}
        }
    },
    data: {
        isFirstInit: !0,
        focus: !0,
        isIpx: util.isIpx(),
        ipxDangerBottom: mixinCss.ipxDangerBottom,
        mainCommentIndex: "",
        replyCommentIndex: "",
        panelHeight: 0,
        scrollViewHeight: 0,
        keyboardHeight: 0
    },
    created: function created() {
        windowHeight || (windowHeight = wx.getSystemInfoSync().windowHeight);
    },
    attached: function attached() {
        this.setData({
            totalCommentCount: this.data.commentCount
        });
        var e = .8 * windowHeight, t = e - util.rpx2px(112) - (this.data.isIpx ? util.rpx2px(ipxDangerBottom + 20 + 75) : util.rpx2px(125));
        this.setData({
            panelHeight: e,
            scrollViewHeight: t,
            focus: 1 == this.data.shouldAutoFocus
        }), util.getCurrentPage().navigationBarColorWithMask ? wx.setNavigationBarColor(util.getCurrentPage().navigationBarColorWithMask) : wx.setNavigationBarColor({
            frontColor: "#000000",
            backgroundColor: "#999999"
        }), this.loadComment();
    },
    detached: function detached() {
        util.getCurrentPage().navigationBarColor ? wx.setNavigationBarColor(util.getCurrentPage().navigationBarColor) : wx.setNavigationBarColor({
            frontColor: "#000000",
            backgroundColor: "#FFFFFF"
        });
    },
    ready: function ready() {},
    methods: {
        hideMask: function hideMask(e) {
            this.triggerEvent("hidecommmentpanel", {});
        },
        loadComment: function loadComment() {
            var e = this;
            this.setData({
                continueFlag: 0,
                impressionCommentContext: ""
            });
            var t = appLaunchData.getUserLocation();
            new cgi.SimpleRequest("GetImpressionComment", {
                impressionId: e.data.impressionId,
                location: t
            }).send(function(t) {
                if (t.impression) {
                    e.setData({
                        continueFlag: t.continueFlag,
                        impressionCommentContext: t.context,
                        isFirstInit: !1
                    });
                    var n = t.comment || [], a = {};
                    if (t.impression.type == cgi.EnumMMLifeAppPoiImpressionTypeDefine.MMLIFEAPP_POI_IMPRESSION_TYPE_COMMENT) a = t.impression.comment; else if (t.impression.type == cgi.EnumMMLifeAppPoiImpressionTypeDefine.MMLIFEAPP_POI_IMPRESSION_TYPE_PAY_RECOMMEND_POI_IMPRESSION) {
                        if (!t.impression.payRecommendPoiImpression || !t.impression.payRecommendPoiImpression.id) return void console.error("type is MMLIFEAPP_POI_IMPRESSION_TYPE_PAY_RECOMMEND_POI_IMPRESSION, but no payRecommendPoiImpression!");
                        a = renderDataUtil.convertPayRecommendInfoToImpression(t.impression.payRecommendPoiImpression);
                    }
                    if (a.id) {
                        var o = a.contact.type, i = e.generateMainComments(n, o);
                        a.isLike, a.likeCount;
                        e.setData({
                            mainComments: i,
                            totalCommentCount: a.subCommentCount || 0,
                            showBottomLoadingView: !0,
                            contactType: o
                        }), declareBinding({
                            instance: e,
                            schema: schema.ContactSchema,
                            arrayPath: "mainComments",
                            mapping: {
                                "contact.userId": "id",
                                "contact.follow": "follow",
                                "contact.ugc.fansCount": "fansCount"
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
                    }), wx.showToast({
                        title: "该内容已被发布者删除",
                        icon: "none",
                        duration: 2500
                    }), void app.notifyInfoUpdateEventListeners(app.infoUpdateEvent.deleteImpression, {
                        impressionId: e.data.impressionId
                    });
                    if (t.data.impression.type == cgi.EnumMMLifeAppPoiImpressionTypeDefine.MMLIFEAPP_POI_IMPRESSION_TYPE_PAY_RECOMMEND_POI_IMPRESSION) return console.error("GetImpressionComment failed, errorCode is -10003 type is MMLIFEAPP_POI_IMPRESSION_TYPE_PAY_RECOMMEND_POI_IMPRESSION"), 
                    e.setData({
                        impressionState: -1,
                        contentErrorText: "该内容已被发布者删除",
                        pageState: reportEnum.enumPageState.DELETED
                    }), wx.showToast({
                        title: "该内容已被发布者删除",
                        icon: "none",
                        duration: 2500
                    }), void app.notifyInfoUpdateEventListeners(app.infoUpdateEvent.deleteImpression, {
                        impressionId: e.data.impressionId
                    });
                    if (!t.data.impression.comment) return console.error("GetImpressionComment failed, errorCode is -10003 but no impression.comment data"), 
                    e.setData({
                        impressionState: -1,
                        contentErrorText: "该内容已被发布者删除",
                        pageState: reportEnum.enumPageState.DELETED
                    }), wx.showToast({
                        title: "该内容已被发布者删除",
                        icon: "none",
                        duration: 2500
                    }), void app.notifyInfoUpdateEventListeners(app.infoUpdateEvent.deleteImpression, {
                        impressionId: e.data.impressionId
                    });
                    if (t.data.impression.comment.status == MMLIFEAPP_IMPRESSION_STATUS_VALID) e.setData({
                        impressionState: -1,
                        contentErrorText: "该内容已被发布者删除",
                        pageState: reportEnum.enumPageState.DELETED
                    }), wx.showToast({
                        title: "该内容已被发布者删除",
                        icon: "none",
                        duration: 2500
                    }), app.notifyInfoUpdateEventListeners(app.infoUpdateEvent.deleteImpression, {
                        impressionId: e.data.impressionId
                    }); else if (t.data.impression.comment.status == MMLIFEAPP_IMPRESSION_STATUS_UNREAL || t.data.impression.comment.status == MMLIFEAPP_IMPRESSION_STATUS_INVALID) {
                        var n = t.data.impression.comment.status == MMLIFEAPP_IMPRESSION_STATUS_INVALID ? reportEnum.enumPageState.IMPRESSION_INVALID : reportEnum.enumPageState.IMPRESSION_INVALID2;
                        e.setData({
                            impressionState: -2,
                            contentErrorText: "该内容违反了平台相关规定，无法查看。",
                            pageState: n
                        }), wx.showToast({
                            title: "该内容违反了平台相关规定，无法查看",
                            icon: "none",
                            duration: 2500
                        }), app.notifyInfoUpdateEventListeners(app.infoUpdateEvent.deleteImpression, {
                            impressionId: e.data.impressionId
                        });
                    } else console.error("GetImpressionComment failed, errorCode is -10003, unknown impression.comment.status"), 
                    e.setData({
                        impressionState: -1,
                        contentErrorText: "该内容已被发布者删除",
                        pageState: reportEnum.enumPageState.DELETED
                    }), wx.showToast({
                        title: "该内容已被发布者删除",
                        icon: "none",
                        duration: 2500
                    }), app.notifyInfoUpdateEventListeners(app.infoUpdateEvent.deleteImpression, {
                        impressionId: e.data.impressionId
                    });
                } else console.error("GetImpressionComment failed, other error"), e.setData({
                    impressionState: -99,
                    contentErrorText: "内容获取失败",
                    pageState: reportEnum.enumPageState.UNKNOWN
                }), wx.showToast({
                    title: "内容获取失败",
                    icon: "none",
                    duration: 2500
                });
            });
        },
        generateMainComments: function generateMainComments(e, t) {
            var n = [];
            return e.forEach(function(e) {
                var a = {};
                a.id = e.mainComment.id, a.contact = e.mainComment.contact, a.nickName = e.mainComment.contact.remark || e.mainComment.contact.nickName, 
                0 === t && 1 === e.mainComment.contact.type && (a.nickName = a.nickName + "(朋友)"), 
                a.headImgUrl = e.mainComment.contact.headImgUrl, a.timeStr = util.getDateFormatString(e.mainComment.createTime), 
                a.commentContent = JSON.parse(e.mainComment.info).content.replace(/^\s+|\s+$/g, ""), 
                a.isDeleted = e.mainComment.deleted, a.isSelf = 0 == e.mainComment.contact.type, 
                e.replyComment && e.replyComment.length && (a.replyComments = e.replyComment.map(function(e) {
                    var n = e.contact.remark || e.contact.nickName;
                    0 === t && 1 === e.contact.type && (n += "(朋友)");
                    var a = "";
                    return e.replyContact && (a = e.replyContact.remark || e.replyContact.nickName, 
                    0 === t && 1 === e.replyContact.type && (a += "(朋友)")), {
                        id: e.id,
                        nickName: n,
                        repliedNickName: a,
                        commentContent: JSON.parse(e.info).content.replace(/^\s+|\s+$/g, ""),
                        isSelf: 0 == e.contact.type
                    };
                })), a.isDeleted ? console.log("Comment is Deleted") : (console.log("Comment is not Deleted, add"), 
                n.push(a));
            }), n;
        },
        getNextComments: function getNextComments() {
            var e = this, t = appLaunchData.getUserLocation();
            new cgi.SimpleRequest("GetImpressionComment", {
                impressionId: e.data.impressionId,
                location: t,
                context: e.data.impressionCommentContext
            }).send(function(t) {
                e.setData({
                    continueFlag: t.continueFlag,
                    impressionCommentContext: t.context
                });
                var n = t.comment || [], a = e.data.contactType, o = e.generateMainComments(n, a);
                o = e.data.mainComments.concat(o);
                var i = e.data.totalCommentCount;
                if (t.impression) {
                    var r = {};
                    t.impression.type == cgi.EnumMMLifeAppPoiImpressionTypeDefine.MMLIFEAPP_POI_IMPRESSION_TYPE_COMMENT ? r = t.impression.comment : t.impression.type == cgi.EnumMMLifeAppPoiImpressionTypeDefine.MMLIFEAPP_POI_IMPRESSION_TYPE_PAY_RECOMMEND_POI_IMPRESSION && (t.impression.payRecommendPoiImpression && t.impression.payRecommendPoiImpression.id ? r = renderDataUtil.convertPayRecommendInfoToImpression(t.impression.payRecommendPoiImpression) : console.error("type is MMLIFEAPP_POI_IMPRESSION_TYPE_PAY_RECOMMEND_POI_IMPRESSION, but no payRecommendPoiImpression!")), 
                    r.subCommentCount && (i = r.subCommentCount, app.notifyInfoUpdateEventListeners(app.infoUpdateEvent.updateImpressionCommentCount, {
                        impressionId: e.data.impressionId,
                        commentCount: i
                    }));
                }
                e.setData({
                    mainComments: o,
                    totalCommentCount: i,
                    showBottomLoadingView: !0
                });
            });
        },
        bindscrolltolower: function bindscrolltolower() {
            this.data.continueFlag && this.getNextComments();
        },
        postComment: function postComment(e) {
            var t = this;
            if (e) {
                var n = 0, a = util.getCurrentPage().mmReportData;
                a && (n = a.pageName);
                var o = "", i = 0, r = 0;
                t.data.reportData && t.data.reportData.recId && (o = t.data.reportData.recId), t.data.reportData && t.data.reportData.recType && (i = t.data.reportData.recType), 
                t.data.reportData && t.data.reportData.scene && (r = t.data.reportData.scene), new cgi.SimpleRequest("PostImpressionComment", {
                    baseRequest: {
                        pageId: n,
                        scene: r
                    },
                    impressionId: t.data.impressionId,
                    referId: t.data.currentReferId,
                    replyId: t.data.currentReplyId,
                    info: JSON.stringify({
                        content: e.replace(/^\s+|\s+$/g, "")
                    }),
                    requestId: util.uuid(),
                    recId: o,
                    recType: i
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
                    var n = "评论失败", a = !1;
                    e && e.errorCode && -10012 == e.errorCode ? (a = !0, n = "印象已删除，无法评论。", app.notifyInfoUpdateEventListeners(app.infoUpdateEvent.deleteImpression, {
                        impressionId: t.data.impressionId
                    })) : e && e.errorCode && -10013 == e.errorCode ? (a = !0, n = "评论已删除，无法回复。", t.deleteLocalComment(t.data.lastMainIndex, t.data.lastReplyIndex)) : n = util.getPostImpressionCommentErrorMessage(e), 
                    a && (t.data.lastReferId = "", t.data.lastReplyId = "", t.data.lastMainIndex = -1, 
                    t.data.lastReplyIndex = -1, t.setData({
                        placeholder: "发表评论",
                        inputValue: "",
                        lastInputText: "",
                        focus: !1,
                        showInputKeyboardMask: !1,
                        currentReferId: "",
                        currentReplyId: ""
                    })), util.hideLoading(), wx.showToast({
                        title: n,
                        icon: "none",
                        duration: 2e3
                    });
                });
            }
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
            this.setData({
                keyboardHeight: 0
            }), this.data.lastReferId = this.data.currentReferId, this.data.lastReplyId = this.data.currentReplyId;
            var t = "";
            this.data.currentReferId && 0 != this.data.currentReferId.length || this.data.currentReplyId && 0 != this.data.currentReplyId.length || (t = this.data.lastInputText || ""), 
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
            var t = e.detail.height;
            this.setData({
                keyboardHeight: t
            });
            var n = "";
            this.data.currentReferId == this.data.lastReferId && this.data.currentReplyId == this.data.lastReplyId ? n = this.data.lastInputText : this.data.lastInputText = "", 
            this.setData({
                focus: !0,
                inputValue: n
            });
        },
        bindInput: function bindInput(e) {
            this.data.lastInputText = e.detail.value;
        },
        bindtapMainComment: function bindtapMainComment(e) {
            if (!this.data.focus) {
                var t = e.currentTarget.dataset.nickname, n = e.currentTarget.dataset.id, a = e.currentTarget.dataset.isSelf;
                this.data.mainCommentIndex = e.currentTarget.dataset.mainIndex;
                var o = this.data.mainCommentIndex;
                if (a) return this.setData({
                    focus: !1
                }), void this.showDeleteActionSheet(o, -1, n, "");
                this.data.lastMainIndex = o, this.data.lastReplyIndex = -1;
                var i = "";
                n == this.data.lastReferId && "" == this.data.lastReplyId && (i = this.data.lastInputText || ""), 
                this.setData({
                    placeholder: "回复" + t,
                    focus: !0,
                    inputValue: i,
                    currentReferId: n,
                    currentReplyId: ""
                });
            }
        },
        bindtapReplyComment: function bindtapReplyComment(e) {
            var t = e.currentTarget.dataset.nickname, n = e.currentTarget.dataset.replyid, a = e.currentTarget.dataset.referid, o = e.currentTarget.dataset.isSelf;
            this.data.mainCommentIndex = e.currentTarget.dataset.mainIndex, this.data.replyCommentIndex = e.currentTarget.dataset.replyIndex;
            var i = this.data.mainCommentIndex, r = this.data.replyCommentIndex;
            if (o) return this.setData({
                focus: !1
            }), void this.showDeleteActionSheet(i, r, a, n);
            this.data.lastMainIndex = i, this.data.lastReplyIndex = r;
            var s = "";
            a == this.data.lastReferId && n == this.data.lastReplyId && (s = this.data.lastInputText), 
            this.setData({
                placeholder: "回复" + t,
                warningMsg: "不能回复空白消息",
                focus: !0,
                inputValue: s || "",
                currentReferId: a,
                currentReplyId: n,
                repliedName: t
            });
        },
        showDeleteActionSheet: function showDeleteActionSheet(e, t, n, a) {
            var o = this;
            wx.showActionSheet({
                itemList: [ "删除" ],
                itemColor: "#000",
                success: function success(i) {
                    wx.showModal({
                        title: "提示",
                        content: "要删除这条评论吗？",
                        cancelText: "取消",
                        confirmText: "删除",
                        success: function success(i) {
                            i.confirm ? (console.log("delete impression comment，confirm"), o.deleteComment(e, t, n, a)) : i.cancel && console.log("delete impression comment，cancel");
                        }
                    });
                }
            });
        },
        deleteComment: function deleteComment(e, t, n, a) {
            var o = this;
            util.showLoading();
            var i = t >= 0 ? a : n;
            new cgi.SimpleRequest("DelImpressionComment", {
                impressionId: o.data.impressionId,
                commentId: i
            }).send(function(n) {
                util.hideLoading(), util.toast("删除成功"), o.deleteLocalComment(e, t);
            }, function(e) {
                console.log("DelImpressionComment resp failed", e), util.hideLoading(), util.hint("删除失败");
            });
        },
        deleteLocalComment: function deleteLocalComment(e, t) {
            var n = this.data.mainComments, a = this.data.totalCommentCount;
            if (e < 0 || e >= n.length) console.error("invalid mainCommentIndex: " + e); else {
                if (t < 0) {
                    var o = n[e], i = 1;
                    o.replyComments && o.replyComments.length && (i += o.replyComments.length), n.splice(e, 1), 
                    a -= i;
                } else {
                    if (t >= n[e].replyComments.length) return void console.error("invalid replyCommentIndex: " + t);
                    n[e].replyComments.splice(t, 1), a -= 1;
                }
                a < 0 && (console.error("deleteLocalComment: new totalCommentCount < 0"), a = 0), 
                this.setData({
                    mainComments: n,
                    totalCommentCount: a
                }), app.notifyInfoUpdateEventListeners(app.infoUpdateEvent.updateImpressionCommentCount, {
                    impressionId: this.data.impressionId,
                    commentCount: a
                });
            }
        },
        loadLocalComment: function loadLocalComment(e, t, n) {
            var a, o = this.data.mainCommentIndex, i = this.data.totalCommentCount, r = this.data.mainComments;
            if (o < 0 || o >= r.length) console.error("invalid mainCommentIndex: " + o); else {
                var s = r[o].replyComments || [], m = s.length || 0, d = {
                    id: t,
                    commentContent: e,
                    isSelf: !0,
                    nickName: app.globalData.userInfo.nickName,
                    repliedNickName: n ? this.data.repliedName : ""
                };
                s.push(d), i++, this.setData((_defineProperty(a = {}, "mainComments[" + o + "].replyComments[" + m + "]", d), 
                _defineProperty(a, "totalCommentCount", i), a)), app.notifyInfoUpdateEventListeners(app.infoUpdateEvent.updateImpressionCommentCount, {
                    impressionId: this.data.impressionId,
                    commentCount: i
                });
            }
        },
        loadLocalMainComment: function loadLocalMainComment(e, t) {
            var n = this.data.totalCommentCount;
            n++;
            var a = this.data.mainComments || [], o = this.generateMainComments([ {
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
            a.unshift(o), this.setData({
                mainComments: a,
                totalCommentCount: n
            }), app.notifyInfoUpdateEventListeners(app.infoUpdateEvent.updateImpressionCommentCount, {
                impressionId: this.data.impressionId,
                commentCount: n
            });
        },
        noop: function noop() {},
        bindtapToUserProfile: function bindtapToUserProfile(e) {
            var t = e.currentTarget.dataset.contact;
            0 == t.type ? wx.navigateTo({
                url: "/pages/me/me"
            }) : wx.navigateTo({
                url: "/pages/user_profile/user_profile?contact=" + encodeURIComponent(JSON.stringify(t))
            });
        },
        onLongPressMainComment: function onLongPressMainComment(e) {
            console.log("onLongPressMainComment, e: " + JSON.stringify(e));
            e.currentTarget.dataset.nickname;
            var t = e.currentTarget.dataset.id;
            e.currentTarget.dataset.isSelf;
            this.data.mainCommentIndex = e.currentTarget.dataset.mainIndex;
            this.data.mainCommentIndex;
            this.setData({
                focus: !1
            }), this.showComplainActionSheet(t, "");
        },
        onLongPressReplyComment: function onLongPressReplyComment(e) {
            console.log("onLongPressReplyComment, e: " + JSON.stringify(e));
            e.currentTarget.dataset.nickname;
            var t = e.currentTarget.dataset.replyid, n = e.currentTarget.dataset.referid;
            e.currentTarget.dataset.isSelf;
            this.data.mainCommentIndex = e.currentTarget.dataset.mainIndex, this.data.replyCommentIndex = e.currentTarget.dataset.replyIndex;
            this.data.mainCommentIndex, this.data.replyCommentIndex;
            this.setData({
                focus: !1
            }), this.showComplainActionSheet(n, t);
        },
        showComplainActionSheet: function showComplainActionSheet(e, t) {
            var n = t && t.length ? t : e;
            if (n && n.length) {
                var a = this;
                console.log("showComplainActionSheet"), wx.showActionSheet({
                    itemList: [ "投诉" ],
                    itemColor: "#000",
                    success: function success(e) {
                        wx.navigateTo({
                            url: "/pages/complain_page/complain_page?impressionId=" + a.data.impressionId + "&commentId=" + n
                        });
                    }
                });
            } else console.error("cannot showComplainActionSheet, invalid parameters, referId: " + e + ", replyId: " + t);
        }
    }
});