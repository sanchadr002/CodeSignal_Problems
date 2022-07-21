// ---PROMPT---
// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.


// ---ANSWER---
// create a function that takes an array of ints and outputs the largest product of any pair of adjacent numbers

// NAIVE:
    // nested for loop that checks each element against each other element in the array
    // need a variable to store what the current largest product is
    // each element is multiplied against each other element
    // set conditionals to check each iteration product versus variable storing highest product
    // if it's bigger, update variable
    // return variable at the end of the function
    // time complexity: O(n^2)
    
// BETTER:
    // use a while loop to create a 2 index window using slice that multiplies the 2 elements in the window 
    // create a variable that stores the current highest product and is updated
    // return that product
    // time complexity = O(n)
    // space complexity = O(n)
    // similar to a sliding window
function solution(inputArray) {
    
    // declare counter for loops
    let i = 0
    
    // declare variable to store largest product
    let largestProduct = -1000
    
    // while loop for as long as i is less than given array's length
    while (i < inputArray.length){
        
        // use if statement to break out of loop before i reaches last index, since no elements exists at inputArray.length for the window
        if (i === inputArray.length - 1){
            return largestProduct
        }
        
        // declare window using slice method for i, i + 2
        let window = inputArray.slice(i, i + 2)
        
        // multiply the two elements in the window against eachother
        let currentProduct = (window[0] * window[1])
        
        // if the product of the two is higher than the current largest product, update that variable
        if (currentProduct > largestProduct){
            largestProduct = currentProduct
        }
        
        // increment i
        i++
    }
}
