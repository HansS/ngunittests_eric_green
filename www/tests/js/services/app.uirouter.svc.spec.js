function uiRouterSvcSpecs() {

	var stateSvc, rootScopeSvc, httpBackendSvc;

	beforeEach(inject(function($state, $rootScope, $httpBackend, $templateCache) {

		stateSvc = $state;
		rootScopeSvc = $rootScope;
		httpBackendSvc =  $httpBackend;

		httpBackendSvc.expectGET("partials/home.html", {
			"Accept":"text/html"
		}).respond("");

		httpBackendSvc.flush();

	}));

	afterEach(function() {

		httpBackendSvc.verifyNoOutstandingExpectation();
		httpBackendSvc.verifyNoOutstandingRequest();

	});

	it("View State Configuration", function() {

		var viewStateConfig = stateSvc.get("view");

		expect(viewStateConfig.name).toEqual("view");
		expect(viewStateConfig.url).toEqual("/view/:widgetId");
		expect(viewStateConfig.controller).toEqual("ViewCtrl");
		expect(viewStateConfig.templateUrl).toEqual("partials/view.html");

	});

	it("Change To View State", function() {

		httpBackendSvc
			.expectGET("partials/view.html")
			.respond("View HTML Template");

		stateSvc.go("view", { widgetId: 1 }).then(function() {

			expect(stateSvc.current.name).toEqual("view");
			expect(stateSvc.current.url).toEqual("/view/:widgetId");
			expect(stateSvc.current.templateUrl).toEqual("partials/view.html");
			expect(stateSvc.current.controller).toEqual("ViewCtrl");

			inject(function($stateParams) {
				expect($stateParams.widgetId).toEqual("1");
			});

			inject(function($templateCache) {
				expect($templateCache.get(stateSvc.current.templateUrl)[1]).toEqual("View HTML Template");
			});

		});
		httpBackendSvc.flush();

	});

	it("View State URL", function() {


		var stateUrl = stateSvc.href("view", { widgetId: 1 });

		expect(stateUrl).toBe("#/view/1");

	});

}
