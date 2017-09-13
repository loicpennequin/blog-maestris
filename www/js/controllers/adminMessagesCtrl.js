app.controller('adminMessagesCtrl', function($scope){
  $scope.checkedMessages = [];
  $scope.messageSelected = false;
  $scope.message;

  $scope.getMessages = function(){
    $scope.secureRequest('get', 'messages').then(function(response){
      $scope.messages = response;
    });
  };
  $scope.getMessages();

  $scope.deleteMessage = function(messages){
    messages.forEach(function(message){
      $scope.secureRequest('delete', 'messages/' + message.id)
      .then(function(reponse){
        $scope.getMessages();
        $scope.messageSelected = false;
      }, function(error){
        console.log(error);
      });
    });
  };

  $scope.markAsRead = function(messages){
    messages.forEach(function(message){
      $scope.secureRequest('put', "messages/" + message.id, {is_read : 1}).then(function(response){
        $scope.getMessages();
      }, function(error){
        console.log(error);
      });
    });
  };

  $scope.showMessage = function(message){
    $scope.message = message;
    $scope.messageSelected = true;
    $scope.markAsRead(message.id);
  };

  $scope.closeMessage = function(){
    $scope.messageSelected = false;
  };
})
