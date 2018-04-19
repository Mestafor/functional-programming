module.exports = Maybe = value => ({
        map: fn => Maybe(fn(value)),
        ap: mfn => Maybe(mfn.fold(value)),
        fold: fn => fn(value)
});

Maybe.of = value => Maybe(value);
