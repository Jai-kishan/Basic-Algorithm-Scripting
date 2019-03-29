// Basic Algorithm Scripting: Factorialize a Number

function factorialize(num) {
  var fact=1;
  for (var i=1; i<=num;i++){
    fact=fact*i;
  }
  return num=fact ;
}

factorialize(5);