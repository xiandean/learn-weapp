// pages/API/pages/scan-code/scan-code.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    result: ''
  },
  scanCode: function() {
    var that = this;
    wx.scanCode({
      success: function(res) {
        that.setData({
          result: res.result
        })
      },
      fail: function(res) {
        
      }
    })
  }
})