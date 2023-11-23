"use strict";
// Write a function that takes an array of numbers as argument. It should return the sum of the numbers.

function myFunction(a) {
    return a.reduce((acc, curr) => acc + curr, 0);
}

// Test Cases:
// Attempted: 31154
// Solved: 12823
// myFunction([10,100,40])
// Expected
// 150
// myFunction([10,100,1000,1])
// Expected
// 1111
// myFunction([-50,0,50,200])
// Expected
// 200

console.log(myFunction([10, 100, 1000, 1]));
// output: 1111
