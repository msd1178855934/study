var app = getApp(), cgi = require("../utils/cgi"), util = require("../utils/util"), reporter = require("../utils/reporter"), reportEnum = require("../utils/reportEnum"), reportSession = require("../utils/report_session");

module.exports = Behavior({
    behaviors: [],
    properties: {},
    data: {},
    attached: function attached() {},
    ready: function ready() {},
    created: function created() {},
    detached: function detached() {},
    methods: {
        _pageExposeKvReport: function _pageExposeKvReport() {
            reporter.getReporter(16501).pageId(this._getEnumPageId()).time(Math.floor(new Date().getTime() / 1e3)).launchScene(reportSession.getLaunchScene()).sessionId(reportSession.getId()).reportToServer();
        },
        _getEnumPageId: function _getEnumPageId() {
            var e = getCurrentPages(), r = e[e.length - 1].route, t = "";
            if (r) for (var o in t = r.match(/\/(.*)\//)[0].replace(/\//g, "").toUpperCase(), 
            reportEnum.enumPageName) {
                if (o === t) return reportEnum.enumPageName[t];
            }
            return "";
        }
    }
});