require("./utils/model_lib/hook");

var util = require("./utils/util"), cgi = require("./utils/cgi"), cgiLonglink = require("./utils/cgi_longlink"), kitchenStorage = require("./utils/kitchenStorage"), reporter = require("./utils/reporter.js"), reportSession = require("./utils/report_session"), appLaunchData = require("./utils/appLaunchData"), abTestUtil = require("./utils/ABTestUtil.js"), stackBuffer = util.createRingBuffer(32);

util.setLogManager();

var hasLaunched = !1, launchListeners = [], hasCheckedUserState = !1, getLocationOK = !1, cgiLoginSuccess = !1, showIndexItemDistance = !1, shouldGetProfileToCheckLocation = !1, hasStartedGettingLocation = !1, canShowModifyUserLocationTip = !1, hasModifiedUserLocationByCgi = !1, shouldShowModifyUserLocationTip = !1, isShowingModifyUserLocationTip = !1, shouldShowUserFirstAuthorizationTip = !1, isShowingUserFirstAuthorizationTip = !1, appLaunchSessionIdCachedForAuthorizationTip = 0, shouldShowGetUserLocationErrorTip = !1, isShowingGetUserLocationErrorTip = !1, hasReportedAppLaunchTotalTime = !1, hasReportedAppLaunchLocationInfo = !1, shouldCreateNewReportSession = !0, launchForPreOpen = !1, canStartMainProcess = !1, lastGetLocationResultTime = 0, getLocationMinTimeInterval = 6e4, useFollow = null, USE_TAB_STYLE_FOR_TIMELINE_KEY = "useTabStyleForTimelineKey", USE_FOLLOW_KEY = "useFollowKey", enumUserStateAtLab = {
    Unknown: 0,
    NoLabItem: 1,
    Closed: 2,
    Open: 3
}, enumUserStateError = {
    ok: 0,
    notExpUser: 1,
    shouldUpdateWeChat: 2,
    labItemClosed: 3,
    regionNotAllowed: 4,
    isPad: 5,
    firstLaunch: 6,
    regionNotAllowedAndFirstLaunch: 7,
    unknown: 99,
    error: -1
}, enumGetProfileScene = {
    checkUserStatusAndLocation: 0,
    onlyCheckLocation: 1
}, MMLIFEAPP_USER_STATUS_FLAG_EXP_USER = 1, MMLIFEAPP_USER_STATUS_FLAG_ENABLE_KITCHEN = 2, MMLIFEAPP_USER_STATUS_FLAG_REGION_ALLOW = 4, MMLIFEAPP_USER_STATUS_FLAG_EXP_SWITCH_OPEN = 8, MMLIFEAPP_USER_STATUS_FLAG_AUTHORIZED = 16, MMLIFEAPP_USER_STATUS_FLAG_FOLD_FRIEND_VISIT_PAGE = 32, MMLIFEAPP_USER_STATUS_FLAG_DoubleTabStyle = 64, MMLIFEAPP_USER_STATUS_FLAG_GridCellStyle = 128, MMLIFEAPP_USER_STATUS_FLAG_GridCellActivityStyle = 256, MMLIFEAPP_USER_STATUS_FLAG_OpenFollowFwitch = 512, HAS_SHOWN_USER_FIRST_LAUNCH_TIP_KEY = "hasShownUserFirstLaunchTip", userHasModifiedLocation = !1, userStateAtLab = enumUserStateAtLab.Unknown, userStatusFlagAtServer = 0, userStateErrorCode = enumUserStateError.unknown, userStateChangeListeners = [], kv16878ReportData = {
    timelineExposedSet: new Set(),
    timelineAllExposedSet: new Set()
};

function addUserStateChangeListener(e) {
    e && (userStateErrorCode != enumUserStateError.unknown ? e() : userStateChangeListeners.push(e));
}

function notifyUserStateChangeListener() {
    if (userStateChangeListeners.length) for (var e = 0; e < userStateChangeListeners.length; e++) {
        (0, userStateChangeListeners[e])();
    }
}

var _launchListenerId = 1;

function addLaunchListener(e) {
    if (e) return hasLaunched ? (e(), 0) : (launchListeners.push({
        id: _launchListenerId,
        func: e
    }), ++_launchListenerId);
}

function notifyLaunchListener() {
    if (launchListeners.length) for (var e = 0; e < launchListeners.length; e++) {
        (0, launchListeners[e].func)();
    }
    launchListeners = [];
}

function removeLaunchListener(e) {
    if (launchListeners.length) for (var t = 0; t < launchListeners.length; t++) {
        launchListeners[t].id === e && launchListeners.splice(t, 1);
    }
}

var infoUpdateEvent = {
    addImpression: "addImpression",
    deleteImpression: "deleteImpression",
    updateImpressionCommentCount: "updateImpressionCommentCount"
}, infoUpdateEventKey = {
    friendsTimeline: "friendsTimeline",
    me: "me",
    searchResultImpression: "searchResultImpression",
    poiDetail: "poiDetail",
    commentFeed: "commentFeed",
    indexTag: "indexTag",
    timeline: "timeline",
    timelineAll: "timelineAll",
    userProfile: "userProfile",
    activity: "activity"
}, infoUpdateEventListeners = {};

function isValidInfoUpdateEventKey(e) {
    if (!e || 0 == e.length) return !1;
    for (var t in infoUpdateEventKey) {
        if (infoUpdateEventKey[t] == e) return !0;
    }
    return !1;
}

function addInfoUpdateEventListeners(e, t, o) {
    if (o && isValidInfoUpdateEventKey(e) && null != t) {
        switch (infoUpdateEventListeners[e] || (infoUpdateEventListeners[e] = {}), t) {
          case infoUpdateEvent.addImpression:
            infoUpdateEventListeners[e].addImpression = o;
            break;

          case infoUpdateEvent.deleteImpression:
            infoUpdateEventListeners[e].deleteImpression = o;
            break;

          case infoUpdateEvent.updateImpressionCommentCount:
            infoUpdateEventListeners[e].updateImpressionCommentCount = o;
        }
        console.log("addInfoUpdateEventListeners, key: " + e + ", event: " + t + ", func: " + JSON.stringify(o));
    }
}

function removeInfoUpdateEventListeners(e) {
    e && 0 != e.length && infoUpdateEventListeners[e] && (infoUpdateEventListeners[e] = void 0, 
    console.log("removeInfoUpdateEventListeners, key: " + e));
}

function notifyInfoUpdateEventListeners(e, t) {
    if (null != e) for (var o in infoUpdateEventListeners) {
        if (infoUpdateEventListeners[o]) {
            var a = infoUpdateEventListeners[o][e];
            a && (a(t), console.log("notifyInfoUpdateEventListeners, current key: " + o + ", event: " + e + ", func: " + JSON.stringify(a)));
        }
    }
}

App({
    onLaunch: function onLaunch(e) {
        if (console.log("app onLaunch, res: " + JSON.stringify(e)), e.scene) {
            var t = parseInt(e.scene);
            reportSession.setLaunchScene(t), this.globalData.appLaunchReportData.launchScene = t;
        }
        launchForPreOpen = !1;
        var o = !0;
        e.prerender && 1 == e.prerender && (launchForPreOpen = !0, o = !1), this.checkAndCreateNewReportSession(), 
        this.updateNavigationBarForAppLaunch(!0), this.tryStartApp(o, !0), abTestUtil.getAllABTestValues();
    },
    onShow: function onShow(e) {
        var t = this;
        if (console.log("app onShow, res: ", e), e.scene) {
            var o = parseInt(e.scene);
            reportSession.setLaunchScene(o);
        }
        var a = util.getSysInfo();
        util.getNetworkType().then(function(e) {
            a.networkType = e, t.globalData.sysInfo = a, console.log(a);
        });
        this.checkAndCreateNewReportSession();
        var n = !1;
        e.prerender && 1 == e.prerender && (n = !0), 0 == n && launchForPreOpen && (launchForPreOpen = !1, 
        hasStartedGettingLocation ? console.error("app onShow, (isPrerender == false) && launchForPreOpen, but hasStartedGettingLocation!") : this.checkAndGetLocation(), 
        canStartMainProcess && this.startMainProcess()), this.checkAndShowModalForTips(), 
        reporter.setTimeout4BatchReport();
    },
    onHide: function onHide(e) {
        isShowingUserFirstAuthorizationTip && this.reportAppLaunchUserFirstAuthorization(2);
        var t = getCurrentPages();
        t && t.length && "pages/timeline/timeline" == t[t.length - 1].route && (shouldCreateNewReportSession = !0);
        this.globalData.kv16878ReportData.timelineExposedSet.clear(), this.globalData.kv16878ReportData.timelineAllExposedSet.clear(), 
        reporter.clearTimeout4BatchReport(), reporter.batchReportAll();
    },
    checkAndCreateNewReportSession: function checkAndCreateNewReportSession() {
        shouldCreateNewReportSession ? (console.log("create new report session"), shouldCreateNewReportSession = !1, 
        reportSession.createNewSession(), this.checkAndUpdateUserCurrentLocation()) : console.log("should not create new report session, return");
    },
    updateNavigationBarForAppLaunch: function updateNavigationBarForAppLaunch(e) {
        if (e) wx.setNavigationBarTitle({
            title: "加载中"
        }), wx.showNavigationBarLoading(); else {
            var t = "", o = getCurrentPages();
            if (o && o.length) "pages/timeline/timeline" == o[o.length - 1].route && (t = "附近的餐厅");
            wx.setNavigationBarTitle({
                title: t
            }), wx.hideNavigationBarLoading();
        }
    },
    tryStartApp: function tryStartApp(e, t) {
        if (util.isIPad()) return userStateErrorCode = enumUserStateError.isPad, notifyUserStateChangeListener(), 
        void this.updateNavigationBarForAppLaunch(!1);
        t && (this.globalData.appLaunchSessionId = util.getTimeRandomId(), this.globalData.appLaunchReportData.appLaunchStartTime = new Date().getTime()), 
        wx.hideTabBar(), this.getLocalLabInfo();
        var o = appLaunchData.getAuthData();
        o.openId && o.openId.length && o.sessionKey && o.sessionKey.length ? (this.globalData.appLaunchReportData.cachedSessionKeyResult = 1, 
        this.getProfileWithScene(enumGetProfileScene.checkUserStatusAndLocation, !e)) : (this.globalData.appLaunchReportData.cachedSessionKeyResult = 3, 
        this.appLogin()), e && this.checkAndGetLocation();
    },
    retryStartApp: function retryStartApp() {
        userStateErrorCode = enumUserStateError.unknown, notifyUserStateChangeListener(), 
        this.updateNavigationBarForAppLaunch(!0), this.tryStartApp(!1, !1);
    },
    startAppFailed: function startAppFailed() {
        userStateErrorCode = enumUserStateError.error, notifyUserStateChangeListener(), 
        this.updateNavigationBarForAppLaunch(!1);
    },
    getHasLaunched: function getHasLaunched() {
        return hasLaunched;
    },
    checkAndGetLocation: function checkAndGetLocation() {
        console.log("TimeRecord, start checkAndGetLocation: " + JSON.stringify(new Date())), 
        hasStartedGettingLocation = !0, getLocationOK = !1, shouldGetProfileToCheckLocation = !1;
        var e = this;
        this.getLocation(function(t) {
            var o = t.latitude, a = t.longitude;
            if (("devtools" === util.getSysInfo().platform || kitchenStorage.getShouldLocateDefault()) && (o = kitchenStorage.getDefaultLocationLatitude(), 
            a = kitchenStorage.getDefaultLocationLongitude()), o && a) {
                appLaunchData.updateUserRealCurrentLocation(o, a);
                var n = t.speed, i = t.accuracy;
                if (console.log("latitude=", o, "longitude=", a, "speed=", n, "accuracy=", i), console.log("TimeRecord, getLocation success: " + JSON.stringify(new Date())), 
                e.globalData.appLaunchSessionId > 0) {
                    var r = new Date().getTime();
                    e.globalData.appLaunchReportData.getLocationTime = r - e.globalData.appLaunchReportData.appLaunchStartTime, 
                    0 == e.globalData.appLaunchReportData.getLocationResult && (e.globalData.appLaunchReportData.getLocationResult = 1), 
                    cgiLoginSuccess && e.reportAppLaunchTimeCost();
                }
                getLocationOK = !0, hasCheckedUserState ? e.getProfileWithScene(enumGetProfileScene.onlyCheckLocation) : shouldGetProfileToCheckLocation = !0;
            } else e.getLocationError(t);
        }, function(t) {
            e.getLocationError(t);
        });
    },
    getLocationError: function getLocationError(e) {
        console.error("获取地理位置失败, result: " + JSON.stringify(e)), shouldShowGetUserLocationErrorTip = !0, 
        this.checkAndShowModalForTips();
    },
    appLogin: function appLogin() {
        console.log("TimeRecord, start appLogin: " + JSON.stringify(new Date())), cgiLoginSuccess = !1;
        var e = this;
        cgi.login(function() {
            if (console.log("TimeRecord, cgi.login success: " + JSON.stringify(new Date())), 
            cgiLoginSuccess = !0, e.globalData.appLaunchSessionId > 0) {
                var t = new Date().getTime();
                e.globalData.appLaunchReportData.loginProcessTime = t - e.globalData.appLaunchReportData.appLaunchStartTime;
            }
            shouldGetProfileToCheckLocation = !1, e.getProfileWithScene(enumGetProfileScene.checkUserStatusAndLocation);
        }, function() {
            e.startAppFailed();
        });
    },
    getProfileWithScene: function getProfileWithScene(e, t) {
        console.log("getProfileWithScene: " + e + ", _ignoreLocation: " + t), void 0 === e && (e = enumGetProfileScene.checkUserStatusAndLocation);
        var o = this, a = e == enumGetProfileScene.checkUserStatusAndLocation, n = (e == enumGetProfileScene.onlyCheckLocation || e == enumGetProfileScene.checkUserStatusAndLocation) && !t;
        a && (o.globalData.appLaunchReportData.firstGetProfileStartTime = new Date().getTime(), 
        cgiLoginSuccess && o.reportAppLaunchTimeCost());
        var i = getLocationOK, r = appLaunchData.getUserLocation();
        i && (r = appLaunchData.getUserRealCurrentLocation()), new cgi.SimpleRequest("getprofile", {
            location: r,
            scene: e
        }).send(function(e) {
            if (console.log("getprofile success, userInfo: " + JSON.stringify(e.userInfo)), 
            a && (cgiLoginSuccess = !0, e.userInfo && (o.globalData.userInfo = e.userInfo), 
            e.statusFlag && (userStatusFlagAtServer = e.statusFlag, o.globalData.appLaunchReportData.userStatusFlag = userStatusFlagAtServer, 
            o.updateABTestValueByUserStatusFlag()), o.globalData.appLaunchSessionId > 0)) {
                var t = new Date().getTime();
                o.globalData.appLaunchReportData.getProfileTime = t - o.globalData.appLaunchReportData.firstGetProfileStartTime, 
                o.globalData.appLaunchReportData.appLaunchTime = t - o.globalData.appLaunchReportData.appLaunchStartTime, 
                o.reportAppLaunchTimeCost();
            }
            if (n) {
                var s = e.statusFlag;
                if (void 0 === s && (console.error("data.statusFlag is undefined at getprofile cgi response"), 
                s = 0), 0 == (s & MMLIFEAPP_USER_STATUS_FLAG_REGION_ALLOW) && 0 == (userStatusFlagAtServer & MMLIFEAPP_USER_STATUS_FLAG_ENABLE_KITCHEN)) return void o.modifyUserLocation(i, a);
                appLaunchData.clearSelectedAreaId(), i && (appLaunchData.updateUserLocation(r.latitude, r.longitude), 
                appLaunchData.markCheckRealCurrentLocation(!0));
            }
            a && o.checkUserStateAndStartMainProcess();
        }, function(e) {
            if (console.error("getprofile resp failed: " + JSON.stringify(e)), a) {
                if (e && -13 == e.errorCode) return console.error("getprofile resp failed, errorCode is -13, try login"), 
                o.globalData.appLaunchReportData.cachedSessionKeyResult = 2, appLaunchData.clearAuthData(), 
                void o.appLogin();
                o.startAppFailed();
            }
        }, !0);
    },
    startMainProcess: function startMainProcess() {
        launchForPreOpen ? console.log("preOpen, do not startMainProcess now") : hasLaunched ? console.log("hasLaunched, do not startMainProcess") : (console.log("startMainProcess"), 
        userStateAtLab = enumUserStateAtLab.Open, userStateErrorCode = enumUserStateError.ok, 
        hasLaunched = !0, notifyLaunchListener());
    },
    getLocalLabInfo: function getLocalLabInfo() {
        userStateAtLab = enumUserStateAtLab.Unknown, util.canUseGetAndSetLabInfoAPI() && (console.log("TimeRecord, start getLabInfo: " + JSON.stringify(new Date())), 
        wx.getLabInfo({
            labId: "labs_nearbylife",
            success: function success(e) {
                console.log("get labInfo success: " + JSON.stringify(e)), console.log("TimeRecord, getLabInfo success: " + JSON.stringify(new Date())), 
                userStateAtLab = e.exist ? e.enabled ? enumUserStateAtLab.Open : enumUserStateAtLab.Closed : enumUserStateAtLab.NoLabItem;
            },
            fail: function fail(e) {
                console.error("get labInfo failed: " + JSON.stringify(e)), console.log("TimeRecord, getLabInfo failed: " + JSON.stringify(new Date())), 
                userStateAtLab = enumUserStateAtLab.Unknown;
            }
        }));
    },
    checkUserState: function checkUserState() {
        return console.log("checkUserState, userStatusFlagAtServer: " + JSON.stringify(userStatusFlagAtServer)), 
        console.log("checkUserState, userStateAtLab: " + userStateAtLab), userStateErrorCode = enumUserStateError.ok, 
        userStateAtLab == enumUserStateAtLab.NoLabItem && 0 != (userStatusFlagAtServer & MMLIFEAPP_USER_STATUS_FLAG_EXP_USER) && console.log("is exp user at server, but no lab item"), 
        0 == (userStatusFlagAtServer & MMLIFEAPP_USER_STATUS_FLAG_EXP_USER) ? userStateErrorCode = enumUserStateError.notExpUser : (userStateAtLab == enumUserStateAtLab.Unknown && (console.log("checkUserState, local result is Unknown. Use userStatusFlagAtServer"), 
        util.canUseGetAndSetLabInfoAPI() && console.error("Is exp user and has api: wx.getLabInfo. But userStateAtLab is still Unknown when checkUserState."), 
        0 == util.canUseApp() && (userStateErrorCode = enumUserStateError.shouldUpdateWeChat), 
        0 == (userStatusFlagAtServer & MMLIFEAPP_USER_STATUS_FLAG_EXP_SWITCH_OPEN) && (userStateErrorCode = enumUserStateError.labItemClosed)), 
        userStateAtLab == enumUserStateAtLab.NoLabItem && (userStateErrorCode = enumUserStateError.notExpUser), 
        userStateAtLab == enumUserStateAtLab.Closed && (userStateErrorCode = enumUserStateError.labItemClosed)), 
        userStateErrorCode == enumUserStateError.notExpUser && (console.log("checkUserState, not exp user"), 
        userStateErrorCode = enumUserStateError.ok), userStateErrorCode == enumUserStateError.labItemClosed && (console.log("checkUserState, lab item closed"), 
        userStateErrorCode = enumUserStateError.ok), "devtools" != util.getSysInfo().platform && userStateErrorCode == enumUserStateError.ok && 0 == (userStatusFlagAtServer & MMLIFEAPP_USER_STATUS_FLAG_AUTHORIZED) && (shouldShowUserFirstAuthorizationTip = !0, 
        appLaunchSessionIdCachedForAuthorizationTip = this.globalData.appLaunchSessionId, 
        this.checkAndShowModalForTips(), this.globalData.appLaunchReportData.showUserFirstLaunchTip = 1, 
        this.reportAppLaunchTimeCost()), hasCheckedUserState = !0, shouldGetProfileToCheckLocation && getLocationOK && (shouldGetProfileToCheckLocation = !1, 
        this.getProfileWithScene(enumGetProfileScene.onlyCheckLocation)), notifyUserStateChangeListener(), 
        this.updateNavigationBarForAppLaunch(!1), (userStateErrorCode == enumUserStateError.ok || "devtools" == util.getSysInfo().platform) && (this.globalData.appLaunchReportData.showUserFirstLaunchTip = 2, 
        this.reportAppLaunchTimeCost(), !0);
    },
    getLocation: function getLocation(e, t) {
        var o = this;
        wx.getSetting({
            success: function success(a) {
                console.log("setting", a), a.authSetting["scope.userLocation"] ? wx.getLocation({
                    type: "gcj02",
                    success: function success(t) {
                        lastGetLocationResultTime = new Date().getTime(), e && e(t);
                    },
                    fail: function fail(e) {
                        lastGetLocationResultTime = new Date().getTime(), t && t(e);
                    }
                }) : wx.authorize({
                    scope: "scope.userLocation",
                    success: function success(o) {
                        wx.getLocation({
                            type: "gcj02",
                            success: function success(t) {
                                lastGetLocationResultTime = new Date().getTime(), e && e(t);
                            },
                            fail: function fail(e) {
                                lastGetLocationResultTime = new Date().getTime(), t && t(e);
                            }
                        });
                    },
                    fail: function fail(e) {
                        o.getLocationError(e);
                    }
                });
            }
        });
    },
    checkAndShowModalForTips: function checkAndShowModalForTips() {
        launchForPreOpen ? console.log("is launch for PreOpen, do not show tips now, return") : shouldShowGetUserLocationErrorTip || shouldShowUserFirstAuthorizationTip || shouldShowModifyUserLocationTip ? isShowingGetUserLocationErrorTip ? console.log("isShowingGetUserLocationErrorTip, return") : isShowingUserFirstAuthorizationTip ? console.log("isShowingUserFirstAuthorizationTip, return") : isShowingModifyUserLocationTip ? console.log("isShowingModifyUserLocationTip, return") : shouldShowGetUserLocationErrorTip ? this.showGetUserLocationErrorTip() : shouldShowUserFirstAuthorizationTip ? this.showUserFirstAuthorizationTip() : shouldShowModifyUserLocationTip && this.showModifyUserLocationTip() : console.log("no tip should show, return");
    },
    showGetUserLocationErrorTip: function showGetUserLocationErrorTip() {
        var e = this;
        console.log("showGetUserLocationErrorTip"), shouldShowGetUserLocationErrorTip = !1, 
        isShowingGetUserLocationErrorTip = !0, wx.showModal({
            title: "",
            content: "定位服务未开启，开启定位服务可获得更好的推荐",
            cancelText: "下次再说",
            confirmText: "已开启",
            success: function success(t) {
                t.confirm ? (console.log("showGetUserLocationErrorTip, system or WeChat location showModel, result confirm"), 
                isShowingGetUserLocationErrorTip = !1, e.checkAndShowModalForTips(), e.globalData.appLaunchReportData.getLocationResult = 2, 
                cgiLoginSuccess && e.reportAppLaunchTimeCost(), e.checkAndGetLocation()) : (t.cancel ? console.error("showGetUserLocationErrorTip, system or WeChat location showModel, result cancel") : console.error("showGetUserLocationErrorTip, system or WeChat location showModel, result invalid"), 
                isShowingGetUserLocationErrorTip = !1, e.checkAndShowModalForTips(), e.globalData.appLaunchReportData.getLocationResult = 3, 
                cgiLoginSuccess && e.reportAppLaunchTimeCost(), appLaunchData.markCheckRealCurrentLocation(!1));
            }
        });
    },
    showModifyUserLocationTip: function showModifyUserLocationTip() {
        var e = this;
        isShowingModifyUserLocationTip = !0, shouldShowModifyUserLocationTip = !1, hasModifiedUserLocationByCgi = !1, 
        console.log("showModifyUserLocationTip"), wx.showModal({
            title: "",
            content: "当前仅支持查看广州地区的餐厅",
            showCancel: !1,
            confirmText: "知道了",
            success: function success(t) {
                t.confirm ? (console.log("showModifyUserLocationTip showModel, result confirm"), 
                isShowingModifyUserLocationTip = !1, e.checkAndShowModalForTips()) : t.cancel && (console.error("showModifyUserLocationTip showModel, result cancel"), 
                isShowingModifyUserLocationTip = !1, e.checkAndShowModalForTips());
            }
        });
    },
    showUserFirstAuthorizationTip: function showUserFirstAuthorizationTip() {
        var e = this;
        isShowingUserFirstAuthorizationTip = !0, console.log("showUserFirstAuthorizationTip"), 
        wx.showModal({
            title: "请注意",
            content: "你可以在此分享餐厅，你发表的内容可以被所有人看到。\n我们会根据你的地理位置信息向你推荐餐厅。目前仅支持查看广州地区的餐厅。\n你可以在个人主页中点击右上角按钮查看平台规范。",
            confirmText: "知道了",
            showCancel: !1,
            success: function success(t) {
                t.confirm ? (console.log("showUserFirstAuthorizationTip showModel, result confirm"), 
                isShowingUserFirstAuthorizationTip = !1, shouldShowUserFirstAuthorizationTip = !1, 
                e.reportAppLaunchUserFirstAuthorization(1), e.sendUserAuthorizeAction(), e.checkAndShowModalForTips()) : (console.error("showUserFirstAuthorizationTip showModel. result.confirm is false, result.cancel is: " + t.cancel), 
                isShowingUserFirstAuthorizationTip = !1, shouldShowUserFirstAuthorizationTip = !1, 
                e.reportAppLaunchUserFirstAuthorization(2), util.appNavigateBack());
            }
        });
    },
    sendUserAuthorizeAction: function sendUserAuthorizeAction() {
        new cgi.SimpleRequest("userauthorize", {}).send(function(e) {
            console.log("userauthorize success");
        }, function(e) {
            console.error("userauthorize resp failed: " + JSON.stringify(e));
        });
    },
    reportAppLaunchUserFirstAuthorization: function reportAppLaunchUserFirstAuthorization(e) {
        var t = launchForPreOpen ? 1 : 0;
        reporter.getReporter(16597).sessionId(appLaunchSessionIdCachedForAuthorizationTip).appLaunchTime(0).getLocationTime(0).loginProcessTime(0).wxLoginTime(0).cgiLoginTime(0).cgiLongLinkTime(0).getProfileTime(0).getFriendsTimelineTime(0).totalTimeCost(0).cachedSessionKeyResult(0).getLocationResult(0).isFriendsTimelineCacheHit(0).launchScene(0).userStatusFlag(0).showUserFirstLaunchTip(0).userAuthorizeAction(e).isPreOpen(t).reportToServer();
    },
    globalData: {
        picList: [],
        currentPicIndex: 0,
        deletePicFunc: function deletePicFunc() {},
        userInfo: {},
        sysInfo: {},
        curentTabItemIndex: 0,
        poiDetailPicItemList: [],
        poiDetailPicItemCurrentIndex: 0,
        poiCommentSourceType: 0,
        postCommentFromPoiDetail: !0,
        selectedPoiItem: {},
        appLaunchReportData: {
            appLaunchStartTime: 0,
            cgiLoginStartTime: 0,
            cgiLongLinkStartTime: 0,
            firstGetProfileStartTime: 0,
            firstGetFriendsTimelineStartTime: 0,
            appLaunchTime: 0,
            getLocationTime: 0,
            loginProcessTime: 0,
            wxLoginTime: 0,
            cgiLoginTime: 0,
            cgiLongLinkTime: 0,
            getProfileTime: 0,
            getFriendsTimelineTime: 0,
            totalTimeCost: 0,
            cachedSessionKeyResult: 0,
            getLocationResult: 0,
            isFriendsTimelineCacheHit: 0,
            launchScene: 0,
            userStatusFlag: 0,
            showUserFirstLaunchTip: 0
        },
        appLaunchSessionId: 0,
        kv16878ReportData: kv16878ReportData
    },
    addLaunchListener: addLaunchListener,
    removeLaunchListener: removeLaunchListener,
    enumUserStateError: enumUserStateError,
    addUserStateChangeListener: addUserStateChangeListener,
    getUserState: function getUserState() {
        return userStateErrorCode;
    },
    canOpenKitchen: function canOpenKitchen() {
        return !!(userStatusFlagAtServer & MMLIFEAPP_USER_STATUS_FLAG_ENABLE_KITCHEN);
    },
    reportAppLaunchTimeCost: function reportAppLaunchTimeCost() {
        var e = !1;
        this.globalData.appLaunchReportData.totalTimeCost && (hasReportedAppLaunchTotalTime = !0), 
        (this.globalData.appLaunchReportData.getLocationTime || 3 == this.globalData.appLaunchReportData.getLocationResult) && (hasReportedAppLaunchLocationInfo = !0), 
        hasReportedAppLaunchTotalTime && hasReportedAppLaunchLocationInfo && (e = !0), this.globalData.appLaunchSessionId <= 0 && console.error("reportAppLaunchTimeCost error: globalData.appLaunchSessionId <= 0");
        var t = launchForPreOpen ? 1 : 0;
        reporter.getReporter(16597).sessionId(this.globalData.appLaunchSessionId).appLaunchTime(this.globalData.appLaunchReportData.appLaunchTime).getLocationTime(this.globalData.appLaunchReportData.getLocationTime).loginProcessTime(this.globalData.appLaunchReportData.loginProcessTime).wxLoginTime(this.globalData.appLaunchReportData.wxLoginTime).cgiLoginTime(this.globalData.appLaunchReportData.cgiLoginTime).cgiLongLinkTime(this.globalData.appLaunchReportData.cgiLongLinkTime).getProfileTime(this.globalData.appLaunchReportData.getProfileTime).getFriendsTimelineTime(this.globalData.appLaunchReportData.getFriendsTimelineTime).totalTimeCost(this.globalData.appLaunchReportData.totalTimeCost).cachedSessionKeyResult(this.globalData.appLaunchReportData.cachedSessionKeyResult).getLocationResult(this.globalData.appLaunchReportData.getLocationResult).isFriendsTimelineCacheHit(this.globalData.appLaunchReportData.isFriendsTimelineCacheHit).launchScene(this.globalData.appLaunchReportData.launchScene).userStatusFlag(this.globalData.appLaunchReportData.userStatusFlag).showUserFirstLaunchTip(this.globalData.appLaunchReportData.showUserFirstLaunchTip).userAuthorizeAction(0).isPreOpen(t).reportToServer(), 
        e ? (this.globalData.appLaunchSessionId = 0, this.globalData.appLaunchReportData = {
            appLaunchStartTime: 0,
            cgiLoginStartTime: 0,
            cgiLongLinkStartTime: 0,
            firstGetProfileStartTime: 0,
            firstGetFriendsTimelineStartTime: 0,
            appLaunchTime: 0,
            getLocationTime: 0,
            loginProcessTime: 0,
            wxLoginTime: 0,
            cgiLoginTime: 0,
            cgiLongLinkTime: 0,
            getProfileTime: 0,
            getFriendsTimelineTime: 0,
            totalTimeCost: 0,
            cachedSessionKeyResult: 0,
            getLocationResult: 0,
            isFriendsTimelineCacheHit: 0,
            launchScene: 0,
            userStatusFlag: 0,
            showUserFirstLaunchTip: 0
        }) : (this.globalData.appLaunchReportData.appLaunchTime = 0, this.globalData.appLaunchReportData.getLocationTime = 0, 
        this.globalData.appLaunchReportData.loginProcessTime = 0, this.globalData.appLaunchReportData.wxLoginTime = 0, 
        this.globalData.appLaunchReportData.cgiLoginTime = 0, this.globalData.appLaunchReportData.cgiLongLinkTime = 0, 
        this.globalData.appLaunchReportData.getProfileTime = 0, this.globalData.appLaunchReportData.getFriendsTimelineTime = 0, 
        this.globalData.appLaunchReportData.totalTimeCost = 0, this.globalData.appLaunchReportData.cachedSessionKeyResult = 0, 
        this.globalData.appLaunchReportData.getLocationResult = 0, this.globalData.appLaunchReportData.isFriendsTimelineCacheHit = 0, 
        this.globalData.appLaunchReportData.launchScene = 0, this.globalData.appLaunchReportData.userStatusFlag = 0, 
        this.globalData.appLaunchReportData.showUserFirstLaunchTip = 0);
    },
    addInfoUpdateEventListeners: addInfoUpdateEventListeners,
    removeInfoUpdateEventListeners: removeInfoUpdateEventListeners,
    notifyInfoUpdateEventListeners: notifyInfoUpdateEventListeners,
    infoUpdateEvent: infoUpdateEvent,
    infoUpdateEventKey: infoUpdateEventKey,
    setHasShownUserFirstLaunchTipValue: function setHasShownUserFirstLaunchTipValue() {
        wx.setStorageSync(HAS_SHOWN_USER_FIRST_LAUNCH_TIP_KEY, "1");
    },
    setUserLabStateOpen: function setUserLabStateOpen() {
        userStateAtLab = enumUserStateAtLab.Open;
    },
    modifyUserLocation: function modifyUserLocation(e, t, o, a) {
        console.log("modifyUserLocation start, useRealLocationBefore: " + e + ", checkMainProcess: " + t), 
        e && (hasModifiedUserLocationByCgi = !0, canShowModifyUserLocationTip && (shouldShowModifyUserLocationTip = !0, 
        this.checkAndShowModalForTips()));
        var n = appLaunchData.getModifiedLocation();
        if (n.latitude && n.longitude) return appLaunchData.markCheckRealCurrentLocation(!1), 
        appLaunchData.updateSelectedAreaId("areafilter_7742324733502755168"), appLaunchData.updateUserLocation(n.latitude, n.longitude), 
        void console.log("modifyUserLocation, use cachedModifiedLocation, return!");
        var i = this;
        new cgi.SimpleRequest("moduserlocation", {
            areaId: "areafilter_7742324733502755168"
        }).send(function(e) {
            if (console.log("modifyUserLocation success: " + JSON.stringify(e)), !e.location || !e.location.latitude || !e.location.longitude) return console.error("modifyUserLocation resp data location invalid"), 
            a && a(e), void (t && i.startAppFailed());
            appLaunchData.markCheckRealCurrentLocation(!1), appLaunchData.updateSelectedAreaId("areafilter_7742324733502755168"), 
            appLaunchData.updateUserLocation(e.location.latitude, e.location.longitude), appLaunchData.updateModifiedLocation(e.location.latitude, e.location.longitude), 
            o && o(e), t && i.checkUserStateAndStartMainProcess();
        }, function(e) {
            console.error("modifyUserLocation resp failed: " + JSON.stringify(e)), a && a(e), 
            t && i.startAppFailed();
        });
    },
    checkUserStateAndStartMainProcess: function checkUserStateAndStartMainProcess() {
        this.checkUserState() && (canStartMainProcess = !0, this.startMainProcess());
    },
    onFuncBefore: function onFuncBefore(e, t, o) {
        stackBuffer.push({
            type: "before",
            funcId: e,
            funcName: t,
            args: [].slice.call(o)
        });
    },
    onFuncAfter: function onFuncAfter(e) {
        stackBuffer.push({
            type: "after",
            funcId: e
        });
    },
    onError: function onError(e) {
        stackBuffer = util.createRingBuffer(32);
    },
    checkAndShowModifyUserLocationTip: function checkAndShowModifyUserLocationTip() {
        console.log("checkAndShowModifyUserLocationTip, hasModifiedUserLocationByCgi is: " + hasModifiedUserLocationByCgi), 
        canShowModifyUserLocationTip = !0, hasModifiedUserLocationByCgi && (shouldShowModifyUserLocationTip = !0, 
        this.checkAndShowModalForTips());
    },
    checkAndUpdateUserCurrentLocation: function checkAndUpdateUserCurrentLocation() {
        if ("devtools" === util.getSysInfo().platform || kitchenStorage.getShouldLocateDefault()) console.log("checkAndUpdateUserCurrentLocation, is devtools or using kitchen location. return!"); else if (appLaunchData.isUsingRealCurrentLocation()) {
            var e = new Date().getTime() - lastGetLocationResultTime;
            e < getLocationMinTimeInterval ? console.log("checkAndUpdateUserCurrentLocation, timeFromLastGetLocation < getLocationMinTimeInterval, return! timeFromLastGetLocation: " + e) : (console.log("checkAndUpdateUserCurrentLocation, start get location, timeFromLastGetLocation: " + e), 
            wx.getLocation({
                type: "gcj02",
                success: function success(e) {
                    lastGetLocationResultTime = new Date().getTime();
                    var t = e.latitude, o = e.longitude;
                    if (("devtools" === util.getSysInfo().platform || kitchenStorage.getShouldLocateDefault()) && (t = kitchenStorage.getDefaultLocationLatitude(), 
                    o = kitchenStorage.getDefaultLocationLongitude()), t && o) {
                        appLaunchData.isUsingRealCurrentLocation() && appLaunchData.updateUserLocation(t, o);
                        var a = e.speed, n = e.accuracy;
                        console.log("checkAndUpdateUserCurrentLocation, wx.getLocation success, latitude=", t, "longitude=", o, "speed=", a, "accuracy=", n);
                    } else console.error("checkAndUpdateUserCurrentLocation, wx.getLocation failed, invalid location, value");
                },
                fail: function fail(e) {
                    lastGetLocationResultTime = new Date().getTime(), console.error("checkAndUpdateUserCurrentLocation, wx.getLocation failed, error: " + JSON.stringify(e));
                }
            }));
        } else console.log("checkAndUpdateUserCurrentLocation, is not UsingRealCurrentLocation, return!");
    },
    shouldFoldFriendVisitPage: function shouldFoldFriendVisitPage() {
        return console.log("check MMLIFEAPP_USER_STATUS_FLAG_FOLD_FRIEND_VISIT_PAGE, userStatusFlagAtServer is " + userStatusFlagAtServer), 
        !!(userStatusFlagAtServer & MMLIFEAPP_USER_STATUS_FLAG_FOLD_FRIEND_VISIT_PAGE);
    },
    isPreOpen: function isPreOpen() {
        return launchForPreOpen;
    },
    updateABTestValueByUserStatusFlag: function updateABTestValueByUserStatusFlag() {
        useFollow = !!(userStatusFlagAtServer & MMLIFEAPP_USER_STATUS_FLAG_OpenFollowFwitch), 
        wx.setStorage({
            key: USE_FOLLOW_KEY,
            data: useFollow,
            success: function success(e) {
                console.log("setStorage useFollow success");
            },
            fail: function fail(e) {
                console.error("setStorage useFollow failed: " + JSON.stringify(e));
            }
        });
    },
    shouldUseFollow: function shouldUseFollow() {
        if (null == useFollow) try {
            useFollow = wx.getStorageSync(USE_FOLLOW_KEY);
        } catch (e) {
            console.error("wx.getStorageSync(USE_FOLLOW_KEY) error: " + JSON.stringify(e)), 
            useFollow = !1;
        }
        return console.log("shouldUseFollow: " + useFollow), useFollow;
    }
});