function constantSpecs() {

	var constant;

	beforeEach(angular.mock.inject(function(RESTServiceURL) {

		constant = RESTServiceURL;

	}));

	it("Verify RESTServiceURL Constant Value", function() {

		expect(constant).toBe("http://localhost:8090/svc");

	});

}
