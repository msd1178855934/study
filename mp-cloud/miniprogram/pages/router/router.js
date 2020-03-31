// miniprogram/pages/router/router.js
Page({

    user: function() {
        console.log('trigger user')
        wx.cloud.callFunction({
            name: 'router',
            data: {
                $url: 'user'
            }
        }).then(res => {
            console.log(res)
        })
    },

    school: function() {
        console.log('trigger school')
        wx.cloud.callFunction({
            name: 'router',
            data: {
                $url: 'school'
            }
        }).then(res => {
            console.log(res)
        })
    }
})