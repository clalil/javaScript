//Kata: Get the middle character
//You are given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

function getMiddle(s) {
    if (s.length % 2 != 0) {
    //Will return true if s.length is odd
      return s.substring(((s.length/2)), ((s.length/2)+1)) 
    //Replaced substr w. substring as recommended by MDN, had to change code
    //Restricts substring to only include the middle letter
    //i.e. 'tesla' would return a '
     } else {
      return s.substring(((s.length/2)-1), (s.length/2)+1)
  //Returns if the strings length is even
  //Takes the two middle letters, i.e. 'saab' would be 'aa'
    }
}