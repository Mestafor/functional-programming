const map = require('./');

describe('Sort', () => {

    test('function not null or undefined', () => {
        expect(map).toBeDefined();
    })

    test('if first argument is not array retur throw new error', () => {
        expect(() => {
            map('sadasd', item => item)
        }).toThrow('Shoud be array');
    });

    test('it should be retur maped array', () => {
        expect(map(res => res, [5,6,5,1,2])).toEqual([5,6,5,1,2]);
    });

})

