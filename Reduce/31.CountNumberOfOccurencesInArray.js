"use strict";
const cities = ["Durham", "London", "Newscastle", "Durham", "London", "Newscastle", "Dallas", "Durham", "London", "Newscastle", "Dallas"];
// city name: no of occurrences {"London": 4}

// 1st Approach
// const result = {};
// for (const elm of cities) {
//     if (elm in result) {
//         result[elm]++;
//     } else {
//         result[elm] = 1;
//     }
// }

//2nd Approach
const result = cities.reduce((result, city) => {
    if (city in result) result[city]++;
    else result[city] = 1;
    return result;
}, {});

console.log("City with no of occurences: " + JSON.stringify(result));
