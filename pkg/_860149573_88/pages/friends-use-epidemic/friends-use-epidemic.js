require("./../../runtime"), require("./../../common"), (wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 22 ], {
    79: function(e, t, i) {
        "use strict";
        i.r(t);
        var r = i(3), s = i(21), n = i(0), o = i(8), a = i(15);
        Object(o.b)({
            data: {
                group_app_list_render: [],
                systemInfo: {
                    platform: "",
                    statusBarHeight: 66
                },
                activeGroupId: "",
                navScrollLeft: 0,
                scrollWithAnimation: !1
            },
            getSubscriptions: () => ({
                systemInfo: r.k.pipe(Object(a.a)(e => {
                    let t, i = e.statusBarHeight > 0 ? e.statusBarHeight : 28;
                    return t = "android" === e.platform ? 48 : 44, {
                        platform: e.platform,
                        statusBarHeight: i + t,
                        windowWidth: e.windowWidth,
                        windowHeight: e.windowHeight
                    };
                })),
                noRender: {
                    rawFriendsUseAppList: r.f
                }
            }),
            onLoad(e) {
                this.anchor = e.anchor, this.rawFriendsUseAppList ? this.renderInit() : (this.autoUnsubscribe(r.f).subscribe(e => {
                    e.virus_module_app_list && this.renderInit();
                }), r.b.next()), this.intersectionObserverMap = {}, this.intersectionObserveTime = Date.now();
            },
            renderInit() {
                const e = this.rawFriendsUseAppList;
                if (e.virus_module_app_list) {
                    const t = (e.virus_module_app_list.group_app_list || []).slice(0).map(e => (e.card_list && e.card_list.length > 0 && (e._card_list = Object(s.a)(e.card_list.slice(0, 3))), 
                    e));
                    console.log("group_app_list_render", t), this.setData({
                        group_app_list_render: t
                    }, () => {
                        if (this.observerMiniAppInViewport(), this.anchor) {
                            this.scrollToAnchor(), this.setActiveTab(this.anchor);
                            const e = t.findIndex(e => e.group_info.group_id === this.anchor) || 0;
                            this.scrollToTab(e, !1);
                        } else {
                            this.scrollToTab(0, !1);
                            const e = t[0].group_info.group_id;
                            this.setActiveTab(e);
                        }
                        r.j.next();
                    });
                }
            },
            scrollToAnchor() {
                wx.pageScrollTo({
                    selector: "#" + this.anchor,
                    duration: 0
                });
            },
            handleClickGroupFooter(e) {
                const {groupListIndex: t, groupName: i} = e.currentTarget.dataset;
                wx.navigateTo({
                    url: `../friends-use-group/friends-use-group?group=${t}&modulename=virus_module_app_list&${this.anchor ? "anchor=" + this.anchor : ""}`
                }), r.h.next({
                    eventId: n.e.CLICK_FRIENDS_USE_TOPIC,
                    params: i
                });
            },
            handleClickItem(e) {
                const {index: t, groupIndex: i} = e.currentTarget.dataset, s = [ "epidemicPreScene=" + (void 0 !== this.anchor ? "1" : "2"), "epidemicScene=1" ];
                r.d.next({
                    index: t,
                    groupIndex: i,
                    forEpidemic: !0,
                    extraSceneNote: s
                }), r.i.next({
                    eventId: n.j.CLICK,
                    cardIndex: t,
                    listIndex: 0,
                    groupIndex: i,
                    forEpidemic: !0,
                    entry_scene: n.f.EPIDEMIC_APP_LIST
                }), r.c.next();
            },
            handleLongpress(e) {},
            observerMiniAppInViewport() {
                for (let e in this.intersectionObserverMap) this.intersectionObserverMap[e].disconnect(), 
                delete this.intersectionObserverMap[e];
                this.data.group_app_list_render.forEach((e, t) => {
                    e._card_list && e._card_list.forEach((e, i) => {
                        this.intersection(e, i, t);
                    }), this.intersectionGroupName(e);
                });
            },
            intersection(e, t, i) {
                const {appid: s} = e;
                this.intersectionObserverMap[`#${s}`] || (this.intersectionObserverMap[`#${s}`] = this.createIntersectionObserver(), 
                this.intersectionObserverMap[`#${s}`].relativeToViewport({
                    top: -this.data.systemInfo.statusBarHeight - 44
                }).observe(`#${s}`, e => {
                    e.intersectionRatio > 0 && r.g.next({
                        eventId: n.j.EXPOSURE,
                        cardIndex: t,
                        intersectionObserveTime: this.intersectionObserveTime,
                        formatedAppId: s,
                        groupIndex: i,
                        forEpidemic: !0,
                        entry_scene: n.f.EPIDEMIC_APP_LIST
                    });
                }));
            },
            intersectionGroupName(e) {
                e.isGroupNameInView = !1;
                const t = this.data.systemInfo, i = `#group_name_${e.group_info.group_id}`;
                this.intersectionObserverMap[i] = this.createIntersectionObserver(), this.intersectionObserverMap[i].relativeToViewport({
                    top: -t.statusBarHeight - 44 - 8,
                    bottom: -(t.windowHeight - (t.statusBarHeight + 44 + 8 + 1))
                }).observe(i, t => {
                    t.intersectionRatio > 0 ? e.isGroupNameInView = !0 : e.isGroupNameInView = !1, this.switchTab();
                });
            },
            onPageScroll() {
                r.j.next();
            },
            onUnload() {
                r.c.next();
                for (let e in this.intersectionObserverMap) this.intersectionObserverMap[e].disconnect();
            },
            tapAnchorTab(e) {
                const {groupId: t, index: i} = e.currentTarget.dataset, s = this.data.group_app_list_render[i];
                this.setActiveTab(t), this.anchor = t, this.scrollToAnchor(), this.scrollToTab(i, !0), 
                r.h.next({
                    eventId: n.e.CLICK_EPIDEMIC_TAB,
                    params: s.group_info.group_name
                });
            },
            setActiveTab(e) {
                this.setData({
                    activeGroupId: e
                });
            },
            scrollToTab(e, t) {
                if (e < 0) return;
                const i = this.createSelectorQuery();
                i.select("anchor-tab"), i.selectAll(".anchor-tab-item").boundingClientRect(i => {
                    const r = this.data.systemInfo.windowWidth, s = r / 750 * 22;
                    let n = 0;
                    for (let t = 0; t < e; t++) n += s, n += i[t].width;
                    const o = r / 750 * 692 / 2, a = i[e].width / 2;
                    if (n + a > o) {
                        const e = n + a - o;
                        this.setData({
                            navScrollLeft: e,
                            scrollWithAnimation: t
                        });
                    } else this.setData({
                        navScrollLeft: 0,
                        scrollWithAnimation: t
                    });
                }).exec();
            },
            switchTab() {
                this.data.group_app_list_render.some((e, t) => {
                    if (e.isGroupNameInView) {
                        const i = e.group_info.group_id;
                        return this.setActiveTab(i), this.scrollToTab(t, !0), !0;
                    }
                });
            }
        });
    }
}, [ [ 79, 0, 1 ] ] ]);
//# sourceMappingURL=friends-use-epidemic.js.map