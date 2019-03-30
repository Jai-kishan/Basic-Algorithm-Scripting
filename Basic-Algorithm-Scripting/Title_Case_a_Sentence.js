// var str= "I'm a little tea pot".split(" ");
// var add="";
// for(var i=0; i<str.length; i++){
//  	add=add+str[i][0].toUpperCase()+str[i].slice(1)+" ";
// }
// console.log(add)



// var str="sHoRt AnD sToUt".toLowerCase().split(" ");
// var add="";
// for(var i=0; i<str.length; i++){
//  	add=add+str[i][0].toUpperCase()+str[i].slice(1)+" ";
// }
// console.log(add)


// var str ="HERE IS MY HANDLE HERE IS MY SPOUT".toLowerCase().split(" ");
// var add="";
// for(var i=0; i<str.length; i++){
//  	add=add+str[i][0].toUpperCase()+str[i].slice(1)+" ";
// }
// console.log(add)


function titleCase(str) {
	str=str.toLowerCase().split(" ")
	var add="";
	for(var i=0; i<str.length; i++){
 	add=add+str[i][0].toUpperCase()+str[i].slice(1)+" ";
	}
	return add;
}

console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));


