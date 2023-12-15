// const User :(string| number)[] = [1,"cg"]
let User : [string, number] = ["cg", 1];

User = ["cg", 1];

//?  User = [1,"67"] cannot be done as the order is different


let rgb : [number, number, number] = [255, 255, 255];

rgb = [0, 0, 0];
// rgb= [true, false, true];  

type myUser = [number , string];
const newUser:myUser =[112,"example@gmail.com"];

newUser[1] = "bye@example.com";












export {}
