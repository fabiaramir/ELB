(function(){
	'use strict';

	angular.module('elb', [ 'ngRoute','elb-main','templates' ])
	  .config(function ($routeProvider) {
	    $routeProvider
	      .otherwise({
	        redirectTo: '/'
	      });
	  });
	  
})();