//index.js
//获取应用实例
var app = getApp()
var fileData = require('../../utils/data.js')

Page({
  // 页面初始数据
  data: {
      colors:['red','orange','yellow','green','purple'],
      // banner 初始化
      banner_url: fileData.getBannerData(),
      indicatorDots: true,
      vertical: false,
      autoplay: true,
      interval: 3000,
      duration: 1000,
      // nav 初始化
      navTopItems: fileData.getIndexNavData(),
      navSectionItems: fileData.getIndexNavSectionData(),
      curNavId: 1,
		  curIndex: 0
  },
  /*下拉刷新 */
  onPullDownRefresh: function () {
    this.onLoad();
    wx.showNavigationBarLoading() //在标题栏中显示加载

    setTimeout(function () {
      

      wx.hideNavigationBarLoading() //完成停止加载

      wx.stopPullDownRefresh() //停止下拉刷新

    }, 1500);
  },
   
  onLoad:function(){
    var that = this

    //获取商品数据
    wx.cloud.init();
    var db = wx.cloud.database();
    db.collection('commodity').where({}).get().then(res => {
      var study = [],
          life = [],
          beauty = [],
          other = [];
      var s = 0,
          l = 0,
          b = 0,
          o = 0;
      for(var i=0;i<res.data.length;i++){
        if(res.data[i].goods_type === 'study'){
          study[s]=res.data[i];
          s++;          
        } else if (res.data[i].goods_type === 'life') {
          life[l] = res.data[i];
          l++;
        } else if (res.data[i].goods_type === 'beauty') {
          beauty[b] = res.data[i];
          b++;
        } else{
          other[o] = res.data[i];
          o++;
        }
      }
      that.data.navSectionItems[0] = res.data;
      that.data.navSectionItems[1] = study;
      that.data.navSectionItems[2] = life;
      that.data.navSectionItems[3] = beauty;
      that.data.navSectionItems[4] = other;

      that.setData({
        list: that.data.navSectionItems
      })
    });
  },
  //标签切换
  switchTab: function(e) {
      let id = e.currentTarget.dataset.id,
      index = parseInt(e.currentTarget.dataset.index)
      this.curIndex = parseInt(e.currentTarget.dataset.index)
      var that = this
      this.setData({
        curNavId: id,
        curIndex: index,
      })
      
  },
  // 跳转至详情页
  navigateDetail: function(e){
    wx.navigateTo({
      url: '../detail/detail?id='+e.currentTarget.dataset.id
    })
  },
})
