function mutation(arr) {
	target=arr[0].toLowerCase();
	test=arr[1].toLowerCase();
	for(var i=0; i<test.length; i++){
		if(target.indexOf(test[i])<0){
			return(false)
		}
	}
	return (true)
}
console.log(mutation(["hello", "heello"]));

