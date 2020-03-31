var socket, retryOpenWebSocketTimeout, util = require("./util"), cgi = require("./cgi"), appLaunchData = require("./appLaunchData"), enumSocketState = {
    CONNECTING: 0,
    OPEN: 1,
    CLOSING: 2,
    CLOSED: 3
}, URL_PREFIX = cgi.getUrlPrefix(), isSocketOpening = !1, getNextSeq = function() {
    var e = 0;
    return function() {
        return ++e;
    };
}(), initState = function() {
    var e = !1;
    return {
        isInited: function isInited() {
            return e;
        },
        setInited: function setInited() {
            e = !0;
        }
    };
}(), openWebSocketCbQueue = [], simpleRequestMap = {}, isSocketEverOpened = !1;

function getIsSocketEverOpened() {
    return isSocketEverOpened;
}

function addOpenWebSocketCb(e) {
    openWebSocketCbQueue.push(e);
}

function openWebSocket() {
    isSocketOpening || (isSocketOpening = !0, (socket = wx.connectSocket({
        url: "wss://" + cgi.getHost(),
        success: function success(e) {
            console.log("[socket] connect success res=", e, socket);
        },
        fail: function fail(e) {
            console.log("[socket] connect fail res=", e, socket);
        }
    })) ? (socket.onOpen(function(e) {
        var n = socket;
        for (isSocketEverOpened = !0, console.log("[socket]onSocketOpen", n), isSocketOpening = !1, 
        retryOpenWebSocketTimeout && clearTimeout(retryOpenWebSocketTimeout), appLaunchData.getSessionKey() && syncMention(1); openWebSocketCbQueue.length; ) {
            var t = openWebSocketCbQueue.shift();
            t && t();
        }
        Object.keys(simpleRequestMap).forEach(function(e) {
            var n = simpleRequestMap[e];
            if (n) {
                var t = n.simpleRequest, o = n.success;
                t.send(o), delete simpleRequestMap[e];
            }
        });
    }), socket.onMessage(function(e) {
        var n = socket;
        console.log("[socket]onSocketMessage", e, n), onRecvMsg(e);
    }), socket.onError(function(e) {
        var n = socket;
        console.log("[socket]onSocketError", e, n);
    }), socket.onClose(function(e) {
        isSocketOpening = !1;
        var n = socket;
        console.error("[socket]onSocketClose", e, n), retryOpenWebSocket();
    })) : retryOpenWebSocket());
}

function retryOpenWebSocket() {
    retryOpenWebSocketTimeout = setTimeout(function() {
        openWebSocket();
    }, 1e3);
}

function SimpleRequest(e, n) {
    this.url = e, this.reqData = n || {};
}

function onRecvMsg(e) {
    if (e.data) {
        var n = JSON.parse(e.data);
        if (0 == n.cmd) {
            var t;
            try {
                t = JSON.parse(n.content);
            } catch (e) {
                return void util.alert(n.content);
            }
            var o = simpleRequestMap[n.seq];
            if (!o) return;
            var s = o.simpleRequest, c = o.success, i = o.fail;
            if (console.log("[cgilonglink response] url=" + s.url, "req=", s, "resp=", t), !t.baseResponse) return void util.alert("服务器返回没有baseResponse");
            var r = t.baseResponse.ret;
            0 == r ? c(t, s.reqData) : -13 == r ? (i && i(), console.error("服务器返回登陆过期错误, errorCode=" + r)) : (i && i(), 
            console.error("服务器返回错误, errorCode=" + r)), delete simpleRequestMap[n.seq];
        } else console.log("收到推送", e), initState.isInited() ? syncMention() : syncDirty = !0;
    }
}

SimpleRequest.prototype.send = function(e, n) {
    n = n || function() {};
    var t = URL_PREFIX + this.url;
    this.reqData.baseRequest = {
        openId: appLaunchData.getOpenId(),
        key: appLaunchData.getSessionKey()
    };
    var o = cgi.getReqHeader(this.url);
    o.HOST = cgi.getHost(), console.log("[cgilonglink request] url=", t, "reqData=", this.reqData, "header=", o);
    var s = getNextSeq(), c = {
        data: JSON.stringify({
            cmd: 0,
            product: 0,
            seq: s,
            http: {
                method: "POST",
                path: "/cgi-bin/mmlife-bin/" + this.url,
                header: o,
                query: ""
            },
            content: JSON.stringify(this.reqData)
        }),
        success: function success(e) {
            console.log("[socket] websocket send success", e, socket, "isSocketOpening=", isSocketOpening);
        },
        fail: function fail(e) {
            n && n(), console.error("[socket] websocket send failed", e, socket, "isSocketOpening=", isSocketOpening), 
            retryOpenWebSocket();
        }
    };
    simpleRequestMap[s] = {
        success: e,
        fail: n,
        simpleRequest: this
    }, socket && socket.send(c);
};

var syncDirty = !1, isSyncMentionIng = !1;

function syncMention(e) {
    console.log("[syncMention] isSyncMentionIng", isSyncMentionIng), !isSyncMentionIng || e ? (isSyncMentionIng = !0, 
    new SimpleRequest("GetUnReadMentionCount".toLowerCase(), {}).send(function(e) {
        initState.isInited() || initState.setInited();
        var n = e.count, t = e.seq;
        unreadMentionCountMgr.setCountAndSeq(n, t), isSyncMentionIng = !1, syncDirty && (syncMention(), 
        syncDirty = !1);
    }, function() {
        isSyncMentionIng = !1;
    })) : syncDirty = !0;
}

var unreadMentionCountMgr = function() {
    var e = 0, n = 0, t = {}, o = {};
    return o.getCount = function() {
        return e;
    }, o.setCountAndSeq = function(o, s) {
        (s == n && o > e || s > n) && (e = o, n = s, Object.keys(t).forEach(function(o) {
            var s = t[o];
            s(e, n);
        }));
    }, o.addCountChangeListener = function(e, n) {
        t[e] = n;
    }, o;
}();

module.exports = {
    addOpenWebSocketCb: addOpenWebSocketCb,
    openWebSocket: openWebSocket,
    syncMention: syncMention,
    getUnReadMentionCount: unreadMentionCountMgr.getCount,
    addUnReadMentionCountChangeListener: unreadMentionCountMgr.addCountChangeListener,
    getIsSocketEverOpened: getIsSocketEverOpened
};