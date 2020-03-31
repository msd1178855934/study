var app = getApp(), cgi = require("../../utils/cgi"), util = require("../../utils/util"), impressionBehaviors = require("../../behaviors/impression-behaviors"), calculateDistance = require("../../utils/calculateDistance"), PoiModel = require("../../utils/model/poi_model"), ugcStorage = require("../../utils/ugcStorage");

Component({
    behaviors: [ impressionBehaviors ],
    properties: {
        poiData: {
            type: Object,
            value: {}
        },
        reportData: {
            type: Object,
            value: {}
        },
        showPoiGallery: {
            type: Boolean,
            value: !1
        },
        impressionId: {
            type: String,
            value: ""
        },
        isUsingRealCurrentLocation: {
            type: Boolean,
            value: !1
        },
        poiCustomTheme: {
            type: String,
            value: ""
        }
    },
    data: {},
    attached: function attached() {
        var e = this, a = this.data.poiData, t = this.data.reportData || {}, r = this.data.impressionId || "";
        this.data.isUsingRealCurrentLocation || calculateDistance.addPoiLocation({
            longitude: a.longitude,
            latitude: a.latitude
        }, function(t) {
            var r = "";
            t < 100 || 100 == t ? r = "约100m" : t > 100 && t < 1e3 ? r = "约" + Math.round(t / 100) + "00m" : (t > 1e3 || 1e3 == t) && (r = Math.round(t / 1e3) + "km"), 
            e.setData({
                "renderData.isUsingRealCurrentLocation": !0,
                "renderData.poiInfo.infoWithDistance": r + a.info2
            });
        });
        var i = [];
        a.photos && 3 === a.photos.length && a.photos.forEach(function(e) {
            var a = {};
            a.url = e, a.width = 214, a.height = 214, a.marginRight = 0, a.marginBottom = 0, 
            i.push(a);
        });
        var o = {
            isUsingRealCurrentLocation: e.data.isUsingRealCurrentLocation,
            isMark: a.isMark,
            poiInfo: a,
            poiGalleryPics: i,
            visitCount: a.visitCount,
            reportData: t,
            impressionId: r
        };
        this.setData({
            renderData: o
        }), this.declareBindingForPoi(o);
    },
    methods: {
        onTapMarkButtonWithShareShake: function onTapMarkButtonWithShareShake(e) {
            if (app.getHasLaunched()) {
                var a = this.data.renderData, t = a.isMark ? 0 : 1, r = this.data.renderData.poiInfo.poiId;
                new PoiModel(r).toggleMark();
                var i = t, o = i ? "已添加到“我-想去的餐厅”" : "已从“我-想去的餐厅”中移除";
                wx.vibrateShort(), wx.showToast({
                    title: o,
                    icon: "none",
                    duration: 2500
                });
                var s = {};
                a.reportData && a.reportData.scene && (s.scene = a.reportData.scene), a.reportData && a.reportData.pageId && (s.pageId = a.reportData.pageId);
                var n = "";
                a.reportData && a.reportData.recId && (n = a.reportData.recId);
                var p = 0;
                a.reportData && a.reportData.recType && (p = a.reportData.recType), new cgi.SimpleRequest("markpoi", {
                    baseRequest: s,
                    poiId: a.poiInfo.poiId,
                    flag: i,
                    referId: a.impressionId,
                    recId: n,
                    recType: p
                }).send(function(e) {
                    app.globalData.pageMe && app.globalData.pageMe.refresh(), app.globalData.pageUserProfile && app.globalData.pageUserProfile.refresh();
                }, function(e) {
                    console.error("markpoi resp failed", e);
                }), this.setData({
                    shouldShowCommentPanel: 1
                }), !1 === ugcStorage.hasMarkAtTimeline() && (ugcStorage.updateMarkAtTimeline(), 
                wx.showModal({
                    content: "你的“想去”将会通知印象作者。",
                    showCancel: !1,
                    confirmText: "知道了"
                })), !ugcStorage.isShareShakeDisable() && i && (ugcStorage.updateShareShakeCount(), 
                this.triggerEvent("shareshake", {
                    isShareShake: i
                }, {}));
            }
        }
    }
});