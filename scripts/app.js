angular.module('todoListApp', [])

.controller('mainCtrl', function($scope) {
  $scope.learningNgChange = function(){
    console.log("hello there! this is the hello world controller function, in the mainCtrl");
  };

  $scope.todos = [
    {"name": "clean the house"}, 
    {"name": "wash dishish"}, 
    {"name": "call dentist"}, 
    {"name": "write anita"}, 
    {"name": "have a nice day"}, 
    {"name": "book sisha tea room"}
  ]

});