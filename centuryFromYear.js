// ---PROMPT---
// Given a year, return the century it is in. 
// The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.

// ---ANSWER---

// create a function that takes a year and returns what century it is in
// grab 10% of the year, round it down, return the value
// multiply the year by .10
// round it down using Math.floor() to produce a flat number
// return the value

function solution(year) {
    // wrap the math equation within Math.floor() for efficiency
    const century = Math.ceil(year * .01)
    return century
}
