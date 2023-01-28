const Person = require("./older");

const p1 = new Person("Samuel", 24);
const p2 = new Person("Joel", 36);
const p3 = new Person("Lily", 24);

// Samuel tests
test("Joel is older", () => {
    expect(p1.compareAge(p2)).toBe("Joel is older than me.");
});
test("Lily is same", () => {
    expect(p1.compareAge(p3)).toBe("Lily is the same age as me.");
});

// Joel tests
test("Samuel is younger", () => {
    expect(p2.compareAge(p1)).toBe("Samuel is younger than me.");
});
test("Lily is younger", () => {
    expect(p2.compareAge(p3)).toBe("Lily is younger than me.");
});

// Lily tests
test("Samuel is same", () => {
    expect(p3.compareAge(p1)).toBe("Samuel is the same age as me.");
});
test("Joel is older", () => {
    expect(p3.compareAge(p2)).toBe("Joel is older than me.");
});