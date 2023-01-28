const minMax = require("./minMax");

test("min should be 1 | max should be 54", () => {
    expect(minMax([14, 35, 6, 1, 34, 54])).toEqual([1, 54])
});

test("min should be 1.346 | max should be 1.8734", () => {
    expect(minMax([1.346, 1.6532, 1.8734, 1.8723])).toEqual([1.346, 1.8734])
});

test("min should be 13 | max should be 98", () => {
    expect(minMax([13, 72, 98, 43, 24, 65, 31])).toEqual([13, 98])
});

test("min should be -54 | max should be -21", () => {
    expect(minMax([-54, -23, -54, -21])).toEqual([-54, -21])
});

test("min should be -0.6834 | max should be 0.5632", () => {
    expect(minMax([-0.473, -0.6834, -0.1287, 0.5632])).toEqual([-0.6834, 0.5632])
});

test("min should be 0 | max should be 0", () => {
    expect(minMax([0, 0, 0, 0])).toEqual([0, 0])
});

test("min should be 1 | max should be 1", () => {
    expect(minMax([1])).toEqual([1, 1])
});