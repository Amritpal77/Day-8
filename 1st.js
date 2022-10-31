/* Promise::-----*/

const chd=require("readline-sync")
/*
const mypromise=new Promise((resolve, reject)=>
{
    var n=chd.questionInt("Enter your age: ")
    if(n>18)
    {
        resolve("You are eligible to vote")
    }
    else{
        reject("Not Allowed")              // This Whole is Producing code
    }
})

mypromise.then(
    value=>{console.log(value)},        // Consuming Code
    error=>{console.log(console)}
).finally
{
    console.log("Program End")
}
*/
function test()
{
    return new Promise((resolve, reject)=>
    {
        var n=chd.questionInt("Enter your age: ")
        if(n>18)
        {
            resolve("You are eligible to vote")
        }
        else{
            reject("You are not eligible to vote")
        }
    })
}

var mypromise=test()

mypromise.then
(
    value=>{console.log(value)},
    error=>{console.log(error)}
)