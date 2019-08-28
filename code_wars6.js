//My solution to the Code Wars kata: Mumbling

function accum(s) {
	let myLetters = s.split('')
  for(let i = 0; i < myLetters.length; i++) {
    myLetters[i] = myLetters[i].toUpperCase() + myLetters[i].repeat(i).toLowerCase()
  }
  return myLetters.join('-')
}

accum("HbideVbxncC")