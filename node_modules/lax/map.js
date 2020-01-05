import identity from './identity';


function *map(xs, iteratee=identity, thisArg=undefined) {
    let fn = thisArg ? iteratee.bind(thisArg) : iteratee;
    let i = 0;

    for (let x of xs) {
        yield fn(x, i, xs);
        i += 1;
    }
}

export default map;
