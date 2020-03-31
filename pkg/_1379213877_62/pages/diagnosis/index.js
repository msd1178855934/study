var a = getApp(), e = a.Anim, t = (a.request, a.utils), n = (a.dayjs, a.config), i = a.wxp, o = require("./locales");

e.Page({
    store: function(a) {
        return {
            userInfo: a.user.userInfo
        };
    },
    data: {
        language: "",
        list: [],
        bannerPath: ""
    },
    onLoad: function() {
        this.fetchData(), this.setLanguage(), this.setData({
            bannerPath: n.cdnDomain + this.data.language.bannerPath
        });
    },
    fetchData: function() {
        var a = this;
        wx.showLoading({
            title: this.data.language.loading,
            mask: !0
        }), i.request({
            url: n.cdnDomain + n[n.env].wenzhenPath + "?t=" + Date.now()
        }).then(function(e) {
            wx.hideLoading();
            var t = e.data.data;
            t && t.length && (t.push({
                id: "guide",
                desc: a.data.language.diagnosisDesc,
                img: "../../images/guidehealth/icon.png",
                label: a.data.language.diagnosisLabel,
                path: "/pages/health-guide/index"
            }), a.setData({
                list: t
            }));
        }).catch(function(e) {
            wx.hideLoading(), wx.showToast({
                title: a.data.language.crowded,
                icon: "none"
            }), console.error(e);
        });
    },
    onTapAccess: function(a) {
        console.log("onTapAccess", a);
        var e = this, n = a.target.dataset.item, i = n.appId, o = n.path, s = n.label;
        i ? wx.navigateToMiniProgram({
            appId: i,
            path: o,
            extraData: {
                fromTitle: "健康",
                fromAppId: "wx2ac2313767a99df9"
            },
            envVersion: "release",
            success: function(a) {
                wx.reportAnalytics("diagnosis_navigate", {
                    title: s,
                    appid: i,
                    path: o,
                    phone: e.data.userInfo.phone || "",
                    openid: wx.getStorageSync("wx-openid") || ""
                }), console.log("打开小程序成功", a);
            }
        }) : a.target.dataset.item.id ? wx.navigateTo({
            url: t.urlJoinParams(o, {
                webUrl: encodeURIComponent(o),
                title: s
            })
        }) : wx.navigateTo({
            url: t.urlJoinParams("/pages/web-view/index", {
                webUrl: encodeURIComponent(o),
                title: s
            })
        });
    },
    setLanguage: function() {
        var a = wx.T.getLanguage().languageClass;
        this.setData({
            language: "{}" == JSON.stringify(o[a]) ? o["zh-CN"] : o[a]
        }), wx.setNavigationBarTitle({
            title: this.data.language.barTitle
        });
    }
});