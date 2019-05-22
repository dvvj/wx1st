//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  },
  onLoad: function () {
    console.log('onLoad call');
    wx.request({
      url: 'https://livezilla.lutube.org/chatopera/i2.html', //仅为示例，并非真实的接口地址
      header: {
        'content-type': 'text/html;charset=utf-8'
      },
      success: function (res) {
        console.log(res.data)
      }
    });
  }
})
