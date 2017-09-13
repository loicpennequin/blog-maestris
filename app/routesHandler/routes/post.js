'use strict';

const path = require('path'),
      db = require(path.join(__dirname, '/../../../config/database.js')),
      sql = require(path.join(__dirname, '/../../services/sqlService.js')),
      slugify = require('slugify');

exports.getAll = function(req, res){
  sql.getAll(req, db, "posts")
  .then(function(result){
    res.json(result)
  })
  .catch(function(error){
    res.json({message : error})
  })
};

exports.get = function(req, res){
  sql.get(req,db, "posts")
  .then(function(result){
    res.json(result)
  })
  .catch(function(error){
    res.json({message : error})
  })
};

exports.add = function(req, res){
  req.body.slug = slugify(req.body.title);
  req.body.created_at = new Date();
  sql.add(req, db, "posts")
  .then(function(result){
    res.json({message : "article ajouté !"})
  })
  .catch(function(error){
    res.json({message : error})
  })
};

exports.delete = function(req, res){
  sql.delete(req,db, "posts")
  .then(function(result){
    res.json({message : "article supprimé !"})
  })
  .catch(function(error){
    res.json({message : error})
  })
};

exports.latest = function(req, res){
  sql.latest(req,db, "posts")
  .then(function(result){
    res.json(result)
  })
  .catch(function(error){
    res.json({message : error})
  })
};

exports.update = function(req, res){
  sql.put(req,db, "posts")
  .then(function(result){
    res.json({message : "article mis à jour !"})
  })
  .catch(function(error){
    res.json({message : error})
  })
};
