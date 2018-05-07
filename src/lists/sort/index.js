'use strict';
const curry = require('../../functions/curry');

/**
 * 
 * @param {ArrayConstructor} list 
 * @param {function} fn 
 */
function sort(fn, list) {
    if(!(list instanceof Array)) throw new Error('Shoud be array');
    let actualFn = (a, b) => a > b;
    if(typeof fn === 'function') {
        actualFn = fn;
    }
    return [...list].sort(actualFn);
}

module.exports = curry(sort);
