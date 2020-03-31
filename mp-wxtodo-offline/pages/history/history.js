// pages/history/history.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        actionTexts: {
            'create': '创建',
            'finish': '完成',
            'restart': '重启',
            'delete': '删除',
            'clear': '清空所有待办事项',
            'restartAll': '重启所有待办事项',
            'finishAll': '完成所有待办事项'
        },
        timeSetting: false,
        history: [],
        groupedHistory: {},
        dates: []
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        var history = wx.getStorageSync('history');
        if (history) {
            this.setData({ history: history});
            this.processHistory();
        }

        var timeSetting = wx.getStorageSync('timeSetting');
        if (typeof timeSetting == 'boolean') {
            this.setData({ timeSetting: timeSetting});
        }
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {
        this.setData({
            history: [],
            groupedHistory: {},
            dates: []
        });
    },

    processHistory: function () {
        var history = this.data.history;
        var dates = [];
        var groupedHistory = history.map((item, index) => {
            item.pos = index;
            var date = new Date(item.timestamp);
            item.date = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDay();
            item.time = date.getHours() + ':' + date.getMinutes();
            return item;
        }).reverse().reduce((total, cur) => {
            if (!total[cur.date]) {
                total[cur.date] = [];
                dates.push(cur.date);
            }
            total[cur.date].push(cur);
            return total;
        }, {});
        this.setData({
            groupedHistory: groupedHistory,
            dates: dates
        });
    },

    onItemRemove: function (e) {
        var pos = e.currentTarget.dataset.pos;
        var history = this.data.history;
        history.splice(pos, 1);
        this.setData({ history: history });
        this.processHistory();
        this.save();
    },

    save: function () {
        wx.setStorageSync('history', this.data.history);
    }
})