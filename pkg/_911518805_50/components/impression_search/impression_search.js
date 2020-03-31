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
        },
        hitInfo: {
            type: Array
        }
    },
    data: {
        canShare: util.canUseShareAppMessageAPI(),
        currentMedia: 0
    },
    created: function created() {},
    detached: function detached() {},
    attached: function attached() {
        var t, e, i = this.data.impressionData, n = i.comment.createTime, o = util.getDateFormatString(n), a = renderDataUtil.getPoiInfo4Impression(i), r = i.reportData || {}, m = i.comment.topic || [], s = {
            createTime: n,
            timeString: o,
            isMark: a.isMark,
            poiInfo: a,
            isUsingRealCurrentLocation: i.isUsingRealCurrentLocation,
            visitCount: a.visitCount,
            visitId: i.comment.id,
            topicTags: util.normalizeArray(m),
            reportData: r,
            commentId: "",
            contact: {},
            commentInfo: {},
            originComment: {},
            hitInfo: i.hitInfo,
            subComments: []
        };
        t = i.comment.contact;
        var c = ((e = i.comment).subComment || []).map(function(t) {
            return {
                nickName: t.mainComment.contact.remark || t.mainComment.contact.nickName,
                content: JSON.parse(t.mainComment.info).content || "",
                id: t.mainComment.id
            };
        });
        s.commentId = i.comment.id, s.originComment = e, s.contact = renderDataUtil.getFormattedContactInfo(t);
        var d = renderDataUtil.getCommentInfo4Impression(e, s, 2, "", this.data.impressionDataIndex);
        if (s.commentInfo = d, s.subComments = c, s.commentInfo.displayMediaList && s.commentInfo.displayMediaList[0]) {
            var u = s.commentInfo.displayMediaList[0], p = u.picLists;
            1 === p.length ? u.rowWidth = 226 : 2 === p.length ? u.rowWidth = 456 : 3 === p.length && (u.rowWidth = 686), 
            u.rowHeight = 226;
            var h = -1;
            p.map(function(t, e) {
                return t.width = 226, t.height = 226, t.marginRight = 0, t.marginBottom = 0, -1 === h && 1 === t.type && (t.isFirstVideo = !0, 
                t.posterSrc = t.thumbUrl, h = 0, t.videoStyle = e + 1 + "-" + p.length + "--forward"), 
                t;
            });
        }
        this.setData({
            renderData: s
        }), this.declareBindingForPoi(s), this.declareBindingForContact(s);
    },
    methods: {}
});