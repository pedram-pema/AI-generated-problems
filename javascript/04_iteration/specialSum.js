function calculateSpecialSum(arr) {
    let evensSum = 0;
    let odds = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 === 0) {
        evensSum += arr[i];
      }
    }

    for (let i = 0; i < arr.length; i++) {
      if (i % 2 === 1) {
        if (arr[i] >= arr[i - 1]) {
          odds += arr[i] - evensSum;
        } else if (arr[i] < arr[i - 1]) {
          odds += arr[i] + evensSum;
        }
      }
    }
    
    return evensSum + odds;
}
module.exports = calculateSpecialSum;