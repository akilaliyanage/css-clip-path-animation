function findIndex(xs, iteratee, thisArg) {
    let fn = thisArg ? iteratee.bind(thisArg) : iteratee;
    let i = 0;

    for (let x of xs) {
        if (fn(x, i, xs)) {
            return i;
        }

        i += 1;
    }

    return -1;
}

export default findIndex;
