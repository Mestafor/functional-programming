const {
  List
} = require('immutable-ext');

const res = List.of(x => y => `${x}-${y}`)
  .ap(List([1,2,3]))
  .ap(List(['hello']));

console.log(res);