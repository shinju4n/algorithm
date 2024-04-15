import reverse from "./function";
test("reverse test", () => {
  expect(reverse("hello")).toBe("olleh");
  expect(reverse("Greetings!")).toBe("!sgniteerG");
  expect(reverse("")).toBe("");
  expect(reverse("awesome")).toBe("emosewa");
  expect(reverse("rithmschool")).toBe("loohcsmhtir");
});
