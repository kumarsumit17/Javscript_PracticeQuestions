"use strict";
const cities = ["London", "NewsCastle", "Sunderland", "London", "NewsCastle", "Sunderland"];
// Remove the duplicates from the array.

const NonDuplicateCities = cities.reduce((list, city) => {
    if (!list.includes(city)) {
        list.push(city);
    }
    return list;
}, []);

console.log("Non Duplicates Array: " + NonDuplicateCities);
