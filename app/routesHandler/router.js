'use strict';

let admin = require('./routes/admin.js'),
    post = require('./routes/post.js'),
    comment = require('./routes/comments.js'),
    message = require('./routes/messages.js'),
    category = require('./routes/categories.js'),
    image = require('./routes/images.js');

module.exports = function(app){
  app.get('/admin/logincheck', admin.logincheck);
  app.get('/admin/logout', admin.logout);
  app.post('/admin/login', admin.login);

  app.get('/api/posts', post.getAll);
  app.get('/api/posts/:column/:value', post.get);
  app.get('/api/posts/latest', post.latest);
  app.get('/api/comments', comment.getAll);
  app.get('/api/comments/:column/:value', comment.get);
  app.get('/api/messages', message.getAll);
  app.get('/api/messages/:column/:value', message.get);
  app.get('/api/categories', category.getAll);
  app.get('/api/categories/:column/:value', category.get);
  app.get('/api/images', image.getAll);
  app.get('/api/images:column/:value', image.get);
  app.get('/api/sitedata', (req, res) => {
      let visitors = require('../../visitors.json');
      res.json({siteData : visitors})
  });

  app.post('/api/posts', post.add);
  app.post('/api/comments', comment.add);
  app.post('/api/messages', message.add);
  app.post('/api/categories', category.add);
  app.post('/api/images', image.add);

  app.delete('/api/posts/:id', post.delete);
  app.delete('/api/comments/:id', comment.delete);
  app.delete('/api/messages/:id', message.delete);
  app.delete('/api/categories/:id', category.delete);
  app.delete('/api/images/:id', image.delete);

  app.put('/api/posts/:id', post.update);
  app.put('/api/comments/:id', comment.update);
  app.put('/api/messages/:id', message.update);
  app.put('/api/categories/:id', category.update);
  app.put('/api/images/:id', image.update);
};
