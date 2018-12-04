const Users = require('../models/user.js');
var express = require('express');
var router = express.Router();

var user = new Users();

/* GET home page. */
router.get('/', function(req, res/*, next*/) {
  user.getAll((err,items)=>{
    if(err){
      console.error(err);
      return;
    }
    res.render('index',{items:items});
  });
});

router.post('/',function(req,res){
  user.addItem(req.body.item,function(err){
    if(err){
      res.status(500).send('DB error');
      return;
    }
  });
  user.getAll(function(err,items){
    if(err){
      res.status(500).send('DB error');
      return;
    }
    res.render('index',{items:items});
  });
});

router.delete('/',function(req,res){
  if(typeof req.query.item === 'undefined'){
    user.delAll(function(err){
      if(err){
        res.status(500).send('DB error');
      }else{
        res.status(200).send('Delete OK!');
      }
    });
  }else{
    user.delete(req.query.item,function(err){
      if(err){
        res.status(500).send('DB error');
      }else{
        res.status(200).send('Delete OK');
      }
    });
  }
});

router.put('/',function(req,res){
  if(typeof req.query.id === 'undefined'){
    res.status(404).send('Not found!');
  }else{
    user.update(Number(req.query.id),req.body.item,function(err){
      if(err){
        res.status(500).send('DB error');
      }else{
        res.status(200).send('update Ok');
      }
    });
  }
});

module.exports = router;
