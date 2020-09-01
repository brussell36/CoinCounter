import { amountToCoins } from './../src/coin-counter.js';

// describe("amountToCoins", () => {

test('verifies that amountToCoins returns quarters', function() {
  expect(amountToCoins(46, [25, 10, 5, 1])).toEqual([25, 10, 10, 1]);
});
