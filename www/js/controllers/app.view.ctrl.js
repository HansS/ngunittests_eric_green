(function($, angular) {
	"use strict";

	function viewCtrl($scope, Widgets, $routeParams) {
		Widgets.get($routeParams.widgetId).then(function(results) {
			$scope.widget = results.data;
		});
	}

	viewCtrl.$inject = ["$scope","Widgets","$routeParams"];

	// Add the view controller to the controllers module
	return angular.module("WidgetApp.Controllers").controller("ViewCtrl", viewCtrl);

}(jQuery, angular));
