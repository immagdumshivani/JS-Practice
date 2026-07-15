/**
 * Compose Function
 */

function compose(functions) {

    return function(x) {

        let result = x;

        for (let i = functions.length - 1; i >= 0; i--) {

            result = functions[i](result);

        }

        return result;
    };

}

/*------------------------------------
Example 1
------------------------------------*/

const functions1 = [
    x => x + 1,
    x => x * x,
    x => 2 * x
];

const fn1 = compose(functions1);

console.log(fn1(4)); // 65


/*------------------------------------
Example 2
------------------------------------*/

const functions2 = [
    x => 10 * x,
    x => 10 * x,
    x => 10 * x
];

const fn2 = compose(functions2);

console.log(fn2(1)); // 1000


/*------------------------------------
Example 3
------------------------------------*/

const functions3 = [];

const fn3 = compose(functions3);

console.log(fn3(42)); // 42