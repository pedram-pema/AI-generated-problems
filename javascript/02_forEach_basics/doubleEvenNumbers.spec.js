const doubleEvenNumbers = require('./doubleEvenNumbers'); // Replace 'yourFileName.js' with your actual JavaScript file name

// import { doubleEvenNumbers } from './forEachBasics';

describe('doubleEvenNumbers', () => {
  test('doubles even numbers in array', () => {
    const input = [1, 2, 3, 4]; 
    const expected = [1, 4, 3, 8];
    
    expect(doubleEvenNumbers(input)).toEqual(expected);
  });
  
  test('works on array with no even numbers', () => {
    const input = [1, 3, 5];
    const expected = [1, 3, 5];
    
    expect(doubleEvenNumbers(input)).toEqual(expected); 
  });
  
  // Add more test cases here
  
});
