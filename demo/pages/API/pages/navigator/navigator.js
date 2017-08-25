// pages/API/pages/navigator/navigator.js
Page({
  navigateTo: function() {
    wx.navigateTo({
      url: './navigator'
    })
  },
  navigateBack: function() {
    wx.navigateBack();
  },
  redirectTo: function() {
    wx.redirectTo({
      url: './navigator'
    })
  }
})