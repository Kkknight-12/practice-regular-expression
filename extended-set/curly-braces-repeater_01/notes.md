### JavaScript Regex Examples

#### Example 1: Filtering Items by Digit Length

1. **Initial Array**:

```javascript
const items = [834, 519, 645, 4874, 5, 89, 45687, 25];
```

2. **Goal**: Match elements that are only 3 digits long.
3. **Regex Pattern**:

```javascript
const regex = /^[0-9][0-9][0-9]$/;
```

- Explanation: Matches exactly three digits.

4. **Filter Operation**:

```javascript
items.filter((item) => regex.test(item.toString()));
```

- Converts each item to a string and tests against the regex.

5. **Improved Regex Pattern**:

```javascript
const regex2 = /^\d{3}$/;
```

- Explanation: `\d` matches any digit, `{3}` specifies exactly three times.

6. **Improved Filter Operation**:
   ```javascript
   items.filter((item) => regex2.test(item.toString()));
   ```
   - Result: `[834, 519, 645]`

Curly braces `{}` in regular expressions (regex) are used as a **repetition quantifier**. They specify the number of times a character or a group of characters should appear in the input string. Here's a breakdown of how they work:

### Basic Syntax
- **Exact Number of Times**: `{n}`
  - Matches exactly `n` occurrences of the preceding element.
  - Example: `\d{3}` matches exactly three digits, like `123` or `456`.

- **Range of Times**: `{min,max}`
  - Matches between `min` and `max` occurrences of the preceding element.
  - Example: `\d{2,4}` matches between two and four digits, like `12`, `123`, or `1234`.

- **At Least `min` Times**: `{min,}`
  - Matches at least `min` occurrences of the preceding element.
  - Example: `\d{2,}` matches two or more digits, like `12`, `123`, or `12345`.

- **Up to `max` Times**: `{,max}`
  - Matches up to `max` occurrences of the preceding element.
  - Example: `\d{,3}` matches up to three digits, like `1`, `12`, or `123`.

### Examples
1. **Exact Match**:
   ```javascript
   const regex = /^\d{3}$/;
   console.log(regex.test("123")); // true
   console.log(regex.test("12"));  // false
   ```

2. **Range Match**:
   ```javascript
   const regex = /^\d{2,4}$/;
   console.log(regex.test("12"));   // true
   console.log(regex.test("123"));  // true
   console.log(regex.test("12345"));// false
   ```

3. **At Least `min` Times**:
   ```javascript
   const regex = /^\d{2,}$/;
   console.log(regex.test("12"));   // true
   console.log(regex.test("123"));  // true
   console.log(regex.test("1"));    // false
   ```

4. **Up to `max` Times**:
   ```javascript
   const regex = /^\d{,3}$/;
   console.log(regex.test("1"));    // true
   console.log(regex.test("12"));   // true
   console.log(regex.test("1234")); // false
   ```

### Practical Use Case
curly braces to match exactly three digits:
```javascript
const regex2 = /^\d{3}$/;
console.log(items.filter(item => regex2.test(item.toString())));
// Output: [834, 519, 645]
```

This regex ensures that only items with exactly three digits are matched and filtered from the array.


#### Example 2: Filtering Names by Length

1. **Initial Array**:

```javascript
const names = ['john', 'jane', 'jim', 'jessica', 'jennifer', 'joseph'];
```

2. **Goal**: Match names that are 4 to 6 characters long.
3. **Regex Pattern**:

```javascript
const regex3 = /^[a-z]{4,6}$/;
```

- Explanation: Matches lowercase letters (`a-z`) with a length between 4 and 6.

4. **Filter Operation**:

```javascript
names.filter((name) => regex3.test(name));
```

- Result: `['john', 'jane', 'jessica', 'joseph']`

Feel free to ask if you need further clarification or additional notes!
