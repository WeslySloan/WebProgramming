class Class {
    Circle(radius, name) {
        this.radius = radius;
        this.name = name;
    };
    getArea() { return this.radius * this.radius * 3.14 };
}
const pizza = new Class(10, "자바피자");
console.log(pizza.name + "의 면적은 " + pizza.getArea());
const donut = new Class(2, "자바도넛");
console.log(donut.name + "의 면적은 " + donut.getArea());