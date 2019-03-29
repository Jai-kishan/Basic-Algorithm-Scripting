var data=[1, 3, 5, 8, 9, 10];
for (var i=0; i<data.length; i++){
  if (data[i]%2===0){
    console.log(data[i])
    }else{
      console.log("wrong")
    }
}



// method 2
function findElement(arr, func) {
  for (var i = 0; i < arr.length; i++){
    if (func(arr[i])){
      return arr[i];
    }
  }
  
  return undefined;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);
