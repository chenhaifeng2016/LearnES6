
let [x, y=1] = [1, 2]
let {a, b=1} = {a:1, b:2}


function test1(x, y=2) {
    console.log(x, y);
}
test1(1, 1)

function test2({x=1, y=2}) {
    console.log(x, y);
}
test2({x:1, y:1})

//后面的括号表示返回一个对象，从输出就可以看出来
const test3 = ({x=1, y=2}) => ({x, y})
console.log( test3({x:1, y:1}) )



