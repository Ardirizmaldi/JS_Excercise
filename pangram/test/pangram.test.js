const {
    Pangram,
    PangramSet,
    PangramEvery
} = require('../pangram')

test('Check if its pangram sentence', () => {
    var pangram = new Pangram('abcdefghijklmnopqrstuvwxyz');
    expect(pangram.isPangram()).toBe(true);
});

test('Check if its pangram sentence', () => {
    var pangram = new Pangram('a quick movement of the enemy will jeopardize five gunboats');
    expect(pangram.isPangram()).toBe(false);
});

test('Check if its pangram sentence', () => {
    var pangram = new Pangram('Pack my box with five dozen liquor jugs');
    expect(pangram.isPangram()).toBe(true);
});

test('Check if its pangram sentence', () => {
    var pangram = new Pangram('five boxing wizards jump quickly at it');
    expect(pangram.isPangram()).toBe(false);
});