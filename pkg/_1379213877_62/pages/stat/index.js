function e(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}

function t(e, t) {
    return (e + Array(t).join("0")).slice(0, t);
}

var n = getApp(), a = n.Anim, i = n.request, o = n.dayjs, s = (n.wxp, n.config), r = n.userStore, g = n.configStore, l = n.Event, u = require("../../services/region"), c = require("../../services/health-code.js"), d = s.regionLevel.length, h = (require("../../services/report"), 
require("./locales")), f = !1, m = {
    title: s.regionLevel[0].title,
    data: [ {
        name: s.cityName,
        regionCode: t(s.regionCode, 12)
    } ]
};

a.Page({
    store: function(e) {
        return {
            isLeader: e.user.userInfo.isLeader,
            isAuth: e.user.userInfo.isAuth,
            userInfo: e.user.userInfo,
            wllConfig: e.config.wllConfig
        };
    },
    computed: {},
    data: {
        language: "",
        isvisable: !0,
        pdfUrl: "https://imgcache.gzonline.gov.cn/doc/Index_Instructions.pdf",
        imgSrc: "/images/report/caozuozhiyin.png",
        fileName: "Index Instructions.pdf",
        cityName: s.cityName,
        isShowBg: !0,
        visible: !1,
        value: s.cityName,
        regionCode: t(s.regionCode, 12),
        regionRange: [ m ],
        residentCount: 0,
        communistCount: 0,
        floatingCount: 0,
        endTime: "",
        todayCount: 0,
        confirm: 0,
        suspect: 0,
        cure: 0,
        dead: 0,
        lineVisible: !1,
        singleLine: {
            xAxis: {
                data: []
            },
            series: [ {
                name: "确诊人数",
                data: [],
                label: {
                    normal: {
                        show: !0
                    }
                }
            } ]
        }
    },
    handleRegionChange: function(e) {
        var n = e.detail.value;
        if (console.log("region+++++++++", n), n && n.length > 0) {
            var a = n[n.length - 1].regionCode;
            this.setData({
                regionValue: n,
                value: n[n.length - 1].regionName || n[n.length - 1].name,
                regionCode: a
            }), this.getAffairStat(t(a, 12));
        }
    },
    handleRegionColumnChange: function(e) {
        var t = e.detail, n = t.item, a = t.index;
        a === d - 1 ? this.handleRegionClose() : this.getRegionData(n, a + 1);
    },
    handleOpenRegion: function() {
        this.setData({
            visible: !0,
            regionRange: this.data.regionRange.slice(0, 1)
        });
    },
    handleRegionClose: function(e) {
        this.setData({
            visible: !1
        });
    },
    onShareAppMessage: function() {},
    getChildrenRegionData: function() {
        var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        wx.showLoading(), u.getRegionData(t.regionCode, t.regionList).then(function(t) {
            var a = e.data.regionRange.slice(0, n);
            a[n] = {
                title: s.regionLevel[n].title,
                data: t.map(function(e) {
                    return {
                        name: e.regionName,
                        value: {
                            regionName: e.regionName,
                            regionCode: e.regionCode
                        },
                        regionList: e.regionList
                    };
                })
            }, e.setData({
                regionRange: a
            }, function() {
                return wx.hideLoading();
            });
        }).catch(function(e) {
            return wx.hideLoading();
        });
    },
    getAffairStat: function(t) {
        wx.showLoading();
        var n = this;
        f || (f = !0, i({
            url: "/usercenter/affairStat/detail",
            method: "GET",
            data: {
                regionCode: t
            }
        }).then(function(t) {
            var a;
            wx.hideLoading(), f = !1;
            var i = t.itemList, s = i && i.map(function(e) {
                return e.confirmCaseNum;
            }), r = i && i.map(function(e) {
                return o(e.statTime).format("YYYY/MM/DD");
            }), g = t.statTime ? o(t.statTime).format("YYYY/MM/DD") : o(new Date().getTime()).format("YYYY/MM/DD");
            n.setData((a = {
                residentCount: t.peopleNum || 0,
                communistCount: t.partyNum || 0,
                floatingCount: t.flowNum || 0,
                endTime: g,
                todayCount: t.newCaseNum || 0,
                confirm: t.confirmCaseNum || 0,
                suspect: t.suspectedCaseNum || 0,
                cure: t.cureCaseNum || 0,
                dead: t.outCaseNum || 0,
                lineVisible: i && i.length
            }, e(a, "singleLine.xAxis.data", r || []), e(a, "singleLine.series[0].data", s || []), 
            a));
        }));
    },
    watch: {
        isLeader: function(e) {
            e && !this.data.lineVisible && this.getAffairStat(this.data.regionCode);
        }
    },
    onLoad: function(e) {
        var t = this;
        this.setLanguage(), l.addEventListener("languageChanged", function(e) {
            console.log(e.target), t.setLanguage();
        }, this), Object.keys(this.data.wllConfig).length > 0 ? this.openTipsModal(this.data.wllConfig) : g.fetchWllConfig().then(function(e) {
            e && e.home_notice && e.home_notice.is_open && t.openTipsModal(e);
        });
    },
    onShow: function() {
        wx.setTabBarItem({
            index: 0,
            text: this.data.language.home,
            success: function(e) {},
            fail: function(e) {}
        }), wx.setTabBarItem({
            index: 1,
            text: this.data.language.me
        });
    },
    onPageScroll: function(e) {
        var t = parseInt(e.scrollTop) < 80;
        this.setData({
            isShowBg: t
        });
    },
    openTipsModal: function(e) {
        var t = this, n = e.home_notice || this.data.wllConfig.home_notice;
        console.log(n.text), wx.showModal({
            showCancel: !1,
            confirmText: t.data.language.nextTips,
            title: t.data.language.importantNotice,
            content: t.data.language.text,
            success: function(n) {
                n.cancel ? console.log("您点击了取消") : n.confirm && wx.showModal({
                    showCancel: !0,
                    cancelText: t.data.language.lastOne,
                    confirmText: t.data.language.iknow,
                    title: t.data.language.importantNotice,
                    content: t.data.language.textTwo,
                    success: function(n) {
                        n.cancel ? (console.log("您点击了取消"), t.openTipsModal(e)) : n.confirm;
                    }
                });
            }
        });
    },
    onTapAccess: function(e) {
        var t = this;
        r.checkAuth() && (e.currentTarget.dataset.real ? c.realnameUser(this.data.userInfo.uid).then(function(n) {
            0 == n.isAut ? wx.showModal({
                title: t.data.language.showModal_title,
                content: t.data.language.showModal_content,
                cancelText: t.data.language.showModal_cancelText,
                confirmText: t.data.language.showModal_confirmText,
                confirmColor: "#1890ff",
                success: function(t) {
                    t.cancel || wx.navigateTo({
                        url: "/packages/health-code/pages/realname-submit/index?path=" + e.currentTarget.dataset.url
                    });
                }
            }) : wx.navigateTo({
                url: e.currentTarget.dataset.url
            });
        }) : wx.navigateTo({
            url: e.currentTarget.dataset.url
        }));
    },
    setLanguage: function() {
        var e = wx.T.getLanguage().languageClass;
        this.setData({
            language: "{}" == JSON.stringify(h[e]) ? h["zh-CN"] : h[e]
        }), "zh-CN" !== e ? this.setData({
            isvisable: !1
        }) : this.setData({
            isvisable: !0
        });
    },
    setLanguageTab: function() {
        wx.navigateTo({
            url: "/pages/mine/setting/index"
        });
    }
});