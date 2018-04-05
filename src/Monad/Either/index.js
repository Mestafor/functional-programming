// const Either = Left || Right;

const Right = x =>  ({
  map: f => Right(f(x)),
  fold: (f, g) => g(x),
  inspect: () => `Right(${x})`
});

const Left = x =>  ({
  map: f => Left(x),
  fold: (f, g) => f(x),
  inspect: () => `Left(${x})`
});

const findColor = name => {
  const color = ({
    green: 'green',
    blue: 'blue',
    red: 'red'
  })[name]

  return color ? Right(color) : Left(color);
}

const res = Right(3).map(x => x*2).fold( () => 'error', x => x*10);
const res2 = Left(3).map(x => x*2).fold(() => 'error', x => x*10);
const color = findColor('green').map(x => x.toUpperCase()).fold(() => 'no color', x => x);

console.log(res, res2, color);