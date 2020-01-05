import max from './max';
import map from './map';
import nth from './nth';
import size from './size';


function *zip(...args) {
    let maxSize = max(map(args, size));
    let result;

    for (let i = 0; i < maxSize; i++) {
        result = [];

        for (let xs of args) {
            result.push(nth(xs, i));
        }

        yield result;
    }
}

export default zip;
