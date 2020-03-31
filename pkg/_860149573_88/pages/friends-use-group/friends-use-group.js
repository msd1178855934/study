require("./../../runtime"), require("./../../common"), (wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 23 ], {
    81: function(e, t, i) {
        "use strict";
        i.r(t);
        var s = i(8), r = i(3), n = i(21), o = i(15), p = i(0);
        Object(s.b)({
            getSubscriptions: () => ({
                systemInfo: r.k.pipe(Object(o.a)(e => {
                    const t = e.statusBarHeight;
                    let i;
                    return i = "android" === e.platform ? 48 : 44, {
                        platform: e.platform,
                        statusBarHeight: t + i
                    };
                })),
                noRender: {
                    rawFriendsUseAppList: r.f
                }
            }),
            data: {
                group_name: "",
                card_list: [],
                systemInfo: {
                    platform: "",
                    statusBarHeight: 66
                },
                friendsUseAppListRenderStatus: ""
            },
            onLoad(e) {
                const t = e && e.group, i = e && e.modulename, s = e && e.anchor;
                this.anchor = s, this.modulename = i, this.forEpidemic = "virus_module_app_list" === this.modulename, 
                this.intersectionObserverMap = {}, this.intersectionObserveTime = Date.now(), r.e.next({
                    scene: p.h.FRIENDS_USE,
                    query: e
                }), t && (this.group = t, this.renderInit());
            },
            renderInit() {
                const e = this.rawFriendsUseAppList;
                let t;
                t = this.forEpidemic && e.virus_module_app_list ? e.virus_module_app_list.group_app_list[+this.group] : e.category_group_app_list[0].group_list[+this.group], 
                this.setData({
                    group_name: t.group_info.group_name,
                    card_list: Object(n.a)(t.card_list.slice(0, 10), 0)
                }, () => {
                    this.observerMiniAppInViewport(), r.j.next();
                });
            },
            observerMiniAppInViewport() {
                for (let e in this.intersectionObserverMap) this.intersectionObserverMap[e].disconnect(), 
                delete this.intersectionObserverMap[e];
                this.data.card_list.forEach((e, t) => {
                    this.intersection(e, 0, t, +this.group);
                });
            },
            intersection(e, t, i, s) {
                const {formatedAppId: n} = e;
                this.intersectionObserverMap[`#${n}`] || (this.intersectionObserverMap[`#${n}`] = this.createIntersectionObserver(), 
                this.intersectionObserverMap[`#${n}`].relativeToViewport({
                    top: -this.data.systemInfo.statusBarHeight
                }).observe(`#${n}`, e => {
                    e.intersectionRatio > 0 && r.g.next({
                        eventId: p.j.EXPOSURE,
                        cardIndex: i,
                        intersectionObserveTime: this.intersectionObserveTime,
                        listIndex: t,
                        formatedAppId: n,
                        groupIndex: s,
                        entry_scene: this.forEpidemic ? p.f.EPIDEMIC_APP_LIST_GROUP : p.f.FRIENDS_USE_GROUP,
                        forEpidemic: this.forEpidemic
                    });
                }));
            },
            handleClickItem(e) {
                const {index: t} = e.currentTarget.dataset, i = [ "epidemicPreScene=" + (void 0 !== this.anchor ? "1" : "2"), "epidemicScene=2" ];
                r.d.next({
                    index: t,
                    listIndex: 0,
                    groupIndex: +this.group,
                    forEpidemic: this.forEpidemic,
                    extraSceneNote: i
                }), r.i.next({
                    eventId: p.j.CLICK,
                    cardIndex: t,
                    listIndex: 0,
                    groupIndex: +this.group,
                    entry_scene: this.forEpidemic ? p.f.EPIDEMIC_APP_LIST_GROUP : p.f.FRIENDS_USE_GROUP,
                    forEpidemic: this.forEpidemic
                }), r.c.next();
            },
            handleLongpress(e) {},
            onReachBottom() {
                const e = this.rawFriendsUseAppList;
                let t;
                if (this.forEpidemic && e.virus_module_app_list) t = e.virus_module_app_list.group_app_list[+this.group]; else {
                    if (!e.category_group_app_list) return;
                    t = e.category_group_app_list[0].group_list[+this.group];
                }
                const i = t.card_list, s = this.data.card_list.length, o = Math.min(s + 8, i.length);
                s !== o ? this.setData({
                    card_list: Object(n.a)(i.slice(0, o), 0)
                }, () => {
                    this.observerMiniAppInViewport(), r.j.next();
                }) : this.setData({
                    friendsUseAppListRenderStatus: "exhausted"
                });
            },
            onUnload() {
                r.c.next();
                for (let e in this.intersectionObserverMap) this.intersectionObserverMap[e].disconnect();
            },
            onPageScroll() {
                r.j.next();
            }
        });
    }
}, [ [ 81, 0, 1 ] ] ]);
//# sourceMappingURL=friends-use-group.js.map