export function productOfArray(arr) {
  if (arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.slice(1));
}

export function productOfArrayWithReduce(arr) {
  return arr.reduce((acc, val) => acc * val, 1);
}
