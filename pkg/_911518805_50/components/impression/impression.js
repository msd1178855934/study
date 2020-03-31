var app = getApp(), util = require("../../utils/util"), impressionBehaviors = require("../../behaviors/impression-behaviors"), renderDataUtil = require("../../utils/render_data_util"), reporter = require("../../utils/reporter"), reportEnum = require("../../utils/reportEnum"), reportSession = require("../../utils/report_session");

Component({
    behaviors: [ impressionBehaviors ],
    properties: {
        impressionData: {
            type: Object,
            value: {},
            observer: function observer(e, t, i) {
                this.data.hasAttached && this.render();
            }
        },
        impressionDataIndex: {
            type: Number,
            value: 0,
            observer: function observer(e, t, i) {}
        },
        impressionLayoutMaxPic: {
            type: Number,
            value: 3,
            observer: function observer(e, t, i) {}
        },
        impressionCustomTheme: {
            type: String,
            value: ""
        }
    },
    data: {
        impressionExtraStyle: ""
    },
    attached: function attached() {
        this.render(), this.setData({
            hasAttached: 1
        });
    },
    methods: {
        render: function render() {
            var e = this.data.impressionData, t = e.comment.createTime, i = util.getDateFormatString(t), r = renderDataUtil.getPoiInfo4Impression(e), n = e.comment.topic || [], o = e.reportData || {};
            o.recId = e.comment.recId || "", o.recType || (o.recType = e.comment.recType || 0);
            var a, s, m = {
                timeString: i,
                isMark: r.isMark,
                poiInfo: r,
                isUsingRealCurrentLocation: e.isUsingRealCurrentLocation,
                visitCount: r.visitCount,
                topicTags: util.normalizeArray(n),
                reportData: o,
                visitId: "",
                commentId: "",
                contact: {},
                commentInfo: {},
                originComment: {},
                subComments: []
            };
            a = e.comment.contact;
            var c = ((s = e.comment).subComment || []).map(function(e) {
                return {
                    nickName: e.mainComment.contact.remark || e.mainComment.contact.nickName,
                    content: JSON.parse(e.mainComment.info).content || "",
                    id: e.mainComment.id
                };
            });
            m.commentId = e.comment.id, m.visitId = e.visitId || e.comment.id, m.originComment = s, 
            m.contact = renderDataUtil.getFormattedContactInfo(a);
            var u = renderDataUtil.getCommentInfo4Impression(s, m, 0, a, this.data.impressionDataIndex, this.data.impressionLayoutMaxPic);
            m.commentInfo = u, m.subComments = c, this.setData({
                renderData: m
            }), this.declareBindingForContact(m);
        }
    }
});