var util = require("./util.js"), showActionSheetBeforePostViewAppear = !1, mainTab = 0;

function getIntValueFromApiRes(e) {
    return e ? void 0 === e.testConfig ? (console.error("getIntValueFromApiRes, res.testConfig is undefined, return"), 
    0) : (console.log("res.testConfig=" + e.testConfig), e.testConfig ? parseInt(e.testConfig) : 0) : (console.error("getIntValueFromApiRes, no res, return"), 
    0);
}

function getBoolValueFromApiRes(e) {
    return 0 != getIntValueFromApiRes(e);
}

function getAllABTestValues() {
    wx.getABTestConfig ? (showActionSheetBeforePostViewAppear = !0, wx.getABTestConfig({
        experimentId: "mmlifeapp_cli_write_interface_switch",
        experimentType: "Expt",
        success: function success(e) {
            console.log("wx getABTestConfig mmlifeapp_cli_write_interface_switch success: " + JSON.stringify(e)), 
            showActionSheetBeforePostViewAppear = getBoolValueFromApiRes(e);
        },
        fail: function fail(e) {
            console.error("wx getABTestConfig mmlifeapp_cli_write_interface_switch failed: " + JSON.stringify(e));
        }
    }), wx.getABTestConfig({
        experimentId: "mmlifeapp_main_tab",
        experimentType: "Expt",
        success: function success(e) {
            console.log("wx getABTestConfig mmlifeapp_main_tab success: " + JSON.stringify(e)), 
            mainTab = null == e.testConfig || "" === e.testConfig ? 0 : getIntValueFromApiRes(e), 
            util.notifyOneTimeEvent("ABTestUtil_getMainTab", mainTab);
        },
        fail: function fail(e) {
            console.error("wx getABTestConfig mmlifeapp_main_tab failed: " + JSON.stringify(e)), 
            util.notifyOneTimeEvent("ABTestUtil_getMainTab", mainTab);
        }
    })) : console.error("no wx.getABTestConfig api");
}

function shouldShowActionSheetBeforePostViewAppear() {
    return showActionSheetBeforePostViewAppear;
}

function getMainTab() {
    return mainTab;
}

module.exports = {
    getMainTab: getMainTab,
    getAllABTestValues: getAllABTestValues,
    shouldShowActionSheetBeforePostViewAppear: shouldShowActionSheetBeforePostViewAppear
};