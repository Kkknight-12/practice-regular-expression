/*
* (\) Escaping with backlash */


// Example 1
const str = ['xxx.yy', 'xx.yyyy' , 'x.yy', 'xy', 'xxyyy', 'yyxx']

// start with x and end with y
// count for number of x and y can very
// x and y are seperated by .

// . in regular expression means any character
// we need to escape it with \ to match only .
const reg =  /x*\.y*/g

const result = str.filter(item => item.match(reg))
console.log(result) // [ 'xxx.yy', 'xx.yyyy', 'x.yy' ]


// Example 2
const str2 = ['x#y', 'x:y', 'x.y', 'x&y', 'x%y']

// only # : . are allowed
const reg2 = /x[#:.]y/g
const result2 = str2.filter(item => item.match(reg2))
console.log(result2) // [ 'x#y', 'x:y', 'x.y' ]

// Example 3
const str3 = ['x#y', 'x:y', 'x^y', 'x&y', 'x%y']

// only # : ^ are allowed
// ^ inside [] means negation
// we need to escape it with \ to match only ^

const reg3 = /x[#:\^]y/g
const result3 = str3.filter(item => item.match(reg3))
console.log(result3) // [ 'x#y', 'x:y', 'x^y' ]


// Example 4
const str4 = ['x#y', `x\y`, 'x^y', 'x&y', 'x%y']

// only # \ ^ are allowed
// \ inside [] means escaping
// we need to escape it with \ to match only \

const reg4 = /x[#\\\^]y/g
const result4 = str4.filter(item => item.match(reg4))
console.log(result4) // [ 'x#y', 'x\y', 'x^y' ]

/*
* The output doesn't include 'x\y' because in JavaScript,
* the backslash () is an escape character. When you define
* a string with a backslash, like 'x\y', the backslash
* is not actually part of the string. It is trying to
* escape the character that follows it. In this case,
* 'y' is not a special character, so the backslash is ignored.
* Therefore, the string 'x\y' is actually just 'xy'.
*  */



// NOTE:
/*
 * if a period is within a character class ( [ ] square bracket ), it
 * does not need to be escaped.
 *
 * BUT
 * - (hyphen) needs to be escaped if it is not used to specify a
 * range
 * ^ (caret) needs to be escaped if it is not used to specify a
 * negated character class
*/