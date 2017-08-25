// pages/API/pages/set-navigation-bar-title/set-navigation-bar-title.js
Page({
  setNavigationBarTitle: function(e) {
    var title = e.detail.value.title;
    wx.setNavigationBarTitle({
      title: title,
      success: function() {
        console.log('setNavigationBarTitle success');
      },
      fail: function(err) {
        console.log('setNavigationBarTitle fail, err is', err);
      }
    })
    return false;
  }
  
})