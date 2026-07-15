/**
 * Reduce function
 * @param {number[]} nums - Input array
 * @param {Function} fn - Callback function
 * @param {number} init - Initial value
 * @return {number}
 */
function reduce(nums, fn, init) {

    // Accumulator starts with init
    let result = init;

    // Loop through every element
    for (let i = 0; i < nums.length; i++) {

        // Update accumulator
        result = fn(result, nums[i]);

    }

    return result;
}

/*-------------------------------------------------------
Example 1
-------------------------------------------------------*/

function sum(accum, curr) {
    return accum + curr;
}

const nums1 = [1, 2, 3, 4];

const answer1 = reduce(nums1, sum, 0);

console.log(answer1); // 10

/*-------------------------------------------------------
Example 2
-------------------------------------------------------*/

function squareSum(accum, curr) {
    return accum + curr * curr;
}

const nums2 = [1, 2, 3, 4];

const answer2 = reduce(nums2, squareSum, 100);

console.log(answer2); // 130

/*-------------------------------------------------------
Example 3
-------------------------------------------------------*/

const nums3 = [];

function alwaysZero(accum, curr) {
    return 0;
}

const answer3 = reduce(nums3, alwaysZero, 25);

console.log(answer3); // 25