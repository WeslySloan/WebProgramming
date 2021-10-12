function Circle(radius, name) {
    this.radius = radius;
    this.name = name;
    this.getArea = function () {
        return  this.radius * this.radius * 3.14;
    };
}

var pizza = new Circle(10, "자바피자");
var donut = new Circle(2, "자바도넛");
console.log(pizza.name + "의 면적은 " + pizza.getArea());
console.log(donut.name + "의 면적은 " + donut.getArea());