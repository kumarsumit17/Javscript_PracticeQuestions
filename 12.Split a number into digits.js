"use strict";
// Split a number into its digits
// Write a function that takes a number (a) as argument. Split a into its individual digits and return them in an array. Hint: you might want to change the type of the number for the splitting

function myFunction(a) {
    // First we convery a which is a number into string and then split it into array of strings, and then when we have a string array, we use map to convert every string into an array.
    return a.toString().split("").map(Number);
}

// Test Cases:
// Attempted: 119435
// Solved: 20093
// myFunction(10)
// Expected
// [1,0]
// myFunction(931)
// Expected
// [9,3,1]
// myFunction(193278)
// Expected
// [1,9,3,2,7,8]

console.log(myFunction(2013456));
//Output:
// [2, 0, 1, 3, 4, 5, 6];
