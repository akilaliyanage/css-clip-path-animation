function *range(...args) {
    let start = 0;
    let stop = args[0];
    let step = args[2] || 1;

    if (args.length > 1) {
        start = args[0];
        stop = args[1];
    }

    for (let i = start; i < stop; i += step) {
        yield i;
    }
}

export default range;
