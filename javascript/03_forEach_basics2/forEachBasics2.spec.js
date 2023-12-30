const myForEach = require('./forEachBasics2'); // Replace 'yourFileName.js' with your actual JavaScript file name

describe('myForEach', () => {
  it('should execute the callback function for each element in the array', () => {
    const mockCallback = jest.fn();
    const testArray = [1, 2, 3];

    myForEach(testArray, mockCallback);

    expect(mockCallback).toHaveBeenCalledTimes(testArray.length);
  });

  it('should execute the callback function with each element and its index', () => {
    const testArray = ['a', 'b', 'c'];
    const indices = [];

    function getIndex(element, index) {
      indices.push(index);
    }

    myForEach(testArray, getIndex);

    expect(indices).toEqual([0, 1, 2]);
  });

  // Add more test cases as needed
});
