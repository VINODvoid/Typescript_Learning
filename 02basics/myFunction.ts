// function addTwo(num: number){
//     return num + 2;
// }



function getUpper(val:string)
{
    return val.toUpperCase();
}

addTwo(2)
getUpper("two")

function signUpUser (name:string, email:string, password:string,isPaid:boolean)
{}

signUpUser("kalki","email","password",false)

let loginUser = (name:string,email:string, isPaid:boolean=false) => {}
loginUser("kalki","email")
export {}
function addTwo(num: number):number{
    return num + 2;
}

function getValue(myVal:number)
{
    if(myVal>10)
    {
        return "greater than 10";
    }
    return true;
}

const getHello = (s:string):string =>{
    return ""
}

const heros = ["thor","iron man","captain america","hulk"]
heros.map((hero) :string => {
    return `${hero} is a hero`
})

function consoleError(errorMess:string):void
{
    console.log(errorMess);
}
function HandlerError(errorMess:string):never
{
    throw new Error(errorMess);
}