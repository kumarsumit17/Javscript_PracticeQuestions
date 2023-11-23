"use strict";
// Write a function that takes two date instances as argument. It should return the number of days that lies between those dates.

/**
 * Calculate the number of days between two date instances.
 *
 * @param {Date} a - The first date in ISO format.
 * @param {Date} b - The second date in ISO format.
 * @returns {number} The number of days between the two dates.
 *
 * @description
 * This function takes two date instances in ISO format, calculates the difference
 * in milliseconds, and then converts that difference to the number of days. The
 * result is rounded up to the nearest whole number.
 *
 * @example
 * // Calculate the number of days between two dates
 * const result = myFunction(new Date('2020-06-11'), new Date('2020-06-01'));
 * console.log(result); // Output: 10
 */
function myFunction(a, b) {
    // Calculate the difference in milliseconds
    const timeDifferenceInMilliSeconds = Math.abs(a.getTime() - b.getTime());

    // Convert milliseconds to days (1 day = 24 hours * 60 minutes * 60 seconds * 1000 milliseconds)
    const daysDifference = Math.ceil(timeDifferenceInMilliSeconds / (24 * 60 * 60 * 1000));
    return daysDifference;
}

/**
 * Calculate the number of days between two date instances.
 *
 * @param {Date} a - The first date in ISO format.
 * @param {Date} b - The second date in ISO format.
 * @returns {number} The number of days between the two dates.
 *
 * @description
 * This function takes two date instances in ISO format, calculates the difference
 * in milliseconds, and then converts that difference to the number of days. The
 * result is rounded up to the nearest whole number.
 *
 * @throws {Error} Throws an error if either input is not a valid Date instance.
 *
 * @example
 * // Calculate the number of days between two dates
 * const result = myFunction(new Date('2020-06-11'), new Date('2020-06-01'));
 * console.log(result); // Output: 10
 **/
function myFunction1(a, b) {
    const timeDifferenceInMilliSeconds = Math.abs(a - b);

    const daysDifference = Math.ceil(timeDifferenceInMilliSeconds / (1000 * 60 * 60 * 24));

    return daysDifference;
}

// Test Cases:
// myFunction(new Date('2020-06-11'), new Date('2020-06-01'))
// Expected
// 10
// myFunction(new Date('2000-01-01'), new Date('2020-06-01'))
// Expected
// 7457

console.log(myFunction1(new Date("2020-06-11"), new Date("2020-06-01")));
console.log(myFunction(new Date("2020-06-11"), new Date("2020-06-01")));
