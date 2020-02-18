const square = require('../simple')
test ('Give 0 should return not natural number', () => {
  expect(square(0)).toBe('0 is not natural number');
});

test ('Give -1 should return not natural number', () => {
  expect(square(-1)).toBe('-1 is not natural number');
});

test ('sum of square 1', () => {
  expect(square(1)).toBe(1);
});

test ('sum of square 2', () => {
  expect(square(2)).toBe(5);
});

test ('sum of square 100000', () => {
  expect(square(100000)).toBe(333338333350000);
});
