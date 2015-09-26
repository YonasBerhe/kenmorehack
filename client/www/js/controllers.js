angular.module('starter.controllers', [])
  .controller('ProjectCtrl', function($scope, Projects) {
    $scope.project = Projects.getRandom();
    $scope.doRefresh = function() {
      $scope.project = Projects.getRandom();
      $scope.$broadcast('scroll.refreshComplete');
    };
  })
  .controller('DashCtrl', function($scope, Projects) {
    $scope.project = Projects.getChosen();
  })
  .controller('ChatsCtrl', function($scope, Chats) {
    //$scope.$on('$ionicView.enter', function(e) {
    //});
    $scope.chats = Chats.all();

    $scope.remove = function(chat) {
      Chats.remove(chat);
    };
  })
  .controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
  })
  .controller('AccountCtrl', function($scope) {
    $scope.settings = {
      taskNotification: true,
      chatNotification: false,
    };
  });
