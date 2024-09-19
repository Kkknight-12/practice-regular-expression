/*
* In regular expression question mark (?)
* means the previous character is optional
* which means character can occur zero or one times.
* */


const str = ['https://website', 'http://website', 'httpss://website', 'httpxx://website', 'httpxx://website']

// we want zero or one 's' only in the string
// only match http or https should pass
const regex = /https?:\/\/website/
console.log(str.filter(s =>regex.test(s))) // [ 'https://website', 'http://website' ]