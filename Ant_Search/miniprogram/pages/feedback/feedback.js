// pages/feedback/feedback.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    feedback:''
  },


  /*提交意见成功函数*/
  success: function (options) {
    var that = this;
    /*上传数据库 */
    const db = wx.cloud.database()
    db.collection('feedback').add({
      data: {
        feed_content:that.data.feedback
      }
    })
   setTimeout(function () {
      wx.showToast({
        title: '成功',
        icon: 'success',
        duration: 2000
      })
    }, 2000);
    
  },

  getFeb:function(e){
    const that = this
    that.setData({
      feedback:e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})