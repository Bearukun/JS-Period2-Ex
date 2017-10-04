var expect = require("chai").expect;
var calc = require('../lib/calculator');

describe('Calculator', function(){
    describe('Add',function(){
        it('Add two numbers', function(){
            let sum = calc.add(2,2);
            expect(sum).to.equal(4);
        });
    });
    describe('Divide',function(){
        it('Throw error when dividing by 0', function(){
            expect(() => calc.divide(3,0)).to.throw('Attempt to divide by zero')
        });
    });
});