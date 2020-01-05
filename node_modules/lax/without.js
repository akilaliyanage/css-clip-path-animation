import includes from './includes';


function *without(xs, ...args) {
    for (let x of xs) {
        if (!includes(args, x)) {
            yield x;
        }
    }
}

export default without;
