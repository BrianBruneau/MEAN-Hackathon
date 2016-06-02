angular.module('chordServices', ['ngResource'])

.factory('ChordFactory', ['$resource', function($resource) {
  return $resource('https://chords-api-app.herokuapp.com/guitar/C/major', {}, {
    all: {params: {id: undefined}, isArray: false}
  })
}]);