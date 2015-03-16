(function($, angular) {
	"use strict";

	var baseUrl;

	function getHeaders() {
		return {
			"Accept": "application/json",
			"Sample-Header": "sample value"
		};
	}

	function getWidgetsUrl(widgetId) {
		return (widgetId === undefined) ?
			baseUrl + "/widgets" :
			baseUrl + "/widgets/" + encodeURI(widgetId);
	}

	function widgetSvc($http) {
		return {
			insert: function(widget) {
				return $http({
					method: "POST",
					url: getWidgetsUrl(),
					data: widget,
					headers: getHeaders()
				});
			},
			update: function(widgetId, widget) {
				return $http({
					method: "PUT",
					url: getWidgetsUrl(widgetId),
					data: widget,
					headers: getHeaders()
				});
			},
			delete: function(widgetId) {
				return $http({
					method: "DELETE",
					url: getWidgetsUrl(widgetId),
					headers: getHeaders()
				});
			},
			get: function(widgetId) {
				return $http({
					method: "GET",
					url: getWidgetsUrl(widgetId),
					headers: getHeaders()
				});
			},
			getAll: function() {
				return $http({
					method: "GET",
					url: getWidgetsUrl(),
					headers: getHeaders()
				});
			}
		};
	}

	widgetSvc.$inject = ["$http"];

	// Add the widgets service to the services module
	return angular.module("WidgetApp.Services")
		.provider("Widgets", function() {

			return {
				setBaseUrl: function(newBaseUrl) {
					baseUrl = newBaseUrl;
				},
				$get: widgetSvc
			};
		});

}(jQuery, angular));
