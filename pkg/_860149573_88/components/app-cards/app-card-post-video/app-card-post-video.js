require("./../../../runtime"), require("./../../../common"), (wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 6 ], {
    114: function(t, e, i) {
        "use strict";
        i.r(e);
        var a = i(2);
        const s = new class {
            constructor() {
                this.list = [];
            }
            add(t) {
                this.list.push({
                    videoId: t
                });
            }
            canSet(t) {
                return !!this.list.find(e => e.videoId === t);
            }
            set(t, e, i) {
                const a = this.list.find(e => e.videoId === t);
                return !!a && (a.videoContext = e, a.currentTime = i, 1 === this.list.length && this.playTop(), 
                !0);
            }
            delete(t) {
                const e = this.list.find(e => e.videoId === t);
                if (e) {
                    const t = this.list.indexOf(e);
                    e.videoContext && e.videoContext.pause(), this.list.splice(t, 1), this.list.length > 0 && this.playTop();
                }
            }
            playTop() {
                a.f.subscribe(t => {
                    if ("wifi" === t) {
                        const t = this.list[0];
                        t && t.videoContext && setTimeout(() => {
                            t.videoContext.seek(t.currentTime || 0), t.videoContext.play();
                        }, 200);
                    }
                });
            }
        }();
        var n = i(7), o = i(116), r = i(15), d = i(32), h = i.n(d), l = i(8);
        const c = n.c.pipe(Object(o.a)(200));
        Object(l.a)({
            behaviors: [ h.a ],
            options: {
                styleIsolation: "apply-shared"
            },
            properties: {
                contentText: {
                    type: String,
                    value: ""
                },
                contentImg: {
                    type: String,
                    value: ""
                },
                appLogo: {
                    type: String,
                    value: ""
                },
                appName: {
                    type: String,
                    value: ""
                },
                recommendReason: {
                    type: String,
                    value: ""
                },
                likeCount: {
                    type: Number,
                    value: 0
                },
                hasLike: {
                    type: Boolean,
                    value: !1
                },
                videoUrl: {
                    type: String,
                    value: ""
                },
                textLink: {
                    type: Object,
                    value: {
                        wxa_path: "",
                        href_tag: " ",
                        href_text: ""
                    }
                },
                recommend_reason_type: {
                    type: Number,
                    value: 0
                },
                social_like_info: {
                    type: Object,
                    value: {
                        has_like: !1,
                        like_nickname_list: []
                    }
                }
            },
            data: {
                canPlay: !1,
                wating: !0
            },
            getSubscriptions: () => ({
                noRender: {
                    networkType: a.f,
                    systemInfo: a.i.pipe(Object(r.a)(t => {
                        const e = t.statusBarHeight;
                        let i;
                        return i = "android" === t.platform ? 48 : 44, {
                            platform: t.platform,
                            statusBarHeight: e + i
                        };
                    }))
                }
            }),
            computed: {
                contentTextObj(t) {
                    if (t.textLink && t.textLink.href_tag) {
                        return {
                            front: t.contentText.replace(new RegExp(t.textLink.href_tag), "")
                        };
                    }
                    return {
                        front: t.contentText,
                        back: "",
                        text: ""
                    };
                }
            },
            attached() {
                this.isAttached = !0, this.observeVideo();
            },
            detached() {
                this.observable.disconnect();
            },
            methods: {
                observeVideo() {
                    this.videoCardId = String(Math.random() + Date.now()), this.observable = this.createIntersectionObserver(), 
                    this.observable.relativeToViewport({
                        top: -184 - this.systemInfo.statusBarHeight,
                        bottom: -184
                    }).observe("#video-wrap", ({intersectionRatio: t}) => {
                        t > 0 ? this.play() : this.pause();
                    });
                },
                toProfile() {
                    this.triggerEvent("toProfile");
                },
                onLoadimageError() {
                    this.triggerEvent("onLoadimageError");
                },
                handleClickMore() {
                    this.triggerEvent("handleClickMore");
                },
                handleClickLike() {
                    this.triggerEvent("handleClickLike");
                },
                toProfile() {
                    this.triggerEvent("toProfile");
                },
                handleClickVideo(t) {
                    this.videoContext && this.videoContext.pause(), this.triggerEvent("handleClickCardBody");
                },
                bindplay() {
                    this.triggerEvent("handlePlayVideo"), this.data.canPlay && this.setData({
                        wating: !1
                    });
                },
                bindpause() {
                    this.triggerEvent("handlePauseVideo");
                },
                bindended() {
                    this.triggerEvent("handlePauseVideo");
                },
                binderror() {
                    this.triggerEvent("handlePauseVideo");
                },
                bindtimeupdate(t) {
                    const {currentTime: e, duration: i} = t.detail;
                    this.currentTime = e, this.duration = i;
                },
                play() {
                    s.add(this.videoCardId);
                    const t = c.subscribe(() => {
                        s.canSet(this.videoCardId) && "wifi" === this.networkType && this.setData({
                            canPlay: !0
                        }, () => {
                            this.videoContext = wx.createVideoContext("video", this), s.set(this.videoCardId, this.videoContext, this.currentTime) || this.setData({
                                canPlay: !1,
                                wating: !0
                            });
                        }), t.unsubscribe();
                    });
                },
                pause() {
                    this.setData({
                        wating: !0
                    }, () => {
                        setTimeout(() => {
                            this.setData({
                                canPlay: !1
                            }, () => {
                                s.delete(this.videoCardId);
                            });
                        }, 0);
                    });
                },
                captureClickCard() {
                    this.triggerEvent("captureClickCard");
                }
            }
        });
    }
}, [ [ 114, 0, 1 ] ] ]);
//# sourceMappingURL=app-card-post-video.js.map