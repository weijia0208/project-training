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
/*
function getIndexNavSectionData(){
    var arr = [
                [
                    {
                        
                        subject:"考研书籍",
                        coverpath:"../../images/recommend_img_01.png",
                        price:'¥10',
                        message:'我们追求的是没有最长只有更长！'
                    },
                    {
                        
                        subject:"出各种大学政治英语教材一元一本",
                        coverpath:"../../images/recommend_img_02.png",
                        price:'¥1',
                        message:'我们追求的是没有最长只有更长！'
                    },
                    {
                        
                        subject:"出衣架十个",
                        coverpath:"../../images/recommend_img_03.png",
                        price:'¥3',
                        message:'我们追求的是没有最长只有更长！'
                    },
                    {
                        
                        subject:"伊本造型",
                        coverpath:"../../images/recommend_img_05.png",
                        price:'¥198',
                        message:'伊本造型是由著名形象设计师杨进先生创办。'
                    },
                    {
                        
                        subject:" 画对了妆，微微一笑颜值倍儿高！",
                        coverpath:"../../images/recommend_img_06.png",
                        price:'¥198',
                        message:'《微微一笑很倾城》的剧照简直美腻到不要不要的'
                    }
                ],
                [
                    {
                        artype:'study',
                        subject:"秋季自然特价美甲",
                        coverpath:"../../images/recommend_img_01.png",
                        price:'¥198',
                        message:'我们追求的是没有最长只有更长！'
                    }
                ],
                [
                    
                    {
                        artype:'life',
                        subject:"出宿舍楼下校喜洗洗衣卡账户余额，还有69",
                        coverpath:"../../images/recommend_img_05.png",
                        price:'¥60',
                        message:'伊本造型是由著名形象设计师杨进先生创办。'
                    }
                ],
                [
                  {
                    artype: 'beauty',
                    subject: "爱丽克EircParisSalon",
                    coverpath: "../../images/recommend_img_03.png",
                    price: '¥1588',
                    message: '我们追求的是没有最长只有更长！'
                  },
                  {
                    artype: 'beauty',
                    subject: " 出各种粽灰眉笔",
                    coverpath: "../../images/recommend_img_06.png",
                    price: '¥198',
                    message: '《微微一笑很倾城》的剧照简直美腻到不要不要的'
                  }
                ],
                [
                    {
                        artype:'other',
                        subject: "出一个家教，小学四年级数学，最好是女生",
                        coverpath:"../../images/recommend_img_02.png",
                        price:'¥1888',
                        message:'我们追求的是没有最长只有更长！'
                    }
                ] 
            ]
    return arr
}
*/

/*
 * 对外暴露接口
 */ 
module.exports = {
  getBannerData : getBannerData,
  getIndexNavData : getIndexNavData,
  // getIndexNavSectionData : getIndexNavSectionData,
}