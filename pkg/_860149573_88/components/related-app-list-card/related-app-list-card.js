require("./../../runtime"), require("./../../common"), (wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 17 ], {
    108: function(e, t, n) {
        "use strict";
        n.r(t);
        var s = n(20), i = n(28), c = n(2), o = n(6), a = n(7), p = n(16), r = n(4), b = n(18), u = n(0), l = n(57), h = n(62), m = n(15), d = n(61), x = n(119), f = n(122), _ = n(58), O = n(63), j = n(64), S = n(17), v = n(35), I = n(1), U = n(36), g = n(31), A = n(12), y = n(11);
        var N = function() {
            function e() {}
            return e.prototype.call = function(e, t) {
                return t.subscribe(new w(e));
            }, e;
        }(), w = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.hasFirst = !1, n.observables = [], n.subscriptions = [], n;
            }
            return I.a(t, e), t.prototype._next = function(e) {
                this.observables.push(e);
            }, t.prototype._complete = function() {
                var e = this.observables, t = e.length;
                if (0 === t) this.destination.complete(); else {
                    for (var n = 0; n < t && !this.hasFirst; n++) {
                        var s = e[n], i = Object(y.a)(this, s, s, n);
                        this.subscriptions && this.subscriptions.push(i), this.add(i);
                    }
                    this.observables = null;
                }
            }, t.prototype.notifyNext = function(e, t, n, s, i) {
                if (!this.hasFirst) {
                    this.hasFirst = !0;
                    for (var c = 0; c < this.subscriptions.length; c++) if (c !== n) {
                        var o = this.subscriptions[c];
                        o.unsubscribe(), this.remove(o);
                    }
                    this.subscriptions = null;
                }
                this.destination.next(t);
            }, t;
        }(A.a);
        const C = new S.a(), L = C.pipe(Object(l.a)(e => e ? Object(v.a)(e) : s.a.getCommonUseAppList()), Object(h.a)((e, t) => t.fail ? e : t), Object(m.a)(e => (e.commonuse_app_list = e.commonuse_app_list || [], 
        e)), Object(d.a)(({commonuse_app_list: e}) => {
            e.length;
        }), Object(x.a)(1)), F = Object(b.b)(), E = new S.a().pipe(Object(d.a)(({index: e}) => {
            M.next({
                index: e,
                eventId: u.j.CLICK
            }), o.b.next();
        }), Object(m.a)(({appId: e, scene: t, sceneNote: n}) => ({
            appId: e,
            scene: t,
            sceneNote: n
        })));
        E.subscribe(F);
        const R = Object(b.c)().pipe(Object(d.a)(() => {
            r.c.next(u.i.openHistory), p.b.next({
                eventId: u.e.HISTORY_USE
            }), o.b.next();
        })), T = Object(b.e)().pipe(Object(d.a)(() => {
            r.c.next(u.i.openStar), p.b.next({
                eventId: u.e.MY_STAR
            }), o.b.next();
        })), k = Object(b.a)().pipe(Object(d.a)(() => {
            r.c.next(u.i.openWeuse), p.b.next({
                eventId: u.e.FRIENDS_USE
            }), o.b.next();
        })), D = new S.a(), H = D.pipe(Object(l.a)(() => (function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            if (1 === e.length) {
                if (!Object(U.a)(e[0])) return e[0];
                e = e[0];
            }
            return Object(g.a)(e, void 0).lift(new N());
        })(c.e, Object(v.a)(null))), Object(f.a)(e => {
            const {appList: t, nearbyAppid: n, query: s} = e || {};
            return i.a.navigateToMiniProgramDirectly({
                appId: n || "wxb935bc1925fb7b47",
                path: "pages/index/index?" + (s ? s.replace(/^\?/, "") : ""),
                scene: 17,
                preScene: 17
            }).pipe(Object(_.a)(e => Object(v.a)({
                fail: !0,
                err: e
            })));
        }), Object(d.a)(() => {
            r.c.next(u.i.openNearby), p.b.next({
                eventId: u.e.NEARBY
            }), o.b.next();
        })), M = new S.a(), Y = new S.a();
        Y.pipe(Object(O.a)(e => `${e.intersectionObserveTime}-${e.appid}`)).subscribe(M), 
        M.pipe(Object(j.a)(L, c.c, ({index: e, eventId: t}, n, s) => {
            const i = n.commonuse_app_list[e], {username: c, pass_str: o, app_nick_name: a} = i;
            return {
                session_id: n.session_id,
                client_session_id: s,
                entry_scene: u.f.COMMON_USE,
                event_id: t || u.j.EXPOSURE,
                event_type: u.g.ACCOUNT,
                event_pos: e,
                event_happen_before_seconds: Date.now(),
                username: c,
                content_title: a,
                pass_str: o
            };
        })).subscribe(a.b), F.subscribe(e => {
            e.fail ? console.log(`超时或失败：${JSON.stringify(e)}`) : o.d.next({
                scene: u.h.MINI_APP
            });
        }, e => {
            console.log("点击常用小程序失败", e);
        }), R.subscribe(e => {
            o.d.next({
                scene: u.h.HISTORY_USE
            }), e.fail ? r.c.next(u.i.openHistoryFail) : r.c.next(u.i.openHistorySuccess);
        }), T.subscribe(e => {
            o.d.next({
                scene: u.h.MY_STAR
            }), e.fail ? r.c.next(u.i.openStarFail) : r.c.next(u.i.openStarSuccess);
        }), H.subscribe(e => {
            e.fail ? (r.c.next(u.i.openNearbyFail), console.log(`超时或失败：${JSON.stringify(e)}`)) : (o.d.next({
                scene: u.h.NEARBY
            }), r.c.next(u.i.openNearbySuccess));
        }), k.subscribe(e => {
            e.fail ? r.c.next(u.i.openWeuseFail) : r.c.next(u.i.openWeuseSuccess);
        });
        var P = n(8);
        Object(P.a)({
            options: {
                styleIsolation: "apply-shared"
            },
            data: {
                commonUseAppList: [],
                commonUseAppListFetchStatus: "fetching",
                entranceUI: 0
            },
            getSubscriptions: () => ({
                noRender: {
                    globalSessionId: c.c
                }
            }),
            attached() {
                this.renderCommonUseAppList();
            },
            methods: {
                fetchCommonUseAppListInfo() {
                    0 === this.data.commonUseAppList.length && this.setData({
                        commonUseAppListFetchStatus: "fetching"
                    }), C.next();
                },
                renderCommonUseAppList() {
                    this.autoUnsubscribe(L).subscribe(e => {
                        e.fail ? (console.log("commonUseAppListInfo失败：", e), this.setData({
                            commonUseAppListFetchStatus: "fail"
                        })) : wx.nextTick(() => {
                            this.setData({
                                commonUseAppList: e.commonuse_app_list,
                                commonUseAppListFetchStatus: "success",
                                entranceUI: e.recommend_ui
                            }, () => {
                                const t = Date.now();
                                (1 === e.recommend_ui ? e.commonuse_app_list.slice(0, 6) : e.commonuse_app_list).forEach((e, n) => {
                                    Y.next({
                                        eventId: u.j.EXPOSURE,
                                        index: n,
                                        appid: e.appid,
                                        intersectionObserveTime: t
                                    });
                                }), a.c.next();
                            });
                        });
                    });
                },
                handleCommonAppItemClick(e) {
                    const {appid: t, index: n} = e.currentTarget.dataset, s = this.data.commonUseAppList[n];
                    if (s) {
                        const {username: e} = s, i = this.globalSessionId;
                        E.next({
                            appId: t,
                            scene: 1142,
                            sceneNote: [ e, i ].join(";"),
                            index: n
                        });
                    }
                },
                handleHistoryAppClick() {
                    R.next({
                        scene: 17,
                        preScene: 17
                    });
                },
                handleStarAppClick() {
                    T.next({
                        scene: 17,
                        preScene: 17
                    });
                },
                handleNearbyClick() {
                    D.next();
                },
                handleFriendsUseClick() {
                    k.next({
                        url: "../friends-use/friends-use"
                    });
                }
            }
        });
    }
}, [ [ 108, 0, 1 ] ] ]);
//# sourceMappingURL=related-app-list-card.js.map