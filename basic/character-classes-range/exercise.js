// EXERCISE

/*
* Write a regular expression that matches any 3-digit hexadecimal
* number with all 3 digits being the same. For example, it should
* match "000", "111", "999", but not "001", "010", "100", "110",
* "101", or "011".
*  */

const regex = /([0-9a-f])\1\1/i; // Matches "000", "111", "999", but not "001", "010", "100", "110", "101", or "011"

// Path: basic/character-classes-shorthand/index.js
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
*  */

const regex = /\d{3}/; // Matches any 3-digit number

/*
* In this example, the regular expression will match strings like
* "123", "456", "789", but not "12", "1234", or "12345".
*  */

// EXERCISE
/*
* Write a regular expression that matches any 3-digit number
* followed by a whitespace character. For example, it should
* match "123 ", "456 ", "789 ", but not "1234 ", "12345 ",
* or "123456 ".
*  */