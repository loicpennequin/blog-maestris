app.controller('adminPostsCtrl', function($scope){
  $scope.tinymceOptions = {
   language: "fr_FR",
   plugins : 'advlist autolink link image lists charmap preview colorpicker textcolor',
   toolbar: "bold italic underline strikethrough forecolor backcolor alignleft aligncenter alignright alignjustify image styleselect fontsizeselect",
   theme : 'modern'
  };
  $scope.newPost = {};
  $scope.showEditForm = false;
  $scope.showPostComments = false;

  $scope.getPosts = function(){
    $scope.secureRequest('get', 'posts').then(function(posts){
      $scope.posts = posts;
      $scope.posts.forEach(function(post, index){
        $scope.secureRequest('get','categories/id/' + post.category_id).then(function(category){
          post.category = category[0].name;
        });
        $scope.secureRequest('get','comments/post_id/' + post.id).then(function(comments){
          post.comments = comments;
        });
      });
    });
  };
  $scope.getPosts();

  $scope.secureRequest('get', 'categories').then(function(categories){
    $scope.categories = categories;
  })

  $scope.addPost = function(){
    $scope.newPost = {
      title : this.newPost.title,
      author : this.newPost.author,
      category_id : this.newPost.category.id,
      summary : this.newPost.summary,
      body : this.newPost.body,
      image : this.newPost.image
    };
    if ($scope.newPost.image === undefined){
      delete $scope.newPost['image']
    }
    $scope.secureRequest('post', 'posts', $scope.newPost)
    .then(function(response){
      $scope.getPosts();
      $scope.new_post_form.setPristine();
    }, function(error){
      console.log(error);
    })
  };

  $scope.deletePost = function(post){
    $scope.secureRequest('delete', 'posts/' + post.id)
    .then(function(reponse){
      $scope.getPosts();
    }, function(error){
      console.log(error);
    })
  };

  $scope.editPost = function(post){
    $scope.showEditForm = true;
    $scope.selectedPost = post;
  };

  $scope.showComments = function(post){
    $scope.showPostComments = true;
    $scope.selectedPost = post;
  };

  $scope.updatePost = function(){
    $scope.updatedPost = {
      title : $scope.selectedPost.title,
      author : $scope.selectedPost.author,
      category_id : $scope.selectedPost.category.id,
      summary : $scope.selectedPost.summary,
      body : $scope.selectedPost.body,
      image : $scope.selectedPost.image
    };
    if ($scope.updatedPost.image === undefined){
      delete $scope.updatedPost['image']
    }
    $scope.secureRequest('put', 'posts/' + $scope.selectedPost.id , $scope.updatedPost)
    .then(function(response){
      $scope.getPosts();
      $scope.showEditForm = false;
    }, function(error){
      console.log(error);
    })
  };

  $scope.close = function(toggle){
    $scope[toggle] = false;
  };

});
