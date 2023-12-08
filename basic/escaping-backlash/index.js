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