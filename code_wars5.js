//Create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

function filter_list(l) {
    return l.filter(number => Number.isInteger(number) ? l.push(number) : l.pop(number) );
    //Initially I tried to use the map method before realizing everything could be done with the .filter function
    //After reading up on the MDN site I realized that a very short syntax could be declared when naming each item using a local variable (like in |Ruby|)
    //Final test with multiple arrays is failing, trying to use Number.isInteger(method) as a conditional
  }
  
  filter_list([1,'a','b',0,15])