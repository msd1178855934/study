require("./runtime"), require("./common"), (wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 3 ], {
    111: function(e, s, n) {
        "use strict";
        n.r(s);
        var o = n(2), t = n(4), c = n(0), i = n(6);
        o.d.connect(), o.e.connect(), o.f.connect(), i.c.connect(), i.e.connect(), o.c.connect(), 
        o.i.connect(), App({
            onLaunch() {
                this.sessionId = "";
            },
            onShow(e) {
                const s = e.query.showOrderEntrance || 0;
                let n = e.query.redDotTypeList;
                n = n ? (n = decodeURIComponent(n)).split(",") : [], this.redDotTypeList = n.map(e => +e), 
                this.showOrderEntrance = !!+s, console.log("redDotTypeList", n), console.log("showOrderEntrance", s), 
                1112 === e.scene && t.c.next(c.i.open), 1038 === e.scene && e.sessionId !== this.sessionId || this.setGlobalSessionId(e), 
                this.sessionId = e.sessionId;
            },
            setGlobalSessionId(e) {
                e.sessionId = e.sessionId || "test in devtools", o.c.next(e.sessionId);
            },
            onHide(e) {
                o.a.next(e);
            }
        });
    }
}, [ [ 111, 0, 1 ] ] ]);
//# sourceMappingURL=app.js.map