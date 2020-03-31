require("./../../runtime"), require("./../../common"), (wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 7 ], {
    71: function(e, t, a) {
        "use strict";
        a.r(t);
        var n = a(32), i = a.n(n), o = a(9), p = a(0), c = a(24), s = a(8);
        Object(s.a)({
            behaviors: [ i.a ],
            data: {
                showActionSheet: !1
            },
            options: {
                styleIsolation: "apply-shared"
            },
            properties: {
                feiyan_data: {
                    type: Object,
                    value: {}
                }
            },
            computed: {
                update_time_filter(e) {
                    if (e.feiyan_data.update_time) {
                        const t = e.feiyan_data.update_time.replace(/-/g, "/"), a = new Date(t), n = parseInt(a.getTime() / 1e3);
                        return Object(c.b)(n);
                    }
                    return "";
                }
            },
            methods: {
                viewData() {
                    wx.getStorage({
                        key: "[cache]feiyan_app",
                        complete: e => {
                            const t = e.data;
                            if (t) {
                                wx.navigateToMiniProgramDirectly({
                                    appId: t.appid,
                                    path: t.path,
                                    scene: 17,
                                    preScene: 17
                                });
                                const e = {
                                    page_path: t.path,
                                    content_desc: t.appName
                                };
                                o.f.next({
                                    cardIndex: 0,
                                    hotListItem: e,
                                    eventId: p.j.CLICK,
                                    action_type: p.a.CLICK_EPIDEMIC_DATA_APP_JUMP,
                                    entry_scene: p.f.INDEX_EPIDEMIC_FEED_LIST
                                });
                            } else this.showActionSheet();
                        }
                    }), o.f.next({
                        eventId: p.j.CLICK,
                        action_type: p.a.CLICK_EPIDEMIC_DATA_APP,
                        entry_scene: p.f.INDEX_EPIDEMIC_FEED_LIST
                    });
                },
                showActionSheet() {
                    this.setData({
                        showActionSheet: !0
                    });
                },
                closeActionSheet() {
                    this.setData({
                        showActionSheet: !1
                    });
                }
            }
        });
    }
}, [ [ 71, 0, 1 ] ] ]);
//# sourceMappingURL=epidemic-info-panel.js.map