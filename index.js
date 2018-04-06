'use strict';

const partial = require('./src/functions/partial');
const swap = require('./src/functions/swap');
const filter = require('./src/lists/filter');
const some = require('./src/lists/some');
const sort = require('./src/lists/sort');
const curry = require('./src/functions/curry');

swap((a, b) => console.log(a, b))(1, 2);

/**
 * Curry
 */
// logger
const createLog = curry((fn, prefix, message) => fn(`${prefix}: ${message}`));
const log = createLog(console.log)('LOG');
log('message');

// checker
const is = curry(require('./src/functions/is'));
const isNumber = is((value) => typeof value === 'number');
const isArray = is(value => value instanceof Array);
let numbers = ['1', 2, '3', 4, 2, 6, 'asds'];
console.log(swap(filter)(isNumber, numbers));
let r = curry(swap(filter))(isNumber)(numbers);
console.log(r);

/**
 * Partial
 */
const createTimer = partial((fn, ms) => setTimeout(fn, ms), undefined, 500);
createTimer(() => console.log('Showed after 500ms'));


/**
 * Composition
 */
function compose(...fns) {
    return (args) => {
        let result = args;
        for (let fn of [...fns].reverse()) {
            result = fn(result);
        }

        return result;
    }
}

function pipe(...fns) {
    return (args) => {
        let result = args;
        for (let fn of fns) {
            result = fn(result);
        }

        return result;
    }
}

let filterNumbersSortAndLog = compose(
    log,
    (res) =>  res[0],
    partial(sort, undefined, (a, b) => a > b),
    partial(filter, undefined, isNumber)
);

console.log(filterNumbersSortAndLog(numbers));

