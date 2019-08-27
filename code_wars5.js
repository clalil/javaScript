//Create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

function filter_list(l) {
    return l.filter(number => Math.round(number) === number);
    //I stumbled across a blog entry going through different Booleans for numeric values and found that Math.round() always returns numbers and === only returns true if both operands have the same type.
  }
  
  filter_list([1,'a','b',0,15])