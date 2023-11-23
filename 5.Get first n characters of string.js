"use strict";

// Write a function that takes a string (a) as argument. Get the first 3 characters of a. Return the result

function myFunction(a) {
    return a.substring(0, 3);
}

function myFunction1(a) {
    return a.slice(0, 3);
}

/**
 * Both the substring and slice exclude the last index in an array or string.
 */

// myFunction("abcdefg");
// Expected;
// ("abc");
// myFunction("1234");
// Expected;
// ("123");
// myFunction("fgedcba");
// Expected;
// ("fge");

console.log(myFunction1("abcdefg")); // abc
console.log(myFunction("abcdefg")); // abc
