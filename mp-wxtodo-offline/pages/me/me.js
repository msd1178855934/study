// pages/me/me.js
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
    onShow: function () {
        this.setData({
            avatar: wx.getStorageSync('avatar') || 'https://yunlaiwu0.cn-bj.ufileos.com/teacher_avatar.png',
            name: wx.getStorageSync('name') || ''
        });
    },

    navTo: function (e) {
        wx.navigateTo({
            url: e.currentTarget.dataset.target == 'setting' ? '/pages/setting/setting' : '/pages/user/user'
        });
    }
})