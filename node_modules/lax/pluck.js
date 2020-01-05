function *pluck(xs, prop) {
    for (let x of xs) {
        yield x[prop];
    }
}

export default pluck;
