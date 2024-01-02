Exercise Description: Subject: Calculate Special Sum
Create a function calculateSpecialSum that takes in an array of numbers. Your task is to calculate a special sum based on specific conditions:

For an array of numbers, calculate the sum of numbers at even indices (0-based) within the array.
If the array is empty, return 0.
If the array has only one element at index 0, return that element.
However, here's the twist: For elements at odd indices (1-based) within the array, if the number is greater than its preceding element (at the previous index), subtract that number from the special sum; otherwise, add it to the special sum.

For example:

Given [3, 7, 2, 9, 4, 8], calculate and return the special sum.
At even indices: 3 (index 0), 2 (index 2), 4 (index 4) → 3 + 2 + 4 = 9.
At odd indices: 7 (index 1), 9 (index 3), 8 (index 5). As 7 > 3, subtract it; 9 > 2, subtract it; 8 < 4, add it → 7 - 9 + 8 = 6.
The function should return the total special sum: 9 + 6 = 15.