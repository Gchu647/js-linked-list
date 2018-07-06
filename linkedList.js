/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){
  let head = null;
  let currentTail = null;
  let oldTail = null;

  function getHead() {
    return head;
    //console.log(head);
  }

  function getTail() {
    return currentTail;
    //console.log(currentTail);
  }

  function add(val) {
    let newNode = {};
    newNode.value = val;
    newNode.next = null;

    oldTail = currentTail; // Step 1 Store reference point of previous tail
    currentTail = newNode; // Step 2 Store reference point of current tail

    if(oldTail) {
      oldTail.next = newNode; // Step 3 make the previous tail point to the current tail
    }

    if(!head) {
      head = currentTail; // Keep tracks of what is the head
    }

    return currentTail;
    // console.log(currentTail);
  }

  function get(index) {
    let counter = 0;
    let currentNode = getHead();

    // While loop will run if the node.next.value is not null or until it finds the value
    while(currentNode && counter <= index) {
      //console.log("loop: ", counter);

      if(counter === index) {
        return currentNode; // Returns object that matches the index
      } else {
        currentNode = currentNode.next;
        counter ++;
      }
    }

    return false;
  }

  function remove(index) {
    let currentNode = get(index);
    let prevNode = get(index - 1);
    let nextNode = get(index + 1);

    console.log("Current Node: ", currentNode);
    console.log("Previous Node: ", prevNode);
    console.log("Next Node: ", nextNode);
  }
  
  /*
  return {
    getHead: getHead,
    getTail: getTail,
    add: add,
    get: get,
    remove: remove
  }
  */

  //Testing happening down here
  add("Player One");
  add("Player Two");
  add("Player Three");
  remove(1);
}

linkedListGenerator();