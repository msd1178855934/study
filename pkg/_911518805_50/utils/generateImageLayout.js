function _toConsumableArray(i) {
    if (Array.isArray(i)) {
        for (var p = 0, t = Array(i.length); p < i.length; p++) {
            t[p] = i[p];
        }
        return t;
    }
    return Array.from(i);
}

var px_margin = 4, px_010__v3 = xmpx2rpx(126), px_101__v3 = xmpx2rpx(125), px_11 = xmpx2rpx(190), px_100 = xmpx2rpx(253), px_010 = xmpx2rpx(125), px_001_h = xmpx2rpx(126), px_100_h = px_010 + px_001_h + px_margin, px_1_w = xmpx2rpx(380), px_1_h = xmpx2rpx(253);

function xmpx2rpx(i) {
    return 750 / 414 * i;
}

function generateLayout3(i) {
    var p = i[0] && i[0].pic ? i[0].pic : i[0], t = i[1] && i[1].pic ? i[1].pic : i[1], e = i[2] && i[2].pic ? i[2].pic : i[2], r = [], a = Object.assign({}, p, {
        id: p.picUniqueID,
        width: px_101__v3,
        height: px_101__v3,
        marginRight: px_margin
    }), x = Object.assign({}, t, {
        id: t.picUniqueID,
        width: px_010__v3,
        height: px_101__v3,
        marginRight: px_margin
    }), s = Object.assign({}, e, {
        id: e.picUniqueID,
        width: px_101__v3,
        height: px_101__v3
    });
    return i[0] && i[0].pic ? (i[0].pic = a, i[1].pic = x, i[2].pic = s, r.push({
        maxHeight: px_101__v3,
        picLists: [ i[0], i[1], i[2] ]
    })) : r.push({
        maxHeight: px_101__v3,
        picLists: [ a, x, s ]
    }), r;
}

function generateFormattedMediaList(i) {
    var p = i[0] && i[0].pic ? i[0].pic : i[0], t = i[1] && i[1].pic ? i[1].pic : i[1], e = i[2] && i[2].pic ? i[2].pic : i[2], r = i.length, a = [];
    if (1 === r) {
        var x = Object.assign({}, p, {
            id: p.picUniqueID,
            width: px_1_w,
            height: px_1_h
        });
        return i[0] && i[0].pic ? (i[0].pic = x, a.push({
            picLists: [ i[0] ]
        })) : a.push({
            picLists: [ x ]
        }), a;
    }
    if (2 === r) {
        var s = i[1].pic || i[1], n = Object.assign({}, p, {
            id: p.picUniqueID,
            width: px_11,
            height: px_11,
            marginRight: px_margin
        }), h = Object.assign({}, s, {
            id: s.picUniqueID,
            width: px_11,
            height: px_11
        });
        return i[0] && i[0].pic ? (i[0].pic = n, i[1].pic = h, a.push({
            maxHeight: px_11,
            picLists: [ i[0], i[1] ]
        })) : a.push({
            maxHeight: px_11,
            picLists: [ n, h ]
        }), a;
    }
    if (3 === r) {
        var c = Object.assign({}, p, {
            id: p.picUniqueID,
            width: px_100,
            height: px_100_h,
            marginRight: px_margin
        }), _ = Object.assign({}, t, {
            id: t.picUniqueID,
            width: px_010,
            height: px_010,
            marginBottom: px_margin
        }), g = Object.assign({}, e, {
            id: e.picUniqueID,
            width: px_010,
            height: px_001_h
        });
        return i[0] && i[0].pic ? (i[0].pic = c, i[1].pic = _, i[2].pic = g, a.push({
            maxHeight: px_100_h,
            picLists: [ i[0], i[1], i[2] ]
        })) : a.push({
            maxHeight: px_100_h,
            picLists: [ c, _, g ]
        }), a;
    }
    if (4 === r) {
        var m = i.splice(0, 2);
        return a.push.apply(a, _toConsumableArray(generateFormattedMediaList(m))), a.push.apply(a, _toConsumableArray(generateFormattedMediaList(i))), 
        a;
    }
    if (5 === r) {
        var u = i.splice(0, 2);
        return a.push.apply(a, _toConsumableArray(generateFormattedMediaList(u))), a.push.apply(a, _toConsumableArray(generateLayout3(i))), 
        a;
    }
    var d = i.splice(0, 3);
    return a.push.apply(a, _toConsumableArray(generateFormattedMediaList(d))), a.push.apply(a, _toConsumableArray(generateLayout3(i))), 
    a;
}

function generateForwardFormattedMediaList(i) {
    var p = i[0] && i[0].pic ? i[0].pic : i[0], t = i[1] && i[1].pic ? i[1].pic : i[1], e = i[2] && i[2].pic ? i[2].pic : i[2], r = i.length, a = [];
    if (1 === r) {
        var x = Object.assign({}, p, {
            id: p.picUniqueID,
            width: xmpx2rpx(366),
            height: xmpx2rpx(243)
        });
        return i[0] && i[0].pic ? (i[0].pic = x, a.push({
            picLists: [ i[0] ]
        })) : a.push({
            picLists: [ x ]
        }), a;
    }
    if (2 === r) {
        var s = i[1].pic || i[1], n = Object.assign({}, p, {
            id: p.picUniqueID,
            width: xmpx2rpx(182),
            height: xmpx2rpx(148),
            marginRight: px_margin
        }), h = Object.assign({}, s, {
            id: s.picUniqueID,
            width: xmpx2rpx(182),
            height: xmpx2rpx(148)
        });
        return i[0] && i[0].pic ? (i[0].pic = n, i[1].pic = h, a.push({
            maxHeight: xmpx2rpx(148),
            picLists: [ i[0], i[1] ]
        })) : a.push({
            maxHeight: xmpx2rpx(148),
            picLists: [ n, h ]
        }), a;
    }
    if (3 === r) {
        var c = Object.assign({}, p, {
            id: p.picUniqueID,
            width: xmpx2rpx(120),
            height: xmpx2rpx(98),
            marginRight: px_margin
        }), _ = Object.assign({}, t, {
            id: t.picUniqueID,
            width: xmpx2rpx(122),
            height: xmpx2rpx(98),
            marginRight: px_margin
        }), g = Object.assign({}, e, {
            id: e.picUniqueID,
            width: xmpx2rpx(120),
            height: xmpx2rpx(98)
        });
        return i[0] && i[0].pic ? (i[0].pic = c, i[1].pic = _, i[2].pic = g, a.push({
            maxHeight: xmpx2rpx(98),
            picLists: [ i[0], i[1], i[2] ]
        })) : a.push({
            maxHeight: xmpx2rpx(98),
            picLists: [ c, _, g ]
        }), a;
    }
    var m = i.splice(0, 3);
    return a.push.apply(a, _toConsumableArray(generateForwardFormattedMediaList(m))), 
    a.push.apply(a, _toConsumableArray(generateForwardFormattedMediaList(i))), a;
}

module.exports = {
    generateFormattedMediaList: generateFormattedMediaList,
    generateForwardFormattedMediaList: generateForwardFormattedMediaList
};