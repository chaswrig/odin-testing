import { capitalize, reverseString, Calculator } from "./assignment.js";

test("Expect all letters to be capitalized", () => {
  expect(capitalize("chase")).toMatch(/CHASE/);
});

test("Expect string to be reversed", () => {
  expect(reverseString("Chase")).toMatch(/esahC/);
});

test("Expect calculator to have functions", () => {
  const testCalc = new Calculator();
  expect(testCalc.add(1, 5)).toEqual(6);
  expect(testCalc.subtract(5, 1)).toEqual(4);
  expect(testCalc.divide(25, 5)).toEqual(5);
  expect(testCalc.divide(25, 0)).toMatch(/no/);
  expect(testCalc.multiply(4, 4)).toEqual(16);
});
