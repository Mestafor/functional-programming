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

        
        describe('chain', () => {
                it('gets a Maybe of function and applies it to a value', () => {
                  const result = Maybe.of(10).map(x=> y => x * y).ap(Maybe(20)).chain(item => Maybe(item)).fold(res => res);
                  expect(result).toBe(200);
                });
        });

        describe('ap', () => {
                it('gets a Maybe of function and applies it to a value', () => {
                  const result = Maybe(x => y => x *y).ap(Maybe(10)).ap(Maybe(100)).fold(res => res);
                  expect(result).toBe(1000);
                });
        });
        describe('equals', () => {
                it('equals -> compare two monads and return true if its equals', () => {
                        const a = Maybe(10);
                        const b = Maybe(10);
                  expect(a.equals(b)).toBe(true);
                });
        });
        describe('of', () => {
                it('of -> create Monat', () => {
                //  expect().toBeUndefined();
                });
        });
});
