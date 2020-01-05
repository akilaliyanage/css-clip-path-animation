function *drop(xs, n) {
    let i = 0;

    for (let x of xs) {
        if (i >= n) {
            yield x;
        }

        i += 1;
    }
}

export default drop;
