app.controller('postByCategoryCtrl', function($scope, $routeParams){
  $scope.httpRequest('get', 'categories/name/"'+ $routeParams.category + '"').then(function(response){
    $scope.category = response[0];
    $scope.httpRequest('get', 'posts/category_id/'+ $scope.category.id).then(function(posts){
      $scope.posts = posts;
    })
  })
})
