var romanToInt = function (s) {
  const getRomanNumber = (char) => {
    switch (char) {
      case "I":
        return 1;
      case "V":
        return 5;
      case "X":
        return 10;
      case "L":
        return 50;
      case "C":
        return 100;
      case "D":
        return 500;
      case "M":
        return 1000;
      default:
        return 0;
    }
  };

  let int = 0;
  for (let i = 0; i < s.length; i++) {
    let current = getRomanNumber(s[i]);
    let next = getRomanNumber(s[i + 1]);

    if (current < next) {
      int -= current;
    } else {
      int += current;
    }
  }

  return int;
};
