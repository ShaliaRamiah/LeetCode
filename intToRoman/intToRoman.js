var intToRoman = function(num) {
    // Array to represent Roman numerals for each digit place.
    const romanNumerals = [
        ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
        ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
        ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
        ["", "M", "MM", "MMM"]
    ];

    // Initialize an empty string to store the result.
    let result = "";
    // Variables to store the current digit and digit place.
    let digit, place = 0;

    // Iterating through the digits of the input number.
    while (num > 0) {
        // Extracting the last digit of the number.
        digit = num % 10;
        // Appending the corresponding Roman numeral to the result.
        result = romanNumerals[place][digit] + result;
        // Remove the last digit from the number.
        num = Math.floor(num / 10);
        // Move to the next digit place.
        place++;
    }

    // Return the final Roman numeral representation.
    return result;
};

const num = 342;
const result = intToRoman(num);
console.log(result);
