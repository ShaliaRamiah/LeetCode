function lengthOfLongestSubstring(s) {
    
    let length = 0;
    let start = 0;
    let charIndexMap = {};

    for (let end = 0; end < s.length; end++) {
        let currentChar = s[end];

        if (charIndexMap[currentChar] !== undefined) {
            // If the current character is already in the substring, move the start pointer to the right of its last occurrence
            start = Math.max(charIndexMap[currentChar] + 1, start);
        }

        // Updating the index of the current character
        charIndexMap[currentChar] = end;

        // Updating the maximum length
        length = Math.max(length, end - start + 1);
    }

    return length;
}


console.log(lengthOfLongestSubstring("abcabcbb")); 
console.log(lengthOfLongestSubstring("bbbbb"));   
console.log(lengthOfLongestSubstring("pwwkew"));   
