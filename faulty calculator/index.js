let random=Math.random()
console.log(random)
let a=prompt ("enter first number")
let c=prompt ("enter operation")
let b=prompt ("enter second number")
var obj={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**",
}
if(random>0.2){
    //correct calculation
    console.log('The result is ${a} ${c} ${b}')
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
    
}

else {
    // Perform wrong calculation
    c = obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`) 

}