const circuitPower = require("./power-calc");

test("find power of 2 voltage and 3 current", () => {
    expect(circuitPower(2, 3)).toBe(6);
});

test("find power of 230 voltage and 10 current", () => {
    expect(circuitPower(230, 10)).toBe(2300);
});

test("find power of 110 voltage and 3 current", () => {
    expect(circuitPower(110, 3)).toBe(330);
});

test("find power of 480 voltage and 20 current", () => {
    expect(circuitPower(480, 20)).toBe(9600);
});

test("find power of 10 voltage and 0 current", () => {
    expect(circuitPower(10, 0)).toBe(0);
});