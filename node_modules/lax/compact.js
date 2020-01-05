/**
 * Yields the truthy values from the iterable.
 * @param {*} xs - The iterable to compact.
 * @returns {*} - All truthy values from the iterable.
 */
function *compact(xs) {
    for (let x of xs) {
        if (x) {
            yield x;
        }
    }
}

export default compact;
