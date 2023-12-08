/*
* A character class in regular expressions is a set of characters enclosed in
* square brackets []. It makes the regular expression match any single character
* within the set. For example, the character class [abc] will match any single
* character that is either 'a', 'b', or 'c'.  Here are some examples of character classes:
*
* [abc] matches 'a', 'b', or 'c'.
* [a-z] matches any lowercase letter.
* [A-Z] matches any uppercase letter.
* [0-9] matches any digit.
* [a-zA-Z0-9] matches any alphanumeric character.
*
* You can also use a caret ^ at the start of a character class to invert it.
* For example, [^abc] matches any character that is not 'a', 'b', or 'c'.
* */

const str = ['foo', 'moo', 'coo', 'boo', 'doo', 'loo', 'hoo']

// letter f or c or l followed by oo
const regex = /[fcl]oo/g // letter don't have space or commma
console.log(str.filter(s => s.match(regex))) // [ 'foo', 'coo', 'loo' ]

// all letters except f or c or l followed by oo
const regx2 = /[^flc]oo/g
console.log(str.filter(s => s.match(regx2))) // [ 'moo', 'boo', 'doo', 'hoo' ]




