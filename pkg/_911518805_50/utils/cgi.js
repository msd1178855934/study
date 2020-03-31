var util = require("util.js"), cgiCmdId = require("./cgi_cmdid"), appLaunchData = require("./appLaunchData"), eventCenter = require("eventCenter.js"), sessionKey = appLaunchData.getSessionKey(), lastSessionKeyTimeMillis = 0, openId = appLaunchData.getOpenId(), routeId = appLaunchData.getRouteId(), reportSession = require("./report_session"), kitchenStorage = require("./kitchenStorage"), isGreyServer = kitchenStorage.getShouldUseGreyServer(), URL_PREFIX = "https://ae.weixin.qq.com/cgi-bin/mmlife-bin/", HOST = "ae.weixin.qq.com";

function getHost() {
    return HOST;
}

function getUrlPrefix() {
    return URL_PREFIX;
}

function getReqHeader(e) {
    var t = kitchenStorage.getClientVersion(), o = isGreyServer ? "0x01000010" : "0x0" + t.toString(16), a = cgiCmdId.getCmdId(e);
    return routeId && routeId.length > 0 ? {
        "content-type": "application/json",
        "X-WX-ClientVersion": o,
        "X-WX-ProductId": "2101",
        "X-WECHAT-UIN": routeId,
        "X-WECHAT-CMDID": "" + a
    } : {
        "content-type": "application/json",
        "X-WX-ClientVersion": o,
        "X-WX-ProductId": "2101",
        "X-WECHAT-CMDID": "" + a
    };
}

function handleWxLoginFinish(e) {
    if (getApp().globalData.appLaunchSessionId > 0) {
        var t = new Date().getTime();
        getApp().globalData.appLaunchReportData.cgiLoginStartTime = t, getApp().globalData.appLaunchReportData.wxLoginTime = t - getApp().globalData.appLaunchReportData.appLaunchStartTime;
    }
    e || wx.reportMonitor("0", 1);
}

function handleAuthCgiFinish(e) {
    if (getApp().globalData.appLaunchSessionId > 0) {
        var t = new Date().getTime();
        getApp().globalData.appLaunchReportData.cgiLongLinkStartTime = t, getApp().globalData.appLaunchReportData.cgiLoginTime = t - getApp().globalData.appLaunchReportData.cgiLoginStartTime;
    }
    e || wx.reportMonitor("1", 1);
}

isGreyServer && (URL_PREFIX = "https://testae.weixin.qq.com/cgi-bin/mmlife-bin/", 
HOST = "testae.weixin.qq.com");

var REQ_METHOD = "POST";

function login(e, t) {
    if (console.log("TimeRecord, start wx.login: " + JSON.stringify(new Date())), eventCenter.add("EVENT_LOGIN", e)) {
        var o = function o() {
            eventCenter.remove("EVENT_LOGIN"), t && "function" == typeof t && t();
        };
        wx.login({
            success: function success(e) {
                if (e.code) {
                    handleWxLoginFinish(!0);
                    var t = URL_PREFIX + "auth", a = {
                        code: e.code
                    }, i = getReqHeader("auth");
                    console.log("[cgi request] url=", t, "reqData=", a, "header=", i), wx.request({
                        url: t,
                        data: a,
                        method: REQ_METHOD,
                        header: i,
                        success: function success(e) {
                            if (console.log("[cgi response] url=" + t, "req=", a), console.log("success res=", e), 
                            !e.data) return console.error("小程序wx.request返回没有data"), handleAuthCgiFinish(!1), 
                            void o();
                            if (!e.data.baseResponse) return console.error("服务器返回没有baseResponse"), handleAuthCgiFinish(!1), 
                            void o();
                            var i = e.data.baseResponse.ret, r = e.data;
                            0 == i ? (handleAuthCgiFinish(!0), sessionKey = r.key, openId = r.openId, routeId = r.routeId, 
                            appLaunchData.updateAuthData(openId, routeId, sessionKey), lastSessionKeyTimeMillis = new Date().getTime(), 
                            console.log("sessionKey=", sessionKey), eventCenter.notify("EVENT_LOGIN", sessionKey)) : (console.error("登陆错误. ret=" + i), 
                            handleAuthCgiFinish(!1), o());
                        },
                        fail: function fail(e) {
                            console.log("[cgi response] url=" + t, "req=", a), console.error("[cgi response] wx.request fail res=", JSON.stringify(e)), 
                            handleAuthCgiFinish(!1), o();
                        }
                    });
                } else console.error("获取用户登录code失败！" + JSON.stringify(e.errMsg)), handleWxLoginFinish(!1), 
                o();
            },
            fail: function fail(e) {
                console.error("wx.login failed, res: " + JSON.stringify(e)), handleWxLoginFinish(!1), 
                o();
            }
        });
    }
}

var processUrlSet = {};

function SimpleRequest(e, t) {
    this.url = e, this.reqData = t || {};
}

function uploadOnePic(e, t, o, a, i) {
    var r = t.filePath, s = URL_PREFIX + "uploadimage", n = {
        openId: openId,
        key: sessionKey
    }, l = getReqHeader("uploadimage");
    console.log("[uploadFile request] seq=", e, "url=" + s, "reqData=", n, "header=", l);
    var p = wx.uploadFile({
        url: s,
        header: l,
        filePath: r,
        name: "file",
        formData: n,
        success: function success(i) {
            if (console.log("[uploadFile response] success call back seq=", e, i), "string" == typeof i.data) try {
                i.data = JSON.parse(i.data);
            } catch (t) {
                return void console.error("[uploadFile video response] parse JSON data failed, seq=", e, ", res.data: ", JSON.stringify(i.data));
            }
            0 == i.data.baseResponse.ret ? (console.log("[uploadFile response] success seq=", e), 
            o(e, {
                type: 0,
                url: i.data.imageUrl,
                thumbUrl: i.data.midImageUrl,
                midImageUrl: i.data.midImageUrl,
                imageSize: i.data.imageSize,
                midImageSize: i.data.midImageSize,
                height: t.height,
                width: t.width,
                orientation: t.orientation,
                size: t.size,
                scene: t.scene,
                mark: t.mark
            })) : (console.error("[uploadFile pic response] failed seq=", e, "res.data.baseResponse.ret= ", i.data.baseResponse.ret, ", res.data= ", JSON.stringify(i.data)), 
            a(e));
        },
        fail: function fail(t) {
            console.error("[uploadFile pic response] fail seq=", e, ", resp: ", JSON.stringify(t)), 
            a(e);
        }
    });
    util.canUseUploadProgress() ? (p.lastTotalBytesSent = 0, p.onProgressUpdate(function(e) {
        i(e.totalBytesSent - p.lastTotalBytesSent), p.lastTotalBytesSent = e.totalBytesSent;
    })) : i(0);
}

function uploadOneVideo(e, t, o, a, i) {
    var r = t.filePath, s = URL_PREFIX + "uploadvideo", n = {
        openId: openId,
        key: sessionKey
    };
    t.thumbFilePath ? (n.shouldUseClientThumb = 1, n.thumbFileBase64 = wx.getFileSystemManager().readFileSync(t.thumbFilePath, "base64")) : (n.shouldUseClientThumb = 0, 
    n.thumbFileBase64 = "");
    var l = getReqHeader("uploadvideo");
    console.log("[uploadFile request] url=" + s, "reqData=", n, "header=", l);
    var p = wx.uploadFile({
        url: s,
        header: l,
        filePath: r,
        name: "file",
        formData: n,
        success: function success(i) {
            if (console.log("[uploadFile response] success call back", i), "string" == typeof i.data) try {
                i.data = JSON.parse(i.data);
            } catch (t) {
                return void console.error("[uploadFile video response] parse JSON data failed, seq=", e, ", res.data: ", JSON.stringify(i.data));
            }
            0 == i.data.baseResponse.ret ? (console.log("[uploadFile response] success"), o(e, {
                type: 1,
                url: i.data.videoUrl,
                thumbUrl: i.data.thumbUrl,
                videoSize: i.data.videoSize,
                thumbSize: i.data.thumbSize,
                height: t.height,
                width: t.width,
                duration: t.duration,
                size: t.size,
                scene: t.scene,
                mark: t.mark
            })) : (console.error("[uploadFile video response] failed seq=", e, "res.data.baseResponse.ret= ", i.data.baseResponse.ret, ", res.data: ", JSON.stringify(i.data)), 
            a(e));
        },
        fail: function fail(t) {
            console.error("[uploadFile video response] fail seq=", e, ", res: ", JSON.stringify(t)), 
            a(e);
        }
    });
    util.canUseUploadProgress() ? (p.lastTotalBytesSent = 0, p.onProgressUpdate(function(e) {
        i(e.totalBytesSent - p.lastTotalBytesSent), p.lastTotalBytesSent = e.totalBytesSent;
    })) : i(0);
}

function uploadPic4TempFilePaths(e, t, o, a, i) {
    var r = 0, s = {};
    function n(e, t) {
        s[e] = t, p();
    }
    function l(e) {
        p();
    }
    function p() {
        if (++r == t.length) if (a) {
            console.log("upload complete call back, pics=", s);
            for (var e = [], o = 0; o < t.length; o++) {
                s[o] && e.push(s[o]);
            }
            a(e);
        } else util.hideLoading(), console.log("upload pic files, OK");
    }
    var u = 0;
    function c(t) {
        u += t, console.log("upload pic progresss: totalBytesSent=", u, "totalFileSize=", e, "percentage=", 1 * u / e), 
        i(u, e, (1 * u / e * 100).toFixed(0));
    }
    if (o && o(), t.length) for (var d = 0; d < t.length; d++) {
        uploadOnePic(d, t[d], n, l, c);
    }
}

function uploadMedia4TempFiles(e, t, o, a, i) {
    var r = 0, s = {};
    function n(e, t) {
        s[e] = t, p();
    }
    function l(e) {
        p();
    }
    function p() {
        if (++r == t.length) if (a) {
            console.log("upload complete call back, medias=", s);
            for (var e = [], o = 0; o < t.length; o++) {
                s[o] && e.push(s[o]);
            }
            a(e);
        } else util.hideLoading(), console.log("upload media files, OK");
    }
    var u = 0;
    function c(t) {
        u += t, console.log("upload pic progresss: totalBytesSent=", u, "totalFileSize=", e, "percentage=", 1 * u / e), 
        i(u, e, (1 * u / e * 100).toFixed(0));
    }
    if (o && o(), t.length) for (var d = 0; d < t.length; d++) {
        var g = t[d];
        0 == t[d].type ? uploadOnePic(d, g, n, l, c) : 1 == t[d].type ? uploadOneVideo(d, g, n, l, c) : console.error("error file type, file: " + JSON.stringify(t[d]));
    }
}

function multipleRequest(e, t) {
    if (e && e.length && t) {
        for (var o = 0, a = [], i = 0; i < e.length; i++) {
            a.push({});
        }
        for (i = 0; i < e.length; i++) {
            var r = e[i];
            !function(i) {
                r.send(function(r) {
                    o++, a[i] = r, o == e.length && t(a);
                }, !0);
            }(i);
        }
    }
}

SimpleRequest.prototype.setMockRespData = function(e) {
    return this.mockRespData = e, this;
}, SimpleRequest.prototype.ensureNoSameUrlProcessing = function() {
    return this._ensureNoSameUrlProcessing = !0, this;
}, SimpleRequest.prototype.send = function(e, t, o) {
    var a = this;
    if (a.mockRespData) return console.log("[cgi response mockRespData] url=" + i), 
    console.log("mockRespData", a.mockRespData), void e(a.mockRespData);
    if (a._ensureNoSameUrlProcessing && processUrlSet[a.url]) console.log("same url is processing, return", processUrlSet, a.url); else {
        var i = URL_PREFIX + a.url;
        a.reqData.baseRequest ? (a.reqData.baseRequest.openId = openId, a.reqData.baseRequest.key = sessionKey) : a.reqData.baseRequest = {
            openId: openId,
            key: sessionKey
        };
        var r = reportSession.getId();
        r > 0 && (a.reqData.baseRequest.sessionId = r);
        var s = a.reqData, n = getReqHeader(a.url);
        "kvreport" != a.url.toLowerCase() && console.log("[cgi request] url=", i, "reqData=", a.reqData, "header=", n), 
        processUrlSet[a.url] || (processUrlSet[a.url] = 1);
        var l = new Date().getTime();
        a.cgiStartTime || (a.cgiStartTime = l), wx.request({
            url: i,
            data: a.reqData,
            method: REQ_METHOD,
            header: n,
            success: function success(r) {
                if (a.retryTimeout && clearTimeout(a.retryTimeout), processUrlSet[a.url] && processUrlSet[a.url]--, 
                "kvreport" != a.url.toLowerCase() && (console.log("[cgi response] url=" + i, "req=", s), 
                console.log("res = ", r), console.log("cost = ", new Date().getTime() - l + "ms")), 
                r.data) {
                    if (!r.data.baseResponse) return console.error("服务器返回没有baseResponse"), void (t && "function" == typeof t && t());
                    var n = r.data.baseResponse.ret, p = r.data;
                    if (0 == n) e && e(p, s); else if (-13 != n || o) console.error("服务器返回错误, errorCode=" + n + ", data: " + JSON.stringify(p)), 
                    wx.reportMonitor("1", 1), t && "function" == typeof t && t({
                        errorCode: n,
                        data: p
                    }); else {
                        console.error("服务器返回登陆过期错误, errorCode=" + n), wx.reportMonitor("1", 1);
                        var u = new Date().getTime();
                        sessionKey != a.reqData.baseRequest.key ? a.send(e, t) : eventCenter.getHandlers("EVENT_LOGIN").length ? login(function() {
                            a.send(e, t);
                        }) : u - lastSessionKeyTimeMillis >= 5e3 ? login(function() {
                            a.send(e, t);
                        }) : console.error("5秒内频繁登录。服务器返回错误, errorCode=" + n);
                    }
                }
            },
            fail: function fail(o) {
                processUrlSet[a.url] && processUrlSet[a.url]--, "kvreport" != a.url.toLowerCase() && (console.log("[cgi response] url=" + i, "req=", s), 
                console.error("[cgi response] fail", JSON.stringify(o))), wx.reportMonitor("1", 1), 
                new Date().getTime() - a.cgiStartTime < 2e4 ? (a.retryTimeout && clearTimeout(a.retryTimeout), 
                a.retryTimeout = setTimeout(function() {
                    a.send(e, t);
                }, 2e3)) : t && "function" == typeof t && t(o);
            }
        });
    }
};

var EnumSuggestionFlag = {
    MMLIFEAPP_SUGGESTION_FLAG_HARDCODE: 1,
    MMLIFEAPP_SUGGESTION_FLAG_TAG: 2,
    MMLIFEAPP_SUGGESTION_FLAG_POI: 4
}, EnumMMLifeAppSearchPoiListFlagDefine = {
    MMLIFEAPP_SEARCH_POI_LIST_FLAG_TAG: 1,
    MMLIFEAPP_SEARCH_POI_LIST_FLAG_POI: 2
}, EnumMMLifeAppPoiImpressionTypeDefine = {
    MMLIFEAPP_POI_IMPRESSION_TYPE_COMMENT: 0,
    MMLIFEAPP_POI_IMPRESSION_TYPE_LIKE: 1,
    MMLIFEAPP_POI_IMPRESSION_TYPE_MARK: 2,
    MMLIFEAPP_POI_IMPRESSION_TYPE_RECOMMEND: 3,
    MMLIFEAPP_POI_IMPRESSION_TYPE_PAY_RECOMMEND_POI_IMPRESSION: 4
}, EnumMMLifeAppGetUserPageSceneDefine = {
    MMLIFEAPP_GET_USER_PAGE_SCENE_ALL: 0,
    MMLIFEAPP_GET_USER_PAGE_SCENE_IMPRESSION: 1,
    MMLIFEAPP_GET_USER_PAGE_SCENE_MARK: 2,
    MMLIFEAPP_GET_USER_PAGE_SCENE_MARK_DISTANCE: 3
}, EnumMMLifeAppFriendVisitInfoTypeDefine = {
    MMLIFEAPP_FRIEND_VISIT_INFO_TYPE_COMMENT: 0,
    MMLIFEAPP_FRIEND_VISIT_INFO_TYPE_LIKE: 1,
    MMLIFEAPP_FRIEND_VISIT_INFO_TYPE_MARK: 2,
    MMLIFEAPP_FRIEND_VISIT_INFO_TYPE_RECOMMEND: 3,
    MMLIFEAPP_FRIEND_VISIT_INFO_TYPE_RECOMMEND_ACTIVITIY: 4,
    MMLIFEAPP_FRIEND_VISIT_INFO_TYPE_RECOMMEND_IMPRESSION: 5,
    MMLIFEAPP_FRIEND_VISIT_INFO_TYPE_PAY_RECOMMEND_POI_IMPRESSION: 6
};

module.exports = {
    getHost: getHost,
    login: login,
    SimpleRequest: SimpleRequest,
    uploadPic4TempFilePaths: uploadPic4TempFilePaths,
    multipleRequest: multipleRequest,
    uploadMedia4TempFiles: uploadMedia4TempFiles,
    EnumSuggestionFlag: EnumSuggestionFlag,
    EnumMMLifeAppSearchPoiListFlagDefine: EnumMMLifeAppSearchPoiListFlagDefine,
    EnumMMLifeAppPoiImpressionTypeDefine: EnumMMLifeAppPoiImpressionTypeDefine,
    EnumMMLifeAppGetUserPageSceneDefine: EnumMMLifeAppGetUserPageSceneDefine,
    EnumMMLifeAppFriendVisitInfoTypeDefine: EnumMMLifeAppFriendVisitInfoTypeDefine,
    getUrlPrefix: getUrlPrefix,
    getReqHeader: getReqHeader
};