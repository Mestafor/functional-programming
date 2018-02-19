const sortBy = require('./');

describe('Sort', () => {

    test('function not null or undefined', () => {
        expect(sortBy).toBeDefined();
    })

    test('if first argument is not string retur throw new error', () => {
        expect(() => {
            sortBy();
        }).toThrow('Shoud be string');
    });

    test('it should be retur function', () => {
        expect(sortBy('id')).toBeDefined();
    });

})
