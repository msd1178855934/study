require("./../../runtime"), require("./../../common"), (wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 26 ], {
    112: function(e, t, s) {
        "use strict";
        s.r(t);
        var o = s(2), n = s(7), i = s(16), a = s(6), r = (s(59), s(0));
        o.a.subscribe(e => {
            e && "back" === e.mode ? (i.b.next({
                eventId: r.e.EIXT
            }), a.a.next(!1)) : a.a.next(!0), n.a.next();
        });
        var c = s(8), d = s(24);
        Object(c.b)({
            data: {
                searchEventId: r.e.CLICK_INDEX_SEARCH,
                showMoreMenuRedDot: !1,
                showOrderEntrance: !1,
                platform: ""
            },
            getSubscriptions: () => ({
                noRender: {
                    indexPageBackFromOtherPage: a.a
                },
                platform: o.g
            }),
            onLoad() {
                this.initIndexPageStayTime();
            },
            onShow() {
                if (!this.indexPageBackFromOtherPage) {
                    a.d.next({
                        scene: r.h.ENTRY
                    }), this.selectComponent("#feed-list").fetchFeedsList(), this.selectComponent("#related-app-list-card").fetchCommonUseAppListInfo();
                    const e = getApp(), t = e.showOrderEntrance;
                    this.redDotTypeList = e.redDotTypeList;
                    const s = {};
                    t && (s.showOrderEntrance = !0, this.redDotTypeList.includes(1) ? s.showMoreMenuRedDot = !0 : s.showMoreMenuRedDot = !1, 
                    this.setData(s));
                }
                this.selectComponent("#feed-list").resumeCardInViewTimeRecord(), this.hasScroll && this.indexPageStayTime$.next("resume");
            },
            handleRetry() {
                this.selectComponent("#feed-list").fetchFeedsList(), this.selectComponent("#related-app-list-card").fetchCommonUseAppListInfo();
            },
            onPageScroll() {
                this.hasScroll || (this.hasScroll = !0, this.indexPageStayTime$.next("start")), 
                n.c.next();
            },
            onHide() {
                n.a.next(), a.a.next(!0), a.d.next({
                    scene: r.h.EIXT
                }), this.selectComponent("#feed-list").reportVideoStayingRecord(), this.selectComponent("#feed-list").reportCardsStayingRecord(), 
                this.indexPageStayTime$.next("end");
            },
            onUnload() {
                a.a.next(!1);
            },
            toggleDebug() {
                wx.showActionSheet({
                    itemList: [ "打开调试", "关闭调试" ],
                    success: e => {
                        wx.setEnableDebug({
                            enableDebug: 0 === e.tapIndex
                        });
                    }
                });
            },
            toSearch() {
                this.selectComponent("#search").toSearch();
            },
            initIndexPageStayTime() {
                this.indexPageStayTime$ = Object(d.a)(), this.indexPageStayTime$.on("end").subscribe(e => {
                    if (e && e.duration > 0) {
                        const t = this.selectComponent("#feed-list");
                        t && t.reportMiniAppFromFeedsList$.next({
                            action_type: r.a.FEED_STAY_TIME,
                            entry_scene: r.f.TIMELINE_FEEDS_LIST,
                            duration_time: e.duration
                        });
                    }
                }), this.hasScroll = !1;
            },
            onReachBottom() {
                this.selectComponent("#feed-list").loadMoreFeed();
            },
            clickMoreMenu() {
                const e = this.redDotTypeList, t = [];
                this.data.showMoreMenuRedDot && t.push({
                    index: 0,
                    type: 1
                }), console.log("newTipsList", t), i.b.next({
                    eventId: r.e.NAVIGATION_BAR_MENU
                }), wx.showActionSheet({
                    itemList: [ "小程序订单" ],
                    newTipsList: t,
                    success: t => {
                        0 == t.tapIndex && (i.b.next({
                            eventId: r.e.TRANSACTION_GUARANTEE
                        }), wx.navigateToMiniProgramDirectly({
                            appId: "wx1183b055aeec94d1"
                        }), e.includes(1) && (this.setData({
                            showMoreMenuRedDot: !1
                        }), wx.opNativeRedDot && wx.opNativeRedDot({
                            op: "clear",
                            redDotType: 1,
                            success(e) {
                                console.log("通知客户端消除红点成功", e);
                            },
                            fail(e) {
                                console.error("消除红点失败", e);
                            }
                        })));
                    },
                    fail: e => {
                        console.log(e.errMsg);
                    }
                });
            }
        });
    }
}, [ [ 112, 0, 1 ] ] ]);
//# sourceMappingURL=index.js.map