require("./../../runtime"), require("./../../common"), (wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 19 ], {
    110: function(t, e, i) {
        "use strict";
        i.r(e);
        var n = i(8), o = i(17), r = i(60), s = i(1), l = i(12), h = i(11), a = {
            leading: !0,
            trailing: !1
        };
        function u(t, e) {
            return void 0 === e && (e = a), function(i) {
                return i.lift(new p(t, e.leading, e.trailing));
            };
        }
        var p = function() {
            function t(t, e, i) {
                this.durationSelector = t, this.leading = e, this.trailing = i;
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new c(t, this.durationSelector, this.leading, this.trailing));
            }, t;
        }(), c = function(t) {
            function e(e, i, n, o) {
                var r = t.call(this, e) || this;
                return r.destination = e, r.durationSelector = i, r._leading = n, r._trailing = o, 
                r._hasValue = !1, r;
            }
            return s.a(e, t), e.prototype._next = function(t) {
                this._hasValue = !0, this._sendValue = t, this._throttled || (this._leading ? this.send() : this.throttle(t));
            }, e.prototype.send = function() {
                var t = this._hasValue, e = this._sendValue;
                t && (this.destination.next(e), this.throttle(e)), this._hasValue = !1, this._sendValue = null;
            }, e.prototype.throttle = function(t) {
                var e = this.tryDurationSelector(t);
                e && this.add(this._throttled = Object(h.a)(this, e));
            }, e.prototype.tryDurationSelector = function(t) {
                try {
                    return this.durationSelector(t);
                } catch (t) {
                    return this.destination.error(t), null;
                }
            }, e.prototype.throttlingDone = function() {
                var t = this._throttled, e = this._trailing;
                t && t.unsubscribe(), this._throttled = null, e && this.send();
            }, e.prototype.notifyNext = function(t, e, i, n, o) {
                this.throttlingDone();
            }, e.prototype.notifyComplete = function() {
                this.throttlingDone();
            }, e;
        }(l.a), d = i(5);
        function f(t) {
            return function(e) {
                return e.lift(new y(t));
            };
        }
        var y = function() {
            function t(t) {
                this.value = t;
            }
            return t.prototype.call = function(t, e) {
                return e.subscribe(new v(t, this.value));
            }, t;
        }(), v = function(t) {
            function e(e, i) {
                var n = t.call(this, e) || this;
                return n.value = i, n;
            }
            return s.a(e, t), e.prototype._next = function(t) {
                this.destination.next(this.value);
            }, e;
        }(d.a), b = i(121);
        Object(n.a)({
            options: {
                styleIsolation: "apply-shared",
                multipleSlots: !0
            },
            data: {
                hideTop: !1
            },
            properties: {
                topHeight: {
                    type: Number,
                    value: 56
                },
                pageStyle: {
                    type: String,
                    value: ""
                }
            },
            attached() {
                this.scrollEvent$ = new o.a(), this.showTop$ = this.scrollEvent$.pipe(Object(r.a)(({type: t}) => "scrolltoupper" === t), u(() => this.notShowTop$), f(!1)), 
                this.notShowTop$ = this.scrollEvent$.pipe(Object(r.a)(({type: t}) => "scroll" === t), Object(r.a)(({scrollTop: t}) => t >= this.properties.topHeight), u(() => this.showTop$), f(!0)), 
                this.hideTop$ = this.showTop$.pipe(Object(b.a)(this.notShowTop$)), this.autoUnsubscribe(this.hideTop$).subscribe(t => {
                    t !== this.data.hideTop && this.setData({
                        hideTop: t
                    });
                });
            },
            methods: {
                scrolltoupper() {
                    this.scrollEvent$.next({
                        type: "scrolltoupper"
                    });
                },
                scroll(t) {
                    this.scrollEvent$.next({
                        type: "scroll",
                        scrollTop: t
                    });
                }
            }
        });
    }
}, [ [ 110, 0, 1 ] ] ]);
//# sourceMappingURL=toggle-display-top.js.map