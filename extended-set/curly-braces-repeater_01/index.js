const items = [834, 519, 645, 4874, 5, 89, 45687, 25];

// match elements that are only 3 digits
const regex_1 = /^[0-9][0-9][0-9]$/;
console.log(items.filter((item) => regex.test(item.toString())));

// -------------------------------------------------------------------------------

// we can match the required result with above regex but it is not a good practice
// instead we can use curly braces repeater

/*
 * Curly braces {} in regular expressions (regex) are used
 * as a repetition quantifier. They specify the number of times
 * a character or a group of characters should appear in the
 * input string. Here’s a breakdown of how they work:
 */

/*
 * Basic Syntax
 *
 * -> Exact Number of Times: {n}
 *    Matches exactly n occurrences of the preceding element.
 *    Example: \d{3} matches exactly three digits, like 123 or 456.
 *
 * -> Range of Times: {min,max}
 *    Matches between min and max occurrences of the preceding element.
 *    Example: \d{2,4} matches between two and four digits, like 12, 123, or 1234.
 *
 * -> At Least min Times: {min,}
 *    Matches at least min occurrences of the preceding element.
 *    Example: \d{2,} matches two or more digits, like 12, 123, or 12345.
 *
 * -> Up to max Times: {,max}
 *    Matches up to max occurrences of the preceding element.
 *    Example: \d{,3} matches up to three digits, like 1, 12, or 123.
 */

// Example
// Exact Match
const regex_2 = /^\d{3}$/;
console.log(regex_2.test('123')); // true
console.log(regex_2.test('12')); // false

// Range Match
const regex_3 = /^\d{2,4}$/;
console.log(regex_3.test('12')); // true
console.log(regex_3.test('123')); // true
console.log(regex_3.test('12345')); // false

// At Least min Times
const regex_4 = /^\d{2,}$/;
console.log(regex_4.test('12')); // true
console.log(regex_4.test('123')); // true
console.log(regex_4.test('1')); // false

// Up to max Times
const regex_5 = /^\d{,3}$/;
console.log(regex_5.test('1')); // true
console.log(regex_5.test('12')); // true
console.log(regex_5.test('1234')); // false

// Practical Use Case

// Example 1
// const regex2 = /^[0-9]{3}$/;
// This regex ensures that only items with exactly
// three digits are matched and filtered from the array.
const regex2 = /^\d{3}$/; // d is for digit and 3 is for 3 times
console.log(items.filter((item) => regex2.test(item.toString())));
// [ 834, 519, 645 ]

// Example 2
const names = ['john', 'jane', 'jim', 'jessica', 'jennifer', 'joseph'];

// match names that are only 4 to 6 characters long
const regex3 = /^[a-z]{4,6}$/;
console.log(names.filter((name) => regex3.test(name)));
