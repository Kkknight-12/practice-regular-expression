/**
 * The dot (.) in a regular expression matches any single character
 * except for a newline character.
 *
 * It is a wildcard character that can represent any
 * character in a string. The dot is often used when you
 * want to match any character in a specific position
 * within a pattern.
 *
 * For example, the pattern f.o will match strings
 * like "foo", "fao", "fbo", etc., where the dot
 * can be any character.
 *
 * However, it will not match strings like "fo\no"
 * because the dot does not match newline characters
 * by default.
 *
 * To match newline characters as well, you can use
 * the s flag or the [\s\S] pattern. The dot is a
 * powerful tool for pattern matching and can be
 * combined with other regular expression
 * metacharacters to create complex patterns.
 */

// string that can pass the test
// fooabar, fooxbar, foocbar

// string that can't pass the test
// baryfoo
// foobar
// fooxybar

//   test      pass      pass        pass       fail       fail       fail
const str = ["fooabar", "fooxbar", "foocbar", "baryfoo", "foobar", "fooxybar"]

// pattern
const regex = /foo.bar/

function printMatchingStrings(str) {
  str.forEach((s) => {
    if (regex.test(s)) {
      console.log(s)
    }
  })
}

printMatchingStrings(str)
// fooabar
// fooxbar
// foocbar
