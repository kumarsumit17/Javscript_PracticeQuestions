"use strict";
// Write a function that takes two strings (a and b) as arguments. If a contains b, append b to the beginning of a. If not, append it to the end. Return the concatenation

const { ConnectCases } = require("aws-sdk");

function myFunction(a, b) {
    return a.includes(b) ? b + a : a + b;
}

function myFunction1(a, b) {
    return a.indexOf(b) === -1 ? a + b : b + a;
    // here indexOf returns -1 if b is not found in a.
}

// Test Cases:
// myFunction('cheese', 'cake')
// Expected
// 'cheesecake'
// myFunction('lips', 's')
// Expected
// 'slips'
// myFunction('Java', 'script')
// Expected
// 'Javascript'
// myFunction(' think, therefore I am', 'I')
// Expected
// 'I think, therefore I am'

console.log(myFunction("cheese", "cake"));
console.log(myFunction1("cheese", "cake"));
