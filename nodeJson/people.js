const people = require('./people.json');

// Part 1
const userOlder24 = function () {
    return people.filter((p) => {
        return p.age > 24;
    });
};

//Part 2
const totalAge = function () {
    let total = people.reduce(function (total, user) {
        return total + user.age;
    }, 0);
    return total;
};

//Part 3
const listFemale = function () {
    var listF = [];
    return people.filter((p) => {
        return p.gender == 'f';
    }).concat(listF);
};

//Part 4
const listUSAuser = function () {
    var listUser = [];
    return people.filter((p) => {
        return p.us == true;
    }).concat(listUser.sort());
};

//Part 5
const sortAgeUser = function () {
    return people.sort((a, b) => Number(a.age) - Number(b.age));
}

//Part 6
const maleUser25 = function () {
    var maleUser = people.filter((p) => {
        return p.gender == "m" && p.age < 25;
    });
    
    let totalAge = maleUser.reduce(function (total, user) {
        return total + user.age;
    }, 0);
    return totalAge;
};

//Part 7
const maleUserOver30 = function () {
    var maleCoderOver30 = [];
    return people.filter((p) => {
        return p.gender == "m" && p.age > 30;
    }).concat(maleCoderOver30);
};


//Part 8
const totalAgeCountry = function () {
    let coutryUser = people.filter((p) => {
        return p.location == "las vegas" || p.location == "new york" || p.location == "texas";
    });

    let totalAge = coutryUser.reduce(function (total, user) {
        return total + user.age;
    }, 0);
    return totalAge;
};

module.exports = {
    userOlder24,
    totalAge,
    listFemale,
    listUSAuser,
    sortAgeUser,
    maleUser25,
    maleUserOver30,
    totalAgeCountry
};