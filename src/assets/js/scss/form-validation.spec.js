var expect = require('chai').expect;
var dashToCamel = require('./form-validation.js');

describe('empty string', function() {
	it('returns non empty string', () => {
    //Buildup
    const stringToPass = 'this is a test';

    //Execution
    const returnedString = dashToCamel(stringToPass);

    //Assertation
    expect(returnedString).to.be.a('string');
    expect(returnedString).to.eq('ths s  tst');

	})
});
