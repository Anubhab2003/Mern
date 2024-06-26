// async function getData(){
//     return new Promise ((resolve,regret)=>{
//         setTimeout(()=>{
//             resolve(455)
//         },3500);
//     })
// }
async function getData(){
    let x=await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data=await x.text()//parsing data
    console.log(x)  
}
async function main(){
    console.log("Loading moduloe")
    console.log('do something');
    console.log('Load Data');
    let data=await getData();
    console.log(data);
    console.log('Process data');
    
    
    
    
}
main()