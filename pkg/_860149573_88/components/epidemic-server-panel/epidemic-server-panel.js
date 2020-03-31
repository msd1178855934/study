require("./../../runtime"), require("./../../common"), (wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 8 ], {
    70: function(e, r, a) {
        "use strict";
        a.r(r);
        var s = a(16), t = a(8), n = a(0);
        Object(t.a)({
            options: {
                styleIsolation: "apply-shared"
            },
            properties: {
                virus_group_info: {
                    type: Array,
                    value: []
                }
            },
            methods: {
                goFriendsUseEpidemic(e) {
                    const r = e.currentTarget.dataset.anchor, a = e.currentTarget.dataset.group_name;
                    wx.navigateTo({
                        url: "../../pages/friends-use-epidemic/friends-use-epidemic?anchor=" + r
                    }), s.b.next({
                        eventId: n.e.CLICK_EPIDEMIC_SERVER,
                        params: a
                    });
                }
            }
        });
    }
}, [ [ 70, 0, 1 ] ] ]);
//# sourceMappingURL=epidemic-server-panel.js.map