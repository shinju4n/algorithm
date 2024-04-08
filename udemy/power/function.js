export function power(num, num2) {
  if (num2 === 0) return 1;
  return num * power(num, num2 - 1);
}
