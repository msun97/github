// 변수는 하나의 값을 지정

//var
var userId = 1; // 변수 선언 및 값 할당
var userName = 'Lee';

// 객체나 배열구조 사용하여 여러 값 지정 가능

var user = { id: 1, name: 'Lee'};
var users = [
  {id: 1, name:'Lee'},
  {id: 2, name:'Kim'},
]

var result = 10+20;
console.log(result);

console.log(score);
score=80;
var score;
console.log(score);

//var는 중복 선언 허용
var score=70;
var score; //초기화 문이 없는 선언은 무시 됨

// let
let b = 1; // 같은 스코프 내에서 재선언 금지
b=2; // 재할당은 가능
{let b=2;} // 코드 블럭이면 지역 함수가 됨 

console.log(c); //Error
// let은 선언 단계와 초기화 단계가 분리. 초기화 단계는 선언문에 도달하였을 때 실행됨 
let c; 
console.log(c); //undefined
c=3;
console.log(c); //

// 상수
const O = 1; //같은 스코프 내에서 재선언 금지 
const A ={};
A.one=1; //객체는 변경 가능
// const e; // const는 무조건 선언과 동시에 초기화 필요
// const는 스네이크 케이스와 대문자로 표기 (ex. TAX_RATE)