'use strict';
const curry = require('../../functions/curry');

function map(fn, list) {
  if(!(list instanceof Array)) throw new Error('Shoud be array');
  return list.map(fn);
}

module.exports = curry(map);
