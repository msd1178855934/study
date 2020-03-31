function e(e, t, a) {
    return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = a, e;
}

var t = getApp(), a = t.Anim, i = (t.request, t.utils, t.dayjs, t.config);

t.wxp;

a.Page({
    store: function(e) {
        return {
            userInfo: e.user.userInfo
        };
    },
    data: {
        chapterLists: [ {
            chapterId: "01",
            chapterName: "个人防护指引",
            sectionsNmber: 9,
            flag: !0,
            imgUrl: "../../images/guidehealth/protection.png",
            sections: [ {
                id: "01",
                desc: "",
                img: "",
                label: "新型冠状病毒传播途径与预防导图",
                path: "/pages/health-guide/index",
                total: 1,
                activeIndex: !1,
                height: 5830
            }, {
                id: "02",
                desc: "",
                img: "",
                label: "密切接触者居家隔离指引",
                path: "/pages/health-guide/index",
                total: 1,
                activeIndex: !1,
                height: 5898
            }, {
                id: "03",
                desc: "",
                img: "",
                label: "密切接触者集中医学观察指引",
                path: "/pages/health-guide/index",
                total: 1,
                activeIndex: !1,
                height: 1978
            }, {
                id: "04",
                desc: "",
                img: "",
                label: "市民新冠肺炎预防控制指引",
                path: "/pages/health-guide/index",
                total: 1,
                activeIndex: !1,
                height: 7468
            }, {
                id: "05",
                desc: "",
                img: "",
                label: "口罩、纸巾使用后的废弃处理指引",
                path: "/pages/health-guide/index",
                total: 1,
                activeIndex: !1,
                height: 3678
            }, {
                id: "06",
                desc: "",
                img: "",
                label: "新冠肺炎防治营养膳食指引",
                path: "/pages/health-guide/index",
                total: 1,
                activeIndex: !1,
                height: 7756
            }, {
                id: "07",
                desc: "",
                img: "",
                label: "公众心理健康指引",
                path: "/pages/health-guide/index",
                total: 1,
                activeIndex: !1,
                height: 1538
            }, {
                id: "08",
                desc: "",
                img: "",
                label: "流行期间公众就医指引",
                path: "/pages/health-guide/index",
                total: 1,
                activeIndex: !1,
                height: 3084
            }, {
                id: "09",
                desc: "",
                img: "",
                label: "市民发热就医指引",
                path: "/pages/health-guide/index",
                total: 1,
                activeIndex: !1,
                height: 3678
            } ]
        }, {
            chapterId: "02",
            chapterName: "个人出行指引",
            sectionsNmber: 5,
            flag: !1,
            imgUrl: "../../images/guidehealth/trip.png",
            sections: [ {
                id: "01",
                desc: "",
                img: "",
                label: "公共场所自我防护措施",
                path: "/pages/health-guide/index",
                total: 1,
                activeIndex: !1,
                height: 1386
            }, {
                id: "02",
                desc: "",
                img: "",
                label: "生鲜市场自我防护措施",
                path: "/pages/health-guide/index",
                total: 1,
                activeIndex: !1,
                height: 1334
            }, {
                id: "03",
                desc: "",
                img: "",
                label: "乘坐公共交通工具自我防护措施 ",
                path: "/pages/health-guide/index",
                total: 1,
                activeIndex: !1,
                height: 1818
            }, {
                id: "04",
                desc: "",
                img: "",
                label: "乘坐私家车自我防护措施",
                path: "/pages/health-guide/index",
                total: 1,
                activeIndex: !1,
                height: 1334
            }, {
                id: "05",
                desc: "",
                img: "",
                label: "办公场所自我防护措施",
                path: "/pages/health-guide/index",
                total: 1,
                activeIndex: !1,
                height: "3722"
            } ]
        }, {
            chapterId: "03",
            chapterName: "家庭、社区指引",
            sectionsNmber: 3,
            flag: !1,
            imgUrl: "../../images/guidehealth/family.png",
            sections: [ {
                id: "01",
                desc: "",
                img: "",
                label: "普通家庭预防新冠肺炎指引",
                path: "/pages/health-guide/index",
                total: 1,
                activeIndex: !1,
                height: 3270
            }, {
                id: "02",
                desc: "",
                img: "",
                label: "普通居家预防新冠肺炎卫生清洁消毒指引",
                path: "/pages/health-guide/index",
                total: 1,
                activeIndex: !1,
                height: 4360
            }, {
                id: "03",
                desc: "",
                img: "",
                label: "已出现病例社区的居民健康防护指引",
                path: "/pages/health-guide/index",
                total: 1,
                activeIndex: !1,
                height: 6496
            } ]
        }, {
            chapterId: "04",
            chapterName: "特殊人群防控指引",
            sectionsNmber: 3,
            flag: !1,
            imgUrl: "../../images/guidehealth/specialGroup.png",
            sections: [ {
                id: "01",
                desc: "",
                img: "",
                label: "学生防控指引",
                path: "/pages/health-guide/index",
                total: 1,
                activeIndex: !1,
                height: 2216
            }, {
                id: "02",
                desc: "",
                img: "",
                label: "孕产妇预防指引",
                path: "/pages/health-guide/index",
                total: 1,
                activeIndex: !1,
                height: 6122
            }, {
                id: "03",
                desc: "",
                img: "",
                label: "疾病流行地区居住旅行人员预防指引",
                path: "/pages/health-guide/index",
                total: 1,
                activeIndex: !1,
                height: 4444
            } ]
        } ],
        bannerPath: i.cdnDomain + "/cos/HealthGuide/banner.png"
    },
    onShow: function() {
        var t = this;
        this.getStorage("activeLaction").then(function(a) {
            var i = Number(a.chapterindex), h = Number(a.sectionindex);
            console.log("sectionindex", h), t.data.chapterLists.forEach(function(a, n) {
                if (n == i) {
                    var d = "chapterLists[" + n + "].flag";
                    t.setData(e({}, d, !0)), a.sections.forEach(function(a, i) {
                        if (h == i) {
                            var d = "chapterLists[" + n + "].sections[" + i + "].activeIndex";
                            t.setData(e({}, d, !0));
                        } else {
                            var s = "chapterLists[" + n + "].sections[" + i + "].activeIndex";
                            t.setData(e({}, s, !1));
                        }
                    });
                } else {
                    var s = "chapterLists[" + n + "].flag";
                    t.setData(e({}, s, !1)), a.sections.forEach(function(a, i) {
                        var h = "chapterLists[" + n + "].sections[" + i + "].activeIndex";
                        t.setData(e({}, h, !1));
                    });
                }
            });
        }).catch(function(e) {});
    },
    onLoad: function() {
        this.setStorage("healthData", this.data.chapterLists).catch(function(e) {
            console.error(e);
        });
    },
    onTapAccess: function(e) {
        var t = e.target.dataset.chapterindex, a = e.target.dataset.sectionindex, i = e.target.dataset.imagheight;
        console.log("dddddw22222222222", e), wx.navigateTo({
            url: "/pages/health-guide-detail/index?chapterindex=" + t + "&sectionindex=" + a + "&imagheight=" + i
        });
    },
    setStorage: function(e, t) {
        return new Promise(function(a, i) {
            wx.setStorage({
                key: e,
                data: t,
                success: function(e) {
                    a(e);
                },
                fail: function(e) {
                    i(e);
                }
            });
        });
    },
    getStorage: function(e) {
        return new Promise(function(t, a) {
            wx.getStorage({
                key: e,
                success: function(e) {
                    t(e.data);
                },
                fail: function(e) {
                    a(e);
                }
            });
        });
    },
    handleShowSection: function(t) {
        var a = this;
        console.log("点击标题", t);
        var i = t.currentTarget.dataset.index;
        this.data.chapterLists.forEach(function(t, h) {
            if (h == i) {
                var n = "chapterLists[" + i + "].flag";
                a.setData(e({}, n, !a.data.chapterLists[i].flag));
            }
        });
    }
});