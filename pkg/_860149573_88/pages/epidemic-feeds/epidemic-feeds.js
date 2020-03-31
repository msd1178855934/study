require("./../../runtime"), require("./../../common"), (wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 20 ], {
    74: function(e, t, i) {
        "use strict";
        i.r(t);
        var r = i(8), s = i(9), n = i(7), o = i(0), c = i(24), a = i(2), d = i(15);
        Object(r.b)({
            data: {
                showAll: [],
                renderList: []
            },
            onLoad() {
                this.initEpidemicFeeds(), this.intersectionObserverMap = {}, this.intersectionObserveTime = Date.now(), 
                this.renderedCount = 0;
            },
            onShow() {
                this.resumeCardInViewTimeRecord();
            },
            getSubscriptions: () => ({
                noRender: {
                    systemInfo: a.i.pipe(Object(d.a)(e => {
                        const t = e.statusBarHeight;
                        let i;
                        return i = "android" === e.platform ? 48 : 44, {
                            platform: e.platform,
                            statusBarHeight: t + i
                        };
                    }))
                }
            }),
            initEpidemicFeeds() {
                const e = Object(s.c)().group_feeds_list.find(e => "virus" === e.group_name);
                if (e) {
                    const t = this.epidemicFeeds = e.weuse_feeds_list, i = [];
                    t.forEach(e => {
                        i.push(this.renderCardFilter(e));
                    }), this.setData({
                        renderList: i
                    }, () => {
                        this.observerMiniAppInViewport(), n.c.next(0);
                    });
                }
            },
            renderCardFilter: e => ({
                recommend_id: e.recommend_id,
                content_desc: e.content_desc,
                app_nick_name: e.app_nick_name,
                content_image: e.content_image
            }),
            clickItem(e) {
                const {index: t} = e.currentTarget.dataset, i = this.epidemicFeeds[t];
                i && (s.a.next({
                    hotListItem: i
                }), s.f.next({
                    hotListItem: i,
                    eventId: o.j.CLICK,
                    cardIndex: t,
                    action_type: o.a.CLICK_CRAWLER,
                    entry_scene: o.f.EPIDEMIC_FEED_LIST_PAGE
                }), n.a.next());
            },
            observerMiniAppInViewport() {
                this.cardTimer$List = [], this.epidemicFeeds.forEach((e, t) => {
                    const i = `#hotlist${t}`;
                    if (this.intersectionObserverMap[i]) return;
                    const r = Object(c.a)();
                    r.on("end").subscribe(i => {
                        i.duration > 0 && s.f.next({
                            hotListItem: e,
                            cardIndex: t,
                            entry_scene: o.f.EPIDEMIC_FEED_LIST_PAGE,
                            action_type: o.a.CARD_STAY_TIME,
                            card_stay_time: i.duration
                        });
                    }), this.cardTimer$List[t] = r;
                    const n = this.intersectionObserveTime;
                    this.intersectionObserverMap[i] || (this.intersectionObserverMap[i] = this.createIntersectionObserver(), 
                    this.intersectionObserverMap[i].relativeToViewport({
                        top: -this.systemInfo.statusBarHeight - 46,
                        bottom: -46
                    }).observe(i, c => {
                        c.intersectionRatio > 0 ? (s.e.next({
                            hotListItem: e,
                            cardIndex: t,
                            eventId: o.j.EXPOSURE,
                            entry_scene: o.f.EPIDEMIC_FEED_LIST_PAGE,
                            formatedRecommendId: i,
                            intersectionObserveTime: n
                        }), r.next("resume"), e.isInView = !0) : (r.next("pause"), e.isInView = !1);
                    }));
                });
            },
            resumeCardInViewTimeRecord() {
                this.epidemicFeeds.forEach((e, t) => {
                    e.isInView && this.cardTimer$List && this.cardTimer$List[t] && this.cardTimer$List[t].next("resume");
                });
            },
            reportCardsStayingRecord() {
                this.epidemicFeeds.forEach((e, t) => {
                    this.cardTimer$List && this.cardTimer$List[t] && this.cardTimer$List[t].next("end");
                });
            },
            handleLongPress(e) {},
            onUnload() {
                for (let e in this.intersectionObserverMap) this.intersectionObserverMap[e].disconnect(), 
                delete this.intersectionObserverMap[e];
                this.reportCardsStayingRecord(), n.a.next();
            },
            onPageScroll() {
                n.c.next();
            },
            onHide() {
                this.reportCardsStayingRecord(), n.a.next();
            }
        });
    }
}, [ [ 74, 0, 1 ] ] ]);
//# sourceMappingURL=epidemic-feeds.js.map