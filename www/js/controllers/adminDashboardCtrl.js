app.controller('adminDashboardCtrl', function($scope){
  $scope.secureRequest('get', 'messages/is_read/0').then(function(response){
    $scope.newMessages = response;
  });

  $scope.secureRequest('get', 'comments/is_read/0').then(function(response){
    $scope.newComments = response;
  });

  $scope.secureRequest('get', 'posts').then(function(posts){
    $scope.posts = posts;
    $scope.latestPost = $scope.posts[$scope.posts.length-1];
  });

  $scope.secureRequest('get', 'sitedata').then(function(response){
    $scope.siteData = response.siteData;
    var now = new Date();
    $scope.lastDayVisits = [];
    $scope.lastWeekVisits = [];
    $scope.lastMonthVisits = [];
    $scope.siteData.visits.forEach(function(visit){
      if (now - new Date(visit) < 86400000){
        $scope.lastDayVisits.push(visit);
      };
      if (now - new Date(visit) < 604800000){
        $scope.lastWeekVisits.push(visit);
      };
      if (now - new Date(visit) < (86400000) * 31){
        $scope.lastMonthVisits.push(visit);
      };
    })
  });

})
