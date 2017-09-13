app.controller('adminCommentsCtrl', function($scope){
  $scope.checkedUnreadComments = [];
  $scope.checkedReadComments = [];

  $scope.getComments = function(){
    $scope.secureRequest('get', 'comments').then(function(response){
      $scope.comments = response;
      $scope.comments.forEach(function(comment, index){
        $scope.secureRequest('get','posts/id/' + comment.post_id).then(function(post){
          comment.post = post[0];
        });
      });
    });
  };
  $scope.getComments();

  $scope.deleteComment = function(comments){
    comments.forEach(function(comment){
      $scope.secureRequest('delete', 'comments/' + comment.id)
      .then(function(reponse){
        $scope.getComments();
      }, function(error){
        console.log(error);
      });
    });
  };

  $scope.markAsRead = function(comments){
    comments.forEach(function(comment){
      $scope.secureRequest('put', "comments/" + comment.id, {is_read : 1}).then(function(response){
        $scope.getComments();
      }, function(error){
        console.log(error);
      });
    });
  };

  $scope.areCommentsRead = function(){
    if ($scope.comments) return !$scope.comments.some((c)=>c.is_read==0)
  };

});
