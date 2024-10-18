// 상속
function Circle(radius){
  this.radius=radius;
}
// getArea 메서드를 Circle의 prototype에 추가
Circle.prototype.getArea=function(){
  this.getArea=function(){
    return Math.PI*this.radius**2;
  };
}

const circle1=new circle(1);
const circle2=new circle(2); //각 circle1과 circle2는 Circle.prototype(부모 객체)로 부터 getArea 메서드를 상속 받음.