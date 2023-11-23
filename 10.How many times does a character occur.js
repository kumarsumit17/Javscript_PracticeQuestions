"use strict";
// Write a function that takes two strings (a and b) as arguments. Return the number of times a occurs in b.

function myFunction(a, b) {
    console.log(b.split(a));
    // Every time the sentence has a variable a, it breaks at that point, so the number will be length of Array - 1.
    return b.split(a).length - 1;
}

function myFunction2(sentence, character) {
    let count = 0;
    let index = sentence.indexOf(character);

    // Iterate until there are no more occurrences
    while (index !== -1) {
        count++;
        // Continue searching for the character from the next index
        index = sentence.indexOf(character, index + 1);
    }

    return count;
}

// Test Cases:
// myFunction('m', 'how many times does the character occur in this sentence?')
// Expected
// 2
// myFunction('h', 'how many times does the character occur in this sentence?')
// Expected
// 4
// myFunction('?', 'how many times does the character occur in this sentence?')
// Expected
// 1
// myFunction('z', 'how many times does the character occur in this sentence?')
// Expected
// 0

console.log(myFunction("m", "how many times does the character occur in this sentence?"));
// OUTPUT CODE:
// ["how ", "any ti", "es does the character occur in this sentence?"];
// 2;

console.log(myFunction2("how many times does the character occur in this sentence?", "h"));
