/*
* */

const str = ['1280x720', '1920x1600', '1024x768', '3840x2160', '99x99']

const regex = /(\d+)x(\d+)/
// \d  ->  matches any digit from 0 to 9
// \d is equivalent to the character class [0-9]
// +  ->  matches one or more of the preceding token
// x  ->  matches the character x literally
// () ->  create capturing group

// find all matches and replace x with pix by and add pix at the end
const result = str.map((item) => item.replace(regex, '$1 pix by $2 pix'))
console.log(result)
// $1 ->  first capturing group
// $2 ->  second capturing group

/*
* [
*  '1280 pix by 720 pix',
*  '1920 pix by 1600 pix',
*  '1024 pix by 768 pix',
*  '3840 pix by 2160 pix',
*  '99 pix by 99 pix'
* ]
* */