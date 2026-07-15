/**
 * Returns the number of arguments passed.
 * @param  {...any} args
 * @return {number}
 */
function argumentsLength(...args) {

    return args.length;

}

console.log(argumentsLength(5));

// Output:
// 1


console.log(argumentsLength({}, null, "3"));

// Output:
// 3

console.log(argumentsLength());

console.log(argumentsLength(10, 20, 30, 40, 50));

// Output:
// 5

console.log(argumentsLength("Shivani", true, 100, [1,2,3], {city:"Pune"}));

// Output:
// 5