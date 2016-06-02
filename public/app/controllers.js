angular.module('chordCtrls', ['chordServices', 'chordDirective'])

.controller('HomeCtrl', ['$scope', 'ChordFactory', '$http', function($scope, ChordFactory, $http) {
  $scope.searchTerm = '';
  $scope.movies = [];

$scope.search = function() {
  var req = {
    url: "https://chords-api-app.herokuapp.com/guitar/:data",
    method: 'GET',
    params: {
      s: $scope.searchTerm,
    }
  }

  $http(req).then(function success(res) {
    //do something with the response if successful
    console.log(res);
  }, function error(res) {
    //do something if the response has an error
    console.log(res);
  })

  $http.get(req).then(function success(res) {
  if (res.status === 200) {
    $scope.movies = res.data.Search;
  }
  console.log(res);
}, function error(res) {
  console.log(res);
});
};
}])

.controller('PianoCtrl', ['$scope', function($scope) {
  console.log('good');

}]);