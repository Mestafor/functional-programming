'use strict';

/**
 * 
 * @param {string} prop 
 * @param {function} fn 
 */
function sortBy(prop) {
    if(typeof prop !== 'string') throw new Error('Shoud be string');
    let actualFn = (a, b) => a[prop] > b[prop];
    return actualFn;
}

module.exports = sortBy;