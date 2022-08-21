// pages/index/index.js
var common = require('../../utils/common.js') //引用公共JS文件
Page({
    data: {
        //幻灯片素材
        swiperImg: [{
                src: 'https://gaopursuit.oss-cn-beijing.aliyuncs.com/2022/newsimage1.jpg'
            },
            {
                src: 'https://gaopursuit.oss-cn-beijing.aliyuncs.com/2022/newsimage2.jpg'
            },
            {
                src: 'https://gaopursuit.oss-cn-beijing.aliyuncs.com/2022/newsimage3.jpg'
            }
        ],
    },

    goToDetail: function (e) {
        //获取携带的data-id数据
        let id = e.currentTarget.dataset.id;
        //携带新闻id进行页面跳转
        var islogin = wx.getStorageSync('islogin')
        if (islogin) {
            wx.navigateTo({
                url: '../detail/detail?id=' + id
            })
        } else {
            wx.showModal({
                title: '提示',
                content: '你还没有登陆，将跳转至登录界面',
                success: (res) => {
                    if (res.confirm) { //这里是点击了确定以后
                        wx.switchTab({
                            url: '../my/my',
                        })
                    } else { //这里是点击了取消以后
                        console.log('用户点击取消')
                    }
                }
            })
        }
    },

    onLoad: function (options) {
        //获取新闻列表
        let list = common.getNewsList()
        //更新列表数据
        this.setData({
            newsList: list,
        })
    },


})