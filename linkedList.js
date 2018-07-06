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

    // console.log(currentTail);
  }

  function get(num) {
    let counter = 1;
    let currentNode = getHead();
    console.log("it works!");

    while(currentNode.next !== null && typeof num === "number") {
      console.log("loop: ", counter);     

      if(counter === num) {
        console.log(currentNode.value);
        break;
      } else {
        currentNode = currentNode.next;
        counter ++;
      }
    }

    console.log(currentNode.value);
  }

  /*
  return {
    getHead: getHead,
    getTail: getTail,
    add: add,
    get: get
  }
  */

  //Testing happening down here
  add("Player One");
  add("Player Two");
  add("Player Three");
  get(2);
}

linkedListGenerator();