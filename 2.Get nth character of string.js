"use strict";
// Write a function that takes a string (a) and a number (n) as argument. Return the nth character of 'a'.

function myFunction(a, n) {
    return a[n - 1];
    // we can also do a.charAt(n-1)
}

// TestCase:
//
// myFunction("abcd", 1);
// Expected;
// ("a");
// myFunction("zyxbwpl", 5);
// Expected;
// ("w");
// myFunction("gfedcba", 3);
// Expected;
// ("e");
