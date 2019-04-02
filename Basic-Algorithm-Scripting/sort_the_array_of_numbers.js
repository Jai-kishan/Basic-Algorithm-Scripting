function sortNum(a, b){
    console.log(a,b)
    return a-b;
}

var arr=[5, 3, 20, 3];
arr=arr.sort(sortNum);
console.log(arr)