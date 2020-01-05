function *slice(xs, start=0, stop=null) {
    let iter = xs[Symbol.iterator]();
    let i = 0;
    let x = iter.next();

    while (i < start && !x.done) {
        x = iter.next();
        i += 1;
    }

    while (!x.done && (i < stop || stop === null)) {
        yield x.value;

        x = iter.next();
        i += 1;
    }
}

export default slice;
