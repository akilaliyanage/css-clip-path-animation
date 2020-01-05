function get(xs, n=0) {
    let i = 0;

    for (let x of xs) {
        if (i === n) {
            return x;
        }

        i += 1;
    }
}

export default get;
