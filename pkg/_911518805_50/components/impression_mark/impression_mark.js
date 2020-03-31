var app = getApp(), util = require("../../utils/util"), impressionBehaviors = require("../../behaviors/impression-behaviors"), renderDataUtil = require("../../utils/render_data_util"), reporter = require("../../utils/reporter"), reportEnum = require("../../utils/reportEnum"), reportSession = require("../../utils/report_session");

Component({
    behaviors: [ impressionBehaviors ],
    properties: {
        impressionData: {
            type: Object,
            value: {},
            observer: function observer(t, e, r) {
                this.data.hasAttached && this.render();
            }
        },
        impressionDataIndex: {
            type: Number,
            value: 0,
            observer: function observer(t, e, r) {}
        }
    },
    data: {},
    attached: function attached() {
        this.setData({
            hasAttached: 1
        }), this.render();
    },
    methods: {
        render: function render() {
            var t = this.data.impressionData, e = t.comment.createTime, r = util.getDateFormatString(e), i = renderDataUtil.getPoiInfo4Impression(t), n = t.reportData || {};
            n.recId = t.comment.recId || "";
            var o = t.comment.id || "";
            n.recType || (n.recType = t.comment.recType || 0);
            var a, s, m = {
                timeString: r,
                isMark: i.isMark,
                poiInfo: i,
                visitCount: i.visitCount,
                commentId: "",
                visitId: "",
                contact: {},
                commentInfo: {},
                originComment: {},
                friendMarkCount: 1,
                markContacts: [],
                reportData: n,
                impressionId: o
            }, c = [];
            a = t.comment.contact, s = t.comment;
            var d = t.markInfo;
            d && d.contact && d.contact.length > 0 && d.contact.map(function(t) {
                t.headImgUrl.length > 5 && c.length < 5 && c.push(t);
            }), m.markContacts = c, m.friendMarkCount = d.friendMarkCount ? d.friendMarkCount : 1, 
            m.contact = a, m.commentId = t.comment.id, m.visitId = t.visitId || t.comment.id, 
            m.originComment = s;
            var p = renderDataUtil.getCommentInfo4Impression(s, m, 2, a, this.data.impressionDataIndex);
            m.commentInfo = p, this.setData({
                renderData: m
            }), this.declareBindingForPoi(m), this.declareBindingForContact(m);
        }
    }
});