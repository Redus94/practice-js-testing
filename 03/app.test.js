import randomNumber from "./app";

it("return 1 if min=1 & max=1", () => {
  expect(randomNumber(1, 1)).toBe(1);
});

it("throw error if min is not number", () => {
  expect(() => randomNumber("1", 1)).toThrow("min is not a number");
});

it("throw error if max is not number", () => {
  expect(() => randomNumber(1, "1")).toThrow("max is not a number");
});

it("throw an error if min is greater than max", () => {
  expect(() => randomNumber(2, 1)).toThrow("max is greater than min");
});