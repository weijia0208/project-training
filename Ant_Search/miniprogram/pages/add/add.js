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
      { name: 'study', value: '学习', checked: 'true' },
      { name: 'life', value: '生活' },
      { name: 'beauty', value: '美妆' },
      { name: 'other', value: '其他' }
    ],
    title: '',
    price: '',
    type: '',
    username: '',
    telnum: '',
    detailtext: '',
    imagePath: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /*获取标题 */
    getTitle: function (e) {
      var that = this;
      that.setData({
        title: e.detail.value
      })
      // console.log(that.data.title)
    },
    /*获取商品价格 */
    getPrice: function (e) {
      var that = this;
      that.setData({
        price: e.detail.value
      })
      // console.log(that.data.price)
    },
    /*获取物品类型 */
    radioChange: function (e) {
      var that = this;
      that.setData({
        type: e.detail.value
      })
      // console.log(that.data.type)
    },
    /*获取联系人 */
    getUser: function (e) {
      var that = this;
      that.setData({
        username: e.detail.value
      })
      // console.log(that.data.username)
    },
    /*获取联系方式*/
    getTel: function (e) {
      var that = this;
      that.setData({
        telnum: e.detail.value
      })
      // console.log(that.data.telnum)
    },
    /*获取商品描述*/
    getDetail: function (e) {
      var that = this;
      that.setData({
        detailtext: e.detail.value
      })
      // console.log(that.data.detailtext)
    },
    /*添加图片 */
    chooseImage: function () {
      var the = this;
      wx.chooseImage({
        success: function (res) {
          the.setData({
            images: res.tempFilePaths
          });
          const filePath = res.tempFilePaths[0]
          const name = Math.random() * 1000000;
          const cloudPath = name + filePath.match(/\.[^.]+?$/)[0]
          wx.cloud.uploadFile({
            cloudPath,
            filePath,
            success: res => {
              the.setData({
                imagePath: res.fileID
              })
            },
          })
        },
      })

    },
    /*发布*/
    success: function (options) {
      var that = this;
      /*上传数据库 */
      const db = wx.cloud.database()
      db.collection('commodity').add({
        data: {
          goods_name: that.data.title,
          goods_decription: that.data.detailtext,
          goods_price: that.data.price,
          goods_type: that.data.type,
          userTel: that.data.telnum,
          goods_pic: that.data.imagePath
        }
      })
      /*上传成功 */
      setTimeout(function () {
        wx.showToast({
          title: '成功',
          icon: 'success',
          duration: 2000
        })
      }, 2000);
    },
  }
})