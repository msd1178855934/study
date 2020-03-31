var util = require("./util.js"), storage = require("./storage.js"), APP_LAUNCH_DATA_USER_LAST_LATITUDE = "AppLaunchDataUserLastLatitude", APP_LAUNCH_DATA_USER_LAST_LONGITUDE = "AppLaunchDataUserLastLongitude", APP_LAUNCH_DATA_USER_LAST_AREA_ID = "AppLaunchDataUserLastSelectedAreaId", APP_LAUNCH_DATA_USER_LAST_OPEN_ID = "AppLaunchDataUserLastOpenId", APP_LAUNCH_DATA_USER_LAST_ROUTE_ID = "AppLaunchDataUserLastRouteId", APP_LAUNCH_DATA_USER_LAST_SESSION_KEY = "AppLaunchDataUserLastSessionKey", hasCheckedRealCurrentLocation = !1, useRealCurrentLocation = !1, latitude = storage.getFloatNumber(APP_LAUNCH_DATA_USER_LAST_LATITUDE), longitude = storage.getFloatNumber(APP_LAUNCH_DATA_USER_LAST_LONGITUDE), selectedAreaId = getLocalStorageString(APP_LAUNCH_DATA_USER_LAST_AREA_ID), openId = getLocalStorageString(APP_LAUNCH_DATA_USER_LAST_OPEN_ID), routeId = getLocalStorageString(APP_LAUNCH_DATA_USER_LAST_ROUTE_ID), sessionKey = getLocalStorageString(APP_LAUNCH_DATA_USER_LAST_SESSION_KEY), userRealCurrentLocation = {
    latitude: 0,
    longitude: 0
}, modifiedLocation = {
    latitude: 0,
    longitude: 0
}, confirmUserLocationListeners = [], currentAreaData = {
    id: "",
    name: ""
}, allRankAreaData = [], allRankCategory = [];

function getLocalStorageString(e) {
    var t = storage.getString(e);
    return t && t.length && "string" == typeof t ? t : "";
}

function updateUserLocation(e, t) {
    console.log("updateUserLocation, _latitude: " + e + ", _longitude: " + t), e && t ? (latitude = e, 
    longitude = t, storage.setNumber(APP_LAUNCH_DATA_USER_LAST_LATITUDE, latitude), 
    storage.setNumber(APP_LAUNCH_DATA_USER_LAST_LONGITUDE, longitude)) : console.error("updateUserLocation, !_latitude || !_longitude, return");
}

function updateSelectedAreaId(e) {
    console.log("updateSelectedAreaId: " + e), e && e.length && "string" == typeof e ? (selectedAreaId = e, 
    storage.setString(APP_LAUNCH_DATA_USER_LAST_AREA_ID, selectedAreaId)) : console.error("updateSelectedAreaId, invalid _selectedAreaId, return");
}

function updateAuthData(e, t, a) {
    console.log("updateAuthData, _openId: " + e + ", _routeId: " + t + ", _sessionKey: " + a), 
    e && t && a ? (openId = e, routeId = t, sessionKey = a, storage.setString(APP_LAUNCH_DATA_USER_LAST_OPEN_ID, openId), 
    storage.setString(APP_LAUNCH_DATA_USER_LAST_ROUTE_ID, routeId), storage.setString(APP_LAUNCH_DATA_USER_LAST_SESSION_KEY, sessionKey)) : console.error("updateAuthData, !_openId || !_routeId || !_sessionKey, return");
}

function clearSelectedAreaId() {
    console.log("clearSelectedAreaId"), selectedAreaId = "", storage.setString(APP_LAUNCH_DATA_USER_LAST_AREA_ID, "");
}

function clearAuthData() {
    console.log("clearAuthData"), openId = "", routeId = "", sessionKey = "", storage.setString(APP_LAUNCH_DATA_USER_LAST_OPEN_ID, ""), 
    storage.setString(APP_LAUNCH_DATA_USER_LAST_ROUTE_ID, ""), storage.setString(APP_LAUNCH_DATA_USER_LAST_SESSION_KEY, "");
}

function getUserLocation() {
    return latitude && longitude ? {
        latitude: latitude,
        longitude: longitude
    } : (console.log("getUserLocation, !latitude || !longitude, return default value"), 
    {
        latitude: 23.123823166,
        longitude: 113.343940735
    });
}

function getSelectedAreaId() {
    return hasCheckedRealCurrentLocation ? selectedAreaId : "";
}

function getAuthData() {
    return {
        openId: openId,
        routeId: routeId,
        sessionKey: sessionKey
    };
}

function getSessionKey() {
    return sessionKey;
}

function getOpenId() {
    return openId;
}

function getRouteId() {
    return routeId;
}

function markCheckRealCurrentLocation(e) {
    hasCheckedRealCurrentLocation = !0, (useRealCurrentLocation = e) && clearSelectedAreaId(), 
    notifyConfirmUserLocationListener();
}

function isUsingRealCurrentLocation() {
    return useRealCurrentLocation;
}

function updateUserRealCurrentLocation(e, t) {
    console.log("updateUserRealCurrentLocation, _latitude: " + e + ", _longitude: " + t), 
    e && t ? userRealCurrentLocation = {
        latitude: e,
        longitude: t
    } : console.error("updateUserRealCurrentLocation, !_latitude || !_longitude, return");
}

function updateModifiedLocation(e, t) {
    console.log("updateModifiedLocation, _latitude: " + e + ", _longitude: " + t), e && t ? modifiedLocation = {
        latitude: e,
        longitude: t
    } : console.error("updateModifiedLocation, !_latitude || !_longitude, return");
}

function getUserRealCurrentLocation() {
    return userRealCurrentLocation;
}

function getModifiedLocation() {
    return modifiedLocation;
}

function addConfirmUserLocationListener(e) {
    e && (hasCheckedRealCurrentLocation ? e() : confirmUserLocationListeners.push(e));
}

function notifyConfirmUserLocationListener() {
    if (confirmUserLocationListeners.length) for (var e = 0; e < confirmUserLocationListeners.length; e++) {
        (0, confirmUserLocationListeners[e])();
    }
    confirmUserLocationListeners = [];
}

function setCurrentArea(e) {
    e && e.id && e.name ? (currentAreaData.id = e.id, currentAreaData.name = e.name) : console.error("invalid _areaData, return. _areaData is: " + JSON.stringify(e));
}

function getCurrentArea() {
    return currentAreaData;
}

function setAllRankArea(e) {
    e && e.length ? allRankAreaData = e : console.error("invalid _allRankAreaData, return.");
}

function getAllRankArea() {
    return allRankAreaData;
}

function setAllRankCategory(e) {
    e && e.length ? allRankCategory = e : console.error("invalid _allRankCategoryData, return.");
}

function getAllRankCategory() {
    return allRankCategory;
}

module.exports = {
    setAllRankCategory: setAllRankCategory,
    getAllRankCategory: getAllRankCategory,
    updateUserLocation: updateUserLocation,
    updateSelectedAreaId: updateSelectedAreaId,
    updateAuthData: updateAuthData,
    clearSelectedAreaId: clearSelectedAreaId,
    clearAuthData: clearAuthData,
    getUserLocation: getUserLocation,
    getSelectedAreaId: getSelectedAreaId,
    getAuthData: getAuthData,
    getSessionKey: getSessionKey,
    getOpenId: getOpenId,
    getRouteId: getRouteId,
    markCheckRealCurrentLocation: markCheckRealCurrentLocation,
    isUsingRealCurrentLocation: isUsingRealCurrentLocation,
    updateUserRealCurrentLocation: updateUserRealCurrentLocation,
    updateModifiedLocation: updateModifiedLocation,
    getUserRealCurrentLocation: getUserRealCurrentLocation,
    getModifiedLocation: getModifiedLocation,
    addConfirmUserLocationListener: addConfirmUserLocationListener,
    setCurrentArea: setCurrentArea,
    getCurrentArea: getCurrentArea,
    setAllRankArea: setAllRankArea,
    getAllRankArea: getAllRankArea
};