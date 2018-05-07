'use strict';
const head = require('./');

describe('head', () => {
  it('shoud be defined', () => {
    expect(head).toBeDefined();
  });

  it('should return first element from array', () => {
    expect(head([1,2,3])).toBe(1);
  });
});
