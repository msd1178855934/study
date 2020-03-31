var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
    return typeof obj;
} : function(obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var sysInfo, _typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function(e) {
    return typeof e === "undefined" ? "undefined" : _typeof2(e);
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof2(e);
}, mixinCss = require("./mixinCss"), reportEnum = require("./reportEnum"), utf8 = require("./utf8"), hasCheckWechatVersion = !1, canUseNewChooseMultiMediaAPI = !1, canUseGetAndSetLabInfo = !1, canUseThisApp = !1, canUseShareAppMessage = !1, canUseChooseMultiMediaWithoutPoiInfo = !1;

function formatTime(e) {
    var t = e.getFullYear(), n = e.getMonth() + 1, o = e.getDate(), a = e.getHours(), r = e.getMinutes(), i = e.getSeconds();
    return [ t, n, o ].map(formatNumber).join("-") + " " + [ a, r, i ].map(formatNumber).join(":");
}

function formatTimeMinute(e) {
    var t = e.getFullYear(), n = e.getMonth() + 1, o = e.getDate(), a = e.getHours(), r = e.getMinutes();
    e.getSeconds();
    return [ t, n, o ].map(formatNumber).join("-") + " " + [ a, r ].map(formatNumber).join(":");
}

function formatDate(e) {
    var t = formatNumber(e.getFullYear()), n = formatNumber(e.getMonth() + 1), o = formatNumber(e.getDate()), a = new Date();
    formatNumber(a.getFullYear()), formatNumber(a.getMonth() + 1), formatNumber(a.getDate());
    return t + "/" + n + "/" + o;
}

function formatRegularDate(e) {
    return formatNumber(e.getFullYear()) + "年" + formatNumber(e.getMonth() + 1) + "月" + formatNumber(e.getDate()) + "日";
}

function formatNumber(e) {
    return (e = e.toString())[1] ? e : "0" + e;
}

function isString(e) {
    return "string" == typeof e || e instanceof String;
}

function isNumeric(e) {
    return !isNaN(parseFloat(e)) && isFinite(e);
}

function formatDuration(e) {
    if (!e) return "0:00";
    if (!isNumeric(e)) return "0:00";
    if (e <= 0) return "0:00";
    var t = Math.floor(e / 60), n = e - 60 * t;
    return t + ":" + (n >= 10 ? n : "0" + n);
}

function serialize(e) {
    var t = [];
    for (var n in e) {
        e.hasOwnProperty(n) && t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
    }
    return t.join("&");
}

function clone(e) {
    var t;
    if (null == e || "object" != (void 0 === e ? "undefined" : _typeof(e))) return e;
    if (e instanceof Date) return (t = new Date()).setTime(e.getTime()), t;
    if (e instanceof Array) {
        t = [];
        for (var n = 0, o = e.length; n < o; n++) {
            t[n] = clone(e[n]);
        }
        return t;
    }
    if (e instanceof Object) {
        for (var a in t = {}, e) {
            e.hasOwnProperty(a) && (t[a] = clone(e[a]));
        }
        return t;
    }
    throw new Error("Unable to copy obj! Its type isn't supported.");
}

function guid() {
    function e() {
        return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
    }
    return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e();
}

function getSysInfo() {
    if (sysInfo) return sysInfo;
    try {
        sysInfo = wx.getSystemInfoSync();
    } catch (e) {
        util.alert("getSystemInfoSync:" + JSON.stringify(e));
    }
    for (var e = 0; !sysInfo && e < 10; ) {
        try {
            sysInfo = wx.getSystemInfoSync();
        } catch (e) {
            util.alert("getSystemInfoSync:" + JSON.stringify(e));
        }
        e++;
    }
    return sysInfo ? (console.log("getSystemInfoSync:" + JSON.stringify(sysInfo)), sysInfo) : (alert("api wx.getSystemInfoSync() 连续调用失败"), 
    {});
}

function getNetworkType() {
    return new Promise(function(e, t) {
        wx.getNetworkType({
            success: function success(t) {
                e(t.networkType);
            },
            fail: function fail(e) {
                t(e);
            },
            complete: function complete(e) {}
        });
    });
}

function isV1EqualToV2(e, t) {
    if (!e || !t) return !1;
    var n = e.split("."), o = t.split(".");
    if (!n || !o || 3 != n.length || 3 != o.length) return !1;
    for (var a = 0; a < 3; a++) {
        n[a] = parseInt(n[a]), o[a] = parseInt(o[a]);
    }
    return n[0] == o[0] && n[1] == o[1] && n[2] == o[2];
}

function isV1GreaterThanOrEqualToV2(e, t) {
    if (!e || !t) return !1;
    var n = e.split("."), o = t.split(".");
    if (!n || !o) return !1;
    if (n.length > 3 || o.length > 3 || n.length < 1 || o.length < 1) return !1;
    for (var a = 0; a < 3; a++) {
        n[a] = n[a] ? parseInt(n[a]) : 0, o[a] = o[a] ? parseInt(o[a]) : 0;
    }
    return n[0] > o[0] || n[0] == o[0] && n[1] > o[1] || n[0] == o[0] && n[1] == o[1] && n[2] >= o[2];
}

function getUrlParam(e, t) {
    var n = new RegExp("[?&]" + t + "(=([^&#]*)|&|#|$)").exec(e);
    if (!n) return null;
    if (!n[2]) return "";
    console.log("url=" + e, "name=" + t);
    var o = decodeURIComponent(n[2]);
    return console.log("getUrlParam=" + o), o;
}

function toast(e) {
    wx.showToast({
        title: e,
        icon: "success",
        duration: 2e3
    });
}

function hint(e) {
    isNumeric(e) && (e = "" + e), wx.showModal({
        title: "提示",
        content: e || "",
        showCancel: !1
    });
}

function alert(e) {
    isNumeric(e) && (e = "" + e), wx.showModal({
        title: "提示",
        content: e || ""
    });
}

function showLoading() {
    wx.showLoading({
        title: "加载中",
        mask: !0
    });
}

function hideLoading() {
    wx.hideLoading();
}

function showNavLoading() {
    wx.showNavigationBarLoading();
}

function hideNavLoading() {
    wx.hideNavigationBarLoading();
}

function debounce(e, t) {
    var n;
    return function() {
        var o = this, a = arguments;
        clearTimeout(n), n = setTimeout(function() {
            e.apply(o, a);
        }, t);
    };
}

function throttle(e, t) {
    var n, o;
    return function() {
        var a = this, r = arguments, i = new Date().getTime();
        n ? i - n > t ? (e.apply(a, r), n = i) : (clearTimeout(o), o = setTimeout(function() {
            e.apply(a, r), n = i;
        }, t - (i - n))) : (e.apply(a, r), n = i);
    };
}

function throttleWithTrailingCancelling(e, t) {
    var n;
    return function() {
        var o = arguments, a = new Date().getTime();
        n ? a - n > t && e.apply(this, o) : e.apply(this, o), n = a;
    };
}

function canUseUploadProgress() {
    return sysInfo || (sysInfo = getSysInfo()), isV1GreaterThanOrEqualToV2(sysInfo.SDKVersion, "1.4.0");
}

function rpx2px(e) {
    return getSysInfo().screenWidth / 750 * e;
}

function px2rpx(e) {
    return 750 / getSysInfo().screenWidth * e;
}

function isIpx() {
    var e = getSysInfo().model.toLowerCase();
    return /iphone\D*x/.test(e);
}

function getDateFormatString(e) {
    if (e <= 0) return "";
    var t = new Date();
    t = new Date(t.getFullYear(), t.getMonth(), t.getDate());
    var n = new Date(1e3 * e), o = t - (n = new Date(n.getFullYear(), n.getMonth(), n.getDate()));
    return 0 == o ? "今天" : 864e5 == o ? "昨天" : o >= 1728e5 && o < 6048e5 ? o / 864e5 + "天前" : o >= 6048e5 && o < 12096e5 ? "1周前" : o >= 12096e5 && o < 18144e5 ? "2周前" : o >= 18144e5 && o < 24192e5 ? "3周前" : o >= 24192e5 && o < 2592e6 ? "4周前" : o >= 2592e6 && o < 5184e6 ? "1个月前" : o >= 5184e6 && o < 7776e6 ? "2个月前" : o >= 7776e6 && o < 10368e6 ? "3个月前" : o >= 10368e6 && o < 1296e7 ? "4个月前" : o >= 1296e7 && o < 15552e6 ? "5个月前" : o >= 15552e6 && o < 31536e6 ? "半年前" : Math.floor(o / 31536e6) + "年前";
}

function getDistanceString(e) {
    var t = parseInt(e);
    return t >= 1e3 ? parseInt(t / 1e3) + "km" : t + "m";
}

function getTabHeightRpx() {
    return 174;
}

var windowHeightExcludeTab = 0;

function getWindowHeightExcludeTab() {
    return windowHeightExcludeTab || (windowHeightExcludeTab = getSysInfo().screenHeight - rpx2px(getTabHeightRpx())), 
    windowHeightExcludeTab;
}

var safeScreenHeight = 0;

function getSafeScreenHeight() {
    if (!safeScreenHeight) {
        var e, t = getSysInfo().windowHeight;
        e = isIpx() ? t - rpx2px(mixinCss.statusBarHeight + mixinCss.ipxPadding + mixinCss.ipxFtPadding) : t - rpx2px(mixinCss.statusBarHeight);
    }
    return e;
}

function getCurrentPageUrl() {
    var e = getCurrentPages(), t = e[e.length - 1], n = t.route, o = t.options, a = n + "?";
    for (var r in o) {
        a += r + "=" + o[r] + "&";
    }
    return a = a.substring(0, a.length - 1);
}

function updateCanUseValues() {
    console.log("updateCanUseValues, hasCheckWechatVersion: " + hasCheckWechatVersion), 
    hasCheckWechatVersion = !0, sysInfo || (sysInfo = getSysInfo());
    var e = sysInfo.version;
    console.log("updateCanUseValues, sysInfo: " + JSON.stringify(sysInfo)), canUseNewChooseMultiMediaAPI = !1, 
    canUseChooseMultiMediaWithoutPoiInfo = !1, wx.chooseMultiMedia && (-1 != sysInfo.system.search("iOS") ? (canUseNewChooseMultiMediaAPI = isV1GreaterThanOrEqualToV2(e, "6.7.4"), 
    canUseChooseMultiMediaWithoutPoiInfo = isV1GreaterThanOrEqualToV2(e, "7.0.5")) : (canUseNewChooseMultiMediaAPI = isV1GreaterThanOrEqualToV2(e, "6.7.3"), 
    canUseChooseMultiMediaWithoutPoiInfo = isV1GreaterThanOrEqualToV2(e, "7.0.6"))), 
    canUseGetAndSetLabInfo = !1, wx.getLabInfo && wx.setLabInfo && (canUseGetAndSetLabInfo = (sysInfo.system.search("iOS"), 
    isV1GreaterThanOrEqualToV2(e, "7.0.0"))), canUseShareAppMessage = !1, wx.shareAppMessageForFakeNative && (canUseShareAppMessage = (sysInfo.system.search("iOS"), 
    isV1GreaterThanOrEqualToV2(e, "7.0.0"))), canUseThisApp = canUseNewChooseMultiMediaAPI;
}

function canUseChooseMultiMediaAPI() {
    return console.log("canUseChooseMultiMediaAPI, hasCheckWechatVersion: " + hasCheckWechatVersion + ", canUseNewChooseMultiMediaAPI: " + canUseNewChooseMultiMediaAPI), 
    hasCheckWechatVersion ? canUseNewChooseMultiMediaAPI : (updateCanUseValues(), canUseNewChooseMultiMediaAPI);
}

function canUseChooseMultiMediaAPIWithoutPoiInfo() {
    return console.log("canUseChooseMultiMediaAPIWithoutPoiInfo, hasCheckWechatVersion: " + hasCheckWechatVersion + ", canUseChooseMultiMediaWithoutPoiInfo: " + canUseChooseMultiMediaWithoutPoiInfo), 
    hasCheckWechatVersion ? canUseChooseMultiMediaWithoutPoiInfo : (updateCanUseValues(), 
    canUseChooseMultiMediaWithoutPoiInfo);
}

function canUseGetAndSetLabInfoAPI() {
    return console.log("canUseGetAndSetLabInfoAPI, hasCheckWechatVersion: " + hasCheckWechatVersion + ", canUseGetAndSetLabInfo: " + canUseGetAndSetLabInfo), 
    hasCheckWechatVersion ? canUseGetAndSetLabInfo : (updateCanUseValues(), canUseGetAndSetLabInfo);
}

function canUseShareAppMessageAPI() {
    return console.log("canUseShareAppMessageAPI, hasCheckWechatVersion: " + hasCheckWechatVersion + ", canUseShareAppMessage: " + canUseShareAppMessage), 
    hasCheckWechatVersion ? canUseShareAppMessage : (updateCanUseValues(), canUseShareAppMessage);
}

function canUseApp() {
    return console.log("canUseApp, hasCheckWechatVersion: " + hasCheckWechatVersion + ", canUseApp: " + canUseThisApp), 
    hasCheckWechatVersion ? canUseThisApp : (updateCanUseValues(), canUseThisApp);
}

function getTimeRandomId() {
    var e = Math.floor(100 * Math.random() + 1);
    return 1e3 * new Date().getTime() + e;
}

var rafApi = function() {
    var e = {}, t = 0;
    return e.requestAnimationFrame = function(e, n) {
        var o = new Date().getTime(), a = Math.max(0, 16 - (o - t));
        console.log("timeToCall", a);
        var r = setTimeout(function() {
            e(o + a);
        }, a);
        return t = o + a, r;
    }, e.cancelAnimationFrame = function(e) {
        clearTimeout(e);
    }, e;
}();

function isIPad() {
    return -1 != getSysInfo().model.search("iPad");
}

function isIOS() {
    return -1 != getSysInfo().system.search("iOS");
}

function formatChar(e) {
    return e.replace(/[\uff01-\uff5e]/g, function(e) {
        return String.fromCharCode(e.charCodeAt(0) - 65248);
    });
}

function formatPhoneWithParentheses(e) {
    if (e.startsWith("(")) {
        return e.split(/^\(([0-9]{3,4})\)?\-/g).filter(function(e) {
            return e;
        }).join("-");
    }
    return e;
}

var _pageId = 0;

function getPageId() {
    return _pageId++;
}

var _isLogManagerSet = !1;

function setLogManager() {
    if (!_isLogManagerSet) {
        setSystemLog();
        var e = wx.getLogManager({
            level: 0
        });
        e.error = e.warn.bind(e, "[ERROR][error]: ");
        var t = console.debug;
        console.debug = function() {
            e.debug.apply(e, arguments), t.apply(console, arguments);
        };
        var n = console.info;
        console.info = function() {
            e.info.apply(e, arguments), n.apply(console, arguments);
        };
        var o = console.log;
        console.log = function() {
            e.log.apply(e, arguments), o.apply(console, arguments);
        };
        var a = console.warn;
        console.warn = function() {
            e.warn.apply(e, arguments), a.apply(a, arguments);
        };
        var r = console.error;
        console.error = function() {
            e.error.apply(e, arguments), r.apply(console, arguments);
        };
    }
}

function setSystemLog() {
    var e = !1, t = wx.getLogManager().privateSystemLog;
    console.log("systemLog", t);
    var n = "[NEARBY_RESTAURANT_MINI_PROGRAM]";
    if (t ? (t(n + "test system log", t, {
        a: 1
    }), console.log(n + "test system log ok!"), e = !0) : console.log(n + "test system log fail!"), 
    !e) return !1;
    var o = console.debug;
    console.debug = function() {
        var e = Array.prototype.slice.call(arguments);
        e.unshift("[NEARBY_RESTAURANT_MINI_PROGRAM][DEBUG]"), t.apply(void 0, e), o.apply(console, arguments);
    };
    var a = console.info;
    console.info = function() {
        var e = Array.prototype.slice.call(arguments);
        e.unshift("[NEARBY_RESTAURANT_MINI_PROGRAM][INFO]"), t.apply(void 0, e), a.apply(console, arguments);
    };
    var r = console.log;
    console.log = function() {
        var e = Array.prototype.slice.call(arguments);
        e.unshift("[NEARBY_RESTAURANT_MINI_PROGRAM][LOG]"), t.apply(void 0, e), r.apply(console, arguments);
    };
    var i = console.warn;
    console.warn = function() {
        var e = Array.prototype.slice.call(arguments);
        e.unshift("[NEARBY_RESTAURANT_MINI_PROGRAM][WARN]"), t.apply(void 0, e), i.apply(i, arguments);
    };
    var s = console.error;
    return console.error = function() {
        var e = Array.prototype.slice.call(arguments);
        e.unshift("[NEARBY_RESTAURANT_MINI_PROGRAM][ERROR]"), t.apply(void 0, e), s.apply(console, arguments);
    }, !0;
}

function createRingBuffer(e) {
    var t = 0, n = [];
    return {
        push: function push(o) {
            n[t] = o, t = (e + t + 1) % e;
        },
        getArray: function getArray() {
            for (var o = [], a = 0; a < e; a++) {
                var r = (a + t) % e;
                void 0 !== n[r] && o.push(n[r]);
            }
            return o;
        }
    };
}

function getPartialData(e, t, n, o) {
    var a = t.length;
    if (n < 0 && (n = 0), o > a && (o = a), n >= o) return {};
    for (var r = {}, i = n; i < o; i++) {
        r[e + "[" + i + "]"] = t[i];
    }
    return r;
}

function getMultiPartialData(e, t, n, o, a) {
    if (a > t.length && (a = t.length), a < 0) return [];
    var r = t.length;
    if (n < 0 && (n = 0), o > r && (o = r), n >= o) return [];
    for (var i = n, s = i + a, u = []; ;) {
        var c = getPartialData(e, t, i, s);
        if (u.push(c), (i += a) >= o) break;
        (s += a) > r && (s = r);
    }
    return u;
}

function arrayIncludes(e, t) {
    return e.some(function(e) {
        return e === t;
    });
}

function getImpressionType(e) {
    if (void 0 === e) return reportEnum.enumFeedImpressionType.OTHER;
    switch (e) {
      case 0:
      case 1:
        return reportEnum.enumFeedImpressionType.FRIEND;

      case 2:
        return reportEnum.enumFeedImpressionType.STRANGER;

      default:
        return reportEnum.enumFeedImpressionType.OTHER;
    }
}

function getCurrentPage() {
    var e = getCurrentPages();
    return e.length ? e[e.length - 1] : null;
}

function appNavigateBack() {
    console.log("call appNavigateBack"), wx.navigateBackMiniProgram({
        success: function success(e) {
            console.log("wx.navigateBackMiniProgram, success");
        },
        fail: function fail(e) {
            console.error("wx.navigateBackMiniProgram fail, err: " + JSON.stringify(e)), wx.navigateBackNative({
                success: function success(e) {
                    console.log("wx.navigateBackNative, success");
                },
                fail: function fail(e) {
                    console.error("wx.navigateBackNative fail, err: " + JSON.stringify(e));
                }
            });
        }
    });
}

function canUseCssSticky() {
    var e = !1, t = getSysInfo();
    return -1 != t.system.search("iOS") && (e = isV1GreaterThanOrEqualToV2(t.version, "6.0.0")), 
    e;
}

function formatNumberToTenThousand(e) {
    return e >= 1e4 ? Number((e / 1e4).toFixed(1)) + "万" : e;
}

function utf8Index2StrIndex(e, t, n) {
    for (var o = 0, a = 0; a < e.length; a++) {
        var r = e[a], i = 0;
        try {
            i = utf8.encode(r).length;
        } catch (e) {
            i += 4;
        }
        if ((o += i) == t) {
            var s = n.length;
            return n == e.substring(a + 1, a + 1 + s) ? a + 1 : u(e, a + 2, n);
        }
        if (o > t) return u(e, a, n);
    }
    return -1;
    function u(e, t, n) {
        for (var o = n.length, a = t; a < e.length; a++) {
            if (e.substring(a, a + o) == n) return a;
        }
        return -1;
    }
}

function getPostImpressionCommentErrorMessage(e) {
    var t = "评论失败";
    return e && e.errorCode && -16 != e.errorCode && (e.data && e.data.baseResponse && e.data.baseResponse.msg && "string" == typeof e.data.baseResponse.msg ? t = e.data.baseResponse.msg : console.error("getPostImpressionCommentErrorMessage, no err.data.baseResponse.msg from err: " + JSON.stringify(e))), 
    t;
}

var oneTimeEventMap = {};

function listeneToOneTimeEvent(e, t) {
    var n = oneTimeEventMap[e];
    n ? n.notified ? t(null != n.data ? clone(n.data) : n.data) : n.cbs.push(t) : oneTimeEventMap[e] = {
        notified: !1,
        data: void 0,
        cbs: [ t ]
    };
}

function notifyOneTimeEvent(e, t) {
    var n = oneTimeEventMap[e];
    n ? (n.notified = !0, n.data = t, n.cbs.forEach(function(e) {
        e(t);
    }), n.cbs = []) : oneTimeEventMap[e] = {
        notified: !0,
        data: t,
        cbs: []
    };
}

function getReasonTags(e) {
    return 0 === e.length ? e : e.slice(0, Math.min(2, e.length));
}

function normalizeArray(e) {
    return e.filter(function(e) {
        return 0 !== Object.keys(e).length;
    });
}

function getDeviceForKvReport() {
    return "ios" === getSysInfo().platform ? 1 : "android" === getSysInfo().platform ? 2 : -1;
}

module.exports = {
    listeneToOneTimeEvent: listeneToOneTimeEvent,
    notifyOneTimeEvent: notifyOneTimeEvent,
    utf8Index2StrIndex: utf8Index2StrIndex,
    getCurrentPage: getCurrentPage,
    arrayIncludes: arrayIncludes,
    getMultiPartialData: getMultiPartialData,
    createRingBuffer: createRingBuffer,
    setLogManager: setLogManager,
    getPageId: getPageId,
    requestAnimationFrame: rafApi.requestAnimationFrame,
    cancelAnimationFrame: rafApi.cancelAnimationFrame,
    getTimeRandomId: getTimeRandomId,
    isIpx: isIpx,
    rpx2px: rpx2px,
    px2rpx: px2rpx,
    formatDuration: formatDuration,
    getSysInfo: getSysInfo,
    getNetworkType: getNetworkType,
    showNavLoading: showNavLoading,
    hideNavLoading: hideNavLoading,
    toast: toast,
    hideLoading: hideLoading,
    showLoading: showLoading,
    hint: hint,
    alert: alert,
    formatTime: formatTime,
    formatDate: formatDate,
    formatRegularDate: formatRegularDate,
    formatTimeMinute: formatTimeMinute,
    formatChar: formatChar,
    formatPhoneWithParentheses: formatPhoneWithParentheses,
    serialize: serialize,
    formatNumber: formatNumber,
    clone: clone,
    isNumeric: isNumeric,
    isString: isString,
    guid: guid,
    uuid: guid,
    getUrlParam: getUrlParam,
    debounce: debounce,
    throttle: throttle,
    throttleWithTrailingCancelling: throttleWithTrailingCancelling,
    canUseUploadProgress: canUseUploadProgress,
    getDateFormatString: getDateFormatString,
    getDistanceString: getDistanceString,
    getWindowHeightExcludeTab: getWindowHeightExcludeTab,
    getSafeScreenHeight: getSafeScreenHeight,
    getCurrentPageUrl: getCurrentPageUrl,
    canUseChooseMultiMediaAPI: canUseChooseMultiMediaAPI,
    canUseGetAndSetLabInfoAPI: canUseGetAndSetLabInfoAPI,
    canUseApp: canUseApp,
    isIPad: isIPad,
    isIOS: isIOS,
    canUseShareAppMessageAPI: canUseShareAppMessageAPI,
    getImpressionType: getImpressionType,
    appNavigateBack: appNavigateBack,
    canUseCssSticky: canUseCssSticky,
    formatNumberToTenThousand: formatNumberToTenThousand,
    getPostImpressionCommentErrorMessage: getPostImpressionCommentErrorMessage,
    canUseChooseMultiMediaAPIWithoutPoiInfo: canUseChooseMultiMediaAPIWithoutPoiInfo,
    getReasonTags: getReasonTags,
    normalizeArray: normalizeArray,
    getDeviceForKvReport: getDeviceForKvReport
};