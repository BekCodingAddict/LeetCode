var majorityElement = function (nums) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in map) {
      map[nums[i]] += 1;
    } else {
      map[nums[i]] = 1;
    }
  }

  return Number(
    Object.keys(map)
      .sort((a, b) => map[b] - map[a])
      .at(0)
  );
};

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
