const User= {
    name: 'Rajat',
    age: 25,
    country: 'India'
}

// function createUser({name:string, isPaid:boolean})
// {

// }

// createUser({name: 'Rajat', isPaid: true})

// function createCourse ():{}
// {
//     return {}
// }


type User ={
    name: string,
    email:string,
    isActive:boolean
}

function CreateUser(user: User)
{
    return {name:"",email:"",isActive:false}
}
CreateUser({name: 'Rajat', email: '', isActive: false})


type str = {
    a: string;
    b: string;
}

const create = (val:str) => {
    console.log(val.a);
    console.log(val.b);
}




type UserInputSanitizedString = string;
 
function sanitizeInput(str: string): UserInputSanitizedString {
  return sanitize(str);
}
 
// Create a sanitized input
let userInput = sanitizeInput(getInput());
 
// Can still be re-assigned with a string though
userInput = "new input";






type Var  = {
    readonly _id :string;
    name : string;
    email:string;
    isActive:boolean;
}



let letUser : Var = {
    _id: "123",
    name: "Rajat",
    email: "gfgf",
    isActive: true
}

letUser._id = "1234"
export {}

function sanitize(str: string): string {
    throw new Error("Function not implemented.")
}
function getInput(): string {
    throw new Error("Function not implemented.")
}

