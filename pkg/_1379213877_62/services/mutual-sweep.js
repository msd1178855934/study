var e = getApp(), t = e.request, r = e.config, o = (e.wxp, r[r.env].healthCodePath);

exports.relationUserList = function(e) {
    return t({
        url: o + "/qrcCodeRelation/v1/relationUserList",
        method: "GET",
        data: e
    });
};