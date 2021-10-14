
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

/// 렉시컬 스코프 recsical scope ///

/// 렉시컬 스코프란(Lexical Scope)란? 함수를 어디서 호출하는지가 아니라 어디에 선언하였는지에 따라 결정되는 것을 말한다 ///
/// code sequence, java script context ///  