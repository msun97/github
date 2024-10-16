//산술 연산자
//이항 산술 연산자
5*4; // 20

//단항 산술 연산자
var x=1;
x++;
console.log(x); // 2 -> x값을 대체하는 암묵적 할당이 발생

var result;
//선할당 후증가
result=x++;
console.log(result, x); // 2, 3

//선증가 후할당
result=++x;
console.log(result, x); // 4, 4


//문자열 연결 연산자
'My name is' + 'Kim'; // My name is Kim
1+true; // 2 (불리언 타입의 ture를 1로 강제 변환)
1+null; // 1 (null을 0으로 강제 변환)

//할당 연산자
color='red';
x+=5; // x=x+5 9
x-=5; // x=x-5 4
x*=5; // x=x*5 20
x/=5; // x=x/5 4
x%=5; // x=x%5 0

//비교 연산자
3>5; // false
5=='5' //동등 비교는 타입 일치시킨 후 비교 true
5==='5' //일치 비교는 타입도 같고 값도 같은 경우에만 트루 해당 문은 false 빈환
NaN===NaN; //false
Number.isNaN(NaN); //Number.isNaN은 숫자가 NaN인지 확인하는 함수 해당 문은 true 반환
-0 === +0; //true
Object.is(-0, +0); //false
Object.is(NaN, NaN); //true

//삼항 조건 연산자
var result=score>=60?'pass':'fail';

//논리 연산자
false && "cat"; //false
true && "cat"; //"cat"
false || "cat"; // "cat"
true || "cat"; // true

//타입 연산자
typeof 'Hi'; //string

//지수 연산자 : 이항 연산자 중 우선순위가 가장 높다
(-5)**2; // 25

// 옵셔널 체이닝 연산자
var elem=null;
var value=elem?.vlaue;
console.log(value); // undefined