const {calculate, total} = require('../simple');

test('invalid input', () => {
    expect(calculate(-1)).toBe('-1 not square on the chess board');
});

test('invalid input', () => {
    expect(calculate(0)).toBe('0 not square on the chess board');
});

test('invalid input', () => {
    expect(calculate(32)).toBe(BigInt(2147483648n));
});

test('invalid input', () => {
    expect(calculate(65)).toBe('65 not square on the chess board');
});

// TOTAL
test('called total should return', () => {
    expect(total()).toBe(18446744073709551615n);
});