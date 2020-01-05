function some(xs, iteratee, thisArg) {
    let fn = thisArg ? iteratee.bind(thisArg) : iteratee;
    let i = 0;

    for (let x of xs) {
        if (fn(x, i, xs)) {
            return true;
        }

        i += 1;
    }

    return false;
}

export default some;
