# Older Than Me

Create a *method* in the ```Person``` class which returns how *another person's* age compares. Given the instances ```p1```, ```p2``` and ```p3```, which will be initialised with the attributes ```name``` and ```age```, return a sentence in the following format:
- **{other person name} is {older than / younger than / the same age as} me.**

## Examples
```
p1.compareAge(p2) ➞ "Joel is older than me."

p2.compareAge(p1) ➞ "Samuel is younger than me."

p1.compareAge(p3) ➞ "Lily is the same age as me."
```

## Testing
Once you think you have the correct solution, open your terminal and use the command ```npm test -- older.test.js``` to run the necessary tests.

## Notes
- For help with classes, go [here](https://www.w3schools.com/js/js_classes.asp) for documentation.
- If you get stuck, look at the ```older.test.js``` file for what the tests may look like.