#!/usr/bin/env node
/**
 * Node.js CLI Calculator
 * Supports: Addition (+), Subtraction (-), Multiplication (×), Division (÷), Modulo (%), Power (^), Square Root (√)
 * Usage:
 *   node src/calculator.js <operation> <num1> <num2>
 * Example:
 *   node src/calculator.js add 2 3
 *   node src/calculator.js divide 10 2
 *   node src/calculator.js modulo 10 3
 *   node src/calculator.js power 2 3
 *   node src/calculator.js sqrt 9
 */

const [,, operation, num1, num2] = process.argv;

function printUsage() {
  console.log('Usage: node src/calculator.js <operation> <num1> <num2>');
  console.log('Operations: add, subtract, multiply, divide, modulo, power, sqrt');
  process.exit(1);
}

function modulo(a, b) {
  return a % b;
}

function power(base, exponent) {
  return Math.pow(base, exponent);
}

function squareRoot(n) {
  if (n < 0) {
    console.error('Error: Square root of negative number');
    process.exit(1);
  }
  return Math.sqrt(n);
}

if (!operation || (operation !== 'sqrt' && (isNaN(num1) || (num2 !== undefined && isNaN(num2))))) {
  printUsage();
}

const a = parseFloat(num1);
const b = num2 !== undefined ? parseFloat(num2) : undefined;
let result;

switch (operation) {
  case 'add':
    result = a + b;
    break;
  case 'subtract':
    result = a - b;
    break;
  case 'multiply':
    result = a * b;
    break;
  case 'divide':
    if (b === 0) {
      console.error('Error: Division by zero');
      process.exit(1);
    }
    result = a / b;
    break;
  case 'modulo':
    result = modulo(a, b);
    break;
  case 'power':
    result = power(a, b);
    break;
  case 'sqrt':
    result = squareRoot(a);
    break;
  default:
    printUsage();
}

console.log(result);