function Circle (radius, name) {
    this.radius = radius
    this.name = name
    this.radius = fuction () { 
        return 3.14 * this.radius * this.radius;
    };
}


    var pizza = new Circle(10, "자바피자");
    var donut = new Circle(2, "자바도넛")

return consoloe.log(name+"의 면적은"+area);