var expect = require('chai').expect;
var dashToCamel = require('./form-validation.js');

describe('removeVowels', function() {
	it('returns non vowel', () => {
    //Buildup
    const stringToPass = 'this is a test';

    //Execution
    const returnedString = dashToCamel(stringToPass);

    //Assertation
    expect(returnedString).to.be.a('string');
    expect(returnedString).to.eq('ths s  tst');

	})
});
