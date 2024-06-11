n=[1,66,69]
a=[4,7,15]
z=n.toString()
n.push(44)
n.shift()
n.unshift(45)
console.log(typeof n)
console.log(n)
console.log(a.concat(n))
console.log(a.sort())
//NEXT
t=[1,2,3,4,5,6]
function product(a,b){
    return a*b
}
console.log(t.reduce(product))
let l=Array.from("Anubhab")
console.log(l)
