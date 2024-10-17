var var1=1; //코드 가장 바깥에서 선언

if (true){
  var var2=2; // 코드 블록 내에서 선언
  if (true){
    var var3=3; // 중첩 코드 블록 내에서 선언
  }
}

function foo(){
  var var4=4; //함수 선언문 내에서 선언
  function bar(){
    var var5=5; //중첩 함수 내에서 선언
  }
}

console.log(var1);
console.log(var2);
console.log(var3);
console.log(var4); //ReferenceError
console.log(var5); //ReferenceError
