// pages/setting/setting.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        allSetting: true,
        clearSetting: true,
        timeSetting: false
    },

    onLoad: function () {
        var that = this;
        ['allSetting', 'clearSetting', 'timeSetting'].forEach((setting) => {
            var value = wx.getStorageSync(setting);
            if (typeof value == 'boolean') {
                var config = {};
                config[setting] = value;
                that.setData(config);
            }
        });
    },

    toggleSetting: function (e) {
        var setting = e.currentTarget.dataset.setting;
        var value = e.detail.value;
        wx.setStorageSync(setting, value);
    }
})