let a=prompt("Enter a Number")
let b=prompt("Enter another Number")
if(isNaN(a)||isNaN(b)){
    throw SyntaxError("Sorry this is not Exceptable")
    
}
let s=parseInt(a)+parseInt(b);
//ERROR HANDLING
function main(){
    let x=2;
    try {
        console.log('sum is ',s*x);
        return true;
    } catch (error) {
        alert("Error detected")
        return false;
    }
    finally{
        console.log("DATABASE not responding")
    }
}
let z=main();
// Finally is written so that The code after return can  execute in a function.




