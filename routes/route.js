var newanydoapp=angular.module('NewAnyDoApp',['ngRoute']);

newanydoapp.config(function($routeProvider,$locationProvider){
	$routeProvider.when('/',{
		templateUrl:'/home/homePartial.html',
		controller:'homecontroller'
	}).
	when('/login',{
		templateUrl:'/login/login.html',
		controller:'homecontroller'
	})
	
	$locationProvider.html5Mode(true);
});





