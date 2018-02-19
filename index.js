'use strict';

const swap = require('./src/functions/swap');
const filter = require('./src/lists/filter');
const curry = require('./src/functions/curry');

swap((a,b) => console.log(a, b))(1,2);

// logger
const createLog = curry((fn, prefix, message) => fn(`${prefix}: ${message}`));
const log = createLog(console.log)('LOG');
log('message');

// checker
const is = curry((fn, value) => fn(value));

const isNumber = is((value) => typeof value === 'number');

let numbers = ['1', 2, '3', 4];

let r = curry(swap(filter))(isNumber)(numbers)
console.log(r);