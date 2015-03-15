module.exports = (function(global, $, angular) {
	"use strict";

	function editCtrl($scope, Widgets, $routeParams, $location) {

		$scope.widgetOp = "Edit";

		Widgets.get($routeParams.widgetId).then(function(results) {
			$scope.widget = results.data;
		});

		$scope.saveWidget = function() {
			Widgets.update($scope.widget.id, $scope.widget).then(function() {
				$location.path("/");
			});
		};

		$scope.returnToHome = function() {
			$location.path("/");
		};

	}

	editCtrl.$inject = ["$scope","Widgets","$routeParams","$location"];

	// Add the edit controller to the controllers module
	return angular.module("App.Controllers").controller("EditCtrl", editCtrl);

}(window || global, require('jquery'), require("angular")));
