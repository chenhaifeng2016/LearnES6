var person = {
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