require("./../../runtime"), require("./../../common"), (wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 21 ], {
    115: function(e, t, s) {
        "use strict";
        s.r(t);
        var i = s(8), a = s(2), r = s(6), n = s(7), o = s(15), c = s(0), p = s(20), l = s(21), d = s(18);
        Object(i.b)({
            data: {
                fetchStatus: "fetching",
                activeList: [],
                activeListIndex: 4,
                tabList: [],
                scrollTop: 0,
                searchEventId: c.e.CLICK_FRIENDS_USE_ALL_SEARCH,
                activeListRenderStatus: "",
                systemInfo: {
                    platform: "",
                    statusBarHeight: 66
                }
            },
            getSubscriptions: () => ({
                systemInfo: a.i.pipe(Object(o.a)(e => {
                    const t = e.statusBarHeight;
                    let s;
                    return s = "android" === e.platform ? 48 : 44, {
                        platform: e.platform,
                        statusBarHeight: t + s
                    };
                })),
                noRender: {
                    globalSessionId: a.c
                }
            }),
            onLoad(e) {
                this.intersectionObserveTime = Date.now(), this.intersectionObserverMap = {}, this.reportedExposure = {}, 
                r.d.next({
                    scene: c.h.FRIENDS_USE_ALL,
                    query: e
                }), this.getFriendsUseAllApps(), this.navigateToMiniProgram$ = Object(d.b)(), this.autoUnsubscribe(this.navigateToMiniProgram$).subscribe(e => {
                    e.fail ? console.log(`超时或失败：${JSON.stringify(e)}`) : r.d.next({
                        scene: c.h.MINI_APP
                    });
                }, e => {
                    console.log("friends-use-all 跳转小程序失败", e);
                });
            },
            getFriendsUseAllApps() {
                wx.nextTick(() => {
                    this.setData({
                        fetchStatus: "fetching"
                    });
                }), p.a.getFriendsUseAppList({
                    category_type: 1
                }).subscribe(e => {
                    this.intersectionObserveTime = Date.now(), this.res = e;
                    const t = {};
                    e.category_app_list && e.category_app_list.length > 0 ? (t.tabList = e.category_app_list.map(e => e.category), 
                    t.activeListIndex = 4, e.category_app_list[t.activeListIndex] && e.category_app_list[t.activeListIndex].weuse_app_list && (t.activeList = Object(l.a)(e.category_app_list[t.activeListIndex].weuse_app_list.slice(0, 8), t.activeListIndex)), 
                    t.fetchStatus = "success", wx.nextTick(() => {
                        this.setData(t, () => {
                            this.observerMiniAppInViewport(t.activeListIndex), n.c.next();
                        });
                    })) : 0 === this.data.activeList.length && this.setData({
                        fetchStatus: "fail"
                    });
                }, e => {
                    console.error("err", e);
                });
            },
            bindscrolltoupper() {
                "android" !== this.data.systemInfo.platform && this.selectComponent("#toggle-display-top").scrolltoupper();
            },
            bindscroll(e) {
                "android" !== this.data.systemInfo.platform && this.selectComponent("#toggle-display-top").scroll(e.detail.scrollTop);
            },
            renderList(e) {
                const t = this.res;
                t.category_app_list && t.category_app_list[e] && t.category_app_list[e].weuse_app_list && t.category_app_list[e].weuse_app_list.length > 0 ? this.setData({
                    activeList: Object(l.a)(t.category_app_list[e].weuse_app_list.slice(0, 8), e),
                    activeListIndex: e,
                    scrollTop: 2,
                    activeListRenderStatus: ""
                }, () => {
                    this.observerMiniAppInViewport(e), n.c.next();
                }) : this.setData({
                    activeList: [],
                    activeListIndex: e,
                    scrollTop: 0
                });
            },
            handleClickCateTab(e) {
                const {index: t} = e.currentTarget.dataset;
                this.renderList(t);
            },
            toSearch() {
                this.selectComponent("#search").toSearch();
            },
            handleClickItem(e) {
                const {index: t, listIndex: s} = e.currentTarget.dataset, i = this.res.category_app_list[s].weuse_app_list[t];
                if (i) {
                    const e = this.globalSessionId;
                    this.navigateToMiniProgram$.next({
                        appId: i.appid,
                        scene: 1145,
                        sceneNote: [ i.app_user_name, e, i.strategy_info ].join(";"),
                        preScene: 17,
                        preSceneNote: [ e ].join(";")
                    }), this.report({
                        listIndex: s,
                        cardIndex: t,
                        eventId: c.j.CLICK
                    }), n.a.next();
                }
            },
            handleLongpress(e) {},
            bindscrolltolower() {
                const e = this.data.activeListIndex, t = this.res.category_app_list[e].weuse_app_list, s = this.data.activeList.length, i = Math.min(s + 8, t.length);
                s !== t.length ? this.setData({
                    activeList: Object(l.a)(t.slice(0, i), e)
                }, () => {
                    this.observerMiniAppInViewport(e), n.c.next();
                }) : this.setData({
                    activeListRenderStatus: "exhausted"
                });
            },
            observerMiniAppInViewport(e) {
                for (let e in this.intersectionObserverMap) this.intersectionObserverMap[e].disconnect(), 
                delete this.intersectionObserverMap[e];
                this.data.activeList.forEach((t, s) => {
                    const {formatedAppId: i} = t;
                    this.intersectionObserverMap[`#${i}`] = this.createIntersectionObserver(), this.intersectionObserverMap[`#${i}`].relativeToViewport({
                        top: -this.data.systemInfo.statusBarHeight
                    }).observe(`#${i}`, t => {
                        t.intersectionRatio > 0 && this.reportExposure({
                            eventId: c.j.EXPOSURE,
                            cardIndex: s,
                            intersectionObserveTime: this.intersectionObserveTime,
                            listIndex: e,
                            formatedAppId: i
                        });
                    });
                });
            },
            reportExposure(e) {
                const t = `${e.intersectionObserveTime}-${e.eventId}-${e.cardIndex}-${e.listIndex}-${e.formatedAppId}`;
                this.reportedExposure[t] || (this.reportedExposure[t] = !0, this.report(e));
            },
            report(e) {
                const {listIndex: t, cardIndex: s, eventId: i} = e, a = this.res.category_app_list[t], r = a.weuse_app_list[s], o = a.category.category_name, {recommend_id: p, app_user_name: l, content_desc: d, pass_str: h} = r, _ = {
                    session_id: this.res.session_id,
                    client_session_id: this.globalSessionId,
                    entry_scene: c.f.FRIENDS_USE_ALL,
                    event_id: i || c.j.EXPOSURE,
                    event_type: c.g.ACCOUNT,
                    event_pos: s,
                    event_happen_before_seconds: Date.now(),
                    username: l,
                    content_title: d,
                    recommend_id: p,
                    pass_str: h,
                    tab_name: o
                };
                n.b.next(_);
            },
            onPageScroll() {
                n.c.next();
            },
            onUnload() {
                n.a.next();
                for (let e in this.intersectionObserverMap) this.intersectionObserverMap[e].disconnect();
            }
        });
    }
}, [ [ 115, 0, 1 ] ] ]);
//# sourceMappingURL=friends-use-all.js.map