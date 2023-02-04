const multiSum = require("./multi-sum");

test("multi sum of 1", () => {
    expect(multiSum(1)).toBe(55);
});

test("multi sum of 7", () => {
    expect(multiSum(7)).toBe(385);
});

test("multi sum of 12", () => {
    expect(multiSum(12)).toBe(660);
});

test("multi sum of 1547", () => {
    expect(multiSum(1547)).toBe(85085);
});

test("multi sum of -2", () => {
    expect(multiSum(-2)).toBe(-110);
});