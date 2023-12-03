"use strict";
let products = [
    { id: 111, price: 100 },
    { id: 222, price: 80 },
    { id: 333, price: 80 },
    { id: 444, price: 150 },
    { id: 555, price: 150 },
    { id: 666, price: 90 },
    { id: 777, price: 120 },
    { id: 888, price: 60 },
    { id: 999, price: 200 }
];

// Concept: Sort this array with maximum price first.

// Sort: Sort array function in javascript sorts array in place and modifies the original array.

console.log("Products Array Before Sorting", JSON.stringify(products));
products.sort((a, b) => a.price - b.price);
console.log("Products Array After Sorting", JSON.stringify(products));
