require("./../../../runtime"), require("./../../../common"), (wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 5 ], {
    67: function(e, i, t) {
        "use strict";
        t.r(i);
        var l = t(8), a = t(2), n = t(32), o = t.n(n);
        Object(l.a)({
            behaviors: [ o.a ],
            options: {
                styleIsolation: "apply-shared"
            },
            properties: {
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
            getSubscriptions: () => ({
                platform: a.g
            }),
            options: {
                styleIsolation: "shared",
                multipleSlots: !0
            },
            computed: {
                likeNameString(e) {
                    if (e.social_like_info && e.social_like_info.like_nickname_list) {
                        return e.social_like_info.like_nickname_list.map(e => e.user_nick_name).join("，");
                    }
                    return "";
                }
            },
            methods: {
                toProfile() {
                    this.triggerEvent("toProfile");
                },
                handleClickMore() {
                    this.triggerEvent("handleClickMore");
                },
                handleClickLike() {
                    setTimeout(() => {
                        this.triggerEvent("handleClickLike");
                    }, 50);
                },
                captureClickCard() {
                    this.triggerEvent("captureClickCard");
                }
            }
        });
    }
}, [ [ 67, 0, 1 ] ] ]);
//# sourceMappingURL=app-card-layout.js.map