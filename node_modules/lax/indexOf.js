function indexOf(xs, v) {
    let i = 0;

    if (v !== v) { //NaN
        for (let x of xs) {
            if (x !== x) {
                return i;
            }

            i += 1;
        }
    } else {
        for (let x of xs) {
            if (x === v) {
                return i;
            }

            i += 1;
        }
    }

    return -1;
}

export default indexOf;
