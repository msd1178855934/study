var util = require("../../utils/util"), mediaBehaviors = require("../../behaviors/media-behaviors"), app = getApp();

Component({
    behaviors: [ mediaBehaviors ],
    properties: {
        media: {
            type: Object,
            value: {},
            observer: function observer(i, t, a) {
                i && 1 === i.type ? this.setData({
                    posterSrc: i.thumbUrl
                }) : i && this.setData({
                    imageSrc: i.midImageUrl || i.url
                });
            }
        },
        fixedWidth: {
            type: Number
        },
        switchHighRes: {
            type: Boolean,
            value: !1
        }
    },
    observers: {
        media: function media(i) {
            this.data.media;
        },
        imgSrc: function imgSrc(i) {
            1 === this.data.media.type ? this.data.posterSrc = this.data.media.thumbUrl : this.data.imgSrc = this.data.media.midImageUrl || this.data.media.url;
        }
    },
    data: {
        imgMode: "aspectFill",
        highResSrc: "",
        showOnlyHighRes: !1
    },
    lifetimes: {
        attached: function attached() {
            var i = this.data.fixedWidth ? this.data.fixedWidth : this.data.media.width;
            this.setData({
                imgHeight: this.data.media.height || 286,
                imgWidth: i || 340,
                imgMarginBottom: this.data.media.marginBottom || 0,
                imgMarginRight: this.data.media.marginRight || 0,
                imgType: this.data.media.type || 0,
                imgSrc: this._getMediaInfo(this.data.media).mediaSrc,
                highResSrc: this.data.media.url || ""
            });
        },
        ready: function ready() {}
    },
    pageLifetimes: {
        show: function show() {},
        hide: function hide() {}
    },
    methods: {
        bindImageLoad: function bindImageLoad(i) {
            var t = this.data.media;
            1 === t.type && (t = Object.assign(this.data.media, {
                isPosterImage: !0
            })), this.mediaKVReportBehavior(i, t);
        },
        bindHighResImageLoad: function bindHighResImageLoad(i) {
            this.data.media;
            this.data.switchHighRes && this.setData({
                showOnlyHighRes: !0
            });
        }
    }
});