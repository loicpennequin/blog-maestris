'use strict';

exports.login = function(req, res){
  if (req.body.login === process.env.ADMIN_USER && req.body.password === process.env.ADMIN_PASSWORD) {
    req.session.adminAuth = true;
    res.json({connected : true, message : "acces à l'interface admin authorisé."});
  } else {
    res.json({connected : false, message : "acces à l'interface admin refusé. Veuillez reessayer."});
  }
};

exports.logincheck = function(req, res){
  res.json({adminAuth : req.session.adminAuth})
};

exports.logout = function(req, res){
  req.session.adminAuth = false;
  res.json({message : "Deconnexion de l'espace admin réussie."})
}
