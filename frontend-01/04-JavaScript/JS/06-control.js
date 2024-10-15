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