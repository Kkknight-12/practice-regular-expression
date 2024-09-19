### Regular Expressions and Optional Characters

- **Question Mark (?) in Regular Expressions**:
    - The question mark `?` makes the preceding character optional.
    - This means the character can appear zero or one time.

### Example Code Explanation

- **String Array**:
  ```javascript
  const str = ['https://website', 'http://website', 'httpss://website', 'httpxx://website', 'httpxx://website']
  ```

- **Regular Expression**:
  ```javascript
  const regex = /https?:\/\/website/
  ```
    - This regex matches strings that start with `http` or `https` followed by `://website`.

- **Filtering Strings**:
  ```javascript
  console.log(str.filter(s => regex.test(s))) // [ 'https://website', 'http://website' ]
  ```
  
    - Output: `[ 'https://website', 'http://website' ]`