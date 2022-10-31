/* Promise::-----*/

const chd=require("readline-sync")
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

test().then
(
    value=>{console.log(value)},
    error=>{console.log(error)}
)