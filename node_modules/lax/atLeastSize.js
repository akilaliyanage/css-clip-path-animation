/**
 * Checks if the iterable has at least n elements.
 * @param {*} xs - The iterable to check.
 * @param {Number} n - The number of elements to check.
 * @returns {Boolean} - True if the iterable has at least n elements.
 */
function atLeastSize(xs, n=0) {
    let iter = xs[Symbol.iterator]();
    let x = iter.next();
    let i = 0;

    n = n >= 0 ? n : 0;

    while (!x.done && i !== n) {
        i += 1;
        x = iter.next();
    }

    return i === n;
}

export default atLeastSize;
