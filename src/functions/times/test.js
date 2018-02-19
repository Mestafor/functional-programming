const times = require('./');

describe('times', () => {

    test('times not null or undefined', () => {
        expect(times).toBeDefined();
    })

    test('return function', () => {
        expect(times).toBeInstanceOf(Function);
    })

    test('shoud called 3 times', () => {
        let fn = jest.fn();
        times(3, fn);

        expect(fn.mock.calls.length).toBe(3);
    })
})
