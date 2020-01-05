function *uniq(xs) {
    let seen = {};

    for (let x of xs) {
        if (!seen[x]) {
            seen[x] = true;

            yield x;
        }
    }
}

export default uniq;
