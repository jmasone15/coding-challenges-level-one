# Football Points

Create a function that takes the number of `wins`, `draws` and `losses` and calculates the number of points a football team has obtained so far.
- `wins` get 3 points
- `draws` get 1 point
- `losses` get 0 points

## Examples
```
footballPoints(3, 4, 2) ➞ 13

footballPoints(5, 0, 2) ➞ 15

footballPoints(0, 0, 1) ➞ 0
```

## Testing
Once you think you have the correct solution, open your terminal and use the command `npm test -- football.test.js` to run the necessary tests.

## Notes
- Don't forget to `return` the result.
- If you get stuck, look at the `football.test.js` file for what the tests may look like.
- Inputs will be numbers greater than or equal to `0`