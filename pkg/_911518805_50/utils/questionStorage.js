var storage = require("./storage"), PREFIX = "QUESTION_";

function hasAnswered() {
    return !!storage.getNumber(PREFIX + "hasAnswered");
}

function answer() {
    storage.setNumber(PREFIX + "hasAnswered", 1);
}

module.exports = {
    hasAnswered: hasAnswered,
    answer: answer
};