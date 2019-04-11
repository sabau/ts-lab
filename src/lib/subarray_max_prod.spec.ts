// tslint:disable:no-expression-statement
import test from 'ava';
import { maxProduct} from './subarray_max_prod';

test('same', t => {
  t.is(maxProduct([-2]), -2);
});

test('power', t => {
  t.is(maxProduct([-2, 1, 2, 3, -5]), -2);
});
