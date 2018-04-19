'use strict';

/**
 * 
 * @param {number} num 
 * @param {function} fn 
 */
function times(num, fn) {

    while(num) {
        fn(num);
        num--;
    }

}

module.exports = times;