require("./../../runtime"), require("./../../common"), (wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 25 ], {
    80: function(e, t, s) {
        "use strict";
        s.r(t);
        var i = s(8), r = s(9), n = s(6), o = s(7), a = s(0), c = s(24), h = s(2), d = s(15);
        Object(i.b)({
            data: {
                showAll: [],
                renderList: []
            },
            onLoad() {
                this.initHostList(), this.intersectionObserverMap = {}, this.intersectionObserveTime = Date.now(), 
                this.renderedCount = 0;
            },
            onShow() {
                this.resumeCardInViewTimeRecord();
            },
            getSubscriptions: () => ({
                noRender: {
                    systemInfo: h.i.pipe(Object(d.a)(e => {
                        const t = e.statusBarHeight;
                        let s;
                        return s = "android" === e.platform ? 48 : 44, {
                            platform: e.platform,
                            statusBarHeight: t + s
                        };
                    }))
                }
            }),
            initHostList() {
                const e = Object(r.c)(), t = this.weuse_hot_list = e.weuse_hot_list, s = this.list = [], i = [], n = [], a = [];
                t.forEach(e => {
                    const t = n.indexOf(e.appid);
                    -1 === t ? (s.push([ e ]), i.push([ this.renderCardFilter(e) ]), a.push(!1), n.push(e.appid)) : (s[t].push(e), 
                    i[t].push(this.renderCardFilter(e)));
                }), this.setData({
                    showAll: a,
                    renderList: i
                }, () => {
                    this.observerMiniAppInViewport(), this.observerShowMoreInViewport(), o.c.next(0);
                });
            },
            renderCardFilter: e => ({
                appid: e.appid,
                content_desc: e.content_desc,
                app_nick_name: e.app_nick_name,
                content_image: e.content_image,
                app_icon_url: e.app_icon_url
            }),
            showMore(e) {
                const t = e.currentTarget.dataset.panelIndex, s = this.list[t][0];
                this.setData({
                    [`showAll[${t}]`]: !0
                }, () => {
                    this.observerMiniAppInViewport(), o.c.next(0);
                }), r.f.next({
                    eventId: a.j.CLICK,
                    action_type: a.a.SHOW_ALL,
                    entry_scene: a.f.HOT_LIST_PAGE,
                    cardIndex: t,
                    hotListItem: s
                });
            },
            toProfile(e) {
                const {panelIndex: t} = e.currentTarget.dataset, s = this.list[t][0];
                wx.openMiniProgramProfile({
                    username: s.app_user_name,
                    scene: 7,
                    success() {
                        n.d.next({
                            scene: a.h.MINI_APP_PROFILE
                        });
                    }
                }), r.f.next({
                    hotListItem: s,
                    eventId: a.j.CLICK,
                    cardIndex: t,
                    event_type: a.g.ACCOUNT,
                    action_type: a.a.CLICK_PROFILE_LINK,
                    entry_scene: a.f.HOT_LIST_PAGE
                }), o.a.next();
            },
            clickItem(e) {
                const {panelIndex: t, index: s} = e.currentTarget.dataset, i = this.list[t][s];
                i && (r.a.next({
                    hotListItem: i
                }), r.f.next({
                    hotListItem: i,
                    eventId: a.j.CLICK,
                    cardIndex: 1e4 * t + s,
                    action_type: a.a.CLICK_CRAWLER,
                    entry_scene: a.f.HOT_LIST_PAGE
                }), o.a.next());
            },
            observerMiniAppInViewport() {
                this.cardTimer$List = [], this.list.forEach((e, t) => {
                    e.forEach((e, s) => {
                        const i = `#hotlist${t}s${s}`;
                        if (this.intersectionObserverMap[i]) return;
                        if (!this.data.showAll[t] && s >= 3) return;
                        const n = this.renderedCount;
                        this.renderedCount++;
                        const h = Object(c.a)();
                        h.on("end").subscribe(t => {
                            t.duration > 0 && r.f.next({
                                hotListItem: e,
                                cardIndex: n,
                                entry_scene: a.f.HOT_LIST_PAGE,
                                action_type: a.a.CARD_STAY_TIME,
                                card_stay_time: t.duration
                            });
                        }), this.cardTimer$List[n] = h;
                        const d = this.intersectionObserveTime;
                        this.intersectionObserverMap[i] || (this.intersectionObserverMap[i] = this.createIntersectionObserver(), 
                        this.intersectionObserverMap[i].relativeToViewport({
                            top: -this.systemInfo.statusBarHeight - 46,
                            bottom: -46
                        }).observe(i, t => {
                            t.intersectionRatio > 0 ? (r.e.next({
                                hotListItem: e,
                                cardIndex: n,
                                eventId: a.j.EXPOSURE,
                                entry_scene: a.f.HOT_LIST_PAGE,
                                formatedRecommendId: i,
                                intersectionObserveTime: d
                            }), h.next("resume"), e.isInView = !0, n === this.weuse_hot_list.length - 3 && o.d.next()) : (h.next("pause"), 
                            e.isInView = !1);
                        }));
                    });
                });
            },
            resumeCardInViewTimeRecord() {
                let e = 0;
                this.list.forEach(t => {
                    t.forEach(t => {
                        t.isInView && this.cardTimer$List && this.cardTimer$List[e] && this.cardTimer$List[e].next("resume"), 
                        e++;
                    });
                });
            },
            reportCardsStayingRecord() {
                let e = 0;
                this.list.forEach(t => {
                    t.forEach(t => {
                        this.cardTimer$List && this.cardTimer$List[e] && this.cardTimer$List[e].next("end"), 
                        e++;
                    });
                });
            },
            handleLongPress(e) {},
            onUnload() {
                for (let e in this.intersectionObserverMap) this.intersectionObserverMap[e].disconnect(), 
                delete this.intersectionObserverMap[e];
                for (let e in this.showMoreObserveMap) this.showMoreObserveMap[e].disconnect(), 
                delete this.showMoreObserveMap[e];
                this.reportCardsStayingRecord(), o.a.next();
            },
            onPageScroll() {
                o.c.next();
            },
            onHide() {
                this.reportCardsStayingRecord(), o.a.next();
            },
            observerShowMoreInViewport() {
                if (this.showMoreObserveMap) for (let e in this.showMoreObserveMap) this.showMoreObserveMap[e].disconnect(), 
                delete this.showMoreObserveMap[e];
                this.showMoreObserveMap = {}, this.list.forEach((e, t) => {
                    const s = this.intersectionObserveTime;
                    this.showMoreObserveMap[t] = this.createIntersectionObserver(), this.showMoreObserveMap[t].relativeToViewport({
                        top: -this.systemInfo.statusBarHeight,
                        bottom: 0
                    }).observe(`#showmore${t}`, i => {
                        i.intersectionRatio > 0 && r.e.next({
                            hotListItem: e[0],
                            cardIndex: t,
                            action_type: a.a.SHOW_ALL,
                            entry_scene: a.f.HOT_LIST_PAGE,
                            eventId: a.j.EXPOSURE,
                            intersectionObserveTime: s,
                            formatedRecommendId: `#showmore${t}`
                        });
                    });
                });
            }
        });
    }
}, [ [ 80, 0, 1 ] ] ]);
//# sourceMappingURL=hot-list.js.map