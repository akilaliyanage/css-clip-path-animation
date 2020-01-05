function indexBy(xs, iteratee, thisArg) {
    let i = 0;
    let indices = {};
    let fn;

    if (typeof iteratee === 'string') {
        fn = x => x[iteratee];
    } else {
        fn = thisArg ? iteratee.bind(thisArg) : iteratee;
    }

    for (let x of xs) {
        indices[fn(x, i, xs)] = x;

        i += 1;
    }

    return indices;
}

export default indexBy;
