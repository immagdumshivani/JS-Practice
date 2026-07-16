/**
 * Sleep Function
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve(millis);

        }, millis);

    });

}

// -----------------------------
// Example 1
// -----------------------------

let startTime = Date.now();

sleep(2000).then(() => {

    let endTime = Date.now();

    console.log("Time Elapsed:", endTime - startTime, "ms");

});