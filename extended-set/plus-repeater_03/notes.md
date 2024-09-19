
## Plus Repeater
`+` -> **1 or more occurrences** of the preceding item

1. **Purpose**:
    - The code filters an array of strings to find those that match a specific pattern.

2. **Pattern Explanation**:
    - The pattern to match is a string that:
        - Starts with "foo"
        - Followed by at least one "a"
        - Ends with "bar"

3. **Components**:
    - **Array of Strings**: 
   ```javascript
    const str = ['fooaaabar', 'fooabar', 'foobar', 'fooaaabar', 'fooxxbar']
   ```
    - **Regular Expression**: 
   ``` javascript
   const regex = /fooa+bar/
   ```
    - `foo`: Matches the literal string "foo"
    - `a+`: Matches one or more occurrences of "a"
    - `bar`: Matches the literal string "bar" 

4. **Filtering Logic**:
    - The `filter` method is used to iterate over the array and apply the regular expression test.
   
    ``` javascript
    str.filter(s => regex.test(s))
    ```
    - `s` represents each string in the array.
    - `regex.test(s)` checks if the string `s` matches the pattern defined by `regex`.

5. **Output**:
    - The code logs the filtered array to the console.
    - Result: `[ 'fooaaabar', 'fooaaabar' ]`

### Example Usage

```javascript
const str = ['fooaaabar', 'fooabar', 'foobar', 'fooaaabar', 'fooxxbar'];
const regex = /fooa+bar/;
console.log(str.filter(s => regex.test(s))); // Output: [ 'fooaaabar', 'fooaaabar' ]
```