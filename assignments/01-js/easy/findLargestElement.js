/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    // checks the array
    if (numbers.length === 0) {
        return undefined;
    }
    // assume first element is largest
    let largest = numbers[0];
    // tnis will iterate through the input list
    for (let i=1; i<numbers.length; i++) {
        // this will update the current number to greater
        if (numbers[i] > largest){
            largest = numbers[i];
        }
    }
    return largest;
}

module.exports = findLargestElement;