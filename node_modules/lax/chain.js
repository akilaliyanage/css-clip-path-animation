import all from './all';
import any from './any';
import atLeastSize from './atLeastSize';
import chunk from './chunk';
import compact from './compact';
import concat from './concat';
import contains from './contains';
import countBy from './countBy';
import drop from './drop';
import dropWhile from './dropWhile';
import each from './each';
import every from './every';
import filter from './filter';
import first from './first';
import find from './find';
import findIndex from './findIndex';
import findWhere from './findWhere';
import flatten from './flatten';
import flattenDeep from './flattenDeep';
import forEach from './forEach';
import enumerate from './enumerate';
import get from './get';
import groupBy from './groupBy';
import head from './head';
import includes from './includes';
import identity from './identity';
import indexBy from './indexBy';
import indexOf from './indexOf';
import initial from './initial';
import invoke from './invoke';
import isEmpty from './isEmpty';
import last from './last';
import map from './map';
import max from './max';
import min from './min';
import none from './none';
import nth from './nth';
import pluck from './pluck';
import range from './range';
import reduce from './reduce';
import reject from './reject';
import repeat from './repeat';
import rest from './rest';
import size from './size';
import slice from './slice';
import some from './some';
import tail from './tail';
import take from './take';
import takeWhile from './takeWhile';
import tap from './tap';
import thru from './thru';
import uniq from './uniq';
import unique from './unique';
import without from './without';
import where from './where';
import zip from './zip';

/**
 * Enables method chaining for the given iterable.
 * Keep in mind while this is convenient, sacrifices modularity.
 * @param {*} xs - The iterable to chain.
 * @returns {Object} - An interface object that exposes functions to call on xs.
 */
function chain(xs) {
    return {

        //returns a generator
        chain: () => chain(xs),
        chunk: (...args) => chain(chunk(xs, ...args)),
        compact: () => chain(compact(xs)),
        concat: (...args) => chain(concat(xs, ...args)),
        drop: (...args) => chain(drop(xs, ...args)),
        dropWhile: (...args) => chain(dropWhile(xs, ...args)),
        each: (...args) => chain(each(xs, ...args)),
        enumerate: () => chain(enumerate(xs)),
        filter: (...args) => chain(filter(xs, ...args)),
        flatten: (...args) => chain(flatten(xs, ...args)),
        flattenDeep: () => chain(flattenDeep(xs)),
        forEach: (...args) => chain(forEach(xs, ...args)),
        initial: () => chain(initial(xs)),
        invoke: (...args) => chain(invoke(xs, ...args)),
        map: (...args) => chain(map(xs, ...args)),
        pluck: (...args) => chain(pluck(xs, ...args)),
        range: (...args) => chain(range(...args)),
        repeat: (...args) => chain(repeat(xs, ...args)),
        reject: (...args) => chain(reject(xs, ...args)),
        rest: (...args) => chain(rest(xs, ...args)),
        slice: (...args) => chain(slice(xs, ...args)),
        tap: (...args) => chain(tap(xs, ...args)),
        tail: (...args) => chain(tail(xs, ...args)),
        take: (...args) => chain(take(xs, ...args)),
        takeWhile: (...args) => chain(takeWhile(xs, ...args)),
        thru: (...args) => chain(thru(xs, ...args)),
        uniq: () => chain(uniq(xs)),
        unique: () => chain(unique(xs)),
        without: (...args) => chain(without(xs, ...args)),
        where: (...args) => chain(where(xs, ...args)),
        zip: (...args) => chain(zip(xs, ...args)),

        //returns a value
        all: (...args) => all(xs, ...args),
        any: (...args) => any(xs, ...args),
        atLeastSize: (...args) => atLeastSize(xs, ...args),
        contains: (...args) => contains(xs, ...args),
        countBy: (...args) => countBy(xs, ...args),
        every: (...args) => every(xs, ...args),
        first: () => first(xs),
        find: (...args) => find(xs, ...args),
        findIndex: (...args) => findIndex(xs, ...args),
        findWhere: (...args) => findWhere(xs, ...args),
        get: (...args) => get(xs, ...args),
        groupBy: (...args) => groupBy(xs, ...args),
        head: () => head(xs),
        includes: (...args) => includes(xs, ...args),
        identity: (...args) => identity(...args),
        indexBy: (...args) => indexBy(xs, ...args),
        indexOf: (...args) => indexOf(xs, ...args),
        isEmpty: () => isEmpty(xs),
        last: () => last(xs),
        max: (...args) => max(xs, ...args),
        min: (...args) => min(xs, ...args),
        none: (...args) => none(xs, ...args),
        nth: (...args) => nth(xs, ...args),
        reduce: (...args) => reduce(xs, ...args),
        size: () => size(xs),
        some: (...args) => some(xs, ...args),

        //iterates and returns
        toArray() {
            return Array.from(xs);
        },

        toMap() {
            return new Map(xs);
        },

        toSet() {
            return new Set(xs);
        },

        toString() {
            let str = '';

            for (let x of xs) {
                str += x;
            }

            return str;
        },

        //iterator
        [Symbol.iterator]: function*() {
            for (let x of xs) {
                yield x;
            }
        }
    };
}

export default chain;
