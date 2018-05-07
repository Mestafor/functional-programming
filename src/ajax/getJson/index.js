'use strict';
const curry = require('../../functions/curry');


async function getJson(fn, url) {
  console.log('--url', url);
  const json = await fetch(url, {
      method: 'GET',
      credentials: 'include',
    }).then(data => data.json())
    .catch(error => console.error('Error:', error));

  return fn(json);
}

module.exports = curry(getJson);
