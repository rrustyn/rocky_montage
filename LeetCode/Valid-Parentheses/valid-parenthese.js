// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

/**
 * @param {string} s
 * @return {boolean}
 */

function isValid(s) {
  const matchingPairs = {
    "(" : ")",
    "{" : "}",
    "[" : "]"
  }
  
  let openParenStack = [];
  
  for (let char of s) {
    if (char === "(" || char === "{" || char === "[") {
      openParenStack.push(char);
    } else {
      peek = openParenStack[openParenStack.length - 1]
      if (char === matchingPairs[peek]) {
        openParenStack.pop()
      } else {
        return false;
      }
    }
  }    
  
  return openParenStack.length === 0;
}

module.export = isValid