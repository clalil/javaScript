//A Code Wars kata where the two smallest (positive) numbers of an array should be returned as a sum.

function sumTwoSmallestNumbers(numbers) { 
    let lowToHigh = numbers.sort(function(a, b) { 
    return a-b
    });
    //Filters items into lowest to highest number
    return lowToHigh[0] + lowToHigh[1]
  }
  
  sumTwoSmallestNumbers([5, 8, 12, 19, 22])