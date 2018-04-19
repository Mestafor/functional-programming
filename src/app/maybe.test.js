const Maybe  = require('./maybe.js');

describe('Maybe', () => {
        it('creates itself', () => {
          expect(Maybe(10)).not.toBeNull();
        });

        describe('map', () => {
                it('gets a function and applies it to a value', () => {
                  const result = Maybe(10).map(x => x * x).fold(res => res);                  
                  expect(result).toBe(100);
                });
        });

        describe('ap', () => {
                it('gets a Maybe of function and applies it to a value', () => {
                  const maybefn = Maybe(x => x * x);                  
                  const result = Maybe(10).ap(maybefn).fold(res => res); 

                  expect(result).toBe(100);
                });
        });
        describe('equals', () => {
                it('equals -> create Monat', () => {
                  expect().toBe(100);
                });
        });
        describe('of', () => {
                it('of -> create Monat', () => {
                //  expect().toBeUndefined();
                });
        });
});
