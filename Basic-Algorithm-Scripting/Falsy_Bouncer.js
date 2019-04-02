// var st=[false, null, 0, NaN, "", undefined];
// var new_list=[false, null, 0, NaN, undefined, ""];
// for(var i=0; i<st.length; i++){
//     for(var j=0; j<new_list.length; j++){
//         if(st[i] === new_list[j] || Number.isNaN(new_list[j])){
//             new_list.splice(j,1)
//         }
//     }
// }
// console.log(new_list)



function bouncer(arr) {
  // Don't show a false ID to this bouncer.
	var find_list=[false, null, 0, NaN, "", undefined];
	for(var i=0; i<find_list.length; i++){
		for(var j=0; j<arr.length; j++){
	        if(find_list[i] === arr[j] || Number.isNaN(arr[j])){
	            arr.splice(j,1)
	        }
	    }
	}
  return arr;
}

console.log(bouncer([7, "ate", "", false, 9]));