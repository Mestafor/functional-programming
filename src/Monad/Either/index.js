// const Either = Left || Right;

const Right = x => ({
  map: f => Right(f(x)),
  fold: (f, g) => g(x),
  inspect: () => `Right(${x})`
});

const Left = x => ({
  map: f => Left(x),
  fold: (f, g) => f(x),
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

const getPort = tryCatch(() => JSON.parse('{port:3300}')).map(item => item.port).fold(e => 3000, x => x);

console.log(res, res2, color, getPort);