var app = getApp(), cgi = require("../../utils/cgi"), MMPage = require("../../utils/mmFramework/mm_page"), duration = 500;

Component({
    properties: {
        textArray: {
            type: Array,
            value: [],
            observer: function observer(t, a, e) {}
        },
        alarmPosition: {
            type: String,
            value: "",
            observer: function observer(t, a, e) {}
        }
    },
    data: {
        index: 0,
        nextTimeoutSeq: [ 2e3, 3e3, 6e3, 4e3 ],
        nextTimeoutIndex: 0,
        alarmExtraStyle: ""
    },
    attached: function attached() {
        var t = this;
        t.data.alarmPosition && t.setData({
            alarmExtraStyle: "alarm-" + t.data.alarmPosition
        }), setTimeout(function() {
            t.animationIn(t.data.textArray[t.data.index]);
        }, 10);
    },
    methods: {
        getNextTimeout: function getNextTimeout() {
            var t = this.data.nextTimeoutSeq, a = this.data.nextTimeoutIndex, e = t[a];
            return this.data.nextTimeoutIndex = (a + 1) % t.length, e;
        },
        animationIn: function animationIn(t) {
            var a = this;
            a.setData({
                isVisible: 0,
                shouldSetWidth0: 0,
                isTextOpacity0: 1,
                text: t
            }, function() {
                wx.createSelectorQuery().in(a).select(".alarm").boundingClientRect(function(t) {
                    var e = t.width;
                    a.setData({
                        isVisible: 1,
                        shouldSetWidth0: 1
                    }, function() {
                        var t = wx.createAnimation({
                            duration: duration,
                            timingFunction: "ease"
                        }).width(e).step();
                        a.setData({
                            animationData: t.export()
                        }), setTimeout(function() {
                            var t = wx.createAnimation({
                                duration: duration / 2,
                                timingFunction: "ease"
                            }).opacity(1).step();
                            a.setData({
                                animationOpacityData: t.export()
                            }), setTimeout(function() {
                                a.animationOut();
                            }, 4 * duration);
                        }, duration);
                    });
                }).exec();
            });
        },
        animationOut: function animationOut() {
            var t = this, a = wx.createAnimation({
                duration: duration,
                timingFunction: "ease"
            }).width(0).step();
            t.setData({
                animationData: a.export()
            }), t.data.index++, t.data.index >= t.data.textArray.length && (t.data.index = 0), 
            setTimeout(function() {
                t.setData({
                    isTextOpacity0: 1
                }), setTimeout(function() {
                    t.animationIn(t.data.textArray[t.data.index]);
                }, 500);
            }, t.getNextTimeout());
        }
    }
});