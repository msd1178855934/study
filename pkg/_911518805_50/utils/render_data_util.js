function _defineProperty(e, t, a) {
    return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = a, e;
}

var generateImageLayout = require("./generateImageLayout"), util = require("/util"), reportEnum = require("../utils/reportEnum"), protoConstants = require("../utils/protoConstants"), payRecommendInfoText = "支付后推荐这里", declareBinding = require("../utils/model_lib/declareBinding"), PoiSchema = require("../utils/model/model_schema").PoiSchema, CommentSchema = require("../utils/model/model_schema").CommentSchema, PoiModel = require("../utils/model/poi_model"), CommentModel = require("../utils/model/comment_model");

function getRenderTagInfoList(e) {
    var t = this;
    return (e = e || []).map(function(e) {
        return t.getRenderTagInfo(e);
    });
}

function getRenderTagInfo(e) {
    var t = e.tag;
    return {
        abstestId: e.abstestId,
        context: e.context,
        userGroupId: e.userGroupId,
        id: t.id,
        name: t.name,
        popular: t.popular,
        poiCount: t.poiCount,
        visitCount: t.visitCount,
        coverPhoto: t.coverPhoto && t.coverPhoto.url ? t.coverPhoto.url : ""
    };
}

function getRenderPoiInfoList(e) {
    return (e = e || []).map(function(e) {
        return getRenderPoiInfo(e);
    });
}

function getRenderPoiInfo(e) {
    var t = {
        id: "",
        poiId: "",
        unique: "",
        thumbUrl: "",
        topImageUrl: "",
        photos: [],
        name: "",
        categoryName: "",
        price: 0,
        distance: 0,
        distanceString: "",
        distanceString2: "",
        isMark: 0,
        recommendText: {
            label: "",
            scene: reportEnum.enumPoiUgcLabelScene.OTHER
        },
        area: "",
        infoWithDistance: "",
        visitCount: 0,
        ugc: {
            visitCount: 0,
            visitContact: [],
            markCount: 0,
            markContact: [],
            impression: {}
        }
    };
    t.id = e.base.id, t.poiId = e.base.id, t.unique = t.id, t.thumbUrl = "", t.topImageUrl = "", 
    e.base.logo ? (e.base.logo.thumbUrl ? t.thumbUrl = e.base.logo.thumbUrl : t.thumbUrl = "", 
    e.base.logo.url ? t.topImageUrl = e.base.logo.url : t.topImageUrl = "") : t.thumbUrl = "https://res.wx.qq.com/a/fed_upload/e6571a6e-666f-49d2-8292-7766fa530b3a/poi-default.jpg", 
    t.name = util.formatChar(e.base.name);
    var a = [];
    (e.base.category.forEach(function(e) {
        var t = e.name, n = e.name.lastIndexOf(":");
        -1 != n && (t = t.substring(n + 1, e.name.length)), a.push(t);
    }), t.categoryDesc = a.join(","), t.categoryName = t.categoryDesc, t.price = 0, 
    e.price && e.price.price && (t.price = parseInt(e.price.price) / 100), t.distance = Math.round(e.base.location.distance), 
    t.distance < 1e3 ? t.distanceString = t.distance + "m" : t.distanceString = Math.round(t.distance / 1e3) + "km", 
    t.distance < 100 || 100 == t.distance ? t.distanceString2 = "约100m" : t.distance > 100 && t.distance < 1e3 ? t.distanceString2 = "约" + Math.round(t.distance / 100) + "00m" : (t.distance > 1e3 || 1e3 == t.distance) && (t.distanceString2 = Math.round(t.distance / 1e3) + "km"), 
    t.infoWithDistance = t.distanceString2, t.isMark = 0, t.recommendText = {
        label: "",
        scene: reportEnum.enumPoiUgcLabelScene.OTHER
    }, t.photos = [], e.ugc && e.ugc.ugcPhoto && e.ugc.ugcPhoto.length ? t.photos = e.ugc.ugcPhoto.map(function(e) {
        return e.thumbUrl;
    }) : e.photo && e.photo.length ? (t.photos = e.photo.map(function(e) {
        return e.thumbUrl;
    }), t.photos.splice(0, t.photos.length - 1)) : t.photos = [ "https://res.wx.qq.com/a/fed_upload/e6571a6e-666f-49d2-8292-7766fa530b3a/poi-default.jpg" ], 
    t.photos.length > 3 && t.photos.splice(3, t.photos.length - 3), e.ugc && (t.ugc.visitCount = e.ugc.visitCount || 0, 
    t.ugc.visitContact = e.ugc.visitContact || [], t.ugc.markCount = e.ugc.markCount || 0, 
    t.ugc.markContact = e.ugc.markContact || [], t.ugc.impression = e.ugc.friendMatchImpressionInfo || "", 
    t.isMark = e.ugc.isMark || 0, e.ugc.markCount && (t.recommendText.label = e.ugc.markCount + "个朋友想去", 
    t.recommendText.scene = reportEnum.enumPoiUgcLabelScene.MARK_COUNT_LABEL), e.ugc.visitCount && (t.recommendText.label = e.ugc.visitCount + "个朋友发过印象", 
    t.recommendText.scene = reportEnum.enumPoiUgcLabelScene.IMPRESSION_COUNT_LABEL), 
    e.ugc.matchImpressionInfo && e.ugc.matchImpressionInfo.impressionId && (t.matchImpressionHeadImgUrl = e.ugc.matchImpressionInfo.contact.headImgUrl, 
    t.matchImpressionWord = e.ugc.matchImpressionInfo.word, t.matchImpressionId = e.ugc.matchImpressionInfo.impressionId)), 
    e.rank && e.rank.billBoardRank && (e.rank.billBoardRank.type === protoConstants.MMLIFEAPP_BILLBOARD_RANK_TYPE_FRIEND_WANTED_FOOD ? t.recommendText.label = "朋友想去排行榜第" + e.rank.billBoardRank.position + "名" : e.rank.billBoardRank.area && e.rank.billBoardRank.type === protoConstants.MMLIFEAPP_BILLBOARD_RANK_TYPE_DISTRICT_WANTED_FOOD ? t.recommendText.label = e.rank.billBoardRank.area.name + "想去排行榜第" + e.rank.billBoardRank.position + "名" : e.rank.billBoardRank.category && e.rank.billBoardRank.type === protoConstants.MMLIFEAPP_POILIST_ENTRY_TYPE_WANTED_FOOD_CATEGORY_RANKLIST && (t.recommendText.label = e.rank.billBoardRank.category.name + "排行榜第" + e.rank.billBoardRank.position + "名"), 
    t.recommendText.scene = reportEnum.enumPoiUgcLabelScene.RANK_LABEL), e.intro) && renderErrorBusinessStatusLabel(e.intro).length > 0 && (t.recommendText.label = renderErrorBusinessStatusLabel(e.intro), 
    t.recommendText.scene = reportEnum.enumPoiUgcLabelScene.ERROR_BUSINESS_STATUS);
    if (t.areaName = "", e.area && e.area.length) if (1 === e.area[0].type) t.areaName = e.area[0].name; else {
        var n = e.area.filter(function(e) {
            return 1 === e.type;
        }) || [];
        n.length > 0 ? t.areaName = n[0].name : t.areaName = "";
    }
    return t.area = t.areaName, t.title1 = t.name, t.title2 = t.categoryDesc, t.price && 0 != t.price && (t.title2 += " · 人均￥" + t.price, 
    t.infoWithDistance += " · 人均￥" + t.price), t.areaName && (t.title2 += " · " + t.areaName, 
    t.infoWithDistance += " · " + t.areaName), t;
}

function setAndObserveNewPoiList(e, t, a, n, o) {
    var i = e, r = 0;
    n ? (r = i.data[t].length, i.data[t] = i.data[t].concat(a)) : i.data[t] = a;
    for (var s, c = {}, m = r; m < i.data[t].length; m++) {
        c[t + "[" + m + "]"] = i.data[t][m];
    }
    (i.setData(c), o) ? declareBinding({
        instance: i,
        schema: PoiSchema,
        arrayPath: t,
        mapping: (s = {}, _defineProperty(s, o + ".id", "id"), _defineProperty(s, o + ".name", "name"), 
        _defineProperty(s, o + ".categoryName", "categoryName"), _defineProperty(s, o + ".price", "price"), 
        _defineProperty(s, o + ".area", "area"), _defineProperty(s, o + ".isMark", "isMark"), 
        s)
    }) : declareBinding({
        instance: i,
        schema: PoiSchema,
        arrayPath: t,
        mapping: {
            id: "id",
            name: "name",
            categoryName: "categoryName",
            price: "price",
            area: "area",
            isMark: "isMark"
        }
    });
}

function getCommentMediaInfo(e) {
    var t = JSON.parse(e.info), a = {
        mediaList: []
    };
    if (a.text = t.content.replace(/^\s+|\s+$/g, ""), t.pic && t.pic.length > 0) for (var n = -1, o = 0; o < t.pic.length; o++) {
        var i = t.pic[o];
        i.picUniqueID = o, a.mediaList.push(i), -1 === n && 1 === i.type && (i.isFirstVideo = !0, 
        i.posterSrc = i.thumbUrl, n = 0, i.videoStyle = o + 1 + "-" + t.pic.length);
    }
    return a.mediaList;
}

function getCommentInfo4Impression(e, t, a, n, o) {
    var i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 3, r = {}, s = JSON.parse(e.info);
    if (r.commentId = e.id, r.text = s.content.replace(/^\s+|\s+$/g, ""), r.subCommentCount = e.subCommentCount, 
    r.exposureCount = e.exposure || 0, r.markCount = e.markCount || 0, r.isLike = e.isLike, 
    r.likeCount = e.likeCount, r.mediaList = [], r.maxPic = i, s.pic && s.pic.length > 0) for (var c = -1, m = 0; m < s.pic.length; m++) {
        var u = s.pic[m];
        u.picUniqueID = m, r.mediaList.push(u), -1 === c && 1 === u.type && (u.isFirstVideo = !0, 
        u.posterSrc = u.thumbUrl, c = 0, u.videoStyle = m + 1 + "-" + s.pic.length, 2 === a && (u.videoStyle = m + 1 + "-" + s.pic.length + "--forward"));
    }
    r.displayMediaList = r.mediaList, r.notDisplayMediaCount = 0, r.notDisplayForwardMediaCount = 0, 
    r.mediaList.length > i && (r.displayMediaList = r.mediaList.slice(0, i), r.notDisplayMediaCount = r.mediaList.length - i);
    var d = r.mediaList.slice(0, i);
    if (d.length > 0 && (r.displayMediaList = generateImageLayout.generateFormattedMediaList(d), 
    2 === a && (r.displayMediaList = generateImageLayout.generateForwardFormattedMediaList(d))), 
    2 === a && 0 !== s.content.length && n) {
        var p = n.remark || n.nickName;
        r.text = p + ": " + s.content.replace(/^\s+|\s+$/g, "");
    }
    return r;
}

function getPoiInfo4Impression(e) {
    var t = {
        id: "",
        poiId: "",
        topImageUrl: "",
        name: "",
        categoryName: "",
        area: "",
        price: 0,
        visitCount: 0,
        info: "",
        infoWithDistance: "",
        info2: "",
        isMark: 0,
        photos: []
    };
    e.poi && e.poi.ugc && 1 == e.poi.ugc.isMark && (t.isMark = 1);
    if (e.poi && e.poi.ugc && e.poi.ugc.visitCount && (t.visitCount = e.poi.ugc.visitCount), 
    e.poi && e.poi.base && (t.poiId = e.poi.base.id, t.id = t.poiId), e.poi && e.poi.base.logo && e.poi.base.logo.url && (t.topImageUrl = e.poi.base.logo.url), 
    e.poi && e.poi.base.name && (t.name = util.formatChar(e.poi.base.name)), t.longitude = e.poi.base.location.longitude, 
    t.latitude = e.poi.base.location.latitude, t.distance = Math.round(e.poi.base.location.distance), 
    t.distance < 1e3 ? t.distanceString = t.distance + "m" : t.distanceString = Math.round(t.distance / 1e3) + "km", 
    t.distance < 100 || 100 == t.distance ? t.distanceString2 = "约100m" : t.distance > 100 && t.distance < 1e3 ? t.distanceString2 = "约" + Math.round(t.distance / 100) + "00m" : (t.distance > 1e3 || 1e3 == t.distance) && (t.distanceString2 = Math.round(t.distance / 1e3) + "km"), 
    t.infoWithDistance += t.distanceString2, e.poi && e.poi.base && e.poi.base.category && e.poi.base.category[0] && e.poi.base.category[0].name) {
        t.categoryName = e.poi.base.category[0].name;
        var a = t.categoryName.lastIndexOf(":");
        -1 != a && (t.categoryName = t.categoryName.substring(a + 1, t.categoryName.length)), 
        t.info += t.categoryName;
    }
    return e.poi && e.poi.price && e.poi.price.price && (t.price = parseInt(e.poi.price.price) / 100, 
    t.info += " · 人均￥" + t.price, t.infoWithDistance += " · 人均￥" + t.price, t.info2 += " · 人均￥" + t.price), 
    e.poi && e.poi.area && e.poi.area[0] && (t.area = e.poi.area[0].name, t.info += " · " + t.area, 
    t.infoWithDistance += " · " + t.area, t.info2 += " · " + t.area), t.photos = [], 
    e.poi && e.poi.ugc && e.poi.ugc.ugcPhoto && e.poi.ugc.ugcPhoto.length && (t.photos = e.poi.ugc.ugcPhoto.map(function(e) {
        return e.thumbUrl;
    })), t.photos.length > 3 && t.photos.splice(3, t.photos.length - 3), t;
}

function getReasonIdString(e) {
    return 0 === e.length ? "" : e.slice(0, Math.min(2, e.length)).map(function(e) {
        return e.id;
    }).join(";");
}

function getPoiInfoForPostImpression(e) {
    if (e && e.base) {
        if (e.base.id && e.base.name) {
            if (e.base.location && e.base.location.longitude && e.base.location.latitude) {
                var t = {
                    longitude: e.base.location.longitude,
                    latitude: e.base.location.latitude
                }, a = 0;
                e.base.location.distance && (a = e.base.location.distance);
                var n = "";
                e.base.logo && e.base.logo.url && (n = e.base.logo.url);
                var o = "";
                if (e.base.category && e.base.category.length) {
                    var i = [];
                    e.base.category.forEach(function(e) {
                        var t = e.name, a = e.name.lastIndexOf(":");
                        -1 != a && (t = t.substring(a + 1, e.name.length)), i.push(t);
                    }), o = i.join(",");
                }
                var r = 0;
                e.price && e.price.price && (r = parseInt(e.price.price) / 100);
                var s = "";
                e.base.address && e.base.address.address && (s = e.base.address.address);
                var c = "";
                if (e.area && e.area.length) if (1 === e.area[0].type) c = e.area[0].name; else {
                    var m = e.area.filter(function(e) {
                        return 1 === e.type;
                    }) || [];
                    c = m.length > 0 ? m[0].name : "";
                }
                var u = !1;
                return e.ugc && e.ugc.isMark && e.ugc.isMark > 0 && (u = !0), {
                    id: e.base.id,
                    name: e.base.name,
                    topImage: n,
                    categoryName: o,
                    price: r,
                    distance: a,
                    area: c,
                    isMarked: u,
                    address: s,
                    location: t
                };
            }
            console.error("no location value, poiItem: " + JSON.stringify(e));
        } else console.error("no poiId or poiName, poiItem: " + JSON.stringify(e));
    } else console.error("no poiItem.base, poiItem: " + JSON.stringify(e));
}

function getFormattedContactInfo(e) {
    return e.baseName = "", e.nameExtra = "", e.isNameLenRestrict = !1, e.type && 2 === e.type && (e.isNameLenRestrict = !0), 
    e.nickName && (e.baseName = e.nickName), e.remark && (e.baseName = e.remark), e.isFriendsLabelOnNameShown && (e.nameExtra = "(朋友)"), 
    e.ugc && e.ugc.impressionCount && e.ugc.impressionCount >= 50 && (e.nameExtra = " 发布了" + e.ugc.impressionCount + "条印象"), 
    e.ugc && e.ugc.likeCount && e.ugc.likeCount >= 100 && (e.nameExtra = " 共收获了" + e.ugc.likeCount + "个赞", 
    e.ugc.markCount && e.ugc.markCount >= 100 && e.ugc.likeCount >= e.ugc.markCount) ? e : (e.ugc && e.ugc.markCount && e.ugc.markCount >= 100 && (e.nameExtra = " 共收获了" + e.ugc.markCount + "个想去"), 
    e);
}

function convertPayRecommendInfoToImpression(e) {
    var t = {
        content: payRecommendInfoText,
        contentType: 0
    };
    return e.info = JSON.stringify(t), e.fromPayRecommend = !0, e;
}

function renderErrorBusinessStatusLabel(e) {
    var t = "";
    e && e.status && (t = "1" !== e.status ? "可能已歇业" : "");
    var a = {
        2: "尚未开业",
        3: "暂停营业",
        4: "尚未开业",
        11: "已歇业",
        12: "已歇业",
        40: "可能已搬迁",
        41: "可能已歇业"
    };
    if (e && e.quality) {
        var n = e.quality;
        n < 60 && a[n] && (t = a[n]);
    }
    return t;
}

module.exports = {
    getCommentMediaInfo: getCommentMediaInfo,
    getPoiInfo4Impression: getPoiInfo4Impression,
    getCommentInfo4Impression: getCommentInfo4Impression,
    setAndObserveNewPoiList: setAndObserveNewPoiList,
    getRenderTagInfoList: getRenderTagInfoList,
    getRenderTagInfo: getRenderTagInfo,
    getRenderPoiInfoList: getRenderPoiInfoList,
    getRenderPoiInfo: getRenderPoiInfo,
    getReasonIdString: getReasonIdString,
    getPoiInfoForPostImpression: getPoiInfoForPostImpression,
    getFormattedContactInfo: getFormattedContactInfo,
    payRecommendInfoText: payRecommendInfoText,
    convertPayRecommendInfoToImpression: convertPayRecommendInfoToImpression,
    renderErrorBusinessStatusLabel: renderErrorBusinessStatusLabel
};