'use strict';

function curry(fn) {
  return function curried(...args) {
    if (args.length < fn.length) {
      return (...next) =>
        curried(...args, ...next);
    }
    return fn(...args);
  }
}

module.exports = curry;