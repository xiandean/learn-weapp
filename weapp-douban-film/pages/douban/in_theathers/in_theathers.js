// pages/douban/in_theathers/in_theathers.js
var functions = require('../functions.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    films: [],
    hasMore: true,
    showLoading: true,
    start: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var url = 'https://api.douban.com/v2/movie/in_theaters';
    wx.showLoading({
      title: 'loading',
    });
    functions.getCity(function(city) {
      functions.fetchFilms(url, city, that.data.start, 20, function(data) {
        console.log(data);
        if (data.subjects.length === 0) {
          that.setData({
            hasMore: false,
            showLoading: false
          })
        } else {
          that.setData({
            films: that.data.films.concat(data.subjects),
            start: that.data.start + data.subjects.length,
            showLoading: false
          })
        }
        wx.hideLoading();
      });
    });
  },

  onPullDownRefresh: function() {
    console.log("onPullDownRefresh", new Date());
  }
})