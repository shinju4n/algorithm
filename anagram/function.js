export function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // 글자가 있으면 +1 없으면 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    if (!lookup[letter]) {
      // 글자가 없으면 false
      return false;
    } else {
      // 글자가 있으면 -1
      lookup[letter] -= 1;
    }
  }
  return true;
}
