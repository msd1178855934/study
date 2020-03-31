var util = require("../utils/util"), reporter = require("../utils/reporter"), app = getApp(), startTimeStamp = "";

module.exports = Behavior({
    behaviors: [],
    properties: {
        media: {
            type: Object
        }
    },
    attached: function attached() {
        startTimeStamp = new Date().getTime();
    },
    ready: function ready() {},
    methods: {
        mediaKVReportBehavior: function mediaKVReportBehavior(e) {
            var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.data.media || {}, t = new Date().getTime();
            i.duration;
            reporter.getReporter(16479).appVersion(app.globalData.sysInfo.version).publicLibVersion(app.globalData.sysInfo.SDKVersion).pagePath(this._getCurrentPagePath()).mediaType(this._getMediaInfo(i).mediaType).mediaSrc(this._getMediaInfo(i).mediaSrc).networkType(app.globalData.sysInfo.networkType).startLoadTime(startTimeStamp).endLoadTime(t).mediaSize(this._getMediaInfo(i).mediaSize).mediaWidth(e.detail.width).mediaHeight(e.detail.height).mediaDuration(this._getMediaInfo(i).mediaDuration).mediaScale(this._getMediaInfo(i).mediaScale).lazyReportToServer();
        },
        _getMediaInfo: function _getMediaInfo(e) {
            var i = e.type, t = e.url, a = 0, r = 0, m = e.duration;
            return 0 === i ? e.midImageUrl && e.midImageUrl.length > 0 ? (t = e.midImageUrl, 
            a = 1) : (t = e.url, a = 2) : (t = e.url, a = ""), 2 === a && e.imageSize ? r = e.imageSize : 1 === a && e.midImageSize ? r = e.midImageSize : 0 === a && e.thumbSize ? r = e.thumbSize : e.videoSize && (r = e.videoSize), 
            e.isPosterImage && (r = e.thumbSize, t = e.thumbUrl, a = "", m = 0, i = 0), {
                mediaType: i,
                mediaSrc: t,
                mediaScale: a,
                mediaSize: r,
                mediaDuration: m
            };
        },
        _getCurrentPagePath: function _getCurrentPagePath() {
            var e = getCurrentPages();
            return e[e.length - 1].route;
        }
    }
});