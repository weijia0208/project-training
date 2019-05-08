// pages/add/add.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    items: [
      { name: 'study', value: '学习', checked: 'true'},
      { name: 'life', value: '生活' },
      { name: 'beauty', value: '美妆' },
      { name: 'other', value: '其他' }
    ],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    radioChange: function (e) {
      console.log( e.detail.value)
    },
    chooseImage: function () {
      var the = this;
      wx.chooseImage({
        success: function (res) {
          the.setData({
            images: res.tempFilePaths
          });
        },
      })
    },
    success: function (options) {
      var that = this;
      var timeOut = setTimeout(function () {
        wx.showToast({
          title: '成功',
          icon: 'success',
          duration: 2000
        })
      }, 2000);
      timeOut();
    },
  }
})

