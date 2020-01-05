import flattenDeep from './flattenDeep';


function *flatten(xs, deep=false) {
    if (deep) {
        yield *flattenDeep(xs);
    } else {
        for (let x of xs) {
            if (x && x[Symbol.iterator]) {
                for (let y of x) {
                    yield y;
                }
            } else {
                yield x;
            }
        }
    }
}

export default flatten;
