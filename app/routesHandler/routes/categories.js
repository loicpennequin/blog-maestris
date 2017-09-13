'use strict';

const path = require('path'),
      db = require(path.join(__dirname, '/../../../config/database.js')),
      sql = require(path.join(__dirname, '/../../services/sqlService.js'));

exports.getAll = function(req, res){
  sql.getAll(req, db, "categories")
  .then(function(result){
    res.json(result)
  })
  .catch(function(error){
    res.json({message : error})
  })
};

exports.get = function(req, res){
  sql.get(req, db, "categories")
  .then(function(result){
    res.json(result)
  })
  .catch(function(error){
    res.json({message : error})
  })
};

exports.add = function(req, res){
  sql.add(req, db, "categories")
  .then(function(result){
    res.json({message : "categorie ajoutée !"})
  })
  .catch(function(error){
    res.json({message : error})
  })
};

exports.delete = function(req, res){
  sql.delete(req,db, "categories")
  .then(function(result){
    res.json({message : "categorie supprimée !"})
  })
  .catch(function(error){
    res.json({message : error})
  })
};

exports.update = function(req, res){
  sql.put(req,db, "categories")
  .then(function(result){
    res.json({message : "categorie mise à jour !"})
  })
  .catch(function(error){
    res.json({message : error})
  })
};
