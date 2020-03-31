require("./../../runtime"), require("./../../common"), (wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 24 ], {
    75: function(t, e, s) {
        "use strict";
        s.r(e);
        var i = s(3), r = s(0), a = s(8), p = s(15), n = s(21);
        Object(a.b)({
            data: {
                friendsUseAppList: [ [], [], [], [], [] ],
                friendsUseAppListFetchStatus: [ "fetching", "fetching", "fetching", "fetching", "fetching" ],
                friendsUseAppListRenderStatus: [ "", "", "", "", "" ],
                systemInfo: {
                    platform: "",
                    statusBarHeight: 66
                },
                swiperCurrentIndex: 0,
                tabList: [],
                category_total: 5,
                swiperLength: 4,
                searchEventId: r.e.CLICK_FRIENDS_USE_SEARCH,
                category_group_app_list: [],
                showepidemicEntrance: !1
            },
            getSubscriptions: () => ({
                systemInfo: i.k.pipe(Object(p.a)(t => {
                    let e, s = t.statusBarHeight > 0 ? t.statusBarHeight : 28;
                    return e = "android" === t.platform ? 48 : 44, {
                        platform: t.platform,
                        statusBarHeight: s + e
                    };
                })),
                swiperCurrentIndex: i.a
            }),
            onLoad(t) {
                this.intersectionObserveTime = Date.now(), i.e.next({
                    scene: r.h.FRIENDS_USE,
                    query: t
                }), this.intersectionObserverMap = [ {}, {}, {}, {}, {} ], this.fetchFriendsUseAppList(0), 
                this.renderTabAndFirstList();
            },
            onPageScroll() {
                i.j.next();
            },
            fetchFriendsUseAppList(t) {
                0 === t ? this.setData({
                    [`friendsUseAppListFetchStatus[${t}]`]: "fetching"
                }) : 0 === this.data.friendsUseAppList[t].length && this.setData({
                    [`friendsUseAppListFetchStatus[${t}]`]: "fetching"
                }), i.b.next();
            },
            handleClickRetry(t) {
                const {listIndex: e} = t.currentTarget.dataset;
                this.fetchFriendsUseAppList(e);
            },
            renderTabAndFirstList() {
                this.autoUnsubscribe(i.f).subscribe(t => {
                    if (t.virus_module_app_list && this.setData({
                        showepidemicEntrance: !0
                    }), this.intersectionObserveTime = Date.now(), this.res = t, this.indexAppList = [], 
                    t.category_group_app_list && t.category_group_app_list.forEach(t => {
                        t.group_list && t.group_list.forEach((e, s) => {
                            if (e.card_list) {
                                const i = [];
                                e.card_list.every(e => {
                                    const r = this.indexAppList.some(t => e.appid === t.appid);
                                    return 3 !== i.filter(t => !t.hidden).length && (r ? (i.push(Object.assign(e, {
                                        hidden: !0
                                    })), !0) : (i.push(e), s !== t.group_list.length - 1 && this.indexAppList.push(e), 
                                    !0));
                                }), e._card_list = Object(n.a)(i, 0);
                            }
                        });
                    }), t.category_group_app_list && t.category_group_app_list[0] && t.category_group_app_list[0].group_list && t.category_group_app_list[0].group_list.length > 0) {
                        let e = t.category_group_app_list.map(t => t.category);
                        t.category_app_list && (e = e.concat(t.category_app_list.map(t => t.category).slice(1))), 
                        wx.nextTick(() => {
                            this.setData({
                                category_total: t.category_total,
                                tabList: e,
                                swiperLength: t.category_total > 5 ? 4 : t.category_total,
                                category_group_app_list: t.category_group_app_list,
                                "friendsUseAppListFetchStatus[0]": "success"
                            }, () => {
                                this.observerMiniAppInViewport(0), i.j.next();
                            });
                        });
                    } else this.setData({
                        category_group_app_list: t.category_group_app_list,
                        "friendsUseAppListFetchStatus[0]": "empty",
                        swiperLength: 1
                    });
                });
            },
            renderList(t) {
                const e = this.res;
                e.category_app_list && e.category_app_list[t] && e.category_app_list[t].weuse_app_list && e.category_app_list[t].weuse_app_list.length > 0 ? this.setData({
                    [`friendsUseAppList[${t}]`]: Object(n.a)(e.category_app_list[t].weuse_app_list.slice(0, 8), t),
                    [`friendsUseAppListFetchStatus[${t}]`]: "success"
                }, () => {
                    this.observerMiniAppInViewport(t), i.j.next();
                }) : this.setData({
                    [`friendsUseAppList[${t}]`]: [],
                    [`friendsUseAppListFetchStatus[${t}]`]: "empty"
                });
            },
            handleClickItem(t) {
                const {index: e, listIndex: s, groupIndex: a} = t.currentTarget.dataset;
                i.d.next({
                    index: e,
                    listIndex: s,
                    groupIndex: a
                }), i.i.next({
                    eventId: r.j.CLICK,
                    cardIndex: e,
                    listIndex: s,
                    groupIndex: a
                }), i.c.next();
            },
            observerMiniAppInViewport(t) {
                for (let e in this.intersectionObserverMap[t]) this.intersectionObserverMap[t][e].disconnect(), 
                delete this.intersectionObserverMap[t][e];
                let e;
                if (0 === t) {
                    e = (this.data.category_group_app_list[0].group_list || []).map(t => t._card_list);
                } else e = this.data.friendsUseAppList[t];
                e.forEach((e, s) => {
                    let i;
                    Array.isArray(e) ? (i = s, e.forEach((e, s) => {
                        this.intersection(e, t, s, i);
                    })) : this.intersection(e, t, s);
                });
            },
            intersection(t, e, s, a) {
                const {formatedAppId: p} = t;
                this.intersectionObserverMap[e][`#${p}`] || (this.intersectionObserverMap[e][`#${p}`] = this.createIntersectionObserver(), 
                this.intersectionObserverMap[e][`#${p}`].relativeToViewport({
                    top: -this.data.systemInfo.statusBarHeight
                }).observe(`#${p}`, t => {
                    t.intersectionRatio > 0 && i.g.next({
                        eventId: r.j.EXPOSURE,
                        cardIndex: s,
                        intersectionObserveTime: this.intersectionObserveTime,
                        listIndex: e,
                        formatedAppId: p,
                        groupIndex: a
                    });
                }));
            },
            onUnload() {
                i.c.next(), i.l.next(0), this.intersectionObserverMap.forEach(t => {
                    for (let e in t) t[e].disconnect();
                });
            },
            handleSlideEnd(t) {
                const {current: e} = t.detail;
                i.l.next(e);
            },
            handleSlideAnimationEnd(t) {
                const {current: e} = t.detail;
                e > 0 && 0 === this.data.friendsUseAppList[e].length && this.renderList(e);
            },
            bindscroll(t) {
                "android" !== this.data.systemInfo.platform && this.selectComponent("#toggle-display-top").scroll(t.detail.scrollTop);
            },
            bindscrolltoupper() {
                "android" !== this.data.systemInfo.platform && this.selectComponent("#toggle-display-top").scrolltoupper();
            },
            toSearch() {
                this.selectComponent("#search").toSearch();
            },
            handleLongpress(t) {},
            bindscrolltolower(t) {
                const {listIndex: e} = t.currentTarget.dataset;
                if (0 === e && this.res && this.res.category_group_app_list) {
                    const t = this.res.category_group_app_list[0].group_list, e = t.length - 1, s = t[e].card_list, r = this.data.category_group_app_list[0].group_list[e], a = r._card_list.length, p = Math.min(a + 8, s.length);
                    if (a === s.length) return void this.setData({
                        "friendsUseAppListRenderStatus[0]": "exhausted"
                    });
                    const o = [];
                    r.card_list.every(t => {
                        const e = this.indexAppList.some(e => t.appid === e.appid);
                        return o.filter(t => !t.hidden).length !== p && (e ? (o.push(Object.assign(t, {
                            hidden: !0
                        })), !0) : (o.push(t), !0));
                    }), r._card_list = Object(n.a)(o, 0), this.setData({
                        category_group_app_list: this.data.category_group_app_list
                    }, () => {
                        this.observerMiniAppInViewport(0), i.j.next();
                    });
                } else if (this.res && this.res.category_app_list) {
                    const t = this.res.category_app_list[e].weuse_app_list, s = this.data.friendsUseAppList[e].length, r = Math.min(s + 8, t.length);
                    if (s === r) return void this.setData({
                        [`friendsUseAppListRenderStatus[${e}]`]: "exhausted"
                    });
                    this.setData({
                        [`friendsUseAppList[${e}]`]: Object(n.a)(t.slice(0, r), e)
                    }, () => {
                        this.observerMiniAppInViewport(e), i.j.next();
                    });
                }
            },
            catchTouchMove: () => !1,
            handleClickGroupFooter(t) {
                const {groupListIndex: e, groupName: s} = t.currentTarget.dataset;
                wx.navigateTo({
                    url: `../friends-use-group/friends-use-group?group=${e}`
                }), i.h.next({
                    eventId: r.e.CLICK_FRIENDS_USE_TOPIC,
                    params: s
                });
            }
        });
    }
}, [ [ 75, 0, 1 ] ] ]);
//# sourceMappingURL=friends-use.js.map