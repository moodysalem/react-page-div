var React = require('react'),
    PageDiv = React.createFactory(require('./index')),
    assert = require('assert');


describe('react-page-div', function () {
    it('should be a function', function () {
        assert(typeof PageDiv === 'function');

        var el = PageDiv({
            width: 8.5,
            widthUnit: 'in',
            height: 11,
            heightUnit: 'in'
        });

        assert(el);
    });
});