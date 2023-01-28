const minMax = require("./minMax");

test("min should be  | max should be ", () => {
    expect(minMax([14, 35, 6, 1, 34, 54])).toEqual([1, 54])
});

test("min should be  | max should be ", () => {
    expect(minMax([1.346, 1.6532, 1.8734, 1.8723])).toEqual([1.346, 1.8734])
});

test("min should be  | max should be ", () => {
    expect(minMax([13, 72, 98, 43, 24, 65, 31])).toEqual([13, 98])
});

test("min should be  | max should be ", () => {
    expect(minMax([-54, -23, -54, -21])).toEqual([-54, -21])
});

test("min should be  | max should be ", () => {
    expect(minMax([-0.473, -0.6834, -0.1287, 0.5632])).toEqual([-0.6834, 0.5632])
});

test("min should be  | max should be ", () => {
    expect(minMax([0, 0, 0, 0])).toEqual([0, 0])
});

test("min should be  | max should be ", () => {
    expect(minMax([1])).toEqual([1, 1])
});