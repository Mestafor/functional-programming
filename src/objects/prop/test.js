'use strict';
const prop = require('./');

var CAR = {
    name: "Ferrari FF",
    horsepower: 660,
    dollar_value: 700000,
    in_stock: true,
    driver: {
      name: 'Alex',
      categories: {
        B: {
          name: 'B',
        }
      }
    }
  };

describe('prop', () => {
  it('should be define', () => {
    expect('prop').toBeDefined();
  })

  it('should return name from object', () => {
    expect(prop('name', CAR)).toBe('Ferrari FF');
  })

  it('should return prop in prop from object', () => {
    expect(prop(['driver', 'name'], CAR)).toBe('Alex');
  })

  it('get deep prop', () => {
    expect(prop(['driver', 'categories', 'B', 'name'], CAR)).toBe('B');
  })

  it('should return null', () => {
    expect(prop(['driver', 'categories', 'B', 'name', 'asdf'], CAR)).toBe(undefined);
  })
})
