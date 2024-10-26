// 2723. Add Two Promises
// Easy
// Companies
// Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. The returned promise should resolve with the sum of the two numbers.

// Example 1:

// Input:
// promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20)),
// promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60))
// Output: 7
// Explanation: The two input promises resolve with the values of 2 and 5 respectively. The returned promise should resolve with a value of 2 + 5 = 7. The time the returned promise resolves is not judged for this problem.
// Example 2:

// Input:
// promise1 = new Promise(resolve => setTimeout(() => resolve(10), 50)),
// promise2 = new Promise(resolve => setTimeout(() => resolve(-12), 30))
// Output: -2
// Explanation: The two input promises resolve with the values of 10 and -12 respectively. The returned promise should resolve with a value of 10 + -12 = -2.

// Constraints:

// promise1 and promise2 are promises that resolve with a number

// var addTwoPromises = async function (promise1, promise2) {
//   return Promise.all([promise1, promise2]).then((results) => {
//     return results[0] + results[1];
//   });
// }; // not efficient

// var addTwoPromises = async function (promise1, promise2) {
//   // Await the resolution of both promises
//   const results = await Promise.all([promise1, promise2]);
//   // Return the sum of the results
//   return results[0] + results[1];
// };

var addTwoPromises = async function (promise1, promise2) {
  // Await and return the sum of the resolved values directly
  return (await promise1) + (await promise2);
};

const promise1 = new Promise((resolve) => setTimeout(() => resolve(2), 20));
const promise2 = new Promise((resolve) => setTimeout(() => resolve(5), 60));

// addTwoPromises(promise1, promise2).then((message) => console.log(message));

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */