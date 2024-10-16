// 함수 선언문
function add (x,y){
  return x+y;
}
// 호출
var result = add(2,5);

// 함수 리터럴 - 즉시 실행 함수(Immediately Invoked Function Expression, IIFE)
(function(a,b){
  return a*b;
}(3,5));

// 함수 표현식 - 변수에 함수 리터럴 할당
var add2 = function(x,y){
  return x+y;
}

// 화살표 함수
const add3 = (x,y) => x+y;

//재귀 함수
function countdown(n){
  if (n<0) return;
  console.log(n);
  countdown(n-1);
}
countdown(10);

//중첩함수
function outer(){
  var x=1;
  function inner(){
    var y=2;
    console.log(x+y);
  }
  inner();
}
outer();

//콜백 함수
function repeat(n, f){
  for(var i=0; i<n; i++){
    f(i);
  }  
}
var logAll=function(i){
  console.log(i);
};
var logOdd=function(i){
  if(i%2) console.log(i);
};

var count=0;
// 순수함수 : 동일한 인수가 전달되면 동일한 값 반환
function increase(n){
  return ++n;
}
//비순수함수 : 외부값에 의존하고 외부값을 변동 시키는 함수
function increase(){
  return ++count;
}

// 문재1 : 인자의 타입이 다를 수 있음
function add(x,y){
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw new TypeError('적절한 숫자를 입력하세요')
  }
  return x+y;
}

// 문제2 : 매개변수의 갯수가 다를 경우 - 기본값 설정
function add(x=0, y=0){
  return x+y;
}


//property
function square(number){
  return number * number;
}
console.log(Object.getOwnPropertyDescriptors(square));
console.dir(square); // 웹 콘솔 창에서 확인

// 1. argument : 전달된 인수에 대한 정보를 담고 있음 - 가변 인자 함수 구현 시 유용
function sum(){
  let res=0;
  for (let i=0; i<arguments.length; i++){  // arguments.length : 인자의 개수
    res += arguments[i];
  }
  return res;
}

// 2. caller : 함수 자신을 호출한 함수
// 3. length : 매개변수의 개수 (arguments 내부의 프로퍼티 length랑 다름)
// 4. name : 함수 이름 (식별자랑 다름)
// 5. prototype : constructor 만이 소유
(function(){}).hasOwnproperty('prototype'); // hasOwnproperty : 인수로 저날받은 프로퍼티 키가 객체 고유의 프로퍼티 키인 경우 true 반환 true 
({}).hasOwnproperty('prototype'); //false