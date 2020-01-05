function invoke(xs, fnName, ...args) {
    for (let x of xs) {
        x[fnName](...args);
    }
}

export default invoke;
