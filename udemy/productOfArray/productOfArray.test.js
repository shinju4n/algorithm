import { productOfArray, productOfArrayWithReduce } from "./function";
test("productOfArray test", () => {
  expect(productOfArray([1, 2, 3])).toBe(6);
  expect(productOfArray([1, 2, 3, 10])).toBe(60);
});

test("productOfArrayWithReduce test", () => {
  expect(productOfArrayWithReduce([1, 2, 3])).toBe(6);
  expect(productOfArrayWithReduce([1, 2, 3, 10])).toBe(60);
});
