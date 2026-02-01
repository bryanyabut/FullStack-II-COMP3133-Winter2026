const assert = require('assert');
const calculator = require('../app/calculator');

describe("Validating Calculator Functions", () => {
    it("add of (5, 2) should return 7", () => {
        assert.equal(calculator.add(5, 2), 7);
    });

    it("add of (5, 2) should not return 8", () => {
        assert.Equal(calculator.add(5, 2), 8);
    });

    it("sub of (5, 2) should return 3", () => {
        assert.equal(calculator.sub(5, 2), 3);
    });

    it("sub of (5, 2) should not return 5", () => {
        assert.Equal(calculator.sub(5, 2), 5);
    });

    it("mul of (5, 2) should return 10", () => {
        assert.equal(calculator.mul(5, 2), 10);
    });

    it("mul of (5, 2) should not return 12", () => {
        assert.Equal(calculator.mul(5, 2), 12);
    });

    it("div of (10, 2) should return 5", () => {
        assert.equal(calculator.div(10, 2), 5);
    });

    it("div of (10, 2) should not return 2", () => {
        assert.Equal(calculator.div(10, 2), 2);
    });
});