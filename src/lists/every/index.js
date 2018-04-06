'use strict';

/**
 * 
 * @param {ArrayConstructor} list 
 * @param {function} fn 
 */
function every(list, fn) {
    if(!(list instanceof Array)) throw new Error('Shoud be array');
    return list.every(fn);
}

module.exports = every;