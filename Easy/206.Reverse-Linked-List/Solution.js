function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function List(head) {
  this.head = head === undefined ? null : head;
}

List.prototype.append = function (value) {
  const newNode = new ListNode(value);
  if (!this.head) {
    this.head = newNode;
    return this;
  }
  let curentNode = this.head;
  while (curentNode.next !== null) {
    curentNode = curentNode.next;
  }
  curentNode.next = newNode;
  return this;
};

List.prototype.print = function () {
  if (this.head.next === null) console.log(this.head.val);
  let currentNode = this.head;
  while (currentNode) {
    console.log(currentNode.val);
    currentNode = currentNode.next;
  }
};

const list = new List();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);

var reverseList = function (head) {
  let previousNode = null;
  let currentNode = head;
  let nextNode = null;

  while (currentNode !== null) {
    nextNode = currentNode.next;
    currentNode.next = previousNode;
    previousNode = currentNode;
    currentNode = nextNode;
  }
  return previousNode;
};

reverseList(list.head);
