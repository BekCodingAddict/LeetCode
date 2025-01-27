function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

function createBinaryTree(value) {
  if (!value || value.length === 0) return null;

  // create the root node
  const root = new TreeNode(value[0]);
  const queue = [root];

  let index = 1;
  while (queue.length > 0 && index < value.length) {
    const currentNode = queue.shift(); // deque current node

    //assign left child
    if (value[index] !== null) {
      currentNode.left = new TreeNode(value[index]);
      queue.push(currentNode.left);
    }
    index++;

    //assign right child
    if (index < value.length && value[index] !== null) {
      currentNode.right = new TreeNode(value[index]);
      queue.push(currentNode.right);
    }
    index++;
  }
  return root;
}

const values = [1, 2, 3, 4, null, null, 5];
const root = createBinaryTree(values);
// console.log(JSON.stringify(root, null, 2));

// var maxDepth = function (root) {
//   if (!root) return 0;
//   let maxDep = 0;
//   let queue = [];
//   queue.push(root);

//   while (queue.length > 0) {
//     let levelSize = queue.length;
//     for (let i = 0; i < levelSize; i++) {
//       let currentNode = queue.shift();
//       if (currentNode.left) {
//         queue.push(currentNode.left);
//       }
//       if (currentNode.right) {
//         queue.push(currentNode.right);
//       }
//     }
//     maxDep++;
//   }
//   return maxDep;
// };

var maxDepth = function (root) {
  return treeHeight(root);
};

function treeHeight(node) {
  if (node === null) return 0;
  const leftHeight = treeHeight(node.left);
  const rightHeight = treeHeight(node.right);
  return 1 + Math.max(leftHeight, rightHeight);
}
console.log(maxDepth(root));
