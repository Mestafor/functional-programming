const every = require('./');

describe('Every', () => {

    test('function not null or undefined', () => {
        expect(every).toBeDefined();
    })

    test('shoud return true', () => {
        expect(every([{id:1}, {id:2}], item => item.id)).toBe(true);
    })

    test('shoud return false', () => {
        expect(every([{id:1}, {some:2}], item => item.id)).toBe(false);
    })

    test('array was empty shoud return true', () => {
        expect(every([], item => item)).toBe(true);
    });

    test('if first argument is not array retur throw new error', () => {
        expect(() => {
            every('sadasd', item => item)
        }).toThrow('Shoud be array');
    });

})
