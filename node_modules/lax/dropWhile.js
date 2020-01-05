function *dropWhile(xs, iteratee, thisArg) {
    let drop = true;
    let fn = thisArg ? iteratee.bind(thisArg) : iteratee;
    let i = 0;

    for (let x of xs) {
        if (drop) {
            drop = fn(x, i, xs);
        }

        if (!drop) {
            yield x;
        }

        i += 1;
    }
}

export default dropWhile;
