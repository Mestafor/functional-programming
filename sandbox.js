
const partial = require('./src/functions/partial');

function delay(fn, ms) {
    setTimeout(fn, ms);
}

let createDelay = partial(delay, undefined, 1000);

createDelay(() => { console.log('Done') });