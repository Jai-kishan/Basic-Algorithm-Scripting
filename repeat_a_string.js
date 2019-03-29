// var star="*";
// var num=3;
// var a = ""
// for(var i=0; i<num; i++){
//   a=a+star;
// }console.log(a);


function repeatStringNumTimes(str, num) {
  // repeat after me
  var collect_string="";
  for(var i=0; i<num; i++){
    collect_string=collect_string+str
  }
  return str=collect_string;
}

repeatStringNumTimes("abc", 3);