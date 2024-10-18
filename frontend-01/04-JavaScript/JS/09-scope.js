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
// console.log(var4); //ReferenceError
// console.log(var5); //ReferenceError


function bar(){
  console.log('This is Global function');
}

function scope(){
  function bar(){
    console.log('This is Local function');
  }

  bar();
}


// 전역 범수 억제 방법
// 1. 즉시 실행 함수
(function(){
  var foo=10;
}());

// 2. 네임스페이스 객체 - 식별자 충돌 방지
var MYAPP = {}
MYAPP.name='Lee'
MYAPP.person={
  name:'kim',
  address: 'Seoul'
};

// 3. 모듈 패턴
var counter=(function(){
  //private 변수
  var num=0;

  //public 데이터, 메서드
  return{
    increase(){
      return ++num;
    },
    decrease(){
      return --num;
    }
  };
}());


// 내부 슬롯과 내부 메서드 : [[Environment]], [[FormalParameters]] / [[Call], [[Construct]]]
function foo(){}
foo(); // 일반적인 함수로 호출 : [[Call]]이 호출된다
new foo(); // 생성자 함수로 호출 : [[Construct]]가 호출된다


// scope-safe constructor pattern
function Circle(radius){
  if (!(this instanceof Circle)){
    return new Circle(radius);
    }
  this.radius = radius;
  this.getDiameter = function(){
    return 2*this.radius;
  };
}