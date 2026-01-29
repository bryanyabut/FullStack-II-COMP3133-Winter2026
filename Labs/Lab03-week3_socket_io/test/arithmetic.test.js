/*
install mocha using : npm i mocha

put the file containing test cases in the test folder
use extension filename.test.js

running test cases:
1. npx mocha ./test/arithmetic.test.js
2. package.json: add script "test": "mocha --reporter spec"
*/

const assert = require('assert');
const Arithmetic = require('../Arithmetic-Ops');

describe("Validating ArithmeticOps class", () => {
    // mention all the test cases to run
    it("square of (3) should return 9", () => {
        assert.equal(Arithmetic.square(3), 9);
    });

    it("square of (12) should return 144", () => {
        assert.equal(Arithmetic.square(12), 144);
    });

    it("square of (4) should not return 8", () => {
        assert.notEqual(Arithmetic.square(4), 8);
    });

    it("percentage(20, 100) should return 20", () => {
        assert.equal(Arithmetic.percentage(20, 100), 20);
    });

    it("percentage(20, 50) should not return 15", () => {
        assert.notEqual(Arithmetic.percentage(20, 50), 15);
    });

    // this test will fail
    it("percentage(10, 50) should return 15", () => {
        assert.equal(ArithmeticOps.percentage(10, 50), 15);
    });
});