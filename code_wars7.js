//Kata: Get the middle character
//You are given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

//MDN warns that substr is a legacy method, however.
function getMiddle(s) {
    if (s.length % 2 != 0) {
    //Will return true if s.length is odd
      return s.substr((s.length/2), 1) 
    //Takes the middle number
     } else {
      return s.substr((s.length/2)-1, 2)
  //Returns if the strings length is even
  //Takes the two middle letters
    }
}