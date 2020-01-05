import identity from './identity';


function max(xs, iteratee=identity, thisArg=undefined) {
    let fn = thisArg ? iteratee.bind(thisArg) : iteratee;
    let result = Number.NEGATIVE_INFINITY;
    let resultValue = Number.NEGATIVE_INFINITY;
    let i = 0;
    let value;

    for (let x of xs) {
        value = fn(x, i, xs);

        if (value > resultValue) {
            resultValue = value;
            result = x;
        }

        i += 1;
    }

    return result;
}

export default max;
