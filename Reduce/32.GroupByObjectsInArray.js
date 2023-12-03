"use strict";
const list = [
    { id: 111, price: 300, rating: 4.7 },
    { id: 222, price: 300, rating: 4.6 },
    { id: 333, price: 200, rating: 4.6 },
    { id: 444, price: 200, rating: 4.7 },
    { id: 555, price: 95 }
];

// Write a function to groupBy items in Array using rating or price.
function groupBy(list, prop) {
    // First check if the list is an array or not, if not return the Array.
    if (!Array.isArray(list)) {
        return "Illegal Value";
    }

    return list.reduce((result, item) => {
        const key = item[prop];
        console.log("Key: " + key);
        if (!result[key]) result[key] = [];
        result[key].push(item);
        return result;
    }, {});
}

console.log(groupBy(list, "rating"));
