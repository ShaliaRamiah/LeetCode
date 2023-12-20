function romanToInt(s) {
    // Mapping between Roman symbols and their corresponding values.
    const romanValues = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    // Variable to store the accumulated integer value.
    let result = 0;

    // Iterate through the Roman numeral string.
    for (let i = 0; i < s.length; i++) {
        // Extract the current symbol and its value.
        const currentSymbol = s[i];
        const currentValue = romanValues[currentSymbol];

        // Extract the next symbol and its value (if available).
        const nextSymbol = s[i + 1];
        const nextValue = romanValues[nextSymbol];

        // Check if the next symbol has a greater value.
        if (nextValue > currentValue) {
            // If the next symbol has a greater value, subtract the current value.
            result -= currentValue;
        } else {
            // Otherwise, add the current value.
            result += currentValue;
        }
    }

    // Return the final accumulated integer value.
    return result;
}


console.log(romanToInt("III"));     
console.log(romanToInt("LVIII"));   
console.log(romanToInt("MCMXCIV")); 