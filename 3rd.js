/* Promise::-----*/
const chd=require("readline-sync")
function test()
{
    return new Promise((resolve, reject)=>
    {
        var n=chd.questionInt("Enter your age: ")
        if(n>18)
        {
            setTimeout(()=>
            {
                resolve("You are eligible to vote")}
                ,2000)            
        }
        else{
           setTimeout(()=>
           {
            reject("You are not eligible to vote")}
            ,2000)
        }
    })
}
test().then
(
    value=>{console.log(value)},
    error=>{console.log(error)}
)