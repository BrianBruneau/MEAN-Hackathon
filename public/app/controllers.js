angular.module('chordCtrls', ['chordServices', 'chordDirective'])

.controller('HomeCtrl', ['$scope', 'ChordFactory', function($scope, ChordFactory) {
  console.log('good');
  
  $scope.getAll = function() {
    console.log(ChordFactory);

    ChordFactory.all(function success(data) {
      console.log(data);
    }, function error(data) {
      console.log("error");
    });
}
}])

.controller('PianoCtrl', ['$scope', function($scope) {
  console.log('good');

}]);