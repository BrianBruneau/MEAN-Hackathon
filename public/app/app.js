var app = angular.module('chordApp', ['chordCtrls', 'ui.router'])

app.config([
  '$stateProvider',
  '$urlRouterProvider',
  '$locationProvider',
  function($stateProvider, $urlRouterProvider, $locationProvider) {

  $urlRouterProvider.otherwise('/404');

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'app/views/show.html',
    controller: 'HomeCtrl'
  })
  .state('piano', {
    url: '/piano',
    templateUrl: 'app/views/piano.html',
    controller: 'PianoCtrl'
  })
  .state('404', {
    url: '/404',
    templateUrl: 'app/views/404.html'
  });

  $locationProvider.html5Mode(true);
}]);
