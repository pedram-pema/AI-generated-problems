import { sumEvenIndices } from './sumEvenIndices.js'; // Replace 'yourFileName.js' with your actual JavaScript file name

describe('sumEvenIndices', () => {
  it('should return 0 for an empty array', () => {
    expect(sumEvenIndices([])).toBe(0);
  });

  it('should return the element at index 0 for an array with only one element', () => {
    expect(sumEvenIndices([5])).toBe(5);
  });

  it('should return the sum of numbers at even indices', () => {
    expect(sumEvenIndices([1, 2, 3, 4, 5, 6, 7, 8])).toBe(20);
  });

  it('should handle negative numbers and zeroes', () => {
    expect(sumEvenIndices([-1, 0, -2, 4])).toBe(-3);
  });

  // Add more test cases as needed
});
