/*
* plus repeater
*  */

const str = ['fooaaabar', 'fooabar', 'foobar', 'fooaaabar', 'fooxxbar']

// we want to match string that starts with foo then have
// atlease one a and then bar
const regex = /fooa+bar/
console.log(str.filter(s =>regex.test(s))) // [ 'fooaaabar', 'fooaaabar' ]