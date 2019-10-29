import test from 'ava';
import fn from '.';

test('is function', t => {
  t.is(typeof fn, 'function');
});

test('returns correct result', t => {
  t.is(fn(), 'Foo');
});
