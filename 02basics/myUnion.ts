let score : number | string | boolean = 33;

score = 44;

score = true;

score = "Rajat";




type User1= {
    name: string;
    age: number;
    id: number;
}

type Admin = {
    UserName: string;
    id: number;
}

let kalki : User | Admin = {name: "Kalki", age: 23, id: 1};

kalki = {UserName: "Kalki", id: 2};

// function getDbId(id:number | string)
// {
//     // some api call
//     console.log(`DB Id is ${id}`);
// }
getDbId(33);
getDbId("33");

function getDbId(id: number | string)
{
    if(typeof id === "string")
    {
    id.toLowerCase();
    }
    else 
    {
        id.toFixed();
    }
}

// ? array
const data :number[] = [1,2,3,4,5];
const data1 :string[] = ["1","2","3","4","5"];

const data2 : (string | number)[] = [1,2,3,4,5,"1","2","3","4","5"];



let seatAllotment : "aisle" | "middle" | "window" = "aisle";
seatAllotment = "middle";
seatAllotment = "window";



