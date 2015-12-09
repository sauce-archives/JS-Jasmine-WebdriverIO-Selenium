var webdriverio = require('webdriverio');
var SauceLabs = require("saucelabs");
var username = process.env.SAUCE_USERNAME;
var accessKey = process.env.SAUCE_ACCESS_KEY;
var   saucelabs = new SauceLabs({
      username: username,
      password: accessKey
    });

jasmine.getEnv().defaultTimeoutInterval = 100000;

describe('basic test', function () {

	beforeEach(function (done) {
		var capabilities = {
		        'browserName': process.env.BROWSER,
		        'platform': process.env.PLATFORM,
		        'version': process.env.VERSION,
		        'name': jasmine.getEnv().currentSpec.description
		    }

		var sauceConfig = {
	        desiredCapabilities: capabilities,
	        host: "ondemand.saucelabs.com",
	        port: 80,
	        user: username,
	        key: accessKey
    	};

    	client = webdriverio.remote(sauceConfig);
    	client.init(done);

	});

	afterEach(function (done) {
		var results = jasmine.getEnv().currentSpec.results_.failedCount;
		saucelabs.updateJob(client.requestHandler.sessionID, {
      		passed: results === 0
    	}, function () {});
		client.end(done);
	});

	it('should be on correct page', function (done) {
		client
			.url('https://saucelabs.com/test/guinea-pig')
		    .getTitle().then(function(title) {
				expect(title).toBe('I am a page title - Sauce Labs');
			done();
		});
	});

	it('should be on correct page - yield test', function *() {

		yield client
			.url('https://saucelabs.com/test/guinea-pig')
		var title = yield client.getTitle();
		expect(title).toBe('I am a page title - Sauce Labs');
	
	});
});

