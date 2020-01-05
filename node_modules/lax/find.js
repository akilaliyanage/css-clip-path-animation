function find(xs, iteratee, thisArg) {
    let fn = thisArg ? iteratee.bind(thisArg) : iteratee;
    let i = 0;

    for (let x of xs) {
        if (fn(x, i, xs)) {
            return x;
        }

        i += 1;
    }
}

export default find;
