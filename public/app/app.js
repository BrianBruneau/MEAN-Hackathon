var app = angular.module('chordApp', ['ui.router', 'chordCtrls']);

app.config([
  '$stateProvider',
  '$urlRouterProvider',
  '$locationProvider',
  function($stateProvider, $urlRouterProvider, $locationProvider) {

  $urlRouterProvider.otherwise('/404');

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'public/index.html',
    controller: 'HomeCtrl'
  })
  .state('piano', {
    url: '/piano',
    templateUrl: 'public/app/views/piano.html',
    controller: 'PianoCtrl'
  })
  .state('404', {
    url: '/404',
    templateUrl: 'public/app/views/404.html'
  });

  $locationProvider.html5Mode(true);
}]);
