/*
 * pipe operator in regular expression is used to match one of
 * many expressions
*  */

const str = ['sapwood', 'rosewood', 'logwood', 'teakwood', 'plywood', 'redwood']

// i want to match logwood and plywood only
// both the words should end with wood
// there is nothing common in log and ply
// so we will use pipe
const regex = /^(log|ply)wood$/
console.log(str.filter(s =>regex.test(s))) // [ 'logwood', 'plywood' ]

/*
* The given regular expression const regex = /^(log|ply)wood$/ is
* used to match specific patterns in a string. Here's a breakdown
* of what each part does:
*
* ^ : This symbol is used to start the match at the beginning of
* the string.
*
* (log|ply): This is a group that will match either "log" or "ply".
*
* The pipe | symbol is used as a logical OR operator.
*
* wood: This will match the exact string "wood".
*
* $ : This symbol is used to end the match at the end of the string.
*
* So, this regular expression will match any string that starts with
* either "log" or "ply" and ends with "wood". It will not match any
* string that contains additional characters before "log" or "ply",
* after "wood", or between "log"/"ply" and "wood".
*  */