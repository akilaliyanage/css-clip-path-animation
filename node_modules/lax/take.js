function *take(xs, n) {
    let i = 0;

    for (let x of xs) {
        if (i === n) {
            break;
        }

        yield x;

        i += 1;
    }
}

export default take;
