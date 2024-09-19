## Pipe Operator in Regular Expressions
- **Purpose**: Used to match one of many expressions.

#### Example
```javascript
const str = ['sapwood', 'rosewood', 'logwood', 'teakwood', 'plywood', 'redwood'];

// Matching 'logwood' and 'plywood' only
const regex = /^(log|ply)wood$/;
console.log(str.filter(s => regex.test(s))); // Output: [ 'logwood', 'plywood' ]
```

#### Explanation of the Regular Expression
- **`^`**: Matches the start of the string.
- **`(log|ply)`**: Matches either "log" or "ply".
    - **`|`**: Acts as a logical OR operator.
- **`wood`**: Matches the exact string "wood".
- **`$`**: Matches the end of the string.

#### Summary
- The regular expression `^(log|ply)wood$` matches any string that:
    - Starts with either "log" or "ply".
    - Ends with "wood".
    - Does not contain additional characters before "log" or "ply", after "wood", or between "log"/"ply" and "wood".