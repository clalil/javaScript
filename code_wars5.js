//Create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

function filter_list(l) {
    return l.filter(number => Math.round(number) === number);
  }
  
  filter_list([1,2,'aasf','1','123',123])