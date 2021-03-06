'use strict';
const isObject = require('../../functions/IsObject');
const isArray = require('../../functions/isArray');
const isString = require('../../functions/isString');
const curry = require('../../functions/curry');

function prop(props, obj) {
  return isString(props) 
    ? obj[props]
    : isArray(props)
    ? props.reduce((value, prop) => {
      return isObject(value) ? value[prop] : undefined;
    }, obj) 
    : undefined;
}

module.exports = curry(prop);
