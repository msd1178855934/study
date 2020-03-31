require("./../../runtime"), require("./../../common"), (wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 13 ], {
    78: function(e, i, n) {
        "use strict";
        n.r(i);
        var s = n(9), t = n(0), a = n(8);
        Object(a.a)({
            options: {
                styleIsolation: "apply-shared"
            },
            methods: {
                goEpidemicPage() {
                    wx.navigateTo({
                        url: "../../pages/friends-use-epidemic/friends-use-epidemic"
                    }), s.f.next({
                        eventId: t.j.CLICK,
                        action_type: t.a.CLICK_FRIENDS_USE_EPIDEMIC_PANEL,
                        entry_scene: t.f.TIMELINE_FEEDS_LIST
                    });
                }
            }
        });
    }
}, [ [ 78, 0, 1 ] ] ]);
//# sourceMappingURL=friends-use-epidemic-panel.js.map