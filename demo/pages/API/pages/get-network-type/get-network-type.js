// pages/API/pages/get-network-type/get-network-type.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasNetworkType: false
  },
  getNetworkType: function() {
    var that = this;
    wx.getNetworkType({
      success: function(res) {
        console.log(res);
        that.setData({
          hasNetworkType: true,
          networkType: res.subtype || res.networkType
        })
      },
    })
  },
  clear: function() {
    this.setData({
      hasNetworkType: false,
      networkType: ''
    })
  }
})