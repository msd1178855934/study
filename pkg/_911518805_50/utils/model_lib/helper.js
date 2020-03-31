var util = require("./util"), tableManager = require("./table_manager");

function getTableData(e, t) {
    return tableManager.getTable(e).getRow(t);
}

function setTableData(e, t, a) {
    util.isObject(a) && Object.keys(a).length && util.validate(e, a) && tableManager.getTable(e).mergeRow(t, a);
}

function resetTableData(e, t, a) {
    util.isObject(a) && Object.keys(a).length && util.validate(e, a) && tableManager.getTable(e).setRow(t, a);
}

function addTableDataListener(e, t, a) {
    return tableManager.getTable(e).addRowUpdateListener(t, a);
}

function removeTableDataListener(e, t, a) {
    tableManager.getTable(e).removeRowUpdateListener(t, a);
}