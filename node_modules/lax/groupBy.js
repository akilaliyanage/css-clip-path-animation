function groupBy(xs, iteratee, thisArg) {
    let i = 0;
    let groups = {};
    let fn;

    if (typeof iteratee === 'string') {
        fn = x => x[iteratee];
    } else {
        fn = thisArg ? iteratee.bind(thisArg) : iteratee;
    }

    for (let x of xs) {
        let key = fn(x, i, xs);

        if (groups[key]) {
            groups[key].push(x);
        } else {
            groups[key] = [x];
        }

        i += 1;
    }

    return groups;
}

export default groupBy;
