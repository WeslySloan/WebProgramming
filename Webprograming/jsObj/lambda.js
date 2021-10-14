
const pizza = {
	radius : 10,
    name : '자바피자',
    getArea : (obj) => obj.radius * obj.radius * 3.14,
}
const donut = {
    radius : 2,
    name : '자바도넛',
    getArea : (obj) => obj.radius * obj.radius * 3.14,
}
console.log(pizza.name + "의 면적은 " + pizza.getArea(pizza));
console.log(donut.name + "의 면적은 " + donut.getArea(donut));

//

var getArea = (circle) => {
    return circle.radius * circle.radius * 3.14
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

// 

function Circle(radius, name) {
    this.radius = radius;
    this.name = name;
    this.getArea = (circle) => {
        return circle.radius * circle.radius * 3.14
    }
}
var pizza = new Circle(10, "자바피자");
var donut = new Circle(2, "자바도넛");

console.log(pizza.name + "의 면적은 " + pizza.getArea(pizza));
console.log(donut.name + "의 면적은 " + donut.getArea(donut));