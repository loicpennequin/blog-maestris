app.controller('blogCtrl', function($scope, $http, $q,  $location, httpFactory){
  $scope.httpRequest = function(type, path, data){
    let deferred = $q.defer()
    httpFactory.request(type, path, data)
    .then(function(response){
      deferred.resolve(response)
    }, function(error){
      deferred.reject(error)
    })
    return deferred.promise
  };
});
