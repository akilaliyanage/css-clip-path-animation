function *initial(xs) {
    let iter = xs[Symbol.iterator]();
    let curr = iter.next();
    let next = iter.next();

    while (!next.done) {
        yield curr.value;

        curr = next;
        next = iter.next();
    }
}

export default initial;
