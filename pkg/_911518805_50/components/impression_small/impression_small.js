var app = getApp(), util = require("../../utils/util"), impressionBehaviors = require("../../behaviors/impression-behaviors"), renderDataUtil = require("../../utils/render_data_util"), impressionSmallContants = require("./impression_small_contants");

Component({
    behaviors: [ impressionBehaviors ],
    properties: {
        impressionData: {
            type: Object,
            value: {},
            observer: function observer(t, e, i) {}
        },
        impressionDataIndex: {
            type: Number,
            value: 0,
            observer: function observer(t, e, i) {}
        }
    },
    data: {},
    attached: function attached() {
        console.log("impression small attached");
        this.render(), this.setData({
            hasAttached: 1
        });
    },
    detached: function detached() {
        console.log("impression small detached");
    },
    methods: {
        render: function render() {
            var t = this.data.impressionData;
            t.comment || console.error("impressionData", t);
            var e = t.comment.createTime, i = util.getDateFormatString(e), a = renderDataUtil.getPoiInfo4Impression(t), n = (t.comment.tag, 
            t.reportData || {});
            n.recId = t.comment.recId || "", n.recType || (n.recType = t.comment.recType || 0);
            var o, s, r = {
                timeString: i,
                isMark: a.isMark,
                poiInfo: a,
                isUsingRealCurrentLocation: t.isUsingRealCurrentLocation,
                visitCount: a.visitCount,
                reportData: n,
                visitId: "",
                commentId: "",
                contact: {},
                commentInfo: {},
                originComment: {},
                subComments: []
            };
            o = t.comment.contact;
            var m = ((s = t.comment).subComment || []).map(function(t) {
                return {
                    nickName: t.mainComment.contact.remark || t.mainComment.contact.nickName,
                    content: JSON.parse(t.mainComment.info).content || "",
                    id: t.mainComment.id
                };
            });
            r.commentId = t.comment.id, r.visitId = t.visitId || t.comment.id, r.originComment = s, 
            r.contact = renderDataUtil.getFormattedContactInfo(o);
            var d = renderDataUtil.getCommentInfo4Impression(s, r, 0, o, this.data.impressionDataIndex, this.data.impressionLayoutMaxPic);
            d.mediaList && d.mediaList[0] && d.mediaList[0].height && d.mediaList[0].width && (d.firstMedia = util.clone(d.mediaList[0]), 
            d.firstMedia.width = impressionSmallContants.width, d.firstMedia.height = 1 * impressionSmallContants.width * d.mediaList[0].height / d.mediaList[0].width, 
            d.firstMedia.height > impressionSmallContants.mediaMaxHeight && (d.firstMedia.height = impressionSmallContants.mediaMaxHeight), 
            1 === d.firstMedia.type && (d.firstMedia.videoStyle = "1-1--small")), r.commentInfo = d, 
            r.subComments = m, this.setData({
                renderData: r
            }), this.declareBindingForContact(r);
        }
    }
});