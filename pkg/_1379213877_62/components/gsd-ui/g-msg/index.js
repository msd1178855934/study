Object.defineProperty(exports, "__esModule", {
    value: !0
});

var r = require("../behaviors/primarySecondButton");

Component({
    behaviors: [ r ],
    properties: {
        title: String,
        status: String,
        desc: String,
        primaryText: String,
        secondText: String,
        footerFixed: Boolean,
        supportor: String,
        sponsor: String
    },
    data: {}
});