// pages/API/pages/pull-down-refresh/pull-down-refresh.js
Page({
  onPullDownRefresh: function() {
    wx.showToast({
      title: 'loading',
      icon: 'loading'
    });
    console.log('onPullDownRefresh', new Date());
  },
  stopPullDownRefresh: function() {
    wx.stopPullDownRefresh({
      complete: function(res) {
        wx.hideToast();
        console.log(res, new Date());
      }
    })
  }
})