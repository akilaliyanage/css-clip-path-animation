function last(xs) {
    let iter = xs[Symbol.iterator]();
    let curr = iter.next();
    let next = iter.next();

    while (!next.done) {
        curr = next;
        next = iter.next();
    }

    return curr.value;
}

export default last;
