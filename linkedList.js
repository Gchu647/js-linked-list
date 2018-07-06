/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){
  let head = null;
  let tail = null;
  let prevNode = null;

  function getHead() {
    console.log(head); //Checkout everything inside the head, needs to be modified so it doesn't see next.
  }

  function add(val) {
    var makeNode = {};
    makeNode.value = val;

    if(!head) { // going to have to use the function again for tail
      makeNode.next = null;
      head = makeNode;
      prevNode = head;
    } else {
      makeNode.next = null;
      prevNode.next = makeNode; // makeNode has to change the "next" property of the prevNode
      prevNode = makeNode; // The obj of the prevNode also has to be change so Node 1 doesn't point to Node 3
    }

    console.log(makeNode); // Return the objects being added
  }

  //Testing happening down here
  add("ready Player one");
  add("Player two");
  add("Player Three");
  add("player four");
  add("player five");
  debugger;
  getHead();
}

linkedListGenerator();