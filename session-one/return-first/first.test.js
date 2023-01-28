const first = require("./first");

test("should equal 1", () => {
    expect(first([1, 2, 3])).toBe(1);
});

test("should equal 80", () => {
    expect(first([80, 5, 100])).toBe(80);
});

test("should equal -500", () => {
    expect(first([-500, 0, 50])).toBe(-500);
});

test("should equal 5", () => {
    expect(first([5, 2, 3])).toBe(5);
});

test("should equal 75675", () => {
    expect(first([75675, 5, 100])).toBe(75675);
});

test("should equal -52320", () => {
    expect(first([-52320, 0, 50])).toBe(-52320);
});