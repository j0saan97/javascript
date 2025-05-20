// Function to generate all valid combinations of parentheses for a given number of pairs
function generateParentheses(n) {
    const result = []; // Array to store the valid combinations

    // Helper function to build combinations recursively
    function backtrack(current, open, close) {
        // If the current string has reached the maximum length, add it to the result
        if (current.length === n * 2) {
            result.push(current);
            return;
        }

        // Add an open parenthesis if we haven't used all available open parentheses
        if (open < n) {
            backtrack(current + "(", open + 1, close);
        }

        // Add a close parenthesis if it doesn't exceed the number of open parentheses
        if (close < open) {
            backtrack(current + ")", open, close + 1);
        }
    }

    // Start the recursive process with an empty string and zero open/close parentheses
    backtrack("", 0, 0);

    return result; // Return the list of valid combinations
}

// Example usage
const n = 3; // Number of pairs of parentheses
console.log(generateParentheses(n)); // Output: ["((()))", "(()())", "(())()", "()(())", "()()()"]
