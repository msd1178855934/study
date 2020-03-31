var kitchenStorage = require("../../utils/kitchenStorage"), util = require("../../utils/util");

Page({
    data: {
        clientVersion: "0x" + kitchenStorage.getClientVersion().toString(16),
        sourceArray: [ "腾讯地图", "S.P.A." ],
        isIpx: util.isIpx(),
        hasLabSwitch: !1,
        labSwitchValue: !0
    },
    onLoad: function onLoad(t) {
        if (console.log("kitchenStorage.getSource() = ", kitchenStorage.getSource()), util.canUseGetAndSetLabInfoAPI()) {
            var e = this;
            wx.getLabInfo({
                labId: "labs_nearbylife",
                success: function success(t) {
                    if (console.log("labInfo: " + JSON.stringify(t)), t.exist) {
                        var i = !1;
                        t.enabled && (i = !0), e.setData({
                            hasLabSwitch: !0,
                            labSwitchValue: i
                        });
                    }
                }
            });
        }
        this.setData({
            sourceArrayIndex: kitchenStorage.getSource(),
            currentTime: kitchenStorage.getCurrentTime(),
            priceLevel: null === kitchenStorage.getPriceLevel() ? "" : "" + kitchenStorage.getPriceLevel(),
            poiLocationRadius: kitchenStorage.getPoiLocationRadius(),
            shouldShowHeadImage: kitchenStorage.getShouldShowHeadImage(),
            shouldUseGreyServer: kitchenStorage.getShouldUseGreyServer(),
            shouldLocateDefault: kitchenStorage.getShouldLocateDefault(),
            shouldShowStoreAppEntry: kitchenStorage.getShouldShowStoreAppEntry(),
            defaultLocationLatitude: kitchenStorage.getDefaultLocationLatitude(),
            defaultLocationLongitude: kitchenStorage.getDefaultLocationLongitude(),
            mediaMaxDuration: kitchenStorage.getMediaMaxDuration(),
            shouldUsePoiTestInfo: kitchenStorage.getShouldUsePoiTestInfo(),
            testPoiLocationLatitude: kitchenStorage.getTestPoiLocationLatitude(),
            testPoiLocationLongitude: kitchenStorage.getTestPoiLocationLongitude(),
            testPoiName: kitchenStorage.getTestPoiName()
        });
    },
    onReady: function onReady() {},
    onShow: function onShow() {},
    onHide: function onHide() {},
    onUnload: function onUnload() {},
    bindinputClientVersion: function bindinputClientVersion(t) {
        try {
            kitchenStorage.setClientVersion(parseInt(t.detail.value));
        } catch (t) {
            console.error("wrong client version", t.detail.value);
        }
    },
    bindPickerChange: function bindPickerChange(t) {
        this.setData({
            sourceArrayIndex: t.detail.value
        }), 0 == t.detail.value ? kitchenStorage.setSource(0) : kitchenStorage.setSource(1);
    },
    bindinputCurrentTime: function bindinputCurrentTime(t) {
        var e = t.detail.value;
        kitchenStorage.setCurrentTime(e.trim());
    },
    bindinputPriceLevel: function bindinputPriceLevel(t) {
        var e = t.detail.value;
        "" === e.trim() ? kitchenStorage.setPriceLevel(null) : kitchenStorage.setPriceLevel(+e.trim());
    },
    bindconfirmPoiLocationRadius: function bindconfirmPoiLocationRadius(t) {
        console.log("bindconfirmPoiLocationRadius, e: " + JSON.stringify(t));
        var e = t.detail.value;
        this.changePoiLocationRadius(e);
    },
    bindblurPoiLocationRadius: function bindblurPoiLocationRadius(t) {
        console.log("bindblurPoiLocationRadius, e: " + JSON.stringify(t));
        var e = t.detail.value;
        this.changePoiLocationRadius(e);
    },
    changePoiLocationRadius: function changePoiLocationRadius(t) {
        if ("" == (t = t.trim()) || !util.isNumeric(t)) return util.toast("请输入正整数"), void this.setData({
            poiLocationRadius: kitchenStorage.getPoiLocationRadius()
        });
        var e = parseInt(t);
        if (e <= 0) return util.toast("请输入正整数"), void this.setData({
            poiLocationRadius: kitchenStorage.getPoiLocationRadius()
        });
        kitchenStorage.setPoiLocationRadius(e);
    },
    bindchangeShouldShowHeadImage: function bindchangeShouldShowHeadImage(t) {
        t.detail.value ? kitchenStorage.setShouldShowHeadImage(1) : kitchenStorage.setShouldShowHeadImage(0);
    },
    bindChangeShouldShowStoreAppEntry: function bindChangeShouldShowStoreAppEntry(t) {
        t.detail.value ? kitchenStorage.setShouldShowStoreAppEntry(1) : kitchenStorage.setShouldShowStoreAppEntry(0);
    },
    bindchangeShouldUseGreyServer: function bindchangeShouldUseGreyServer(t) {
        t.detail.value ? kitchenStorage.setShouldUseGreyServer(1) : kitchenStorage.setShouldUseGreyServer(0);
    },
    bindchangeShouldLocateDefault: function bindchangeShouldLocateDefault(t) {
        var e = !1;
        t.detail.value ? (kitchenStorage.setShouldShowLocateDefault(1), e = !0) : kitchenStorage.setShouldShowLocateDefault(0), 
        this.setData({
            shouldLocateDefault: e
        });
    },
    bindcustomnavigationback: function bindcustomnavigationback() {
        wx.reLaunch({
            url: "/pages/friends_timeline/friends_timeline"
        });
    },
    bindtapDebug: function bindtapDebug() {
        wx.setEnableDebug({
            enableDebug: !0
        });
    },
    bindtapUnDebug: function bindtapUnDebug() {
        wx.setEnableDebug({
            enableDebug: !1
        });
    },
    bindtapOpenSetting: function bindtapOpenSetting() {
        wx.openSetting({
            success: function success(t) {
                console.log(t.authSetting);
            }
        });
    },
    bindchangeLabSwitchValue: function bindchangeLabSwitchValue(t) {
        console.log("bindchangeLabSwitchValue: " + JSON.stringify(t));
        var e = t.detail.value;
        util.canUseGetAndSetLabInfoAPI() && wx.setLabInfo({
            labId: "labs_nearbylife",
            enabled: e,
            success: function success(t) {
                console.log("setLabInfo, success: " + JSON.stringify(t));
            },
            fail: function fail(t) {
                console.error("setLabInfo, failed: " + JSON.stringify(t));
            }
        });
    },
    defaultLocationLatitudeFinishInput: function defaultLocationLatitudeFinishInput(t) {
        var e;
        return "" != (e = t.detail.value.trim()) && util.isNumeric(e) ? (e = parseFloat(e)) < -90 || e > 90 ? (util.toast("请输入有效的纬度值"), 
        void this.setData({
            defaultLocationLatitude: kitchenStorage.getDefaultLocationLatitude()
        })) : (kitchenStorage.setDefaultLocationLatitude(e), void this.setData({
            defaultLocationLatitude: e
        })) : (util.toast("请输入数字"), void this.setData({
            defaultLocationLatitude: kitchenStorage.getDefaultLocationLatitude()
        }));
    },
    defaultLocationLongitudeFinishInput: function defaultLocationLongitudeFinishInput(t) {
        var e;
        return "" != (e = t.detail.value.trim()) && util.isNumeric(e) ? (e = parseFloat(e)) < -180 || e > 180 ? (util.toast("请输入有效的经度值"), 
        void this.setData({
            defaultLocationLongitude: kitchenStorage.getDefaultLocationLongitude()
        })) : (kitchenStorage.setDefaultLocationLongitude(e), void this.setData({
            defaultLocationLongitude: e
        })) : (util.toast("请输入数字"), void this.setData({
            defaultLocationLongitude: kitchenStorage.getDefaultLocationLongitude()
        }));
    },
    bindconfirmMediaMaxDuration: function bindconfirmMediaMaxDuration(t) {
        console.log("bindconfirmMediaMaxDuration, e: " + JSON.stringify(t));
        var e = t.detail.value;
        this.changeMediaMaxDuration(e);
    },
    bindblurMediaMaxDuration: function bindblurMediaMaxDuration(t) {
        console.log("bindblurMediaMaxDuration, e: " + JSON.stringify(t));
        var e = t.detail.value;
        this.changeMediaMaxDuration(e);
    },
    changeMediaMaxDuration: function changeMediaMaxDuration(t) {
        if ("" == (t = t.trim()) || !util.isNumeric(t)) return wx.showToast({
            title: "请输入正整数",
            icon: "none",
            duration: 2e3
        }), void this.setData({
            mediaMaxDuration: kitchenStorage.getMediaMaxDuration()
        });
        var e = parseInt(t);
        if (e <= 0 || e > 30) return wx.showToast({
            title: "请输入 30 以下的正整数",
            icon: "none",
            duration: 2e3
        }), void this.setData({
            mediaMaxDuration: kitchenStorage.getMediaMaxDuration()
        });
        kitchenStorage.setMediaMaxDuration(e);
    },
    testPoiLocationLatitudeFinishInput: function testPoiLocationLatitudeFinishInput(t) {
        var e;
        return "" != (e = t.detail.value.trim()) && util.isNumeric(e) ? (e = parseFloat(e)) < -90 || e > 90 ? (util.toast("请输入有效的纬度值"), 
        void this.setData({
            testPoiLocationLatitude: kitchenStorage.getTestPoiLocationLatitude()
        })) : (kitchenStorage.setTestPoiLocationLatitude(e), void this.setData({
            testPoiLocationLatitude: e
        })) : (util.toast("请输入数字"), void this.setData({
            testPoiLocationLatitude: kitchenStorage.getTestPoiLocationLatitude()
        }));
    },
    testPoiLocationLongitudeFinishInput: function testPoiLocationLongitudeFinishInput(t) {
        var e;
        return "" != (e = t.detail.value.trim()) && util.isNumeric(e) ? (e = parseFloat(e)) < -180 || e > 180 ? (util.toast("请输入有效的经度值"), 
        void this.setData({
            testPoiLocationLongitude: kitchenStorage.getTestPoiLocationLongitude()
        })) : (kitchenStorage.setTestPoiLocationLongitude(e), void this.setData({
            testPoiLocationLongitude: e
        })) : (util.toast("请输入数字"), void this.setData({
            testPoiLocationLongitude: kitchenStorage.getTestPoiLocationLongitude()
        }));
    },
    testPoiNameFinishInput: function testPoiNameFinishInput(t) {
        var e = t.detail.value.trim();
        kitchenStorage.setTestPoiName(e), this.setData({
            testPoiName: e
        });
    },
    bindchangeShouldUsePoiTestInfo: function bindchangeShouldUsePoiTestInfo(t) {
        var e = !1;
        t.detail.value ? (kitchenStorage.setShouldUsePoiTestInfo(1), e = !0) : kitchenStorage.setShouldUsePoiTestInfo(0), 
        this.setData({
            shouldUsePoiTestInfo: e
        });
    }
});