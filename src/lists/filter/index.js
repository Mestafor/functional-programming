'use strict';

function filter(list, fn) {
    let res = [];
    for(let i = 0, l = list.length; i < l; i++ ) {
        if(fn(list[i])) {
            res.push(list[i]);
        }
    }
    return res;
}

module.exports = filter;