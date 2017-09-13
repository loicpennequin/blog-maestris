app.controller('adminCategoriesCtrl', function($scope){
  $scope.newCategory = {};

  $scope.getCategories = function(){
    $scope.secureRequest('get', 'categories').then(function(response){
      $scope.categories = response;
      $scope.categories.forEach(function(category, index){
        $scope.secureRequest('get','posts/category_id/' + category.id).then(function(posts){
          category.posts = posts;
        });
      });
    });
  };
  $scope.getCategories();

  $scope.addCategory = function(){
    $scope.secureRequest('post', 'categories', $scope.newCategory).then(function(response){
      $scope.getCategories();
    }, function(error){
      console.log(error);
    });
  };

  $scope.deleteCategory = function(category){
    $scope.secureRequest('delete', 'categories/' + category.id)
    .then(function(reponse){
      $scope.getCategories();
    }, function(error){
      console.log(error);
    })
  };
});
