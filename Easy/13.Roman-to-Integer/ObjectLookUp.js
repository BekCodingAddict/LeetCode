const getRomanNumber = (str) => {
  const romanNumbers = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);

  return romanNumbers.get(str) ?? 0;
};

var romanToInt = function (s) {
  const romanNumbers = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let int = 0;
  let prev = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    let current = romanNumbers[s[i]];

    if (current < prev) {
      int -= current;
    } else {
      int += current;
    }

    prev = current;
  }

  return int;
};
