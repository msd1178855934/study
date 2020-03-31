// pages/user/user.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        avatar: '',
        name: ''
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onLoad: function () {
        this.setData({
            avatar: wx.getStorageSync('avatar') || 'https://yunlaiwu0.cn-bj.ufileos.com/teacher_avatar.png',
            name: wx.getStorageSync('name') || ''
        });
    },

    changeAvatar: function (e) {
        var that = this;
        wx.chooseImage({
            success: function (res) {
                var tempFilePaths = res.tempFilePaths;
                wx.saveFile({
                    tempFilePath: tempFilePaths[0],
                    success: function (res) {
                        var savedFilePath = res.savedFilePath;
                        wx.setStorageSync('avatar', savedFilePath);
                        that.setData({ avatar: savedFilePath });
                    }
                });
            }
        });
    },

    blurName: function (e) {
        this.setData({'name': wx.getStorageSync('name')});
    },

    changeName: function (e) {
        var name = e.detail.value.trim();
        if (name) {
            wx.setStorageSync('name', name);
        }
    },
})