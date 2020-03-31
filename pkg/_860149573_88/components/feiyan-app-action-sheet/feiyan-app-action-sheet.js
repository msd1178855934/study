require("./../../runtime"), require("./../../common"), (wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 11 ], {
    72: function(t, e, a) {
        "use strict";
        a.r(e);
        var i = a(8), n = a(9), p = a(0);
        Object(i.a)({
            data: {
                animationData: null,
                hasCheck: !1
            },
            options: {
                styleIsolation: "apply-shared"
            },
            attached() {
                setTimeout(() => {
                    const t = wx.createAnimation();
                    t.translateY(0).step({
                        timingFunction: "ease",
                        duration: 230
                    });
                    const e = t.export();
                    this.setData({
                        animationData: e
                    }), this.shouldTriggerEvent = !1;
                }, 20);
            },
            data: {
                appList: [ {
                    appName: "腾讯健康",
                    appIcon: "http://mmbiz.qpic.cn/mmbiz_png/gzTjzd7OLETrxXE3y0p2U89YkqSerGMpOsgNXZs7hqYQKdReRqdNhwYY8aXQbJdDLZP33FGTKTjo2NnMy83NOA/640?wx_fmt=png&wxfrom=200",
                    appid: "wxb032bc789053daf4",
                    path: "pages/webview/main?src=https%3A%2F%2Ffeiyan.wecity.qq.com%2Fwuhan%2Fdist%2Findex.html%23%2Findex%3Ftab%3Dyiqingditu%26channel%3DAAGE4DTdkWHeoYS3T0Y8o3ZV%26_scope%3Dsnsapi_base%26minitype%3Dth%26cityCode%3D141100"
                }, {
                    appName: "丁香医生",
                    appIcon: "http://mmbiz.qpic.cn/mmbiz_png/mXuHIXGdlE570rBA6rw2g263HWeGAibEQicU1c3Zy4xtdQNicG2hNNrQqWPoGsDv1EpEGzGqQxDntzNicibxd5X0V5Q/640?wx_fmt=png&wxfrom=200",
                    appid: "wxffc1051032845ffa",
                    path: "pages/webview/index?url=https%3A%2F%2F3g.dxy.cn%2Fnewh5%2Fview%2Fpneumonia"
                }, {
                    appName: "腾讯医典",
                    appIcon: "http://mmbiz.qpic.cn/mmbiz_png/lurquhcQaCVvRWaWDveMzrqF0nialU5doEsNHdUhMxQziaDMXUiaHBA2rhktMowWzyqW58ejSBwiaicZ7c0YgIRiboibQ/640?wx_fmt=png&wxfrom=200",
                    appid: "wx811d61e1f61155a4",
                    path: "pages/webview/webview?shareUrl=https%3A%2F%2Fh5.baike.qq.com%2Fmobile%2Fpneumonia.html%3Ftmenu%3Dnoback"
                } ]
            },
            methods: {
                go(t) {
                    const {index: e} = t.currentTarget.dataset, a = this.data.appList[e];
                    wx.navigateToMiniProgramDirectly({
                        appId: a.appid,
                        path: a.path,
                        scene: 17,
                        preScene: 17
                    });
                    const i = {
                        page_path: a.path,
                        content_desc: a.appName
                    };
                    n.f.next({
                        hotListItem: i,
                        eventId: p.j.CLICK,
                        cardIndex: e,
                        action_type: this.data.hasCheck ? p.a.CLICK_EPIDEMIC_ACTION_SHEET_APP_WITH_CHECK : p.a.CLICK_EPIDEMIC_ACTION_SHEET_APP_WITHOUT_CHECK,
                        entry_scene: p.f.INDEX_EPIDEMIC_FEED_LIST
                    }), this.data.hasCheck && wx.setStorage({
                        key: "[cache]feiyan_app",
                        data: a
                    }), this.close();
                },
                toggleCheckbox() {
                    this.setData({
                        hasCheck: !this.data.hasCheck
                    });
                },
                clickClose() {
                    n.f.next({
                        eventId: p.j.CLICK,
                        action_type: p.a.CLICK_EPIDEMIC_ACTION_SHEET_CLOSE,
                        entry_scene: p.f.INDEX_EPIDEMIC_FEED_LIST
                    }), this.close();
                },
                close() {
                    const t = wx.createAnimation();
                    t.translateY(446).step({
                        timingFunction: "ease",
                        duration: 230
                    });
                    const e = t.export();
                    this.setData({
                        animationData: e
                    }), this.shouldTriggerEvent = !0;
                },
                transitionend() {
                    this.shouldTriggerEvent && this.triggerEvent("close");
                },
                noop() {}
            }
        });
    }
}, [ [ 72, 0, 1 ] ] ]);
//# sourceMappingURL=feiyan-app-action-sheet.js.map