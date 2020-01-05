/**
 * Checks if the iterable is empty.
 * The the given value is considered empty if it is not an iterable.
 * @param {*} xs - The iterable to check.
 * @returns {Boolean} - True if the iterable is empty.
 */
function isEmpty(xs) {
    let iter = xs && xs[Symbol.iterator] ? xs[Symbol.iterator]() : null;
    let x;

    if (!iter) {
        return true;
    }

    x = iter.next();

    return x.done ? true : false;
}

export default isEmpty;
