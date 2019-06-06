var app = getApp()
Page( {
  data: {
    _id:'',
    arr:[]
  },
  onLoad: function (options) {
    console.log(options.id)
    this.setData({
      _id:options.id
    })  
    const db = wx.cloud.database()
    db.collection('commodity').where({
      _id:this.data._id
    }).get({
      success: res => {
        this.setData({
          arr:res.data
        })
        app.globalData.phoneNumber = this.data.arr[0].userTel
      }
    })  
  },
  tel:function(){
    wx.makePhoneCall({
      phoneNumber:app.globalData.phoneNumber,
    })
  }
})