// pages/component/pages/navigator/navigate.js
Page({
  onLoad: function(options) {
    console.log(options);
    this.setData({
      title: options.title
    })
  }
})