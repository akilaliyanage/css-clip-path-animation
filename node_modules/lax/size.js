function size(xs) {
    let iter = xs[Symbol.iterator]();
    let x = iter.next();
    let i = 0;

    while (!x.done) {
        i += 1;
        x = iter.next();
    }

    return i;
}

export default size;
