'use strict';
const last = require('./');

describe('last', () => {
  it('shoud be defined', () => {
    expect(last).toBeDefined();
  });

  it('should return last element from array', () => {
    expect(last([1,2,3])).toBe(3);
  });
});

