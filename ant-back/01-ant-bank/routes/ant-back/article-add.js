const Users = require('../../models/ant-back/article-add.js');
var express = require('express');
var router = express.Router();

var user = new Users();

/* GET home page. */
router.get('/',function(req, res/*, next*/) {
  user.getAll((err,result)=>{
    if(err){
      console.error(err);
      return;
    }
    res.render('article-add',{items:result});
  }); 
});


module.exports = router;
