
/*
* parentheses () are used for grouping and capturing.
* Grouping allows you to apply regex operators to entire groups
* of characters, while capturing allows you to match the same text
* as previously matched by a capturing group.
*  */

// example 1
const str = ['ha', 'haha', '', 'hahaha', 'hahahaha', 'hahahahaha', 'hahahahahaha', 'h']


// Match 'ha' repeated at least 4 times
const regex = /(ha){4,}/
console.log(str.filter(s => regex.test(s)))
// [ 'hahahaha', 'hahahahaha', 'hahahahahaha' ]

// example 2

// match string in which ha can come at most 2 times
// ha must come alteast once
const regex2 = /^(ha){1,2}$/
console.log(str.filter(s => regex2.test(s)))
// [ 'ha', 'haha' ]