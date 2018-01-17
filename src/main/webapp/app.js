'use strict';
var app = angular.module('myApp', [
  'ui.router'
]).
config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/view1');
    $stateProvider.state('view1', {
        url: '/view1',
        templateUrl: 'view1/view1.html',//主页
        controller: "mainCtrl"
    }).state('view2', {
        url: '/view2',
        templateUrl: 'view2/view2.html',//主页
        controller: "secondCtrl"
    })
}]);
