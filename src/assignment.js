export function capitalize(input) {
  return input.toUpperCase();
}

export function reverseString(input) {
  let outputString = "";
  for (let length = input.length - 1; length >= 0; length--) {
    outputString += input.charAt(length);
  }
  return outputString;
}

export class Calculator {
  constructor() {}

  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  divide(a, b) {
    if (b != 0) {
      return a / b;
    } else {
      return "no";
    }
  }

  multiply(a, b) {
    return a * b;
  }
}
