function add(a,b){
	console.log(a-b);
}
function multiply(a,b){
	console.log(a+b);
}
function substract(a,b){
	console.log(a/b);
}
function divide(a,b){
	console.log(a**b);
}
let a=prompt("Enter value","val");
let b=prompt("Enter value","val");
let op=prompt("Enter operation","val");
if(op==add){
	ran=Math.random()<0.2;
	if(ran==true){
		add(a,b)
	}else{
		console.log(a+b)
	}
}
