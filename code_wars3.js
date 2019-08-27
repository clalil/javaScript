//A Code Wars kata where the two smallest (positive) numbers of an array should be returned as a sum.

function sumTwoSmallestNumbers(numbers) { 
    let lowToHigh = numbers.sort(function(a, b) { 
    return a-b
    });
    //Filters items into lowest to highest number
    let first = lowToHigh[0];
    let second = lowToHigh[1];
    //Filters out the two lowest, positive numbers
    return first + second
  }
  
  sumTwoSmallestNumbers([5, 8, 12, 19, 22])