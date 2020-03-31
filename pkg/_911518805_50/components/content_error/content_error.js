var util = require("../../utils/util"), mixinCss = require("../../utils/mixinCss");

Component({
    properties: {
        text: {
            type: String,
            value: "内容获取失败"
        },
        showLink: {
            type: Boolean,
            value: !1
        }
    },
    data: {
        isIpx: util.isIpx(),
        ipxFtPadding: mixinCss.ipxFtPadding
    },
    ready: function ready(e) {
        console.log("error-screen, ready: " + JSON.stringify(e));
    },
    methods: {
        onTapShowRulesDetail: function onTapShowRulesDetail(e) {
            console.log("error-screen, onTapShowRulesDetail");
            wx.navigateTo({
                url: "/pages/article_webview/article_webview?url=" + encodeURIComponent("https://support.weixin.qq.com/cgi-bin/mmsupport-bin/newreadtemplate?t=page/nearby/policy-nearby-dinning#section2")
            });
        }
    }
});