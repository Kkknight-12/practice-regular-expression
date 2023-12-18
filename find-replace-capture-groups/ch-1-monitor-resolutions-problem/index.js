/*
* */

const str = ['1280x720', '1920x1600', '1024x768', '3840x2160', '99x99']

const regex = /(\d+)x(\d+)/
// find all matches and replace x with pix by and add pix at the end
const result = str.map((item) => item.replace(regex, '$1 pix by $2 pix'))
console.log(result)

/*
* const regex = /(\d+)x(\d+)/g: This line declares a regular expression that
* matches any string that contains one or more digits (\d+), followed by
* the character 'x', followed by one or more digits. The parentheses are
* used to create capture groups, which can be used later in the replacement.
*
* const result = str.map((item) => item.replace(regex, '$1 pix by $2 pix')):
* This line uses the map function to create a new array where each element
* is the result of applying a function to each element of the original array.
* The function takes a string from the original array, uses the replace method
* to replace each match of the regular expression with a new string.
*
* The new string is '$1 pix by $2 pix', where '$1' and '$2' are placeholders
* that get replaced by the first and second capture groups from the regular
* expression, i.e., the width and height of the resolution.
*  */