import some from './some';


function none(xs, iteratee, thisArg) {
    return !some(xs, iteratee, thisArg);
}

export default none;
