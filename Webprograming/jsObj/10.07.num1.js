


fuction Circle (radius, name) {
    this.radius = radius
    this.name = name
    this.radius = fuction () { 
        return 3.14 * this.radius * this.radius;
    };
}


    var pizza = new Circle(10, "자바피자");
    var donut = new Circle(2, "자바도넛")

    return consoloe.log(name+"의 면적은"+area);
}

//

2번문제

fuction getArea() {
    return 3.14 * this.radius * this.radius;
}

var pizza = {
    radius:10;
    name: "자바피자"
}

var donut = {
    radius:2;
    name: "자바도넛"
}
console.log(name + "의 면적은 " + pizza.getArea());
console.log(name + "의 면적은 " + donut.getArea());

3번문제


function Circle(radius, name) {
    this.radius = radius;
    this.name = name;
    this.getArea = function () {
        return 3.14 * this.radius * this.radius;
    };
}

var pizza = new Circle(10, "자바피자");
var donut = new Circle(2, "자바도넛");
console.log(pizza.name + "의 면적은 " + pizza.getArea());
console.log(donut.name + "의 면적은 " + donut.getArea());
