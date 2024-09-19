const str = [
  'foo bar',
  'foo bar',
  'foobar',
  'foo    bar',
  'fooxbar',
  'fooxybar',
];

// (\s) represents whitespace
// (\s*) zero or more occurrences of whitespace
const regex = /foo\s*bar/;

console.log(str.filter((s) => regex.test(s)));
// [ 'foo bar', 'foo bar', 'foobar', 'foo    bar' ]