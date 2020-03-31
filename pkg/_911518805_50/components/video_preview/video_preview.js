var util = require("../../utils/util"), app = getApp(), mediaBehaviors = require("../../behaviors/media-behaviors"), videoStyle = require("./videoStyleConstants");

Component({
    behaviors: [ mediaBehaviors ],
    properties: {
        media: {
            type: Object,
            value: {},
            observer: function observer(e, i, t) {
                this.setData({
                    posterSrc: e.posterSrc || "",
                    videoSrc: e.url || ""
                });
            }
        },
        videoId: {
            type: String
        },
        fixedWidth: {
            type: Number
        }
    },
    observers: {
        media: function media(e) {
            this.data.media;
        },
        posterSrc: function posterSrc(e) {
            this.data.posterSrc = this.data.media.posterSrc, this.data.videoSrc = this.data.media.url;
        }
    },
    data: {
        videoUrl: "",
        isPlayShow: !0,
        isAutoplay: !1,
        isVideoShow: !1,
        isFirstLoaded: !1
    },
    lifetimes: {
        attached: function attached() {
            var e = this.data.fixedWidth ? this.data.fixedWidth : this.data.media.width;
            this.setData({
                videoStyle: videoStyle.radiusBorderStyle[this.data.media.videoStyle] || "",
                videoSrc: this.data.media.url || "",
                posterSrc: this.data.media.posterSrc || "",
                videoHeight: this.data.media.height || 286,
                videoWidth: e || 340
            });
        },
        ready: function ready() {
            this.videoObserver();
        },
        detached: function detached() {
            var e = this;
            this.setData({
                isAutoplay: !1
            }, function() {
                e.video && e.video.stop();
            }), e.observer && e.observer.disconnect();
        }
    },
    pageLifetimes: {
        show: function show() {
            this.videoObserver();
        },
        hide: function hide() {
            var e = this;
            this.setData({
                isAutoplay: !1
            }, function() {
                e.video && e.video.stop();
            }), e.observer && e.observer.disconnect();
        }
    },
    methods: {
        videoObserver: function videoObserver() {
            var e = this, i = this, t = util.rpx2px(i.data.videoHeight) / 2;
            wx.nextTick(function() {
                i.observer && i.observer.disconnect(), i.observer = wx.createIntersectionObserver(i, {
                    thresholds: [ 1 ],
                    initialRatio: 0,
                    observeAll: !1
                }), i.observer.relativeToViewport({
                    top: t,
                    bottom: 200
                }), i.observer.observe(".video-preview", function(t) {
                    1 === t.intersectionRatio ? e.setData({
                        videoUrl: i.data.videoSrc,
                        isAutoplay: !0,
                        isPlayShow: !1,
                        isVideoShow: !1
                    }, function() {
                        i.video = wx.createVideoContext(i.data.videoId, i), i.video && i.video.play();
                    }) : (e.setData({
                        isAutoplay: !1,
                        isPlayShow: !0,
                        isVideoShow: !1
                    }, function() {
                        i.video && i.video.stop();
                    }), setTimeout(function() {
                        e.setData({
                            videoUrl: ""
                        });
                    }, 100));
                });
            });
        },
        hideVideo: function hideVideo() {
            this.setData({
                isVideoShow: !1,
                videoUrl: "",
                isAutoplay: !1
            });
        },
        bindVideoUpdate: function bindVideoUpdate(e) {
            var i = e.detail, t = i.currentTime;
            i.duration;
            t > 0 && (this.setData({
                isVideoShow: !0,
                isPlayShow: !1,
                isLoadingShow: !1
            }), this.data.isFirstLoaded || (this.data.isFirstLoaded = !0, this.mediaKVReportBehavior(e)));
        }
    }
});