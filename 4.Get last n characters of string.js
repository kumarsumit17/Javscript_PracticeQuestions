"use strict";

// Write a function that takes a string as argument. Extract the last 3 characters from the string. Return the result

function myFunction(str) {
    return str.slice(-3);
    // The -ve negative indexing starts from -1, so till -3 we will have the last 3 characters.
}

function myFunction1(str) {
    return str.substring(str.length - 3);
    // str.length-3 will give the index of last 3rd element, if we start from that index, we will get the last 3 characters.
}

// myFunction("abcdefg");
// Expected;
// ("efg");
// myFunction("1234");
// Expected;
// ("234");
// myFunction("fgedcba");
// Expected;
// ("cba");

console.log(myFunction1("abcdefg"));
