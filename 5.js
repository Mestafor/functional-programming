'use strict';

const compose = require('./src/functions/compose');
const curry = require('./src/functions/curry');

const map = require('./src/lists/map');
const head = require('./src/lists/head');
const last = require('./src/lists/last');
const sort = require('./src/lists/sort');

const prop = require('./src/objects/prop');

var CARS = [{
    name: "Ferrari FF",
    horsepower: 660,
    dollar_value: 700000,
    in_stock: true
  },
  {
    name: "Spyker C12 Zagato",
    horsepower: 650,
    dollar_value: 648000,
    in_stock: false
  },
  {
    name: "Jaguar XKR-S",
    horsepower: 550,
    dollar_value: 132000,
    in_stock: false
  },
  {
    name: "Audi R8",
    horsepower: 525,
    dollar_value: 114200,
    in_stock: false
  },
  {
    name: "Aston Martin One-77",
    horsepower: 750,
    dollar_value: 1850000,
    in_stock: true
  },
  {
    name: "Pagani Huayra",
    horsepower: 700,
    dollar_value: 1300000,
    in_stock: false
  }
];


const isLastInStock = compose(
  prop('in_stock'),
  last
);
console.log('---last in stock', isLastInStock(CARS));

const nameOfFirstCar = compose(
  prop('name'),
  head
);
console.log('---name of first car', nameOfFirstCar(CARS));

const average = arr => arr.reduce((sum, n) => sum+n, 0)/arr.length;

const averagePrice = compose(
  average,
  map(prop('dollar_value'))
);
console.log(averagePrice(CARS));

const fastestCar = compose(
  (car) => `${car.name} is the fastest!`,
  last,
  sort((a, b) => a.horsepower > b.horsepower)
);
console.log(fastestCar(CARS));



