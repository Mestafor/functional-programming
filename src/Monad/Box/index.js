const Box = x => ({
  map: f => Box(f(x)),
  fold: f => f(x),
  inspect: () => `Box(${x})`
});

Box([1,2,3]).map((array) => {
  console.log(array);
  array.shift();
  return array;
}).map((array) => {
  console.log(array);
  array.shift();
  return array;
}).map((array) => {
  console.log(array);
  array.shift();
  return array;
}).inspect();