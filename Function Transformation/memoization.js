/**
 * Memoize Function
 */

function memoize(fn) {

    const cache = {};

    return function(...args) {

        const key = JSON.stringify(args);

        if (key in cache) {
            console.log("From Cache");
            return cache[key];
        }

        console.log("Calculating...");

        const result = fn(...args);

        cache[key] = result;

        return result;
    };

}

/*-----------------------------------
Example 1
-----------------------------------*/

function sum(a,b){
    return a+b;
}

const memoSum = memoize(sum);

console.log(memoSum(2,2));

console.log(memoSum(2,2));

console.log(memoSum(1,2));

console.log(memoSum(1,2));