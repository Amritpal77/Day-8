/*
Async And Await:-----
Async:-- 1. This keyword is used to turn a function declaration to async function.
2. An async function is a function that knows how to expect the possibility of await keyword being
used to invoke asynchronous code. It retuns a promise.
Await:-- 1. The await operator is used to wait for a promise. It can only be used inside an async
function with in regular Javascript code.
2. await can be put in front of an async promise based function to pause your code on that line
untill the promise fulfills, then return the resulting value. 
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
async function Reportcard()
{
    var addvalue=await hello(12,3)
    console.log("Sum is "+addvalue)
    var subtractive=await bye(addvalue)
    console.log("Substarction is:",subtractive)
    var divisionvalue=await hi(subtractive)
    console.log("Division is:",divisionvalue)
}

Reportcard()