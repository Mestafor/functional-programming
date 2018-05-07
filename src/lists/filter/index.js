'use strict';
const curry = require('../../functions/curry');

function filter(fn, list) {
    let res = [];
    for(let i = 0, l = list.length; i < l; i++ ) {
        if(fn(list[i])) {
            res.push(list[i]);
        }
    }
    return res;
}

module.exports = curry(filter);
