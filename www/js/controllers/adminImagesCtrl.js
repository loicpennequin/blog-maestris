app.controller('adminImagesCtrl', function($scope){
  $scope.secureRequest('get', 'messages').then(function(response){
    $scope.newMessages = response;
  });
  $scope.secureRequest('get', 'comments').then(function(response){
    $scope.newComments = response;
  });
  $scope.secureRequest('get', 'posts/latest').then(function(response){
    $scope.latestPost = response[0];
  });
})
