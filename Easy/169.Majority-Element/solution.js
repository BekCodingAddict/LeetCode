var majorityElement = function (nums) {
  nums = quickSort(nums);
  let majority = nums[0];
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (majority === nums[i]) {
      count += 1;
      if (count > nums.length / 2) return nums[i];
    } else {
      majority = nums[i];
      count = 1;
    }
  }
  return -1;
};

function quickSort(arr) {
  if (arr.length <= 1) return arr;
  let pivot = arr[Math.floor(arr.length / 2)];
  let left = arr.filter((x) => x < pivot);
  let middle = arr.filter((x) => x === pivot);
  let right = arr.filter((x) => x > pivot);

  return [...quickSort(left), ...middle, ...quickSort(right)];
}

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
