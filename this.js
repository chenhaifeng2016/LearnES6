
const p1 = {
    name: "chf",
    getName() {
        console.log(this);
    }
}
p1.getName();

const p2 = {
    name:"chf",
    getName:()=>{console.log(this);}
}
p2.getName();
