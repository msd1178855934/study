var _map;

function _defineProperty(e, i, p) {
    return i in e ? Object.defineProperty(e, i, {
        value: p,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[i] = p, e;
}

var map = (_defineProperty(_map = {
    MMLifeWebCmd_LifeApp_Auth: 363,
    MMLifeWebCmd_LifeApp_Echo: 526,
    MMLifeWebCmd_LifeApp_GetPoiList: 196,
    MMLifeWebCmd_LifeApp_GetPoiDetail: 144,
    MMLifeWebCmd_LifeApp_SearchPoi: 91,
    MMLifeWebCmd_LifeApp_GetCategory: 974,
    MMLifeWebCmd_LifeApp_UploadImage: 572,
    MMLifeWebCmd_LifeApp_GetPoiComment: 946,
    MMLifeWebCmd_LifeApp_PostPoiComment: 993,
    MMLifeWebCmd_LifeApp_DelPoiComment: 489,
    MMLifeWebCmd_LifeApp_GetFeedList: 95,
    MMLifeWebCmd_LifeApp_ReadTemplate: 211,
    MMLifeWebCmd_LifeApp_GetRes: 48,
    MMLifeWebCmd_LifeApp_GetProfile: 107,
    MMLifeWebCmd_LifeApp_GetLocationInfo: 80,
    MMLifeWebCmd_LifeApp_LikePoi: 242,
    MMLifeWebCmd_LifeApp_SearchPoiList: 266,
    MMLifeWebCmd_LifeApp_UploadVideo: 92,
    MMLifeWebCmd_LifeApp_GetRecommendDetail: 188,
    MMLifeWebCmd_LifeApp_GetSuggestion: 194,
    MMLifeWebCmd_LifeApp_GetUserPage: 77,
    MMLifeWebCmd_LifeApp_GetFriendVisitPage: 406,
    MMLifeWebCmd_LifeApp_MarkPoi: 758,
    MMLifeWebCmd_LifeApp_GetMention: 8312,
    MMLifeWebCmd_LifeApp_KvReport: 9149,
    MMLifeWebCmd_LifeApp_RecommendPoi: 9450,
    MMLifeWebCmd_LifeApp_ReportWithProof: 8955,
    MMLifeWebCmd_LifeApp_GetImpressionComment: 9399,
    MMLifeWebCmd_LifeApp_DelImpressionComment: 8746,
    MMLifeWebCmd_LifeApp_PostImpressionComment: 9101,
    MMLifeWebCmd_LifeApp_GetUnReadMentionCount: 9483
}, "MMLifeWebCmd_LifeApp_GetUnReadMentionCount", 9483), _defineProperty(_map, "MMLifeWebCmd_LifeApp_GetPoiCommentDetail", 9073), 
_defineProperty(_map, "MMLifeWebCmd_LifeApp_LikePoiComment", 2671), _defineProperty(_map, "MMLifeWebCmd_LifeApp_GetFindRestaurantPage", 9702), 
_defineProperty(_map, "MMLifeWebCmd_LifeApp_GetFindRestaurantDetailPage", 9505), 
_defineProperty(_map, "MMLifeWebCmd_LifeApp_ModUserLocation", 9818), _defineProperty(_map, "MMLifeWebCmd_LifeApp_GetRecommendImpression", 10642), 
_defineProperty(_map, "MMLifeWebCmd_LifeApp_SearchImpression", 11964), _defineProperty(_map, "MMLifeWebCmd_LifeApp_CalculateDistance", 11098), 
_defineProperty(_map, "MMLifeWebCmd_LifeApp_CalculateDistance", 11098), _defineProperty(_map, "MMLifeWebCmd_LifeApp_ChangeUserNotifyStatus", 12463), 
_defineProperty(_map, "MMLifeWebCmd_LifeApp_GetRecommendVisitPage", 12868), _defineProperty(_map, "MMLifeWebCmd_LifeApp_GetFollowVisitPage", 12446), 
_defineProperty(_map, "MMLifeWebCmd_LifeApp_FollowUser", 11156), _defineProperty(_map, "MMLifeWebCmd_LifeApp_GetFollowUserList", 12741), 
_defineProperty(_map, "MMLifeWebCmd_LifeApp_GetFansList", 11444), _defineProperty(_map, "MMLifeWebCmd_LifeApp_GetRecommendPoI", 12739), 
_map);

function getCmdId(e) {
    var i = map[("MMLifeWebCmd_LifeApp_" + e).toLowerCase()];
    return i || (console.error(e + " 缺少cmdId"), 0);
}

Object.keys(map).forEach(function(e) {
    var i = map[e];
    map[e.toLowerCase()] = i, delete map[e];
}), module.exports = {
    getCmdId: getCmdId
};