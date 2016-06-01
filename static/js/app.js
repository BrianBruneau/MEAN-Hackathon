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
    templateUrl: 'views/show.html',
    controller: ''
  });

  $locationProvider.html5Mode(true);
}])

// app.config(['$httpProvider', function($httpProvider) {
//   $httpProvider.interceptors.push('AuthInterceptor');
// }]);
