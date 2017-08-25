var location = null;
module.exports = {
  getLocation: function(callback) {
    if(location) {
      callback && callback(location);
      return;
    }
    wx.getLocation({
      success: function(res) {
        wx.request({
          url: 'https://api.map.baidu.com/geocoder/v2/?ak=7VENmCeC4aaAfx3CKbSjT1K3oRucOgDK' + '&location=' + res.latitude + ',' + res.longitude + '1&output=json&pois=1',
          success: function(res) {
            location = res.data.result;
            callback && callback(location);
          }
        })
      }
    })
  },
  getCity: function(callback) {
    this.getLocation(function(location) {
      callback && callback(location.addressComponent.city.replace('市', ''));
    });
  },
  fetchFilms: function(url, city, start, count, callback) {
    wx.request({
      url: url + '?city=' + city + '&start=' + start + '&count=' + count,
      header: {
        "Content-Type": "json",
      },
      success: function (res) {
        var data = res.data
        callback && callback(data)
      },
      fail: function(errMsg) {
        console.log(errMsg);
      }
    })
  }
}