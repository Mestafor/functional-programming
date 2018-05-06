const isObject = require('./');

describe('isObject', () => {
  it('function to be define', () => {
    expect(isObject).toBeDefined();
  })

  it('should return true for argument [1,2,3]', () => {
    expect(isObject({1:1,2:2,3:3})).toBe(true);
  })

  it('should return false with string argument', () => {
    expect(isObject('string')).toBe(false);
  })
})

