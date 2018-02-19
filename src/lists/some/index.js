'use strict';

/**
 * 
 * @param {ArrayConstructor} list 
 * @param {function} fn 
 */
function some(list, fn) {
    if(!(list instanceof Array)) throw new Error('Shoud be array');
    return list.some(fn);
}

module.exports = some;