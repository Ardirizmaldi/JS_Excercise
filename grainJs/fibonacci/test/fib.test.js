const fibonacci = require('../fibonacci')

test('Give 1 should return 1', () => {
    expect(fibonacci(1)).toBe(1);
});

test('Give 2 should return 1', () => {
    expect(fibonacci(2)).toBe(1);
});

test('Give 3 should return 2', () => {
    expect(fibonacci(3)).toBe(2);
});

test('Give 10 should return 55', () => {
    expect(fibonacci(10)).toBe(55);
});