app.controller('navCtrl', function($scope, httpFactory){
  httpFactory.request('get', 'categories')
  .then(function(response){
    $scope.categories = response;
  }, function(error){
    console.log(error);
  })

  $scope.isCollapsed = false;
});
