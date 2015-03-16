function widgetsSvcSpecs() {

	var baseUrl, widgetsSvc, httpBackend;

	function getAllWidgetsResponseData() {
		return [
			{ id: 1, name: "Red Small Widget", description: "A small red widget.", size: "small", color: "red", quantity: 3 },
			{ id: 2, name: "Blue Medium Widget", description: "A medium blue widget.", size: "medium", color: "blue", quantity: 6 },
			{ id: 3, name: "Green large Widget", description: "A large green widget.", size: "large", color: "green", quantity: 15 }
		];
	}

	function getWidgetResponseData() {
		return { id: 1, name: "Red Small Widget", description: "A small red widget.", size: "small", color: "red", quantity: 3 };
	}

	function insertWidgetResponseData() {
		return { widget_id: 4};
	}

	function updateWidgetResponseData() {
		return { widgets_updated: 1 };
	}

	function deleteWidgetResponseData() {
		return { widgets_deleted: 1 };
	}

	function getExpectedHeaders() {
		return {
			"Accept": "application/json",
			"Sample-Header": "sample value"
		};
	}

	function getExpectedWidgetsUrl(widgetId) {
		return (widgetId === undefined) ?
				baseUrl + "/widgets" :
				baseUrl + "/widgets/" + encodeURI(widgetId);
	}

	beforeEach(angular.mock.inject(function(RESTServiceURL, Widgets, $httpBackend) {
		baseUrl = RESTServiceURL;
		widgetsSvc = Widgets;
		httpBackend = $httpBackend;

	}));

	afterEach(function() {

		httpBackend.flush();
		httpBackend.verifyNoOutstandingExpectation();
		httpBackend.verifyNoOutstandingRequest();

	});

	it("Get All Widgets", function() {

		var EXPECTED_WIDGET_COUNT = 3;

		httpBackend
			.expect("GET", getExpectedWidgetsUrl(), null, getExpectedHeaders())
			.respond(getAllWidgetsResponseData());

		widgetsSvc.getAll().then(function(results) {
			expect(results.data.length).toEqual(EXPECTED_WIDGET_COUNT);
		});

	});

	it("Get Widget", function() {

		var EXPECTED_WIDGET_SIZE = "small";

		httpBackend.expect("GET", getExpectedWidgetsUrl(1)).respond(getWidgetResponseData());

		widgetsSvc.get(1).then(function(results) {
			expect(results.data.size).toEqual(EXPECTED_WIDGET_SIZE);
		});

	});

	it("Insert Widget", function() {

		var EXPECTED_WIDGET_ID = 4;
		var widget = {
			name: "Tiny Black Widget",
			description: "A tiny black widget.",
			size: "tiny",
			color: "black",
			quantity: 8
		};

		httpBackend.expect("POST", getExpectedWidgetsUrl()).respond(insertWidgetResponseData());

		widgetsSvc.insert(widget).then(function(results) {
			expect(results.data.widget_id).toEqual(EXPECTED_WIDGET_ID);
		});
	});

	it("Update Widget", function() {

		var EXPECTED_WIDGET_UPDATE_COUNT = 1;
		var widget = {
			id: 1,
			name: "Tiny Black Widget",
			description: "A tiny black widget.",
			size: "tiny",
			color: "black",
			quantity: 8
		};

		httpBackend.expect("PUT", getExpectedWidgetsUrl(1)).respond(updateWidgetResponseData());

		widgetsSvc.update(widget.id, widget).then(function(results) {
			expect(results.data.widgets_updated).toEqual(EXPECTED_WIDGET_UPDATE_COUNT);
		});
	});

	it("Delete Widget", function() {

		var EXPECTED_WIDGET_DELETE_COUNT = 1;

		httpBackend.expect("DELETE", getExpectedWidgetsUrl(1)).respond(deleteWidgetResponseData());

		widgetsSvc.delete(1).then(function(results) {
			expect(results.data.widgets_deleted).toEqual(EXPECTED_WIDGET_DELETE_COUNT);
		});

	});
}
