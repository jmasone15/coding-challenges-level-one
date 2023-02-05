# String Recursion

Create a recursive function that takes two parameters and repeats the string n number of times. The first parameter `txt` is the string to be repeated and the second parameter is the number of times the string is to be repeated.

**String.prototype.repeat() is not allowed**

## Examples
```
repetition("ab", 3) ➞ "ababab"

repetition("kiwi", 1) ➞ "kiwi"

repetition("cherry", 2) ➞ "cherrycherry"
```

## Testing
Once you think you have the correct solution, open your terminal and use the command `npm test -- string-recursion.test.js` to run the necessary tests.

## Notes
- Don't forget to `return` the result.
- If you get stuck, look at the `string-recursion.test.js` file for what the tests may look like.
- The second parameter of the function is a postive integer.