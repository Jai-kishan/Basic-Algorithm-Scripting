// Basic Algorithm Scripting: Confirm the Ending
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  if (str.substr(-target.length)===target){
    return true;
}else{
  return false;
}
}
confirmEnding("Bastian", "n");


// var str="Bastian";
// var target="n";
// if (str.substr(-target.length)===target){
// 	console.log("true");
// }else{
// 	console.log("false");
// }