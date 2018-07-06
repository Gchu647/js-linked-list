/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){
  let head = null;
  let tail = null;

  function getHead() {
    return head;
  }

  function add(val, nextObj) {
    var makeNode = {};
    makeNode.value = val;
    makeNode.next = nextObj; //default should be null

    head = makeNode; // We are storing it in head for now...
  }

  //Testing happening down here
  console.log(getHead());
  add("ready Player", null);
  console.log(getHead());
}

linkedListGenerator();