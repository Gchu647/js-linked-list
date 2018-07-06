let head = {
  value: "One",
  next: {
    value: "two",
    next: null
  }
}

let currentNode = head;
let nextNode = head.next;
head = nextNode;
currentNode = null;

console.log("currentNode: ", currentNode);
console.log("nextNode: ", nextNode);
console.log("New Head: ", head);