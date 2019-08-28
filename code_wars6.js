function accum(s) {
	let myLetters = s.split('')
	//Separates the string into single letters
  for(let i = 0; i < myLetters.length; i++) {
    //Loops through the array one by one
    myLetters[i] = myLetters[i].toUpperCase() + myLetters[i].repeat(i).toLowerCase()
    //For each turn, the first letter from myLetters is capitalized and then repeated [i] times as to match the initial expression variable [i] while turning all of the repeated letters into lowercase.
  }
  return myLetters.join('-')
  //finally the loop should return the new capitalized and incremented letters by joining them together (by using the .join method) with an additional '-' to separate them.
}

accum("HbideVbxncC")