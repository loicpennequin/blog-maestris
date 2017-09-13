'use strict';
let mysql = require('mysql');

exports.getAll = function(req, db, table){
  let sql = "SELECT * FROM " + table;
  return request(db, sql);
};

exports.get = function(req, db, table){
  let sql = "SELECT * FROM " + table
            +" WHERE " + req.params.column
            +"=" + req.params.value;
  return request(db, sql);
};

exports.add = function(req, db, table){
  let post = req.body,
      sql = "INSERT INTO " + table +" SET ?";
  return request(db, sql, post);
};

exports.delete = function(req, db, table){
  let sql = "DELETE FROM " + table
            + " WHERE id=" + req.params.id;
  return request(db, sql);
};

exports.put = function(req, db, table){
  let post = req.body,
      sql = "UPDATE " + table +" SET ? WHERE id=" + req.params.id
  // let fields = Object.keys(req.body),
  //     sql = "UPDATE " + table +" SET ";
  // fields.forEach(function(field){
  //   // if (typeof req.body[field] === 'string' ){
  //   //   sql += field + "=''" +  `${req.body[field]}` + "', "
  //   // }else {
  //   //   sql +=  field + `= ${req.body[field]}, `
  //   // }
  //   sql +=  field + "=" + mysql.escape(req.body[field]) + ", "
  //
  // });
  // sql = sql.slice(0, -1);
  // sql += " WHERE id=" + req.params.id;
  // console.log(sql);
  // return request(db, sql);
  return request(db, sql, post);
};

exports.latest = function(req, db, table){
  let sql = "SELECT * FROM " + table
            + " WHERE created_at = (SELECT MAX(created_at) FROM " + table + ")";
  return request(db, sql);
}

function request(db, sql, post){
  return new Promise((resolve, reject)=>{
    let query = db.query(sql, post, (err, result)=>{
      if (err){
        console.log(err);
        reject(err)
      } else {
        resolve(result)
      }
    });
  });
};
