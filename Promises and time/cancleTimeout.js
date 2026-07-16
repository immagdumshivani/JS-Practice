/**
 * Cancellable Function
 */

function cancellable(fn, args, t) {

    const timer = setTimeout(() => {

        console.log("Function Executed:", fn(...args));

    }, t);

    return function() {

        clearTimeout(timer);

        console.log("Timer Cancelled");

    };

}

/*----------------------------------
Example 1
----------------------------------*/

const cancelFn = cancellable(

    (x) => x * 5,

    [2],

    2000

);

// Cancel after 3000 ms
setTimeout(cancelFn,3000);