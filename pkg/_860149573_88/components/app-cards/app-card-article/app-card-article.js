require("./../../../runtime"), require("./../../../common"), (wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 4 ], {
    66: function(e, t, i) {
        "use strict";
        i.r(t);
        var a = i(32);
        Component({
            behaviors: [ i.n(a).a ],
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
                isVideo: {
                    type: Boolean,
                    value: !1
                },
                content_image_list: {
                    type: Array,
                    value: []
                },
                recommend_reason_type: {
                    type: Number,
                    value: 0
                },
                textLink: {
                    type: Object,
                    value: {
                        wxa_path: "",
                        href_tag: " ",
                        href_text: ""
                    }
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
                singleImageStyle: ""
            },
            computed: {
                contentTextObj(e) {
                    if (e.textLink && e.textLink.href_tag) {
                        return {
                            front: e.contentText.replace(new RegExp(e.textLink.href_tag), "")
                        };
                    }
                    return {
                        front: e.contentText,
                        back: "",
                        text: ""
                    };
                }
            },
            methods: {
                onLoadimageError(e) {
                    const {index: t} = e.currentTarget.dataset;
                    this.triggerEvent("onLoadimageError", {
                        imgIndex: t
                    });
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
                handleClickCardBody() {
                    this.triggerEvent("handleClickCardBody");
                },
                imageLoad(e) {
                    const {height: t, width: i} = e.detail, a = t / i;
                    let n = 268, r = 124;
                    if (a < 1 ? n = (r = 124) / a > 268 ? 268 : r / a : r = (n = 150) * a > 180 ? 180 : n * a, 
                    !this.data.isVideo && n && r) {
                        const e = "width:" + n + "px;height:" + r + "px";
                        this.setData({
                            singleImageStyle: e
                        });
                    }
                },
                captureClickCard() {
                    this.triggerEvent("captureClickCard");
                }
            }
        });
    }
}, [ [ 66, 0, 1 ] ] ]);
//# sourceMappingURL=app-card-article.js.map