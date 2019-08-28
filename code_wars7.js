//Kata: Get the middle character
//You are given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

function getMiddle(s) {
    if (s.length % 2 != 0) {
      return s.substring(((s.length/2)), ((s.length/2)+1)) 
     } else {
      return s.substring(((s.length/2)-1), (s.length/2)+1)
    }
}