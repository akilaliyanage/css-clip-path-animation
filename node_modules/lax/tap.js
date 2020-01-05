function *tap(xs, iteratee, thisArg) {
    let fn = thisArg ? iteratee.bind(thisArg) : iteratee;
    let i = 0;

    for (let x of xs) {
        fn(x, i, xs);
        i += 1;
    }

    yield xs;
}

export default tap;
