import test from 'ava';
import fn from './';

test('expects a string', t => {
	t.throws(() => {
		fn([]);
	}, 'mailchimp-dc expected a string');
});

test('gets dc', t => {
	t.is(fn('0000000000000-dc12'), 'dc12');
});
