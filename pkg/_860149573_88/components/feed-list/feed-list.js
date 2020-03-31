require("./../../runtime"), require("./../../common"), (wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 10 ], {
    65: function(e, t, i) {
        "use strict";
        i.r(t);
        var s = i(9), n = i(0), r = i(8), o = i(15), a = i(24);
        Object(r.a)({
            options: {
                styleIsolation: "apply-shared"
            },
            data: {
                homeFeedsList: [],
                feedsListFetchState: "fetching",
                user_nick_name: "",
                systemInfo: {},
                topHotList: [],
                epidemicList: [],
                feiyan_data: null,
                virus_group_info: []
            },
            getSubscriptions: () => ({
                systemInfo: s.h.pipe(Object(o.a)(e => {
                    const t = e.statusBarHeight;
                    let i;
                    return i = "android" === e.platform ? 48 : 44, {
                        platform: e.platform,
                        statusBarHeight: t + i
                    };
                }))
            }),
            created() {
                this.page_num = 1, this.rawTopHotList = [], this.rawEpidemicList = [], this.createdTime = Date.now(), 
                Object.assign(this, Object(s.b)()), this.feedsList$.subscribe(e => {
                    this.feedsList = e, this.initHotList(), this.initEpidemicList(), this.initFeiyanData(), 
                    this.exposureEpidemicModule(), this.initServerPanelData();
                });
            },
            attached() {
                this.intersectionObserverMap = {}, this.hotListIntersectionObserverMap = {}, this.epidemicListIntersectionObserverMap = {}, 
                this.renderFeedsList();
            },
            methods: {
                handleRetry() {
                    this.triggerEvent("handleRetry");
                },
                fetchFeedsList() {
                    0 === this.data.homeFeedsList.length && this.setData({
                        feedsListFetchState: "fetching"
                    }), this.fetchFeedsList$.next({
                        fetchType: "get"
                    }), this.intersectionObserveTime = Date.now();
                },
                renderFeedsList() {
                    this.autoUnsubscribe(this.feedsListForRender$).subscribe(e => {
                        0 === e.length && 0 === this.data.homeFeedsList.length ? this.setData({
                            feedsListFetchState: "empty",
                            homeFeedsList: []
                        }) : (wx.nextTick(() => {
                            this.progressivelyRenderLists({
                                lists: {
                                    homeFeedsList: e
                                },
                                others: {
                                    feedsListFetchState: "success",
                                    user_nick_name: e.user_nick_name
                                }
                            }).then(() => {
                                this.observerMiniAppInViewport(), s.g.next(0), this.initVideoStayingRecord();
                            });
                        }), this.recommend_feature = e.recommend_feature);
                    });
                },
                handleClickCardBody(e) {
                    const {index: t} = e.currentTarget.dataset, i = this.data.homeFeedsList[t];
                    if (i) {
                        const r = e.detail && e.detail.imgIndex || 0;
                        this.clickFeedItem$.next({
                            index: t,
                            imgIndex: r
                        }), this.reportMiniAppFromFeedsList$.next({
                            eventId: n.j.CLICK,
                            cardIndex: t,
                            action_type: i.card_type === n.c.POST_IMAGE ? n.a.CLICK_POST_IMG : i.card_type === n.c.POST_VIDEO ? n.a.CLICK_POST_VIDEO : n.a.CLICK_CRAWLER,
                            action_pos: r
                        }), s.d.next();
                    }
                },
                toProfile(e) {
                    const {index: t} = e.currentTarget.dataset;
                    this.clickMiniProgramProfileLink$.next({
                        index: t
                    }), this.reportMiniAppFromFeedsList$.next({
                        eventId: n.j.CLICK,
                        cardIndex: t,
                        event_type: n.g.ACCOUNT,
                        action_type: n.a.CLICK_PROFILE_LINK
                    }), s.d.next();
                },
                onLoadimageError(e) {
                    const {index: t} = e.currentTarget.dataset, i = this.data.homeFeedsList[t];
                    if (i) {
                        if (i.card_type === n.c.POST_IMAGE) {
                            const s = e.detail && e.detail.imgIndex || 0;
                            i.dynamic_info.item_list[s] && "string" == typeof i.dynamic_info.item_list[s].shot_img_url && this.setData({
                                [`homeFeedsList[${t}].dynamic_info.item_list[${s}].shot_img_url`]: i.dynamic_info.item_list[s].shot_img_url.trim() + " "
                            });
                        } else "string" == typeof i.contentImg && this.setData({
                            [`homeFeedsList[${t}].contentImg`]: i.contentImg.trim() + " "
                        });
                    }
                },
                observerMiniAppInViewport() {
                    this.cardTimer$List = [];
                    for (let e in this.intersectionObserverMap) this.intersectionObserverMap[e].disconnect(), 
                    delete this.intersectionObserverMap[e];
                    this.data.homeFeedsList.forEach((e, t) => {
                        const {formatedRecommendId: i, card_type: r, dynamic_info: o} = e, d = Object(a.a)();
                        d.on("end").subscribe(e => {
                            e.duration > 0 && this.reportMiniAppFromFeedsList$.next({
                                cardIndex: t,
                                action_type: n.a.CARD_STAY_TIME,
                                entry_scene: n.f.TIMELINE_FEEDS_LIST,
                                card_stay_time: e.duration
                            });
                        }), this.cardTimer$List[t] = d;
                        const c = this.intersectionObserveTime;
                        this.intersectionObserverMap[`#${i}`] || (this.intersectionObserverMap[`#${i}`] = this.createIntersectionObserver(), 
                        this.intersectionObserverMap[`#${i}`].relativeToViewport({
                            top: -this.data.systemInfo.statusBarHeight - 143,
                            bottom: -143
                        }).observe(`#${i}`, a => {
                            a.intersectionRatio > 0 ? (this.reportExposureMiniAppFromFeedsList$.next({
                                formatedRecommendId: i,
                                eventId: n.j.EXPOSURE,
                                cardIndex: t,
                                intersectionObserveTime: c
                            }), r !== n.c.POST_IMAGE && r !== n.c.POST_VIDEO || o && o.item_list && o.item_list.forEach((e, s) => {
                                this.reportExposureLinkCardFromFeedsList$.next({
                                    formatedRecommendId: i,
                                    cardIndex: t,
                                    entry_scene: n.f.TIMELINE_FEEDS_LIST,
                                    eventId: n.j.EXPOSURE,
                                    action_pos: s,
                                    intersectionObserveTime: c
                                });
                            }), d.next("resume"), e.isInView = !0, t === this.data.homeFeedsList.length - 3 && s.i.next()) : (d.next("pause"), 
                            e.isInView = !1);
                        }));
                    });
                },
                setDataPromisely(e) {
                    return new Promise((t, i) => {
                        this.setData(e, () => {
                            wx.nextTick(() => {
                                t();
                            });
                        });
                    });
                },
                async progressivelyRenderLists({lists: e = {}, others: t = {}} = {}) {
                    for (let i in e) {
                        const s = e[i], n = (e, t) => s.slice(e, t).reduce((t, s, n) => (t[`${i}[${e + n}]`] = s, 
                        t), {});
                        if (await this.setDataPromisely({
                            ...n(0, 3),
                            ...t
                        }), await this.setDataPromisely({
                            ...n(3, s.length)
                        }), s.length < this.data[i].length) {
                            const e = this.data[i].slice(0, s.length);
                            await this.setDataPromisely({
                                [i]: e
                            });
                        }
                    }
                },
                handleClickMore(e) {
                    const {index: t} = e.currentTarget.dataset;
                    this.reportMiniAppFromFeedsList$.next({
                        eventId: n.j.CLICK,
                        cardIndex: t,
                        event_type: n.g.ACCOUNT,
                        action_type: n.a.CLICK_FEED_MENU
                    }), wx.showActionSheet({
                        itemList: [ "不感兴趣", "投诉" ],
                        success: ({tapIndex: e}) => {
                            this.cardOperate$.next({
                                cardIndex: t,
                                operateType: e
                            }), 0 === e && this.deleteCard(t);
                        },
                        fail: ({errMsg: e}) => {
                            "showActionSheet:fail cancel" === e && this.reportMiniAppFromFeedsList$.next({
                                eventId: n.j.CLICK,
                                cardIndex: t,
                                event_type: n.g.ACCOUNT,
                                action_type: n.a.CANCEL_FEED_MENU
                            });
                        }
                    });
                },
                handleClickLike(e) {
                    let t = e && e.currentTarget.dataset.index, i = n.f.TIMELINE_FEEDS_LIST;
                    const s = this.data.homeFeedsList[t], r = s.dynamic_info || {}, o = !r.has_like, a = o ? (r.like_count || 0) + 1 : Math.max(r.like_count - 1, 0);
                    let d = s.social_like_info && s.social_like_info.like_nickname_list || [];
                    if (o) d.push({
                        user_nick_name: this.data.user_nick_name,
                        is_self: !0
                    }); else {
                        const e = d.findIndex(e => !!e.is_self);
                        e >= 0 && d.splice(e, 1);
                    }
                    this.setData({
                        [`homeFeedsList[${t}].dynamic_info.has_like`]: o,
                        [`homeFeedsList[${t}].dynamic_info.like_count`]: a,
                        [`homeFeedsList[${t}].social_like_info.has_like`]: o,
                        [`homeFeedsList[${t}].social_like_info.like_nickname_list`]: d
                    }), this.cardOperate$.next({
                        cardIndex: t,
                        operateType: 2,
                        dynamic_info: {
                            has_like: o,
                            like_count: a,
                            item_list: r.item_list,
                            text_link: r.text_link
                        },
                        entry_scene: i,
                        social_like_info: {
                            has_like: o,
                            like_nickname_list: d
                        }
                    });
                },
                handlePlayVideo(e) {
                    const {index: t} = e.currentTarget.dataset;
                    this.videoTimer$List[t] && this.videoTimer$List[t].next("resume");
                },
                handlePauseVideo(e) {
                    const {index: t} = e.currentTarget.dataset;
                    this.videoTimer$List[t] && this.videoTimer$List[t].next("pause");
                },
                handleLongPress(e) {},
                handleLongpressEpidemicItem(e) {},
                initVideoStayingRecord() {
                    this.videoTimer$List = [], this.data.homeFeedsList.forEach((e, t) => {
                        if (e && e.card_type === n.c.POST_VIDEO) {
                            const i = Object(a.a)();
                            i.on("end").subscribe(i => {
                                if (i.duration > 0) {
                                    const s = this.selectComponent("#" + e.formatedRecommendId).duration || 0;
                                    this.reportMiniAppFromFeedsList$.next({
                                        cardIndex: t,
                                        action_type: n.a.VIDEO_PLAYED,
                                        entry_scene: n.f.TIMELINE_FEEDS_LIST,
                                        video_play_time: i.duration,
                                        duration_time: Math.round(1e3 * s)
                                    });
                                }
                            }), this.videoTimer$List[t] = i;
                        }
                    });
                },
                reportVideoStayingRecord() {
                    this.data.homeFeedsList.forEach((e, t) => {
                        e && e.card_type === n.c.POST_VIDEO && this.videoTimer$List && this.videoTimer$List[t] && this.videoTimer$List[t].next("end");
                    });
                },
                reportCardsStayingRecord() {
                    this.data.homeFeedsList.forEach((e, t) => {
                        this.cardTimer$List && this.cardTimer$List[t] && this.cardTimer$List[t].next("end");
                    }), this.rawTopHotList.forEach((e, t) => {
                        this.hotListCardTimer$List && this.hotListCardTimer$List[t] && this.hotListCardTimer$List[t].next("end");
                    }), this.rawEpidemicList.forEach((e, t) => {
                        this.epidemicListCardTimer$List && this.epidemicListCardTimer$List[t] && this.epidemicListCardTimer$List[t].next("end");
                    });
                },
                deleteCard(e) {
                    this.setData({
                        [`homeFeedsList[${e}].deleted`]: !0
                    });
                },
                resumeCardInViewTimeRecord() {
                    this.data.homeFeedsList.forEach((e, t) => {
                        e.isInView && this.cardTimer$List && this.cardTimer$List[t] && this.cardTimer$List[t].next("resume");
                    }), this.rawTopHotList.forEach((e, t) => {
                        e.isInView && this.hotListCardTimer$List && this.hotListCardTimer$List[t] && this.hotListCardTimer$List[t].next("resume");
                    }), this.rawEpidemicList.forEach((e, t) => {
                        e.isInView && this.epidemicListCardTimer$List && this.epidemicListCardTimer$List[t] && this.epidemicListCardTimer$List[t].next("resume");
                    });
                },
                loadMoreFeed() {
                    const e = this.getLastFetchFeedRes();
                    e && e.weuse_feeds_list && e.weuse_feeds_list.length >= 3 && this.recommend_feature ? (this.fetchFeedsList$.next({
                        fetchType: "refill",
                        page_num: ++this.page_num
                    }), this.reportMiniAppFromFeedsList$.next({
                        eventId: n.j.REFRESH,
                        action_type: n.a.LOAD_MORE
                    })) : e && e.weuse_feeds_list && e.weuse_feeds_list.length >= 0 || !this.recommend_feature ? this.setData({
                        feedsListFetchState: "exhausted"
                    }) : (this.fetchFeedsList$.next({
                        fetchType: "refill",
                        page_num: ++this.page_num
                    }), this.reportMiniAppFromFeedsList$.next({
                        eventId: n.j.REFRESH,
                        action_type: n.a.LOAD_MORE
                    }));
                },
                epidemicListItemFilter: e => ({
                    content_desc: e.content_desc,
                    app_nick_name: e.app_nick_name,
                    content_image: e.content_image,
                    recommend_id: e.recommend_id,
                    recommend_reason: e.recommend_reason
                }),
                hotListItemFilter: e => ({
                    content_desc: e.content_desc,
                    app_nick_name: e.app_nick_name,
                    content_image: e.content_image,
                    recommend_id: e.recommend_id
                }),
                initHotList() {
                    const e = this.getLastFetchFeedRes().weuse_hot_list || [];
                    this.rawTopHotList = [];
                    const t = [], i = [];
                    for (let s = 0; s < e.length && t.length < 3; s++) {
                        const n = e[s];
                        -1 == i.indexOf(n.appid) && (t.push(this.hotListItemFilter(n)), i.push(n.appid), 
                        this.rawTopHotList.push(n));
                    }
                    t.length > 0 && this.setData({
                        topHotList: t
                    }, () => {
                        this.observerHotListAppInViewport(), this.observerGoAllHotListInViewport();
                    });
                },
                initEpidemicList() {
                    const e = this.getLastFetchFeedRes(), t = e.group_feeds_list && e.group_feeds_list.find(e => "virus" === e.group_name);
                    if (this.epidemicGroup = t, t && t.weuse_feeds_list && t.weuse_feeds_list.length > 0) {
                        const e = t.weuse_feeds_list, i = [], s = [];
                        for (let t = 0; t < e.length && i.length < 1; t++) {
                            const n = e[t];
                            -1 == s.indexOf(n.appid) && (i.push(this.epidemicListItemFilter(n)), s.push(n.appid), 
                            this.rawEpidemicList[t] = n);
                        }
                        i.length > 0 && this.setData({
                            epidemicList: i
                        }, () => {
                            this.observerEpidemicAppInViewport();
                        });
                    }
                },
                initFeiyanData() {
                    const e = this.getLastFetchFeedRes();
                    e.feiyan_data && this.setData({
                        feiyan_data: e.feiyan_data
                    });
                },
                clickHotListItem(e) {
                    const {recommend_id: t, index: i} = e.currentTarget.dataset, r = (this.getLastFetchFeedRes().weuse_hot_list || []).find(e => e.recommend_id === t);
                    r && (this.clickFeedItem$.next({
                        hotListItem: r
                    }), this.reportMiniAppFromFeedsList$.next({
                        hotListItem: r,
                        eventId: n.j.CLICK,
                        cardIndex: i,
                        action_type: n.a.CLICK_CRAWLER,
                        entry_scene: n.f.INDEX_HOT_LIST_PANEL
                    }), s.d.next());
                },
                clickEpidemicItem(e) {
                    const {index: t} = e.currentTarget.dataset, i = this.epidemicGroup.weuse_feeds_list[t];
                    i && (this.clickFeedItem$.next({
                        hotListItem: i
                    }), this.reportMiniAppFromFeedsList$.next({
                        hotListItem: i,
                        eventId: n.j.CLICK,
                        cardIndex: t,
                        action_type: n.a.CLICK_CRAWLER,
                        entry_scene: n.f.INDEX_EPIDEMIC_FEED_LIST
                    }), s.d.next());
                },
                goAllHotList() {
                    this.reportMiniAppFromFeedsList$.next({
                        eventId: n.j.CLICK,
                        action_type: n.a.HOT_LIST_ENTRANCE,
                        entry_scene: n.f.INDEX_HOT_LIST_PANEL
                    }), wx.navigateTo({
                        url: "../../pages/hot-list/hot-list"
                    });
                },
                observerHotListAppInViewport() {
                    this.hotListCardTimer$List = [];
                    for (let e in this.hotListIntersectionObserverMap) this.hotListIntersectionObserverMap[e].disconnect(), 
                    delete this.hotListIntersectionObserverMap[e];
                    this.rawTopHotList.forEach((e, t) => {
                        const i = `#hotlist${t}`, s = Object(a.a)();
                        s.on("end").subscribe(i => {
                            i.duration > 0 && this.reportMiniAppFromFeedsList$.next({
                                hotListItem: e,
                                cardIndex: t,
                                action_type: n.a.CARD_STAY_TIME,
                                entry_scene: n.f.INDEX_HOT_LIST_PANEL,
                                card_stay_time: i.duration
                            });
                        }), this.hotListCardTimer$List[t] = s;
                        const r = this.intersectionObserveTime;
                        this.hotListIntersectionObserverMap[i] || (this.hotListIntersectionObserverMap[i] = this.createIntersectionObserver(), 
                        this.hotListIntersectionObserverMap[i].relativeToViewport({
                            top: -this.data.systemInfo.statusBarHeight - 46,
                            bottom: -46
                        }).observe(i, o => {
                            o.intersectionRatio > 0 ? (this.reportExposureMiniAppFromFeedsList$.next({
                                hotListItem: e,
                                formatedRecommendId: i,
                                eventId: n.j.EXPOSURE,
                                cardIndex: t,
                                intersectionObserveTime: r,
                                entry_scene: n.f.INDEX_HOT_LIST_PANEL
                            }), s.next("resume"), e.isInView = !0) : (s.next("pause"), e.isInView = !1);
                        }));
                    });
                },
                observerGoAllHotListInViewport() {
                    this.goAllHotListIntersectionObserver && (this.goAllHotListIntersectionObserver.disconnect(), 
                    delete this.goAllHotListIntersectionObserver), this.goAllHotListIntersectionObserver = this.createIntersectionObserver(), 
                    this.goAllHotListIntersectionObserver.relativeToViewport({
                        top: -this.data.systemInfo.statusBarHeight,
                        bottom: 0
                    }).observe("#goAllHotList", e => {
                        e.intersectionRatio > 0 && this.reportExposureMiniAppFromFeedsList$.next({
                            action_type: n.a.HOT_LIST_ENTRANCE,
                            entry_scene: n.f.INDEX_HOT_LIST_PANEL,
                            eventId: n.j.EXPOSURE,
                            intersectionObserveTime: this.createdTime,
                            formatedRecommendId: "goAllHotList"
                        });
                    });
                },
                observerEpidemicAppInViewport() {
                    this.epidemicListCardTimer$List = [];
                    for (let e in this.epidemicListIntersectionObserverMap) this.epidemicListIntersectionObserverMap[e].disconnect(), 
                    delete this.epidemicListIntersectionObserverMap[e];
                    this.rawEpidemicList.forEach((e, t) => {
                        const i = `#epidemicList${t}`, s = Object(a.a)();
                        s.on("end").subscribe(i => {
                            i.duration > 0 && this.reportMiniAppFromFeedsList$.next({
                                hotListItem: e,
                                cardIndex: t,
                                action_type: n.a.CARD_STAY_TIME,
                                entry_scene: n.f.INDEX_EPIDEMIC_FEED_LIST,
                                card_stay_time: i.duration
                            });
                        }), this.epidemicListCardTimer$List[t] = s;
                        const r = this.intersectionObserveTime;
                        this.epidemicListIntersectionObserverMap[i] || (this.epidemicListIntersectionObserverMap[i] = this.createIntersectionObserver(), 
                        this.epidemicListIntersectionObserverMap[i].relativeToViewport({
                            top: -this.data.systemInfo.statusBarHeight - 46,
                            bottom: -46
                        }).observe(i, o => {
                            o.intersectionRatio > 0 ? (this.reportExposureMiniAppFromFeedsList$.next({
                                hotListItem: e,
                                formatedRecommendId: i,
                                eventId: n.j.EXPOSURE,
                                cardIndex: t,
                                intersectionObserveTime: r,
                                entry_scene: n.f.INDEX_EPIDEMIC_FEED_LIST
                            }), s.next("resume"), e.isInView = !0) : (s.next("pause"), e.isInView = !1);
                        }));
                    });
                },
                goEpidemicFeedsPage() {
                    this.reportMiniAppFromFeedsList$.next({
                        eventId: n.j.CLICK,
                        action_type: n.a.EPIDEMIC_FEED_LIST_ENTRANCE,
                        entry_scene: n.f.INDEX_EPIDEMIC_FEED_LIST
                    }), wx.navigateTo({
                        url: "../../pages/epidemic-feeds/epidemic-feeds"
                    });
                },
                exposureEpidemicModule() {
                    const e = this.getLastFetchFeedRes(), t = e.group_feeds_list && e.group_feeds_list.find(e => "virus" === e.group_name), i = t && t.weuse_feeds_list && t.weuse_feeds_list.length > 0;
                    (e.feiyan_data || i) && this.reportMiniAppFromFeedsList$.next({
                        eventId: n.j.EXPOSURE,
                        action_type: n.a.EXPOSURE_INDEX_EPIDEMIC_MODULE,
                        entry_scene: n.f.INDEX_EPIDEMIC_FEED_LIST
                    });
                },
                initServerPanelData() {
                    const e = this.getLastFetchFeedRes();
                    this.setData({
                        virus_group_info: e.virus_group_info
                    });
                },
                detached() {
                    this.goAllHotListIntersectionObserver.disconnect();
                    for (let e in this.intersectionObserverMap) this.intersectionObserverMap[e].disconnect();
                    for (let e in this.hotListIntersectionObserverMap) this.hotListIntersectionObserverMap[e].disconnect();
                    for (let e in this.epidemicListIntersectionObserverMap) this.epidemicListIntersectionObserverMap[e].disconnect();
                }
            }
        });
    }
}, [ [ 65, 0, 1 ] ] ]);
//# sourceMappingURL=feed-list.js.map