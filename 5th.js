/*
Callback Hell:---
Nested callbacks
*/
function hello(a,b,chd)
{
    return new Promise((resolve, reject)=>
    {
        var c=a+b
        setTimeout(()=>
        {
            resolve(c)
        },2000);
    })
}
function bye(z, ambala)
{
    return new Promise((resolve, reject)=>
    {
        var ans=z-4
        setTimeout(()=>
        {
            resolve(ans)
        },2000);
    })
}
function hi(p){
    return new Promise((resolve, reject)=>
    {
        var result=p/2
        setTimeout(()=>
        {
            resolve(result)
        },2000);
    })
   
}
hello(12,3).then(
    value=>{
        console.log("Value is:",value); 
        bye(value).then(
            value=>{console.log("Substraction is:",value);
        hi(value).then(
            value=>console.log("Division is:",value)
        )
        })
    }    
)