const numberSplit = require("./number-split");

test("split 2", () => {
    expect(numberSplit(2)).toEqual([1, 1]);
});

test("split 10", () => {
    expect(numberSplit(10)).toEqual([5, 5]);
});

test("split -45", () => {
    expect(numberSplit(-45)).toEqual([-23, -22]);
});

test("split 1", () => {
    expect(numberSplit(1)).toEqual([0, 1]);
});

test("split 0", () => {
    expect(numberSplit(0)).toEqual([0, 0]);
});