var app = getApp(), cgi = require("../../utils/cgi"), util = require("../../utils/util"), renderDataUtil = require("../../utils/render_data_util"), impressionBehaviors = require("../../behaviors/impression-behaviors");

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
        },
        showMoreOptions: {
            type: Boolean,
            value: !0
        }
    },
    data: {},
    attached: function attached() {
        var t = this.data.impressionData, e = t.comment.createTime, i = util.getDateFormatString(e), o = {};
        t.poi && (o = renderDataUtil.getPoiInfo4Impression(t));
        var n, r, a = t.reportData || {}, s = t.comment.topic || [], m = {
            createTime: e,
            timeString: i,
            isMark: o.isMark,
            poiInfo: o,
            visitCount: o.visitCount,
            topicTags: util.normalizeArray(s),
            visitId: t.comment.id,
            reportData: a,
            commentId: "",
            contact: {},
            commentInfo: {},
            originComment: {}
        };
        n = t.comment.contact, r = t.comment, m.commentId = t.comment.id, m.originComment = r, 
        m.contact = n;
        var u = renderDataUtil.getCommentInfo4Impression(r, m, 2, "", this.data.impressionDataIndex);
        if (u.exposureCount && (u.exposureCount = util.formatNumberToTenThousand(u.exposureCount)), 
        u.markCount && (u.markCount = util.formatNumberToTenThousand(u.markCount)), m.commentInfo = u, 
        m.commentInfo.displayMediaList && m.commentInfo.displayMediaList[0]) {
            var d = m.commentInfo.displayMediaList[0], p = d.picLists;
            1 === p.length ? d.rowWidth = 226 : 2 === p.length ? d.rowWidth = 456 : 3 === p.length && (d.rowWidth = 686), 
            d.rowHeight = 226;
            var c = -1;
            p.map(function(t, e) {
                return t.width = 226, t.height = 226, t.marginRight = 0, t.marginBottom = 0, -1 === c && 1 === t.type && (t.isFirstVideo = !0, 
                t.posterSrc = t.thumbUrl, c = 0, t.videoStyle = e + 1 + "-" + p.length + "--forward"), 
                t;
            });
        }
        this.setData({
            renderData: m
        }), this.declareBindingForPoi(m), this.declareBindingForContact(m);
    },
    methods: {
        bindTapMoreOptions: function bindTapMoreOptions(t) {
            var e = {}, i = t.currentTarget.dataset.index;
            e.index = i, this.triggerEvent("ontapmoreoptions", e);
        }
    }
});