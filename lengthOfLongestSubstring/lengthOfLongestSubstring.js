function lengthOfLongestSubstring (s){
    let currentString = "";
    let longestString = "";

    //iterating through each character
    for (let i = 0; i < s.length; i++) {
        const currentChar = s[i];

        //if character already used
        if (conChar(currentString, currentChar)) {
            //start new string
            currentString = getNext(currentString, currentChar);
        }
    
        currentString = appendChar(currentString, currentChar);

        if (getLength(currentString) > getLength(longestString)) {
            longestString = currentString;
        }
    }
    return getLength(longestString);
};

//repeating
function conChar(str, char) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] == char) {
            return true;
        }
    }
    return false;
}


function getNext(str, char) {
    let nextString = "";
    let charFound = false;

    for (let i = 0; i < str.length; i++) {
        if (charFound) {
            nextString += str[i];
        }

        if (str[i] == char) {
            charFound = true;
        }
    }
    return nextString;
}

//append
function appendChar(str, char) {
    return str + char;
}

// get length
function getLength(str) {
    let length = 0;
    while (str[length] !== undefined) {
        length++
    }
    return length;
}

let input = "abcabcbb";
let result = lengthOfLongestSubstring(input);
