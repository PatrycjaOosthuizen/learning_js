let stack = [];

function pushItem(stack, item) {
  stack.push(item); // adds the item to the end of the array
  return stack;
}

function popItem(stack) {
  return stack.pop(); // removes the last element of the array.
}

function peek(stack) {
  return stack[stack.length - 1]; // accesses the last element.
}

// Testing the stack operations
console.log("Initial Stack:", stack);
pushItem(stack, "A");
pushItem(stack, "B");
console.log("After Push:", stack);
console.log("Peek:", peek(stack)); // Shows the top element without removing it.
console.log("Pop:", popItem(stack)); // Removes and prints the top element 'B'.
console.log("Stack now:", stack); // Prints the final state of the stack 'A'.
