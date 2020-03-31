var e = Object.assign || function(e) {
    for (var r = 1; r < arguments.length; r++) {
        var o = arguments[r];
        for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n]);
    }
    return e;
}, r = require("./localesMap"), o = {
    "zh-CN": {
        addReply: "添加回复",
        finish: "办结",
        deal: "处理",
        replyCon: "回复内容",
        baseMsg: "基本信息",
        otherMsg: "其它信息",
        reflectPerson: "反映人信息",
        involvedPerson: "涉事人信息",
        reflectCon: "反映内容",
        reportAgain: "重新上报",
        title: "详情"
    },
    en: {
        addReply: "Add a reply.",
        finish: "Closed",
        deal: "Handling",
        replyCon: "Reply",
        baseMsg: "Basic information",
        otherMsg: "Other information",
        reflectPerson: "Reporter information",
        involvedPerson: "participants information",
        reflectCon: "Information reported",
        reportAgain: "Resubmit",
        title: "detail"
    },
    ja: {
        addReply: "回答を追加",
        finish: "処理済み",
        deal: "処理",
        replyCon: "回答内容",
        baseMsg: "基本情報",
        otherMsg: "その他情報",
        reflectPerson: "報告者情報",
        involvedPerson: "渉事人情報",
        reflectCon: "報告内容",
        reportAgain: "改めて報告",
        title: "详细"
    },
    kr: {
        addReply: "답글 추가",
        finish: "완료",
        deal: "처리",
        replyCon: "답복 내역",
        baseMsg: "프로파일",
        otherMsg: "기타 정보",
        reflectPerson: "보고자 정보",
        involvedPerson: "관련자 정보",
        reflectCon: "보고 내역",
        reportAgain: "다시 제출",
        title: "자세 한 정보"
    }
};

Object.keys(r).forEach(function(n) {
    o[n] = e({}, o[n], r[n]);
}), module.exports = o;