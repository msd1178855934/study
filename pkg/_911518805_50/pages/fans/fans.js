var _extends = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var o in r) {
            Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
        }
    }
    return e;
};

function _defineProperty(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e;
}

var app = getApp(), cgi = require("../../utils/cgi"), util = require("../../utils/util"), reportEnum = require("../../utils/reportEnum"), reporter = require("../../utils/reporter"), reportSession = require("../../utils/report_session"), MMPage = require("../../utils/mmFramework/mm_page"), declareBinding = require("../../utils/model_lib/declareBinding"), ContactSchema = require("../../utils/model/model_schema").ContactSchema, ContactModel = require("../../utils/model/contact_model"), APPEND = 1, REPLACE = 0;

MMPage({
    mmReportData: {
        pageName: reportEnum.enumPageName.FANS
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
            t.cgiGetFans(REPLACE), reporter.getReporter(16501).pageId(reportEnum.enumPageName.FANS).time(Math.floor(new Date().getTime() / 1e3)).launchScene(reportSession.getLaunchScene()).sessionId(reportSession.getId()).reportToServer();
        });
    },
    cgiGetFans: function cgiGetFans(e) {
        var t = this;
        t.setData({
            shouldShowBottomLoading: !0
        }), e || (t.data.context = "", t.data.continueFlag = 1), new cgi.SimpleRequest("getfanslist", {
            context: t.data.context
        }).ensureNoSameUrlProcessing().send(function(r) {
            if (r.user && r.user.length && r.user.forEach(function(e) {
                e.ugc.followCount <= 0 && (e.ugc.followCount = 1);
            }), !e && r.user) t.setData({
                userLists: r.user
            }); else if (r.user) {
                for (var o = t.data.userLists, n = r.user, s = {}, a = o.length; a < o.length + n.length; a++) {
                    s["userLists[" + a + "]"] = n[a - o.length];
                }
                t.setData(_extends({}, s));
            } else t.setData({
                isUserListEmpty: !0
            });
            declareBinding({
                instance: t,
                schema: ContactSchema,
                arrayPath: "userLists",
                mapping: {
                    userId: "id",
                    follow: "follow",
                    "ugc.fansCount": "fansCount"
                }
            }), t.setData({
                context: r.context,
                continueFlag: r.continueFlag,
                shouldShowBottomLoading: !1
            });
        });
    },
    onTapToggleFollowUser: function onTapToggleFollowUser(e) {
        var t, r = e.currentTarget.dataset.index, o = this.data.userLists[r], n = 0 === o.follow ? 1 : 2, s = o.ugc.fansCount;
        0 === o.follow ? s++ : s--;
        this.data.userId;
        this.setData((_defineProperty(t = {}, "userLists[" + r + "].follow", +!o.follow), 
        _defineProperty(t, "userLists[" + r + "].ugc.fansCount", s), t)), new cgi.SimpleRequest("followuser", {
            baseRequest: {
                pageId: reportEnum.enumPageName.FANS
            },
            type: n,
            userId: o.userId
        }).send(function(e) {
            console.log("followuser resp success: ", e);
        }, function(e) {
            console.error("followuser resp failed", e);
        });
    },
    bindTapToUserProfile: function bindTapToUserProfile(e) {
        var t = e.currentTarget.dataset.index, r = this.data.userLists[t];
        wx.navigateTo({
            url: "/pages/user_profile/user_profile?contact=" + encodeURIComponent(JSON.stringify(r))
        });
    },
    onReachBottom: function onReachBottom() {
        this.data.continueFlag ? this.cgiGetFans(APPEND) : this.setData({
            shouldShowBottomLoading: !1
        });
    }
});