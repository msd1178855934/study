var app = getApp(), cgi = require("../../utils/cgi"), util = require("../../utils/util"), reporter = require("../../utils/reporter"), reportEnum = require("../../utils/reportEnum"), reportSession = require("../../utils/report_session"), reportPostImpression = require("../../utils/reportPostImpression"), appLaunchData = require("../../utils/appLaunchData");

Page({
    data: {
        selectedTagId: 0,
        hasSetChooseTagResult: !1,
        topicItemList: []
    },
    onLoad: function onLoad(e) {
        var t = this;
        app.addLaunchListener(function() {
            e.tagId && (t.data.selectedTagId = +e.tagId), t.getTopicItemList();
        });
    },
    onReady: function onReady() {},
    onShow: function onShow() {},
    onHide: function onHide() {},
    onUnload: function onUnload() {},
    onPullDownRefresh: function onPullDownRefresh() {},
    getTopicItemList: function getTopicItemList() {
        var e = reportPostImpression.getTopicItemList();
        e && e.length ? this.setData({
            topicItemList: e
        }) : console.error("getTopicItemList, no data");
    },
    onTapTopicItem: function onTapTopicItem(e) {
        console.log("onTapTopicItem: " + JSON.stringify(e));
        var t = e.currentTarget.dataset.index;
        if (void 0 !== t) {
            var o = this.data.topicItemList[t];
            o ? (reportPostImpression.setTopicResult(reportPostImpression.enumTopicResult.CHOOSE_AT_LIST), 
            reportPostImpression.updateTopicItemForPostImpression(o), wx.navigateBack({})) : console.error("onTapTopicItem, invalid topicItemIndex");
        } else console.error("onTapTopicItem, no topicItemIndex");
    },
    onTapClearTopic: function onTapClearTopic(e) {
        console.log("onTapClearTopic"), reportPostImpression.setTopicResult(reportPostImpression.enumTopicResult.DELETED), 
        reportPostImpression.updateTopicItemForPostImpression({}), wx.navigateBack({});
    }
});