
class Person {
    constructor(name) {
        this.name = name;
    }

    sayName() {
        console.log(this.name);
    }
}
var p1 = new Person("chf")
p1.sayName()
