function squareDigits(num){
    //I want to iterate through the numbers and exponent each one
      return num.toString().split('').map((num) => Number(num)**2).join('');
      //In genereal; map((value, index, arrary) => Number(value, index, arrary)); Here however, it works becuase the Number function ignores everything but the first argument.
    }