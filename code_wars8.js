//In this kata, you are asked to square every digit of a number.    

function squareDigits(num){
      let array = num.toString().split('').map((num) => Number(num)**2)
        return Number(array.join(''));
    }