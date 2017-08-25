// pages/component/pages/navigator/redirect.js
Page({
  onLoad: function (options) {
    console.log(options)
    this.setData({
      title: options.title
    })
  }
})
