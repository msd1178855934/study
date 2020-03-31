var util = require("./util"), reporter = require("./reporter"), reportSession = require("./report_session"), abTestUtil = require("./ABTestUtil"), chooseMediaUtil = require("./chooseMediaUtil"), kitchenStorage = require("./kitchenStorage"), cgi = require("./cgi"), appLaunchData = require("./appLaunchData"), enumPostResult = {
    SUCCESS: 1,
    NOT_POST: 2,
    FAILED: 3
}, enumChooseMediaResult = {
    NO_CHOOSE: 1,
    CHOOSE_CANCELLED: 2,
    CHOOSE_SUCCESS: 3,
    CHOOSE_FAILED: 4,
    NO_POI_CANNOT_CHOOSE: 5
}, enumChoosePoiResult = {
    NO_CHOOSE: 1,
    CHOOSE_CANCELLED: 2,
    CHOOSE_RECOMMENDED_POI: 3,
    CHOOSE_USER_SEARCHED_POI: 4
}, enumActionSheetResult = {
    NOT_SHOW: 1,
    ACTION_SHEET_CANCELLED: 2,
    CHOOSE_MEDIA_OK: 3,
    CHOOSE_MEDIA_CANCELLED: 4,
    TEXT_DIRECTLY: 5,
    ACTION_SHEET_FAILED: 6,
    CHOOSE_MEDIA_FAILED: 7
}, enumTopicResult = {
    NO: 1,
    CHOOSE_RECOMMENDED_TOPIC: 2,
    CHOOSE_AT_LIST: 3,
    DELETED: 4,
    DEFAULT: 5
}, sessionType = 0, sessionId = 0, startScene = 0, startTime = 0, lastScene = 0, enterPostViewTime = 0, poiId = "", longitude = 0, latitude = 0, poiName = "", impressionId = "", clickPostTime = 0, postResult = 0, getResultTime = 0, endTime = 0, endScene = 0, hasInputtedText = 0, chooseMediaResult = 0, choosePoiResult = 0, queryStringList = "", actionSheetResult = 0, topicResult = 0, distanceType = 0, poiItemToPostImpression = {
    hasNew: !1
}, mediaItemsToPostImpression = {
    hasNew: !1
}, topicItemList = [], topicItemToPostImpression = {
    hasNew: !1
};

function clearReportData() {
    sessionType = 0, sessionId = 0, startScene = 0, startTime = 0, lastScene = 0, enterPostViewTime = 0, 
    poiId = "", longitude = 0, latitude = 0, poiName = "", impressionId = "", clickPostTime = 0, 
    postResult = 0, getResultTime = 0, endTime = 0, endScene = 0, hasInputtedText = 0, 
    chooseMediaResult = 0, choosePoiResult = 0, queryStringList = "", actionSheetResult = 0, 
    topicResult = 0, distanceType = 0;
}

function startPostImpressionReportProcess(e, t) {
    e && t ? (sessionId = e, startScene = t, startTime = Math.floor(new Date().getTime() / 1e3)) : console.error("invalid parameters, do not startPostImpressionReportProcess. _sessionId: " + e + ", _startScene: " + t);
}

function setLastScene(e) {
    e ? lastScene = e : console.error("invalid _lastScene: " + e);
}

function enterPostView() {
    enterPostViewTime = Math.floor(new Date().getTime() / 1e3), longitude = 0, latitude = 0, 
    poiId = "", poiName = "", impressionId = "", clickPostTime = 0, postResult = 0, 
    getResultTime = 0;
}

function setPoiId(e) {
    e ? poiId = e : console.error("invalid _poiId: " + e);
}

function setPoiName(e) {
    e ? poiName = e : console.error("invalid _poiName: " + e);
}

function setLocation(e, t) {
    e && util.isNumeric(e) && (longitude = Math.floor(1e6 * e)), t && util.isNumeric(t) && (latitude = Math.floor(1e6 * t));
}

function setImpressionId(e) {
    e ? impressionId = e : console.error("invalid _impressionId: " + e);
}

function clickPost() {
    clickPostTime = Math.floor(new Date().getTime() / 1e3);
}

function setPostResult(e) {
    if (e) switch (e) {
      case enumPostResult.SUCCESS:
        postResult = e, getResultTime = Math.floor(new Date().getTime() / 1e3);
        break;

      case enumPostResult.NOT_POST:
        postResult <= 0 && (postResult = e);
        break;

      case enumPostResult.FAILED:
        postResult = e, getResultTime = Math.floor(new Date().getTime() / 1e3);
        break;

      default:
        return void console.error("invalid _postResult: " + e);
    } else console.error("invalid _postResult: " + e);
}

function setChooseMediaResult(e) {
    !e || e < enumChooseMediaResult.NO_CHOOSE || e > enumChooseMediaResult.NO_POI_CANNOT_CHOOSE ? console.error("invalid _chooseMediaResult: " + e) : chooseMediaResult = e;
}

function setHasInputtedText(e) {
    1 == e || 2 == e ? hasInputtedText = e : console.error("invalid _hasInputtedText: " + e);
}

function setChoosePoiResult(e) {
    !e || e < enumChoosePoiResult.NO_CHOOSE || e > enumChoosePoiResult.CHOOSE_USER_SEARCHED_POI ? console.error("invalid _choosePoiResult: " + e) : choosePoiResult = e;
}

function addQueryString(e) {
    e ? queryStringList = queryStringList ? queryStringList + ";" + e : e : console.error("invalid _query");
}

function setActionSheetResult(e) {
    !e || e < enumActionSheetResult.NOT_SHOW || e > enumActionSheetResult.CHOOSE_MEDIA_FAILED ? console.error("invalid _actionSheetResult: " + e) : actionSheetResult = e;
}

function setTopicResult(e) {
    !e || e < enumTopicResult.NO || e > enumTopicResult.DEFAULT ? console.error("invalid _topicResult: " + e) : topicResult = e;
}

function updateDistanceType(e) {
    if (void 0 === e) return console.error("updateDistanceType, distance === undefined"), 
    void (distanceType = 0);
    distanceType = e <= 0 ? 0 : e < 100 ? 1 : e < 200 ? 2 : e < 500 ? 3 : e < 1e3 ? 4 : 5;
}

function triggerReport(e) {
    startScene <= 0 ? console.log("startScene <= 0, do not trigger report post impression") : !e || e <= 0 ? console.error("invalid _endScene, do not trigger report post impression") : (endScene = e, 
    endTime = Math.floor(new Date().getTime() / 1e3), reporter.getReporter(16870).sessionType(sessionType).sessionId(sessionId).startScene(startScene).startTime(startTime).lastScene(lastScene).enterPostViewTime(enterPostViewTime).poiId(poiId).longitude().latitude().poiName(poiName).impressionId(impressionId).clickPostTime(clickPostTime).postResult(postResult).getResultTime(getResultTime).endTime(endTime).endScene(endScene).hasInputtedText(hasInputtedText).chooseMediaResult(chooseMediaResult).choosePoiResult(choosePoiResult).queryStringList(queryStringList).actionSheetResult(actionSheetResult).topicResult(topicResult).distanceType(distanceType).reportToServer(), 
    clearReportData());
}

function startPostImpressionProcess(e) {
    if (e && e.startScene && e.lastScene) {
        var t = {}, o = "";
        if (e.poiInfo && e.poiInfo.id ? (updatePoiForPostImpression(e.poiInfo), e.poiInfo.name && (o = e.poiInfo.name), 
        e.poiInfo.location && e.poiInfo.location.latitude && e.poiInfo.location.longitude && (t.latitude = e.poiInfo.location.latitude, 
        t.longitude = e.poiInfo.location.longitude)) : clearPoiForPostImpression(), clearTopicItemForPostImpression(), 
        setTopicResult(enumTopicResult.NO), e.nextPageUrl && e.nextPageUrl.length || (console.error("startPostImpressionProcess, no postObject.nextPageUrl, use default value"), 
        e.nextPageUrl = "/pages/poi_comment_publish/poi_comment_publish"), startPostImpressionReportProcess(reportSession.getId(), e.startScene), 
        setLastScene(e.lastScene), !abTestUtil.shouldShowActionSheetBeforePostViewAppear() || !util.canUseChooseMultiMediaAPIWithoutPoiInfo()) return clearMediaItemsForPostImpression(), 
        setActionSheetResult(enumActionSheetResult.NOT_SHOW), void wx.navigateTo({
            url: e.nextPageUrl,
            success: function success(t) {
                console.log("startPostImpressionProcess wx.navigateTo poi_comment_publish success"), 
                e.navigateToNextPageSuccess && e.navigateToNextPageSuccess(t);
            }
        });
        var s = kitchenStorage.getPoiLocationRadius();
        chooseMediaUtil.chooseMediaWithThreeOptions(9, t, o, s, function(t) {
            if (console.log("startPostImpressionProcess, chooseMediaWithThreeOptions, success"), 
            !t || t.resultType != chooseMediaUtil.enumChooseResultType.SUCCESS) return console.error("startPostImpressionProcess, chooseMediaWithThreeOptions, success, no res or invalid res.resultType! return"), 
            setActionSheetResult(enumActionSheetResult.CHOOSE_MEDIA_FAILED), void triggerReport(startScene);
            t.textDirectly ? setActionSheetResult(enumActionSheetResult.TEXT_DIRECTLY) : setActionSheetResult(enumActionSheetResult.CHOOSE_MEDIA_OK), 
            updateMediaItemsForPostImpression(t), wx.navigateTo({
                url: e.nextPageUrl,
                success: function success(t) {
                    console.log("startPostImpressionProcess wx.navigateTo poi_comment_publish success"), 
                    e.navigateToNextPageSuccess && e.navigateToNextPageSuccess(t);
                }
            });
        }, function(e) {
            if (!e) return console.error("startPostImpressionProcess, chooseMediaWithThreeOptions failed, but no err object"), 
            setActionSheetResult(enumActionSheetResult.CHOOSE_MEDIA_FAILED), void triggerReport(startScene);
            e.resultType == chooseMediaUtil.enumChooseResultType.CANCEL ? (console.log("startPostImpressionProcess, chooseMediaWithThreeOptions CHOOSE_MEDIA_CANCELLED: " + JSON.stringify(e)), 
            setActionSheetResult(enumActionSheetResult.CHOOSE_MEDIA_CANCELLED)) : e.resultType == chooseMediaUtil.enumChooseResultType.ACTION_SHEET_CANCEL ? (console.log("startPostImpressionProcess, chooseMediaWithThreeOptions ACTION_SHEET_CANCELLED: " + JSON.stringify(e)), 
            setActionSheetResult(enumActionSheetResult.ACTION_SHEET_CANCELLED)) : e.resultType == chooseMediaUtil.enumChooseResultType.FAILED ? (console.error("startPostImpressionProcess, chooseMediaWithThreeOptions CHOOSE_MEDIA_FAILED: " + JSON.stringify(e)), 
            setActionSheetResult(enumActionSheetResult.CHOOSE_MEDIA_FAILED)) : e.resultType == chooseMediaUtil.enumChooseResultType.ACTION_SHEET_FAILED ? (console.error("startPostImpressionProcess, chooseMediaWithThreeOptions ACTION_SHEET_FAILED: " + JSON.stringify(e)), 
            setActionSheetResult(enumActionSheetResult.ACTION_SHEET_FAILED)) : (console.error("startPostImpressionProcess, chooseMediaWithThreeOptions failed, err: " + JSON.stringify(e)), 
            setActionSheetResult(enumActionSheetResult.CHOOSE_MEDIA_FAILED)), triggerReport(startScene);
        });
    } else console.error("invalid postObject, do not startPostImpressionProcess. postObject: " + JSON.stringify(e));
}

function clearPoiForPostImpression() {
    poiItemToPostImpression = {
        hasNew: !1
    };
}

function getAndClearPoiForPostImpression() {
    var e = poiItemToPostImpression;
    return poiItemToPostImpression = {
        hasNew: !1
    }, e;
}

function updatePoiForPostImpression(e) {
    poiItemToPostImpression = {
        poi: e,
        hasNew: !0
    }, updateDistanceType(e.distance);
}

function clearMediaItemsForPostImpression() {
    mediaItemsToPostImpression = {
        hasNew: !1
    };
}

function getAndClearMediaItemsForPostImpression() {
    var e = mediaItemsToPostImpression;
    return mediaItemsToPostImpression = {
        hasNew: !1
    }, e;
}

function updateMediaItemsForPostImpression(e) {
    mediaItemsToPostImpression = {
        mediaItems: e,
        hasNew: !0
    };
}

function clearTopicItemForPostImpression() {
    topicItemToPostImpression = {
        hasNew: !1
    };
}

function getAndClearTopicItemForPostImpression() {
    var e = topicItemToPostImpression;
    return topicItemToPostImpression = {
        hasNew: !1
    }, e;
}

function updateTopicItemForPostImpression(e) {
    topicItemToPostImpression = {
        topic: e,
        hasNew: !0
    };
}

function requestAllTopicList() {
    console.log("requestAllTopicList addConfirmUserLocationListener"), appLaunchData.addConfirmUserLocationListener(function() {
        console.log("start requestAllTopicList");
        var e = appLaunchData.getUserLocation();
        new cgi.SimpleRequest("getcategory", {
            location: e
        }).send(function(e) {
            if (e && e.topic) {
                if (e.topic.length) {
                    topicItemList = [];
                    for (var t = 0; t < e.topic.length; t++) {
                        var o = e.topic[t];
                        o.id && o.name ? (o.ugcCount = o.ugcCount || 0, o.visitCount = o.visitCount || 0, 
                        topicItemList.push(o)) : console.error("requestAllTopicList resp, invalid topicItem from data.topic, index is " + t);
                    }
                } else console.error("requestAllTopicList resp, data.topic.length is 0");
            } else console.error("requestAllTopicList resp, no data or data.topic");
        });
    });
}

function getTopicItemList() {
    return topicItemList;
}

module.exports = {
    setLastScene: setLastScene,
    enterPostView: enterPostView,
    setPoiId: setPoiId,
    setPoiName: setPoiName,
    setLocation: setLocation,
    setImpressionId: setImpressionId,
    clickPost: clickPost,
    setPostResult: setPostResult,
    setChooseMediaResult: setChooseMediaResult,
    setHasInputtedText: setHasInputtedText,
    triggerReport: triggerReport,
    enumPostResult: enumPostResult,
    enumChooseMediaResult: enumChooseMediaResult,
    enumChoosePoiResult: enumChoosePoiResult,
    setChoosePoiResult: setChoosePoiResult,
    addQueryString: addQueryString,
    enumTopicResult: enumTopicResult,
    setTopicResult: setTopicResult,
    startPostImpressionProcess: startPostImpressionProcess,
    getAndClearPoiForPostImpression: getAndClearPoiForPostImpression,
    updatePoiForPostImpression: updatePoiForPostImpression,
    getAndClearMediaItemsForPostImpression: getAndClearMediaItemsForPostImpression,
    requestAllTopicList: requestAllTopicList,
    getTopicItemList: getTopicItemList,
    getAndClearTopicItemForPostImpression: getAndClearTopicItemForPostImpression,
    updateTopicItemForPostImpression: updateTopicItemForPostImpression
};