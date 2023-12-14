

const items = [834, 519, 645, 4874, 5, 89, 45687, 25];

// match elements that are only 3 digits
const regex = /^[0-9][0-9][0-9]$/;
console.log(items.filter(item => regex.test(item.toString())));


// we can match the required result with above regex but it is not a good practice
// instead we can use curly braces repeater

// const regex2 = /^[0-9]{3}$/;
const regex2 =/^\d{3}$/; // d is for digit and 3 is for 3 times
console.log(items.filter(item => regex2.test(item.toString())));


// example 2
const names = ['john', 'jane', 'jim', 'jessica', 'jennifer', 'joseph'];

// match names that are only 4 to 6 characters long
const regex3 =/^[a-z]{4,6}$/;
console.log(names.filter(name => regex3.test(name)));