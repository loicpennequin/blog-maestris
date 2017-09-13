app.controller('adminCtrl', function($scope, $http, $q,  $location, httpFactory){
  /*  =============================================================================
      Admin Interface Access
      ============================================================================= */

  //Redirect to login page if not authentified
  if($location.path() === "/admin"){
    $http.get('/admin/logincheck')
      .then(function(response){
        if (response.data.adminAuth !== true){
          $location.path('/login');
        }
      }, function(error){
        $location.path('/login');
      });
  };

  //Redirect to admin page if authentified
  if($location.path() === "/login"){
    $http.get('/admin/logincheck')
      .then(function(response){
        if (response.data.adminAuth === true){
          $location.path('/admin');
        }
      }, function(error){
        $location.path('/login');
      })
  };

  $scope.loginInput = {};
  $scope.connectError = "";

  $scope.login = function(){
    $http.post('/admin/login', $scope.loginInput)
      .then(function(response){
        if(response.data.connected === true){
          $location.path('/admin')
        }else{
          $scope.connectError = response.data.message;
          $scope.loginForm.$setPristine();
          $scope.loginInput = {};
        };
      }, function(error){
        console.log(error);
      })
  };

  /*  =============================================================================
      Admin Interface Config
      ============================================================================= */
  $scope.activeSection = "dashboard";

  $scope.showSection = function(section){
    $scope.activeSection = section;
  }

  $scope.secureRequest = function(type, path, data){
    let deferred = $q.defer()
    $http.get('/admin/logincheck')
    .then(function(response){
      if(response.data.adminAuth === true){
        request(type, path, data).then((response)=>{
          deferred.resolve(response)
        });
      } else {
        console.log("vous n'etes pas connecté en tant qu'admin");
      }
    }, function(error){
      deferred.reject(error)
    });
    return deferred.promise
  }

  function request(type, path, data){
    let deferred = $q.defer()
    httpFactory.request(type, path, data)
    .then(function(response){
      deferred.resolve(response)
    }, function(error){
      deferred.reject(error)
    })
    return deferred.promise
  };

  $scope.logout = function(){
    $http.get('/admin/logout')
    .then(function(){
      $location.path('/');
    }, function(error){
      console.log(error);
    })
  }
});
