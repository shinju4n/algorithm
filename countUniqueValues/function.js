function countUniqueValues(arr) {
  if (arr.length === 0) return 0;

  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    // i와 j가 다르면 i를 증가시키고 j를 i로 변경
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }

  return i + 1;
}

// 2
console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
// 7
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
// 0
console.log(countUniqueValues([]));
// 4
console.log(countUniqueValues([-2, -1, -1, 0, 1]));
