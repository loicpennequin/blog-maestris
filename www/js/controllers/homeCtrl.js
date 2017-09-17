app.controller('homeCtrl', function($scope){
  $scope.httpRequest('get', 'latest/6').then(function(response){
    $scope.posts = response
    $scope.posts.forEach(function(post){
      $scope.httpRequest('get', 'categories/id/' + post.category_id).then(function(response){
        console.log(response);
        post.category = response[0];
      })
    })
  });
});
