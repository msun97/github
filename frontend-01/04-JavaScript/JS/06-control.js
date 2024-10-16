// 블록문
{
    var foo = 10;
}

// 제어문

var x=1;
if (x<10){
    x++;
}

//함수 선언문
function sum(a,b){
    return a+b;
}


//if 조건문
var num=2;
var kind;

if (num>0){
    kind='양수';
}
else {
    kind='음수';
}

console.log(kind);


// 삼항 조건 연산자

var kind = x>0 ? '양수' : '음수';
console.log(kind);


// if ... else if 문
if (num>0){
    kind='양수';
}
else if(nuum<0){
    kind='음수';
}
else{
    kind='영';
}

console.log(kind);


//삼항 조건 연산자

var kind = x ? (x > 0 ? '양수' : '음수') : '영';
console.log(kind);


//case문

var month = 11;
var monthName;

switch (month) {
    case 1 : monthName='January';
        break;
    case 2 : monthName='February';
        break;
    case 3 : monthName='March';
        break;
    case 4 : monthName='April';
        break;
    case 5 : monthName='May';
        break;
    case 6 : monthName='Jun';
        break;
    case 7 : monthName='July';
        break;
    case 8 : monthName='August';
        break;
    case 9 : monthName='September';
        break;
    case 10 : monthName='October';
        break;
    case 11 : monthName='November';
        break;
    case 12 : monthName='December';
        break;
    default: monthName='Inavaild month';
}

console.log(monthName);


// 반복문
for (var i=0; i<2; i++){
    console.log(i);
}

for (var i=1; i<=6; i++){
    for(var j=1; j<=6; j++){
        if (i + j === 6) console.log(`[${i}, ${j}]`);
    }
}

var count=0;
while (count<3){
    console.log(count);
    count++
    // 무한루프 탈출
    if (count===3) break;
}

var count=0;
do{
    console.log(count);
    count++;
} while(count<3);


//레이블문
foo:{
    console.log(1);
    break foo;
    console.log(2);
} 
console.log('Done!');

outer: for(var i=0; i<3; i++){
    for(var j=0; j<3; j++){
        // i + j === 3이면 outer라는 식별자가 붙은 레이블 for문 탈출
        if (i+j === 3) break outer;
        console.log(`inner [${i}, ${j}]`)
    };
}
console.log('Done!');


var words = 'Hello World!'
var search = 'l'
var index

for (var i=0; i<words.length; i++){
    if (words[i]===search) { //문자열은 유사 배열 겍체이므로 인덱스로 각 문자에 접근 가능
        index=i;
        console.log(i);
        break;
    }
}

var count=0;

for (var i=0; i<words.length; i++){
    if (words[i]!==search) continue;
    count++;
}
console.log(count);