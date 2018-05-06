'use strict';
const curry = require('../../functions/curry');

function setHTML(sel, html) {
  document.querySelector(sel).innerHTML = html;
}

module.exports = curry(setHTML);
