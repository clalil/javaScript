//A kata from CodeWars where you turn a string of numbers into a new string with the highest and lowest values returned.

function highAndLow(string){
    let array = string.split(' ').map(Number);
    //.map is used here to iterate over the objects inside of the array
    // Number is used to perform a type conversion here from numeric string into numbers
    let arraySorted = array.sort(function(a, b) {return a-b});
    //Function creating an descending order of the array items; explanation and code for compare functions for .sort() was found at w3schools
    let max = arraySorted[arraySorted.length-1];
    //Gets the last item of the array (-1 accounts for the fact that the arrays first item is at index 0)
    let min = Math.min(...array);
    //A better method to get the highest/lowest values from an array; using the destructuring assignment syntax I found at Medium
    return String(max) + " " + String(min);
    //Using the String() function to convert the value of an object into a string.
  }
  
  highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6")