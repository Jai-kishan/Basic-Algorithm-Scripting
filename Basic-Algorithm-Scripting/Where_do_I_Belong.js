/*
function getIndexToIns(arr, num) {
  function sortNum(a, b){
  return a-b;
  }
  arr=arr.sort(sortNum);
  if(arr.includes(num)){
    var hold;
    for(var i=0; i<arr.length; i++){
      if (num>=arr[i]){
        hold=arr[i];
      }
      
    }
      num=arr.indexOf(hold)
      return num;

  }else{
    arr.push(num);
    var arr=arr.sort(sortNum);
    num=arr.indexOf(num)
    return (num)

  }
}
console.log(getIndexToIns([10, 20, 30, 40, 50], 30));
*/

//Method 2

function getIndexToIns(arr, num) {
  function sortNum(a, b){
  return a-b;
  }
  arr=arr.sort(sortNum);
  if(arr.includes(num)){
      num=arr.indexOf(num)
      return num;

  }else{
    arr.push(num);
    var arr=arr.sort(sortNum);
    num=arr.indexOf(num)
    return (num)

  }
}
console.log(getIndexToIns([40, 60], 50));