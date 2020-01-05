/**
 * Yields n chunks from the given iterable.
 * The last chunk contains any extra elements.
 * @param {*} xs - The iterable to chunk.
 * @param {Number} n - The number of chunks to create.
 * @returns {*} - One or more chunks of n size or less.
 */
function *chunk(xs, n) {
    let result = [];

    if (n < 1) {
        n = 1;
    }

    for (let x of xs) {
        if (result.length === n) {
            yield result;
            result = [];
        }

        result.push(x);
    }

    yield result;
}

export default chunk;
