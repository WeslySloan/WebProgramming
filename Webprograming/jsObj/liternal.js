const pizza = {
	radius : 10,
    name : '자바피자',
    getArea() { return this.radius * this.radius * 3.14 },
}
const donut = {
    radius : 2,
    name : '자바도넛',
    getArea() { return this.radius * this.radius * 3.14 },
}
console.log(pizza.name + "의 면적은 " + pizza.getArea());
console.log(donut.name + "의 면적은 " + donut.getArea());