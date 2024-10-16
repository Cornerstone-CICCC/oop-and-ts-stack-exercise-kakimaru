// Create a function called lowercaseStrings that converts all strings in the stack to lowercase
// Remember the LIFO (Last-In, First-Out) rule
// Make sure to build a temporary stack

const Stack = require('../lib/Stack')

// orig: [5, 8, 1, 3, 6]
// temp: []
// curr: 10

function lowercaseStrings(stack) {
  // your code here
  const tempStack = new Stack()

  while(!stack.isEmpty()) {
    const  currItem = stack.pop() // MORNING
    let lowerCase = currItem.toLowerCase()
    tempStack.push(lowerCase)
  }

  while(!tempStack.isEmpty()) {
    stack.push(tempStack.pop())
  }
}

// Create stack
const stack = new Stack();
stack.push("Hello");
stack.push("woRLd");
stack.push("good");
stack.push("MORNING");

lowercaseStrings(stack)
console.log(stack.printStack()) // ["hello", "world", "good", "morning"]