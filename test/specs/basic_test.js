describe('the basic page', () => {

    beforeEach(() => {
        browser.url("http://a.testaddressbook.com")
    });

    it('should have a title', () => {
        const actual = browser.getTitle();
        const expected = 'Address Book';

        expect(expected).toEqual(actual);
    });

    it('should have a navigation bar', () => {
        let navbar = $('#navbar'); // navbar selector

        expect(navbar.isVisible());
    });
})