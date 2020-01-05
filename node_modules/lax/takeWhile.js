function *takeWhile(xs, iteratee, thisArg) {
    let fn = thisArg ? iteratee.bind(thisArg) : iteratee;
    let i = 0;

    for (let x of xs) {
        if (fn(x, i, xs)) {
            yield x;
        } else {
            break;
        }

        i += 1;
    }
}

export default takeWhile;
