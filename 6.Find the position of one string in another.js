"use strict";

// Write a function that takes a string as argument. The string contains the substring 'is'. Return the index of 'is'.

function myFunction(a) {
    return a.indexOf("is");
}

// Test Cases:
//
// myFunction("praise")
// Expected
// 3
// myFunction("risky")
// Expected
// 1
// myFunction("paris")
// Expected
// 3

console.log(myFunction("paris")); //3
