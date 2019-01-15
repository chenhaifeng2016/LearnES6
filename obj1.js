let person = {
    name: "chf",
    sayName: function(){
        console.log(this.name)
    },

    sayName2: (name)=>{
        console.log(name)
    }
}
person.sayName()
person.sayName2("chf2")

//以下写法和以上相等
let obj = new Object()
obj.name = "chf"
obj.sayName = function(){
    console.log(this.name)
}
obj.sayName()
