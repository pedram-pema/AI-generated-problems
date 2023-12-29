// exercise.js

/**
 * Doubles even numbers in an array.
 * - Mutates the original array
 * - Uses array forEach()
 * 
 * @param {number[]} arr - Array of numbers 
 * @returns {number[]} - Mutated array
*/

function doubleEvenNumbers(arr) {
  arr.forEach((value, index) => {
    if (value % 2 === 0) {
      arr[index] = value * 2;
    }
  });

  return arr; 
}

module.exports = doubleEvenNumbers;