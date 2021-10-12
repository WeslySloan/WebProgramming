
function Circle(radius, name) {
    this.radius = radius
    this.name = name
    this.getArea = function() {
        return (this.radius ** 2) * 3.14
    }
}
function getArea(circle) {
    return (circle.radius ** 2) * 3.14
}
var pizza = new Circle(10, 'pizza')
var donut = new Circle(5, 'donut')
console.log(pizza.name + "의 면적은 " + pizza.getArea());
console.log(donut.name + "의 면적은 " + getArea(donut));

