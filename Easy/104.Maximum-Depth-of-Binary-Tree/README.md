## 104. Maximum Depth of Binary Tree

Solved
Easy
Topics
Companies
Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Example 1:
<img src="https://assets.leetcode.com/uploads/2020/11/26/tmp-tree.jpg"/>
Input: root = [3,9,20,null,null,15,7]
Output: 3
Example 2:

Input: root = [1,null,2]
Output: 2

Constraints:

The number of nodes in the tree is in the range [0, 104].
-100 <= Node.val <= 100

## My Solution

# Complexity

- Time complexity:
  O(n), where n is the number of nodes in the tree.

- Space complexity:
  Worst-Case Scenarios:
  Balanced Tree (perfect binary tree):

In a balanced tree, the last level has the most nodes.
At the last level, there are at most n/2 nodes in the queue.
Space complexity = O(n) (in terms of maximum nodes at the last level).
Skewed Tree (e.g., all nodes on one side):

If the tree is completely skewed (like a linked list), the queue size is at most n.
Space complexity = O(n).
Space Complexity:
O(n) in the worst case, where n is the number of nodes in the tree

# Code

### First Solution is not Efficient

```javascript []
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var maxDepth = function (root) {
  if (!root) return 0;
  let maxDep = 0;
  let queue = [];
  queue.push(root);

  while (queue.length > 0) {
    let levelSize = queue.length;
    for (let i = 0; i < levelSize; i++) {
      let currentNode = queue.shift();
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    maxDep++;
  }
  return maxDep;
};
```

# Complexity

- Time complexity:
  Each node is visited exactly once, so the time complexity is O(n).

- Space complexity:
  The space complexity depends on the recursion depth. In the worst case (for a skewed tree), it is O(n), and in the best case (for a balanced tree), it is O(log n).

### Second Solution more Efficient

```javascript []
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var maxDepth = function (root) {
  return treeHeight(root);
};

function treeHeight(node) {
  if (node === null) return 0;
  const leftHeight = treeHeight(node.left);
  const rightHeight = treeHeight(node.right);
  return 1 + Math.max(leftHeight, rightHeight);
}
```
