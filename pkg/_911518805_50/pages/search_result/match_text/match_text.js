var app = getApp();

Component({
    properties: {
        text: String,
        query: String
    },
    data: {
        shouldShowEllipse: !1
    },
    attached: function attached() {
        var t = this.data.text.indexOf(this.data.query);
        if (-1 == t) this.setData({
            t1: "",
            t2: "",
            t3: ""
        }); else {
            var a = this.data.text.substring(0, t), e = this.data.text.substring(t, t + this.data.query.length), s = this.data.text.substring(t + this.data.query.length, this.data.text.length);
            this.setData({
                t1: a,
                t2: e,
                t3: s
            });
        }
    },
    methods: {}
});