//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    items: [{
      index: 0,
      msg: 'this is a template',
      time: '2016-06-18'
    }, {
      index: 1,
      msg: 'this is a template 2',
      time: '2016-06-19'
    }]
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../circle/circle'
    })
  },
  doSwitch: function (e) {
    const length = this.data.objectArray.length
    for (let i = 0; i < length; ++i) {
      const x = Math.floor(Math.random() * length)
      const y = Math.floor(Math.random() * length)
      const temp = this.data.objectArray[x]
      this.data.objectArray[x] = this.data.objectArray[y]
      this.data.objectArray[y] = temp
    }
    this.setData({
      objectArray: this.data.objectArray
    })
  },
  addToFront: function (e) {
    const length = this.data.objectArray.length
    this.data.objectArray = [{ id: length, unique: 'unique_' + length }].concat(this.data.objectArray)
    this.setData({
      objectArray: this.data.objectArray
    })
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
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
