var util = require("../../utils/util");

Component({
    properties: {
        showBottomLoading: {
            type: Boolean,
            value: !0
        },
        darkTheme: {
            type: Boolean,
            value: !1
        }
    },
    data: {},
    ready: function ready(o) {
        console.log("bottom_loading, ready: " + JSON.stringify(o));
    },
    methods: {}
});