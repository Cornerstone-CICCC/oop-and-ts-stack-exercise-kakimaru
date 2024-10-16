// Create a function called removeDuplicates that removes duplicates from the stack and keeping only unique values
// Remember the LIFO (Last-In, First-Out) rule
// Make sure to build a temporary stack

const Stack = require('../lib/Stack')

// orig: [5, 2, 1, 5, 1, 3]
// temp: [3, 1, 5, 2] → 2, 5, 1, 3
// temp2: [3, 1, 5, 1, 2, 5]
// curr: 

function removeDuplicates(stack) {
  // your code here
  const tempStack = new Stack()

  while (!stack.isEmpty()) {
    const currItem = stack.pop() // 3
    let isDuplicate = false

    const temp2 = new Stack()

    while (!tempStack.isEmpty()) {
      const tempItem = tempStack.pop() // 3
      if (tempItem === currItem) {
        isDuplicate = true
      }
      temp2.push(tempItem)
    }

    while (!temp2.isEmpty()) {
      tempStack.push(temp2.pop())
    }

    if (!isDuplicate) {
      tempStack.push(currItem)
    }
  }

  while (!tempStack.isEmpty()) {
    stack.push(tempStack.pop())
  }
}

// Create stack
const stack = new Stack();
stack.push(5);
stack.push(2);
stack.push(1);
stack.push(5);
stack.push(1);
stack.push(3);

removeDuplicates(stack)
console.log(stack.printStack()) // [5, 2, 1, 3]