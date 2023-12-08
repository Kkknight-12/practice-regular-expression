/*
* In regular expressions, a character class range is a way
* of specifying a range of characters that you want to match.
* It is defined using square brackets [] with a hyphen - between
* two characters. The range will include all characters from the
* first character to the second character, inclusive.
*
* For example, [a-z] will match any lowercase letter, [A-Z] will
* match any uppercase letter, and [0-9] will match any digit. You
* can also combine ranges, like [a-zA-Z] to match any letter
* regardless of case, or [a-zA-Z0-9] to match any alphanumeric
* character. Here's an example of how you might use a character
* class range in a regular expression:
*  */

const regex1 = /[a-z]oo/; // Matches any three-letter string ending with
// "oo", where the first letter is any lowercase letter

/*
* In this example, the regular expression will match strings like
* "boo", "coo", "doo", etc., but not "Boo" or "1oo".
*  */

// Example 1
const str =  ['joo', 'koo', 'loo', 'moo', 'zoo', 'boo', 'woo', 'coo'];
// Starts with a letter from 'j' to 'm' or 'z'.
// Followed by 'oo'.
const regex2 = /^[j-mz]oo/;

const filteredStr = str.filter((item) => regex2.test(item));
console.log(filteredStr); // ['joo', 'koo', 'loo', 'moo', 'zoo']

// Example 2
const str2 =  ['joo', 'Koo', 'Loo', 'moo', 'zoo', 'boo', 'woo', 'coo'];
// Starts with a letter from 'j' to 'm' or 'J' to 'M' or 'z'.
// Followed by 'oo'.
const regex3 = /^[j-mJ-Mz]oo/;

const filteredStr2 = str2.filter((item) => regex3.test(item));
console.log(filteredStr2); // ['joo', 'Koo', 'Loo', 'moo', 'zoo']