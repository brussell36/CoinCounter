import { amountToCoins } from './../src/coin-counter.js';

test('verifies that amountToCoins returns quarters', function() {
  expect(amountToCoins(46, [25, 10, 5, 1])).toEqual([25, 10, 10, 1]);
});