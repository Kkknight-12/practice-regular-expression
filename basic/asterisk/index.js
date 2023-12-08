/**
 * In regular expressions, the asterisk (*) is a
 * quantifier that specifies that the preceding
 * character or group can occur zero or more times.
 * It is used to match patterns that have varying lengths.
 *
 * Here are a few key points about the asterisk in regular expressions:
 *
 * Zero or more occurrences: The asterisk allows
 * for zero or more occurrences of the preceding
 * character or group. For example, the pattern
 * "ab*c" would match "ac", "abc", "abbc", "abbbc",
 * and so on.
 *
 * Greedy matching: By default, the asterisk performs
 * greedy matching, which means it will match as many
 * occurrences as possible. For example, the pattern
 * "a.*b" would match "ab", "a123b", "a1b2b", and so on.
 *
 * Lazy matching: If you want to perform lazy matching,
 * you can use the question mark (?) after the asterisk.
 * This will match as few occurrences as possible.
 * For example, the pattern "a.*?b" would match
 * "ab", "a1b", "a1b2b", and so on.
 *
 * Escaping special characters: If you want to match
 * the asterisk character itself, you need to escape
 * it with a backslash (\). For example, to match the
 * literal asterisk, you would use the pattern "\*".
 *
 * Here's an example to illustrate the usage of the
 * asterisk in a regular expression:
 *
 * const pattern = /a.*b/;
 * const string = "a123b456b";
 * const match = string.match(pattern);
 * console.log(match); // Output: ["a123b456b"]
 *
 * In this example, the pattern "a.*b" matches the
 * entire string "a123b456b" because the asterisk
 * allows for zero or more occurrences of any
 * character between "a" and "b".
 */

// (.*) zero or more occurrences of any character
const str = ["fooabar", "fooxbar", "foocbar", "baryfoo", "foobar", "fooxybar"]
// start with foo and end with bar
const regex = /foo.*bar/

function printMatchingStrings(str) {
  str.forEach((s) => {
    if (regex.test(s)) {
      console.log(s)
    }
  })
}

printMatchingStrings(str)

// const pattern = /a.*b/
// const string = "a123b456b"
// const match = string.match(pattern)
// console.log(match) // Output: ["a123b456b"]
