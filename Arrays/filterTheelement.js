/**
 * filter() function
 * @param {number[]} arr - Input array
 * @param {Function} fn - Callback function
 * @return {number[]} - Filtered array
 */
function filter(arr, fn) {

    // Create an empty array to store the filtered elements
    const filteredArr = [];

    // Loop through every element in the array
    for (let i = 0; i < arr.length; i++) {

        // Call the callback function
        // If it returns true (or any truthy value),
        // add the element to the new array.
        if (fn(arr[i], i)) {
            filteredArr.push(arr[i]);
        }
    }

    // Return the filtered array
    return filteredArr;
}


function greaterThan10(n) {
    return n > 10;
}

const arr1 = [0, 10, 20, 30];

const result1 = filter(arr1, greaterThan10);

console.log(result1); // [20, 30]


function firstIndex(n, i) {
    return i === 0;
}

const arr2 = [1, 2, 3];

const result2 = filter(arr2, firstIndex);

console.log(result2); // [1]


function plusOne(n) {
    return n + 1;
}

const arr3 = [-2, -1, 0, 1, 2];

const result3 = filter(arr3, plusOne);

console.log(result3); // [-2, 0, 1, 2]