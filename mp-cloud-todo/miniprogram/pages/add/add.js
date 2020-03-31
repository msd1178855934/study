// pages/add/add.js
const db = wx.cloud.database();
const todos = db.collection('todos');

Page({

    /**
     * 页面的初始数据
     */
    data: {
        image: null,
        time: ''
    },

    pageData: {
        locationObj: {}
    },
    
    selectImage: function() {
        var that = this;
        wx.chooseImage({
            success: function(res) {
                console.log(res.tempFilePaths[0]);
                wx.cloud.uploadFile({
                    cloudPath: `${Math.floor(Math.random()*10000000)}.png`,
                    filePath: res.tempFilePaths[0]
                }).then(res => {
                    console.log(res.fileID);
                    that.setData({
                        image: res.fileID 
                    })
                }).catch(err => {
                    console.error(err);
                })
            },
        })
    },

    selectLocation: function() {
        wx.chooseLocation({
            success: res => {
                let locationObj = {
                    address: res.address,
                    latitude: res.latitude,
                    longtitude: res.longitude,
                    name: res.name
                };
                this.pageData.locationObj = locationObj;
            },
        })
    },

    bindTimeChange: function(e) {
        this.setData({
            time: e.detail.value
        });
    },

    onSubmit: function(e) {
        var myTimeStr = new Date().toLocaleDateString() + " " + this.data.time;
        
        todos.add({
            data: {
                title: e.detail.value.title,
                image: this.data.image,
                location: this.pageData.locationObj,
                createTime: new Date().getTime(),
                formId: e.detail.formId,
                time: myTimeStr
            }
        }).then(res => {
            console.log(res._id);

            wx.cloud.callFunction({
                name: 'msgMe',
                data: {
                    formId: e.detail.formId,
                    taskId: res._id
                }
            }).then(res2 => {
                if (res2.errorCode == 0) {
                    wx.showToast({
                        title: 'success',
                        duration: 500,
                        success: function() {
                            wx.redirectTo({
                                url: `../detail/detail?id=${res._id}`,
                            })
                        }
                    });
                } else {
                    wx.showToast({
                        title: res.errMsg,
                        icon: 'none',
                        duration: 500,
                        success: function() {
                            wx.redirectTo({
                                url: `../detail/detail?id=${res._id}`,
                            })
                        }
                    });
                }
            }).catch(err => {
                console.log(err);
            });
        });
    }
})