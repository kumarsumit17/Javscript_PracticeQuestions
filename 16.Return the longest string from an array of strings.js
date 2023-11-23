"use strict";
// Write a function that takes an array of strings as argument. Return the longest string.

function myFunction(arr) {
    // Here first we sort the array by its length, and take the first element
    return arr.sort((a, b) => b.length - a.length)[0];
}

function myFunction1(arr) {
    // here we initialize the longest with "", and compare it with current, if current.length is greater than longest, we assign current, if not we assign longest.
    return arr.reduce((longest, current) => (current.length > longest.length ? current : longest), "");
}

// Test Cases:

// myFunction(['help', 'me'])
// Expected
// 'help'
// myFunction(['I', 'need', 'candy'])
// Expected
// 'candy'

console.log(myFunction1(["I", "need", "candy"]));
