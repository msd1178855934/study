var t = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
        var i = arguments[e];
        for (var o in i) Object.prototype.hasOwnProperty.call(i, o) && (t[o] = i[o]);
    }
    return t;
}, e = getApp(), i = e.Anim, o = e.utils, a = e.mineStore, n = e.resetTab, r = require("../../../../mixin/localesMixin.js");

i.Page({
    mixins: [ r ],
    store: function(t) {
        return {
            todoReportList: t.mine.todoReportList,
            doingReportList: t.mine.doingReportList,
            doneReportList: t.mine.doneReportList,
            todoCheckList: t.mine.todoCheckList,
            doingCheckList: t.mine.doingCheckList,
            doneCheckList: t.mine.doneCheckList,
            todoAffairList: t.mine.todoAffairList,
            doingAffairList: t.mine.doingAffairList,
            doneAffairList: t.mine.doneAffairList
        };
    },
    data: {
        locales: require("./locales"),
        tabIndex: "0",
        todoType: "affair"
    },
    onLoad: function(t) {
        var e = t.todoType, i = t.index || ("affair" === e ? "0" : "1");
        this.data.language.titleMap[e] && wx.setNavigationBarTitle({
            title: this.data.language.titleMap[e]
        }), this.setData({
            tabIndex: i,
            todoType: e
        });
    },
    onShow: function() {
        this.fetchData();
    },
    fetchData: function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.data.todoType, e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.data.tabIndex;
        return "check" === t ? a.fetchCheckSelfList({
            clueTypes: "0,2",
            status: +e,
            order: "DESC",
            pageNo: 1,
            pageSize: 100
        }).then(function() {
            n();
        }).catch(function(t) {
            console.error(t), n();
        }) : "report" === t ? a.fetchReportList({
            clueType: 1,
            status: +e,
            order: "DESC",
            pageNo: 1,
            pageSize: 100
        }).then(function() {
            n();
        }).catch(function(t) {
            console.error(t), n();
        }) : "affair" === t ? a.fetchAffairList({
            status: +e,
            order: "DESC",
            pageNo: 1,
            pageSize: 100
        }).then(function() {
            n();
        }).catch(function(t) {
            console.error(t), n();
        }) : void 0;
    },
    handleTabTap: function(t) {
        var e = t.detail.value.key;
        this.setData({
            tabIndex: e
        }), this.fetchData(this.data.todoType, e);
    },
    handleItem: function(e) {
        var i = e.target.dataset.item;
        console.log("event", i), wx.navigateTo({
            url: o.urlJoinParams("/pages/mine/todo/detail/detail", t({}, i, {
                todoType: this.data.todoType
            }))
        });
    }
});