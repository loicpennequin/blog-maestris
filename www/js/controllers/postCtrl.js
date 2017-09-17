app.controller('postCtrl', function($scope, $routeParams, $sce){
  $scope.httpRequest('get','posts/slug/"' + $routeParams.slug + '"').then(function(response){
    $scope.post = response[0];
    $scope.post.body = $sce.trustAsHtml($scope.post.body);
    $scope.httpRequest('get', 'posts/category_id/' + $scope.post.category_id).then(function(response){
      $scope.relatedPosts = response;
    })
    $scope.httpRequest('get', 'comments/post_id/' + $scope.post.id).then(function(response){
      $scope.comments= response;
    })
  });

  $scope.newComment = {};

  $scope.addComment = function(){
    $scope.newComment.created_at = new Date().toISOString().slice(0, 19).replace('T', ' ');
    $scope.newComment.post_id = $scope.post.id;
    $scope.httpRequest('post', 'comments', $scope.newComment).then(function(){
      $scope.httpRequest('get', 'comments/post_id/' + $scope.post.id).then(function(response){
        $scope.comments= response;
      });
    });
  };

});
