app.controller('blogCtrl', function($scope, $http, $q,  $location, httpFactory){
  // $scope.shadow = "";

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

  // $scope.getMousePosition = function(event){
  //   function getValue(old_value, old_bottom, old_top, new_bottom, new_top){
  //     return Math.round((old_value - old_bottom) / (old_top - old_bottom) * (new_top - new_bottom) + new_bottom);
  //   };
  //
  //   let x = getValue(event.offsetX, 0, window.innerWidth, -40, 40);
  //   let y = getValue(event.offsetY, 0, window.innerHeight, -40, 40);
  //   let distance = Math.round( Math.sqrt( (Math.pow(event.offsetX-(window.innerWidth/2),2))+(Math.pow(event.offsetY-(window.innerHeight/2),2))));
  //   let blur = getValue(distance, 0, window.innerWidth/2, 0, 15)
  //   if (blur > 15) blur = 15;
  //
  //   $scope.shadow = x + "px " +  y + "px " + blur + "px #222";
  // };
});
