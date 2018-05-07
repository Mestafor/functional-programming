module.exports = Maybe = x => ({
        ap: b2 => b2.map(x),
        chain: f => f(x),
        map: f => Maybe(f(x)),
        fold: f => f(x),
        inspect: () => `Map(${x})`,
        equals: maybe => maybe.fold(x => x) === x
});

Maybe.of = value => Maybe(value);
