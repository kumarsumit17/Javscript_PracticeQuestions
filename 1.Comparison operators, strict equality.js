"use strict";
// Write a function that takes two values, say a and b, as arguments. Return true if the two values are equal and of the same type

function myFunction(a, b) {
    return a === b;
}

// Note: == checks only for value and === checks for both the type and the value.

// Test Cases:
// myFunction(2, 3);
// Expected;
// false;
// myFunction(3, 3);
// Expected;
// true;
// myFunction(1, "1");
// Expected;
// false;
// myFunction("10", "10");
// Expected;
// true;
