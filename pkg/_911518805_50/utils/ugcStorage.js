var storage = require("./storage"), PREFIX = "UGC_", MAX_SHAKE_COUNT = 5;

function hasPostComment() {
    return !!storage.getNumber(PREFIX + "hasPostComment");
}

function updatePostCommentFlag() {
    storage.setNumber(PREFIX + "hasPostComment", 1);
}

function hasMarkAtTimeline() {
    return !!storage.getNumber(PREFIX + "hasMarkAtTimeline");
}

function updateMarkAtTimeline() {
    storage.setNumber(PREFIX + "hasMarkAtTimeline", 1);
}

function isShareShakeDisable() {
    return !!(storage.getNumber(PREFIX + "shareShakeCount") >= MAX_SHAKE_COUNT);
}

function updateShareShakeCount() {
    var e = 1;
    return storage.getNumber(PREFIX + "shareShakeCount") && (e = storage.getNumber(PREFIX + "shareShakeCount") + 1), 
    storage.setNumber(PREFIX + "shareShakeCount", e), e;
}

module.exports = {
    hasPostComment: hasPostComment,
    updatePostCommentFlag: updatePostCommentFlag,
    hasMarkAtTimeline: hasMarkAtTimeline,
    updateMarkAtTimeline: updateMarkAtTimeline,
    isShareShakeDisable: isShareShakeDisable,
    updateShareShakeCount: updateShareShakeCount
};