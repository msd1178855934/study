var constants = require("./constants"), Table = require("./table");

getApp().globalData || (getApp().globalData = {}), getApp().globalData[constants.Name_Tables] = {};

var tables = getApp().globalData[constants.Name_Tables];

function getTable(a) {
    return tables[a.schemaName] || (tables[a.schemaName] = new Table(a)), tables[a.schemaName];
}

module.exports = {
    getTable: getTable
};