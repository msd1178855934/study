var util = require("./util");

function setString(t, e) {
    if ("string" == typeof e) try {
        wx.setStorageSync(t, e);
    } catch (t) {
        console.error("kitchen storage setStorageSync error", t);
    } else util.alert("setString error, not a string");
}

function getString(t) {
    if (!t) return "";
    try {
        return wx.getStorageSync(t);
    } catch (t) {
        return console.error("kitchen storage getStorageSync error", t), "";
    }
}

function setNumber(t, e) {
    null !== e ? util.isNumeric(e) ? setString(t, e.toString(10)) : util.alert("set Number error, not a number") : setString(t, "");
}

function getNumber(t) {
    var e = getString(t);
    return e ? parseInt(e, 10) : null;
}

function getFloatNumber(t) {
    var e = getString(t);
    return e ? parseFloat(e) : null;
}

function setObj(t, e) {
    wx.setStorageSync(t, e);
}

function getObj(t, e) {
    return wx.getStorageSync(t);
}

module.exports = {
    setString: setString,
    getString: getString,
    setNumber: setNumber,
    getNumber: getNumber,
    setObj: setObj,
    getObj: getObj,
    getFloatNumber: getFloatNumber
};