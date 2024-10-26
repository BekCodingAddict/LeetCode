// Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.

// Example 1:

// Input: millis = 100
// Output: 100
// Explanation: It should return a promise that resolves after 100ms.
// let t = Date.now();
// sleep(100).then(() => {
//   console.log(Date.now() - t); // 100
// });
// Example 2:

// Input: millis = 200
// Output: 200
// Explanation: It should return a promise that resolves after 200ms.

// Constraints:

// 1 <= millis <= 1000

// async function sleep(millis) {
//   if (millis > 0 || millis > 1000) return -1;
//   return await Promise((resolve) =>
//     setTimeout(() => {
//       resolve();
//     }, 1000)
//   );
// }

const sleep = async (millis) =>
  await new Promise((resolve) => setTimeout(() => resolve(), millis));

// wait(100).then((message) => {
//   console.log(message); // Logs: Waited for 2000 milliseconds
// });
let t = Date.now();
sleep(100).then(() => console.log(`Waited for ${Date.now() - t} milliseconds`)); // 100

/**
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
