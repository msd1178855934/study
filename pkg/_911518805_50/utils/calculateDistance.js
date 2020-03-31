var cgi = require("cgi"), appLaunchData = require("appLaunchData"), util = require("./util"), poiLocations = [], poiLocationsFn = [];

function cgiCalculate() {
    if (appLaunchData.isUsingRealCurrentLocation() && poiLocations.length) {
        var a = poiLocations, o = poiLocationsFn;
        poiLocations = [], poiLocationsFn = [];
        var i = appLaunchData.getUserLocation();
        new cgi.SimpleRequest("CalculateDistance", {
            poiLocation: a,
            userLocation: i
        }).ensureNoSameUrlProcessing().send(function(a) {
            a.poiDistance.forEach(function(a, i) {
                o[i] && o[i](a.distance);
            });
        });
    }
}

var debouceCgiCalculte = util.debounce(cgiCalculate, 500);

function addPoiLocation(a, o) {
    poiLocations.push(a), poiLocationsFn.push(o), debouceCgiCalculte();
}

appLaunchData.addConfirmUserLocationListener(cgiCalculate), module.exports = {
    addPoiLocation: addPoiLocation
};