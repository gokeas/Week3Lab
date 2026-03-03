// calculator.tests.js
// Unit tests for calculator functions using Jest

const { add, subtract, multiply, divide } = require('../calculator-module');

describe('Calculator Basic Operations', () => {
  test('addition: 2 + 3 = 5', () => {
    expect(add(2, 3)).toBe(5);
  });
  test('subtraction: 10 - 4 = 6', () => {
    expect(subtract(10, 4)).toBe(6);
  });
  test('multiplication: 45 * 2 = 90', () => {
    expect(multiply(45, 2)).toBe(90);
  });
  test('division: 20 / 5 = 4', () => {
    expect(divide(20, 5)).toBe(4);
  });
});

describe('Calculator Edge Cases', () => {
  test('division by zero throws error', () => {
    expect(() => divide(10, 0)).toThrow('Division by zero');
  });
  test('addition with negative numbers', () => {
    expect(add(-2, -3)).toBe(-5);
  });
  test('subtraction resulting in negative', () => {
    expect(subtract(3, 5)).toBe(-2);
  });
  test('multiplication by zero', () => {
    expect(multiply(10, 0)).toBe(0);
  });
});
