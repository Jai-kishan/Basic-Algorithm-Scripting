function chunkArrayInGroups(arr, size) {
	var hold=[];
	var result=[];
	for(var i=0; i<arr.length; i++){
		if(i%size !==size-1)
			hold.push(arr[i])
		else{
			hold.push(arr[i]);
			result.push(hold)
			hold=[];
		}
	}
	if(hold.length!==0)
		result.push(hold);
		return(result);
}
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2))
