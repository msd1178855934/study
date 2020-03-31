var app = getApp(), util = require("../../utils/util"), MAX_COMMENT_CHAR_COUNT = 60;

Component({
    properties: {
        content: {
            type: String,
            value: "",
            observer: function observer(e, n) {
                var t = e.replace(/^\s+|\s+$/g, "");
                this.setData({
                    content: t
                });
            }
        },
        hitInfo: {
            type: Object,
            value: {},
            observer: function observer(e, n) {}
        }
    },
    data: {
        shouldShowAll: !0,
        shouldShowAllButton: !1
    },
    ready: function ready() {
        if (this.data.content && this.data.hitInfo) {
            var e = this.data.hitInfo, n = this.data.content, t = [];
            if (e && e.hitField && e.hitField[0] && e.hitField[0].field && e.hitField[0].field[0] && e.hitField[0].field[0].segWord && e.hitField[0].field[0].segWord.length) {
                var s = e.hitField[0].field[0].segWord, o = [];
                s.forEach(function(e) {
                    e.hitPos.forEach(function(n) {
                        o.push({
                            word: e.word,
                            hitPos: n
                        });
                    });
                }), o.sort(function(e, n) {
                    return e.hitPos < n.hitPos ? -1 : e.hitPos > n.hitPos ? 1 : 0;
                });
                var i = [], h = null;
                o.forEach(function(e) {
                    h && h.hitPos === e.hitPos && h.word === e.word || (i.push(e), h = e);
                });
                var r = 0;
                if ((o = i).forEach(function(e) {
                    var s = e.word, o = s.length, i = util.utf8Index2StrIndex(n, e.hitPos, s);
                    -1 != i && (t.push({
                        subContent: n.substring(r, i),
                        isMatched: !1
                    }), t.push({
                        subContent: n.substring(i, i + o),
                        isMatched: !0
                    }), r = i + o);
                }), t.push({
                    subContent: n.substring(r, n.length),
                    isMatched: !1
                }), this.setData({
                    matchArr: t
                }), n.length <= MAX_COMMENT_CHAR_COUNT) return;
                var c = [], l = t.length, d = 0;
                if (t.forEach(function(e, n) {
                    if (e.isMatched) e.type = "keyword", d += e.subContent.length; else {
                        var t = e.subContent;
                        e.sentences = [];
                        for (var s = /[,，.。!！?？\s]/g, o = void 0, i = 0; null != (o = s.exec(t)); ) {
                            e.sentences.push({
                                oneSentence: t.substring(i, o.index + 1),
                                isUsed: !1
                            }), i = o.index + 1;
                        }
                        e.sentences.push({
                            oneSentence: t.substring(i, t.length),
                            isUsed: !1
                        }), 0 == n ? (e.type = "beforeKeyword", e.sentences[e.sentences.length - 1].isUsed = !0, 
                        d += e.sentences[e.sentences.length - 1].oneSentence.length) : l - 1 == n ? (e.type = "afterKeyword", 
                        e.sentences[0].isUsed = !0, d += e.sentences[0].oneSentence.length) : (e.type = "betweenKeywords", 
                        1 == e.sentences.length ? (e.sentences[0].isUsed = !0, d += e.sentences[0].oneSentence.length) : e.sentences.length > 1 && (e.sentences[0].isUsed = !0, 
                        e.sentences[e.sentences.length - 1].isUsed = !0, d += e.sentences[0].oneSentence.length + e.sentences[e.sentences.length - 1].oneSentence.length));
                    }
                }), d < MAX_COMMENT_CHAR_COUNT && t.some(function(e, n) {
                    if ("beforeKeyword" == e.type) {
                        for (var t = e.sentences.length - 2; t >= 0 && (e.sentences[t].isUsed = !0, !((d += e.sentences[t].oneSentence.length) > MAX_COMMENT_CHAR_COUNT)); t--) {}
                        if (d > MAX_COMMENT_CHAR_COUNT) return !0;
                    } else if ("betweenKeywords" == e.type) {
                        for (var s = 1; s <= e.sentences.length - 2 && (e.sentences[s].isUsed = !0, !((d += e.sentences[s].oneSentence.length) > MAX_COMMENT_CHAR_COUNT)); s++) {}
                        if (d > MAX_COMMENT_CHAR_COUNT) return !0;
                    } else if ("afterKeyword" == e.type) {
                        for (var o = 1; o <= e.sentences.length - 1 && (e.sentences[o].isUsed = !0, !((d += e.sentences[o].oneSentence.length) > MAX_COMMENT_CHAR_COUNT)); o++) {}
                        if (d > MAX_COMMENT_CHAR_COUNT) return !0;
                    }
                }), d == n.length) return;
                t.forEach(function(e) {
                    if ("keyword" == e.type) c.push(e); else if ("beforeKeyword" == e.type) {
                        for (var n = "", t = 0; t < e.sentences.length; t++) {
                            e.sentences[t].isUsed && (n += e.sentences[t].oneSentence);
                        }
                        e.sentences[0].isUsed || (n = "..." + n), c.push({
                            isMatched: !1,
                            subContent: n
                        });
                    } else if ("betweenKeywords" == e.type) {
                        for (var s = "", o = !1, i = 0; i <= e.sentences.length - 1; i++) {
                            e.sentences[i].isUsed ? s += e.sentences[i].oneSentence : o || (s += "...", o = !0);
                        }
                        c.push({
                            isMatched: !1,
                            subContent: s
                        });
                    } else if ("afterKeyword" == e.type) {
                        for (var h = "", r = 0; r <= e.sentences.length - 1; r++) {
                            if (!e.sentences[r].isUsed) {
                                h += "...";
                                break;
                            }
                            h += e.sentences[r].oneSentence;
                        }
                        c.push({
                            isMatched: !1,
                            subContent: h
                        });
                    }
                }), this.setData({
                    shouldShowAll: !1,
                    shouldShowAllButton: !0,
                    matchedArrClipped: c
                });
            }
        }
    },
    methods: {
        bindtapToggleAll: function bindtapToggleAll() {
            this.setData({
                shouldShowAll: !this.data.shouldShowAll
            });
        }
    }
});