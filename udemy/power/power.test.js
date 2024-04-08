import { power } from "./function";
test("power test", () => {
  expect(power(2, 0)).toBe(1);
  expect(power(2, 2)).toBe(4);
  expect(power(2, 4)).toBe(16);
  expect(power(2, 3)).toBe(8);
});
