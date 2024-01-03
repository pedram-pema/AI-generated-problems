function calculateSpecialSum(arr) {
    /* let evensSum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            evensSum += arr[i];
        }
    }

    let odds = 0;
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 1 && arr[i] >= arr[i - 1]) {
            odds += arr[i] - evensSum;
        } else if (i % 2 === 1 && arr[i] < arr[i - 1]) {
            odds += arr[i] + evensSum;
        }
    }

    return evensSum + odds; */

    let specialSum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) { // even index
            specialSum += arr[i];
        } else { // odd index
            if (arr[i] > arr[i - 1]) {
                specialSum -= arr[i];
            } else {
                specialSum += arr[i];
            }
        }
    }
    return specialSum;
}

module.exports = calculateSpecialSum;