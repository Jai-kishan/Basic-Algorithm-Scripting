// Basic Algorithm Scripting: Find the Longest Word in a String
user=("The quick brown fox jumped over the lazy dog").split(" ")
var len=[];
for (var i=0; i<user.length; i++){
	len.push(user[i].length);
}
Math.max.apply(0,len)

/*
function findLongestWordLength(str) {
  var str=str.split(" ")
  var len=[];
  for( var i=0; i<str.length; i++){
    len.push(str[i].length);
  }
  return Math.max.apply(0,len);
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
*/
