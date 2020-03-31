var app = getApp(), util = require("../../utils/util"), cgi = require("../../utils/cgi"), declareBinding = require("../../utils/model_lib/declareBinding"), PoiSchema = require("../../utils/model/model_schema").PoiSchema, CommentSchema = require("../../utils/model/model_schema").CommentSchema, PoiModel = require("../../utils/model/poi_model"), CommentModel = require("../../utils/model/comment_model"), frames = [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 7, 7, 9, -1 ];

Component({
    properties: {
        isLike: {
            type: Number,
            value: 0,
            observer: function observer(e, a, t) {}
        },
        likeCount: {
            type: Number,
            value: 0,
            observer: function observer(e, a, t) {}
        },
        commentId: {
            type: String,
            value: "",
            observer: function observer(e, a, t) {}
        },
        reportData: {
            type: Object,
            value: {}
        }
    },
    data: {
        animationImageIndex: 0,
        isAnimating: 0,
        imageUrl: "",
        currentPageId: 0
    },
    attached: function attached() {
        if (this.data.commentId) {
            var e = new CommentModel(this.data.commentId).getValue();
            null != e.isLike && this.setData({
                isLike: e.isLike,
                likeCount: e.likeCount
            }), declareBinding({
                instance: this,
                schema: CommentSchema,
                mapping: {
                    commentId: "id",
                    isLike: "isLike",
                    likeCount: "likeCount"
                }
            });
        }
    },
    methods: {
        catchTapLike: function catchTapLike(e) {
            var a = this;
            if (!a.data.isAnimating) {
                var t, i = a.data.likeCount, n = a.data.isLike ? 0 : 1, r = a.data.commentId;
                if (t = n ? i + 1 : i - 1, a.setData({
                    isLike: n,
                    likeCount: t
                }), a.triggerEvent("likechange", {
                    isLike: n,
                    likeCount: t,
                    commentId: r
                }, {}), 0 == a.data.currentPageId) {
                    var o = getCurrentPages();
                    if (o && o.length) {
                        var d = o[o.length - 1];
                        d && d.data && d.data.currentPageId && (a.data.currentPageId = d.data.currentPageId);
                    }
                }
                app.addLaunchListener(function() {
                    var e = {}, t = "", i = 0;
                    a.data.reportData && a.data.reportData.scene && (e.scene = a.data.reportData.scene), 
                    a.data.reportData && a.data.reportData.pageId && (e.pageId = a.data.reportData.pageId), 
                    a.data.reportData && a.data.reportData.recId && (t = a.data.reportData.recId), a.data.reportData && a.data.reportData.recType && (i = a.data.reportData.recType), 
                    new cgi.SimpleRequest("LikePoiComment", {
                        baseRequest: e,
                        commentId: r,
                        flag: n,
                        scene: a.data.currentPageId,
                        recId: t,
                        recType: i
                    }).send(function() {
                        app.globalData.pageMe && app.globalData.pageMe.refresh(), app.globalData.pageUserProfile && app.globalData.pageUserProfile.refresh();
                    });
                });
            }
        },
        startAnimation: function startAnimation() {
            this.data.animationImageIndex = 0, this.data.isAnimating = 1, util.requestAnimationFrame(this.frame.bind(this));
        },
        onAnimationStop: function onAnimationStop() {
            this.data.isAnimating = 0;
        },
        frame: function frame(e) {
            var a = frames[this.data.animationImageIndex];
            -1 == a ? this.setData({
                imageUrl: ""
            }) : this.setData({
                imageUrl: "icon-like-a" + a
            }), this.data.animationImageIndex++, this.data.animationImageIndex < frames.length ? util.requestAnimationFrame(this.frame.bind(this)) : this.onAnimationStop();
        }
    }
});