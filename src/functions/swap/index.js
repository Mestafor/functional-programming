'use strict';

function swap(fn) {
    return (arg1, arg2) => fn(arg2, arg1);
}

module.exports = swap;