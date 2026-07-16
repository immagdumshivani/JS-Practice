async function addTwoPromises(promise1, promise2) {

    const [value1, value2] = await Promise.all([
        promise1,
        promise2
    ]);

    return value1 + value2;
}

// Example 1

const promise1 = new Promise(resolve =>
    setTimeout(() => resolve(2), 2000)
);

const promise2 = new Promise(resolve =>
    setTimeout(() => resolve(5), 5000)
);

addTwoPromises(promise1, promise2)
    .then(result => console.log(result));