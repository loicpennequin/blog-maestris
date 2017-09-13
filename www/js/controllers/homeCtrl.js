app.controller('homeCtrl', function($scope){
  $scope.httpRequest('get', 'latest/6').then(function(response){
    $scope.posts = response
  })
})
