//In this kata, you are asked to square every digit of a number.    

function squareDigits(num){
    //I want to iterate through the numbers and exponent each one
      let array = num.toString().split('').map((num) => Number(num)**2)
      //In genereal; map((value, index, arrary) => Number(value, index, arrary)); However, in a different scenario the map(Number) would have worked becuase the Number function ignores everything but the first argument.
        return Number(array.join(''));
        //Because an array was returned by .map, this was one way to turn it back into all integers.
    }