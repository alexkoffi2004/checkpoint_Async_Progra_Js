async function iterateWithAsyncAwait(values) {
    for (let value of values) {
        console.log(value);
        await new Promise(resolve => setTimeout(resolve, 1000)); // Attendre 1 seconde
    }
}

iterateWithAsyncAwait([1, 2, 3, 4, 5]);
