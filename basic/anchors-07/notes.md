### Regular Expressions in JavaScript

#### Basics

- **(^)**: Caret matches the beginning of the input string.
- **($)**: Dollar sign matches the end of the input string.

#### Example 1: Matching Strings that Start with "foo"

- **Array**:
  ```javascript
  const str = [
    'foo  bar baz',
    'foo baz bar',
    'bar baz foo',
    'bar foo baz',
    'baz foo bar',
    'baz bar foo',
  ];
  ```
- **Regex**: `/^foo.*/`
  - **(^foo)**: Matches strings that start with "foo".
  - **(.)**: Matches any single character except for a newline character.
  - **(\*)**: Preceding character or group can occur zero or more times.
  - **(.\*)**: Matches any character zero or more times.
- **Result**:
  ```javascript
  console.log(str.filter((s) => regex.test(s)));
  // Output: [ 'foo  bar baz', 'foo baz bar' ]
  ```

#### Example 2: Matching Strings that End with "bar"

- **Array**:
  ```javascript
  const str2 = [
    'foo  bar baz',
    'foo baz bar',
    'bar baz foo',
    'bar foo baz',
    'baz foo bar',
    'baz bar foo',
  ];
  ```
- **Regex**: `/.*bar$/`
  - **(.\*)**: Matches any character zero or more times.
  - **($bar)**: Matches strings that end with "bar".
- **Result**:
  ```javascript
  console.log(str2.filter((s) => regex2.test(s)));
  // Output: [ 'foo baz bar', 'bar foo bar' ]
  ```

#### Example 3: Matching Strings that Start and End with "foo"

- **Array**:
  ```javascript
  const str3 = ['foo', 'foo baz', 'foo baz foo', 'bar foo baz'];
  ```
- **Regex**: `/^foo$/`
  - **(^foo)**: Matches strings that start with "foo".
  - **($)**: Matches the end of the input string.
- **Result**:
  ```javascript
  console.log(str3.filter((s) => regex3.test(s)));
  // Output: [ 'foo' ]
  ```
