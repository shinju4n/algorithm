import isPalindrome from "./function";
test("isPalindrome test", () => {
  // Write your test here
  expect(isPalindrome("awesome")).toBe(false);
  expect(isPalindrome("foobar")).toBe(false);
  expect(isPalindrome("tacocat")).toBe(true);
  expect(isPalindrome("amanaplanacanalpanama")).toBe(true);
});
