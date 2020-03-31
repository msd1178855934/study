var util = require("./util"), sessionId = 0, launchScene = 0;

function createNewSession() {
    return sessionId = util.getTimeRandomId();
}

function getId() {
    return sessionId;
}

function setLaunchScene(e) {
    launchScene = e;
}

function getLaunchScene() {
    return launchScene;
}

module.exports = {
    createNewSession: createNewSession,
    getId: getId,
    setLaunchScene: setLaunchScene,
    getLaunchScene: getLaunchScene
};