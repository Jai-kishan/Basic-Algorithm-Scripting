// # Basic Algorithm Scripting: Return Largest Numbers in Arrays

var largestOfFour=([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])
var store=[];
for (var i=0; i<largestOfFour.length; i++){
  var a =largestOfFour[i];
  var large=Math.max.apply(0,a);
  store.push(large);

  }
console.log(store);



/*
function largestOfFour(arr) {
  // You can do this!
  var store=[]
  for (var i=0; i<arr.length; i++){
    var len=arr[i];
    store.push(Math.max.apply(0,len));  
}return arr=store;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
*/
