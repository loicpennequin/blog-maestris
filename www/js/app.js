var app = angular.module('myApp', ["ngRoute", "ngAnimate", "ui.tinymce", "ngSanitize", "ui.bootstrap", "checklist-model"]);

app.config(function($routeProvider, $httpProvider){
  $routeProvider
    .when('/', {templateUrl: 'views/home.html', controller : 'blogCtrl'})
    .when('/login', {templateUrl: 'views/admin_login.html', controller : 'adminCtrl'})
    .when('/admin', {templateUrl: 'views/admin.html', controller : 'adminCtrl'})
    .when('/about', {templateUrl: 'views/about.html', controller : 'blogCtrl'})
    .when('/categories/:categorie', {templateUrl: 'views/posts_by_category.html', controller : 'blogCtrl'})
    .when('/archives', {templateUrl: 'views/posts_by_date.html', controller : 'blogCtrl'})
    .when('/contact', {templateUrl: 'views/contact.html', controller : 'blogCtrl'})
    .when('/articles/:slug', {templateUrl: 'views/post.html', controller : 'blogCtrl'})
    .otherwise('/');
});
