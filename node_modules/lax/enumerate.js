function *enumerate(xs) {
    let i = 0;

    for (let x of xs) {
        yield [i, x];

        i += 1;
    }
}

export default enumerate;
