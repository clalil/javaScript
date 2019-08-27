//A kata from CodeWars where you turn a string of numbers into a new string with the highest and lowest values returned.

function highAndLow(string){
    let array = string.split(' ').map(Number);
    let max = Math.max(...array);
    let min = Math.min(...array);
    return String(max) + " " + String(min);
    }
  
  highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6")
  