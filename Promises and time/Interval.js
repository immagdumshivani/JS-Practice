function cancellable(fn, args, t) {

    // First call immediately
    console.log("Returned:", fn(...args));

    // Repeat every t milliseconds
    const intervalId = setInterval(() => {

        console.log("Returned:", fn(...args));

    }, t);

    // Cancel function
    return function() {

        clearInterval(intervalId);

        console.log("Interval Cancelled");

    };

}

// Example

const cancelFn = cancellable(

    (x) => x * 2,

    [4],

    2000

);

// Stop after 10 seconds
setTimeout(cancelFn, 10000);