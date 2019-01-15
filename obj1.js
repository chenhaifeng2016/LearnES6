let person = {
    name: "chf",
    sayName1: function(){
        console.log(this.name)
    },

    sayName2(){
        console.log(this.name)
    },

    sayName3: (name)=>{
        console.log(name)
    }
}
person.sayName1()
person.sayName2()
person.sayName3("chf2")

//以下写法和以上相等
let obj = new Object()
obj.name = "chf"
obj.sayName = function(){
    console.log(this.name)
}
obj.sayName()
