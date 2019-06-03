var app = getApp()
Page( {
  data: {
  },
  onLoad: function (options) {
    this.setData({
      artype:options.artype
    })    
  },
  getLocation:function(){
    wx.navigateTo({
      url:'../location/location'
    })
  },
  tel:function(){
    wx.makePhoneCall({
      phoneNumber:app.globalData.phoneNumber,
    })
  }
})