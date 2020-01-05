import identity from './identity';


function reduce(xs, iteratee=identity, init=undefined, thisArg=undefined) {
    let iter = xs[Symbol.iterator]();
    let fn = thisArg ? iteratee.bind(thisArg) : iteratee;
    let y = init !== undefined ? init : iter.next().value;
    let x = iter.next();
    let i = 0;

    while (!x.done) {
        y = fn(y, x.value, i, xs);
        x = iter.next();
        i += 1;
    }

    return y;
}

export default reduce;
