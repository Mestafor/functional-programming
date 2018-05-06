const sort = require('./');

describe('Sort', () => {

    test('function not null or undefined', () => {
        expect(sort).toBeDefined();
    })

    test('if first argument is not array retur throw new error', () => {
        expect(() => {
            sort(item => item, 'sadasd')
        }).toThrow('Shoud be array');
    });

    test('it should be retur sorted array', () => {
        expect(sort(null, [5,6,5,1,2])).toEqual([1,2,5,5,6]);
    });

    test('it should sort array with object', () => {
        expect(sort( 
                    (a, b) => a.id > b.id, 
                    [{id:5},{id:6},{id:5},{id:1},{id:2}]
              )).toEqual([{id:1},{id:2},{id:5},{id:5},{id:6}]);
    });

})
