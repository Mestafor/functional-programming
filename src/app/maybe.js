module.exports = Maybe = value => ({
  map: fn => Maybe(fn(value)),
  ap: mfn => mfn.map(value),
  fold: fn => fn(value)
});

Maybe.of = value => Maybe(value);
