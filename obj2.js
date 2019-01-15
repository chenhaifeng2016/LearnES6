
//对象定义2
function Person(name) {
    this.name = name;

}
Person.prototype.sayName = function(){
    console.log(this.name)
}

var p1 = new Person("chf1");
p1.sayName()


//写法2（简写法）
Person.prototype = {
    constructor : Person,
    getName: function() {
        console.log(this.name);
    }


}
var p2 = new Person("chf2");
p2.getName()
