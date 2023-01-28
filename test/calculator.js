const { assert } = require("chai");
var calculator = require("../app/calculator.js");
var expect = require("chai").expect;
var a = 5,
  b = 2;
describe("Test Adding", () => {
  describe("Add two numbers", () => {
    let expected = a + b;
    var result = calculator.add(a, b);

    it(`add (${a},${b}) expected result ${expected} PASS`, () => {
      assert.equal(result, expected);
    });

    it(`add (${a},${b}) expected result 8 FAIL`, () => {
      assert.equal(result, 8);
    });
  });
});

describe("Test Subtraction", () => {
  describe("Subtract two numbers", () => {
    let expected = a - b;
    var result = calculator.sub(a, b);

    it(`add (${a},${b}) expected result ${expected} PASS`, () => {
      assert.equal(result, expected);
    });

    it(`add (${a},${b}) expected result 8 FAIL`, () => {
      assert.equal(result, 8);
    });
  });
});

describe("Test Multiplication", () => {
  describe("Multiply two numbers", () => {
    let expected = a * b;
    var result = calculator.mul(a, b);

    it(`add (${a},${b}) expected result ${expected} PASS`, () => {
      assert.equal(result, expected);
    });

    it(`add (${a},${b}) expected result 8 FAIL`, () => {
      assert.equal(result, 8);
    });
  });
});

describe("Test Division", () => {
  describe("Divide two numbers", () => {
    var x = 10, y = 2
    let expected = x / y;
    var result = calculator.div(x, y);


    it(`add (${x},${y}) expected result ${expected} PASS`, () => {
      assert.equal(result, expected);
    });

    it(`add (${x},${y}) expected result 8 FAIL`, () => {
      assert.equal(result, 8);
    });
  });
});


