"use strict";
// Write a function that takes an array as argument. It should return true if all elements in the array are equal. It should return false otherwise.

function myFunction(arr) {
    // We loop through the array and check whether every element is equal to first element of array
    return arr.every(element => element === arr[0]);
}

function myFunction1(arr) {
    // We convert the array into a set and check the length of the set if it is 1, means all elements are equal
    return new Set(arr).size === 1;
}

// Test Cases:
// Attempted: 62973
// Solved: 14241
// myFunction([true, true, true, true])
// Expected
// true
// myFunction(['test', 'test', 'test'])
// Expected
// true
// myFunction([1,1,1,2])
// Expected
// false
// myFunction(['10',10,10,10])
// Expected
// false

console.log(myFunction1(["10", "11", "10"])); // false
