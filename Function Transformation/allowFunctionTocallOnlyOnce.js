/**
 * Allow a function to be called only once.
 */
function once(fn) {

    let called = false;

    return function(...args) {

        if (!called) {

            called = true;

            return fn(...args);

        }

        return undefined;
    };
}

/*------------------------------------
Example 1
------------------------------------*/

function sum(a, b, c) {
    return a + b + c;
}

const onceSum = once(sum);

console.log(onceSum(1, 2, 3)); // 6
console.log(onceSum(2, 3, 6)); // undefined

/*------------------------------------
Example 2
------------------------------------*/

function multiply(a, b, c) {
    return a * b * c;
}

const onceMultiply = once(multiply);

console.log(onceMultiply(5, 7, 4)); // 140
console.log(onceMultiply(2, 3, 6)); // undefined
console.log(onceMultiply(4, 6, 8)); // undefined