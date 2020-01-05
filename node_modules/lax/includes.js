function includes(xs, v) {
    if (v !== v) { //NaN
        for (let x of xs) {
            if (x !== x) {
                return true;
            }
        }
    } else {
        for (let x of xs) {
            if (x === v) {
                return true;
            }
        }
    }

    return false;
}

export default includes;
