

class CircleClass {
    constructor (radius, name) {
        this.radius = radius;
        this.name = name;
    }
    getArea() { return 3.14 * this.radius * this.radius; }
}
const pizza = new CircleClass(10, '자바피자');
const donut = new CircleClass(2, '자바도넛');
console.log(pizza.name + "의 면적은 " + pizza.getArea());
console.log(donut.name + "의 면적은 " + donut.getArea());

/// class 사용시 constructor 필수 ///
