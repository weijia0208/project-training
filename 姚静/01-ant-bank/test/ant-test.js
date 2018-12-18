const Users = require('../models/ant/delivery.js');

var user = new Users();

//user.getAll(function(err,items){
  //console.log(items);
//});
/*
user.addItem(2,'weijia',function(err){
  if(err){
    console.error(err);
  }
});
*/

/*
user.delItem('魏佳',function(err){
  if(err){
    console.error(err);
  }
});
*/

/*
user.update(1,'weijia',function(err){
  if(err){
    console.log(err);
  }
});
*/

/*
user.getAll('13931600608',function(err,items){
  console.log(items);
})
*/

user.delItem(700003,function(err){
  if(err){
    console.log(err);
  }
  console.log('OK!');
});
