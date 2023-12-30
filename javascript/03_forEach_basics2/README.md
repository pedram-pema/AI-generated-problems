Exercise Description: Subject: Custom forEach Function
Create a custom myForEach function that mimics the behavior of the native forEach array method. Your myForEach function should accept an array and a callback function as arguments. It should then iterate through the array and execute the callback function for each element in the array.

Your myForEach function should have the following characteristics:

Accept an array arr and a callback function callback as arguments.
Iterate through each element of the array.
Execute the callback function for each element of the array with the current element and its index as arguments.
Does not return anything (similar to the behavior of the native forEach method).


Example:

const numbers = [1, 2, 3, 4, 5];
const doubled = [];

function doubleAndPush(element) {
  doubled.push(element * 2);
}

myForEach(numbers, doubleAndPush);

console.log(doubled); // Expected output: [2, 4, 6, 8, 10]
