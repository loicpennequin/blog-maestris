app.controller('archiveCtrl', function($scope){
  $scope.months= [];
  $scope.httpRequest('get', 'posts').then(function(response){
    $scope.posts = response;
    $scope.posts.forEach(function(post){
      $scope.httpRequest('get', 'categories/id/' + post.category_id).then(function(response){
        post.category = response[0];
        let month = new Date(post.created_at).getMonth(),
            year = new Date(post.created_at).getFullYear(),
            date = {
              date : new Date(year, month),
              posts : []
            };
        if (!$scope.months.some(function(el){ return el.date.getTime() == date.date.getTime()}) ){
          date.posts.push(post);
          $scope.months.push(date)
        } else {
          let key = $scope.months.findIndex((el)=>el.date.getTime() == date.date.getTime());
          $scope.months[key].posts.push(post)
        }
      })

    });
  });

});
