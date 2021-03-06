'use strict';

const path = require('path'),
      db = require(path.join(__dirname, '/../../../config/database.js')),
      sql = require(path.join(__dirname, '/../../services/sqlService.js'));

exports.getAll = function(req, res){
  sql.getAll(req, db, "images")
  .then(function(result){
    res.json(result)
  })
  .catch(function(error){
    res.json({message : error})
  })
};

exports.get = function(req, res){
  sql.get(req,db, "images")
  .then(function(result){
    res.json(result)
  })
  .catch(function(error){
    res.json({message : error})
  })
};

exports.add = function(req, res){
  sql.add(req, db, "images")
  .then(function(result){
    res.json({message : "image ajoutée !"})
  })
  .catch(function(error){
    res.json({message : error})
  })
};

exports.delete = function(req, res){
  sql.delete(req,db, "images")
  .then(function(result){
    res.json({message : "image supprimée !"})
  })
  .catch(function(error){
    res.json({message : error})
  })
};

exports.update = function(req, res){
  sql.put(req,db, "images")
  .then(function(result){
    res.json({message : "image mise à jour !"})
  })
  .catch(function(error){
    res.json({message : error})
  })
};
