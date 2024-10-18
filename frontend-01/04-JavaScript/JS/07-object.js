// 객체 리터럴 : 하나의 객체만 생성

var person = {
  name: 'Lee',
  sayHello: function(){
    console.log(`Hello! My name is ${this.name}`) // 이때 this 키워드는 참조변수(객체 자신을 가리킴) 
    // 축약 표현으로 sayHello(){} 도 가능
  }
};

var x=1;
var y=2;

var obj={x,y}; // 변수 이름과 프로퍼티 키가 동일하면 키 생략 가능


var prefix='prop';
var i=0;

var obj={};

obj[prefix+'-'+i++]=i;
obj[prefix+'-'+i++]=i;
obj[prefix+'-'+i++]=i;

console.log(obj);

//생성자 함수
const person=new Object(); // 빈 객체 생성
person.name='Jung';
person.sayHello=function(){
  console.log(`Hello! My name is ${this.name}`);
}; // 생성자 함수로 생성된 person의 객체는 인스턴스라고 함

const strObj = new String('Pham')
const numObj = new Number(123);
const boolObj = new Boolean(true);
const func = new Function('x', 'return x*x')
const arr = new Array(1,2,3);
const regEXP = new RegExp(/ab+c/i); //정규 표현식
const date = new Date();

// 중복 되는 형식도 생성 가능
function Circle(radius){
  this.radius=radius; // this. 는 자기 참조 변수
  this.getDiameter= function(){
    return 2 * this.radius;
  };
}

const circle1=new Circle(5);
const circle2=new Circle(10);


// 접근법 
console.log(person.name);
console.log(person['name']);


// 동적 생성 및 삭제

var asepa={
  member: 'karina'
}

asepa.songs='up'; //프로퍼티키 동적할당
delete asepa.songs; //프로퍼티키 삭제


// 복사
const o={x:{y:1}};

// 얕은 복사
const c1 = { ... o };
console.log(c1 === o ); //false
console.log(c1.x===o.x); //true

//깊은 복사
const _ = require('lodash');
const c2 = _.cloneDeep(o);
console.log(c2===o);
