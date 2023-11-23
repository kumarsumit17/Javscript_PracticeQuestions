"use strict";

// Write a function that takes a string (a) as argument. Remove the last 3 characters of a. Return the result

function myFunction(a) {
    return a.slice(0, -3);
}

function myFunction1(a) {
    return a.substring(0, a.length - 3);
}

// Test Cases:

// myFunction("abcdefg");
// Expected;
// ("abcd");
// myFunction("1234");
// Expected;
// ("1");
// myFunction("fgedcba");
// Expected;
// ("fged");

console.log(myFunction1("fgedcba"));
