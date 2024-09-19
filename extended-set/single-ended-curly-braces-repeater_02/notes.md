### JavaScript Regex: Grouping and Capturing

#### Overview
- **Parentheses `()`** are used for **grouping** and **capturing** in regular expressions.
  - **Grouping**: Allows you to apply regex operators to entire groups of characters.
  - **Capturing**: Allows you to match the same text as previously matched by a capturing group.

#### Example 1: Matching Repeated Patterns
1. **Initial Array**: 
 ``` javascript
const str = ['ha', 'haha', '', 'hahaha', 'hahahaha', 'hahahahaha', 
 'hahahahahaha', 'h'];
 ```
 
2. **Goal**: Match 'ha' repeated at least 4 times.
3. **Regex Pattern**: 
``` javascript
const regex = /(ha){4,}/;
```
   - Explanation: `(ha)` groups the characters 'ha', `{4,}` specifies at least 4 repetitions.

4. **Filter Operation**: 
``` javascript
 str.filter(s => regex.test(s));
```
   - Result: `['hahahaha', 'hahahahaha', 'hahahahahaha']`

#### Example 2: Matching Limited Repetitions
1. **Goal**: Match strings where 'ha' appears at most 2 times, but at least once.
2. **Regex Pattern**: 
```javascript
const regex2 = /^(ha){1,2}$/;
```
   - Explanation: 
     - `(ha)` groups the characters 'ha', 
     - `{1,2}` specifies between 1 and 2 repetitions, 
     - `^` asserts the start, and 
     - `$` asserts the end of the string.
3. **Filter Operation**: 
``` javascript
str.filter(s => regex2.test(s));`
```
   - Result: `['ha', 'haha']`


### Key Points
- **Grouping**: Parentheses `()` group characters together so that regex operators can be applied to the entire group.
- **Capturing**: The grouped characters can be referenced later in the regex or in the replacement string.