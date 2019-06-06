/**
 * banner数据
 */ 
function getBannerData(){
  var arr = ['cloud://ant-search-3e5bbf.616e-ant-search-3e5bbf/images/banner_01.jpg', 'cloud://ant-search-3e5bbf.616e-ant-search-3e5bbf/images/banner_02.jpg', 'cloud://ant-search-3e5bbf.616e-ant-search-3e5bbf/images/banner_03.jpg']
    return arr
}
/*
 * 首页 navnav 数据
 */ 
function getIndexNavData(){
    var arr = [
            {
                id:1,
                icon:"../../images/nav_icon_01.png",
                title:"推 荐"
            },
            {
                id:2,
                icon:"../../images/nav_icon_02.png",
                title:"学 习"
            },
            {
                id:3,
                icon:"../../images/nav_icon_03.png",
                title:"生 活"
            },
            {
                id:4,
                icon:"../../images/nav_icon_04.png",
                title:"美 妆"
            },
            {
                id:5,
                icon:"../../images/nav_icon_05.png",
                title:"其 他"
            }
        ]
    return arr
}
/*
 * 首页 对应 标签 数据项
 */ 
function getIndexNavSectionData(){
  var arr = []
  return arr;
}

/*
 * 对外暴露接口
 */ 
module.exports = {
  getBannerData : getBannerData,
  getIndexNavData : getIndexNavData,
  getIndexNavSectionData : getIndexNavSectionData,
}