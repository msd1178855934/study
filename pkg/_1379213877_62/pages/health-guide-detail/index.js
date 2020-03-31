var t = getApp().config;

require("./locales");

Page({
    data: {
        language: "",
        title: "",
        chapter: "",
        chapterindex: "",
        sectionindex: "",
        images: [],
        active: !0,
        healthData: []
    },
    onLoad: function(t) {
        var e = this;
        this.getStorage("healthData").then(function(n) {
            e.setData({
                healthData: n
            }), e.getChapter(t);
        }).catch(function(t) {
            console.error(t);
        });
        var n = {
            chapterindex: t.chapterindex,
            sectionindex: t.sectionindex
        };
        this.setStorage("activeLaction", n).catch(function(t) {
            console.error(t);
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    showButton: function() {
        this.setData({
            active: !this.data.active
        });
    },
    prevIcon: function() {
        var t = this.data.chapterindex, e = this.data.sectionindex, n = this.data.healthData;
        0 != t ? (0 != e ? e-- : e = n[--t].sections.length - 1, wx.redirectTo({
            url: "/pages/health-guide-detail/index?chapterindex=" + t + "&sectionindex=" + e
        })) : 0 != e ? (e--, wx.redirectTo({
            url: "/pages/health-guide-detail/index?chapterindex=" + t + "&sectionindex=" + e
        })) : wx.showToast({
            icon: "none",
            title: "前面没有了～"
        });
        var i = {
            chapterindex: t,
            sectionindex: e
        };
        this.setStorage("activeLaction", i).catch(function(t) {
            console.error(t);
        });
    },
    nextIcon: function() {
        var t = this.data.chapterindex, e = this.data.sectionindex, n = this.data.healthData;
        t != n.length - 1 ? (e != n[t].sections.length - 1 ? e++ : (t++, e = 0), wx.redirectTo({
            url: "/pages/health-guide-detail/index?chapterindex=" + t + "&sectionindex=" + e
        })) : e != n[t].sections.length - 1 ? (e++, wx.redirectTo({
            url: "/pages/health-guide-detail/index?chapterindex=" + t + "&sectionindex=" + e
        })) : wx.showToast({
            icon: "none",
            title: "已经是最后一节了～"
        });
        var i = {
            chapterindex: t,
            sectionindex: e
        };
        console.log("存当前处在哪一张的哪一节", i), this.setStorage("activeLaction", i).catch(function(t) {
            console.error(t);
        });
    },
    setStorage: function(t, e) {
        return new Promise(function(n, i) {
            wx.setStorage({
                key: t,
                data: e,
                success: function(t) {
                    n(t);
                },
                fail: function(t) {
                    i(t);
                }
            });
        });
    },
    getStorage: function(t) {
        return new Promise(function(e, n) {
            wx.getStorage({
                key: t,
                success: function(t) {
                    e(t.data);
                },
                fail: function(t) {
                    n(t);
                }
            });
        });
    },
    getChapter: function(e) {
        var n = e.chapterindex, i = e.sectionindex, a = e.imagheight, o = this.data.healthData, c = [];
        c.push({
            src: t.cdnDomain + "/cos/MutliHealthGuide/" + o[n].chapterId + o[n].sections[i].id + ".jpg",
            show: !1,
            imageheight: a
        }), this.setData({
            images: c,
            chapterindex: n,
            sectionindex: i
        });
    },
    setLanguage: function() {
        wx.setNavigationBarTitle({
            title: this.data.language.barTitle
        });
    }
});