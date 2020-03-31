Component({
    data: {
        selected: 0,
        color: "#7A7E83",
        selectedColor: "#3cc51f",
        list: [ {
            pagePath: "/index/index",
            iconPath: "/image/icon_component.png",
            selectedIconPath: "/image/icon_component_HL.png",
            text: "组件"
        }, {
            pagePath: "/index/index2",
            iconPath: "/image/icon_API.png",
            selectedIconPath: "/image/icon_API_HL.png",
            text: "接口"
        } ]
    },
    attached: function() {},
    methods: {
        switchTab: function(e) {
            var t = e.currentTarget.dataset, n = t.path;
            wx.switchTab({
                url: n
            }), this.setData({
                selected: t.index
            });
        }
    }
});