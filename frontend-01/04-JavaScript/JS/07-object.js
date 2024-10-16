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
