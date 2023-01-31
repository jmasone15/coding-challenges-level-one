const sum = require("./sum");

test("adds 1 + 1 to equal 2", () => {
    expect(sum(1, 1)).toBe(2);
});

test("adds 2 + 3 to equal 5", () => {
    expect(sum(2, 3)).toBe(5);
});

test("adds -3 + -6 to equal -9", () => {
    expect(sum(-3, -6)).toBe(-9);
});

test("adds 1542 + 759 to equal ", () => {
    expect(sum(1542, 759)).toBe(2301);
});

test("adds 100 + -12 to equal 88", () => {
    expect(sum(100, -12)).toBe(88);
});