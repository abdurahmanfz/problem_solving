// fungsi balance bracket

function isBalanced(str) {
  const stack = [];
  const openingBrackets = ['(', '[', '{'];
  const closingBrackets = [')', ']', '}'];
  const bracketPairs = {
    ')': '(',
    ']': '[',
    '}': '{'
  };

  for (let i = 0; i < str.length; i++) {
    const bracket = str[i];

    if (openingBrackets.includes(bracket)) {
      stack.push(bracket);
    } else if (closingBrackets.includes(bracket)) {
      const matchingOpeningBracket = bracketPairs[bracket];
      if (stack.length === 0 || stack.pop() !== matchingOpeningBracket) {
        return 'NO';
      }
    }
  }

  return "YES";
}

console.log(isBalanced("{ [ ( ] ) }")); // false
console.log(isBalanced("{ ( ( [ ] ) [ ] ) [ ] }")); // true