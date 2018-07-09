describe('the basic page', () => {

    it('should have a title', () => {
        const actual = browser.getTitle();
        const expected = 'Totes wrong';

        expect(actual).toEqual(expected);
    });
})