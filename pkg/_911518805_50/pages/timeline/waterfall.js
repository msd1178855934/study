function _defineProperty(e, t, i) {
    return t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = i, e;
}

var util = require("../../utils/util"), renderDataUtil = require("../../utils/render_data_util"), enumRecommendVisitInfoType = {
    impression: 1,
    topic: 2
}, impressionSmallContants = require("../../components/impression_small/impression_small_contants"), APPEND = 1, REPLACE = 0;

function createWaterfall(e, t, i) {
    var n = {}, a = 0, o = 0, r = 0, s = 0;
    return n.replace = function(e) {
        a = 0, o = 0, r = 0, s = 0, 0, n.insert(e, REPLACE);
    }, n.append = function(e) {
        n.insert(e, APPEND);
    }, n.insert = function(n, l) {
        var m, u = {}, d = [], c = [], p = void 0;
        (p = l ? e.data[t].length + e.data[i].length : 0, n.forEach(function(e, n) {
            e.index = p + n;
            var m = impressionSmallContants.margin, h = void 0;
            if (enumRecommendVisitInfoType.topic == e.type) h = e.height; else {
                var f = e, g = 0, q = util.clone(renderDataUtil.getCommentMediaInfo(f.comment)[0]);
                q && q.height && q.width && (g = 1 * impressionSmallContants.width * q.height / q.width) > impressionSmallContants.mediaMaxHeight && (g = impressionSmallContants.mediaMaxHeight), 
                h = JSON.parse(f.comment.info).content.replace(/^\s+|\s+$/g, "") ? g + impressionSmallContants.textHeight : g + impressionSmallContants.textHeightNoComment;
            }
            return a <= r ? (a += h + m, l ? u[t + "[" + o + "]"] = {
                data: e,
                sizeInfo: {
                    cardHeight: h,
                    colIndex: o,
                    heightFromTop: a
                },
                unqiue: e.unqiue + "-" + o
            } : d.push({
                data: e,
                sizeInfo: {
                    cardHeight: h,
                    colIndex: o,
                    heightFromTop: a
                },
                unqiue: e.unqiue + "-" + o
            }), void o++) : (r += h + m, l ? u[i + "[" + s + "]"] = {
                data: e,
                sizeInfo: {
                    cardHeight: h,
                    colIndex: s,
                    heightFromTop: r
                },
                unqiue: e.unqiue + "-" + s
            } : c.push({
                data: e,
                sizeInfo: {
                    cardHeight: h,
                    colIndex: s,
                    heightFromTop: r
                },
                unqiue: e.unqiue + "-" + s
            }), void s++);
        }), l) ? e.setData(u) : e.setData((_defineProperty(m = {}, t, d), _defineProperty(m, i, c), 
        m));
    }, n;
}

module.exports = {
    createWaterfall: createWaterfall
};