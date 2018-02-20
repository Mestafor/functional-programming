'use strict';

const partial = require('./src/functions/partial');
const swap = require('./src/functions/swap');
const filter = require('./src/lists/filter');
const curry = require('./src/functions/curry');

swap((a,b) => console.log(a, b))(1,2);

/**
 * Curry
 */
// logger
const createLog = curry((fn, prefix, message) => fn(`${prefix}: ${message}`));
const log = createLog(console.log)('LOG');
log('message');

// checker
const is = curry((fn, value) => fn(value));
const isNumber = is((value) => typeof value === 'number');
let numbers = ['1', 2, '3', 4];
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
        for(let fn of fns.reverse()) {
            result = fn(result);
            console.log(result);
        }

        return result;
    }
 }

 let filterNumbersAndLog = partial(
    partial(filter, undefined, isNumber)
 );

 filterNumbersAndLog(numbers);