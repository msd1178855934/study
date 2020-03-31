// miniprogram/pages/index/index.js
const db = wx.cloud.database();
const todos = db.collection('todos');

Page({

    /**
     * 页面的初始数据
     */
    data: {
        tasks: [],
        count: 0
    },

    pageData: {
        skip: 0
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onShow: function(options) {
        this.freshData();
    },

    onPullDownRefresh: function() {
        this.getData(res => {
            wx.stopPullDownRefresh();
            this.pageData.skip = 0;
        });
    },

    onReachBottom: function() {
        this.getData();
    },

    freshData: function() {
        todos.limit(this.pageData.skip + 20)
            .orderBy('createTime', 'desc')
            .get()
            .then(res => {
                this.setData({
                    tasks: res.data
                });
            })
    },

    getData: function(callback) {
        if (!callback) {
            callback = res => {};
        }
        todos.skip(this.pageData.skip)
            .orderBy('createTime', 'desc')
            .get()
            .then(res => {
                this.setData({
                    tasks: this.data.tasks.concat(res.data)
                }, res => {
                    this.pageData.skip += 20
                    callback();
                });
            })
    }
})