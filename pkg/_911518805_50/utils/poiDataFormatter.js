Object.defineProperty(exports, "__esModule", {
    value: !0
});

var moment_ = require("../jslib/moment"), moment = moment_, FILTER_PATTERN = /^((周[一二三四五六七日末])?)([到至]?)((周[一二三四五六七日末])?)((全天)?)(((0*[0-9]|1[0-9]|2[0-3]):[0-5][0-9])?)/g, DAY_REGEX = /[一二三四五六日]|(周末)/g, HOURS_REGEX = /\d|全天/g, HOURS_MAP = [ "周末", "一", "二", "三", "四", "五", "六", "日" ], ALL_DAY = "00:00-24:00";

function tokenizer(e) {
    return e.split(/(?:;|\s)+/g);
}

function businessHourFormatter(e) {
    for (var r = {}, t = [], n = [], s = tokenizer(e), i = 0; i < s.length; ) {
        var o = s[i], u = o.trim().match(FILTER_PATTERN) || void 0, m = HOURS_REGEX.test(o), a = o.match(DAY_REGEX) || [];
        if (o && void 0 !== u && 0 === u[0].length) return {
            0: e
        };
        if ("全天" === o && (o = ALL_DAY), m) {
            for (var f = 0; f < t.length; f++) {
                if (void 0 === r[t[f]]) r[t[f]] = o; else {
                    var l = r[t[f]];
                    l = l.concat(";", o), r[t[f]] = l;
                }
            }
            n = [];
        } else {
            if (t = a.map(function(e) {
                return HOURS_MAP.indexOf(e);
            }), o.includes("至")) {
                var h = t[0], H = t[1] || -1;
                for (t = []; h <= H; ) {
                    t.push(h), h++;
                }
            } else 0 === t[0] && (t = []).push.apply(t, [ 6, 7 ]);
            t = n = n.concat(t);
        }
        i++;
    }
    return r;
}

exports.businessHourFormatter = businessHourFormatter;

var HOUR_SPLIT_REGEX = /-/g, HH_MM_REGEX = /(\d{1,2}):(\d{1,2})-(\d{1,2}):(\d{1,2})/g;

function businessHourBeautifier(e) {
    for (var r = [], t = tokenizer(e), n = 0; n < t.length; ) {
        var s = t[n], i = s.split(HOUR_SPLIT_REGEX);
        switch (s) {
          case "周一至周日":
            break;

          case "周末":
            "", r.push("周末");
            break;

          default:
            if (i.length > 0) for (var o = moment("00:00", "HH:mm"), u = moment("05:00", "HH:mm"), m = 0; m < i.length; m++) {
                if (moment(i[m], "hh:mm").isBetween(o, u)) {
                    i[m] = "凌晨" + i[m];
                    break;
                }
            }
            s = i.join("-"), r.push(s), s = "";
        }
        n++;
    }
    var a = e.match(HH_MM_REGEX) || "", f = businessHourFormatter(e), l = Object.keys(f), h = 0;
    if (6 === l.length && 1 == a.length) {
        for (var H = 0; H < 7; H++) {
            if (l[H] !== (H + 1).toString()) {
                h = H + 1;
                break;
            }
        }
        (r = []).push(a), r.push("周" + HOURS_MAP[h] + "不营业");
    }
    return 5 === l.length && 1 == a.length && l.indexOf("6") && l.indexOf("7") && ((r = []).push(a), 
    r.push("周末不营业")), r.join(" ");
}

function businessHourChecker(e, r) {
    var t = businessHourFormatter(r);
    if (t[0]) return null;
    for (var n = Object.keys(t), s = n.length, i = moment.unix(Number(e)).isoWeekday(), o = [], u = !1, m = null, a = 0; a < s; a++) {
        var f = void 0;
        n.indexOf((i - 1).toString()) > -1 && n.indexOf(i.toString()) > -1 && (f = i - 1), 
        1 === i && (f = 7), i === Number(n[a]) ? o = t[i].split(";") : f === Number(n[a]) && (o = t[f].split(";"), 
        u = !0);
        for (var l = 0, h = o.length, H = null, b = moment.unix(Number(e)); l < h; ) {
            var c = o[l].split("-"), d = moment(c[0], "HH:mm"), _ = moment(c[1], "HH:mm");
            _.isBefore(d) && (u && b.hour() <= _.hour() ? (d.subtract(1, "days"), u = !1) : _.add(1, "days")), 
            (H = b.isBetween(d, _)) ? l = h : l++;
        }
        if (H) return m = 1;
        m = 0;
    }
    return m;
}

exports.businessHourBeautifier = businessHourBeautifier, exports.businessHourChecker = businessHourChecker;