// ---PROMPT---
// Given the string, check if it is a palindrome.

// ---ANSWER---
// check the given string to see if it is ia palindrome
// return true if it is, false if not

// NAIVE:
    // split('')
    // reverse()
    // join('')
    // set conditional to check if the string after the above processes and before are the same or not
    // use toLowerCase() to account for differences in capitalization

function solution(inputString) {
    
    // convert string to lowercase
    inputString = inputString.toLowerCase()
    
    // declare reversedString as inputString with the below operations applied to it
    const reversedString = inputString.split('').reverse().join('')
    
    // conditional to check value of reversedString against inputString
    if (reversedString === inputString){
        return true
    } else {
        return false
    }
}
