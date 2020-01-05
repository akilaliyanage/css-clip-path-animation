/**
 * Creates an object mapping the iterable's values to counts.
 * @param {*} xs - The iterable to count.
 * @param {Function|String} iteratee -
 * The function or property for generating count keys.
 * @param {Function|String} thisArg -
 * The this binding for the iteratee function.
 * @returns {Object} - An object containing values and counts.
 */
function countBy(xs, iteratee, thisArg) {
    let i = 0;
    let counts = {};
    let fn;

    if (typeof iteratee === 'string') {
        fn = x => x[iteratee];
    } else {
        fn = thisArg ? iteratee.bind(thisArg) : iteratee;
    }

    for (let x of xs) {
        let key = fn(x, i, xs);

        counts[key] = counts[key] ? counts[key] + 1 : 1;

        i += 1;
    }

    return counts;
}

export default countBy;
