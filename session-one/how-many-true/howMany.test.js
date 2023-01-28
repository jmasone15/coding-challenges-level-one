const howManyTrue = require("./howMany");

test("should equal 2", () => {
    expect(howManyTrue([true, false, false, true, false])).toBe(2);
});

test("should equal 0", () => {
    expect(howManyTrue([false, false, false, false])).toBe(0);
});

test("should equal 8", () => {
    expect(howManyTrue([false, false, true, true, false, false, false, true, true, true, true, false, true, true, false])).toBe(8);
});

test("should equal 3", () => {
    expect(howManyTrue([true, false, true, true, false, false, false, false, false])).toBe(3);
});

test("should equal 5", () => {
    expect(howManyTrue([true, true, true, true, true])).toBe(5);
});

test("should equal 0", () => {
    expect(howManyTrue([])).toBe(0);
});