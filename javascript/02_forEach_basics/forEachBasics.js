// exercise.js

/**
 * Doubles even numbers in an array.
 * - Mutates the original array
 * - Uses array forEach()
 * 
 * @param {number[]} arr - Array of numbers 
 * @returns {number[]} - Mutated array
*/

export function doubleEvenNumbers(arr) {
  arr.forEach(myFunction);

  function myFunction(value) {
    if (value % 2 === 0) {
      return value * 2;
    }
  }
}

module.exports = doubleEvenNumbers;