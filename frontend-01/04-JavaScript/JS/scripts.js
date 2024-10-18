// 선택자

// document.getElementById("id");
// document.getElementsByClassName("class");
// document.getElementsByTagName("div");
// document.querySelector("#id");
// document.querySelector(".class");
// document.querySelector("tag");


//변수 let
let a = 1;
a=2;

// 상수 const
const b = 3;
// b = 4; //type error


// 함수
// function 함수명 (){
//   함수기능
// }

// 함수명(); // 호출


// 객체
const obj={
  left: '0',
  top: '0',
  backgroundColor: '$white'
}

//산술연산자
console.log(1+2); // 3
console.log(5%3); // 2


// // 조건문
// if (조건){
//   //조건이 참일 때 실행되는 코드
// } else {
//   // 조건이 거짓일 때 실행되는 코드
// }

let c = 1;
if(c===1){
  console.log('참');
} else{
  console.log('거짓');
}


// event
// doc이 준비 되면 실행
$(document).ready(function(){
  document.querySelector('button')
  .addEventListener("click", function(){
    console.log("클릭");
    // .box 숨기기
    $('.box').hide();
  });
})

