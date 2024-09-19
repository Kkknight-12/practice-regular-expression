/*
 * range: [a-z] - matches any lowercase letter from a to z
 * range: [A-Z] - matches any uppercase letter from A to Z
 * range: [0-9] - matches any digit from 0 to 9
 * range: [a-zA-Z] - matches any letter from a to z or A to Z
 * range: [a-zA-Z0-9] - matches any letter from a to z, A to Z, or digit from 0 to 9
 * range: [a-z0-9] - matches any lowercase letter from a to z or digit from 0 to 9
 * range: [A-Z0-9] - matches any uppercase letter from A to Z or digit from 0 to 9
 */

const str_a = ['joo', 'boo', 'koo', 'loo', 'woo', 'moo', 'zoo', 'coo'];
// we need j/k/l/m + oo strings
const regex_a = /[j-m]oo/;
console.log(str_a.filter((s) => s.match(regex_a)));
// [ 'joo', 'koo', 'loo', 'moo' ]
// EXERCISE

// now we want to match j/k/l/m/z + o + o
const regex_b = /[j-mz]oo/;
console.log(str_a.filter((s) => s.match(regex_b)));
// [ 'joo', 'koo', 'loo', 'moo', 'zoo' ]

// ---------------------------------------------------------------------------

const str_b = ['joo', 'boo', 'Koo', 'Loo', 'woo', 'moo', 'zoo', 'coo'];
// we need j/K/L/m/z + oo strings
const regex_c = /[j-mJ-Mz]oo/;
console.log(str_b.filter((s) => s.match(regex_c)));
// [ 'joo', 'Koo', 'Loo', 'moo', 'zoo' ]
// from j to m, J to M, z

// ---------------------------------------------------------------------------

/*
 * Write a regular expression that matches any 3-digit hexadecimal
 * number with all 3 digits being the same. For example, it should
 * match "000", "111", "999", but not "001", "010", "100", "110",
 * "101", or "011".
 * */
const str_c = [
  '000',
  '111',
  '999',
  '001',
  '010',
  '100',
  '110',
  '101',
  '011',
  'aer9999123',
  'qwe1ccc00',
];

const regex_d = /([0-9a-f])\1\1/i;
console.log(str_c.filter((s) => s.match(regex_d)));
// [ '000', '111', '999', 'aer9999123', 'qwe1ccc00 ]
// aer9999123 and qwe1ccc00 is also matched because
// it has 999 and ccc in string which match pattern;

// match only 3 digits
const regex_e = /^([0-9a-f])\1\1$/i;
console.log(str_c.filter((s) => s.match(regex_e)));
// [ '000', '111', '999' ]

// ---------------------------------------------------------------------------
/*
 * Character class shorthands are a useful way to specify commonly
 * used character classes. They are defined using a backslash \,
 * followed by a letter that specifies the character class. Here
 * are the most commonly used shorthands:
 *
 * \d matches any digit
 * \D matches any non-digit
 * \w matches any alphanumeric character
 * \W matches any non-alphanumeric character
 * \s matches any whitespace character
 * \S matches any non-whitespace character
 *
 * For example, \d would match any digit, \w would match any
 * alphanumeric character, and \s would match any whitespace
 * character. Here's an example of how you might use a character
 * class shorthand in a regular expression:
 * */

// find the string that have at least 3 digits
//                                     false                 false
const samples1 = ['123', '456', '789', '12', '1234', '12345', '2'];
const regex_f = /\d{3}/; // Matches any 3-digit number
console.log(samples1.filter((s) => s.match(regex_f)));
// [ '123', '456', '789', '1234', '12345' ]

/*
 * In this example, the regular expression will match strings like
 * "123", "456", "789", but not "12", "1234", or "12345".
 * */

// ---------------------------------------------------------------------------

/*
 * match any character that is immediately followed by the
 * same character. Here's a breakdown.
 *
 * (.): This is a capturing group that matches any character.
 *
 * \1: This is a backreference to the first (and only) capturing
 * group in the regular expression. It matches the exact same character
 * that was matched by the capturing group.
 */
const sample3 = ['11', 'eeqwe', '44123', '123'];
const regex_g = /(.)\1/i;
console.log(sample3.filter((s) => s.match(regex_g)));
// [ '11', 'eeqwe', '44123' ]

// EXERCISE
/*
 * Write a regular expression that matches any 3-digit number
 * followed by a whitespace character. For example, it should
 * match "123 ", "456 ", "789 ", but not "1234 ", "12345 ",
 * or "123456 ".
 * */

const sample4 = [
  '123 ',
  '456 ',
  '789 ',
  '1234 ',
  '12345 ',
  '123456 ',
  '1234 abc',
  'abc 123 def',
  '123 abc',
];
// start with 3 digits followed by whitespace
const regex_h = /^\d{3}\s/;
console.log(sample4.filter((s) => s.match(regex_h)));
// [ '123 ', '456 ', '789 ', '123 abc' ]

const regex_i = /\b\d{3}\b /;
console.log(sample4.filter((s) => s.match(regex_i)));
// ['123 ', '456 ', '789 ', 'abc 123 def', '123 abc'];
