
#!/usr/bin/env node
/**
 * Node.js CLI Calculator
 * Supports: Addition (+), Subtraction (-), Multiplication (×), Division (÷)
 * Usage:
 *   node src/calculator.js <operation> <num1> <num2>
 * Example:
 *   node src/calculator.js add 2 3
 *   node src/calculator.js divide 10 2
 */

const [,, operation, num1, num2] = process.argv;

function printUsage() {
  console.log('Usage: node src/calculator.js <operation> <num1> <num2>');
  console.log('Operations: add, subtract, multiply, divide');
  process.exit(1);
}

if (!operation || isNaN(num1) || isNaN(num2)) {
  printUsage();
}

const a = parseFloat(num1);
const b = parseFloat(num2);
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
  default:
    printUsage();
}

console.log(result);