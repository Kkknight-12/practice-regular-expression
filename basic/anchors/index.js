/*
 * (^) caret matches the beginning of the input string
 * ($) dollar sign matches the end of the input string
 * */

// example 1
const str = ['foo  bar baz', 'foo baz bar', 'bar baz foo', 'bar foo baz', 'baz foo bar', 'baz bar foo']

// match strings that start with foo
const regex = /^foo.*/
// (^foo) matches strings that start with foo
// (.*) matches any character zero or more times
console.log(str.filter(s => regex.test(s)))
// [ 'foo  bar baz', 'foo baz bar' ]


// example 2
const str2 = ['foo  bar baz', 'foo baz bar', 'bar baz foo', 'bar foo baz', 'baz foo bar', 'baz bar foo']

// match strings that end with bar
const regex2 = /.*bar$/
// (.*) matches any character zero or more times
// ($bar) matches strings that end with bar
console.log(str2.filter(s => regex2.test(s)))
// [ 'foo baz bar', 'bar foo baz', 'baz bar foo' ]

// example 3
const str3 = ['foo', 'foo baz', 'foo baz foo', 'bar foo baz', ]

// match strings that start with foo and is followed by nothing
const regex3 = /^foo$/
// (^foo) matches strings that start with foo
// ($) matches the end of the input string
console.log(str3.filter(s => regex3.test(s)))
// [ 'foo' ]