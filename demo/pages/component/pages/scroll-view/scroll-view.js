// pages/component/pages/scroll-view/scroll-view.js
var order = ['demo1', 'demo2', 'demo3'];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    toView: 'demo2'
  },
  upper: function(e) {
    console.log(e);
  },
  lower: function(e) {
    console.log(e);
  },
  scroll: function(e) {
    console.log(e);
  },
  scrollToTop: function(e) {
    console.log('scrollToTop');
    this.setData({
      scrollTop: 0
    })
  },
  tap: function (e) {
    for (var i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        if(i == order.length - 1) {
          this.setData({
            toView: order[0]
          })
        }else {
          this.setData({
            toView: order[i + 1]
          })
        }
        
        break
      }
    }
  },
  tapMove: function (e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  }
})