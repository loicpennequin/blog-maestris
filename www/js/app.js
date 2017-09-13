var app = angular.module('myApp', ["ngRoute", "ngAnimate", "ui.tinymce", "ngSanitize", "ui.bootstrap", "checklist-model"]);

app.config(function($routeProvider, $httpProvider){
  $routeProvider
    .when('/', {templateUrl: 'views/home.html', controller : 'mainCtrl'})
    .when('/login', {templateUrl: 'views/admin_login.html', controller : 'adminCtrl'})
    .when('/admin', {templateUrl: 'views/admin.html', controller : 'adminCtrl'})
});
