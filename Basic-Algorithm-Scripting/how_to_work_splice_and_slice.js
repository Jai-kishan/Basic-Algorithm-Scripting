//splice
var array=[1,2,3,4,5];
console.log(array.splice(2));

//slice
var array2=[1,2,3,4,5]
console.log(array2.slice(2));


console.log("----after-----");
console.log(array);
console.log(array2);




var array=[1,2,3,4,5];
console.log(array.splice(2));
// shows [3, 4, 5], returned removed item(s) as a new array object.
 
console.log(array);
// shows [1, 2], original array altered.
 
var array2=[6,7,8,9,0];
console.log(array2.splice(2,1));
// shows [8]
 
console.log(array2.splice(2,0));
//shows [] , as no item(s) removed.
 
console.log(array2);
// shows [6,7,9,0]