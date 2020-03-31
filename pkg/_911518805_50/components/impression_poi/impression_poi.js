var app = getApp(), cgi = require("../../utils/cgi"), util = require("../../utils/util"), renderDataUtil = require("../../utils/render_data_util"), impressionBehaviors = require("../../behaviors/impression-behaviors"), MAX_PIC = 3;

Component({
    behaviors: [ impressionBehaviors ],
    properties: {
        impressionData: {
            type: Object,
            value: {},
            observer: function observer(t, e, i) {
                this.setData({
                    updateCommentCount: t.comment.subCommentCount || ""
                });
            }
        },
        impressionDataIndex: {
            type: Number,
            value: 0,
            observer: function observer(t, e, i) {}
        }
    },
    data: {
        canShare: util.canUseShareAppMessageAPI(),
        currentMedia: 0
    },
    created: function created() {},
    detached: function detached() {},
    attached: function attached() {
        var t = this.data.impressionData, e = t.comment.createTime, i = util.getDateFormatString(e), n = {};
        n = t.poi ? renderDataUtil.getPoiInfo4Impression(t) : t.poiTable;
        var o, a, r = t.reportData || {}, m = {
            createTime: e,
            timeString: i,
            isMark: n.isMark,
            poiInfo: n,
            visitCount: n.visitCount,
            visitId: t.comment.id,
            reportData: r,
            commentId: "",
            contact: {},
            commentInfo: {},
            originComment: {},
            subComments: []
        };
        o = t.comment.contact;
        var s = ((a = t.comment).subComment || []).map(function(t) {
            return {
                nickName: t.mainComment.contact.remark || t.mainComment.contact.nickName,
                content: JSON.parse(t.mainComment.info).content || "",
                id: t.mainComment.id
            };
        });
        m.commentId = t.comment.id, m.originComment = a, m.contact = renderDataUtil.getFormattedContactInfo(o);
        var c = renderDataUtil.getCommentInfo4Impression(a, m, 2, "", this.data.impressionDataIndex);
        if (m.commentInfo = c, m.subComments = s, m.commentInfo.displayMediaList && m.commentInfo.displayMediaList[0]) {
            var d = m.commentInfo.displayMediaList[0], u = d.picLists;
            1 === u.length ? d.rowWidth = 226 : 2 === u.length ? d.rowWidth = 456 : 3 === u.length && (d.rowWidth = 686), 
            d.rowHeight = 226;
            var p = -1;
            u.map(function(t, e) {
                return t.width = 226, t.height = 226, t.marginRight = 0, t.marginBottom = 0, -1 === p && 1 === t.type && (t.isFirstVideo = !0, 
                t.posterSrc = t.thumbUrl, p = 0, t.videoStyle = e + 1 + "-" + u.length + "--forward"), 
                t;
            });
        }
        this.setData({
            renderData: m
        }), this.declareBindingForContact(m);
    },
    methods: {}
});