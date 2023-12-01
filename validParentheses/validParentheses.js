var isValid = function(s) {
    // Creating an empty stack to keep track of open brackets
    const stack = [];

    // Defining a mapping of closing brackets to their corresponding opening brackets
    const bracketPairs = {')': '(', '}': '{', ']': '['};

    // Looping through each character in the input string
    for (let char of s) {
        // If the current character is a closing bracket
        if (bracketPairs[char]) {
            // Checking if the stack is empty or the top of the stack doesn't match the corresponding opening bracket
            if (!stack.length || stack.pop() !== bracketPairs[char]) {
                // Returning false if the brackets are not in the correct order
                return false;
            }
        } else {
            // If the current character is an opening bracket, push it onto the stack
            stack.push(char);
        }
    }

    // The string is valid if and only if the stack is empty at the end
    return stack.length === 0;
}