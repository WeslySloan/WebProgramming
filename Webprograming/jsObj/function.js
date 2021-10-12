function getArea(circle) {
    return 3.14 * circle.radius * circle.radius 
}
var pizza = {
    radius:10,
    name: "자바피자"
}
var donut = {
    radius:2,
    name: "자바도넛"
}
console.log(pizza.name + "의 면적은 " + getArea(pizza));
console.log(donut.name + "의 면적은 " + getArea(donut));


////////// this 는 class 라는 키워드가 선언됫을떄 그 객채 안에서만 유효하다, this는 객체 method가 객체 자신을 지칭하기위해 쓰는 것 //////////


