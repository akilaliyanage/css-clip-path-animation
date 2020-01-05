function *repeat(v, n) {
    for (let i = 0; i < n; i++) {
        yield v;
    }
}

export default repeat;
