var titleToNumber = function (columnTitle) {
  columnTitle = columnTitle.toUpperCase();
  if (columnTitle.length > 7 || columnTitle.length < 1) return -1;
  let output = 0;
  for (letter of columnTitle) {
    let value = letter.charCodeAt(0) - 64;
    output = output * 26 + value;
  }
  return output;
};

console.log(titleToNumber("AZ"));
