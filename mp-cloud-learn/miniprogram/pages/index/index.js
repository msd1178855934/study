// miniprogram/pages/index/index.js
const db = wx.cloud.database();
const _ = db.command;

Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    query1: function () {
        db.collection('data')
            .where({
                count: _.in([1,2,4])
            })
            .get().then(console.log);
    },
    query2: function () {
        db.collection('data')
            .field({
                desc: true
            })
            .get().then(console.log);
    },
    query3: function () {
        db.collection('data')
            .where({
                name: /name-./i
            })
            .get().then(console.log);
    },
    locationAdd: function () {
        db.collection('location')
            .add({
                data: {
                    location: db.Geo.Point(102.0012, 10.0022)
                }
            });
    },
    locationQuery: function () {
        db.collection('location')
            .get().then(console.log);
    }
})