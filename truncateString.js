function truncateString(str, num) {
  // Clear out that junk in your trunk
  var dot="...";
  if (str.length <= num){
    return str
  }else{
    var hold=str.slice(0,num)
    var result=hold+dot;
    return str=result;
  }
  
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);