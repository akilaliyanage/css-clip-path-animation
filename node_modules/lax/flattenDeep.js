function *flattenDeep(xs) {
    if (typeof xs === 'string' && xs.length === 1) {
        yield xs;
    } else {
        for (let x of xs) {
            if (x && x[Symbol.iterator]) {
                yield *flattenDeep(x, x);
            } else {
                yield x;
            }
        }
    }
}

export default flattenDeep;
