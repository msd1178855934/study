Page({
    data: {
        url: ""
    },
    onLoad: function onLoad(a) {
        a.url ? this.setData({
            url: decodeURIComponent(a.url)
        }) : wx.navigateBack({
            delta: 2
        });
    }
});