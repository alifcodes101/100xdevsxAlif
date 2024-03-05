/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor() {
    // Initialize the result variable
    this.result = 0;
  }
  add(number) {
    // Add the number to the result
    this.result += number;
  }

  subtract(number) {
    // Subtract the number from the result
    this.result -= number;
  }

  multiply(number) {
    // Multiply the result by the number
    this.result *= number;
  }
  
  divide(number) {
    if (number === 0) {
      throw new Error("Cannot divide by zero");
    }

    // Divide the result by the number
    this.result /= number;
  }

  clear() {
    // Reset the result variable to 0
    this.result = 0;
  }

  getResult() {
    // Get the current value of the result variable
    return this.result;
  }

  calculate(expression) {
    // Remove continuous spaces and validate the expression
    const cleanedExpression = expression.replace(/\s+/g, '');

    // Use a regular expression to check for valid numerical characters
    const isValidExpression = /^[0-9+\-*/().\s]+$/g.test(cleanedExpression);

    if (!isValidExpression) {
      throw new Error("Invalid expression");
    }

    // Use eval to calculate the result of the expression
    this.result = eval(cleanedExpression);
  }
}

module.exports = Calculator;
