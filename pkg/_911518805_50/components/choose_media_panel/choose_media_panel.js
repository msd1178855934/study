var util = require("../../utils/util");

Component({
    properties: {
        poiName: String,
        showNoPicButton: {
            type: Boolean,
            value: !0
        }
    },
    data: {},
    ready: function ready(t) {
        console.log("choose_media_panel, ready: " + JSON.stringify(t));
        var n = this;
        this.data.wxAnimationIn = wx.createAnimation({
            duration: 300,
            timingFunction: "ease"
        });
        var e = this.properties.showNoPicButton ? 650 : 610, a = util.rpx2px(e);
        setTimeout(function() {
            n.data.wxAnimationIn.translateY(-a).step(), n.setData({
                animationIn: n.data.wxAnimationIn.export()
            });
        }.bind(this), 100);
    },
    methods: {
        hideMask: function hideMask(t) {
            console.log("hideMask: " + JSON.stringify(t)), this.triggerEvent("onhidepanel", {});
        },
        catchtapPanel: function catchtapPanel(t) {
            console.log("catchtapPanel: " + JSON.stringify(t));
        },
        onTapButton: function onTapButton(t) {
            console.log("onTapButton: " + JSON.stringify(t));
            var n = "";
            switch (t.currentTarget.dataset.index) {
              case 0:
                n = "camera";
                break;

              case 1:
                n = "album";
                break;

              case 2:
                n = "noMedia";
                break;

              default:
                n = "cancel";
            }
            this.triggerEvent("onresult", {
                result: n
            }), this.triggerEvent("onhidepanel", {});
        }
    }
});