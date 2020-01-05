import identity from './identity';


function min(xs, iteratee=identity, thisArg=undefined) {
    let fn = thisArg ? iteratee.bind(thisArg) : iteratee;
    let result = Number.POSITIVE_INFINITY;
    let resultValue = Number.POSITIVE_INFINITY;
    let i = 0;
    let value;

    for (let x of xs) {
        value = fn(x, i, xs);

        if (value < resultValue) {
            resultValue = value;
            result = x;
        }

        i += 1;
    }

    return result;
}

export default min;
