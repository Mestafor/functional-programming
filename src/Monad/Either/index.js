// const Either = Left || Right;

const Right = x => ({
  chain: f => f(x),
  map: f => Right(f(x)),
  fold: (f, g) => g(x),
  concat: o => o.fold(e => Left(e), r =>  Right(x.concat(r)) ),
  inspect: () => `Right(${x})`
});

const Left = x => ({
  chain: f => Left(x),
  map: f => Left(x),
  fold: (f, g) => f(x),
  concat: o => Left(x),
  inspect: () => `Left(${x})`
});

const Either = x => x != null ? Right(x) : Left(null);

const tryCatch = f => {
  try {
    return Right(f());
  } catch(e) {
    return Left(e);
  }
}

const findColor = name => Either(({
  green: 'green',
  blue: 'blue',
  red: 'red'
})[name]);

const res = Right(3).map(x => x * 2).fold(() => 'error', x => x * 10);
const res2 = Left(3).map(x => x * 2).fold(() => 'error', x => x * 10);
const color = findColor('red').map(x => x.toUpperCase()).fold(x => x, x => x);

const getPort = tryCatch(() => JSON.parse('{"port":3300}')).chain(item => tryCatch(() => JSON.parse('{port:4000}'))).map(item => item.port).fold(e => 3000, x => x);

console.log(res, res2, color, getPort);

Either(undefined).chain(item => tryCatch(() => JSON.parse('{"port":3300}').port * item)).map(item => item / 3).fold(e => console.log('null we have ', e), item => console.log(item));