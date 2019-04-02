function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  	var new_arr=arr2;
	var first=(new_arr.splice(n));
  	for (var i=0; i<arr1.length; i++){
		new_arr.push(arr1[i])
	}
	for (var i=0; i<first.length; i++){
		new_arr.push(first[i]-(new_arr))
	}
  return new_arr;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));



function frankenSplice(arr1, arr2, n) {
  var xyz =arr2.slice(0,arr2.length);
	var first=(xyz.splice(n));
  	for (var i=0; i<arr1.length; i++){
		xyz.push(arr1[i]);
	}
	for (var i=0; i<first.length; i++){
		xyz.push(first[i]);
	}

  return xyz;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);