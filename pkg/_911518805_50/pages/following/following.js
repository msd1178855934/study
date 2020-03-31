var _extends = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var o = arguments[t];
        for (var r in o) {
            Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
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

var app = getApp(), cgi = require("../../utils/cgi"), util = require("../../utils/util"), reportEnum = require("../../utils/reportEnum"), reporter = require("../../utils/reporter"), reportSession = require("../../utils/report_session"), MMPage = require("../../utils/mmFramework/mm_page"), declareBinding = require("../../utils/model_lib/declareBinding"), ContactSchema = require("../../utils/model/model_schema").ContactSchema, ContactModel = require("../../utils/model/contact_model"), NumberSchema = require("../../utils/model/model_schema").NumberSchema, NumberModel = require("../../utils/model/number_model"), singleValueIds = require("../../utils/model/single_value_ids"), APPEND = 1, REPLACE = 0;

MMPage({
    mmReportData: {
        pageName: reportEnum.enumPageName.FOLLOWING
    },
    data: {
        userLists: [],
        isUserListEmpty: !1,
        context: "",
        continueFlag: 1
    },
    onLoad: function onLoad(e) {
        var t = this;
        app.addLaunchListener(function() {
            t.cgiGetFollowing(REPLACE), reporter.getReporter(16501).pageId(reportEnum.enumPageName.FOLLOWING).time(Math.floor(new Date().getTime() / 1e3)).launchScene(reportSession.getLaunchScene()).sessionId(reportSession.getId()).reportToServer();
        });
    },
    cgiGetFollowing: function cgiGetFollowing(e) {
        var t = this;
        t.setData({
            shouldShowBottomLoading: !0
        }), e || (t.data.context = "", t.data.continueFlag = 1), new cgi.SimpleRequest("getfollowuserlist", {
            context: t.data.context
        }).ensureNoSameUrlProcessing().send(function(o) {
            if (o.user && o.user.length && o.user.forEach(function(e) {
                e.ugc.fansCount <= 0 && (e.ugc.fansCount = 1);
            }), !e && o.user) t.setData({
                userLists: o.user
            }); else if (o.user) {
                for (var r = t.data.userLists, n = o.user, s = {}, a = r.length; a < r.length + n.length; a++) {
                    s["userLists[" + a + "]"] = n[a - r.length];
                }
                t.setData(_extends({}, s));
            } else t.setData({
                isUserListEmpty: !0
            });
            t.setData({
                context: o.context,
                continueFlag: o.continueFlag,
                shouldShowBottomLoading: !1
            }), declareBinding({
                instance: t,
                schema: ContactSchema,
                arrayPath: "userLists",
                mapping: {
                    userId: "id",
                    follow: "follow",
                    "ugc.fansCount": "fansCount"
                },
                onUpdate: function onUpdate(e, t, o, r, n) {
                    if (1 === t.follow) {
                        var s = new NumberModel(singleValueIds.followCountId).get();
                        s++, new NumberModel(singleValueIds.followCountId).set(s);
                    } else if (0 === t.follow) {
                        var a = new NumberModel(singleValueIds.followCountId).get();
                        a--, new NumberModel(singleValueIds.followCountId).set(a);
                    }
                }
            }), new NumberModel(singleValueIds.followCountId).set(o.totalCount);
        });
    },
    onTapToggleFollowUser: function onTapToggleFollowUser(e) {
        var t, o = e.currentTarget.dataset.index, r = this.data.userLists[o], n = 0 === r.follow ? 1 : 2, s = r.ugc.fansCount;
        0 === r.follow ? s++ : s--;
        var a = 0 === r.follow ? 1 : 0;
        this.data.userId;
        this.setData((_defineProperty(t = {}, "userLists[" + o + "].follow", a), _defineProperty(t, "userLists[" + o + "].ugc.fansCount", s), 
        t)), new cgi.SimpleRequest("followuser", {
            baseRequest: {
                pageId: reportEnum.enumPageName.FOLLOWING
            },
            type: n,
            userId: r.userId
        }).send(function(e) {
            console.log("followuser resp success: ", e);
        }, function(e) {
            console.error("followuser resp failed", e);
        });
    },
    bindTapToUserProfile: function bindTapToUserProfile(e) {
        var t = e.currentTarget.dataset.index, o = this.data.userLists[t];
        wx.navigateTo({
            url: "/pages/user_profile/user_profile?contact=" + encodeURIComponent(JSON.stringify(o))
        });
    },
    onReachBottom: function onReachBottom() {
        this.data.continueFlag ? this.cgiGetFollowing(APPEND) : this.setData({
            shouldShowBottomLoading: !1
        });
    }
});