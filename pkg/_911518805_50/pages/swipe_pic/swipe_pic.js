var util = require("../../utils/util.js"), cgi = require("../../utils/cgi.js"), app = getApp();

Page({
    data: {
        isIpx: util.isIpx(),
        currentPicIndex: 0,
        current: 0,
        windowHeight: util.getSysInfo().windowHeight,
        renderPicArr: [],
        showVideo: !1,
        currentVideoPath: "",
        currentVideoThumbPath: "",
        showDeleteButton: !1,
        videoContexts: {}
    },
    onLoad: function onLoad(e) {
        console.log("swipe_pic options", e), console.log("app.globalData.picList: ", app.globalData.picList);
        var t = !1;
        e.showDelete && (t = e.showDelete), console.log("showDelete: " + t), this.data.currentPicIndex = app.globalData.currentPicIndex, 
        this.setData({
            renderPicArr: app.globalData.picList,
            current: app.globalData.currentPicIndex,
            showDeleteButton: t
        });
    },
    onReady: function onReady() {
        this.bindSwiperChange({
            detail: {
                current: this.data.currentPicIndex
            }
        });
    },
    onHide: function onHide() {},
    onUnload: function onUnload() {
        console.log("swipe_pic onUnload"), app.globalData.deletePicFunc = function() {};
    },
    bindSwiperChange: function bindSwiperChange(e) {
        var t = this;
        console.log("onCurrentChange: ", e);
        var a = e.detail.current;
        t.data.currentPicIndex = a, 1 == t.data.renderPicArr[a].type ? (t.data.videoContexts[a] || (t.data.videoContexts[a] = wx.createVideoContext("swiperItem" + a)), 
        Object.keys(t.data.videoContexts).forEach(function(e) {
            var n = t.data.videoContexts[e];
            e == a ? n.play() : n.pause();
        })) : Object.keys(t.data.videoContexts).forEach(function(e) {
            t.data.videoContexts[e].pause();
        });
    },
    onTapDelete: function onTapDelete(e) {
        console.log("onTapDelete: ", e);
        var t = parseInt(this.data.currentPicIndex), a = this.data.renderPicArr[t].originIndex;
        app.globalData.deletePicFunc(a);
        var n = this.data.renderPicArr;
        n.splice(t, 1), 0 === n.length && wx.navigateBack(), t >= n.length && (t = n.length - 1), 
        this.data.currentPicIndex = t, this.setData({
            renderPicArr: n,
            current: t
        });
    }
});