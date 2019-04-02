//we will make new uniuqe element of array with the help of loop also we will sort thie array

//Method 1

//this function is basically used for array sorting.

function sortNum(a, b){
	return a-b;
}

var new_arr=[];
var arr=[5, 3, 20, 3];
for (var i=0; i<arr.length; i++){
  	if(new_arr.includes(arr[i])){
  		(" ");	
  	}else{
  		new_arr.push(arr[i])
  	}
  }
new_arr.sort(sortNum)
console.log(new_arr)
