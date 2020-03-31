// miniprogram/pages/index/index.js
Page({

    data: {

    },

    pageData: {
        imgUrl: null
    },

    onLoad: function() {
        wx.cloud.getTempFileURL({
            fileList: ['cloud://poetry-dev.706f-poetry-dev-1300051147/326600.png']
        }).then(res => {
            this.pageData.imgUrl = res.fileList[0].tempFileURL;
        })
    },

    queryData: function() {
        console.log("queryData is clicked");
        wx.cloud.callFunction({
            name: 'queryData'
        }).then(console.log)
    },

    addData: function () {
        console.log("addData is clicked");
        wx.cloud.callFunction({
            name: 'addData'
        }).then(console.log)
    },

    deleteData: function () {
        console.log("deleteData is clicked");
        wx.cloud.callFunction({
            name: 'deleteData'
        }).then(console.log)
    },

    updateData: function () {
        console.log("updateData is clicked");
        wx.cloud.callFunction({
            name: 'updateData'
        }).then(console.log)
    },

    getFileUrl: function () {
        console.log("getFileUrl is clicked");
        wx.cloud.callFunction({
            name: 'getFileUrl'
        }).then(console.log)
    },

    httpRequest: function () {
        console.log("httpRequest is clicked");
        wx.cloud.callFunction({
            name: 'httpRequest'
        }).then(console.log)
    },
    
    connectMySQL: function () {
        console.log("connectMySQL is clicked");
        wx.cloud.callFunction({
            name: 'connectMySQL'
        }).then(console.log)
    },

    getuserinfo: function (e) {
        console.log("getuserinfo is clicked");
        console.log(e.detail.userInfo);
    },

    normalQR: function () {
        console.log("normalQR is clicked");
        wx.cloud.callFunction({
            name: 'normalQR'
        }).then(res => {
            this.setData({
                qr: res.result.fileID
            })
        })
    },

    getCode: function () {
        console.log("getCode is clicked");
        wx.cloud.callFunction({
            name: 'getCode'
        }).then(res => {
            this.setData({
                code: res.result.fileID
            })
        })
    },

    messageSubmit: function(e) {
        console.log("messageSubmit is clicked");
        wx.cloud.callFunction({
            name: 'messageSubmit',
            data: {
                formId: e.detail.formId
            }
        }).then(console.log)
    },

    onShareAppMessage: function() {
        return {
            title: 'title',
            path: '/apges/index/index',
            imageUrl: this.pageData.imgUrl
        }
    }

})