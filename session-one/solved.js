// Sum Of Two
const sum = (a, b) => {
    return a + b;
}

// Return First
const getFirstValue = (arr) => {
    return arr[0];
}

// How Many True
const howManyTrue = (arr) => {
    return arr.filter(x => x).length
}

// Min Max
const minMax = (arr) => {
    return [Math.min(...arr), Math.max(...arr)]
}

// Older than Me
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    compareAge({ name, age }) {
        if (age < this.age) { return `${name} is younger than me.` }
        else if (age > this.age) { return `${name} is older than me.` }
        else { return `${name} is the same age as me.` }
    }
}