var app = getApp(), util = require("../../utils/util"), PROPER_COMMENT_CHAR_COUNT = 35, MAX_COMMENT_COUNT = 50, MAX_NEWLINE_COUNT = 2, MIN_COMMENT_CHAR_COUNT = 15;

Component({
    properties: {
        content: {
            type: String,
            value: "",
            observer: function observer(t, e) {
                var n = t.replace(/^\s+|\s+$/g, "");
                this.setData({
                    content: n
                });
            }
        },
        externalClass: {
            type: String,
            value: ""
        }
    },
    data: {
        shouldShowEllipse: !1,
        shouldShowButton: !1
    },
    attached: function attached() {
        var t = this.getContentClipped();
        t.length < this.data.content.length && this.setData({
            contentClipped: t + "...",
            shouldShowEllipse: !0,
            shouldShowButton: !0
        });
    },
    methods: {
        getContentClipped: function getContentClipped() {
            var t = this.data.content, e = -1, n = t.match(/(\r?)\n(\s*)(\r?)\n/);
            if (n && n.index > 0 && (e = n.index), e > 0 && (t = t.substring(0, e) + "\n"), 
            t.length <= PROPER_COMMENT_CHAR_COUNT) {
                var s = t.match(/\n/g);
                if (!s || s.length <= MAX_NEWLINE_COUNT) return t;
            }
            for (var i = 0, l = 0, o = [], h = /[,，.。!！?？、\s]/g, a = void 0, r = 0; null != (a = h.exec(t)); ) {
                o.push({
                    oneSentenceContent: t.substring(r, a.index + 1),
                    isUsed: !1
                }), r = a.index + 1;
            }
            o.push({
                oneSentenceContent: t.substring(r, t.length),
                isUsed: !1
            });
            for (var C = 0; C < o.length; C++) {
                var u = o[C], d = u.oneSentenceContent;
                if ("\n" === d[d.length - 1] && l++, u.isUsed = !0, (i += d.length) > PROPER_COMMENT_CHAR_COUNT) break;
                if (l >= MAX_NEWLINE_COUNT) break;
            }
            if (i === t.length) return t;
            for (var N = "", _ = 0; _ < o.length; _++) {
                var g = o[_];
                if (!g.isUsed) break;
                N += g.oneSentenceContent;
            }
            return t.length - N.length <= MIN_COMMENT_CHAR_COUNT ? t : (N.length > MAX_COMMENT_COUNT && (N = N.substr(0, MAX_COMMENT_COUNT)), 
            N);
        },
        bindtapShowAll: function bindtapShowAll() {
            this.triggerEvent("showall", {
                shouldShowEllipse: this.data.shouldShowEllipse
            }), this.setData({
                shouldShowEllipse: !this.data.shouldShowEllipse
            });
        }
    }
});