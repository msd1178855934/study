function e(e, t, a) {
    return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = a, e;
}

var t = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var a = arguments[t];
        for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
    }
    return e;
}, a = getApp(), n = a.Anim, i = a.request, r = a.dayjs, o = a.utils, l = require("../../../../mixin/localesMixin.js"), s = [ {
    label: "编号",
    key: "id"
}, {
    label: "报告状态",
    key: "statusStr"
}, {
    label: "姓名",
    key: "username"
}, {
    label: "性别",
    key: "gender"
}, {
    label: "手机号码",
    key: "phone"
}, {
    label: "证件类型",
    key: "identityTypeStr"
}, {
    label: "证件号码",
    key: "identity"
}, {
    label: "国籍/地区",
    key: "nationStr"
}, {
    label: "户籍所在地",
    key: "domicilePlaceStr"
}, {
    label: "籍贯",
    key: "nativePlace"
}, {
    label: "居住地址",
    key: "address"
}, {
    label: "详细地址",
    key: "addr"
} ], c = [ {
    label: "是否常住广州",
    key: "residentFlagStr"
}, {
    label: "近期是否在广州",
    key: "residentConditionStr"
}, {
    label: "来或返回广州日期",
    key: "returnDate"
}, {
    label: "目前所在地",
    key: "recentRegionName"
}, {
    label: "拟返回广州日期",
    key: "quasiReturnDate"
}, {
    label: "近一个月旅居史",
    key: "travelRegionClassStr"
}, {
    label: "近期接触史",
    key: "socialContactStr"
}, {
    label: "14日内密切接触日期",
    key: "contactDateRecent"
}, {
    label: "14日内感觉接触日期",
    key: "contactDateLike"
}, {
    label: "个人健康状态",
    key: "healthStateStr"
}, {
    label: "症状列表",
    key: "symptomTypeStr"
}, {
    label: "其它症状",
    key: "symptomDscr"
} ], u = [ {
    label: "姓名",
    key: "clueSupplier"
}, {
    label: "联系电话",
    key: "clueSupplierPhone"
} ], d = [ {
    label: "姓名",
    key: "username"
}, {
    label: "性别",
    key: "gender"
}, {
    label: "联系电话",
    key: "phone"
}, {
    label: "居住地址",
    key: "street"
}, {
    label: "详细住址",
    key: "addr"
}, {
    label: "关联车牌",
    key: "clueVehicle"
}, {
    label: "涉事人类型",
    key: "socialContact11Str"
}, {
    label: "来或返回广州日期",
    key: "returnDate"
}, {
    label: "涉事人类型",
    key: "socialContact12Str"
}, {
    label: "来或返回广州日期",
    key: "contactDateRecent"
}, {
    label: "涉事人类型",
    key: "socialContact13Str"
}, {
    label: "来或返回广州日期",
    key: "quasiReturnDate"
}, {
    label: "涉事人类型",
    key: "socialContact14Str"
} ], y = [ {
    label: "反映详细内容",
    key: "symptomDscr"
} ];

n.Page({
    mixins: [ l ],
    store: function(e) {
        return {
            userInfo: e.user.userInfo
        };
    },
    data: {
        locales: require("./locales"),
        test: "888888",
        formData: {
            content: ""
        },
        rules: {
            content: [ {
                type: "required",
                message: "请输入回复内容"
            } ]
        },
        message: {
            addr: "",
            area: "",
            dscr: "",
            id: 0,
            itemList: [],
            phone: "",
            report: "",
            reportName: "",
            reportType: 0,
            status: 0,
            username: ""
        },
        keyMap: s,
        keyMapOther: c,
        reporterKeyMap: u,
        reportedKeyMap: d,
        reportContentKeyMap: y,
        query: {}
    },
    onLoad: function(e) {
        this.setData({
            query: e
        }), this.statusChange(), this.fetchData(e), this.handleTodoType(e.todoType), wx.setNavigationBarTitle({
            title: this.data.language.title
        });
    },
    handleTodoType: function() {
        if ("report" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.data.query.todoType)) {
            var e = this.data.language.keyMap.map(function(e) {
                return "姓名" === e.label ? t({}, e, {
                    label: "涉事人"
                }) : e;
            });
            this.setData({
                keyMap: e
            });
        }
    },
    onChangeForm: function(t) {
        this.setData(e({}, "formData." + t.target.id, t.detail.value));
    },
    fetchData: function(e) {
        var t = this;
        wx.showLoading({
            title: "努力加载中..."
        });
        var a = void 0;
        return console.log("query", e), a = "affair" === e.todoType ? 0 != +e.reportType ? "/usercenter/affair/detail?affairId=" + e.id : "/usercenter/affair/detailForPneumonia?affairId=" + e.id : "/usercenter/report/detailForPneumonia?reportId=" + e.id, 
        i({
            url: a
        }).then(function(e) {
            if (wx.hideLoading(), console.log("getCheckSelfInfo", e), e.identityTypeStr = t.data.language.identityTypeMap[e.identityType], 
            e.personTypeStr = t.data.language.personTypeMap[e.personType], e.username = e.username || "-", 
            e.symptomTypeStr = e.symptomList && e.symptomList.map(function(e) {
                return t.data.language.symptomTypeMap[e];
            }).join(", "), e.socialContact = e.socialContact || "", e.socialContactStr = e.socialContact && e.socialContact.split(",").map(function(e) {
                return t.data.language.socialContactMap[e];
            }).join(", "), e.socialContact) {
                var a = e.socialContact.split(",");
                [ "11", "12", "13", "14" ].map(function(n) {
                    a.indexOf(n) > -1 && (e["socialContact" + n + "Str"] = t.data.language.socialContactMap[n]);
                });
            }
            e.healthState = e.healthState || "", e.healthStateStr = e.healthState && t.data.language.healthStateMap[e.healthState], 
            e.nationStr = t.data.language.nationMap[e.isChinese] || "", e.domicilePlaceStr = t.data.language.domicilePlaceMap[e.domicilePlace] || "", 
            e.residentFlagStr = t.data.language.residentFlagMap[e.residentFlag] || "", e.residentConditionStr = t.data.language.residentConditionMap[e.residentCondition] || "", 
            e.travelRegionClassStr = t.data.language.travelRegionClassMap[e.travelRegionClass] || "", 
            e.returnDate = e.returnDate ? r(e.returnDate).format("YYYY/MM/DD") : "", e.quasiReturnDate = e.quasiReturnDate ? r(e.quasiReturnDate).format("YYYY/MM/DD") : "", 
            e.contactDateRecent = e.contactDateRecent ? r(e.contactDateRecent).format("YYYY/MM/DD") : "", 
            e.contactDateLike = e.contactDateLike ? r(e.contactDateLike).format("YYYY/MM/DD") : "", 
            e.avatarKey = e.avatarKey, e.recentInHubeiStr = t.data.language.booleanMap[e.recentInHubei], 
            e.itemList && e.itemList.forEach(function(e) {
                e.commitTime = e.commitTime && r(e.commitTime).format("YYYY/MM/DD HH:mm"), e.commiterName = e.commiterName || "管理员";
            }), e.city && "zh-CN" !== wx.T.getLanguage().languageClass && (e.city = "Guang Zhou"), 
            e.address = e.city && e.area && e.street && "" + e.city + e.area + e.street + e.community, 
            e.statusStr = t.data.language.statusMap[e.status], e.identity = e.identity && o.hideIdCard(e.identity), 
            e.gender = t.data.language.sexMap[e.gender], 1 == e.residentCondition && (e.travelRegionClassStr = ""), 
            t.setData({
                message: e
            }), console.log("message", t.data.message);
        }).catch(function(e) {
            wx.hideLoading(), console.log("err", e);
        });
    },
    handleTodoTap: function(e) {
        var t = e.currentTarget.dataset.url;
        wx.navigateTo({
            url: t
        });
    },
    statusChange: function() {
        switch (this.data.message.status) {
          case "warn":
            this.setData({
                statusColor: "#f13939"
            });
            break;

          case "wait":
            this.setData({
                statusColor: "#009E7E"
            });
            break;

          case "success":
            this.setData({
                statusColor: "#1DC350"
            });
        }
    },
    tabChange: function(e) {
        this.setData({
            activeKey: e.detail.value.key
        });
    },
    onTapReply: function(e) {
        var t = this;
        console.log(e);
        var a = e.detail, n = a.validStatus, r = a.value;
        n && (wx.showLoading({
            title: "努力加载中..."
        }), i({
            url: "/usercenter/affair/reply",
            method: "POST",
            data: {
                affairId: this.data.query.id,
                content: r.content
            }
        }).then(function() {
            wx.hideLoading(), t.setData({
                "formData.content": ""
            }), t.fetchData(t.data.query);
        }).catch(function(e) {
            wx.hideLoading();
        }));
    },
    onTapDone: function() {
        var e = this;
        wx.showLoading({
            title: "努力加载中..."
        }), this.data.formData.content ? i({
            url: "/usercenter/affair/finish",
            method: "POST",
            data: {
                affairId: this.data.query.id,
                content: this.data.formData.content
            }
        }).then(function() {
            wx.hideLoading(), e.setData({
                "formData.content": ""
            }), e.fetchData(e.data.query);
        }).catch(function(e) {
            wx.hideLoading();
        }) : wx.showToast({
            title: "请输入回复内容"
        });
    },
    handleTap: function() {
        console.log(1);
    },
    clickImg: function(e) {
        var t = e.currentTarget.dataset.imagesrc;
        wx.previewImage({
            urls: [ t ],
            current: "",
            success: function(e) {},
            fail: function(e) {},
            complete: function(e) {}
        });
    },
    onTapAccess: function() {
        var e = this.data.message.clueType || 0, t = "";
        t = 1 == e ? "/pages/report/inform/index" : 2 == e ? "/pages/report/index/index?type=2" : "/pages/report/index/index?type=1", 
        wx.navigateTo({
            url: t
        });
    }
});