"use strict";
// Write a function that takes a string (a) as argument. Remove the first 3 characters of a. Return the result

function myFunction(a) {
    return a.slice(3);
}

function myFunction1(a) {
    return a.substring(3);
}

// Test Cases:
// myFunction('abcdefg')
// Expected
// 'defg'
// myFunction('1234')
// Expected
// '4'
// myFunction('fgedcba')
// Expected
// 'dcba'

// console.log(myFunction1("abcdefg"));
