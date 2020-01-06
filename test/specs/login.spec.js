describe('login functionality', () => {

    beforeAll(() => {
        browser.url("http://a.testaddressbook.com");
    });

    it('should login', () => {
        browser.click("#sign-in");
        browser.setValue("#session_email", "jgrant@saucelabs.com");
        browser.setValue("#session_password", "sauce");
        browser.click(".btn");

        expect(browser.isVisibleWithinViewport("[data-test='sign-out']"));
    });

    it('should not login with blank credentials', () => {
        browser.click("#sign-in");
        browser.setValue("#session_email", "");
        browser.setValue("#session_password", "");
        browser.click(".btn");

        expect(browser.isVisibleWithinViewport(".alert"));
    });


})