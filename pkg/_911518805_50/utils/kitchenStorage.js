var storage = require("./storage"), util = require("./util"), PREFIX = "KITCHEN_";

function getClientVersion() {
    var e = storage.getNumber(PREFIX + "clientVersion");
    return e && e > 0 ? e : 16777248;
}

function setClientVersion(e) {
    storage.setNumber(PREFIX + "clientVersion", e);
}

function getSource() {
    if ("" === storage.getString(PREFIX + "source")) return 0;
    var e = storage.getNumber(PREFIX + "source");
    return e && e > 0 ? e : 0;
}

function setSource(e) {
    e < 0 && (e = 0), storage.setNumber(PREFIX + "source", e);
}

function setCurrentTime(e) {
    storage.setString(PREFIX + "currentTime", e);
}

function getCurrentTime(e) {
    return storage.getString(PREFIX + "currentTime");
}

function setPriceLevel(e) {
    storage.setNumber(PREFIX + "priceLevel", e);
}

function getPriceLevel() {
    return storage.getNumber(PREFIX + "priceLevel");
}

function setPoiLocationRadius(e) {
    storage.setNumber(PREFIX + "poiLocationRadius", e);
}

function getPoiLocationRadius() {
    var e = storage.getNumber(PREFIX + "poiLocationRadius");
    return null === e ? 80 : e;
}

function getShouldShowHeadImage() {
    var e = storage.getNumber(PREFIX + "shouldShowHeadImage");
    return null === e ? 1 : e;
}

function setShouldShowHeadImage(e) {
    storage.setNumber(PREFIX + "shouldShowHeadImage", e);
}

function getShouldLocateDefault() {
    var e = storage.getNumber(PREFIX + "shouldShowLocateDefault");
    return null === e ? 0 : e;
}

function setShouldShowLocateDefault(e) {
    storage.setNumber(PREFIX + "shouldShowLocateDefault", e);
}

function getShouldUseGreyServer() {
    var e = storage.getNumber(PREFIX + "shouldUseGreyServer");
    return null === e ? 0 : e;
}

function setShouldUseGreyServer(e) {
    storage.setNumber(PREFIX + "shouldUseGreyServer", e);
}

function setDefaultLocationLatitude(e) {
    null != e && util.isNumeric(e) || (e = 23.10053), storage.setNumber(PREFIX + "defaultLocationLatitude", e);
}

function getDefaultLocationLatitude() {
    var e = storage.getFloatNumber(PREFIX + "defaultLocationLatitude");
    return null === e ? 23.10053 : e;
}

function setDefaultLocationLongitude(e) {
    null != e && util.isNumeric(e) || (e = 113.325), storage.setNumber(PREFIX + "defaultLocationLongitude", e);
}

function getDefaultLocationLongitude() {
    var e = storage.getFloatNumber(PREFIX + "defaultLocationLongitude");
    return null === e ? 113.325 : e;
}

function setMediaMaxDuration(e) {
    storage.setNumber(PREFIX + "mediaMaxDuration", e);
}

function getMediaMaxDuration() {
    var e = storage.getNumber(PREFIX + "mediaMaxDuration");
    return null === e ? 15 : e;
}

function setTestPoiLocationLatitude(e) {
    null != e && util.isNumeric(e) || (e = 0), storage.setNumber(PREFIX + "testPoiLocationLatitude", e);
}

function getTestPoiLocationLatitude() {
    var e = storage.getFloatNumber(PREFIX + "testPoiLocationLatitude");
    return null === e ? 0 : e;
}

function setTestPoiLocationLongitude(e) {
    null != e && util.isNumeric(e) || (e = 0), storage.setNumber(PREFIX + "testPoiLocationLongitude", e);
}

function getTestPoiLocationLongitude() {
    var e = storage.getFloatNumber(PREFIX + "testPoiLocationLongitude");
    return null === e ? 0 : e;
}

function setTestPoiName(e) {
    storage.setString(PREFIX + "testPoiName", e);
}

function getTestPoiName() {
    return storage.getString(PREFIX + "testPoiName");
}

function getShouldUsePoiTestInfo() {
    var e = storage.getNumber(PREFIX + "shouldUsePoiTestInfo");
    return null === e ? 0 : e;
}

function setShouldUsePoiTestInfo(e) {
    storage.setNumber(PREFIX + "shouldUsePoiTestInfo", e);
}

function getShouldShowStoreAppEntry() {
    var e = storage.getNumber(PREFIX + "shouldShowStoreAppEntry");
    return null === e ? 1 : e;
}

function setShouldShowStoreAppEntry(e) {
    storage.setNumber(PREFIX + "shouldShowStoreAppEntry", e);
}

module.exports = {
    getShouldUseGreyServer: getShouldUseGreyServer,
    setShouldUseGreyServer: setShouldUseGreyServer,
    getShouldLocateDefault: getShouldLocateDefault,
    setShouldShowLocateDefault: setShouldShowLocateDefault,
    getClientVersion: getClientVersion,
    setClientVersion: setClientVersion,
    getSource: getSource,
    setSource: setSource,
    getCurrentTime: getCurrentTime,
    setCurrentTime: setCurrentTime,
    setPriceLevel: setPriceLevel,
    getPriceLevel: getPriceLevel,
    setPoiLocationRadius: setPoiLocationRadius,
    getPoiLocationRadius: getPoiLocationRadius,
    getShouldShowHeadImage: getShouldShowHeadImage,
    setShouldShowHeadImage: setShouldShowHeadImage,
    setDefaultLocationLatitude: setDefaultLocationLatitude,
    getDefaultLocationLatitude: getDefaultLocationLatitude,
    setDefaultLocationLongitude: setDefaultLocationLongitude,
    getDefaultLocationLongitude: getDefaultLocationLongitude,
    setMediaMaxDuration: setMediaMaxDuration,
    getMediaMaxDuration: getMediaMaxDuration,
    setTestPoiLocationLatitude: setTestPoiLocationLatitude,
    getTestPoiLocationLatitude: getTestPoiLocationLatitude,
    setTestPoiLocationLongitude: setTestPoiLocationLongitude,
    getTestPoiLocationLongitude: getTestPoiLocationLongitude,
    setTestPoiName: setTestPoiName,
    getTestPoiName: getTestPoiName,
    setShouldUsePoiTestInfo: setShouldUsePoiTestInfo,
    getShouldUsePoiTestInfo: getShouldUsePoiTestInfo,
    getShouldShowStoreAppEntry: getShouldShowStoreAppEntry,
    setShouldShowStoreAppEntry: setShouldShowStoreAppEntry
};