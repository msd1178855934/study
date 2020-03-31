var storage = require("./storage"), poiStorage = require("./poiStorage"), COMMENTS_KEY = "COMMENTS_STORAGE";

function getComments() {
    return storage.getObj(COMMENTS_KEY);
}

function setComments(t) {
    storage.setObj(COMMENTS_KEY, t);
}

function setComment(t, e, o) {
    var n = getComments() || [], i = !1;
    n.some(function(m, s) {
        if (m.poiId == t) return i = !0, m.picLength = e, m.commentText = o, m.liked || m.picLength || m.commentText && m.commentText.content || n.splice(s, 1), 
        !0;
    }), i || n.unshift({
        poiId: t,
        picLength: e,
        commentText: o
    }), setComments(n);
}

function setLike(t, e) {
    var o = getComments() || [], n = !1;
    o.some(function(o) {
        if (o.poiId == t) return n = !0, o.liked = e, !0;
    }), n || o.unshift({
        poiId: t,
        liked: e
    }), setComments(o);
}

function getCommentsWithPoiInfo() {
    var t = getComments() || [];
    return t.forEach(function(t) {
        var e = poiStorage.getPoi(t.poiId);
        t.poiInfo = e;
    }), t;
}

module.exports = {
    setComment: setComment,
    setLike: setLike,
    getCommentsWithPoiInfo: getCommentsWithPoiInfo
};