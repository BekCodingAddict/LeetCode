var romanToInt = function (s) {
  const romanNumbers = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);

  let int = 0;
  for (let i = 0; i < s.length; i++) {
    let current = romanNumbers.get(s[i]);
    let next = romanNumbers.get(s[i + 1]);

    if (current < next) {
      int -= current;
    } else {
      int += current;
    }
  }

  return int;
};
