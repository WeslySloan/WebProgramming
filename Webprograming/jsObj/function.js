function getArea() {
    return 3.14 * this.radius * this.radius 
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
