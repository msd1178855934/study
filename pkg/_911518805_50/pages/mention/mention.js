var _extends = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var i in n) {
            Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
        }
    }
    return e;
}, app = getApp(), cgi = require("../../utils/cgi"), cgiLonglink = require("../../utils/cgi_longlink"), util = require("../../utils/util"), mentionStorage = require("../../utils/mentionStorage"), reportEnum = require("../../utils/reportEnum"), mixinCss = require("../../utils/mixinCss"), reporter = require("../../utils/reporter"), reportSession = require("../../utils/report_session"), MMPage = require("../../utils/mmFramework/mm_page"), renderDataUtil = require("../../utils/render_data_util"), enMMLifeAppMentionTypeDefine = {
    MMLIFEAPP_MENTION_TYPE_MARK_IMPRESSION: 0,
    MMLIFEAPP_MENTION_TYPE_COMMENT_IMPRESSION: 1,
    MMLIFEAPP_MENTION_TYPE_LIKE_IMPRESSION: 2,
    MMLIFEAPP_MENTION_TYPE_SPECIAL_MENTION: 3,
    MMLIFEAPP_MENTION_TYPE_FOLLOW_MENTION: 4
}, enMMLifeAppMentionFlagDefine = {
    MMLIFEAPP_MENTION_FLAG_NEW_MENTION: 1,
    MMLIFEAPP_MENTION_FLAG_COMMENT_DELETED: 2,
    MMLIFEAPP_MENTION_FLAG_REFER_DELETED: 4,
    MMLIFEAPP_MENTION_FLAG_IMPRESSION_DELETED: 8,
    MMLIFEAPP_MENTION_FLAG_PAY_RECOMMEND_POI_IMPRESSION: 16,
    MMLIFEAPP_MENTION_FLAG_DISABLE_NOTIFY: 32
}, enMMLifeAppPoiContactTypeDefine = {
    MMLIFEAPP_POI_CONTACT_TYPE_SELF: 0,
    MMLIFEAPP_POI_CONTACT_TYPE_FRIEND: 1,
    MMLIFEAPP_POI_CONTACT_TYPE_STRANGER: 2
};

MMPage({
    mmReportData: {
        pageName: reportEnum.enumPageName.MENTION
    },
    data: {
        unreadMentionCount: 0,
        newList: [],
        oldList: [],
        context: "",
        continueFlag: 1,
        isInited: !1
    },
    onLoad: function onLoad(e) {
        var t = this;
        app.addLaunchListener(function() {
            t.cgiGetMention(), reporter.getReporter(16501).pageId(reportEnum.enumPageName.MENTION).time(Math.floor(new Date().getTime() / 1e3)).launchScene(reportSession.getLaunchScene()).sessionId(reportSession.getId()).reportToServer();
        });
    },
    bindtapNewMentionHint: function bindtapNewMentionHint() {
        this.setData({
            unreadMentionCount: 0
        }), this.cgiGetMention();
    },
    cgiGetMention: function cgiGetMention(e) {
        var t = this;
        e || t.setData({
            context: "",
            continueFlag: 1
        }), t.setData({
            shouldShowBottomLoading: !0
        }), new cgi.SimpleRequest("GetMention", {
            context: t.data.context
        }).ensureNoSameUrlProcessing().send(function(n) {
            if (!e) {
                if (cgiLonglink.getIsSocketEverOpened()) {
                    if (app.globalData && app.globalData.pageFriendsTimeline && app.globalData.pageFriendsTimeline.setData) {
                        var i = app.globalData.pageFriendsTimeline.data.unreadMentionCountSeq || 0, o = +t.options.unreadMentionCountSeq;
                        console.log("currentSeq=", i, "lastSeq=", o), i == o && app.globalData.pageFriendsTimeline.setData({
                            unreadMentionCount: 0
                        });
                    }
                    cgiLonglink.syncMention();
                } else app.globalData && app.globalData.pageFriendsTimeline && app.globalData.pageFriendsTimeline.setData && app.globalData.pageFriendsTimeline.setData({
                    unreadMentionCount: 0
                });
                cgiLonglink.addUnReadMentionCountChangeListener("mention", function(e) {
                    t.setData({
                        unreadMentionCount: e
                    });
                });
            }
            t.setData({
                context: n.context,
                continueFlag: n.continueFlag,
                isInited: !0
            });
            var a = [], s = [];
            (n.mention || []).forEach(function(e) {
                var t = {}, n = e.impressionId;
                if (t.impressionId = n, t.isImpressionDeleted = !!(e.flag & enMMLifeAppMentionFlagDefine.MMLIFEAPP_MENTION_FLAG_IMPRESSION_DELETED), 
                e.flag & enMMLifeAppMentionFlagDefine.MMLIFEAPP_MENTION_FLAG_PAY_RECOMMEND_POI_IMPRESSION) t.impressionPic = "", 
                t.impressionContent = renderDataUtil.payRecommendInfoText; else if (e.impressionInfo) {
                    var i = JSON.parse(e.impressionInfo), o = "";
                    i.pic && i.pic.length && (o = i.pic[0].thumbUrl);
                    var r = i.content.replace(/^\s+|\s+$/g, "");
                    t.impressionPic = o, t.impressionContent = r;
                } else t.impressionPic = "EMPTY", t.impressionContent = "", t.isImpressionDeleted = !0;
                if (t.poiId = "", e.poi && (t.poiId = e.poi.base.id), t.headImgUrl = e.fromUser.headImgUrl, 
                t.nickName = e.fromUser.remark || e.fromUser.nickName, t.contact = e.fromUser, t.fromUser = e.fromUser, 
                t.fromUser.isNameLenRestrict = !1, e.fromUser && e.fromUser.type == enMMLifeAppPoiContactTypeDefine.MMLIFEAPP_POI_CONTACT_TYPE_FRIEND && (t.nickName = t.nickName + "(朋友)"), 
                e.fromUser && e.fromUser.type == enMMLifeAppPoiContactTypeDefine.MMLIFEAPP_POI_CONTACT_TYPE_STRANGER && (t.fromUser.isNameLenRestrict = !0), 
                t.timeStr = util.getDateFormatString(e.createTime), t.isNotifyDisabled = !!(e.flag & enMMLifeAppMentionFlagDefine.MMLIFEAPP_MENTION_FLAG_DISABLE_NOTIFY), 
                e.type == enMMLifeAppMentionTypeDefine.MMLIFEAPP_MENTION_TYPE_COMMENT_IMPRESSION) {
                    t.type = "COMMENT";
                    var p = "评论了你的印象";
                    if (e.toUser) if (t.toUser = e.toUser, t.toUser.isNameLenRestrict = !1, e.toUser.type == enMMLifeAppPoiContactTypeDefine.MMLIFEAPP_POI_CONTACT_TYPE_SELF) p = "回复了你的评论"; else {
                        var M = e.toUser.remark || e.toUser.nickName;
                        e.toUser && e.toUser.type == enMMLifeAppPoiContactTypeDefine.MMLIFEAPP_POI_CONTACT_TYPE_FRIEND && (M += "(朋友)"), 
                        p = "", t.toUser.toUserNickName = M, t.toUser.isNameLenRestrict = !0;
                    }
                    t.text2 = p, t.isDeleted = !!(e.flag & enMMLifeAppMentionFlagDefine.MMLIFEAPP_MENTION_FLAG_COMMENT_DELETED), 
                    t.isDeleted || (t.content = JSON.parse(e.commentInfo).content.replace(/^\s+|\s+$/g, "")), 
                    e.commentId && (t.commentId = e.commentId);
                } else e.type == enMMLifeAppMentionTypeDefine.MMLIFEAPP_MENTION_TYPE_MARK_IMPRESSION ? (t.type = "MARK", 
                t.text2 = "", t.content = "因为你的印象想去 " + e.poi.base.name) : e.type == enMMLifeAppMentionTypeDefine.MMLIFEAPP_MENTION_TYPE_LIKE_IMPRESSION ? t.type = "LIKE" : e.type == enMMLifeAppMentionTypeDefine.MMLIFEAPP_MENTION_TYPE_SPECIAL_MENTION ? t.type = "SPECIAL" : e.type == enMMLifeAppMentionTypeDefine.MMLIFEAPP_MENTION_TYPE_FOLLOW_MENTION && (t.type = "FOLLOW");
                !!(e.flag & enMMLifeAppMentionFlagDefine.MMLIFEAPP_MENTION_FLAG_NEW_MENTION) ? a.push(t) : s.push(t);
            }), e ? t.setData({
                newList: t.data.newList.concat(a),
                oldList: t.data.oldList.concat(s)
            }) : t.setData({
                newList: a,
                oldList: s
            }), t.setData({
                shouldShowBottomLoading: !1
            });
        });
    },
    bindtapItem: function bindtapItem(e) {
        var t = e.currentTarget.dataset.impressionid, n = e.currentTarget.dataset.isimpressiondeleted, i = e.currentTarget.dataset.poiId;
        reporter.getReporter(16483).sessionType(0).sessionId(reportSession.getId()).clickTime(Math.floor(new Date().getTime() / 1e3)).scene(reportEnum.enumSceneType.MENTION).poiId().impressionId().impressionCommentCount().isForwardedImpression().poiIdString(i).impressionIdString(t).action(reportEnum.enumFeedAction.FEED_CLIKED_IMPRESSION).impressionType(reportEnum.enumFeedImpressionType.FRIEND).requestId().pageId(reportEnum.enumPageName.MENTION).reasonId().reasonIdString().recId().recType(0).reportToServer(), 
        n ? wx.showToast({
            title: "印象已删除",
            icon: "none",
            duration: 1500
        }) : wx.navigateTo({
            url: "/pages/impression_feed/impression_feed?id=" + encodeURIComponent(t)
        });
    },
    bindtapToUserProfile: function bindtapToUserProfile(e) {
        var t = e.currentTarget.dataset.contact;
        0 == t.type ? wx.navigateTo({
            url: "/pages/me/me"
        }) : wx.navigateTo({
            url: "/pages/user_profile/user_profile?contact=" + encodeURIComponent(JSON.stringify(t))
        });
    },
    bindTapToFansPage: function bindTapToFansPage() {
        wx.navigateTo({
            url: "/pages/fans/fans"
        });
    },
    onTapMoreOptions: function onTapMoreOptions(e) {
        var t = this, n = e.currentTarget.dataset.commentid, i = e.currentTarget.dataset.impressionid, o = e.currentTarget.dataset.isnotifydisabled || !1, a = e.currentTarget.dataset.iscommentdeleted || !1, s = o ? "接收红点通知" : "不再红点通知", r = [ s ];
        n && !a && (r = [ s, "投诉这条评论" ]), wx.showActionSheet({
            itemList: r,
            itemColor: "#000",
            success: function success(e) {
                0 === e.tapIndex ? t.updateUserNotify(i, o) : 1 === e.tapIndex && wx.navigateTo({
                    url: "/pages/complain_page/complain_page?impressionId=" + i + "&commentId=" + n
                });
            }
        });
    },
    updateUserNotify: function updateUserNotify(e, t) {
        var n = this;
        util.showLoading(), new cgi.SimpleRequest("changeusernotifystatus", {
            impressionId: e,
            status: t ? 1 : 2
        }).send(function(t) {
            console.log("changeusernotifystatus resp success"), n.updateAllMentionsForSameImpressionId(e), 
            util.hideLoading(), util.toast("设置成功");
        }, function(e) {
            console.error("changeusernotifystatus resp failed", e), util.hideLoading(), util.hint("设置失败");
        });
    },
    updateAllMentionsForSameImpressionId: function updateAllMentionsForSameImpressionId(e) {
        for (var t = [], n = 0; n < this.data.newList.length; n++) {
            var i = this.data.newList[n];
            i.impressionId === e && (t["newList[" + n + "].isNotifyDisabled"] = !i.isNotifyDisabled);
        }
        for (var o = 0; o < this.data.oldList.length; o++) {
            var a = this.data.oldList[o];
            a.impressionId === e && (t["oldList[" + o + "].isNotifyDisabled"] = !a.isNotifyDisabled);
        }
        this.setData(_extends({}, t));
    },
    onReachBottom: function onReachBottom() {
        this.data.continueFlag && this.cgiGetMention(1);
    }
});