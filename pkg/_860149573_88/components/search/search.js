require("./../../runtime"), require("./../../common"), (wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 18 ], {
    113: function(e, t, r) {
        "use strict";
        r.r(t);
        var s = r(59), n = (r(2), r(4)), a = r(16), o = r(0), p = r(8);
        Object(p.a)({
            options: {
                styleIsolation: "apply-shared"
            },
            properties: {
                scene: {
                    type: Number,
                    value: 201
                },
                hidden: {
                    type: Boolean,
                    value: !1
                },
                extraClass: {
                    type: String,
                    value: ""
                },
                eventId: {
                    type: Number,
                    value: 0
                }
            },
            data: {
                searchText: "搜索小程序"
            },
            methods: {
                toSearch() {
                    console.log("打开search"), s.a.next({
                        scene: this.properties.scene
                    }), n.c.next(o.i.openSearch), a.b.next({
                        eventId: this.properties.eventId
                    });
                }
            }
        });
    }
}, [ [ 113, 0, 1 ] ] ]);
//# sourceMappingURL=search.js.map