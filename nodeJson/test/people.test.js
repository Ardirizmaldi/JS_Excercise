const {
    userOlder24,
    totalAge,
    listFemale,
    listUSAuser,
    sortAgeUser,
    maleUser25,
    maleUserOver30,
    totalAgeCountry
} = require('../people');

//Part 1

test('Return all user older than 24', () => {
    expect(userOlder24().length).toBe(3);
});

//Part 2

test('Total age all user', () => {
    expect(totalAge()).toBe(202);
});

//Part 3
test('Total female user', () => {
    expect(listFemale().length).toBe(2);
});

//Part 4
test('Total usa user', () => {
    expect(listUSAuser().length).toBe(3);
});

//Part 5
test('Sort by age user', () => {
    expect(sortAgeUser().length).toBe(5);
});

//Part 6
test('Male user U-25', () => {
    expect(maleUser25()).toBe(23);
});

//Part 7
test('Male user Over 30', () => {
    expect(maleUserOver30().length).toBe(1);
});

//Part 8
test('Total age of in Texas, Newyork and las vegas', () => {
    expect(totalAgeCountry()).toBe(152);
});