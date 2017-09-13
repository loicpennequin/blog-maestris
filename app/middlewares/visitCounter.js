'use strict';

const express= require('express'),
      app = express(),
      fs = require('fs');

module.exports = (req, res, next) => {
  let visitors = require('../../visitors.json');
  console.log(req.session.visitorId);
  if (!req.session.visitorId){
    req.session.visitorId = req.sessionID;
    console.log('you had a visitor');
    visitors.total++;
    console.log(visitors.total);
    visitors.visits.push(new Date());
    fs.writeFile('visitors.json', JSON.stringify(visitors), 'utf8', (err)=>{
      if(err) throw err;
    });
  }
  next();
};
