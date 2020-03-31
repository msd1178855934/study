var fs = require("fs"), path = require("path"), glob = require("glob"), HTMLParser = require("node-html-parser"), filesArray = glob("../../components/**/*.wxml", function(e, r) {
    r.forEach(function(e) {
        generateDomTree(e);
    });
});

function generateDomTree(e) {
    var r = fs.readFileSync(e, "utf8"), i = HTMLParser.parse(r);
    i.querySelector(".impression-cell").appendChild('<view class="impression-cell--ps"></view>'), 
    console.log(i.firstChild.structure), fs.writeFileSync(e, i, {
        encoding: "utf8",
        flag: "w"
    });
}