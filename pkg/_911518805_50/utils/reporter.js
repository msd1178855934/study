var cgi = require("./cgi"), util = require("./util"), enableReportLog = !0, protocols = {
    16373: [ {
        name: "currentPage",
        type: "Number"
    }, {
        name: "prevPage",
        type: "Number"
    }, {
        name: "sessionType",
        type: "Number"
    }, {
        name: "sessionId",
        type: "Number"
    }, {
        name: "action",
        type: "Number"
    }, {
        name: "poiId",
        type: "String"
    }, {
        name: "tagId",
        type: "Number"
    }, {
        name: "abtestId",
        type: "Number"
    }, {
        name: "timeStamp2",
        type: "Number"
    }, {
        name: "groupId",
        type: "Number"
    }, {
        name: "longitude",
        type: "Number"
    }, {
        name: "latitude",
        type: "Number"
    }, {
        name: "menuCategoryId",
        type: "String"
    }, {
        name: "price",
        type: "String"
    }, {
        name: "area",
        type: "String"
    }, {
        name: "query",
        type: "String"
    }, {
        name: "sortType",
        type: "String"
    }, {
        name: "selectCity",
        type: "String"
    }, {
        name: "requestId",
        type: Number
    }, {
        name: "prevRequestId",
        type: Number
    }, {
        name: "poiClickedIndex",
        type: Number
    }, {
        name: "requestIdStr"
    }, {
        name: "scene",
        type: "Number"
    }, {
        name: "poiUgcLabelScene"
    } ],
    16479: [ {
        name: "appVersion",
        type: "Number"
    }, {
        name: "publicLibVersion",
        type: "String"
    }, {
        name: "pagePath",
        type: "String"
    }, {
        name: "mediaType",
        type: "Number"
    }, {
        name: "mediaSrc",
        type: "String"
    }, {
        name: "networkType",
        type: "String"
    }, {
        name: "startLoadTime",
        type: "Number"
    }, {
        name: "endLoadTime",
        type: "Number"
    }, {
        name: "mediaSize",
        type: "Number"
    }, {
        name: "mediaWidth",
        type: "Number"
    }, {
        name: "mediaHeight",
        type: "Number"
    }, {
        name: "mediaDuration",
        type: "Number"
    }, {
        name: "mediaScale",
        type: "Number"
    } ],
    16483: [ {
        name: "sessionType",
        type: "Number"
    }, {
        name: "sessionId",
        type: "Number"
    }, {
        name: "clickTime",
        type: "Number"
    }, {
        name: "scene",
        type: "Number"
    }, {
        name: "poiId",
        type: "String"
    }, {
        name: "impressionId",
        type: "String"
    }, {
        name: "impressionCommentCount",
        type: "Number"
    }, {
        name: "isForwardedImpression",
        type: "Number"
    }, {
        name: "poiIdString",
        type: "String"
    }, {
        name: "impressionIdString",
        type: "String"
    }, {
        name: "action",
        type: "Number"
    }, {
        name: "impressionType",
        type: "Number"
    }, {
        name: "requestId",
        type: "String"
    }, {
        name: "pageId",
        type: "Number"
    }, {
        name: "reasonId"
    }, {
        name: "reasonIdString"
    }, {
        name: "recId"
    }, {
        name: "recType"
    } ],
    16501: [ {
        name: "pageId",
        type: "Number"
    }, {
        name: "time",
        type: "Number"
    }, {
        name: "launchScene",
        type: "Number"
    }, {
        name: "sessionId",
        type: "Number"
    } ],
    16597: [ {
        name: "sessionId",
        type: "Number"
    }, {
        name: "appLaunchTime",
        type: "Number"
    }, {
        name: "getLocationTime",
        type: "Number"
    }, {
        name: "loginProcessTime",
        type: "Number"
    }, {
        name: "wxLoginTime",
        type: "Number"
    }, {
        name: "cgiLoginTime",
        type: "Number"
    }, {
        name: "cgiLongLinkTime",
        type: "Number"
    }, {
        name: "getProfileTime",
        type: "Number"
    }, {
        name: "getFriendsTimelineTime",
        type: "Number"
    }, {
        name: "totalTimeCost",
        type: "Number"
    }, {
        name: "cachedSessionKeyResult",
        type: "Number"
    }, {
        name: "getLocationResult",
        type: "Number"
    }, {
        name: "isFriendsTimelineCacheHit",
        type: "Number"
    }, {
        name: "launchScene",
        type: "Number"
    }, {
        name: "userStatusFlag",
        type: "Number"
    }, {
        name: "showUserFirstLaunchTip",
        type: "Number"
    }, {
        name: "userAuthorizeAction",
        type: "Number"
    }, {
        name: "isPreOpen",
        type: "Number"
    } ],
    16870: [ {
        name: "sessionType",
        type: "Number"
    }, {
        name: "sessionId",
        type: "Number"
    }, {
        name: "startScene",
        type: "Number"
    }, {
        name: "startTime",
        type: "Number"
    }, {
        name: "lastScene",
        type: "Number"
    }, {
        name: "enterPostViewTime",
        type: "Number"
    }, {
        name: "poiId",
        type: "String"
    }, {
        name: "longitude",
        type: "Number"
    }, {
        name: "latitude",
        type: "Number"
    }, {
        name: "poiName",
        type: "String"
    }, {
        name: "impressionId",
        type: "String"
    }, {
        name: "clickPostTime",
        type: "Number"
    }, {
        name: "postResult",
        type: "Number"
    }, {
        name: "getResultTime",
        type: "Number"
    }, {
        name: "endTime",
        type: "Number"
    }, {
        name: "endScene",
        type: "Number"
    }, {
        name: "hasInputtedText",
        type: "Number"
    }, {
        name: "chooseMediaResult",
        type: "Number"
    }, {
        name: "choosePoiResult",
        type: "Number"
    }, {
        name: "queryStringList",
        type: "String"
    }, {
        name: "actionSheetResult",
        type: "Number"
    }, {
        name: "topicResult",
        type: "Number"
    }, {
        name: "distanceType",
        type: "Number"
    } ],
    16876: [ {
        name: "shareType",
        type: "Number"
    }, {
        name: "shareScene",
        type: "Number"
    }, {
        name: "poiId",
        type: "String"
    }, {
        name: "impressionId",
        type: "String"
    }, {
        name: "shareResult",
        type: "Number"
    }, {
        name: "poiImpressionsCount",
        type: "Number"
    }, {
        name: "impressionCommentCount",
        type: "Number"
    }, {
        name: "impressionWowCount",
        type: "Number"
    }, {
        name: "impressionMarkCount",
        type: "Number"
    }, {
        name: "impressionType",
        type: "Number"
    }, {
        name: "shareTime",
        type: "Number"
    }, {
        name: "poiIdString",
        type: "String"
    }, {
        name: "impressionIdString",
        type: "String"
    }, {
        name: "sessionId",
        type: "Number"
    } ],
    16878: [ {
        name: "pageId",
        type: "Number"
    }, {
        name: "sessionId",
        type: "Number"
    }, {
        name: "startTime",
        type: "Number"
    }, {
        name: "impressionCount",
        type: "Number"
    }, {
        name: "forwardedImpressionCount",
        type: "Number"
    }, {
        name: "viewedImpressionCount",
        type: "Number"
    }, {
        name: "viewedForwardedImpressionCount",
        type: "Number"
    }, {
        name: "endTime",
        type: "Number"
    }, {
        name: "impressionIdList",
        type: "String"
    }, {
        name: "poiIdList",
        type: "String"
    }, {
        name: "sysImpressionIdList",
        type: "String"
    }, {
        name: "sysPoiIdList",
        type: "String"
    }, {
        name: "unreadMentionCount",
        type: "Number"
    }, {
        name: "hasTabRedDot"
    }, {
        name: "refreshCount"
    }, {
        name: "hasClickedUnreadMention"
    }, {
        name: "viewedSysImpressionCount",
        type: "Number"
    }, {
        name: "viewedFriendsImpressionCount",
        type: "Number"
    } ],
    17014: [ {
        name: "pageId",
        type: "Number"
    }, {
        name: "launchScene",
        type: "Number"
    }, {
        name: "poiId",
        type: "String"
    }, {
        name: "impressionId",
        type: "String"
    }, {
        name: "pageState",
        type: "Number"
    }, {
        name: "impressionType",
        type: "Number"
    }, {
        name: "time",
        type: "Number"
    }, {
        name: "sessionId",
        type: "Number"
    } ],
    17332: [ {
        name: "sessionId",
        type: "Number"
    }, {
        name: "action",
        type: "Number"
    }, {
        name: "actionItem",
        type: "String"
    } ],
    17491: [ {
        name: "prevPage"
    }, {
        name: "exp"
    }, {
        name: "action"
    }, {
        name: "type"
    }, {
        name: "requestId"
    } ],
    17415: [ {
        name: "sessionId"
    }, {
        name: "prevPageId"
    }, {
        name: "clickTime"
    }, {
        name: "poiId"
    }, {
        name: "clickScene"
    } ],
    17511: [ {
        name: "prevPageId"
    }, {
        name: "clickTime"
    }, {
        name: "clickScene"
    }, {
        name: "userId"
    } ],
    18067: [ {
        name: "pageId"
    }, {
        name: "sessionId"
    }, {
        name: "impressionId"
    }, {
        name: "poiId"
    }, {
        name: "mediaIndexList"
    } ]
}, reporters = {}, reportCgiQueue = function() {
    var e, t = [], n = !1, r = 50;
    function m() {
        i(), e = setTimeout(function() {
            !function() {
                var e = [];
                if (t.length >= r) e = t.splice(0, r); else {
                    if (!(t.length > 0)) return void m();
                    e = t.splice(0, t.length);
                }
                n || (n = !0, new cgi.SimpleRequest("KvReport", {
                    detail: {
                        device: util.getDeviceForKvReport(),
                        item: e
                    }
                }).send(function() {
                    enableReportLog && e.forEach(function(e) {
                        console.log("[report] batchReport, report item sent to server: " + e.logId + "," + e.value);
                    }), n = !1, m();
                }, function() {
                    n = !1, enableReportLog && e.forEach(function(e) {
                        console.log("[report] batchReport, report item sent to server FAIL!!!: " + e.logId + "," + e.value);
                    }), m();
                }));
            }();
        }, 5e3);
    }
    function i() {
        clearTimeout(e);
    }
    return {
        push: function push(e) {
            t.push(e);
        },
        batchReportAll: function e() {
            i();
            var m = [];
            if (t.length >= r) m = t.splice(0, r); else {
                if (!(t.length > 0)) return;
                m = t.splice(0, t.length);
            }
            n = !0, new cgi.SimpleRequest("KvReport", {
                detail: {
                    device: util.getDeviceForKvReport(),
                    item: m
                }
            }).send(function() {
                enableReportLog && m.forEach(function(e) {
                    console.log("[report] batchReportAll, report item sent to server: " + e.logId + "," + e.value);
                }), t.length ? e() : n = !1;
            }, function() {
                enableReportLog && m.forEach(function(e) {
                    console.log("[report] batchReportAll, report item sent to server FAIL!!!: " + e.logId + "," + e.value);
                }), t.length ? e() : n = !1;
            });
        },
        setTimeout4BatchReport: m,
        clearTimeout4BatchReport: i
    };
}();

function getReporter(e) {
    if (reporters[e]) return new (0, reporters[e])();
    var t = protocols[e], n = function n() {
        this.logId = e;
    };
    return t.forEach(function(e) {
        n.prototype[e.name] = function(t) {
            return this["_" + e.name] = t, this;
        };
    }), n.prototype.reportToServer = function() {
        var e = this.toReportString(), t = {
            logId: this.logId,
            value: e
        };
        new cgi.SimpleRequest("KvReport", {
            detail: {
                device: util.getDeviceForKvReport(),
                item: [ t ]
            }
        }).send(function() {
            enableReportLog && console.log("[report] single report item sent to server: " + t.logId + "," + t.value);
        }, function() {
            enableReportLog && console.log("[report] single report item sent to server FAIL!!!: " + t.logId + "," + t.value);
        });
    }, n.prototype.lazyReportToServer = function() {
        var e = this.toReportString();
        reportCgiQueue.push({
            logId: this.logId,
            value: e
        });
    }, n.prototype.toReportString = function() {
        var e = this, n = "";
        return t.forEach(function(t) {
            var r = e["_" + t.name];
            null == r && (r = ""), n += r + ",";
        }), n.substring(0, n.length - 1);
    }, reporters[e] = n, new n();
}

module.exports = {
    getReporter: getReporter,
    batchReportAll: reportCgiQueue.batchReportAll,
    setTimeout4BatchReport: reportCgiQueue.setTimeout4BatchReport,
    clearTimeout4BatchReport: reportCgiQueue.clearTimeout4BatchReport
};