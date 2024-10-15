// 숫자 타입 
var integer = 10; // 정수
var double = 10.12; // 실수
var negative = -20; // 음의 정수

// 특이값
console.log(10/0); // Infinity
console.log(10/-0); // -Infinity
console.log(1*'string'); // NaN


// 문자열 타입
var stirng;
string='문자열'; // 가장 일반적인 표현법
string="문자열";
string=`문자열`;
// string=hello; // hello를 식별자로 인식

// 템플릿 리터럴
var template = `<ul>
 <li><a href="#">Home</a></li>
</ul>`;
console.log(template);

var first = `miseon`;
var last = `kim`;
console.log(`My name is ${first} ${last}.`)

// 불리언 타입 : true, false 조건문에서 자주 사용

// 심벌
// 값 생성
var key = Symbol('key');
console.log(typeof key); //symbol 반환

//객체 생성
var obj = {};
console.log(obj)
// 충돌 위험이 없는 유일무이한 값인 심벌을 프로퍼티 키로 사용한다


//typeof
var foo;
console.log(typeof foo); // undefined

foo=3;
console.log(typeof foo); //number

foo='Hello';
console.log(typeof foo); //string

foo=true;
console.log(typeof foo); // boolean

foo=null;
console.log(typeof foo); //object

foo=Symbol();
console.log(typeof foo); //symbol

foo={};
console.log(typeof foo); //object (객체)
