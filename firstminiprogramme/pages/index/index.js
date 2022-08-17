// index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        src: '/static/images/LOGO.jpg',
        name: 'Hello World'
    },

    getMyInfo: function (e) {
        wx.getUserProfile({
            desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
            success: (res) => {
                this.setData({
                    src: res.userInfo.avatarUrl,
                    name: res.userInfo.nickName
                })
            }
        })
    }
})