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

}])


// .controller('PianoCtrl', ['$scope', '$http', function($scope, $http) {
//   // $scope.image = '';
//   $scope.chord = [];

//   $scope.search = function() {
//     var req = {
//       url: "https://chords-api-app.herokuapp.com/piano/" + $scope.note + '/' $scope.pianoMod,
//       method: 'GET'
//     }

//     $http(req).then(function success(res) {
//       var data = res.data;
//       console.log(data);
//       $scope.chord = data;
//     }, function error(res) {
//       console.log(res);
//     });
//   }
// }]);

