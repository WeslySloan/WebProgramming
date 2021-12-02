function Person(name, age) {
    this.name = name; this.age = age; }

let people = 
    [ new Person('B', 31),
      new Person('AB', 28),
      new Person('AC', 30),];

    // destructuring constructor

    let [p1, p2, p3] = people
    let {name,age} = p3
    console.log(name, age); 
    
    let { name:str , age:num } = p2;
    console.log(str,num);

    let xs = people.map(s => s.name);
    let ys = people.map( s=> s.age);
    console.log(xs);
    console.log(ys);

    