// pages/API/pages/get-system-info/get-system-info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    systemInfo: {}
  },
  getSystemInfo: function() {
    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          systemInfo: res
        })
      }
    })
  }
})