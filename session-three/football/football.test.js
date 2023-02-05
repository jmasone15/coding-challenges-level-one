const footballPoints = require("./football");

test("losing season", () => {
    expect(footballPoints(1, 2, 3)).toEqual(5);
});

test("broke even", () => {
    expect(footballPoints(5, 5, 5)).toEqual(20);
});

test("starting strong", () => {
    expect(footballPoints(1, 0, 0)).toEqual(3);
});

test("can't decide who wins", () => {
    expect(footballPoints(0, 7, 0)).toEqual(7);
});

test("probably the university of miami", () => {
    expect(footballPoints(0, 0, 15)).toEqual(0);
});