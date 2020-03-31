var lastPages = [], MMPage = function MMPage(a) {
    var t = a.onLoad, e = a.onUnload, n = a.onShow;
    Page(Object.assign(a, {
        onLoad: function onLoad() {
            var a = arguments;
            t && t.apply(this, a);
        },
        onShow: function onShow() {
            var a = getCurrentPages();
            lastPages.length > 0 && a.length > 0 && (lastPages.length + 1 == a.length ? this.mmPrevPage = a[a.length - 2] : lastPages.length - 1 == lastPages.length && (this.mmBackPage = a[a.length - 1])), 
            lastPages = a, n && n.apply(this);
        },
        onUnload: function onUnload() {
            e && e.apply(this);
        }
    }));
};

module.exports = MMPage;