var csstree = require("css-tree"), cheerio = require("cheerio"), fs = require("fs"), path = require("path"), glob = require("glob"), rework = require("rework"), pseudoclasses = require("rework-pseudo-classes"), compile = require("css-whitespace"), util = require("util"), log_file = fs.createWriteStream(__dirname + "/debug.log", {
    flags: "w"
}), log_stdout = process.stdout, ignoreFiles = require("../../../gulpingore"), ignorePath = [];

ignoreFiles.forEach(function(e, r) {
    ignorePath.push("../../**/" + e + "/**/*");
}), console.error = function() {
    log_file.write(util.format.apply(util, arguments) + "\n"), log_stdout.write(util.format.apply(util, arguments) + "\n");
};

var goThroughAllFiles = function goThroughAllFiles(e, r) {
    glob(e, {
        ignore: ignorePath
    }, function(e, o) {
        console.log(o), o.forEach(function(e) {
            try {
                r.call(this, e);
            } catch (r) {
                console.error("fail at", e);
            }
        });
    });
}, updatePseudoClassName = function updatePseudoClassName(e) {
    var r = fs.readFileSync(e, "utf8");
    rework(r).use(pseudoclasses({
        blacklist: [ ":active", ":hover" ],
        allCombinations: !0
    })).toString();
};

function getAllPesudoClass(e) {
    var r = fs.readFileSync(e, "utf8");
    csstree.parse(r);
}

goThroughAllFiles("../../**/!(weui).?(wx|le)ss", updatePseudoClassName);