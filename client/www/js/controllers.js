angular.module('starter.controllers', [])
.controller(function($scope, $ionicAnimation) {
   var anim = $ionicAnimation({
    // A unique, reusable name
    name: 'popIn',

    // The duration of an auto playthrough
    duration: 0.5,

    // How long to wait before running the animation
    delay: 0,

    // Whether to reverse after doing one run through
    autoReverse: false,

    // How many times to repeat? -1 or null for infinite
    repeat: -1,

    // Timing curve to use (same as CSS timing functions), or a function of time "t" to handle it yourself
    curve: 'ease-in-out',

    onStart: function() {
      // Callback on start
    },
    onEnd: function() {
      // Callback on end
    },
    step: function(amt) {

    }
  });
})
.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
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
    enableFriends: true
  };
});
