const repetition = require("./string-recursion");

test("ab", () => {
    expect(repetition("ab", 3)).toBe("ababab");
});

test("soccer", () => {
    expect(repetition("soccer", 2)).toBe("soccersoccer");
});

test("ciao", () => {
    expect(repetition("ciao", 4)).toBe("ciaociaociaociao");
});

test("torque", () => {
    expect(repetition("torque", 1)).toBe("torque");
});

test("effective", () => {
    expect(repetition("effective", 5)).toBe("effectiveeffectiveeffectiveeffectiveeffective");
});
