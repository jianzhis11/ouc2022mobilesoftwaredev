Page({

    /**
     * 页面的初始数据
     */
    data: {
        region: ['山东省', '青岛市', '崂山区'],
        cityID: "101120202"
    },


    regionChange: function (e) {
        this.setData({
            region: e.detail.value
        });
        this.getWeather();
    },

    getWeather: function () {
        var that = this;
        that.getlocation();
        wx.request({
            url: 'https://devapi.qweather.com/v7/weather/now',
            data: {
                location: that.data.cityID,
                key: '23d0f4c999e34c97aac1038bed664c51'
            },
            success: function (res) {
                console.log(res.data['now']);
                that.setData({
                    now: res.data['now']
                });
            }
        })
    },

    getlocation: function () {
        var that = this;
        wx.request({
            url: 'https://geoapi.qweather.com/v2/city/lookup',
            data: {
                location: that.data.region[2],
                key: '23d0f4c999e34c97aac1038bed664c51'
            },
            success: function (res) {
                that.data.cityID = res.data.location[0]['id']
                console.log(that.data.region);
                console.log(res.data.location);
            },
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.getWeather();
        this.getlocation();
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})