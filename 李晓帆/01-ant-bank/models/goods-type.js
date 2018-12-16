const db = require('./database.js');

var user = function(){};

/*查*/
user.prototype.getAll = function(cb){
  const sql = 'SELECT * from groups';
  var items = [];
  db.query(sql,function(err,result){
    if(err){
      cb(true);
      return;                
    }
    result.forEach((e) => {items.push(e.goods_type,e.good_num);});
    cb(false,result);
  });
};

/*增*/
user.prototype.addItem = function(e,cb){
  const sql = 'INSERT INTO groups VALUES(?,?)';
  db.query(sql,[e.goods_type,e.good_num],function(err,result){
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
};

/*删*/
user.prototype.delItem = function(goods_type,cb){
  const sql = 'DELETE FROM groups WHERE goods_type=?';
  db.query(sql,[goods_type],function(err,result){
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
};

user.prototype.delAll = function(cb){
  const sql = 'DELETE FROM groups';
  db.query(sql,function(err,results){
    if(err){
      cb(true);
      return;
    }
    cb(false,results);
  });
};

/*改*/
user.prototype.update = function(id,username,cb){
  const sql = 'UPDATE groups SET username = ? WHERE id = ?';
  db.query(sql,[username,id],function(err,results){
    if(err){
      cb(true);
      return;
    }
    cb(false,results);
  });
};

module.exports = user;
