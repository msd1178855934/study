var app = getApp(), cgi = require("../../utils/cgi"), util = require("../../utils/util"), reporter = require("../../utils/reporter"), reportEnum = require("../../utils/reportEnum"), reportSession = require("../../utils/report_session"), appLaunchData = require("../../utils/appLaunchData"), MMPage = require("../../utils/mmFramework/mm_page"), renderDataUtil = require("../../utils/render_data_util"), declareBinding = require("../../utils/model_lib/declareBinding"), PoiSchema = require("../../utils/model/model_schema").PoiSchema, PoiModel = require("../../utils/model/poi_model"), REPLACE = 0, APPEND = 1;

MMPage({
    mmReportData: {
        pageName: reportEnum.enumPageName.RECOMMEND_POI,
        poiExposedObjSet: {}
    },
    data: {
        context: "",
        continueFlag: 1,
        shouldShowBottomLoading: !0
    },
    onLoad: function onLoad(e) {
        var t = this;
        app.addLaunchListener(function() {
            t.getRecommendPoiRequest();
        }), reporter.getReporter(16501).pageId(t.mmReportData.pageName).time(Math.floor(new Date().getTime() / 1e3)).launchScene(reportSession.getLaunchScene()).sessionId(reportSession.getId()).reportToServer();
    },
    onUnload: function onUnload() {
        this.poiIntersectionObserver && this.poiIntersectionObserver.disconnect();
    },
    getRecommendPoiRequest: function getRecommendPoiRequest() {
        var e = this, t = appLaunchData.getUserLocation();
        e.data.requestId = util.uuid(), e.setData({
            renderPoiList: [],
            shouldShowBottomLoading: !0
        }), new cgi.SimpleRequest("getrecommendpoi", {
            location: t,
            requestId: e.data.requestId
        }).send(function(t) {
            if (t.poi) {
                var r = [];
                t.poi.forEach(function(t) {
                    r.push({
                        poi: renderDataUtil.getRenderPoiInfo(t.poi),
                        reportData: {
                            pageId: e.mmReportData.pageName,
                            prevPageId: reportEnum.enumPageName.TIMELINE,
                            requestId: e.data.requestId
                        },
                        reasonData: {
                            reason: t.reason,
                            type: t.type,
                            billboard: t.refBillBoard || ""
                        }
                    });
                }), e.setData({
                    renderPoiList: r,
                    shouldShowBottomLoading: !1
                }), declareBinding({
                    instance: e,
                    schema: PoiSchema,
                    arrayPath: "renderPoiList",
                    mapping: {
                        "poi.id": "id",
                        "poi.isMark": "isMark"
                    }
                });
            }
        }, function(t) {
            e.setData({
                shouldShowBottomLoading: !1
            });
        });
    }
});