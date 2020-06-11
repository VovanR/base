const test = require('ava');
const fn = require('.');

test('is function', t => {
  t.is(typeof fn, 'function');
});

test('returns correct result', t => {
  t.is(fn(), 'Foo');
});
