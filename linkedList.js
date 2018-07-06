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
    console.log(head); //Checkout everything inside the head, needs to be modified so it doesn't see next.
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
  }

  return {
    getHead: getHead,
    getTail: getTail,
    add: add
  }
  //Testing happening down here
}

linkedListGenerator();