const person={
  name: 'Nam'
};

person.age=22;

console.log(Object.getOwnPropertyDescriptor(person, 'name'));


const person2={
  firstName: 'noa',
  lastName: 'Han',

  // fullName은 접근자 함수로 구성된 접근자 프로퍼티
  // getter
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  // setter
  set fullName(name) {
    [this.firstName, this.lastName] = name.split(' ');
  }
};


// 접근자 프로퍼티를 통한 프로퍼티 값의 참조
// fullName에 값을 지정하면 setter함수가 호출됨
person2.fullName='bong-gu Che';
console.log(person2);
// fullName에 접근하면 getter 함수가 호출됨
console.log(person2.fullName);

let descriptor = Object.getOwnPropertyDescriptor(person2, 'fullName');
console.log(descriptor);


// 프로퍼티 정의
const person3={};

Object.defineProperty(person3, 'firstName', { // 한번에 하나의 프로퍼티만 정의 가능
  value: 'Eun-ho',
  writable: true,
  enumerable: true,
  configurable: true
});
Object.defineProperty(person3, 'lastName', {
  value: 'Do'
}); // 누락 시 undefined, false가 기본값

Object.defineProperties(person3, { //여러 개 정의 가능
  firstName: {
    value: 'Hamin',
    writable: true,
    enumerable: true,
    configurable: true
  },
  lastName:{
    value: 'Yu',
    writable: true,
    enumerable: true,
    configurable: true
  }
})


// 객체 확장 금지 : 프로퍼티 추가 금지
const person4={
  name:'Yu'
};
Object.preventExtensions(person4);
console.log(Object.isExtensible(person4)); // true

// 객체 밀봉 : 읽기 갱신만 가능
const person5 = {
  name:'Kim'
};
Object.seal(person5);
console.log(Object.isSealed(person5)); //true
person5.firstName='MinJeong'; // 무시 됨
person.name='Ning'; // 값 갱신은 가능
Object.defineProperty(person5, 'name', {configurable:true}); // 무시됨


//객체 동결 : 읽기만 가능
const person6 = {
  name:'Kim',
  adrress: {city :'Tokyo'}
};
Object.freeze(person6);
console.log(Object.isFrozen(person6)); //true
console.log(Object.isFrozen(person6.adrress)); //false --> 얕은 변경 방지이므로 중첩 객체 까지는 영향 x


// 불편 객체 : 재귀적으로 Object.freeze 매서드 호출
const person7 = {
  name:'Kim',
  adrress: {city :'Chuncheon'}
}

function deepFreeze(target){
  if (target && typeof target === 'object' && !Object.isFrozen(target)) {
    Object.freeze(target);
    Object.keys(target).forEach(key => deepFreezer(target[key]));
  }
  return target;
}

deepFreeze(person7);

console.log(Object.isFrozen(person7)); //true
console.log(Object.isFrozen(person7.adrress)); //true

