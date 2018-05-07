const isArray = require('./');

describe('isArray', () => {
  it('function to be define', () => {
    expect(isArray).toBeDefined();
  })

  it('should return true for argument [1,2,3]', () => {
    expect(isArray([1,2,3])).toBe(true);
  })

  it('should return false with string arguments', () => {
    expect(isArray('string')).toBe(false);
  })
})
