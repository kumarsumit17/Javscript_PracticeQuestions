"use strict";
// Write a function that takes an array of numbers as argument. It should return the average of the numbers.

function myFunction(arr) {
    const length = arr.length;
    const arrSum = arr.reduce((acc, curr) => acc + curr, 0);
    return arrSum / length;
}

// Test Cases:
// Attempted: 41350
// Solved: 15348
// myFunction([10,100,40])
// Expected
// 50
// myFunction([10,100,1000])
// Expected
// 370
// myFunction([-50,0,50,200])
// Expected
// 50

console.log(myFunction([10, 100, 1000]));
// output: 370
