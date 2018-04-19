const some = require('./');

describe('Every', () => {

    test('function not null or undefined', () => {
        expect(some).toBeDefined();
    })

    test('shoud return false', () => {
        expect(some([{id:1}, {id:2}], item => item.some)).toBe(false);
    })

    test('shoud return true', () => {
        expect(some([{id:1}, {some:2}], item => item.id)).toBe(true);
    })

    test('array was empty shoud return false', () => {
        expect(some([], item => item)).toBe(false);
    });

    test('if first argument is not array retur throw new error', () => {
        expect(() => {
            some('sadasd', item => item)
        }).toThrow('Shoud be array');
    });

})
