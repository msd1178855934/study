function e(e, t, a) {
    return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = a, e;
}

function t() {
    return {
        openid: wx.getStorageSync("wx-openid"),
        sessionid: wx.getStorageSync("wx-sessionid")
    };
}

function a(e) {
    return /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(e);
}

function n(e) {
    var t = [];
    return e.map(function(e) {
        t.push({
            name: e.name,
            value: e.name
        });
    }), t;
}

function i(e) {
    return e ? g(e).format("YYYY-MM-DD") : e;
}

function o() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t = e.length, a = "";
    return 15 === t ? a = "19".concat(e.substr(6, 6)) : 18 === t && (a = e.substr(6, 8)), 
    a;
}

function r() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t = e.length, a = "";
    return 15 == t ? a = parseInt(e.substr(14, 1)) % 2 == 1 ? "男" : "女" : t >= 17 && (a = parseInt(e.substr(16, 1)) % 2 == 1 ? "男" : "女"), 
    a;
}

var s, l = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var a = arguments[t];
        for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
    }
    return e;
}, c = getApp(), d = c.Anim, u = (c.Event, c.resetTab), h = c.config, g = c.dayjs, f = c.request, m = c.systemInfo, D = c.userStore, y = require("../../../utils/util").chooseLocation, p = require("../../../services/report"), v = require("../../../services/region"), C = require("../../../services/health-code.js"), F = require("./locales");

d.Page({
    store: function(e) {
        return {
            userInfo: e.user.userInfo
        };
    },
    data: {
        language: "",
        pdfUrl: "https://imgcache.gzonline.gov.cn/doc/Report_Health_Condition_Instructions.pdf",
        imgSrc: "/images/report/caozuozhiyin.png",
        avatarUrl: "",
        avatarFlag: !1,
        fileName: "Report Health Condition Instructions.pdf",
        currentType: "",
        regionData: [],
        today: g().format("YYYY-MM-DD"),
        endToday: g().subtract(1, "day").format("YYYY-MM-DD"),
        startDay: g().subtract(130, "year").format("YYYY-MM-DD"),
        halfMonthAgo: g().subtract(15, "day").format("YYYY-MM-DD"),
        cityName: h.cityName,
        headers: {},
        activeTab: "self",
        showHBCityPicker: !1,
        showRegionPicker: !1,
        uploadUrl: h.domain + "/report/uploadfile",
        identityInputType: "idcard",
        disableDetail: !0,
        provinceIncludes: [ "中国香港", "广东省" ],
        regionRange: [],
        nativePlaceRange: [],
        residentPlaceItems: [],
        showNativePlacePicker: !1,
        agree: !1,
        selfForm: {
            username: "",
            gender: "",
            isChinese: 1,
            nativePlace: "",
            domicilePlace: "",
            phone: "",
            birthday: "",
            identity: "",
            identityType: 1,
            street: "",
            addr: "",
            residentFlag: "",
            residentCondition: "",
            returnDate: "",
            recentRegionName: "",
            travelRegionClass: "",
            socialContact: "",
            socialContact1: "",
            socialContact2: "",
            quasiReturnDate: "",
            contactDateRecent: "",
            contactDateLike: "",
            healthState: "",
            symptoms: [],
            symptomDscr: "",
            regionData: [],
            clueType: 0,
            avatarKey: ""
        },
        validateType: {
            symptomDscrLength: function(e) {
                return e.length <= 10;
            },
            contentLength: function(e) {
                return e.length > 10;
            },
            titleLength: function(e) {
                return e.length <= 20;
            },
            checkBirthday: function(e) {
                if (!birthday) return !1;
                var t = g().diff(g(e).format("YYYY-MM-DD"), "year");
                return t >= 0 && t <= 130;
            }
        }
    },
    bindSelectData: function(e) {
        this.setData({
            "selfForm.addr": e.detail.address
        });
    },
    watch: (s = {
        selfForm: function(e) {
            console.log("selfForm Data Change", e);
        },
        "selfForm.identityType": function(e) {
            var t = this.data.selfFormRules || [], a = "text";
            switch (parseInt(e)) {
              case 1:
                a = "idcard", t.identity[1] = {
                    type: "id",
                    message: this.data.language.checkId
                };
                break;

              case 5:
                t.identity[1] = {
                    type: "twCome",
                    message: this.data.language.checkHmHid
                };
                break;

              case 6:
              case 7:
                t.identity[1] = {
                    type: "hmHid",
                    message: this.data.language.checkHmHid
                };
                break;

              default:
                t.identity = t.identity.slice(0, 1);
            }
            this.setData({
                identityInputType: a,
                selfFormRules: t
            });
        },
        "selfForm.symptoms": function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t = -1 === e.indexOf("15"), a = e.slice(-1)[0], n = !1;
            if (1 != a ? e.forEach(function(t, a) {
                1 == t && (e.splice(a, 1), n = !0);
            }) : e.forEach(function(t, a) {
                1 != t && (e = [ "1" ], n = !0);
            }), 11 == a) {
                var i = e.indexOf("12");
                i > -1 && (e.splice(i, 1), n = !0);
            } else if (12 == a) {
                var o = e.indexOf("11");
                o > -1 && (e.splice(o, 1), n = !0);
            }
            n && this.setData({
                "selfForm.symptoms": e
            });
            var r = [];
            t || (r = [ {
                type: "required",
                message: this.data.language.checRequired
            }, {
                type: "symptomDscrLength",
                message: this.data.language.symptomDscrLength
            } ]), this.setData({
                disableDetail: t,
                "selfFormRules.symptomDscr": r
            });
        },
        "selfForm.birthday": function(e) {
            try {
                if (e && g(g(e).format("YYYY-MM-DD")).isValid()) {
                    var t = o(e);
                    if (g().diff(g(e).format("YYYY-MM-DD"), "year") > 130 || t && Math.abs(g(t).format("YYYYMMDD").diff(g(e).format("YYYY-MM-DD"), "year") > 1)) {
                        var a = this.data.selfFormRules || [];
                        a.birthday.push({
                            type: "checkBirthday",
                            message: this.data.language.checkBirthday
                        }), this.setData({
                            selfFormRules: a
                        });
                    }
                }
            } catch (e) {}
        },
        "selfForm.residentCondition": function(e) {
            var t = [];
            1 !== parseInt(e) && (t = [ {
                type: "required",
                message: this.data.language.requiredmonthTraveling
            } ]), this.setData({
                "selfFormRules.travelRegionClass": t
            });
        },
        "selfForm.healthState": function(e) {
            var t = [];
            t = [ {
                type: "required",
                message: this.data.language.selectSymptoms
            } ], this.setData({
                "selfFormRules.symptoms": t
            });
        }
    }, e(s, "selfForm.residentCondition", function(e) {
        var t = [];
        1 !== parseInt(e) && (t = [ {
            type: "required",
            message: this.data.language.requiredmonthTraveling
        } ]), this.setData({
            "selfFormRules.travelRegionClass": t
        });
    }), e(s, "selfForm.socialContact", function(e) {
        console.log("selfForm.socialContact", e);
    }), s),
    computed: {
        showContactDateRecent: function() {
            return this.data.selfForm.socialContact.length > 0 && this.data.selfForm.socialContact.indexOf("1") > -1;
        },
        showContactDateLike: function() {
            return this.data.selfForm.socialContact.length > 0 && this.data.selfForm.socialContact.indexOf("2") > -1;
        }
    },
    onLoad: function(e) {
        var a = this, i = wx.T.getLanguage().languageClass;
        if (this.setData({
            language: "{}" == JSON.stringify(F[i]) ? F["zh-CN"] : F[i],
            selfFormRules: "{}" == JSON.stringify(F[i]) ? F["zh-CN"].selfFormRules : F[i].selfFormRules
        }), "1" == e.type) {
            var o = JSON.parse(JSON.stringify(this.data.selfFormRules)) || [];
            delete o.avatarKey, this.setData({
                selfFormRules: o
            });
        } else this.setData({
            selfFormRules: this.data.selfFormRules
        });
        if (this.setData({
            currentType: e.type,
            nativePlaceRange: n(this.data.language.PROVINCE_LISTS),
            residentPlaceItems: n(this.data.language.recentRegion_LISTS)
        }), 1 == e.type || 2 == e.type) {
            var r = [ "健康自查上报", this.data.language.myHealth, this.data.language.heHealth ];
            console.log("title[options.type]", r[e.type]), wx.setNavigationBarTitle({
                title: r[e.type]
            }), this.setData({
                "selfForm.clueType": 2 == e.type ? 2 : 0
            });
        }
        e.target && this.setData({
            activeTab: e.target
        }), e.isFromBuy && (this.isFromBuy = parseInt(e.isFromBuy)), this.getRegionData(), 
        this.setData({
            headers: t()
        });
        var s = null;
        s = "1" == e.type ? "fromDataKey" : "fromOtherKey", this.getStorage(s).then(function(t) {
            "1" == e.type ? a.setData({
                regionData: t.regionData,
                disableDetail: t.disableDetail,
                "selfForm.gender": t.formData.gender,
                "selfForm.username": t.formData.username,
                "selfForm.isChinese": t.formData.isChinese,
                "selfForm.domicilePlace": t.formData.domicilePlace,
                "selfForm.nativePlace": t.formData.nativePlace,
                "selfForm.phone": t.formData.phone,
                "selfForm.identityType": t.formData.identityType,
                "selfForm.identity": t.formData.identity,
                "selfForm.birthday": t.formData.birthday,
                "selfForm.street": t.formData.street,
                "selfForm.addr": t.formData.addr,
                "selfForm.residentFlag": t.formData.residentFlag,
                "selfForm.residentCondition": t.formData.residentCondition,
                "selfForm.returnDate": t.formData.returnDate,
                "selfForm.recentRegionName": t.formData.recentRegionName,
                "selfForm.quasiReturnDate": t.formData.quasiReturnDate,
                "selfForm.travelRegionClass": t.formData.travelRegionClass,
                "selfForm.socialContact1": t.formData.socialContact1,
                "selfForm.contactDateRecent": t.formData.contactDateRecent,
                "selfForm.socialContact2": t.formData.socialContact2,
                "selfForm.contactDateLike": t.formData.contactDateLike,
                "selfForm.healthState": t.formData.healthState,
                "selfForm.symptoms": t.formData.symptoms,
                "selfForm.symptomDscr": t.formData.symptomDscr
            }) : a.setData({
                regionData: t.regionData,
                "selfForm.street": t.formData.street,
                "selfForm.addr": t.formData.addr
            });
        }).catch(function(e) {
            console.log("user data error", e);
        });
    },
    onShow: function() {
        this.setData({
            avatarFlag: this.data.avatarFlag
        }), D.fetchUserInfo().then(function(e) {
            e.uid && C.realnameUser(e.uid).then(function(e) {
                0 === e.isAut && wx.showModal({
                    title: "未实名",
                    content: "是否需要实名认证？",
                    confirmColor: "#1890ff",
                    success: function(e) {
                        e.confirm ? wx.navigateTo({
                            url: "/packages/health-code/pages/realname-submit/index?path=/packages/health-code/pages/report-health/index"
                        }) : e.cancel && wx.reLaunch({
                            url: "/pages/stat/index"
                        });
                    }
                });
            });
        });
    },
    setStorage: function(e, t) {
        return new Promise(function(a, n) {
            wx.setStorage({
                key: e,
                data: t,
                success: function(e) {
                    a(e);
                },
                fail: function(e) {
                    n(e);
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
    onShareAppMessage: function() {},
    handleIdentityChange: function(e) {
        if (a(e.detail.value)) {
            var t = r(e.detail.value), n = o(e.detail.value);
            n && g(g(n).format("YYYYMMDD")).isValid() && g().diff(g(n).format("YYYYMMDD"), "year") <= 130 && this.setData({
                "selfForm.birthday": g(n).format("YYYY-MM-DD")
            }), this.setData({
                "selfForm.gender": t,
                "selfForm.identity": e.detail.value
            });
        } else this.setData({
            "selfForm.identity": e.detail.value
        });
    },
    handleTabChange: function(e) {
        this.setData({
            activeTab: e.detail.value.key
        });
    },
    handleFormChange: function(t) {
        var a = t.target, n = a.dataset, i = a.id;
        this.setData(e({}, n.form + "." + i, t.detail.value));
    },
    handleNationChange: function(e) {
        this.setData({
            "selfForm.isChinese": e.detail.value ? 1 : 0
        });
    },
    handleSocialContact1Change: function(e) {
        this.setData({
            "selfForm.socialContact1": e.detail.value ? "1" : ""
        });
    },
    handleSocialContact2Change: function(e) {
        this.setData({
            "selfForm.socialContact2": e.detail.value ? "2" : ""
        });
    },
    handleGetLocation: function(t) {
        var a = this;
        y().then(function(n) {
            var i;
            console.log(n);
            var o = t.target, r = o.dataset, s = o.id;
            a.setData((i = {}, e(i, r.form + "." + s, n.address), e(i, r.form + ".lng", n.longitude), 
            e(i, r.form + ".lat", n.latitude), i), u);
        });
    },
    handleHBPickerChange: function(e) {
        this.setData({
            "selfForm.hubeiLivingCity": e.detail.value[1].name,
            "selfForm.hubeiLivingCityCode": e.detail.value[1].code
        });
    },
    handleNativePlaceChange: function(e) {
        this.setData({
            "selfForm.nativePlace": e.detail.value[0].name
        });
    },
    handleHBPickerOpen: function() {
        this.setData({
            showHBCityPicker: !0
        });
    },
    handleHBPickerClose: function() {
        this.setData({
            showHBCityPicker: !1
        });
    },
    handleNativePlaceClose: function() {
        this.setData({
            showNativePlacePicker: !1
        });
    },
    handleNativePlaceOpen: function(e) {
        this.setData({
            showNativePlacePicker: !0
        });
    },
    getRegionData: function() {
        var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        wx.showLoading(), v.getRegionData(t.regionCode, t.regionList).then(function(t) {
            var n = e.data.regionRange.slice(0, a);
            n[a] = {
                title: 0 === a ? e.data.language.selectRegion.area : 1 === a ? e.data.language.selectRegion.street : e.data.language.selectRegion.community,
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
                regionRange: n
            }, function() {
                return wx.hideLoading();
            });
        }).catch(function(e) {
            return wx.hideLoading();
        });
    },
    handleOpenRegion: function(e) {
        this.regionPickerForm = e.target.dataset.form, this.setData({
            showRegionPicker: !0,
            regionRange: this.data.regionRange.slice(0, 1)
        });
    },
    handleRegionChange: function(t) {
        var a = t.detail.value;
        if (3 === a.length) {
            var n;
            this.setData((n = {}, e(n, this.regionPickerForm + ".regionData", a), e(n, this.regionPickerForm + ".street", a.map(function(e) {
                return e.regionName;
            }).join("")), n));
        }
    },
    handleRegionColumnChange: function(e) {
        var t = e.detail, a = t.item, n = t.index;
        2 === n ? this.handleRegionClose() : this.getRegionData(a, n + 1);
    },
    handleRegionClose: function() {
        this.setData({
            showRegionPicker: !1
        });
    },
    handleAgreeChange: function() {
        this.setData({
            agree: !this.data.agree
        });
    },
    getPhoneNumber: function(e) {
        var t = this, a = e.detail, n = a.iv, i = a.encryptedData;
        if (console.log(1, n, i), n && i) return wx.showLoading({
            title: this.data.language.loding
        }), f({
            url: "/wll/account/getphone",
            method: "POST",
            data: {
                encryptedData: i,
                iv: n
            }
        }).then(function(e) {
            wx.hideLoading(), console.log("res", e), e && e.phone && t.setData({
                "selfForm.phone": e.phone
            });
        }).catch(function(e) {
            wx.hideLoading(), console.error(e);
        });
        console.error("用户拒绝授权登录");
    },
    choseAvatar: function(e) {
        wx.chooseImage({
            count: 1,
            sizeType: [ "original", "compressed" ],
            sourceType: e,
            success: function(e) {
                var t = e.tempFilePaths;
                wx.navigateTo({
                    url: "/pages/cropper-avatar/index?imageSrc=" + t + "&fromPage=memberInfo"
                });
            }
        });
    },
    uploadAvatar: function() {
        var e = this;
        wx.showActionSheet({
            itemList: [ "拍照", "从手机相册选择" ],
            success: function(t) {
                0 == t.tapIndex ? e.choseAvatar([ "camera" ]) : e.choseAvatar([ "album" ]), console.log("索引拍照从手机相册选择，", t.tapIndex);
            },
            fail: function(e) {
                console.log(e.errMsg);
            }
        });
    },
    handleSelfSubmit: function(e) {
        var t = this;
        if (e.detail.validStatus) {
            var a = l({}, e.detail.value);
            a.systemInfo = m;
            var n = a.regionData;
            0 != n.length && void 0 != n || (n = this.data.regionData);
            var o = {};
            o.formData = a, o.disableDetail = this.data.disableDetail, o.regionData = n, "1" == this.data.currentType ? this.setStorage("fromDataKey", o).catch(function(e) {
                console.error(e);
            }) : "2" == this.data.currentType && this.setStorage("fromOtherKey", o).catch(function(e) {
                console.error(e);
            }), a.recentInHubei = a.recentInHubei ? 1 : 0;
            try {
                0 != n.length && (a.areaCode = n[0].regionCode, a.street = n[1].regionName, a.streetCode = n[1].regionCode, 
                a.community = n[2].regionName, a.communityCode = n[2].regionCode, a.area = n[0].regionName);
            } catch (e) {
                console.log(e);
            }
            a.city = h.cityName, a.cityCode = h.cityCode, a.birthday = i(a.birthday), a.returnDate = i(a.returnDate), 
            a.contactDateRecent = i(a.contactDateRecent), a.quasiReturnDate = i(a.quasiReturnDate), 
            a.contactDateLike = i(a.contactDateLike), (a.socialContact1 || a.socialContact2) && (a.socialContact = a.socialContact1 || "", 
            a.socialContact2 && (a.socialContact = a.socialContact + (a.socialContact ? "," : "") + a.socialContact2), 
            delete a.socialContact1, delete a.socialContact2), a.symptoms = a.symptoms.map(function(e) {
                return parseInt(e);
            }), a.residentFlag && (a.residentFlag = parseInt(a.residentFlag)), a.residentCondition && (a.residentCondition = parseInt(a.residentCondition)), 
            a.travelRegionClass && (a.travelRegionClass = parseInt(a.travelRegionClass)), a.healthState && (a.healthState = parseInt(a.healthState)), 
            delete a.regionData, wx.showLoading(), p.nCovSave(a).then(function(e) {
                0 == a.clueType && wx.setStorageSync("selfForm__submit", !0), wx.hideLoading(), 
                wx.getStorageSync("reditPath") ? wx.redirectTo({
                    url: wx.getStorageSync("reditPath")
                }) : t.isFromBuy ? wx.navigateTo({
                    url: "../msg/index?isFromBuy=" + t.isFromBuy
                }) : wx.navigateTo({
                    url: "../msg/index?info=" + JSON.stringify(a)
                });
            }).catch(function() {
                wx.hideLoading(), wx.showToast({
                    title: t.data.language.serverCrowded,
                    icon: "none"
                });
            });
        }
    }
});