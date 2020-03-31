// pages/detail/detail.js
const db = wx.cloud.database();
const todos = db.collection('todos');

Page({

    /**
     * 页面的初始数据
     */
    data: {
        todo: {}
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        console.log(options.id);
        todos.where({
            _id: options.id
        }).get().then(res => {
            this.setData({
                todo: res.data[0]
            });
        });
    },
    
    viewLocation: function() {
        wx.openLocation({
            latitude: this.data.todo.location.latitude,
            longitude: this.data.todo.location.longitude,
            address: this.data.todo.location.address,
            name: this.data.todo.location.name
        });
    }
})