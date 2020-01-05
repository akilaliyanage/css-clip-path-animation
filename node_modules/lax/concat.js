/**
 * Yields the values from all given iterables.
 * @params {...*} args - The iterables to concat.
 * @returns {*} - The values from the iterables.
 */
function *concat(...args) {
    for (let xs of args) {
        for (let x of xs) {
            yield x;
        }
    }
}

export default concat;
