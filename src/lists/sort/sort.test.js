const sort = require('./');

describe('Sort', () => {

    test('function not null or undefined', () => {
        expect(sort).toBeDefined();
    })

    test('if first argument is not array retur throw new error', () => {
        expect(() => {
            sort('sadasd', item => item)
        }).toThrow('Shoud be array');
    });

    test('it should be retur sorted array', () => {
        expect(sort([5,6,5,1,2])).toEqual([1,2,5,5,6]);
    });

    test('it should sort array with object', () => {
        expect(sort([{id:5},{id:6},{id:5},{id:1},{id:2}], (a, b) => a.id > b.id)).toEqual([{id:1},{id:2},{id:5},{id:5},{id:6}]);
    });

})
