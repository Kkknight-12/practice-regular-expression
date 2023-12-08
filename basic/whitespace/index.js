const str = [
  "foo bar",
  "foo bar",
  "foobar",
  "foo    bar",
  "fooxbar",
  "fooxybar",
]

// (\s) represents whitespace
// (\s*) zero or more occurrences of whitespace
const regex = /foo\s*bar/

function printMatchingStrings(str) {
  str.forEach((s) => {
    if (regex.test(s)) {
      console.log(s)
    }
  })
}

printMatchingStrings(str)
